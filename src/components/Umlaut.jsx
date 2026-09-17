import React, { useLayoutEffect, useRef } from 'react';

// Las letras que un teclado español no tiene. Se usan en el diario, en los
// apuntes de clase y en los ejercicios de escribir.
const LETRAS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

// Mete un trozo de texto DONDE ESTÁ EL CURSOR de un input o un textarea, y
// deja el cursor justo detrás.
//
// Lo de respetar el cursor no es un capricho: en una casilla de una palabra da
// igual, pero en el diario y en los apuntes escribes párrafos. Si vuelves a
// mitad del texto a arreglar "schon" -> "schön" y la ö te cae al final del
// todo, el botón estorba más de lo que ayuda.
//
// Colocar el cursor hay que hacerlo DESPUÉS de que React repinte: al cambiar
// el value de un campo controlado, el navegador lo manda al final. Por eso la
// posición se apunta en un ref y se aplica en useLayoutEffect, antes de que se
// llegue a ver el salto.
export function useInsercion(campo) {
  const cursor = useRef(null);

  useLayoutEffect(() => {
    if (cursor.current === null) return;
    const p = cursor.current;
    cursor.current = null;
    const el = campo?.current;
    if (!el) return;
    el.focus();
    el.setSelectionRange(p, p);
  });

  return function insertar(trozo, onTexto) {
    const el = campo?.current;
    if (!el) return;
    const ini = el.selectionStart ?? el.value.length;
    const fin = el.selectionEnd ?? ini;
    // Si tenías texto seleccionado, lo sustituye: es lo que hace el teclado.
    onTexto(el.value.slice(0, ini) + trozo + el.value.slice(fin));
    cursor.current = ini + trozo.length;
  };
}

// Teclas de Umlaut para un <input> o un <textarea>. `campo` es su ref y
// `onTexto` recibe el texto ya completo, para que el padre lo guarde igual que
// guarda cualquier otra tecla.
export default function Umlaut({ campo, onTexto, disabled = false }) {
  const insertar = useInsercion(campo);

  return (
    <div className="umlaut-fila">
      {LETRAS.map((ch) => (
        <button
          key={ch}
          type="button"
          className="hang-tecla"
          onClick={() => insertar(ch, onTexto)}
          disabled={disabled}
          /* Fuera del recorrido del tabulador: son un atajo para el ratón, y
             colarlas entre el texto y el botón de guardar molesta al teclado. */
          tabIndex={-1}
        >
          {ch}
        </button>
      ))}
    </div>
  );
}
