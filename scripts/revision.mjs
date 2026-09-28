// Revisión estática de la app: claves de idioma que se usan pero no existen,
// claves que existen pero no usa nadie, e imports que apuntan a la nada.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, sep } from 'node:path';

const ficheros = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.jsx?$/.test(n)) ficheros.push(p.split(sep).join('/'));
  }
})('src');

const i18n = readFileSync('src/lib/i18n.js', 'utf8');
const declaradas = new Set([...i18n.matchAll(/^\s*'([\w.]+)':\s*\[/gm)].map((m) => m[1]));
const sinComillas = [...i18n.matchAll(/^\s*([a-zA-Z][\w]*):\s*\[/gm)].map((m) => m[1]);
sinComillas.forEach((k) => declaradas.add(k));

const usadas = new Set();
const dinamicas = [];
for (const f of ficheros) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/\bt\(\s*'([^']+)'/g)) usadas.add(m[1]);
  for (const m of src.matchAll(/\bt\(\s*'([^']*)'\s*\+/g)) dinamicas.push(`${f}: t('${m[1]}' + …)`);
  for (const m of src.matchAll(/\bt\(\s*`([^`]*)\$\{/g)) dinamicas.push(`${f}: t(\`${m[1]}\${…}\`)`);
}

// Los trozos de clave que se completan en tiempo de ejecucion -t('tp.perfAux.'
// + persona)- los ha cogido tambien la regexp de arriba, porque tambien
// empiezan por t('. Pero no son una clave: son el principio de una familia.
// Sin quitarlos, revision.mjs marcaba un fallo fijo en cada ejecucion
// ("tp.perfAux." no existe, claro que no), y un verificador que siempre da un
// fallo falso te ensena a no mirarlo.
const prefijos = new Set();
for (const d of dinamicas) {
  const m = /t\('([^']*)' \+/.exec(d);
  if (m) prefijos.add(m[1]);
}
for (const pre of prefijos) usadas.delete(pre);

// Lo que SI se puede comprobar de una familia: que exista alguna clave que
// empiece asi. Si no hay ninguna es que la renombraron y nadie actualizo el
// sitio donde se monta, y ahi la pantalla enseña la clave en crudo.
const familiasVacias = [...prefijos]
  .filter((pre) => ![...declaradas].some((k) => k.startsWith(pre)))
  .sort();

const faltan = [...usadas].filter((k) => !declaradas.has(k)).sort();
const sobran = [...declaradas].filter((k) => !usadas.has(k)).sort();

console.log('IDIOMA: ' + declaradas.size + ' claves declaradas, ' + usadas.size + ' usadas literalmente');
if (faltan.length) { console.log('\n✗ SE USAN PERO NO EXISTEN (' + faltan.length + '):'); faltan.forEach((k) => console.log('   ' + k)); }
else console.log('   ✓ ninguna clave usada sin declarar');
if (familiasVacias.length) {
  console.log('\n\u2717 FAMILIAS SIN NINGUNA CLAVE (' + familiasVacias.length + '):');
  familiasVacias.forEach((k) => console.log('   ' + k + '\u2026'));
}
if (dinamicas.length) { console.log('\n· claves montadas al vuelo (no comprobables aquí): ' + dinamicas.length); dinamicas.slice(0, 8).forEach((x) => console.log('   ' + x)); }
console.log('\n· declaradas y sin usar literalmente: ' + sobran.length);

// imports rotos
const rotos = [];
for (const f of ficheros) {
  const src = readFileSync(f, 'utf8');
  for (const m of src.matchAll(/from\s+'(\.[^']+)'/g)) {
    const p = resolve(dirname(f), m[1]);
    if (!existsSync(p) && !existsSync(p + '.js') && !existsSync(p + '.jsx')) rotos.push(`${f} → ${m[1]}`);
  }
}
console.log('\nIMPORTS: ' + (rotos.length ? '✗ ' + rotos.length + ' rotos' : '✓ todos resuelven'));
rotos.forEach((x) => console.log('   ' + x));
