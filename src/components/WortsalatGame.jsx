import React, { useEffect, useMemo, useRef, useState } from 'react';
import FoxOverlay, { useFox } from './FoxOverlay.jsx';
import { pickCards, recordCard, deckStats } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { cobrarEjercicio, RECONSTRUIR, verificarBono100 } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun } from '../lib/leaderboard.js';
import { pick } from '../lib/i18n.js';
import { getSettings } from '../lib/settings.js';
import { useTeclas } from '../lib/teclas.js';
import { apuntarRespuesta, currentStreak } from '../lib/rachas.js';
import Reloj from './Reloj.jsx';
import RachaPill from './RachaPill.jsx';

// Cuantas rondas, de Ajustes. Antes eran ocho fijas.
const RONDAS_POR_DEFECTO = 8;

function revuelve(letras) {
  const x = [...letras];
  for (let k = x.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [x[k], x[j]] = [x[j], x[k]];
  }
  return x;
}

// Reparte las letras de una palabra y se asegura de que NO salga ya resuelta.
function trocear(palabra) {
  const letras = palabra.split('').map((ch, i) => ({ id: i, ch }));
  let out = revuelve(letras);
  let intentos = 0;
  while (out.map((l) => l.ch).join('') === palabra && intentos < 20) {
    out = revuelve(letras);
    intentos++;
  }
  return out;
}

