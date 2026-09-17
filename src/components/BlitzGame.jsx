import React, { useEffect, useMemo, useRef, useState } from 'react';
import { recordCard } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { cobrar } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun } from '../lib/leaderboard.js';
import { pick } from '../lib/i18n.js';

const SEGUNDOS = 60;

function revuelve(a) {
  const x = [...a];
  for (let k = x.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [x[k], x[j]] = [x[j], x[k]];
  }
  return x;
}

export default function BlitzGame({ deck, onExit, onFinish }) {
  const pool = useMemo(() => (deck.cards.length >= 4 ? revuelve(deck.cards) : []), [deck]);
  const [i, setI] = useState(0);
  const [seg, setSeg] = useState(SEGUNDOS);
  const [aciertos, setAciertos] = useState(0);
  const [racha, setRacha] = useState(0);
  const [mejorRacha, setMejorRacha] = useState(0);
  const [marcado, setMarcado] = useState(null); // { elegido, correcto }
  const results = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  const started = useRef(Date.now());
  const acabado = seg <= 0 || i >= pool.length;

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

  const card = pool[i];
  // 3 opciones: la buena y dos distractores del mismo mazo
  const opciones = useMemo(() => {
    if (!card) return [];
    const otras = revuelve(pool.filter((c) => c.es !== card.es)).slice(0, 2);
    return revuelve([card, ...otras]);
  }, [card, pool]);

  function responder(op) {
    if (marcado || acabado) return;
    const ok = op.es === card.es;
    setMarcado({ elegido: op.es, correcto: ok });
    recordCard(deck.id, card.de, ok);
    monedas.current += cobrar(results.current, ok);
    results.current.push({ card, ok });
    if (ok) {
      setAciertos((n) => n + 1);
      setRacha((r) => {
        const nueva = r + 1;
        setMejorRacha((m) => Math.max(m, nueva));
        return nueva;
      });
    } else {
      setRacha(0);
      setSeg((s) => Math.max(0, s - 3)); // fallar cuesta 3 segundos
    }
    setTimeout(() => {
      setMarcado(null);
      setI((n) => n + 1);
    }, ok ? 320 : 850);
  }

  function terminar() {
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    const total = results.current.length;
    const correct = results.current.filter((r) => r.ok).length;
    const xp = correct * 5 + mejorRacha * 2;
    bumpSessions();
    const streak = recordActivity(xp);
    saveRun({
      topicId: 'vocab:' + deck.id,
      topicName: deck.name,
      mode: 'blitz',
      game: 'blitz',
      correct,
      total,
      accuracy: total ? Math.round((correct / total) * 100) / 100 : 0,
      seconds,
      xp
    });
    onFinish({
      deck,
      mode: 'blitz',
      correct,
      total,
      seconds,
      xp,
      streak,
      monedas: monedas.current,
      mejorRacha,
      missed: results.current.filter((r) => !r.ok).map((r) => ({ de: r.card.de, es: r.card.es }))
    });
  }

  if (!pool.length) {
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
        <div className="card center stack"><p className="muted">{pick('Tiempo…', 'Time…')}</p></div>
      </div>
    );
  }

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir">✕</button>
        <div className="bar"><span style={{ width: (seg / SEGUNDOS) * 100 + '%' }} /></div>
        <span className={'timer blitz-timer' + (seg <= 10 ? ' urgente' : '')}>{seg}s</span>
      </div>

      <div className="blitz-stats">
        <span className="pill">✓ {aciertos}</span>
        {racha >= 3 && <span className="pill blitz-racha">🔥 {racha}</span>}
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
                {op.es}
              </button>
            );
          })}
        </div>

        <p className="wo-hint muted">
          {pick('Fallar cuesta 3 segundos.', 'A wrong answer costs 3 seconds.')}
        </p>
      </div>
    </div>
  );
}
