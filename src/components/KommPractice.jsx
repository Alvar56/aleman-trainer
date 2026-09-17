import React, { useMemo, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import { recordKommPracticed } from '../lib/progress.js';
import MultipleChoice from './MultipleChoice.jsx';
import WordOrder from './WordOrder.jsx';

// Miniejercicio de una función comunicativa, con las frases que YA trae el
// Kursbuch. Sin IA: las Wendungen están impresas en el libro, así que esto
// funciona con la IA apagada, que antes dejaba esta sección clavada en 0.
//
// Y se corrige solo. La primera versión te preguntaba "¿la sabías?" y te fiabas
// de tu palabra; eso no es acertar, es decir que sí. Aquí o eliges bien o
// colocas bien las palabras, y el porcentaje solo sube si apruebas.
// Hay que acertarlo TODO. Con un 80% se aprobaba fallando una de tres, que
// para tres frases del libro es demasiado barato.
export const APROBADO = 100;

function mezclar(a) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

// Una pregunta por frase. Se alternan los dos tipos para que no sea siempre lo
// mismo, y porque miden cosas distintas: elegir es reconocer, ordenar te obliga
// a colocar el verbo donde va, que es donde de verdad se falla en alemán.
//
// `ajenas` son las frases del resto de la lección: hacen de distractores. Sin
// ellas el test se resuelve por descarte y no vale nada.
function construir(wendungen, ajenas) {
  return mezclar(wendungen).map((w, i) => {
    const palabras = String(w.de).trim().split(/\s+/);
    const puedeOrdenar = palabras.length >= 3 && palabras.length <= 12;
    const distractores = mezclar(ajenas.filter((x) => x !== w.de)).slice(0, 3);

    if (i % 2 === 1 && puedeOrdenar) {
      return {
        tipo: 'orden',
        item: {
          prompt: w.es + (w.wann ? ` — ${w.wann}` : ''),
          tokens: mezclar(palabras),
          solution: palabras
        }
      };
    }
    // Si no hay con qué despistar, no se monta un test de una sola opción:
    // se cae a ordenar, que no necesita distractores.
    if (distractores.length < 2) {
      if (!puedeOrdenar) return null;
      return {
        tipo: 'orden',
        item: { prompt: w.es, tokens: mezclar(palabras), solution: palabras }
      };
    }
    return {
      tipo: 'mc',
      item: {
        prompt: t('komm.exPick'),
        sentence: w.es + (w.wann ? `  (${w.wann})` : ''),
        answer: w.de,
        options: mezclar([w.de, ...distractores])
      }
    };
  }).filter(Boolean);
}

export default function KommPractice({ lektionId, funktion, todasLasFrases = [], onSalir, onHecho }) {
  const [vuelta, setVuelta] = useState(0);
  const preguntas = useMemo(
    () => construir(funktion.wendungen || [], todasLasFrases),
    [funktion, todasLasFrases, vuelta]
  );
  const [i, setI] = useState(0);
  const [juzgada, setJuzgada] = useState(null); // null | true | false
  const aciertos = useRef(0);
  const [fin, setFin] = useState(null);

  if (!preguntas.length) return null;

  function contestar(ok) {
    if (juzgada !== null) return;
    if (ok) aciertos.current += 1;
    setJuzgada(ok);
  }

  function siguiente() {
    if (i + 1 < preguntas.length) {
      setI(i + 1);
      setJuzgada(null);
      return;
    }
    const pct = Math.round((aciertos.current / preguntas.length) * 100);
    // Solo cuenta si apruebas. Terminar no basta: la idea era acertar.
    if (pct >= APROBADO) {
      recordKommPracticed(lektionId, funktion.funktion, pct);
      onHecho?.();
    }
    setFin({ pct, aciertos: aciertos.current, total: preguntas.length });
  }

  function otraVez() {
    aciertos.current = 0;
    setI(0);
    setJuzgada(null);
    setFin(null);
    setVuelta((v) => v + 1); // frases barajadas de nuevo, no la misma tanda
  }

  if (fin) {
    const aprobado = fin.pct >= APROBADO;
    return (
      <div className="card center stack kp-fin">
        <div className={'kp-nota' + (aprobado ? ' bien' : ' mal')}>{fin.pct}%</div>
        <p>{t('komm.exScore', { a: fin.aciertos, b: fin.total })}</p>
        <p className={aprobado ? '' : 'muted'}>
          {aprobado ? t('komm.exPassed') : t('komm.exFailed', { p: APROBADO })}
        </p>
        <div className="row" style={{ gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className={aprobado ? 'btn-ghost' : 'btn-primary'} onClick={otraVez}>
            {t('komm.practiceAgain')}
          </button>
          <button className={aprobado ? 'btn-primary' : 'btn-ghost'} onClick={onSalir}>
            {t('back')}
          </button>
        </div>
      </div>
    );
  }

  const p = preguntas[i];

  return (
    <div className="stack kp">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onSalir} title={t('back')}>✕</button>
        <div className="bar"><span style={{ width: ((i + (juzgada !== null ? 1 : 0)) / preguntas.length) * 100 + '%' }} /></div>
        <span className="timer">{i + 1}/{preguntas.length}</span>
      </div>

      <div className="prompt-label">{funktion.funktion}</div>

      {/* key: sin él, React reaprovecha el componente entre preguntas y se
          queda la respuesta anterior ya marcada. */}
      {p.tipo === 'mc' ? (
        <MultipleChoice key={i} item={p.item} onAnswer={contestar} />
      ) : (
        <WordOrder key={i} item={p.item} onAnswer={contestar} />
      )}

      {juzgada !== null && (
        <div className="kp-pie">
          <span className={juzgada ? 'kp-ok' : 'kp-ko'}>
            {juzgada ? t('komm.exRight') : t('komm.exWrong', { f: p.item.answer || p.item.solution.join(' ') })}
          </span>
          <button className="btn-primary" onClick={siguiente}>
            {i + 1 < preguntas.length ? t('ueb.siguiente') : t('ueb.terminar')}
          </button>
        </div>
      )}
    </div>
  );
}
