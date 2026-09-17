import React, { useEffect, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import MultipleChoice from './MultipleChoice.jsx';
import WriteCard from './WriteCard.jsx';
import WordOrder from './WordOrder.jsx';
import JudgeCard from './JudgeCard.jsx';
import ClozeTest from './ClozeTest.jsx';
import OpenQuestion from './OpenQuestion.jsx';
import Feedback from './Feedback.jsx';
import { buildSessionSmart, conceptLabel, itemKey } from '../engine/generator.js';
import { recordAnswer, bumpSessions } from '../lib/progress.js';
import { recordActivity } from '../lib/streak.js';
import { saveRun, rankOfRun } from '../lib/leaderboard.js';
import { getSettings } from '../lib/settings.js';
import { vocabMixItems, intercalar } from '../lib/mixItems.js';
import { recordStreak, currentStreak, updateStreak } from '../lib/rachas.js';
import { ganar, desglose } from '../lib/monedas.js';
import { playAudio } from '../lib/audio.js';
import { getFuchs } from '../lib/fuchs.js';
import { ensureJob, clearJob } from '../lib/aiJobs.js';
import { useAiJob } from '../lib/useAiJob.js';
import FoxFace from './FoxFace.jsx';
import Cargando from './Cargando.jsx';

const WIN_MSGS = ['Super!', 'Toll!', 'Richtig!', 'Wunderbar!', 'Klasse!', 'Genau!'];
const FAIL_MSGS = ['Schade!', 'Kopf hoch!', 'Knapp daneben!', "Versuch's nochmal!", 'Nicht aufgeben!'];

function xpFor(correct) {
  return correct ? 10 : 2;
}

export default function Session({ topic, mode, game = 'mixed', onExit, onDone }) {
  const [items, setItems] = useState(null);
  const [aiInfo, setAiInfo] = useState(null);
  const [idx, setIdx] = useState(0);
  const [retries, setRetries] = useState(0);
  const [phase, setPhase] = useState('answer'); // 'answer' | 'feedback'
  const [lastCorrect, setLastCorrect] = useState(false);
  const [lastChosen, setLastChosen] = useState(null);
  
  const [foxMsg, setFoxMsg] = useState('Los geht\'s!');
  const [foxGesto, setFoxGesto] = useState('normal');
  const [foxJump, setFoxJump] = useState(false);

  const results = useRef([]);
  const [racha, setRacha] = useState(() => currentStreak());
  const mejorRacha = useRef(racha);
  const monedasGanadas = useRef(0);
  const startedAt = useRef(Date.now());
  const [now, setNow] = useState(Date.now());

  // Montar la tanda puede tardar minutos cuando entra la IA. Antes vivía en un
  // useEffect con un flag `alive`: al cambiar de sección React desmontaba esto,
  // `alive` pasaba a false y la respuesta se tiraba a la basura. Volver no
  // recuperaba nada y encima arrancaba un `claude` nuevo desde cero.
  //
  // Ahora el trabajo vive en aiJobs, fuera de React: sigue corriendo aunque no
  // haya nadie mirando y al volver se recoge donde estaba.
  const claveJob = `ses:${topic?.id}:${mode}:${game}`;
  const job = useAiJob(claveJob);
  const consumido = useRef(false);
  // Sube al pulsar "Reintentar"; sin esto el efecto de abajo no se volvería a
  // disparar, porque su única dependencia (la clave) no cambia.
  const [reintento, setReintento] = useState(0);

  // 'todo' = de todo: gramática y también rondas de vocabulario.
  const esTodo = game === 'todo';
  // Si es "De todo un poco", damos 20 ejercicios y activamos el modo
  // aleatorio puro para que no priorice repasar siempre los mismos fallos.
  const size = esTodo ? 20 : (getSettings().sessionSize || 10);
  const nVocab = esTodo ? Math.max(2, Math.round(size * 0.4)) : 0;

  useEffect(() => {
    if (consumido.current) return;
    // ensureJob y no runJob: si ya se está calculando esta misma tanda, nos
    // enganchamos en vez de lanzar un segundo proceso.
    ensureJob(claveJob, () =>
      buildSessionSmart(topic, {
        size: size - nVocab,
        mode: esTodo ? 'random' : mode,
        gameType: esTodo ? 'mixed' : game
      })
    );
  }, [claveJob, reintento]);

  useEffect(() => {
    if (consumido.current || job.status !== 'done' || !job.result) return;
    consumido.current = true;
    const res = job.result;
    const vocab = esTodo ? vocabMixItems(nVocab, topic?.lektionId) : [];
    setItems(intercalar(res.items, vocab));
    setAiInfo(res);
    startedAt.current = Date.now();
    // Consumida: la próxima tanda con estos mismos ajustes debe generarse de
    // nuevo, no repetir estos ejercicios.
    clearJob(claveJob);
  }, [job.status, claveJob]);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Si la generación se cae no hay tanda que enseñar. Antes no existía esta
  // rama: el .then() no tenía catch y la pantalla se quedaba girando para
  // siempre, sin decir qué había pasado ni dejar reintentar.
  if (!items && job.status === 'error') {
    return (
      <div className="card center stack">
        <p style={{ color: 'var(--bad)' }}>{job.error}</p>
        <div className="btn-row">
          <button
            className="btn-primary"
            onClick={() => {
              consumido.current = false;
              clearJob(claveJob);
              setReintento((n) => n + 1);
            }}
          >
            {t('retry')}
          </button>
          <button className="btn-ghost" onClick={onExit}>{t('back')}</button>
        </div>
      </div>
    );
  }

  if (!items) {
    // Con IA esto puede irse a minuto y medio. Un spinner mudo ahí es un
    // suplicio: no sabes si sigue viva ni cuánto llevas. El indicador de
    // siempre trae reloj y pasos, y avisa de que puedes irte a otra sección
    // sin perder el trabajo — que desde el cambio a aiJobs ya es verdad.
    if (mode === 'ai') {
      return (
        <Cargando
          icono="✨"
          titulo={t('wait.itemsTitle')}
          pasos={[t('wait.items1'), t('wait.items2'), t('wait.items3'), t('wait.items4')]}
        />
      );
    }
    return (
      <div className="loading">
        <div className="spinner" />
        {t('ses.preparing')}
      </div>
    );
  }
  if (items.length === 0) {
    return (
      <div className="card center stack">
        <p>{t('ses.none')}</p>
        <button className="btn-ghost" onClick={onExit}>
          {t('back')}
        </button>
      </div>
    );
  }

  const item = items[idx];
  const elapsed = Math.floor((now - startedAt.current) / 1000);
  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const ss = String(elapsed % 60).padStart(2, '0');

  function handleAnswer(correct, chosen) {
    results.current.push({
      conceptId: item.conceptId,
      correct,
      chosen,
      item
    });
    recordAnswer(item.conceptId, correct, { itemKey: itemKey(topic.id, item) });
    const seguidos = correct ? racha + 1 : 0;
    // Se cobra ejercicio a ejercicio: cuanto mas dificil y mas seguidas
    // lleves, mas monedas.
    playAudio(correct);
    const premio = desglose({ correcto: correct });
    ganar(premio.base);
    monedasGanadas.current += premio.base;
    setRacha(seguidos);
    updateStreak(seguidos);
    if (seguidos > mejorRacha.current) mejorRacha.current = seguidos;
    setLastCorrect(correct);
    setLastChosen(chosen);
    
    setFoxMsg(correct ? WIN_MSGS[Math.floor(Math.random() * WIN_MSGS.length)] : FAIL_MSGS[Math.floor(Math.random() * FAIL_MSGS.length)]);
    setFoxGesto(correct ? 'feliz' : 'triste');
    setFoxJump(true);
    setTimeout(() => setFoxJump(false), 300);

    setPhase('feedback');
  }

  function next() {
    setFoxMsg('Weiter so!');
    setFoxGesto('normal');
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
    const seconds = Math.max(1, Math.round((Date.now() - startedAt.current) / 1000));
    const correctCount = results.current.filter((r) => r.correct).length;
    const total = results.current.length;
    const accuracy = total ? correctCount / total : 0;
    let xp = results.current.reduce((s, r) => s + xpFor(r.correct), 0);
    if (accuracy >= 0.9) xp += 5;

    // fallos agrupados por concepto
    const mistakesByConcept = {};
    results.current
      .filter((r) => !r.correct)
      .forEach((r) => {
        (mistakesByConcept[r.conceptId] ||= []).push(r.item);
      });

    bumpSessions();
    const record = updateStreak(racha);
    const streak = recordActivity(xp);
    // el bono por sumar un día de racha también cuenta para el resumen
    const bonoDia = streak.events.find((e) => e.type === 'coins')?.value || 0;
    const run = saveRun({
      topicId: topic.id,
      topicName: topic.nameEs,
      mode,
      game,
      correct: correctCount,
      total,
      accuracy: Math.round(accuracy * 100) / 100,
      seconds,
      xp,
      aiUsed: !!aiInfo?.aiUsed
    });
    const rank = rankOfRun(run.id, topic.id);

    onDone({
      topic,
      mode,
      game,
      correctCount,
      total,
      accuracy,
      seconds,
      xp,
      streak,
      monedas: monedasGanadas.current,
      bonoDia,
      rachaMax: mejorRacha.current,
      rachaRecord: record,
      rank,
      mistakes: Object.entries(mistakesByConcept).map(([cid, list]) => ({
        conceptId: cid,
        label: conceptLabel(topic, cid),
        items: list
      })),
      aiInfo
    });
  }

  return (
    <div className="reading session">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onExit} title={t('ses.exit')}>
          ✕
        </button>
        <div className="bar">
          <span style={{ width: ((idx + (phase === 'feedback' ? 1 : 0)) / items.length) * 100 + '%' }} />
        </div>
        <span className="timer">
          {mm}:{ss}
        </span>
      </div>

      <div className="row spread" style={{ marginBottom: 8 }}>
        <span className="pill">
          {idx + 1} / {items.length}
        </span>
        <span className="row" style={{ gap: 8 }}>
          {racha >= 2 && (
            <span className={'pill racha' + (racha >= 5 ? ' fuego' : '')}>
              {racha >= 5 ? '🔥' : '⚡'} {t('ses.streakN', { n: racha })}
            </span>
          )}
          {aiInfo?.aiUsed && <span className="pill">{t('ses.aiOn')}</span>}
        </span>
      </div>

      {item.context && item.type !== 'open' && (
        <div style={{ marginBottom: 16, padding: 12, background: 'var(--surface-2)', borderRadius: 8, fontStyle: 'italic', fontSize: '0.95rem' }}>
          {item.context}
        </div>
      )}

      {item.type === 'order' ? (
        <WordOrder key={item.id + '-' + retries} item={item} onAnswer={(c) => handleAnswer(c, null)} />
      ) : item.type === 'judge' ? (
        <JudgeCard key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} />
      ) : item.type === 'write' ? (
        <WriteCard key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} />
      ) : item.type === 'cloze' ? (
        <ClozeTest key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} />
      ) : item.type === 'open' ? (
        <OpenQuestion key={item.id + '-' + retries} item={item} onAnswer={handleAnswer} lektionId={topic?.lektionId || topic?.id} />
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

      {/* Felix global overlay */}
      <div 
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pointerEvents: 'none',
          zIndex: 100,
          transform: foxJump ? 'translateY(-15px)' : 'none',
          transition: 'transform 0.15s ease-out'
        }}
      >
        <div 
          style={{
            background: 'var(--surface)',
            border: '2px solid var(--border)',
            borderRadius: '16px 16px 0 16px',
            padding: '10px 16px',
            marginBottom: 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            fontWeight: 600,
            fontSize: '0.95rem',
            color: 'var(--text)',
            pointerEvents: 'auto',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {foxMsg}
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <FoxFace fuchs={getFuchs()} gesto={foxGesto} size={110} conCuerpo className="flota" />
        </div>
      </div>
    </div>
  );
}
