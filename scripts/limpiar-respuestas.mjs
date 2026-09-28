// Borra de respuestas.js las respuestas que ya no contesta nadie.
//
// Cuando una frase de Kommunikation se retira o se cambia, su respuesta se
// queda ahí: el fichero va por frase alemana y nadie la borra. No rompe nada,
// pero engorda el fichero y al leerlo parece que esa frase sigue en el libro.
//
// Uso:
//   node scripts/limpiar-respuestas.mjs            (sólo dice cuántas hay)
//   node scripts/limpiar-respuestas.mjs --escribe

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

import fs from 'node:fs';
import path from 'node:path';

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');

const P = path.join(process.cwd(), 'src', 'lib', 'kursbuch', 'respuestas.js');
const escribe = process.argv.includes('--escribe');

const usadas = new Set();
for (const b of KURSBUCH.baende) {
  for (const l of b.lektionen) {
    for (const k of l.kommunikation || []) for (const w of k.wendungen) usadas.add(w.de);
  }
}

const txt = fs.readFileSync(P, 'utf8');
const lineas = txt.split('\n');

// Una entrada es la línea de la clave más todo lo que viene hasta la clave
// siguiente (el objeto de la respuesta puede ocupar varias líneas cuando lleva
// turnos de seguimiento). Los comentarios de sección van pegados a la entrada
// que los sigue, así que se dejan donde están.
// El fichero está en CRLF, así que hay que quitar el \r antes de mirar el
// final de línea: sin eso ninguna clave encaja y parece que no sobra nada.
const esClave = (l) => /^ {2}'(?:[^'\\]|\\.)*':$/.test(l.replace(/\r$/, ''));
const claveDe = (l) => l.trim().slice(1, -2).replace(/\\(['\\])/g, '$1');

const fuera = new Set();
let n = 0;
for (let i = 0; i < lineas.length; i += 1) {
  if (!esClave(lineas[i])) continue;
  if (usadas.has(claveDe(lineas[i]))) continue;
  let j = i + 1;
  while (j < lineas.length && !esClave(lineas[j]) && !/^};/.test(lineas[j]) && !/^\s*\/\//.test(lineas[j])) j += 1;
  for (let k = i; k < j; k += 1) fuera.add(k);
  n += 1;
}

console.log(`${n} respuestas huérfanas de ${usadas.size} frases en el libro`);
if (!escribe) {
  console.log('(pon --escribe para borrarlas)');
  process.exit(0);
}

const limpio = lineas.filter((_, i) => !fuera.has(i)).join('\n');
fs.writeFileSync(P, limpio);
console.log(`respuestas.js: ${lineas.length} → ${limpio.split('\n').length} líneas`);
