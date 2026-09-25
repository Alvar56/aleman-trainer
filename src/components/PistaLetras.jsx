import React from 'react';
import { t } from '../lib/i18n.js';
import { esqueleto, pistasDisponibles } from '../lib/pista.js';

// El esqueleto de la respuesta y el botón de pedir otra letra. Va encima del
// campo en todos los ejercicios de escribir: gramática, vocabulario y el hueco
// de comunicación.
export default function PistaLetras({ respuesta, pistas, onPedir, oculto }) {
  if (oculto || !respuesta) return null;
  const quedan = pistasDisponibles(respuesta) - pistas;

  return (
    <div className="pista-letras">
      <code className="pl-esqueleto">{esqueleto(respuesta, pistas)}</code>
      {onPedir && quedan > 0 && (
        <button
          type="button"
          className="btn-ghost btn-sm pl-btn"
          onClick={onPedir}
          title="Atajo: Alt+P"
        >
          💡 {t('ueb.pedirPista', { n: quedan })} <span className="op-tecla" style={{ marginLeft: 4 }}>Alt+P</span>
        </button>
      )}
    </div>
  );
}
