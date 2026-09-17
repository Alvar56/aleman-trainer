import React, { useEffect, useMemo, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import { pickGenderNouns, recordGender, recordCard } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { cobrar } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun, guardarParcial } from '../lib/leaderboard.js';
import { getSettings } from '../lib/settings.js';

const ARTS = [
  { a: 'der', color: 'der' },
  { a: 'die', color: 'die' },
  { a: 'das', color: 'das' }
];

export default function GenderGame({ onExit, onFinish, nivel = 'all' }) {
  const size = getSettings().sessionSize || 15;
  const nouns = useMemo(() => pickGenderNouns(Math.max(size, 15), nivel), [nivel]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const results = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  const started = useRef(Date.now());
  const advancing = useRef(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  if (!nouns.length) {
    return (
      <div className="card center stack">
        <p>No hay sustantivos disponibles.</p>
        <button className="btn-ghost" onClick={onExit}>Volver</button>
      </div>
    );
  }

  const cur = nouns[idx];

  function choose(art) {
    if (advancing.current || picked) return;
    const ok = art === cur.article;
    setPicked(art);
    recordGender(cur.noun, ok);
    // Y ademas en la tarjeta de la que salio, para que el juego cuente en el
    // porcentaje de su tema. Antes solo apuntaba en el almacen del genero:
    // podias jugar una hora y el mazo seguia igual.
    if (cur.deckId && cur.cardDe) recordCard(cur.deckId, cur.cardDe, ok);
    monedas.current += cobrar(results.current, ok);
    results.current.push({ noun: cur, ok });
    advancing.current = true;
    // Al fallar se deja la solución más tiempo en pantalla para poder leerla.
    timer.current = setTimeout(() => {
      advancing.current = false;
      if (idx + 1 < nouns.length) {
        setIdx(idx + 1);
        setPicked(null);
      } else {
        finish();
      }
    }, ok ? 700 : 3000);
  }

  // Permite saltar la espera del fallo sin esperar los 3 s.
  function skipWait() {
    if (!picked || !advancing.current) return;
    clearTimeout(timer.current);
    advancing.current = false;
    if (idx + 1 < nouns.length) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      finish();
    }
  }

  // Una tanda de der/die/das mezcla palabras de muchos mazos. Para que la
  // SEGUNDA barra de cada tema (el acierto reciente) se entere, se guarda un
  // apunte por mazo con lo que has hecho de ESE mazo, y otro para la lección
  // entera, que es la que mira la pantalla de la Lektion.
  function repartirPorMazo(res) {
    const porMazo = new Map();
    for (const r of res) {
      const id = r.noun?.deckId;
      if (!id) continue;
      // El Set es imprescindible: en los mazos que no son del libro (tiere,
      // wetter…) la sustitución no cambia nada y el destino salía repetido, o
      // sea que esa palabra contaba dos veces.
      const destinos = new Set([id, id.replace(/^(kb-.+)-w\d+$/, '$1-all')]);
      for (const destino of destinos) {
        if (!porMazo.has(destino)) porMazo.set(destino, { correct: 0, total: 0 });
        const c = porMazo.get(destino);
        c.total += 1;
        if (r.ok) c.correct += 1;
      }
    }
    for (const [id, c] of porMazo) {
      guardarParcial({
        topicId: 'vocab:' + id,
        topicName: 'der/die/das',
        mode: 'gender',
        game: 'gender',
        correct: c.correct,
        total: c.total,
        accuracy: c.total ? Math.round((c.correct / c.total) * 100) / 100 : 0,
        xp: 0
      });
    }
  }

  function finish() {
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    const correct = results.current.filter((r) => r.ok).length;
    const total = results.current.length;
    const acc = total ? correct / total : 0;
    let xp = results.current.reduce((s, r) => s + (r.ok ? 10 : 2), 0);
    if (acc >= 0.9) xp += 5;
    bumpSessions();
    const streak = recordActivity(xp);
    saveRun({ topicId: 'vocab:gender', topicName: 'der/die/das', mode: 'gender', game: 'gender', correct, total, accuracy: Math.round(acc * 100) / 100, seconds, xp });
    repartirPorMazo(results.current);
    onFinish({
      deck: { id: 'gender', name: 'der / die / das', emoji: '🎯' },
      mode: 'gender',
      correct,
      total,
      seconds,
      xp,
      streak,
      monedas: monedas.current,
      missed: results.current.filter((r) => !r.ok).map((r) => ({ de: r.noun.article + ' ' + r.noun.noun, es: r.noun.es }))
    });
  }

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir">✕</button>
        <div className="bar"><span style={{ width: ((idx + (picked ? 1 : 0)) / nouns.length) * 100 + '%' }} /></div>
        <span className="timer">{idx + 1}/{nouns.length}</span>
      </div>

      <div className="prompt-label" style={{ marginBottom: 6 }}>{t('vs.genderQ')}</div>
      <div className="fc-wrap">
        <div className="gender-word">
          <span className="gw-noun">{cur.noun}</span>
          <span className="gw-es">{cur.es}</span>
        </div>

        <div className="gender-row">
          {ARTS.map(({ a, color }) => {
            let cls = 'gender-btn ' + color;
            if (picked) {
              if (a === cur.article) cls += ' correct';
              else if (a === picked) cls += ' wrong';
              else cls += ' dim';
            }
            return (
              <button key={a} className={cls} disabled={!!picked} onClick={() => choose(a)}>
                {a}
              </button>
            );
          })}
        </div>

        {picked && picked !== cur.article && (
          <div className="gender-fix">
            <div className="gf-line">
              Es <strong className={'gf-art ' + cur.article}>{cur.article}</strong>{' '}
              <strong>{cur.noun}</strong>
            </div>
            <div className="gf-es">{cur.es}</div>
            <button className="btn-ghost btn-sm" onClick={skipWait}>Siguiente →</button>
          </div>
        )}
      </div>
    </div>
  );
}
