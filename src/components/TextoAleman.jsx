import React from 'react';
import { trozosAleman } from '../lib/aleman.js';

// Un texto explicativo con el alemán que lleva dentro en cursiva.
//
// Se usa donde se explica algo en castellano o en inglés: la teoría de las
// lecciones y el "¿por qué?" de los ejercicios. En los ejemplos y las frases
// del libro no hace falta: allí TODO es alemán y la cursiva no distinguiría
// nada.
export default function TextoAleman({ texto, className }) {
  const trozos = trozosAleman(texto);
  if (!trozos.length) return null;
  return (
    <>
      {trozos.map((t, i) =>
        t.de ? (
          <i className={'de-it' + (className ? ' ' + className : '')} key={i}>
            {t.texto}
          </i>
        ) : (
          <React.Fragment key={i}>{t.texto}</React.Fragment>
        )
      )}
    </>
  );
}
