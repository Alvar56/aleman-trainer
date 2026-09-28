// Claves declaradas dos veces en los diccionarios.
//
// En un objeto de JavaScript la segunda declaración pisa a la primera sin
// avisar. Así que una clave repetida es una trampa: arreglas la traducción de
// arriba, guardas, y en pantalla no cambia nada porque manda la de abajo.
//
// Mira i18n.js (la interfaz), contenido/en.js (el contenido) y respuestas.js.
//
// Uso: node scripts/claves-repetidas.mjs

import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.cwd();
const FICHEROS = [
  ['src/lib/i18n.js', /^\s{2}'((?:[^'\\]|\\.)*)':/gm],
  ['src/lib/contenido/en.js', /^\s{2}'((?:[^'\\]|\\.)*)':/gm],
  ['src/lib/kursbuch/respuestas.js', /^\s{2}'((?:[^'\\]|\\.)*)':/gm]
];

let total = 0;
for (const [rel, re] of FICHEROS) {
  const p = path.join(RAIZ, rel);
  if (!fs.existsSync(p)) continue;
  const txt = fs.readFileSync(p, 'utf8');
  const lineas = txt.split('\n');
  const donde = new Map();
  for (let i = 0; i < lineas.length; i += 1) {
    const m = /^\s{2}'((?:[^'\\]|\\.)*)':/.exec(lineas[i].replace(/\r$/, ''));
    if (!m) continue;
    const clave = m[1].replace(/\\(['\\])/g, '$1');
    if (!donde.has(clave)) donde.set(clave, []);
    donde.get(clave).push(i + 1);
  }
  const repes = [...donde.entries()].filter(([, ls]) => ls.length > 1);
  console.log(`\n${rel}: ${donde.size} claves · ${repes.length} repetidas`);
  for (const [clave, ls] of repes.slice(0, 40)) {
    // ¿Dicen lo mismo? Si no, la de abajo está tapando una distinta, y eso ya
    // no es sólo peso muerto. Se compara SOLO el valor de su línea: mirando
    // también las de alrededor salían distintas siempre, porque lo que venía
    // detrás de cada copia no era lo mismo.
    const textos = ls.map((l) => lineas[l - 1].replace(/\r$/, '').trim());
    const iguales = textos.every((x) => x === textos[0]);
    console.log(`   ${clave}  (líneas ${ls.join(', ')})${iguales ? '' : '   *** DICEN COSAS DISTINTAS ***'}`);
  }
  if (repes.length > 40) console.log(`   … y ${repes.length - 40} más`);
  total += repes.length;
}

console.log(`\n${total} claves repetidas en total`);
if (total) process.exitCode = 1;
