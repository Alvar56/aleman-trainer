// Baja de tono los paisajes de Felix y las franjas de suelo de los ejercicios.
//
// Los fondos venían con la gama viva de Tailwind. A pantalla completa, con el
// zorro delante, esos verdes y naranjas se ven de rotulador.
//
// Hay DOS juegos de dibujos y es fácil olvidarse del segundo:
//   .fox-escena-*  el paisaje grande del modal del zorro
//   .fox-suelo-*   la franja de suelo fija abajo mientras haces ejercicios
// La primera versión de este script sólo miraba `.fox-escena-`, así que las
// franjas se quedaron chillonas. Ahora recorre las dos.
//
// Sólo cambia colores: ni una etiqueta se mueve. Aun así comprueba el SVG
// antes de escribir, y es idempotente (los tonos ya bajados no son claves).
//
// Uso: node scripts/bajar-saturacion.mjs [--probar]

import fs from 'node:fs';
import path from 'node:path';

const RUTA = path.join(process.cwd(), 'src', 'index.css');
const soloProbar = process.argv.includes('--probar');

// hierba y follaje
const VERDES = {
  '#dcfce7': '#e6ece3', '#bbf7d0': '#d3e3d1', '#a7f3d0': '#c7e0d4',
  '#86efac': '#c3ddb4', '#6ee7b7': '#a9d5c3', '#4ade80': '#a3c895',
  '#22c55e': '#86ab77', '#10b981': '#67a892', '#16a34a': '#6f9462',
  '#059669': '#5a917c', '#15803d': '#5c7d52', '#047857': '#41705d',
  '#166534': '#4c6a45', '#14532d': '#40573a', '#052e16': '#33452f',
  '#84cc16': '#a3b571', '#65a30d': '#849161', '#4d7c0f': '#6d7f4d',
  '#3f6212': '#5a6b42', '#1a2e05': '#3a442c',
};

// arena
const ARENAS = {
  '#fde047': '#ecd99a', '#facc15': '#ddc07a', '#f59e0b': '#d3a869',
  '#f97316': '#d89467', '#d97706': '#b8924f', '#ea580c': '#c9714a',
  '#c2410c': '#a96246', '#9a3412': '#8a5540', '#7c2d12': '#6d4734',
  '#991b1b': '#8a4a44', '#701a75': '#6a4468', '#fed7aa': '#ecdac4',
};

// madera de interiores (aula, café)
const MADERAS = {
  '#d97706': '#b8924f', '#b45309': '#9c7b4e', '#92400e': '#84603d',
  '#78350f': '#6d5334', '#451a03': '#3f3021',
};

// Qué gama toca a cada dibujo. Se nombra una por una a propósito: en el aula
// los naranjas del suelo son madera, pero los rojos y amarillos son la
// bandera y los lápices, y ésos no se tocan.
// 'schloss' y 'cafe' estaban aquí y se retiraron del juego.
const GAMAS = {
  wiese: [VERDES], wald: [VERDES], berge: [VERDES],
  strand: [ARENAS], wueste: [VERDES, ARENAS],
  klasse: [VERDES, MADERAS],
  eis: [], stadt: [], weltraum: [], nadaFondo: [],
};

const css = fs.readFileSync(RUTA, 'utf8');
const re = /(\.fox-(?:escena|suelo)-[a-zA-Z]+[^{]*\{[^}]*?background-image:\s*url\("data:image\/svg\+xml,)([^"]+)("\))/gs;

const etiquetas = ['g', 'svg', 'defs', 'style', 'linearGradient', 'radialGradient'];
const contar = (s, t) => (s.match(new RegExp(t, 'g')) || []).length;

let total = 0;
const resumen = [];

const nuevo = css.replace(re, (todo, antes, datos, despues) => {
  const [, tipo, nombre] = /\.fox-(escena|suelo)-([a-zA-Z]+)/.exec(antes);
  const gamas = GAMAS[nombre];
  if (!gamas) throw new Error(`${tipo} "${nombre}" no está en GAMAS: añádelo`);

  let svg = decodeURIComponent(datos);
  const mapa = Object.assign({}, ...gamas);

  let n = 0;
  for (const [viejo, bueno] of Object.entries(mapa)) {
    const veces = contar(svg, viejo);
    if (!veces) continue;
    svg = svg.split(viejo).join(bueno);
    n += veces;
  }
  if (!n) return todo;

  for (const t of etiquetas) {
    if (contar(svg, `<${t}[\\s>]`) !== contar(svg, `</${t}>`)) {
      throw new Error(`${tipo} ${nombre}: <${t}> quedó descuadrada`);
    }
  }

  total += n;
  resumen.push(`   ${tipo.padEnd(6)} ${nombre.padEnd(9)} ${n} colores`);
  return antes + encodeURIComponent(svg) + despues;
});

console.log(resumen.length ? resumen.join('\n') : '   nada que cambiar');
console.log(`\n${total} colores bajados de tono`);

if (soloProbar) {
  console.log('(--probar: no se ha escrito nada)');
} else {
  fs.writeFileSync(RUTA, nuevo, 'utf8');
  console.log('index.css actualizado');
}
