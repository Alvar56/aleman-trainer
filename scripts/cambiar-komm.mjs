// Cambia conversaciones sueltas de Kommunikation, sin tocar el resto.
//
// reorganizar-komm.mjs rehace una lección entera. Esto es para lo de después:
// una frase que se repite en dos lecciones, o dos frases de la misma lección
// que se traducen igual (y entonces "decir" y "ordenar" te dan a elegir entre
// dos opciones buenas y solo una cuenta).
//
// Uso:
//   node scripts/cambiar-komm.mjs <fichero.json>
//
// Dos operaciones, las dos por lección:
//
//   { "a21-l1": [
//       // sustituir la conversación entera
//       { "quita": "Und wie ging es dir damit?",
//         "pon": [de, es, en, respDe, respEs, respEn, mas] },
//
//       // o sólo retocar la glosa castellana (y su inglés)
//       { "frase": "Im Ernst?", "es": "¿De verdad?", "esEn": "Really?" }
//     ] }
//
// La frase se cambia en su sitio: misma función y misma posición. La respuesta
// vieja se queda en respuestas.js si la frase sigue usándose en otra lección;
// si ya no la usa nadie, se borra.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/cambiar-komm.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const DIR = path.join(RAIZ, 'src', 'lib', 'kursbuch');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');
const P_RESP = path.join(DIR, 'respuestas.js');

