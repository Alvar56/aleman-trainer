import React, { useEffect, useRef, useState } from 'react';
import { t, pick } from '../lib/i18n.js';

// La espera de lo que se busca en la web: noticias y canciones.
//
// Es distinta de <Cargando/> a propósito. Cuando la IA escribe ejercicios, lo
// único que puedes decir es "sigue viva". Aquí sí se sabe algo más: está
// rastreando medios, y eso se puede enseñar. De ahí el radar y los nombres de
// los sitios pasando por debajo — se entiende de un vistazo qué está pasando
// sin leer una palabra.
//
// Lo que NO hace, igual que en Cargando: fingir un porcentaje. No sabemos
// cuántas búsquedas le van a hacer falta, así que el radar gira y el reloj
// cuenta, pero nadie promete que quede poco.
//
// Los nombres de los medios van rotando en bucle y ninguno se queda "hecho":
// marcar ORF como completado sería mentir, porque no tenemos ni idea de por
// dónde va. Rotan para decir "está mirando por ahí", nada más.

const CADA_PASO = 5000;
const CADA_FUENTE = 900;
const LARGO = 75; // a partir de aquí se avisa de que va para largo

export default function Buscando({ titulo, pasos = [], fuentes = [], icono = '🔎' }) {
  const [i, setI] = useState(0);
  const [f, setF] = useState(0);
  const [seg, setSeg] = useState(0);
  const desde = useRef(Date.now());

  useEffect(() => {
    const reloj = setInterval(() => setSeg(Math.round((Date.now() - desde.current) / 1000)), 1000);
    return () => clearInterval(reloj);
  }, []);

  useEffect(() => {
    if (pasos.length < 2) return;
    // se queda en el último: inventar pasos que no ocurren es mentir
    const id = setInterval(() => setI((n) => Math.min(n + 1, pasos.length - 1)), CADA_PASO);
    return () => clearInterval(id);
  }, [pasos.length]);

  useEffect(() => {
    if (fuentes.length < 2) return;
    const id = setInterval(() => setF((n) => (n + 1) % fuentes.length), CADA_FUENTE);
    return () => clearInterval(id);
  }, [fuentes.length]);

  const mm = Math.floor(seg / 60);
  const ss = String(seg % 60).padStart(2, '0');

  return (
    <div className="card buscando" role="status" aria-live="polite">
      <div className="bs-cabecera">
        {/* Radar: los anillos salen del centro hacia fuera. El emoji se queda
            quieto, que es lo que se lee. */}
        <span className="bs-radar" aria-hidden="true">
          <span className="bs-onda" />
          <span className="bs-onda" />
          <span className="bs-onda" />
          <span className="bs-centro">{icono}</span>
        </span>

        <div className="bs-texto">
          {titulo && <strong className="bs-titulo">{titulo}</strong>}
          <div className="bs-paso">
            {pasos[i] || t('generating')}
            <span className="cg-puntos" aria-hidden="true"><i /><i /><i /></span>
          </div>
        </div>

        <span className="bs-reloj">{mm}:{ss}</span>
      </div>

      {fuentes.length > 0 && (
        <div className="bs-fuentes" aria-hidden="true">
          {fuentes.map((nombre, n) => (
            <span className={'bs-fuente' + (n === f ? ' mirando' : '')} key={nombre}>
              {nombre}
            </span>
          ))}
        </div>
      )}

      <div className="cg-barra" aria-hidden="true"><span /></div>

      {seg >= LARGO && (
        <p className="cg-largo muted">
          {pick(
            'Está tardando más de lo normal, pero sigue buscando. Puedes irte a otra sección: no se pierde.',
            'This is taking longer than usual, but it is still searching. You can go to another section: nothing is lost.'
          )}
        </p>
      )}
    </div>
  );
}

// Versión de una línea, para cuando ya hay contenido en pantalla y lo que se
// está haciendo es refrescarlo. Antes esto era un "⏳ Generando…" en gris que
// no se movía: parecía que la app se había quedado colgada.
export function BuscandoLinea({ texto }) {
  return (
    <div className="bs-linea" role="status" aria-live="polite">
      <span className="bs-lupa" aria-hidden="true">🔎</span>
      <span>{texto || t('generating')}</span>
      <span className="cg-puntos" aria-hidden="true"><i /><i /><i /></span>
    </div>
  );
}
