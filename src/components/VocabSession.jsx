import React, { useEffect, useMemo, useRef, useState } from 'react';
import { t, codigoIdioma } from '../lib/i18n.js';
import { pickCards, recordCard, setCardColor, getCardColor, colorSiguiente } from '../lib/vocab.js';
import { recordActivity } from '../lib/streak.js';
import { cobrar } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { getSettings } from '../lib/settings.js';
import { saveRun } from '../lib/leaderboard.js';

const COMBINING = new RegExp('[\\u0300-\\u036f]', 'g');
const norm = (s) =>
  String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(COMBINING, '')
    .replace(/ß/g, 'ss')
    .replace(/\b(der|die|das|den|dem|ein|eine|einen|einem|einer|el|la|los|las|un|una|unos|unas|to)\b/g, ' ')
    .replace(/\bsich\b/g, ' ')
    .replace(/[.,!?¿¡"'()\-–—/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function checkWritten(input, answer) {
  const a = norm(answer);
  const i = norm(input);
  if (!i) return false;
  if (i === a) return true;
  return String(answer)
    .split(/[/,]/)
    .map(norm)
    .some((alt) => alt && alt === i);
}

function shuffle(a) {
  const x = [...a];
  for (let k = x.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1));
    [x[k], x[j]] = [x[j], x[k]];
  }
  return x;
}

