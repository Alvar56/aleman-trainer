import React, { useEffect, useMemo, useRef, useState } from 'react';
import { pickCards, recordCard } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { cobrar } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun } from '../lib/leaderboard.js';
import { pick } from '../lib/i18n.js';

const RONDAS = 8;

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

export default function WortsalatGame({ deck, onExit, onFinish }) {
  // Solo palabras de una pieza: los anagramas de frases enteras no tienen gracia.
  const cards = useMemo(() => {
    const todas = pickCards(deck, RONDAS * 3)
      .filter((c) => {
        const limpio = String(c.de).replace(/^(der|die|das)\s+/i, '').trim();
        return /^[A-Za-zÄÖÜäöüß-]{4,14}$/.test(limpio);
      })
      .slice(0, RONDAS);
    return todas;
  }, [deck]);

  const [idx, setIdx] = useState(0);
  const [letras, setLetras] = useState([]);
  const [sel, setSel] = useState(null);
  const [resuelto, setResuelto] = useState(false);
  const [rendido, setRendido] = useState(false);
  const selRef = useRef(null);
  const results = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  const started = useRef(Date.now());

  const card = cards[idx];
  const objetivo = card ? String(card.de).replace(/^(der|die|das)\s+/i, '').trim() : '';
  const articulo = card ? (String(card.de).match(/^(der|die|das)\s+/i)?.[1] || '') : '';

  useEffect(() => {
    if (!card) return;
    setLetras(trocear(objetivo));
    setSel(null);
    selRef.current = null;
    setResuelto(false);
    setRendido(false);
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
      recordCard(deck.id, card.de, true);
      monedas.current += cobrar(results.current, true);
      results.current.push({ card, ok: true });
      const t = setTimeout(siguiente, 900);
      return () => clearTimeout(t);
    }
  }, [bien, letras, resuelto, rendido]);

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

  function rendirse() {
    if (resuelto) return;
    setRendido(true);
    recordCard(deck.id, card.de, false);
    results.current.push({ card, ok: false });
  }

  function siguiente() {
    if (idx + 1 < cards.length) setIdx(idx + 1);
    else terminar();
  }

  function terminar() {
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    const correct = results.current.filter((r) => r.ok).length;
    const total = results.current.length || cards.length;
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
      monedas: monedas.current,
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
              <button key={l.id} className={cls} onClick={() => tocar(i)} disabled={resuelto || rendido}>
                {l.ch}
              </button>
            );
          })}
        </div>

        {!resuelto && !rendido && (
          <>
            <p className="wo-hint muted">
              {sel === null
                ? pick('Toca dos letras para intercambiarlas. Las verdes ya están en su sitio.',
                       'Tap two letters to swap them. Green ones are already in place.')
                : pick('Ahora toca la letra con la que quieres intercambiarla.',
                       'Now tap the letter you want to swap it with.')}
            </p>
            <button className="btn-ghost btn-sm" onClick={rendirse}>
              {pick('No me sale', 'I give up')}
            </button>
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

        {resuelto && <p className="ws-ok">✓ {card.de}</p>}
      </div>
    </div>
  );
}
