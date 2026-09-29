// Mete los .svg de _paisajes/ de vuelta en index.css.
//
// Al revés de paisajes-extraer.mjs. Solo toca los paisajes que existan como
// fichero: los que no estén en _paisajes/ se quedan como están en el CSS.
//
// Dos cosas antes de escribir, y las dos por experiencia:
//
//   · Se comprueba que el SVG esté bien cerrado. Un data URI con una etiqueta
//     descuadrada no da ningún error en el navegador: simplemente no pinta el
//     fondo, y la pantalla se queda en blanco sin nada en la consola.
//   · Se aprieta el espacio en blanco antes de codificar. Cada espacio del SVG
//     ocupa TRES bytes en el CSS (%20), y los dibujos ya son la mitad del
//     fichero. Quitar los saltos de linea y el sangrado de la copia de trabajo
//     no cambia el dibujo y ahorra mucho.
//
// Solo se codifican los caracteres que rompen un url("…") de CSS o un data
// URI. Los demas van tal cual, que es legal y ocupa un tercio.
//
//   node scripts/paisajes-meter.mjs             (dice lo que haria)
//   node scripts/paisajes-meter.mjs --de-verdad (lo escribe)

import fs from 'node:fs';
import path from 'node:path';
import { RE_PAISAJE } from './paisajes-extraer.mjs';

const RAIZ = process.cwd();
const P_CSS = path.join(RAIZ, 'src', 'index.css');
const ORIGEN = path.join(RAIZ, '_paisajes');
const DE_VERDAD = process.argv.includes('--de-verdad');

if (!fs.existsSync(ORIGEN)) {
  console.error('No hay _paisajes/. Saca los dibujos antes: node scripts/paisajes-extraer.mjs');
  process.exit(1);
}

// Las etiquetas que no se cierran solas. Si una no cuadra, no se escribe nada.
const PAREJAS = ['svg', 'g', 'defs', 'style', 'linearGradient', 'radialGradient', 'pattern', 'clipPath', 'mask', 'filter', 'text'];

function revisar(svg, nombre) {
  const malas = [];
  for (const tag of PAREJAS) {
    const abre = (svg.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length;
    const cierra = (svg.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    if (abre !== cierra) malas.push(`<${tag}> abre ${abre} y cierra ${cierra}`);
  }
  if (!/^\s*<svg[\s>]/.test(svg)) malas.push('no empieza por <svg');
  if (!/<\/svg>\s*$/.test(svg)) malas.push('no acaba en </svg>');
  if (!/viewBox\s*=/.test(svg)) malas.push('no tiene viewBox');
  return malas.map((m) => `${nombre}: ${m}`);
}

// El sangrado de la copia de trabajo fuera, pero SIN tocar lo que va entre
// comillas: un atributo d="M 0 13 Q…" necesita sus espacios para separar los
// numeros, y juntarlos cambia el dibujo o lo rompe.
function apretar(svg) {
  let fuera = '';
  let i = 0;
  while (i < svg.length) {
    const c = svg[i];
    if (c === '"' || c === "'") {
      const fin = svg.indexOf(c, i + 1);
      const trozo = svg.slice(i, fin + 1);
      // Dentro de comillas solo se unifica el blanco, no se quita.
      fuera += trozo.replace(/\s+/g, ' ');
      i = fin + 1;
      continue;
    }
    fuera += c;
    i += 1;
  }
  return fuera.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
}

// Lo justo para que el navegador no se pierda dentro de url("…").
const CODIFICAR = { '"': '%22', '#': '%23', '%': '%25', '<': '%3C', '>': '%3E', '\\': '%5C', '^': '%5E', '{': '%7B', '|': '%7C', '}': '%7D' };
const codificar = (s) => s.replace(/[\"#%<>\\^{|}]/g, (c) => CODIFICAR[c]);

const css = fs.readFileSync(P_CSS, 'utf8');
const problemas = [];
const cambios = [];

const nuevo = css.replace(RE_PAISAJE, (todo, antes, familia, nombre, cabecera, viejo, despues) => {
  const fichero = path.join(ORIGEN, `${familia}-${nombre}.svg`);
  if (!fs.existsSync(fichero)) return todo;

  const svg = fs.readFileSync(fichero, 'utf8');
  const malas = revisar(svg, `${familia}-${nombre}`);
  if (malas.length) {
    problemas.push(...malas);
    return todo;
  }

  const codificado = codificar(apretar(svg));
  if (codificado === viejo) return todo;
  cambios.push({ que: `${familia}-${nombre}`, antes: viejo.length, ahora: codificado.length });
  return antes + cabecera + codificado + despues;
});

if (problemas.length) {
  console.error('SVG rotos, no se escribe nada:\n');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

if (!cambios.length) {
  console.log('Ningun paisaje ha cambiado.');
  process.exit(0);
}

let suma = 0;
for (const c of cambios) {
  const d = c.ahora - c.antes;
  suma += d;
  console.log(`   ${c.que.padEnd(20)} ${String(c.antes).padStart(6)} → ${String(c.ahora).padStart(6)}  (${d >= 0 ? '+' : ''}${d})`);
}
console.log(`\n${cambios.length} paisajes · ${suma >= 0 ? '+' : ''}${(suma / 1024).toFixed(1)} KB en index.css`);

if (!DE_VERDAD) {
  console.log('\n(pon --de-verdad para escribirlo)');
  process.exit(0);
}

fs.writeFileSync(P_CSS, nuevo);
console.log('\nindex.css actualizado.');