const entrada = JSON.parse(fs.readFileSync(fichero, 'utf8'));
const BANDAS = ['a11', 'a12', 'a21'];
const textos = new Map();
for (const b of BANDAS) textos.set(b, fs.readFileSync(path.join(DIR, `${b}.js`), 'utf8'));
let en = fs.readFileSync(P_EN, 'utf8');
let resp = fs.readFileSync(P_RESP, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const paraEn = [];
const paraResp = [];
const quitadas = [];
let nCambios = 0;
let nGlosas = 0;

function bloqueLeccion(lid) {
  const banda = lid.split('-')[0];
  const txt = textos.get(banda);
  if (!txt) { problemas.push(`no conozco el tomo de "${lid}"`); return null; }
  const i = txt.indexOf(`id: '${lid}'`);
  if (i === -1) { problemas.push(`no encuentro la lección "${lid}"`); return null; }
  const j = txt.indexOf("      id: 'a", i + 1);
  return { banda, ini: i, fin: j === -1 ? txt.length : j };
}

// La línea entera de una frase dentro del bloque de una lección. Se busca por
// el `de:` porque es lo único que se puede dar por clave desde fuera.
function lineaDe(banda, ini, fin, de) {
  const txt = textos.get(banda);
  const bloque = txt.slice(ini, fin);
  for (const comilla of ["'", '"']) {
    const aguja = `{ de: ${comilla}${comilla === "'" ? esc(de) : de.replace(/"/g, '\\"')}${comilla}, es: `;
    const i = bloque.indexOf(aguja);
    if (i === -1) continue;
    const j = bloque.indexOf('}', i);
    if (j === -1) return null;
    return { desde: ini + i, hasta: ini + j + 1 };
  }
  return null;
}

// ¿La frase sigue estando en algún tomo después de los cambios?
const sigueUsada = (de) =>
  BANDAS.some((b) => textos.get(b).includes(`de: '${esc(de)}'`) || textos.get(b).includes(`de: "${de}"`));

for (const [lid, cambios] of Object.entries(entrada)) {
  const b = bloqueLeccion(lid);
  if (!b) continue;

  for (const c of cambios) {
    // --- sólo la glosa ---------------------------------------------------
    if (c.frase) {
      const pos = lineaDe(b.banda, b.ini, b.fin, c.frase);
      if (!pos) { problemas.push(`${lid}: no encuentro "${c.frase}"`); continue; }
      if (!c.es) { problemas.push(`${lid}: "${c.frase}" sin glosa nueva`); continue; }
      let txt = textos.get(b.banda);
      txt = txt.slice(0, pos.desde) + `{ de: '${esc(c.frase)}', es: '${esc(c.es)}' }` + txt.slice(pos.hasta);
      textos.set(b.banda, txt);
      // El bloque ha cambiado de tamaño: hay que recolocar su final.
      const nb = bloqueLeccion(lid);
      if (nb) { b.ini = nb.ini; b.fin = nb.fin; }
      if (c.esEn) paraEn.push([c.es, c.esEn]);
      nGlosas += 1;
      continue;
    }

    // --- conversación entera ---------------------------------------------
    const [de, es, enFra, respDe, respEs, respEn, mas] = c.pon || [];
    if (!c.quita || !de) { problemas.push(`${lid}: un cambio sin "quita"/"pon"`); continue; }
    const pos = lineaDe(b.banda, b.ini, b.fin, c.quita);
    if (!pos) { problemas.push(`${lid}: no encuentro "${c.quita}"`); continue; }
    if (!respDe || !respEs) { problemas.push(`${lid}: "${de}" sin respuesta (sin ella no es conversación)`); continue; }
    if (mas && mas.length % 2 !== 0) {
      problemas.push(`${lid}: "${de}" tiene ${mas.length} turno(s) de seguimiento; tienen que ser pares`);
    }
    // La nueva no puede estar ya puesta en ningún tomo.
    if (BANDAS.some((x) => textos.get(x).includes(`de: '${esc(de)}'`) || textos.get(x).includes(`de: "${de}"`))) {
      problemas.push(`${lid}: "${de}" ya está puesta en el libro`);
      continue;
    }

    let txt = textos.get(b.banda);
    txt = txt.slice(0, pos.desde) + `{ de: '${esc(de)}', es: '${esc(es)}' }` + txt.slice(pos.hasta);
    textos.set(b.banda, txt);
    const nb = bloqueLeccion(lid);
    if (nb) { b.ini = nb.ini; b.fin = nb.fin; }

    paraEn.push([es, enFra], [respEs, respEn]);
    paraResp.push([de, respDe, respEs, mas || []]);
    for (const [, tEs, tEn] of mas || []) paraEn.push([tEs, tEn]);
    quitadas.push(c.quita);
    nCambios += 1;
  }
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// Las respuestas de las frases que ya no usa nadie se van con ellas.
let nBorradas = 0;
for (const de of quitadas) {
  if (sigueUsada(de)) continue;
  const clave = `  '${esc(de)}':`;
  const i = resp.indexOf(clave);
  if (i === -1) continue;
  // Hasta el principio de la siguiente entrada (una línea que empieza por dos
  // espacios y una comilla) o el cierre del mapa.
  const siguiente = resp.slice(i + clave.length).search(/\n {2}'|\n};/);
  if (siguiente === -1) continue;
  resp = resp.slice(0, i) + resp.slice(i + clave.length + siguiente + 1);
  nBorradas += 1;
}

if (paraResp.length) {
  const marca = resp.lastIndexOf('};');
  if (marca === -1) { console.error('no encuentro el final de respuestas.js'); process.exit(1); }
  let bloque = '';
  for (const [de, rDe, rEs, mas] of paraResp) {
    if (resp.includes(`'${esc(de)}':`)) continue;
    if (mas && mas.length) {
      const turnos = mas.map(([tDe, tEs]) => `        { de: '${esc(tDe)}', es: '${esc(tEs)}' }`).join(',\n');
      bloque += `  '${esc(de)}':\n    { de: '${esc(rDe)}', es: '${esc(rEs)}',\n      mas: [\n${turnos}\n      ] },\n`;
    } else {
      bloque += `  '${esc(de)}':\n    { de: '${esc(rDe)}', es: '${esc(rEs)}' },\n`;
    }
  }
  if (bloque) resp = resp.slice(0, marca) + bloque + resp.slice(marca);
}

const marcaEn = en.lastIndexOf('};');
let bloqueEn = '';
let nuevasEn = 0;
const vistas = new Set();
for (const [es, ingles] of paraEn) {
  if (!es || !ingles || vistas.has(es)) continue;
  vistas.add(es);
  if (en.includes(`'${esc(es)}':`)) continue;
  bloqueEn += `  '${esc(es)}': '${esc(ingles)}',\n`;
  nuevasEn += 1;
}
if (bloqueEn) en = en.slice(0, marcaEn) + bloqueEn + en.slice(marcaEn);

for (const b of BANDAS) fs.writeFileSync(path.join(DIR, `${b}.js`), textos.get(b));
fs.writeFileSync(P_EN, en);
fs.writeFileSync(P_RESP, resp);

console.log(`${nCambios} conversaciones cambiadas · ${nGlosas} glosas retocadas · ${nBorradas} respuestas huérfanas borradas · ${nuevasEn} traducciones nuevas en en.js`);
