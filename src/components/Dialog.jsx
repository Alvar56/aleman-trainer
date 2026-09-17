import React, { useState, useEffect, useRef } from 'react';
import { t } from '../lib/i18n.js';
import Escuchar from './Escuchar.jsx';
import { hablarSeguido, pararVoz, hayVozAlemana, alCargarVoces } from '../lib/audio.js';

// Muestra una conversación nativa generada por la IA.
export default function Dialog({ dialog, lektion, onBack, onRegenerate, busy, onContestadas }) {
  const [showEs, setShowEs] = useState(true);
  const [openFrage, setOpenFrage] = useState(null);
  // Las que ya has abierto. Cuando las has mirado TODAS, la función cuenta
  // como practicada: antes contaba solo con que la IA devolviera el diálogo,
  // aunque lo cerraras sin leerlo.
  const [vistas, setVistas] = useState(() => new Set());
  const avisado = useRef(false);
  // Por qué intervención va la lectura seguida (-1 = parada).
  const [sonando, setSonando] = useState(-1);
  const [hayVoz, setHayVoz] = useState(hayVozAlemana);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // La lista de voces llega vacía la primera vez y se rellena después.
  useEffect(() => alCargarVoces(() => setHayVoz(hayVozAlemana())), []);

  // Al salir de la pantalla (o al pedir otra conversación) se corta: si no, la
  // voz sigue leyendo un diálogo que ya no está delante.
  useEffect(() => pararVoz, []);
  useEffect(() => { pararVoz(); setSonando(-1); }, [dialog]);

  function leerTodo() {
    if (sonando >= 0) { pararVoz(); setSonando(-1); return; }
    hablarSeguido(dialog.turns.map((x) => x.de), {
      onCambio: setSonando,
      onFin: () => setSonando(-1)
    });
  }

  const personen = dialog.personen?.length
    ? dialog.personen
    : [...new Set(dialog.turns.map((x) => x.wer))];

  return (
    <div className="reading stack">
      <button className="link-btn" style={{ padding: 0, alignSelf: 'flex-start' }} onClick={onBack}>
        ← {lektion ? `Lektion ${lektion.nr}` : t('back')}
      </button>

      <div className="page-head" style={{ marginBottom: 0 }}>
        <h1>{dialog.titel}</h1>
        {dialog.situation && <p>{dialog.situation}</p>}
      </div>

      <div className="row" style={{ gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <button className="btn-ghost btn-sm" onClick={() => setShowEs(!showEs)}>
          {showEs ? t('hideEs') : t('showEs')}
        </button>
        <button className="btn-ghost btn-sm" onClick={onRegenerate} disabled={busy}>
          {busy ? t('generating') : t('dlg.other')}
        </button>
        {hayVoz && (
          <button className="btn-ghost btn-sm" onClick={leerTodo}>
            {sonando >= 0 ? t('dlg.stop') : t('dlg.listen')}
          </button>
        )}
      </div>

      <div className="dialog">
        {dialog.turns.map((turn, i) => {
          const side = personen.indexOf(turn.wer) === 0 ? 'a' : 'b';
          return (
            <div className={'dlg-turn ' + side + (sonando === i ? ' sonando' : '')} key={i}>
              <div className="dlg-wer">{turn.wer}</div>
              <div className="dlg-bubble">
                <div className="dlg-de">
                  {turn.de}
                  {/* `frase`: se lee entera, sin la limpieza de diccionario. */}
                  <Escuchar texto={turn.de} className="dlg-say" frase rate={0.95} />
                </div>
                {showEs && turn.es && <div className="dlg-es">{turn.es}</div>}
              </div>
            </div>
          );
        })}
      </div>

      {dialog.wendungen?.length > 0 && (
        <div className="card">
          <div className="lk-block-title">{t('dlg.phrases')}</div>
          <ul className="lk-examples" style={{ marginTop: 10 }}>
            {dialog.wendungen.map((w, i) => (
              <li key={i}>
                <span className="de">
                  {w.de}
                  <Escuchar texto={w.de} className="dlg-say" frase />
                </span>
                <span className="es">{w.es}</span>
                {w.wann && <span className="dlg-wann">{w.wann}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {dialog.fragen?.length > 0 && (
        <div className="card">
          <div className="row spread">
            <div className="lk-block-title" style={{ margin: 0 }}>{t('dlg.questions')}</div>
            <span className="muted" style={{ fontSize: '0.78rem' }}>
              {vistas.size}/{dialog.fragen.length}
            </span>
          </div>
          <div className="stack" style={{ gap: 8, marginTop: 10 }}>
            {dialog.fragen.map((f, i) => (
              <div className="dlg-frage" key={i}>
                <button
                  className="komm-head"
                  onClick={() => {
                    setOpenFrage(openFrage === i ? null : i);
                    if (openFrage !== i) {
                      const s2 = new Set(vistas).add(i);
                      setVistas(s2);
                      if (s2.size === dialog.fragen.length && !avisado.current) {
                        avisado.current = true;
                        onContestadas?.();
                      }
                    }
                  }}
                >
                  <span>{f.frage}</span>
                  <span className="muted" style={{ fontSize: '0.78rem' }}>
                    {openFrage === i ? '▴' : '▾'}
                  </span>
                </button>
                {openFrage === i && <p className="dlg-antwort">{f.antwort}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
