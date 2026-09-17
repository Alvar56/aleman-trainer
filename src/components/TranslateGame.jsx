import React, { useEffect, useMemo, useRef, useState } from 'react';
import { t, pick } from '../lib/i18n.js';
import { elegirFrases, corregir, pistas as pistasDe, apuntar, xpDe } from '../lib/uebersetzen.js';
import { explainTranslation } from '../lib/ai.js';
import { aiAvailable } from '../lib/settings.js';
import { recordActivity } from '../lib/streak.js';
import { ganar, monedasConPistas } from '../lib/monedas.js';
import { playAudio } from '../lib/audio.js';
import { bumpSessions, recordAnswer } from '../lib/progress.js';
import { saveRun, guardarParcial } from '../lib/leaderboard.js';
import { getSettings } from '../lib/settings.js';

// Traducir frases del libro en las dos direcciones. Puedes pedir pistas de una
// en una antes de contestar, y al corregir la IA te explica en qué has fallado.
export default function TranslateGame({ onExit, onFinish, lektionId = null, dir = 'mix', nivel = 'all' }) {
  const cuantas = getSettings().sessionSize || 10;
  const frases = useMemo(
    () => elegirFrases(Math.max(cuantas, 8), { lektionId, direccion: dir, nivel }),
    [lektionId, dir, nivel]
  );
  const [idx, setIdx] = useState(0);
  const [texto, setTexto] = useState('');
  const [nPistas, setNPistas] = useState(0);
  const [ganadas, setGanadas] = useState(0);
  const [fallo, setFallo] = useState(null); // resultado de corregir, o null
  const [explicacion, setExplicacion] = useState(null);
  const [pidiendo, setPidiendo] = useState(false);
  const resultados = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  const empezado = useRef(Date.now());
  const inputRef = useRef(null);
  const aiOn = aiAvailable();

  useEffect(() => {
    inputRef.current?.focus();
  }, [idx]);

  if (!frases.length) {
    return (
      <div className="card center stack">
        <p>{t('ueb.vacio')}</p>
        <button className="btn-ghost" onClick={onExit}>{t('back')}</button>
      </div>
    );
  }

  const cur = frases[idx];
  const origen = cur.dir === 'de-es' ? cur.de : cur.es;
  const buena = cur.dir === 'de-es' ? cur.es : cur.de;
  const listaPistas = pistasDe(cur);
  const corregido = fallo !== null;

  function comprobar() {
    if (corregido || !texto.trim()) return;
    const r = corregir(texto, buena);
    setFallo(r);
    apuntar(cur.de, r.estado === 'bien');
    // Las frases que salen de una regla suman también en Gramática. Las de
    // Kommunikation no traen concepto: allí el porcentaje va por funciones
    // completadas, no por aciertos sueltos, y mezclarlo mentiría.
    if (cur.conceptId) recordAnswer(cur.conceptId, r.estado === 'bien');
    // Mismo sistema que el ahorcado: dos monedas la frase, y menos segun las
    // pistas que hayas gastado. 'casi' y 'orden' cuentan como una pista de mas,
    // porque la has entendido pero te ha fallado la forma.
    const castigo = r.estado === 'bien' ? 0 : 1;
    const premio = r.estado === 'mal' || r.estado === 'vacio'
      ? 0
      : monedasConPistas(nPistas + castigo);
    playAudio(premio > 0);
    if (premio > 0) ganar(premio);
    monedas.current += premio;
    setGanadas(premio);
    resultados.current.push({ frase: cur, tuya: texto.trim(), estado: r.estado, pistas: nPistas });
  }

  async function porQue() {
    if (pidiendo || explicacion) return;
    setPidiendo(true);
    try {
      setExplicacion(
        await explainTranslation({
          origen,
          buena,
          tuya: texto.trim(),
          direccion: cur.dir
        })
      );
    } catch (e) {
      setExplicacion({ error: e.message });
    } finally {
      setPidiendo(false);
    }
  }

  function siguiente() {
    if (idx + 1 < frases.length) {
      setIdx(idx + 1);
      setTexto('');
      setNPistas(0);
      setGanadas(0);
      setFallo(null);
      setExplicacion(null);
    } else {
      terminar();
    }
  }

  // Las frases de una tanda salen de lecciones distintas. Para que la SEGUNDA
  // barra de cada tema de Gramática se entere, se guarda un apunte por lección
  // con lo que has hecho de ESA lección. Las frases de Kommunikation no traen
  // concepto y se quedan fuera: allí el porcentaje va por funciones completas.
  function repartirPorLeccion(res) {
    const porTema = new Map();
    for (const r of res) {
      const cid = r.frase?.conceptId;
      if (!cid) continue;
      const topicId = 'kb-' + String(cid).split(':')[0];
      if (!porTema.has(topicId)) porTema.set(topicId, { correct: 0, total: 0 });
      const c = porTema.get(topicId);
      c.total += 1;
      if (r.estado === 'bien') c.correct += 1;
    }
    for (const [topicId, c] of porTema) {
      guardarParcial({
        topicId,
        topicName: 'Übersetzen',
        mode: 'uebersetzen',
        game: 'uebersetzen',
        correct: c.correct,
        total: c.total,
        accuracy: c.total ? Math.round((c.correct / c.total) * 100) / 100 : 0,
        xp: 0
      });
    }
  }

  function terminar() {
    const seconds = Math.max(1, Math.round((Date.now() - empezado.current) / 1000));
    const bien = resultados.current.filter((r) => r.estado === 'bien').length;
    const total = resultados.current.length;
    const acc = total ? bien / total : 0;
    const xp = resultados.current.reduce((s, r) => s + xpDe(r.estado, r.pistas), 0);
    bumpSessions();
    const streak = recordActivity(xp);
    saveRun({
      topicId: 'komm:uebersetzen',
      topicName: 'Übersetzen',
      mode: 'uebersetzen',
      game: 'uebersetzen',
      correct: bien,
      total,
      accuracy: Math.round(acc * 100) / 100,
      seconds,
      xp
    });
    repartirPorLeccion(resultados.current);
    onFinish({
      deck: { id: 'uebersetzen', name: t('ueb.title'), emoji: '🔁' },
      mode: 'uebersetzen',
      correct: bien,
      total,
      seconds,
      xp,
      streak,
      monedas: monedas.current,
      missed: resultados.current
        .filter((r) => r.estado !== 'bien')
        .map((r) => ({
          de: r.frase.dir === 'de-es' ? r.frase.de : r.frase.es,
          es: r.frase.dir === 'de-es' ? r.frase.es : r.frase.de
        }))
    });
  }

  const clasesCaja = {
    bien: ' bien',
    casi: ' casi',
    orden: ' casi',
    mal: ' mal',
    vacio: ' mal'
  };

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title={t('ses.exit')}>✕</button>
        <div className="bar">
          <span style={{ width: ((idx + (corregido ? 1 : 0)) / frases.length) * 100 + '%' }} />
        </div>
        <span className="timer">{idx + 1}/{frases.length}</span>
      </div>

      <div className="fc-wrap">
        <div className="ueb-dir">
          {cur.dir === 'de-es' ? t('ueb.deEs') : t('ueb.esDe')}
          {cur.de_donde && <span className="ueb-fuente"> · {cur.de_donde}</span>}
        </div>

        <div className="ueb-origen">{origen}</div>

        {/* Las pistas se piden de una en una y no invalidan el acierto: solo
            cuentan menos puntos. */}
        {!corregido && (
          <div className="ueb-pistas">
            {listaPistas.slice(0, nPistas).map((p, i) => (
              <div className="ueb-pista" key={i}>
                <span className="up-et">{t('ueb.pista' + (i + 1))}</span>
                <span className="up-tx">{p.texto}</span>
              </div>
            ))}
            {nPistas < listaPistas.length && (
              <button className="btn-ghost btn-sm" onClick={() => setNPistas(nPistas + 1)}>
                💡 {t('ueb.pedirPista', { n: listaPistas.length - nPistas })}
              </button>
            )}
          </div>
        )}

        <textarea
          ref={inputRef}
          className={'ueb-caja' + (corregido ? clasesCaja[fallo.estado] : '')}
          rows={2}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              corregido ? siguiente() : comprobar();
            }
          }}
          placeholder={cur.dir === 'de-es' ? t('ueb.phEs') : t('ueb.phDe')}
          disabled={corregido}
        />

        {corregido && (
          <div className="ueb-resultado">
            <div className={'ueb-veredicto ' + fallo.estado}>
              {fallo.estado === 'bien' && '✅ ' + t('ueb.bien')}
              {fallo.estado === 'casi' && '🟡 ' + t('ueb.casi')}
              {fallo.estado === 'orden' && '🟡 ' + t('ueb.orden')}
              {(fallo.estado === 'mal' || fallo.estado === 'vacio') && '❌ ' + t('ueb.mal')}
            </div>
            {/* Que se vea lo que ha costado pedir pistas, no solo el veredicto. */}
            {ganadas > 0 && (
              <p className="muted" style={{ fontSize: '0.84rem', margin: '4px 0 0' }}>
                {'🪙 +' + ganadas}
                {nPistas > 0 ? ' · ' + nPistas + (nPistas > 1 ? ' pistas' : ' pista') : ''}
              </p>
            )}
            {fallo.estado !== 'bien' && (
              <div className="ueb-buena">
                <span className="ub-et">{t('ueb.correcta')}</span>
                <span className="ub-tx">{buena}</span>
              </div>
            )}

            {fallo.estado !== 'bien' && aiOn && !explicacion && (
              <button className="btn-ghost btn-sm" onClick={porQue} disabled={pidiendo}>
                {pidiendo ? t('ueb.pensando') : '🦊 ' + t('ueb.porQue')}
              </button>
            )}

            {explicacion && (
              <div className="ueb-explica">
                {explicacion.error ? (
                  <p style={{ color: 'var(--bad)', fontSize: '0.85rem' }}>{explicacion.error}</p>
                ) : (
                  <>
                    <p className="ue-resumen">{explicacion.resumen}</p>
                    {explicacion.fallos?.length > 0 && (
                      <ul className="ue-fallos">
                        {explicacion.fallos.map((f, i) => (
                          <li key={i}>
                            <span className="falsch">{f.tuyo}</span>
                            <span className="pfeil">→</span>
                            <span className="richtig">{f.bueno}</span>
                            {f.porque && <span className="ue-por"> {f.porque}</span>}
                          </li>
                        ))}
                      </ul>
                    )}
                    {explicacion.consejo && <p className="ue-consejo">💡 {explicacion.consejo}</p>}
                  </>
                )}
              </div>
            )}
          </div>
        )}

        <button
          className="btn-primary"
          style={{ width: '100%', marginTop: 14 }}
          onClick={corregido ? siguiente : comprobar}
          disabled={!corregido && !texto.trim()}
        >
          {corregido
            ? idx + 1 < frases.length
              ? t('ueb.siguiente')
              : t('ueb.terminar')
            : t('ses.check')}
        </button>

        {!corregido && (
          <p className="muted" style={{ fontSize: '0.76rem', marginTop: 8, textAlign: 'center' }}>
            {pick('No hace falta clavar tildes ni puntuación.', 'Accents and punctuation do not have to be exact.')}
          </p>
        )}
      </div>
    </div>
  );
}
