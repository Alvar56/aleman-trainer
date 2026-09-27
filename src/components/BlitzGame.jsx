import React, { useEffect, useMemo, useRef, useState } from 'react';
import FoxOverlay, { useFox } from './FoxOverlay.jsx';
import { recordCard } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { cobrarEjercicio, RECONOCER, cobrarBono100 } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun } from '../lib/leaderboard.js';
import { pick } from '../lib/i18n.js';
import { apuntarRespuesta } from '../lib/rachas.js';
import { useTeclas, teclasDeOpciones } from '../lib/teclas.js';

const SEGUNDOS = 30;
const OBJETIVO = 10;

function revuelve(a) {
  const x = [...a];
  for (let k = x.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [x[k], x[j]] = [x[j], x[k]];
  }
  return x;
}

export default function BlitzGame({ deck, cartasFijas, onExit, onFinish }) {
  const fox = useFox();
  // `pool` es de donde salen los DESPISTES y sigue siendo el mazo entero:
  const pool = useMemo(() => (deck.cards.length >= 4 ? revuelve(deck.cards) : []), [deck]);
  // Y esto es lo que se PREGUNTA: el mazo barajado, o solo lo que fallaste.
  const preguntas = useMemo(
    () => ((cartasFijas && cartasFijas.length) ? cartasFijas : pool),
    [pool, cartasFijas]
  );
  const [i, setI] = useState(0);
  const [seg, setSeg] = useState(SEGUNDOS);
  const [aciertos, setAciertos] = useState(0);
  const [racha, setRacha] = useState(0);
  const [mejorRacha, setMejorRacha] = useState(0);
  const [marcado, setMarcado] = useState(null); // { elegido, correcto }
  const results = useRef([]);
  const timerEspera = useRef(null);
  const mejorSeguidas = useRef(0);
  const ultimaSeguidas = useRef(null);
  const monedas = useRef(0);
  const started = useRef(Date.now());
  const ganado = aciertos >= OBJETIVO;
  const acabado = seg <= 0 || ganado;

  // reloj
  useEffect(() => {
    if (acabado) return;
    const t = setInterval(() => setSeg((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [acabado]);

  useEffect(() => {
    if (!acabado) return;
    const t = setTimeout(terminar, 500);
    return () => clearTimeout(t);
  }, [acabado]);

  const card = preguntas.length > 0 ? preguntas[i % preguntas.length] : null;
  // 3 opciones: la buena y dos distractores del mismo mazo
  const opciones = useMemo(() => {
    if (!card) return [];
    const otras = revuelve(pool.filter((c) => c.es !== card.es)).slice(0, 2);
    return revuelve([card, ...otras]);
  }, [card, pool]);

  function avanzar() {
    clearTimeout(timerEspera.current);
    setMarcado(null);
    setI((n) => n + 1);
  }

  // Atajos de teclado: 1, 2, 3 para responder; Escape para salir; Enter o Espacio para saltar la espera
  useTeclas({
    ...teclasDeOpciones(opciones, (op) => responder(op)),
    Escape: onExit
  }, !marcado && !acabado);

  useTeclas({
    Enter: avanzar,
    ' ': avanzar,
    Escape: onExit
  }, !!marcado && !acabado);

  function responder(op) {
    if (marcado || acabado) return;
    const ok = op.es === card.es;
    setMarcado({ elegido: op.es, correcto: ok });
    const rSeg = apuntarRespuesta(ok);
    if (rSeg.seguidas > mejorSeguidas.current) mejorSeguidas.current = rSeg.seguidas;
    ultimaSeguidas.current = rSeg;
    fox.acierto(ok);
    recordCard(card.de, ok);
    monedas.current += cobrarEjercicio(ok, { nivel: RECONOCER });
    results.current.push({ card, ok });

    if (ok) {
      setAciertos((n) => n + 1);
      setRacha((r) => {
        const nueva = r + 1;
        setMejorRacha((m) => Math.max(m, nueva));
        return nueva;
      });
    } else {
      // Los fallos restan 1 al total score de aciertos
      setAciertos((n) => Math.max(0, n - 1));
      setRacha(0);
      setSeg((s) => Math.max(0, s - 2));
    }

    timerEspera.current = setTimeout(avanzar, ok ? 280 : 750);
  }

  function terminar() {
    clearTimeout(timerEspera.current);
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    const total = results.current.length;
    const correct = aciertos;
    const esGanado = aciertos >= OBJETIVO;
    const pleno = total > 0 && results.current.every((r) => r.ok) && esGanado;
    const bonoCien = pleno ? cobrarBono100() : 0;
    const xp = Math.max(2, correct * 5 + (esGanado ? 20 : 0) + mejorRacha * 2);
    bumpSessions();
    const streak = recordActivity(xp);
    saveRun({
      topicId: 'vocab:' + deck.id,
      topicName: deck.name,
      mode: 'blitz',
      game: 'blitz',
      correct,
      total: Math.max(total, OBJETIVO),
      accuracy: total ? Math.round((results.current.filter((r) => r.ok).length / total) * 100) / 100 : 0,
      seconds,
      xp
    });
    onFinish({
      rachaMax: mejorSeguidas.current,
      rachaRecord: ultimaSeguidas.current,
      deck,
      mode: 'blitz',
      correct,
      total: OBJETIVO,
      ganado: esGanado,
      seconds,
      xp,
      streak,
      monedas: monedas.current + bonoCien,
      bonoCien,
      mejorRacha,
      missed: results.current.filter((r) => !r.ok).map((r) => ({ de: r.card.de, es: r.card.es }))
    });
  }

  if (!preguntas.length) {
    return (
      <div className="card center stack">
        <p>{pick('Este mazo necesita al menos 4 tarjetas para el contrarreloj.',
                 'This deck needs at least 4 cards for the time trial.')}</p>
        <button className="btn-ghost" onClick={onExit}>{pick('Volver', 'Back')}</button>
      </div>
    );
  }

  if (acabado) {
    return (
      <div className="vocab-session">
        <div className="card center stack">
          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: ganado ? 'var(--good)' : 'var(--text)' }}>
            {ganado ? pick('¡Objetivo conseguido! 🎯 (10/10)', 'Goal achieved! 🎯 (10/10)') : pick('¡Tiempo agotado!', 'Time out!')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir (Esc)">✕</button>
        <div className="bar"><span style={{ width: (seg / SEGUNDOS) * 100 + '%' }} /></div>
        <span className={'timer blitz-timer' + (seg <= 5 ? ' urgente' : '')}>{seg}s</span>
      </div>

      <div className="ctx-fila">
        <span className="pill ctx-tema">{deck.emoji} {deck.name}</span>
        <span className="row" style={{ gap: 8 }}>
          <span className="pill" style={{ fontWeight: 600 }}>✓ {aciertos} / {OBJETIVO}</span>
          {racha >= 3 && <span className="pill blitz-racha">🔥 {racha}</span>}
        </span>
      </div>

      <div className="fc-wrap">
        <div className="blitz-word">{card.de}</div>

        <div className="blitz-opts">
          {opciones.map((op, k) => {
            let cls = 'blitz-opt';
            if (marcado) {
              if (op.es === card.es) cls += ' ok';
              else if (op.es === marcado.elegido) cls += ' ko';
              else cls += ' dim';
            }
            return (
              <button key={k} className={cls} onClick={() => responder(op)} disabled={!!marcado}>
                <span className="op-tecla">{k + 1}</span>
                {op.es}
              </button>
            );
          })}
        </div>

        <p className="wo-hint muted">
          {pick('Objetivo: 10 aciertos en 30s · Fallar resta 1 punto · Atajos: 1, 2, 3, Esc',
                'Goal: 10 correct in 30s · Mistakes subtract 1 point · Keys: 1, 2, 3, Esc')}
        </p>
      <FoxOverlay fox={fox} racha={racha} />
      </div>
    </div>
  );
}