export default function WortsalatGame({ deck, cartasFijas, onExit, onFinish }) {
  const fox = useFox();
  // Solo palabras de una pieza: los anagramas de frases enteras no tienen gracia.
  const rondas = getSettings().sessionSize || RONDAS_POR_DEFECTO;
  const cards = useMemo(() => {
    // Repitiendo los fallos: exactamente esas y en ese orden. Ya pasaron el
    // filtro de forma la primera vez, asi que no hay que volver a colarlas.
    if (cartasFijas && cartasFijas.length) return cartasFijas;
    const todas = pickCards(deck, rondas * 3)
      .filter((c) => {
        const limpio = String(c.de).replace(/^(der|die|das)\s+/i, '').trim();
        return /^[A-Za-zÄÖÜäöüß-]{4,14}$/.test(limpio);
      })
      .slice(0, rondas);
    return todas;
  }, [deck, rondas, cartasFijas]);

  const [idx, setIdx] = useState(0);
  const [letras, setLetras] = useState([]);
  const [sel, setSel] = useState(null);
  const [resuelto, setResuelto] = useState(false);
  const [rendido, setRendido] = useState(false);
  const selRef = useRef(null);
  const results = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  // Aciertos seguidos, como en el resto de juegos.
  const [seguidas, setSeguidas] = useState(() => currentStreak());
  const mejorSeguidas = useRef(0);
  const started = useRef(Date.now());

  const card = cards[idx];
  const objetivo = card ? String(card.de).replace(/^(der|die|das)\s+/i, '').trim() : '';
  const articulo = card ? (String(card.de).match(/^(der|die|das)\s+/i)?.[1] || '') : '';

  const [pistasUsadas, setPistasUsadas] = useState(0);

  useEffect(() => {
    if (!card) return;
    setLetras(trocear(objetivo));
    setSel(null);
    selRef.current = null;
    setResuelto(false);
    setRendido(false);
    setPistasUsadas(0);
  }, [idx, card]);

  // Cuántas letras seguidas, desde la primera, están ya en su sitio.
  const bien = useMemo(() => {
    let n = 0;
    while (n < letras.length && letras[n].ch === objetivo[n]) n++;
    return n;
  }, [letras, objetivo]);

  useEffect(() => {
    if (!card || resuelto || rendido) return;
    if (letras.length && bien === objetivo.length) {
      setResuelto(true);
      recordCard(card.de, true, { mode: 'order', peso: 2 });
      // Tienes las letras delante y las colocas: RECONSTRUIR.
      monedas.current += cobrarEjercicio(true, { nivel: RECONSTRUIR, pistas: pistasUsadas });
      results.current.push({ card, ok: true, pistas: pistasUsadas });
      const rSeg = apuntarRespuesta(true);
      setSeguidas(rSeg.seguidas);
      if (rSeg.seguidas > mejorSeguidas.current) mejorSeguidas.current = rSeg.seguidas;
      fox.acierto(true);
      const t = setTimeout(siguiente, 900);
      return () => clearTimeout(t);
    }
  }, [bien, letras, resuelto, rendido, pistasUsadas]);

  function tocar(i) {
    if (resuelto || rendido) return;
    const prev = selRef.current;
    if (prev === null) { selRef.current = i; setSel(i); return; }
    if (prev === i) { selRef.current = null; setSel(null); return; }
    selRef.current = null;
    setSel(null);
    setLetras((ls) => {
      const n = [...ls];
      [n[prev], n[i]] = [n[i], n[prev]];
      return n;
    });
  }

  function pedirPistaWS() {
    if (resuelto || rendido) return;
    // Buscar una posición aleatoria que aún no tenga su letra correcta
    const descolocadas = [];
    letras.forEach((l, i) => {
      if (l.ch !== objetivo[i]) descolocadas.push(i);
    });
    if (!descolocadas.length) return;
    const targetIdx = descolocadas[Math.floor(Math.random() * descolocadas.length)];
    const targetChar = objetivo[targetIdx];
    // Buscar la letra que debería estar allí
    const actualIdx = letras.findIndex((l, i) => l.ch === targetChar && l.ch !== objetivo[i]);
    if (actualIdx === -1 || actualIdx === targetIdx) return;

    setLetras((ls) => {
      const n = [...ls];
      [n[targetIdx], n[actualIdx]] = [n[actualIdx], n[targetIdx]];
      return n;
    });
    setSel(null);
    selRef.current = null;
    setPistasUsadas((p) => p + 1);
  }

  function rendirse() {
    if (resuelto) return;
    setRendido(true);
    recordCard(card.de, false, { mode: 'order', peso: 2 });
    results.current.push({ card, ok: false });
    setSeguidas(apuntarRespuesta(false).seguidas);
    fox.acierto(false);
  }

  // Atajos de teclado: 1..9 (y 0) para seleccionar fichas, P para pista, Enter/Espacio para avanzar, Escape para salir
  const teclasMapa = useMemo(() => {
    if (resuelto || rendido) {
      return { Enter: () => siguiente(), ' ': () => siguiente(), Escape: onExit };
    }
    const m = {
      p: pedirPistaWS,
      P: pedirPistaWS,
      h: pedirPistaWS,
      H: pedirPistaWS,
      Escape: onExit
    };
    for (let k = 0; k < Math.min(letras.length, 10); k++) {
      const keyStr = k === 9 ? '0' : String(k + 1);
      m[keyStr] = () => tocar(k);
    }
    return m;
  }, [resuelto, rendido, letras, objetivo]);

  useTeclas(teclasMapa, cards.length > 0);

  function siguiente() {
    if (idx + 1 < cards.length) setIdx(idx + 1);
    else terminar();
  }

  function terminar() {
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    const correct = results.current.filter((r) => r.ok).length;
    const total = results.current.length || cards.length;
    const bonoCien = deck ? verificarBono100(`deck:${deck.id}`, deckStats(deck).pct) : 0;
    const xp = correct * 8;
    bumpSessions();
    const streak = recordActivity(xp);
    saveRun({
      topicId: 'vocab:' + deck.id,
      topicName: deck.name,
      mode: 'wortsalat',
      game: 'wortsalat',
      correct,
      total,
      accuracy: total ? Math.round((correct / total) * 100) / 100 : 0,
      seconds,
      xp
    });
    onFinish({
      deck,
      mode: 'wortsalat',
      correct,
      total,
      seconds,
      xp,
      streak,
      monedas: monedas.current + bonoCien,
      bonoCien,
      missed: results.current.filter((r) => !r.ok).map((r) => ({ de: r.card.de, es: r.card.es }))
    });
  }

  if (!cards.length) {
    return (
      <div className="card center stack">
        <p>{pick('Este mazo no tiene palabras sueltas para jugar al anagrama.',
                 'This deck has no single words to play the anagram game.')}</p>
        <button className="btn-ghost" onClick={onExit}>{pick('Volver', 'Back')}</button>
      </div>
    );
  }

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir">✕</button>
        <div className="bar"><span style={{ width: ((idx + (resuelto ? 1 : 0)) / cards.length) * 100 + '%' }} /></div>
        <span className="timer">{idx + 1}/{cards.length}</span>
      </div>

      <div className="ctx-fila">
        <span className="pill ctx-tema">{deck.emoji} {deck.name}</span>
        <span className="row" style={{ gap: 8 }}>
          <RachaPill n={seguidas} />
          <Reloj desde={started.current} />
        </span>
      </div>

      <div className="prompt-label">{pick('Ordena las letras', 'Put the letters in order')}</div>

      <div className="fc-wrap">
        <div className="ws-clue">
          <span className="ws-es">{card.es}</span>
          {articulo && <span className="ws-art">{articulo} …</span>}
          <span className="ws-len">{objetivo.length} {pick('letras', 'letters')}</span>
        </div>

        <div className={'ws-box' + (resuelto ? ' done' : rendido ? ' fail' : '')}>
          {(rendido ? objetivo.split('').map((ch, i) => ({ id: 'r' + i, ch })) : letras).map((l, i) => {
            let cls = 'ws-letter';
            if (rendido) cls += ' fail';
            else if (i < bien) cls += ' ok';
            if (sel === i) cls += ' sel';
            return (
              <button
                key={l.id}
                className={cls}
                onClick={() => tocar(i)}
                disabled={resuelto || rendido}
                style={{ position: 'relative' }}
                title={`Atajo: ${i === 9 ? '0' : i + 1}`}
              >
                {!resuelto && !rendido && i < 10 && (
                  <span className="op-tecla" style={{ fontSize: '0.58rem', position: 'absolute', top: 2, right: 3, opacity: 0.75 }}>
                    {i === 9 ? '0' : i + 1}
                  </span>
                )}
                {l.ch}
              </button>
            );
          })}
        </div>

        {!resuelto && !rendido && (
          <>
            <p className="wo-hint muted">
              {sel === null
                ? pick('Toca dos letras (o pulsa sus números) para intercambiarlas. Las verdes ya están en su sitio.',
                       'Tap two letters (or press their numbers) to swap them. Green ones are already in place.')
                : pick('Ahora toca la letra con la que quieres intercambiarla.',
                       'Now tap the letter you want to swap it with.')}
            </p>
            <div className="row" style={{ gap: 8, justifyContent: 'center', marginTop: 4 }}>
              <button className="btn-ghost btn-sm" onClick={pedirPistaWS} title="Atajo: P">
                💡 {pick('Colocar una letra (P)', 'Place a letter (P)')}
              </button>
              <button className="btn-ghost btn-sm" onClick={rendirse}>
                {pick('No me sale', 'I give up')}
              </button>
            </div>
          </>
        )}

        {rendido && (
          <>
            <p className="muted" style={{ marginTop: 4 }}>
              {pick('Era', 'It was')}: <strong style={{ color: 'var(--text)' }}>{card.de}</strong>
            </p>
            <button className="btn-primary" onClick={siguiente}>{pick('Siguiente', 'Next')}</button>
          </>
        )}

      <FoxOverlay fox={fox} racha={seguidas} />
        {resuelto && <p className="ws-ok">✓ {card.de}</p>}
      </div>
    </div>
  );
}
