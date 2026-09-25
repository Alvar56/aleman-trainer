import React, { useEffect, useRef, useState } from 'react';

// El reloj de la tanda, el mismo en todos los ejercicios: minutos y segundos
// en la fila de contexto, a la derecha.
//
// Antes lo llevaba solo gramática, y Emparejar contaba segundos sueltos ("87s")
// en vez de 1:27. Cada juego ya se apunta cuándo empezó para el resumen, así
// que aquí solo se le pasa esa marca y este cuenta.
//
// El tic es suyo: si lo llevara la pantalla, cada segundo obligaría a redibujar
// el ejercicio entero.
export default function Reloj({ desde, parado = false }) {
  const inicio = useRef(desde || Date.now());
  const [ahora, setAhora] = useState(() => Date.now());

  // Si la tanda se reinicia (otra vuelta), el reloj vuelve a empezar.
  useEffect(() => {
    if (desde) inicio.current = desde;
    setAhora(Date.now());
  }, [desde]);

  useEffect(() => {
    if (parado) return undefined;
    const id = setInterval(() => setAhora(Date.now()), 1000);
    return () => clearInterval(id);
  }, [parado]);

  // Con suelo en cero: si el juego se apunta la hora de salida un instante
  // después de pintarse, el primer render daba un segundo en negativo.
  const seg = Math.max(0, Math.floor((ahora - inicio.current) / 1000));
  const mm = String(Math.floor(seg / 60)).padStart(2, '0');
  const ss = String(seg % 60).padStart(2, '0');

  return <span className="pill">⏱ {mm}:{ss}</span>;
}
