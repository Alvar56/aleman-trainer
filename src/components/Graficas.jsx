import React, { useLayoutEffect, useRef, useState } from 'react';

// Las gráficas de la Bestenliste, dibujadas a mano en SVG.
//
// Sin librería a propósito: el HTML portable es un solo fichero que se manda
// por Drive, y meter una librería de gráficas dentro son cientos de kilobytes
// para cuatro barras y una línea. Todo lo que hay aquí son rectángulos y una
// polilínea.
//
// Se dibujan A TAMAÑO REAL: el <svg> mide lo que mide la tarjeta y el viewBox
// va en píxeles de pantalla. Antes tenía un viewBox fijo de 320 y se estiraba
// al ancho del panel, así que en el escritorio todo salía multiplicado por
// cuatro o cinco —incluidas las letras del eje, que acababan más grandes que
// los títulos—. Por eso se mide la caja con un ResizeObserver.
//
// Los colores salen de las variables del tema, así que el modo oscuro funciona
// sin tocar nada.

// Lo que ocupa el texto del eje de la izquierda.
const EJE = 52;
// Margen derecho para que las barras, líneas y fechas no queden pegadas al borde derecho
const MARGEN_DER = 4;

// Y lo que se reserva abajo para las fechas. Es el mismo en todas aunque
// alguna no escriba nada ahi: asi las lineas del cero de dos graficas
// vecinas caen a la misma altura.
const PIE = 20;

function bonito(n) {
  return Math.round(n * 10) / 10;
}

// El ancho de verdad de la caja, en píxeles.
function useAncho(ref) {
  const [ancho, setAncho] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const medir = () => setAncho(Math.round(el.clientWidth));
    medir();
    // Sin ResizeObserver (navegador viejo) se queda con la medida del primer
    // pintado, que ya es la buena mientras no cambie el tamaño de la ventana.
    if (typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return ancho;
}

// Un techo redondo para el eje: 37 minutos se dibujan sobre 40, no sobre 37,
// para que las rayas de fondo caigan en números que se leen.
function techo(max) {
  if (max <= 0) return 1;
  const orden = Math.pow(10, Math.floor(Math.log10(max)));
  for (const paso of [1, 2, 2.5, 5, 10]) {
    const t = paso * orden;
    if (t >= max) return t;
  }
  return 10 * orden;
}

function Rejilla({ ancho, alto, max, unidad }) {
  const finX = Math.max(EJE, ancho - MARGEN_DER);
  return (
    <g>
      {[0, 0.5, 1].map((f) => {
        const y = Math.round(alto - f * alto) + 0.5; // media raya: line de 1px nítida
        return (
          <g key={f}>
            <line x1={EJE} y1={y} x2={finX} y2={y} className="gr-rejilla" />
            <text x={EJE - 6} y={y + 3.5} textAnchor="end" className="gr-eje">
              {bonito(max * f)}
              {f === 1 && unidad ? unidad : ''}
            </text>
          </g>
        );
      })}
    </g>
  );
}

// ---------- Barras verticales (una por día) ----------
export function BarrasDia({ datos, valor = (d) => d.minutos, unidad = '', etiqueta, alto = 120 }) {
  const caja = useRef(null);
  const ancho = useAncho(caja);
  const altoTotal = alto + PIE;
  const max = techo(Math.max(...datos.map(valor), 0));
  const util = Math.max(0, ancho - EJE - MARGEN_DER);
  const paso = util / Math.max(1, datos.length);
  // Las barras no pasan de 16px: con siete días y un panel ancho salían
  // columnas de palmo y medio.
  const grosor = Math.max(2, Math.min(16, paso - 3));
  const finX = Math.max(EJE, ancho - MARGEN_DER);

  return (
    <div className="grafica" ref={caja}>
      {ancho > 0 && (
        <svg width={ancho} height={altoTotal} viewBox={`0 0 ${ancho} ${altoTotal}`} className="gr-svg" role="img" aria-label={etiqueta}>
          <Rejilla ancho={ancho} alto={alto} max={max} unidad={unidad} />
          {datos.map((d, i) => {
            const v = valor(d);
            const h = max ? (v / max) * alto : 0;
            const x = EJE + i * paso + (paso - grosor) / 2;
            return (
              <rect
                key={d.clave || i}
                x={x}
                y={alto - h}
                width={grosor}
                height={Math.max(v > 0 ? 3 : 0, h)}
                rx={2}
                className={'gr-barra' + (v > 0 ? '' : ' vacia')}
              >
                <title>{(d.etiqueta || d.clave) + ' · ' + bonito(v) + unidad}</title>
              </rect>
            );
          })}
          {/* Solo el primero y el último llevan fecha: con treinta etiquetas no
              se lee ninguna. */}
          <text x={EJE} y={alto + 15} className="gr-eje">{datos[0]?.etiquetaCorta || ''}</text>
          <text x={finX} y={alto + 15} textAnchor="end" className="gr-eje">
            {datos[datos.length - 1]?.etiquetaCorta || ''}
          </text>
        </svg>
      )}
    </div>
  );
}

// ---------- Línea (la precisión, tanda a tanda) ----------
export function Linea({ datos, etiqueta, alto = 120 }) {
  const caja = useRef(null);
  const ancho = useAncho(caja);
  // El mismo hueco de abajo que la de barras aunque aqui no haya fechas que
  // escribir: si no, las dos lineas del cero de una fila no coinciden.
  const altoTotal = alto + PIE;
  const util = Math.max(0, ancho - EJE - MARGEN_DER);
  const finX = Math.max(EJE, ancho - MARGEN_DER);
  const max = 100;
  if (datos.length < 2) return null;
  const px = (i) => EJE + (i / (datos.length - 1)) * util;
  const py = (v) => alto - (v / max) * alto;

  const linea = datos.map((d, i) => `${px(i)},${py(d.media ?? 0)}`).join(' ');
  const area = `${EJE},${alto} ${linea} ${finX},${alto}`;

  return (
    <div className="grafica" ref={caja}>
      {ancho > 0 && (
        <svg width={ancho} height={altoTotal} viewBox={`0 0 ${ancho} ${altoTotal}`} className="gr-svg" role="img" aria-label={etiqueta}>
          <Rejilla ancho={ancho} alto={alto} max={max} unidad="%" />
          <polygon points={area} className="gr-area" />
          <polyline points={linea} className="gr-linea" />
          {/* Los puntos sueltos, flojitos detrás: se ve de dónde sale la media
              sin que la línea deje de mandar. */}
          {datos.map((d, i) => (
            <circle key={i} cx={px(i)} cy={py(d.suelta)} r={2} className="gr-punto">
              <title>{d.suelta + '%'}</title>
            </circle>
          ))}
        </svg>
      )}
    </div>
  );
}

// ---------- Barras horizontales (por juego, por tema) ----------
export function BarrasH({ filas, unidad = '%', max = 100 }) {
  return (
    <div className="gr-hbarras">
      {filas.map((f) => (
        <div className="gr-hfila" key={f.id || f.nombre}>
          <span className="gr-hnombre" title={f.nombre}>{f.nombre}</span>
          <span className="gr-hpista">
            <span
              className={'gr-hrelleno' + (f.tono ? ' ' + f.tono : '')}
              style={{ width: Math.max(2, ((f.valor || 0) / max) * 100) + '%' }}
            />
          </span>
          <span className="gr-hvalor">
            {f.valor == null ? '—' : bonito(f.valor) + unidad}
          </span>
          {f.nota && <span className="gr-hnota">{f.nota}</span>}
        </div>
      ))}
    </div>
  );
}
