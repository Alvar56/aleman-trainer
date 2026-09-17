import React, { useMemo, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import MultipleChoice from './MultipleChoice.jsx';
import WordOrder from './WordOrder.jsx';
import WriteCard from './WriteCard.jsx';
import ClozeTest from './ClozeTest.jsx';
import OpenQuestion from './OpenQuestion.jsx';
import Feedback from './Feedback.jsx';
import { recordActivity } from '../lib/streak.js';
import { cobrar } from '../lib/monedas.js';
import { bumpSessions } from '../lib/progress.js';
import { saveRun } from '../lib/leaderboard.js';
import { makeRng, randomSeed, shuffle } from '../lib/rng.js';

export default function NotebookSession({ note, lektion, onExit, onFinish }) {
  const items = useMemo(() => {
    const r = makeRng(randomSeed());
    return shuffle(r, [...(note?.items || [])]);
  }, [note?.id]);
  const [idx, setIdx] = useState(0);
  const [retries, setRetries] = useState(0);
  const [phase, setPhase] = useState('answer'); // 'answer' | 'feedback'
  const [lastCorrect, setLastCorrect] = useState(false);
  const [lastChosen, setLastChosen] = useState(null);
  const results = useRef([]);
  const monedas = useRef(0); // lo ganado en esta tanda, para el resumen
  const started = useRef(Date.now());

  if (!items.length) {
    return (
      <div className="card center stack">
        <p>{t('vs.noExercises')}</p>
        <button className="btn-ghost" onClick={onExit}>
          Volver
        </button>
      </div>
    );
  }

  const item = items[idx];

  function handleAnswer(correct, chosen) {
    monedas.current += cobrar(results.current, correct);
    results.current.push({ correct });
    setLastCorrect(correct);
    setLastChosen(chosen);
    setPhase('feedback');
  }

  function next() {
    setRetries(0);
    if (idx + 1 < items.length) {
      setIdx(idx + 1);
      setPhase('answer');
    } else {
      finish();
    }
  }

  function handleRetry() {
    results.current.pop();
    setPhase('answer');
    setRetries(r => r + 1);
  }

  function finish() {
    const seconds = Math.max(1, Math.round((Date.now() - started.current) / 1000));
    const correct = results.current.filter((r) => r.correct).length;
    const total = results.current.length;
    const acc = total ? correct / total : 0;
    let xp = results.current.reduce((s, r) => s + (r.correct ? 10 : 2), 0);
    if (acc >= 0.9) xp += 5;
    bumpSessions();
    const streak = recordActivity(xp);
    saveRun({
      topicId: 'cuaderno',
      topicName: 'Cuaderno · ' + (note.title || lektion?.name || 'repaso'),
      mode: 'notebook',
      game: 'mixed',
      correct,
      total,
      accuracy: Math.round(acc * 100) / 100,
      seconds,
      xp
    });
    onFinish({
      deck: { id: 'cuaderno', name: note.title || lektion?.name || 'Repaso de clase', emoji: '📓' },
      mode: 'notebook',
      correct,
      total,
      seconds,
      xp,
      streak,
      monedas: monedas.current,
      missed: []
    });
  }

  return (
    <div className="reading session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title="Salir">
          ✕
        </button>
        <div className="bar">
          <span style={{ width: ((idx + (phase === 'feedback' ? 1 : 0)) / items.length) * 100 + '%' }} />
        </div>
        <span className="timer">
          {idx + 1}/{items.length}
        </span>
      </div>

      {item.type === 'order' ? (
        <WordOrder key={item.id + '-' + retries} item={item} onAnswer={(c) => handleAnswer(c, null)} />
      ) : item.type === 'write' ? (
        <WriteCard key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} />
      ) : item.type === 'cloze' ? (
        <ClozeTest key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} />
      ) : item.type === 'open' ? (
        <OpenQuestion key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} lektionId={lektion?.id} />
      ) : (
        <MultipleChoice key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} />
      )}

      {phase === 'feedback' && (
        <Feedback
          item={item}
          correct={lastCorrect}
          chosen={lastChosen}
          last={idx + 1 >= items.length}
          onNext={next}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
