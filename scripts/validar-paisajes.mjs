// ¿Son válidos los SVG de los paisajes de Felix?
//
// Los paisajes van embebidos en index.css como data URI, así que si uno se
// queda con las etiquetas descuadradas el navegador no dice nada: se limita a
// no pintar el fondo. Pasó al reemplazar el molino de la pradera (un </g> de
// más) y la pantalla se quedó en blanco sin ningún error en consola.
//
// Uso: node scripts/validar-paisajes.mjs

import fs from 'node:fs';
import path from 'node:path';

const css = fs.readFileSync(path.join(process.cwd(), 'src', 'index.css'), 'utf8');

// Cada bloque .fox-escena-xxx / .fox-suelo-xxx con su data URI. Los suelos
// son las franjas fijas de abajo durante los ejercicios: se olvidan con
// facilidad porque van en otras reglas, así que se revisan aquí también.
const re = /\.fox-(escena|suelo)-([a-zA-Z]+)[^{]*\{[^}]*?background-image:\s*url\("data:image\/svg\+xml,([^"]+)"\)/gs;

const problemas = [];
let n = 0;

for (const m of css.matchAll(re)) {
  const nombre = `${m[1]} ${m[2]}`;
  n += 1;
  let svg;
  try {
    svg = decodeURIComponent(m[3]);
  } catch {
    problemas.push(`${nombre}: el data URI no se puede descodificar`);
    continue;
  }

  // Etiquetas emparejadas. Se cuentan las de apertura que NO se cierran solas.
  for (const tag of ['g', 'svg', 'defs', 'style', 'linearGradient', 'radialGradient']) {
    const abre = (svg.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
    const cierra = (svg.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    if (abre !== cierra) problemas.push(`${nombre}: <${tag}> abre ${abre} y cierra ${cierra}`);
  }

  // Referencias a gradientes que no existen.
  const ids = new Set([...svg.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]));
  for (const u of svg.matchAll(/url\(#([^)]+)\)/g)) {
    if (!ids.has(u[1])) problemas.push(`${nombre}: usa url(#${u[1]}) y ese id no existe`);
  }

  // transform-origin en palabras (center, bottom…) sin transform-box.
  //
  // En SVG eso NO se refiere a la caja del elemento: se resuelve contra el
  // viewBox entero. Una mata de hierba de 20 unidades en un lienzo de 1000
  // acaba girando alrededor de un punto que está a media pantalla, y al
  // animarla sale volando. Pasó con la hierba de la pradera.
  // Se mira la REGLA entera, desde su `{`: el primer intento de esto sólo
  // miraba hasta el `;` anterior, y como `transform-box` va en su propia
  // declaración nunca lo veía y daba 14 falsos positivos.
  for (const regla of svg.matchAll(/\{([^}]*)\}/g)) {
    const cuerpo = regla[1];
    const org = /transform-origin:\s*([^;}]+)/.exec(cuerpo);
    if (!org) continue;
    if (/\dpx/.test(org[1])) continue;                  // absoluto: no hace falta
    if (/transform-box:\s*fill-box/.test(cuerpo)) continue;
    problemas.push(`${nombre}: transform-origin: ${org[1].trim()} sin transform-box: fill-box`);
  }

  // Un transform-origin de una animación que apunte fuera del lienzo suele
  // querer decir que algo se movió y el eje se quedó atrás.
  const vb = /viewBox="0 0 (\d+) (\d+)"/.exec(svg);
  if (vb) {
    const [, an, al] = vb.map(Number);
    for (const o of svg.matchAll(/transform-origin:\s*(\d+)px\s+(\d+)px/g)) {
      if (Number(o[1]) > an || Number(o[2]) > al) {
        problemas.push(`${nombre}: transform-origin ${o[1]}px ${o[2]}px se sale del viewBox ${an}x${al}`);
      }
    }
  }
}

console.log(`${n} dibujos (paisajes + franjas de suelo)`);
if (!problemas.length) {
  console.log('✓ todos los SVG están bien formados');
} else {
  for (const p of problemas) console.log('   ' + p);
  console.log(`\n${problemas.length} cosas que mirar`);
  process.exitCode = 1;
}
