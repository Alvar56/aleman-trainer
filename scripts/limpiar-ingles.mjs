// Borra de contenido/en.js las traducciones que ya no usa nadie.
//
// en.js es el diccionario castellano -> inglés de TODO el contenido: glosas de
// palabras, frases de ejemplo, respuestas, rótulos de apartados, pistas de los
// ejercicios. Cuando se retira contenido, su traducción se queda: al
// reorganizar Kommunikation se fueron 460 conversaciones y sus líneas siguen
// aquí. No rompen nada, pero van al bundle y hacen el fichero ilegible.
//
// Se recorre TODO src en busca de cadenas, no sólo el libro: hay rótulos
// escritos dentro de los componentes que también pasan por tc().
//
// Uso:
//   node scripts/limpiar-ingles.mjs            (sólo cuenta)
//   node scripts/limpiar-ingles.mjs --escribe

import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.cwd();
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');
const escribe = process.argv.includes('--escribe');

// Todo el código y el contenido, menos el propio en.js.
const fuentes = [];
(function andar(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) andar(p);
    else if (/\.(js|jsx)$/.test(e.name) && p !== P_EN) fuentes.push(p);
  }
})(path.join(RAIZ, 'src'));

const texto = fuentes.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

const lineas = fs.readFileSync(P_EN, 'utf8').split('\n');
const esClave = (l) => /^ {2}'(?:[^'\\]|\\.)*':/.test(l.replace(/\r$/, ''));
const claveDe = (l) => {
  const m = /^ {2}'((?:[^'\\]|\\.)*)':/.exec(l.replace(/\r$/, ''));
  return m ? m[1].replace(/\\(['\\])/g, '$1') : null;
};

const fuera = new Set();
let n = 0;
for (let i = 0; i < lineas.length; i += 1) {
  if (!esClave(lineas[i])) continue;
  const clave = claveDe(lineas[i]);
  if (!clave) continue;
  // ¿Aparece esa cadena en algún sitio del código? Se busca el texto tal cual,
  // escapado como estaría escrito en un literal de JavaScript. Es una búsqueda
  // tonta a propósito: cualquier duda deja la línea donde está, que es el lado
  // seguro -sobra una línea, no falta una traducción.
  const escapada = clave.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  if (texto.includes(escapada) || texto.includes(clave)) continue;
  fuera.add(i);
  n += 1;
}

console.log(`${n} traducciones que no usa nadie, de ${lineas.filter(esClave).length}`);
if (!escribe) {
  console.log('(pon --escribe para borrarlas)');
  process.exit(0);
}

const limpio = lineas.filter((_, i) => !fuera.has(i)).join('\n');
fs.writeFileSync(P_EN, limpio);
console.log(`en.js: ${lineas.length} → ${limpio.split('\n').length} líneas`);
