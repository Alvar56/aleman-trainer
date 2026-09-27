import React, { useEffect, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';
import Umlaut from './Umlaut.jsx';
import PistaLetras from './PistaLetras.jsx';

// Lückentext: el mismo ejercicio de test pero SIN las tres opciones — hay que
// escribir la palabra. Es bastante más difícil (no puedes descartar) y es lo
// que de verdad se parece a hablar, así que va aparte y no mezclado.
//
// Al comparar se ignoran mayúsculas y espacios de sobra, pero NO las Umlaut ni
// la ß: escribir "grosse" por "große" es justo el fallo que hay que corregir.
function normaliza(s) {
  return String(s || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function checkMatches(inputVal, answer) {
  const userNorm = normaliza(inputVal);
  const alts = String(answer || '').split(/\s*[\/|]\s*|\s+oder\s+/i);
  return alts.some((alt) => userNorm === normaliza(alt.replace(/\s*\.\.\.\s*/g, ' ')));
}

export default function WriteCard({ item, onAnswer }) {
  const [texto, setTexto] = useState('');
  const [hecho, setHecho] = useState(false);
  // Letras destapadas a mano. La inicial la enseña siempre el esqueleto.
  const [pistas, setPistas] = useState(0);
  const input = useRef(null);

  useEffect(() => {
    setTexto('');
    setHecho(false);
    setPistas(0);
    input.current?.focus();
  }, [item.id]);

  function comprobar() {
    if (hecho || !texto.trim()) return;
    setHecho(true);
    const isCorrect = checkMatches(texto, item.answer);
    // Las pistas van tambien: destapar letras abarata el ejercicio, igual
    // que en el juego de traducir.
    onAnswer(isCorrect, texto.trim(), pistas);
  }

  const parts = String(item.sentence).split('___');
  const answerParts = String(item.answer || '').split(/\s*\.\.\.\s*/);
  const bien = hecho && checkMatches(texto, item.answer);

  return (
    <div>
      <div className="prompt-label">{tc(item.anweisung) || t('ses.writeGap')}</div>
      <div className="sentence">
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            {p}
            {i < parts.length - 1 && (
              <span className={'blank' + (hecho ? ' filled' : '')}>
                {hecho ? (answerParts[i] || ' ') : ' '}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* La inicial de cada palabra, y más letras si las pides. Con el campo
          completamente en blanco esto no es un ejercicio de gramática: es
          acordarse de la palabra exacta o nada. */}
      <PistaLetras
        respuesta={String(item.answer || '').replace(/\s*\.\.\.\s*/g, ' ')}
        pistas={pistas}
        onPedir={() => setPistas((n) => n + 1)}
        oculto={hecho}
      />

      <div className="write-fila">
        <input
          ref={input}
          className={'ask-input write-input' + (hecho ? (bien ? ' bien' : ' mal') : '')}
          type="text"
          lang="de"
          spellCheck={false}
          value={texto}
          disabled={hecho}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              comprobar();
            } else if (
              ((e.ctrlKey || e.altKey) && (e.key === 'p' || e.key === 'P' || e.key === 'h' || e.key === 'H')) ||
              e.key === 'F2'
            ) {
              e.preventDefault();
              setPistas((n) => n + 1);
            }
          }}
          placeholder={t('ses.writePh')}
          autoComplete="off"
          autoCapitalize="off"
        />
        {!hecho && (
          <button className="btn-primary" onClick={comprobar} disabled={!texto.trim()}>
            {t('ses.check')}
          </button>
        )}
      </div>

      {/* Las Umlaut a mano son un incordio en un teclado español. Las mismas
          teclas que en el diario y en los apuntes, y de paso aquí también
          entran donde tengas el cursor y no al final. */}
      {!hecho && <Umlaut campo={input} onTexto={setTexto} />}
    </div>
  );
}
