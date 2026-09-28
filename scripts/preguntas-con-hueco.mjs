// Preguntas de gramática que arrastran un "___" al final.
//
// Son las que ya preguntan por la regla en vez de dar una frase de ejemplo
// ("Welcher Satz ist richtig? ___"). El hueco al final no rellena nada: se
// pinta como un recuadro vacío detrás del interrogante y sobra. Sin él se leen
// como lo que son, una pregunta con cuatro respuestas.
//
// Uso:
//   node scripts/preguntas-con-hueco.mjs            (sólo cuenta)
//   node scripts/preguntas-con-hueco.mjs --escribe

import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'src', 'lib', 'kursbuch', 'frames');
const escribe = process.argv.includes('--escribe');

// Una pasada por cada tipo de comilla. Una sola expresión que excluyera las
// dos a la vez se dejaría fuera las frases que llevan la otra dentro
// (s: 'Wie viele Laute hat "ng"? ___'), que son justo las de pronunciación.
const RES = [
  { q: "'", re: /(\bs:\s*')((?:[^'\\]|\\.)*?\?\s*___\s*)'/g },
  { q: '"', re: /(\bs:\s*")((?:[^"\\]|\\.)*?\?\s*___\s*)"/g }
];

let total = 0;
const porFichero = [];

for (const n of fs.readdirSync(DIR)) {
  if (!n.endsWith('.js') || n.startsWith('_') || n === 'index.js') continue;
  const p = path.join(DIR, n);
  const txt = fs.readFileSync(p, 'utf8');
  let cuantas = 0;
  let nuevo = txt;
  for (const { q, re } of RES) {
    nuevo = nuevo.replace(re, (m, pre, frase) => {
      cuantas += 1;
      return pre + frase.replace(/\s*___\s*$/, '') + q;
    });
  }
  if (!cuantas) continue;
  total += cuantas;
  porFichero.push([n, cuantas]);
  if (escribe) fs.writeFileSync(p, nuevo);
}

for (const [n, c] of porFichero) console.log(`   ${String(c).padStart(4)}  ${n}`);
console.log(`\n${total} preguntas que acaban en "? ___"`);
if (!escribe) console.log('(pon --escribe para quitarles el hueco)');
