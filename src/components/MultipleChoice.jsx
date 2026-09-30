import React, { useMemo, useState } from 'react';
import { useTeclas, teclasDeOpciones } from '../lib/teclas.js';
import { tc } from '../lib/contenido/index.js';

function norm(s) {
  return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function mezclarArray(arr) {
  const x = [...arr];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

function TailLeft() {
  return (
    <svg className="bubble-tail-left" width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
      <path d="M 8 0 L 0 14.2 L 8 14.2 Z" className="tail-fill" />
      <path d="M 9.5 0 L 0.8 14.2 L 9.5 14.2" className="tail-stroke" />
    </svg>
  );
}

function TailRight() {
  return (
    <svg className="bubble-tail-right" width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
      <path d="M 4 0 L 12 14.2 L 4 14.2 Z" className="tail-fill" />
      <path d="M 2.5 0 L 11.2 14.2 L 2.5 14.2" className="tail-stroke" />
    </svg>
  );
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

  // Deduplicación preventiva de opciones y orden SIEMPRE aleatorio
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
    if (item?.answer && !clean.some((o) => norm(o) === norm(item.answer))) {
      clean.push(item.answer);
    }
    return mezclarArray(clean);
  }, [item?.id, item?.sentence, item?.prompt, item?.answer, (item?.options || []).join('||')]);

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
        {item.marco === 'dicho' && <TailLeft />}
        {item.marco === 'tuyo' && <TailRight />}
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
      {/* `marcoOpciones`: cuando las opciones son cosas que DICES -las
          respuestas de "¿Que le contestas?", las frases de "Elegir la
          frase"- se pintan como bocadillos hacia el otro lado, para que se
          vea de un vistazo quien habla en cada sitio. Cuando son
          traducciones ("¿Que significa?") no: eso no lo dice nadie. */}
      <div className={'options' + (item.marcoOpciones ? ' options-' + item.marcoOpciones : '')}>
        {safeOptions.map((opt, i) => {
          let cls = 'option';
          if (done) {
            if (norm(opt) === norm(item.answer)) cls += ' correct';
            else if (opt === picked || norm(opt) === norm(picked)) cls += ' wrong';
            else cls += ' dim';
          }
          return (
            <button key={i} className={cls} disabled={done} onClick={() => choose(opt)}>
              {item.marcoOpciones === 'tuyo' && <TailRight />}
              {i < 9 && <span className="op-tecla">{i + 1}</span>}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
