// Quita las marcas `sigue` de Kommunikation.
//
// Se puso un encadenado automático que juntaba las frases de tres en tres
// para que la teoría no fuera una lista de pares sueltos. No funcionó, y el
// motivo es de fondo: dentro de un apartado las diez frases no son una
// conversación que avanza, son diez MANERAS ALTERNATIVAS de hacer lo mismo,
// cada una con su respuesta. Puestas en fila, la segunda no contesta a lo que
// acaban de decirte: cambia de tema. Se leía peor que separadas.
//
// Alargar una conversación de verdad es otra cosa: darle turnos de
// seguimiento a UNA (el campo `mas` de respuestas.js, que llena
// poner-seguimiento.mjs). Eso sí encadena, porque cada turno responde al
// anterior.
//
// Uso:
//   node scripts/desagrupar-komm.mjs            (sólo cuenta)
//   node scripts/desagrupar-komm.mjs --escribe

import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'src', 'lib', 'kursbuch');
const BANDAS = ['a11', 'a12', 'a21'];
const escribe = process.argv.includes('--escribe');

let total = 0;
for (const b of BANDAS) {
  const p = path.join(DIR, `${b}.js`);
  const txt = fs.readFileSync(p, 'utf8');
  const cuantas = (txt.match(/, sigue: true /g) || []).length;
  if (!cuantas) continue;
  total += cuantas;
  console.log(`   ${String(cuantas).padStart(4)}  ${b}.js`);
  if (escribe) fs.writeFileSync(p, txt.split(', sigue: true ').join(''));
}

console.log(`\n${total} frases encadenadas`);
if (!escribe) console.log('(pon --escribe para soltarlas)');