export default function VocabSession({ deck, mode, dir: propDir, onExit, onFinish }) {
  const size = Math.min(getSettings().sessionSize || 10, deck.cards.length);
  const cards = useMemo(() => (mode === 'flashcards' ? shuffle(deck.cards).slice(0, size) : pickCards(deck, size)), [deck, mode, size]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [seenBack, setSeenBack] = useState(false); // ya ha visto la traducción al menos una vez
  const [flash, setFlash] = useState(null); // 'ok' | 'no' | null  (flashcards)
  const [phase, setPhase] = useState('q'); // quiz/write: 'q' | 'a'
  const [input, setInput] = useState('');
  const [lastOk, setLastOk] = useState(false);
  const [picked, setPicked] = useState(null);
  const results = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  const started = useRef(Date.now());
  const inputRef = useRef(null);
  const advancing = useRef(false);

  const dir = useMemo(() => cards.map(() => propDir === 'es-de' ? false : propDir === 'de-es' ? true : Math.random() < 0.65), [cards, propDir]);

  useEffect(() => {
    if (mode === 'write' && phase === 'q' && inputRef.current) inputRef.current.focus();
  }, [idx, phase, mode]);

  if (!cards.length) {
    return (
      <div className="card center stack">
        <p>{t('vs.noCards')}</p>
        <button className="btn-ghost" onClick={onExit}>{t('back')}</button>
      </div>
    );
  }

  const card = cards[idx];
  const deToEs = dir[idx];
  const prompt = deToEs ? card.de : card.es;
  const answer = deToEs ? card.es : card.de;

  const quizOptions = useMemo(() => {
    if (mode !== 'quiz') return [];
    const pool = deck.cards.filter((c) => c.de !== card.de).map((c) => (deToEs ? c.es : c.de));
    return shuffle([answer, ...shuffle(pool).slice(0, 3)]);
  }, [idx, mode]);

  function goNext() {
    advancing.current = false;
    if (idx + 1 < cards.length) {
      setIdx(idx + 1);
      setPhase('q');
      setRevealed(false);
      setSeenBack(false);
      setFlash(null);
      setInput('');
      setPicked(null);
    } else {
      finish();
    }
  }

  function rateFlash(ok) {
    if (advancing.current) return;
    advancing.current = true;
    // La regla vive en vocab.js, junto a los datos: depende de la direccion,
    // y aqui dentro no se podia ni leer ni probar sin montar una sesion.
    setCardColor(deck.id, card.de, colorSiguiente(getCardColor(deck.id, card.de), ok, deToEs));
    results.current.push({ card, ok, deToEs });
    setFlash(ok ? 'ok' : 'no');
    setTimeout(goNext, 620);
  }

  function gradeQA(ok) {
    recordCard(deck.id, card.de, ok);
    monedas.current += cobrar(results.current, ok);
    results.current.push({ card, ok, deToEs });
    setLastOk(ok);
    setPhase('a');
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
    saveRun({ topicId: 'vocab:' + deck.id, topicName: 'Vocab · ' + deck.name, mode, game: mode, correct, total, accuracy: Math.round(acc * 100) / 100, seconds, xp });
    onFinish({ deck, mode, correct, total, seconds, xp, streak, monedas: monedas.current, missed: results.current.filter((r) => !r.ok).map((r) => r.card) });
  }

  const progressPct = ((idx + (phase === 'a' || flash ? 1 : 0)) / cards.length) * 100;

  return (
    <div className="vocab-session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir">✕</button>
        <div className="bar"><span style={{ width: progressPct + '%' }} /></div>
        <span className="timer">{idx + 1}/{cards.length}</span>
      </div>

      <div className="row spread" style={{ marginBottom: 14 }}>
        <span className="pill">{deck.emoji} {deck.name}</span>
        <span className="pill">{deToEs ? `DE → ${codigoIdioma()}` : `${codigoIdioma()} → DE`}</span>
      </div>

      {/* ---------- TARJETAS ---------- */}
      {mode === 'flashcards' && (
        <div className="fc-wrap">
          <div
            className={'flashcard' + (revealed ? ' flipped' : '') + (flash ? ' flash-' + flash : '')}
            onClick={() => {
              if (flash) return;
              setRevealed((r) => !r);
              setSeenBack(true);
            }}
          >
            <div className="fc-inner">
              <div className="fc-face fc-front">
                <span className="fc-word">{deToEs ? card.de : card.es}</span>
                <span className="fc-hint">{seenBack ? t('vs.tapToFlip') : t('vs.tapToSee')}</span>
              </div>
              <div className="fc-face fc-back">
                <span className="fc-word">{deToEs ? card.es : card.de}</span>
                {card.ex && <span className="fc-ex">{card.ex}</span>}
                {card.exEs && <span className="fc-ex-es">{card.exEs}</span>}
              </div>
            </div>
          </div>

          {!seenBack ? (
            <button className="btn-ghost fc-reveal" onClick={() => { setRevealed(true); setSeenBack(true); }}>
              {t('vs.seeTranslation')}
            </button>
          ) : (
            <div className="judge-row fc-rate">
              <button className="judge-btn no" disabled={!!flash} onClick={() => rateFlash(false)}>
                {t('vs.didNotKnow')}
              </button>
              <button className="judge-btn yes" disabled={!!flash} onClick={() => rateFlash(true)}>
                {t('vs.knewIt')}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------- TEST ---------- */}
      {mode === 'quiz' && (
        <div className="qa-wrap">
          <div className="prompt-label">{t('vs.whatMeans')}</div>
          <div className="sentence">{prompt}</div>
          <div className="options">
            {quizOptions.map((opt, i) => {
              let cls = 'option';
              if (phase === 'a') {
                if (opt === answer) cls += ' correct';
                else if (opt === picked) cls += ' wrong';
                else cls += ' dim';
              }
              return (
                <button key={i} className={cls} disabled={phase === 'a'} onClick={() => { setPicked(opt); gradeQA(opt === answer); }}>
                  {opt}
                </button>
              );
            })}
          </div>
          {phase === 'a' && <QAFeedback card={card} ok={lastOk} answer={answer} onNext={goNext} last={idx + 1 >= cards.length} />}
        </div>
      )}

      {/* ---------- ESCRIBIR ---------- */}
      {mode === 'write' && (
        <div className="qa-wrap">
          <div className="prompt-label">{t('vs.writeTranslation')} {deToEs ? t('vs.toEs') : t('vs.toDe')}</div>
          <div className="sentence">{prompt}</div>
          {phase === 'q' ? (
            <form onSubmit={(e) => { e.preventDefault(); if (input.trim()) gradeQA(checkWritten(input, answer)); }}>
              <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={t('vs.yourAnswer')} autoComplete="off" style={{ maxWidth: 460 }} />
              <button className="btn-primary" style={{ marginTop: 12, display: 'block' }}>{t('vs.check')}</button>
            </form>
          ) : (
            <>
              <p className="muted" style={{ marginTop: 6 }}>
                {t('vs.youWrote')} <strong style={{ color: lastOk ? 'var(--good)' : 'var(--bad)' }}>{input || '—'}</strong>
              </p>
              <QAFeedback card={card} ok={lastOk} answer={answer} onNext={goNext} last={idx + 1 >= cards.length} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

function QAFeedback({ card, ok, answer, onNext, last }) {
  return (
    <div className={'feedback ' + (ok ? 'ok' : 'no')}>
      <div className="verdict">{ok ? t('fb.right') : t('fb.wrong')}</div>
      <div className="de">{card.de} — {card.es}</div>
      {!ok && <div className="es">{t('vs.answerIs')} <strong>{answer}</strong></div>}
      {card.ex && (
        <div className="why">
          <span className="lang-tag">{t('vs.egTag')}</span>{card.ex}{card.exEs ? ` — ${card.exEs}` : ''}
        </div>
      )}
      <button className="btn-primary" style={{ marginTop: 14 }} onClick={onNext}>
        {last ? t('fb.results') : t('ueb.siguiente')}
      </button>
    </div>
  );
}
