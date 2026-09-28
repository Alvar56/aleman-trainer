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
import { recordAnswer, bumpSessions, topicMastery } from '../lib/progress.js';
import { recordActivity } from '../lib/streak.js';
import { saveRun, rankOfRun } from '../lib/leaderboard.js';
import { getSettings } from '../lib/settings.js';
import { vocabMixItems, intercalar } from '../lib/mixItems.js';
import { recordStreak, currentStreak, updateStreak } from '../lib/rachas.js';
import { cobrarEjercicio, RECONOCER, RECONSTRUIR, PRODUCIR } from '../lib/monedas.js';
import { playAudio } from '../lib/audio.js';
import { ensureJob, clearJob } from '../lib/aiJobs.js';
import { useAiJob } from '../lib/useAiJob.js';
import FoxOverlay, { useFox } from './FoxOverlay.jsx';
import Cargando from './Cargando.jsx';
import Reloj from './Reloj.jsx';
import RachaPill from './RachaPill.jsx';
import StarButton from './StarButton.jsx';

function xpFor(correct) {
  return correct ? 10 : 2;
}

// `itemsFijos` es una tanda ya montada: la usa "repetir los fallos", que no
// genera nada nuevo sino que vuelve a poner las preguntas que fallaste.
export default function Session({ topic, mode, game = 'mixed', itemsFijos = null, onExit, onDone }) {
  const [items, setItems] = useState(null);
  const [aiInfo, setAiInfo] = useState(null);
  const [idx, setIdx] = useState(0);
  const [retries, setRetries] = useState(0);
  const [phase, setPhase] = useState('answer'); // 'answer' | 'feedback'
  const [lastCorrect, setLastCorrect] = useState(false);
  const [lastChosen, setLastChosen] = useState(null);
  // Has vuelto atrás con la flecha y estás mirando uno ya contestado. No basta
  // con comparar idx contra los resultados: al corregir el de ahora también
  // hay resultado para idx, y ese sí tiene que seguir viéndose entero.
  const [repasando, setRepasando] = useState(false);
  
  const fox = useFox();

  const results = useRef([]);
  const [racha, setRacha] = useState(() => currentStreak());
  const mejorRacha = useRef(racha);
  const monedasGanadas = useRef(0);
  const startedAt = useRef(Date.now());

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
  // "De todo un poco" estaba clavado en 20 y se saltaba el ajuste. Ahora
  // tambien manda tu numero; lo que sigue siendo suyo es el modo aleatorio
  // puro, para que no priorice repasar siempre los mismos fallos.
  const size = getSettings().sessionSize || 10;
  const nVocab = esTodo ? Math.max(2, Math.round(size * 0.4)) : 0;

  useEffect(() => {
    if (consumido.current) return;
    // Con la tanda ya dada no hay nada que generar.
    if (itemsFijos?.length) {
      consumido.current = true;
      setItems(itemsFijos);
      startedAt.current = Date.now();
      return;
    }
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
  // Con Math.max: el reloj arranca cuando llegan los ejercicios, que es
  // DESPUES de montar la pantalla, y hasta el primer tic el resultado era
  // negativo. Se veia un "-1:-1" en el primer segundo de cada tanda.

  function handleAnswer(correct, chosen, pistas = 0) {
    results.current.push({
      conceptId: item.conceptId,
      correct,
      chosen,
      item
    });
    recordAnswer(item.conceptId, correct, {
      itemKey: itemKey(topic.id, item),
      type: item.type,
      peso: item.type === 'mc' ? 1 : 2
    });
    const seguidos = correct ? racha + 1 : 0;
    // Se cobra ejercicio a ejercicio, segun lo que ese ejercicio te pida:
    // escribirlo de cero (write, cloze, open) vale mas que elegir entre
    // opciones, y ordenar las palabras queda en medio.
    const nivel =
      item.type === 'write' || item.type === 'cloze' || item.type === 'open'
        ? PRODUCIR
        : item.type === 'order'
        ? RECONSTRUIR
        : RECONOCER;
    monedasGanadas.current += cobrarEjercicio(correct, { nivel, pistas });
    setRacha(seguidos);
    updateStreak(seguidos);
    if (seguidos > mejorRacha.current) mejorRacha.current = seguidos;
    setLastCorrect(correct);
    setLastChosen(chosen);
    
    fox.acierto(correct);

    setPhase('feedback');
  }

  function next() {
    fox.sigue();
    setRetries(0);
    if (idx + 1 >= items.length) {
      finish();
      return;
    }
    // Volviendo de un repaso, el siguiente puede estar ya contestado: entonces
    // se enseña corregido otra vez y no se vuelve a preguntar. Solo al llegar
    // al que no has hecho se pide respuesta.
    const sig = idx + 1;
    setIdx(sig);
    verEstado(sig);
  }

  // Deja la pantalla como corresponda al ejercicio `i`: corregido si ya lo
  // contestaste, o esperando respuesta si es al que habías llegado.
  function verEstado(i) {
    const hecho = results.current[i];
    if (hecho) {
      setLastCorrect(hecho.correct);
      setLastChosen(hecho.chosen);
      setPhase('feedback');
      setRepasando(true);
    } else {
      // De vuelta en el que te tocaba: se acabó el repaso.
      setPhase('answer');
      setRepasando(false);
    }
  }

  // El anterior, ya corregido. No se vuelve a puntuar ni cuenta otra vez: lo
  // que hay guardado en results es lo que se enseña, y ahí no se toca nada.
  function atras() {
    if (idx === 0) return;
    if (!results.current[idx - 1]) return;
    fox.sigue();
    setRetries(0);
    setIdx(idx - 1);
    verEstado(idx - 1);
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
      // Los fallos en crudo, para poder repetirlos sin volver a generarlos.
      fallos: results.current.filter((r) => !r.correct).map((r) => r.item),
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
        <button className="btn-ghost ses-icon-btn" onClick={onExit} title={t('ses.exit')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="bar">
          <span style={{ width: ((idx + (phase === 'feedback' ? 1 : 0)) / items.length) * 100 + '%' }} />
        </div>
        {/* Volver al de antes. Sale solo cuando hay uno detrás contestado:
            en el primero, o antes de contestar nada, no lleva a ningún sitio.
            Es de las cosas que más se echan en falta al fallar y querer
            releer la explicación con calma. */}
        {idx > 0 && results.current[idx - 1] && (
          <button className="btn-ghost ses-atras ses-icon-btn" onClick={atras} title={t('ses.prev')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <span className="timer">{idx + 1}/{items.length}</span>
      </div>

      {/* De qué tema es la tanda. Vocabulario y Kommunikation lo dicen desde el
          principio y aquí no salía: con el mismo test para veinte lecciones,
          a mitad de tanda ya no sabías en cuál estabas. */}
      <div className="ctx-fila">
        <span className="pill ctx-tema">📖 {topic.nameEs}</span>
        <span className="row" style={{ gap: 8 }}>
          {(() => {
            const itemLektionId = topic?.lektionId || (
              item.conceptId?.includes(':') && item.conceptId.split(':')[0].match(/^[a-z0-9]+-l[0-9]+$/i)
                ? item.conceptId.split(':')[0]
                : null
            );
            const itemTopicId = (topic?.id && topic.id !== 'mix' && !topic.id.startsWith('mix:'))
              ? topic.id
              : (itemLektionId ? `kb-${itemLektionId}` : topic?.id);
            return (
              <StarButton
                item={{
                  ...item,
                  topicId: itemTopicId,
                  lektionId: itemLektionId,
                  topicName: topic?.nameEs || topic?.name
                }}
              />
            );
          })()}
          <RachaPill n={racha} />
          {aiInfo?.aiUsed && <span className="pill">{t('ses.aiOn')}</span>}
          <Reloj desde={startedAt.current} />
        </span>
      </div>

      {item.context && item.type !== 'open' && (
        <div style={{ marginBottom: 16, padding: 12, background: 'var(--surface-2)', borderRadius: 8, fontStyle: 'italic', fontSize: '0.95rem' }}>
          {item.context}
        </div>
      )}

      {repasando ? (
        /* Uno que ya contestaste. Se enseña resuelto y no se puede volver a
           responder: dejarlo interactivo significaría puntuarlo dos veces, y
           además lo que se quiere al volver es releer, no jugar otra vez. */
        <div className="ses-repaso">
          <div className="prompt-label">{t('ses.reviewing')}</div>
          <div className="sentence">{frasePreguntada(item)}</div>
          {lastChosen != null && String(lastChosen) !== '' && (
            <p className={'ses-repaso-tuya ' + (lastCorrect ? 'ok' : 'no')}>
              {t('ses.youAnswered')} <strong>{String(lastChosen)}</strong>
            </p>
          )}
        </div>
      ) : item.type === 'order' ? (
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
          /* Reintentar saca el ÚLTIMO resultado de la lista, que estando en un
             repaso no es el de este ejercicio: borraría el que no toca. */
          onRetry={repasando ? null : handleRetry}
        />
      )}

      {/* El bocadillo solo mientras contestas: al corregir, el cuadro de la
          correccion ocupa la parte de abajo y se le montaba encima. */}
      <FoxOverlay fox={fox} mudo={phase !== 'answer'} racha={racha} />
    </div>
  );
}

// La frase tal y como te la preguntaron, con el hueco todavía vacío: debajo,
// el cuadro de corrección ya enseña la solución y la traducción, así que
// repetirla arriba no aporta y se pierde de vista qué te preguntaban.
function frasePreguntada(item) {
  if (!item) return '';
  if (item.type === 'order') return item.prompt || '';
  if (item.type === 'judge') return item.sentence || '';
  if (item.type === 'cloze') return item.clozeText || '';
  if (item.type === 'open') return item.question || item.sentence || '';
  return item.sentence || '';
}
