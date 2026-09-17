import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { pickCards, recordCard } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { ganar, monedasPorTanda } from '../lib/monedas.js';
import { playAudio } from '../lib/audio.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun } from '../lib/leaderboard.js';

const PAIRS = 6;

function shuffle(a) {
  const x = [...a];
  for (let k = x.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [x[k], x[j]] = [x[j], x[k]];
  }
  return x;
}

export default function MatchGame({ deck, onExit, onFinish }) {
  const round = useMemo(() => {
    const cards = pickCards(deck, PAIRS);
    return {
      cards,
      de: shuffle(cards.map((c, i) => ({ pair: i, text: c.de }))),
      es: shuffle(cards.map((c, i) => ({ pair: i, text: c.es })))
    };
  }, [deck]);

  const [selDe, setSelDe] = useState(null);
  const [selEs, setSelEs] = useState(null);
  const [matched, setMatched] = useState(new Set()); // pair indices
  const [wrong, setWrong] = useState(null); // pair-de, pair-es pair being flashed
  const [mistakes, setMistakes] = useState(0);
  const [now, setNow] = useState(Date.now());
  const [lines, setLines] = useState([]);
  const started = useRef(Date.now());
  const wrapRef = useRef(null);
  const deRefs = useRef({});
  const esRefs = useRef({});
  const done = matched.size === PAIRS;

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [done]);

  // recolocar las líneas de conexión al cambiar el tamaño de la ventana
  useEffect(() => {
    const on = () => setNow(Date.now());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);

  // comprobar cuando hay uno de cada lado
  useEffect(() => {
    if (selDe == null || selEs == null) return;
    if (selDe === selEs) {
      playAudio(true);
      setMatched((m) => new Set([...m, selDe]));
      setSelDe(null);
      setSelEs(null);
    } else {
      playAudio(false);
      setMistakes((n) => n + 1);
      setWrong({ de: selDe, es: selEs });
      const t = setTimeout(() => {
        setWrong(null);
        setSelDe(null);
        setSelEs(null);
      }, 480);
      return () => clearTimeout(t);
    }
  }, [selDe, selEs]);

  // dibujar las líneas de conexión de las parejas resueltas
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const wr = wrap.getBoundingClientRect();
    const next = [];
    matched.forEach((p) => {
      const d = deRefs.current[p];
      const e = esRefs.current[p];
      if (!d || !e) return;
      const dr = d.getBoundingClientRect();
      const er = e.getBoundingClientRect();
      next.push({
        x1: dr.right - wr.left,
        y1: dr.top + dr.height / 2 - wr.top,
        x2: er.left - wr.left,
        y2: er.top + er.height / 2 - wr.top
      });
    });
    setLines(next);
  }, [matched, now]);

  useEffect(() => {
    if (!done) return;
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    round.cards.forEach((c) => recordCard(deck.id, c.de, mistakes < PAIRS));
    const xp = Math.max(10, 40 - mistakes * 4 - Math.floor(seconds / 6));
    bumpSessions();
    // aqui no hay respuesta a respuesta que cobrar: se paga la partida entera
    // cada fallo se come una pareja del premio: emparejar a lo loco no renta
    const monedas = monedasPorTanda({ aciertos: Math.max(1, PAIRS - mistakes) });
    ganar(monedas);
    const streak = recordActivity(xp);
    saveRun({ topicId: 'vocab:' + deck.id, topicName: 'Vocab · ' + deck.name, mode: 'match', game: 'match', correct: PAIRS, total: PAIRS, accuracy: PAIRS / (PAIRS + mistakes), seconds, xp });
    const timer = setTimeout(() => onFinish({ deck, mode: 'match', seconds, mistakes, xp, streak, monedas, correct: PAIRS, total: PAIRS, missed: [] }), 800);
    return () => clearTimeout(timer);
  }, [done]);

  function clsFor(pair, side) {
    let c = 'match-tile ' + side;
    if (matched.has(pair)) c += ' matched';
    else if ((side === 'de' ? selDe : selEs) === pair) c += ' sel';
    else if (wrong && wrong[side] === pair) c += ' wrong';
    return c;
  }

  const elapsed = Math.round((now - started.current) / 1000);

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir">✕</button>
        <div className="bar"><span style={{ width: (matched.size / PAIRS) * 100 + '%' }} /></div>
        <span className="timer">{elapsed}s · {mistakes} fallos</span>
      </div>

      <div className="prompt-label" style={{ marginBottom: 14 }}>
        {deck.emoji} Toca una palabra alemana y luego su traducción para conectarlas
      </div>

      <div className="match-cols" ref={wrapRef}>
        <svg className="match-lines">
          {lines.map((l, i) => (
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
          ))}
        </svg>

        <div className="match-col">
          <div className="match-col-head">Deutsch</div>
          {round.de.map((t) => (
            <button
              key={t.pair}
              ref={(el) => (deRefs.current[t.pair] = el)}
              className={clsFor(t.pair, 'de')}
              disabled={matched.has(t.pair) || done}
              onClick={() => setSelDe((p) => (p === t.pair ? null : t.pair))}
            >
              {t.text}
            </button>
          ))}
        </div>

        <div className="match-col">
          <div className="match-col-head">Español</div>
          {round.es.map((t) => (
            <button
              key={t.pair}
              ref={(el) => (esRefs.current[t.pair] = el)}
              className={clsFor(t.pair, 'es')}
              disabled={matched.has(t.pair) || done}
              onClick={() => setSelEs((p) => (p === t.pair ? null : t.pair))}
            >
              {t.text}
            </button>
          ))}
        </div>
      </div>

      {done && <p className="center" style={{ marginTop: 18, fontWeight: 700 }}>¡Completado! 🎉</p>}
    </div>
  );
}
