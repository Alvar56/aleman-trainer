// Mete frases de ejemplo en las palabras del libro.
//
// Las palabras del Kursbuch se cargaron sin ejemplo -917 de 917-, mientras que
// los mazos sueltos sí lo traían. Al girar una tarjeta, unas daban una frase y
// otras no, sin ninguna razón.
//
// Uso:
//   node scripts/poner-ejemplos.mjs <fichero.json> <a11|a12|a21>
//
// El JSON es una lista de [de, ex, exEs, en]:
//   de    la palabra, tal cual está en el fichero del libro
//   ex    la frase en alemán
//   exEs  su traducción al castellano
//   en    la traducción al inglés de exEs, que va a contenido/en.js
//
// Escribe en dos sitios y comprueba las dos cosas antes de tocar nada: que la
// palabra exista UNA sola vez y que no tenga ya un ejemplo puesto.

import fs from 'node:fs';
import path from 'node:path';

const [fichero, banda] = process.argv.slice(2);
if (!fichero || !banda) {
  console.error('uso: node scripts/poner-ejemplos.mjs <fichero.json> <a11|a12|a21|sueltos>');
  process.exit(2);
}

const RAIZ = process.cwd();
// Los mazos que no son del libro (números, animales, ropa…) viven en vocab.js
// y ya traen el hueco escrito: `ex: '', exEs: ''`.
const pLibro = banda === 'sueltos'
  ? path.join(RAIZ, 'src', 'lib', 'vocab.js')
  : path.join(RAIZ, 'src', 'lib', 'kursbuch', `${banda}.js`);
const pEn = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');

const filas = JSON.parse(fs.readFileSync(fichero, 'utf8'));
let libro = fs.readFileSync(pLibro, 'utf8');
let en = fs.readFileSync(pEn, 'utf8');
const nl = libro.includes('\r\n') ? '\r\n' : '\n';

// El apóstrofo es lo único que hay que escapar: las cadenas van en comillas
// simples, como el resto del fichero.
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const problemas = [];
let puestos = 0;
let yaEstaban = 0;
const paraEn = [];
const repetidas = [];

for (const [de, ex, exEs, ingles] of filas) {
  const aguja = `{ de: '${esc(de)}',`;
  const veces = libro.split(aguja).length - 1;
  if (veces === 0) { problemas.push(`no está: ${de}`); continue; }
  // Hay palabras que salen en dos lecciones ("reservieren" en el restaurante y
  // en el hotel). Se les pone el mismo ejemplo a todas: es la misma palabra y
  // el mismo significado, y dejarlas fuera era dejar tarjetas sin frase.
  if (veces > 1) repetidas.push(`${de} (${veces})`);

  let alguna = false;
  let desde = 0;
  for (;;) {
    // Hasta el final de SU línea, no hasta el primer " }," que aparezca. La
    // última palabra de cada bloque no lleva coma —acaba en " }"— así que
    // buscar " }," se la saltaba entera y escribía el ejemplo dentro de la
    // siguiente estructura del fichero, rompiéndola.
    const i = libro.indexOf(aguja, desde);
    if (i === -1) break;
    const finLinea = libro.indexOf('\n', i);
    const linea = libro.slice(i, finLinea === -1 ? libro.length : finLinea).replace(/\r$/, '');
    // El hueco vacío se rellena; uno que ya tenga frase no se toca.
    const hueco = /, ex: '', exEs: ''/.exec(linea);
    if (hueco) {
      const nueva = linea.slice(0, hueco.index) +
        `, ex: '${esc(ex)}', exEs: '${esc(exEs)}'` +
        linea.slice(hueco.index + hueco[0].length);
      libro = libro.slice(0, i) + nueva + libro.slice(i + linea.length);
      puestos += 1;
      alguna = true;
      desde = i + nueva.length;
      continue;
    }
    if (/\bex:/.test(linea)) { yaEstaban += 1; desde = i + linea.length; continue; }

    const cierre = / \},?$/.exec(linea);
    if (!cierre) { problemas.push(`no entiendo la línea de: ${de}`); break; }
    const coma = cierre[0].endsWith(',') ? ',' : '';
    const nueva =
      linea.slice(0, cierre.index) + `, ex: '${esc(ex)}', exEs: '${esc(exEs)}' }${coma}`;
    libro = libro.slice(0, i) + nueva + libro.slice(i + linea.length);
    puestos += 1;
    alguna = true;
    desde = i + nueva.length;
  }
  if (alguna) paraEn.push([exEs, ingles]);
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// Las traducciones al inglés, al final del mapa de contenido.
const cierre = en.lastIndexOf('};');
if (cierre === -1) { console.error('no encuentro el final de en.js'); process.exit(1); }
let nuevas = 0;
let bloque = '';
for (const [exEs, ingles] of paraEn) {
  if (en.includes(`'${esc(exEs)}':`)) continue;
  bloque += `  '${esc(exEs)}': '${esc(ingles)}',${nl}`;
  nuevas += 1;
}
if (bloque) en = en.slice(0, cierre) + bloque + en.slice(cierre);

fs.writeFileSync(pLibro, libro);
fs.writeFileSync(pEn, en);

if (repetidas.length) console.log('   (la misma palabra en varias lecciones: ' + repetidas.join(', ') + ')');
console.log(`${banda}: ${puestos} ejemplos puestos` +
  (yaEstaban ? ` · ${yaEstaban} ya lo tenían` : '') +
  ` · ${nuevas} traducciones nuevas en en.js`);
