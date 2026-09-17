import React, { useState } from 'react';

// Muestra la frase con el hueco y las opciones. Al elegir, bloquea y avisa.
export default function MultipleChoice({ item, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const done = picked !== null;

  function choose(opt) {
    if (done) return;
    setPicked(opt);
    onAnswer(opt === item.answer, opt);
  }

  const parts = String(item.sentence).split('___');
  const answerParts = String(item.answer || '').split(/\s*\.\.\.\s*/);

  return (
    <div>
      <div className="prompt-label">{item.prompt || item.anweisung || ''}</div>
      <div className="sentence">
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            {p}
            {i < parts.length - 1 && (
              <span className={'blank' + (done ? ' filled' : '')}>
                {done ? (answerParts[i] || ' ') : ' '}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="options">
        {(item.options || []).map((opt, i) => {
          let cls = 'option';
          if (done) {
            if (opt === item.answer) cls += ' correct';
            else if (opt === picked) cls += ' wrong';
            else cls += ' dim';
          }
          return (
            <button key={i} className={cls} disabled={done} onClick={() => choose(opt)}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
