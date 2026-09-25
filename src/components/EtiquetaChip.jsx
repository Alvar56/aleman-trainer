import React from 'react';

// El texto de una pastilla de filtro, con una versión corta para el móvil.
//
// En el teléfono, "Dificultad · Todas · Fácil (A1.1) · Medio (A1.2) · Difícil
// (A2.1 y extra)" se partía en dos renglones, y lo mismo la fila de dirección.
// Con dos rótulos —el largo y el corto— la fila entra de una sola línea sin
// perder nada en el escritorio, que es donde sobra sitio para explicarse.
//
// Se pintan los dos y el CSS enseña el que toca: así no hace falta medir la
// ventana desde JavaScript ni repintar al girar el teléfono.
export default function EtiquetaChip({ largo, corto }) {
  if (!corto || corto === largo) return <>{largo}</>;
  return (
    <>
      <span className="chip-larga">{largo}</span>
      <span className="chip-corta">{corto}</span>
    </>
  );
}
