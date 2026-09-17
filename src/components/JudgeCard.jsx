import React, { useState } from 'react';
import { t } from '../lib/i18n.js';

// Juego "¿correcto o no?": se muestra una frase (a veces con un error)
// y el usuario decide si está bien.
export default function JudgeCard({ item, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const done = picked !== null;

  function choose(saysCorrect) {
    if (done) return;
    setPicked(saysCorrect);
    onAnswer(saysCorrect === item.isCorrect, saysCorrect ? 'richtig' : 'falsch');
  }

  return (
    <div>
      <div className="prompt-label">{t('ses.judgeQ')}</div>
      <div className="sentence">{item.display}</div>
      <div className="judge-row">
        <button
          className={
            'judge-btn' +
            (done ? (item.isCorrect ? ' good' : picked === true ? ' bad' : ' dim') : '')
          }
          disabled={done}
          onClick={() => choose(true)}
        >
          {t('ses.judgeYes')}
        </button>
        <button
          className={
            'judge-btn' +
            (done ? (!item.isCorrect ? ' good' : picked === false ? ' bad' : ' dim') : '')
          }
          disabled={done}
          onClick={() => choose(false)}
        >
          {t('ses.judgeNo')}
        </button>
      </div>
    </div>
  );
}
