import React, { useEffect, useRef, useState } from 'react';
import { t, pick } from '../lib/i18n.js';

// La espera de las cosas con IA: entre uno y tres minutos. Con un texto fijo no
// hay forma de saber si sigue viva o se ha quedado colgada, y eso es lo que
// pone nervioso, no la espera en sí.
//
// Aquí hay tres cosas moviéndose, y cada una responde a una pregunta:
//   la barra   → ¿sigue funcionando?
//   los pasos  → ¿por dónde va?
//   el reloj   → ¿cuánto llevo esperando?
//
// La barra NO finge un porcentaje: no sabemos cuánto falta, y una barra que
// llega al 90% y se queda ahí miente peor que no tener barra.

// Cada cuánto cambia el mensaje de paso.
const CADA = 6000;

// Aviso de que va largo, para que no parezca colgado.
const LARGO = 90;

export default function Cargando({ pasos = [], titulo = '', icono = '✨' }) {
  const [i, setI] = useState(0);
  const [seg, setSeg] = useState(0);
  const desde = useRef(Date.now());

  useEffect(() => {
    const reloj = setInterval(() => {
      setSeg(Math.round((Date.now() - desde.current) / 1000));
    }, 1000);
    return () => clearInterval(reloj);
  }, []);

  useEffect(() => {
    if (pasos.length < 2) return;
    // se queda en el último: inventar pasos que no ocurren es mentir
    const paso = setInterval(() => {
      setI((n) => Math.min(n + 1, pasos.length - 1));
    }, CADA);
    return () => clearInterval(paso);
  }, [pasos.length]);

  const mm = Math.floor(seg / 60);
  const ss = String(seg % 60).padStart(2, '0');

  return (
    <div className="card cargando" role="status" aria-live="polite">
      <div className="cg-cabecera">
        {/* El aro gira; el emoji se queda quieto en el centro, si no marea. */}
        <span className="cg-aro" aria-hidden="true">
          <span className="cg-icono">{icono}</span>
        </span>
        <div className="cg-texto">
          {titulo && <strong className="cg-titulo">{titulo}</strong>}
          <div className="cg-paso">
            {pasos[i] || t('generating')}
            <span className="cg-puntos" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
        <span className="cg-reloj">{mm}:{ss}</span>
      </div>

      <div className="cg-barra" aria-hidden="true">
        <span />
      </div>

      {seg >= LARGO && (
        <p className="cg-largo muted">
          {pick(
            'Está tardando más de lo normal, pero sigue en marcha. Puedes irte a otra sección: no se pierde.',
            'This is taking longer than usual, but it is still running. You can go to another section: nothing is lost.'
          )}
        </p>
      )}
    </div>
  );
}
