import React, { useEffect, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

function normaliza(s) {
  return String(s || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function isGapCorrect(userVal, expected) {
  const userNorm = normaliza(userVal);
  const alts = String(expected || '').split(/\s*[\/|]\s*|\s+oder\s+/i);
  return alts.some((alt) => userNorm === normaliza(alt));
}

export default function ClozeTest({ item, onAnswer }) {
  const { clozeText = '', clozeAnswers = [], clozeChoices = [] } = item;
  const numGaps = clozeAnswers.length;
  const [answers, setAnswers] = useState(Array(numGaps).fill(''));
  const [hecho, setHecho] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    setAnswers(Array(numGaps).fill(''));
    setHecho(false);
    if (inputsRef.current[0]) inputsRef.current[0].focus();
  }, [item.id, numGaps]);

  function handleChange(i, val) {
    if (hecho) return;
    const nue = [...answers];
    nue[i] = val;
    setAnswers(nue);
  }

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      if (i < numGaps - 1) {
        inputsRef.current[i + 1]?.focus();
      } else {
        comprobar();
      }
    }
  }

  function comprobar() {
    if (hecho || answers.some((a) => !a.trim())) return;
    setHecho(true);

    // Evaluamos si todos los huecos están bien
    const correct = answers.every((a, i) => isGapCorrect(a, clozeAnswers[i]));
    onAnswer(correct, answers.join(', '));
  }

  // Partir el texto por "___"
  const parts = clozeText.split('___');

  // El hueco al que va a caer la palabra que pulses. Se marca para que se vea
  // dónde aterriza: antes el único hueco distinto era el que tenía el foco, y
  // como el foco se pinta igual que un hueco lleno, parecía ya contestado.
  const destino = answers.findIndex((a) => !a.trim());

  // TODOS los huecos miden lo mismo, y lo que miden sale de la palabra más
  // larga que haya en juego. Antes cada hueco se dimensionaba con SU respuesta
  // (`length * 14px`), así que el ancho te chivaba de cuántas letras era la
  // palabra y además dejaba la frase con cajas de tamaños distintos.
  const largo = Math.max(
    6,
    ...clozeChoices.map((c) => String(c).length),
    ...clozeAnswers.map((a) => String(a).length)
  );

  return (
    <div>
      <div className="prompt-label">{tc(item.anweisung) || t('ses.writeGap')}</div>

      <div className="sentence cloze-frase" style={{ '--cloze-ancho': largo + 1.5 + 'ch' }}>
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            <span>{p}</span>
            {i < numGaps && (
              <input
                ref={(el) => (inputsRef.current[i] = el)}
                type="text"
                className={
                  'cloze-hueco' +
                  (answers[i] ? ' puesto' : '') +
                  (!hecho && i === destino ? ' destino' : '') +
                  (hecho ? (isGapCorrect(answers[i], clozeAnswers[i]) ? ' bien' : ' mal') : '')
                }
                value={answers[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onDragOver={(e) => {
                  if (!hecho) e.preventDefault();
                }}
                onDrop={(e) => {
                  if (hecho) return;
                  e.preventDefault();
                  const val = e.dataTransfer.getData('text/plain');
                  if (val) handleChange(i, val);
                }}
                disabled={hecho}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {clozeChoices && clozeChoices.length > 0 && (
        <div className="cloze-banco">
          {clozeChoices.map((choice, i) => {
            // Cuántas veces aparece esta palabra en las opciones hasta este índice
            const timesInChoices = clozeChoices.slice(0, i + 1).filter((c) => c === choice).length;
            // Cuántas veces está ya puesta en las respuestas
            const timesUsed = answers.filter((a) => a === choice).length;
            const isUsed = timesUsed >= timesInChoices;
            return (
              <button
                key={i}
                className="cloze-pieza"
                draggable={!hecho && !isUsed}
                disabled={hecho || isUsed}
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/plain', choice);
                  e.dataTransfer.effectAllowed = 'copy';
                }}
                onClick={() => {
                  if (hecho || isUsed) return;
                  const firstEmpty = answers.findIndex((a) => !a.trim());
                  if (firstEmpty !== -1) handleChange(firstEmpty, choice);
                }}
              >
                {choice}
              </button>
            );
          })}
        </div>
      )}

      {!hecho && (
        <div className="cloze-pie">
          <button className="btn-primary" onClick={comprobar} disabled={answers.some((a) => !a.trim())}>
            {t('ses.check')}
          </button>
        </div>
      )}
    </div>
  );
}
