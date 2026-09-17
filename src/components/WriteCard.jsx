import React, { useEffect, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import Umlaut from './Umlaut.jsx';

// Lückentext: el mismo ejercicio de test pero SIN las tres opciones — hay que
// escribir la palabra. Es bastante más difícil (no puedes descartar) y es lo
// que de verdad se parece a hablar, así que va aparte y no mezclado.
//
// Al comparar se ignoran mayúsculas y espacios de sobra, pero NO las Umlaut ni
// la ß: escribir "grosse" por "große" es justo el fallo que hay que corregir.
function normaliza(s) {
  return String(s || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

export default function WriteCard({ item, onAnswer }) {
  const [texto, setTexto] = useState('');
  const [hecho, setHecho] = useState(false);
  const input = useRef(null);

  useEffect(() => {
    setTexto('');
    setHecho(false);
    input.current?.focus();
  }, [item.id]);

  function comprobar() {
    if (hecho || !texto.trim()) return;
    setHecho(true);
    const esperado = normaliza(String(item.answer || '').replace(/\s*\.\.\.\s*/g, ' '));
    onAnswer(normaliza(texto) === esperado, texto.trim());
  }

  const parts = String(item.sentence).split('___');
  const answerParts = String(item.answer || '').split(/\s*\.\.\.\s*/);
  const bien = hecho && normaliza(texto) === normaliza(String(item.answer || '').replace(/\s*\.\.\.\s*/g, ' '));

  return (
    <div>
      <div className="prompt-label">{item.anweisung || t('ses.writeGap')}</div>
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
          onKeyDown={(e) => e.key === 'Enter' && comprobar()}
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
