// Reescribe una respuesta que se queda corta.
//
// respuestas-cortas.mjs dice cuáles no dan material: "Danke." o "Sehr
// angenehm." no sirven para "Contestar" ni para "La palabra que falta", y en
// la teoría cortan la conversación en seco. Esto las sustituye por una
// versión con algo dentro, sin tocar la frase del libro.
//
// Uso:
//   node scripts/alargar-respuestas.mjs <fichero.json>
//
// El JSON es frase-alemana -> la respuesta nueva:
//   {
//     "Kennst du meinen Onkel schon?": [
//       "Nein, noch nicht. Aber du hast mir schon viel von ihm erzählt.",
//       "No, todavía no. Pero ya me has hablado mucho de él.",
//       "No, not yet. But you've told me a lot about him."
//     ]
//   }
//
// Si la frase no tiene respuesta, o la que hay ya es larga, se avisa y no se
// escribe nada -ni de esa ni de las demás. La glosa vieja se quita de en.js
// solo si no la usa nadie más; si la comparte otra frase, se queda.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/alargar-respuestas.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const DIR = path.join(RAIZ, 'src', 'lib', 'kursbuch');
const P_RESP = path.join(DIR, 'respuestas.js');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');

const entrada = JSON.parse(fs.readFileSync(fichero, 'utf8'));
let resp = fs.readFileSync(P_RESP, 'utf8');
let en = fs.readFileSync(P_EN, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const cambios = [];
const paraEn = [];
const glosasViejas = [];

for (const [frase, nueva] of Object.entries(entrada)) {
  if (!Array.isArray(nueva) || nueva.length !== 3) {
    problemas.push(`"${frase}": hacen falta tres textos (de, es, en)`);
    continue;
  }
  const [nDe, nEs, nEn] = nueva;
  if (String(nDe).trim().split(/\s+/).length < 9) {
    problemas.push(`"${frase}": la respuesta nueva sigue siendo corta`);
    continue;
  }

  const clave = `'${esc(frase)}':`;
  const i = resp.indexOf(clave);
  if (i === -1) { problemas.push(`no encuentro la respuesta de "${frase}"`); continue; }

  // El primer par de: '…', es: '…' después de la clave es la respuesta; lo que
  // venga en `mas` va después y no se toca.
  const trozo = resp.slice(i, i + 4000);
  const m = trozo.match(/\{ de: '((?:[^'\\]|\\.)*)', es: '((?:[^'\\]|\\.)*)'/);
  if (!m) { problemas.push(`"${frase}": no entiendo cómo está escrita la respuesta`); continue; }

  const viejoEs = m[2];
  const ini = i + m.index;
  cambios.push([ini, ini + m[0].length, `{ de: '${esc(nDe)}', es: '${esc(nEs)}'`]);
  paraEn.push([nEs, nEn]);
  glosasViejas.push(viejoEs);
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// De atrás hacia delante, para que los índices sigan valiendo.
cambios.sort((a, b) => b[0] - a[0]);
for (const [ini, fin, nuevo] of cambios) resp = resp.slice(0, ini) + nuevo + resp.slice(fin);

// El inglés nuevo.
const marcaEn = en.lastIndexOf('};');
let bloqueEn = '';
let nuevas = 0;
const vistas = new Set();
for (const [es, ingles] of paraEn) {
  if (!es || !ingles || vistas.has(es)) continue;
  vistas.add(es);
  if (en.includes(`'${esc(es)}':`)) continue;
  bloqueEn += `  '${esc(es)}': '${esc(ingles)}',\n`;
  nuevas += 1;
}
if (bloqueEn) en = en.slice(0, marcaEn) + bloqueEn + en.slice(marcaEn);

// Las glosas viejas, fuera -pero solo las que ya no usa nadie. Una glosa
// puede estar compartida por dos frases distintas, y borrarla dejaría la otra
// sin inglés.
let quitadas = 0;
for (const vieja of new Set(glosasViejas)) {
  if (resp.includes(`es: '${esc(vieja)}'`)) continue;
  const linea = new RegExp(`^ {2}'${esc(vieja).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}': '(?:[^'\\\\]|\\\\.)*',\\n`, 'm');
  if (linea.test(en)) { en = en.replace(linea, ''); quitadas += 1; }
}

fs.writeFileSync(P_RESP, resp);
fs.writeFileSync(P_EN, en);
console.log(`${cambios.length} respuestas alargadas · ${nuevas} traducciones nuevas · ${quitadas} glosas viejas retiradas`);
