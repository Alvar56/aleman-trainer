import React, { useMemo, useState } from 'react';
import { useTeclas, teclasDeOpciones } from '../lib/teclas.js';
import { tc } from '../lib/contenido/index.js';

function norm(s) {
  return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

// Muestra la frase con el hueco y las opciones. Al elegir, bloquea y avisa.
export default function MultipleChoice({ item, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const done = picked !== null;

  function choose(opt) {
    if (done) return;
    setPicked(opt);
    onAnswer(norm(opt) === norm(item.answer), opt);
  }

  // Deduplicación preventiva de opciones para evitar respuestas repetidas
  const safeOptions = useMemo(() => {
    const raw = item?.options || [];
    const seen = new Set();
    const clean = [];
    for (const opt of raw) {
      const key = norm(opt);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      clean.push(opt);
    }
    if (item?.answer && !clean.some(o => norm(o) === norm(item.answer))) {
      clean.unshift(item.answer);
    }
    return clean;
  }, [item?.options, item?.answer]);

  // 1, 2, 3… eligen la opción en el orden en que se ven. El número va
  // pintado en el botón: un atajo que no se anuncia no lo usa nadie.
  useTeclas(teclasDeOpciones(safeOptions, choose), !done);

  const parts = String(item.sentence).split('___');
  const answerParts = String(item.answer || '').split(/\s*\.\.\.\s*/);

  return (
    <div>
      <div className="prompt-label">{tc(item.prompt || item.anweisung || '')}</div>
      {/* `marco` enmarca la frase segun lo que sea: algo que te DICEN se
          pinta como un bocadillo y no como una frase suelta en negrita. Sin
          esto, el enunciado y la frase salian uno debajo del otro con la
          misma pinta y no se sabia cual era cual. */}
      <div className={'sentence' + (item.marco ? ' sentence-' + item.marco : '')}>
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            {p}
            {i < parts.length - 1 && (
              <span className={'blank' + (done ? ' filled' : '')}>
                {done ? (answerParts[i] || ' ') : ' '}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="options">
        {safeOptions.map((opt, i) => {
          let cls = 'option';
          if (done) {
            if (norm(opt) === norm(item.answer)) cls += ' correct';
            else if (opt === picked || norm(opt) === norm(picked)) cls += ' wrong';
            else cls += ' dim';
          }
          return (
            <button key={i} className={cls} disabled={done} onClick={() => choose(opt)}>
              {i < 9 && <span className="op-tecla">{i + 1}</span>}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
