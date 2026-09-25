// Rehace el bloque de Kommunikation de una lección entera.
//
// poner-contenido.mjs sólo añade. Esto es lo otro: dejar una lección con las
// funciones que toca (8, o 12 en la Start) y exactamente 10 conversaciones en
// cada una, moviendo las frases que ya están escritas de una función a otra,
// añadiendo las que falten y retirando las que sobran.
//
// Uso:
//   node scripts/reorganizar-komm.mjs <fichero.json>
//
// El JSON, por lección, es la lista COMPLETA de funciones que va a quedar:
//   {
//     "a11-l3": [
//       { "funktion": "über den Beruf sprechen", "es": "Hablar del trabajo", "esEn": "Talking about work",
//         "toma": ["Was machst du beruflich?", ...],            // frases que ya están en la lección
//         "nuevas": [[de, es, en, respDe, respEs, respEn, mas], ...] }   // igual que en poner-contenido
//     ]
//   }
//
// `toma` son las frases alemanas tal cual, vengan de la función que vengan
// (mientras sea de la misma lección). Lo que no aparezca en ningún `toma` se
// retira, y se dice cuál para que se vea lo que se está tirando.
//
// Comprueba todo antes de escribir: el número de funciones, que cada una
// acabe en 10, que ninguna frase esté en dos sitios y que las nuevas traigan
// respuesta. Si algo falla no toca ni un fichero.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/reorganizar-komm.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const DIR = path.join(RAIZ, 'src', 'lib', 'kursbuch');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');
const P_RESP = path.join(DIR, 'respuestas.js');
const POR_FUNCION = 10;

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
const retiradas = [];
let nFunc = 0;
let nConv = 0;

function bloqueLeccion(lid) {
  const banda = lid.split('-')[0];
  const txt = textos.get(banda);
  if (!txt) { problemas.push(`no conozco el tomo de "${lid}"`); return null; }
  const i = txt.indexOf(`id: '${lid}'`);
  if (i === -1) { problemas.push(`no encuentro la lección "${lid}"`); return null; }
  const j = txt.indexOf("      id: 'a", i + 1);
  return { banda, txt, ini: i, fin: j === -1 ? txt.length : j };
}

function cierre(txt, desdeCorchete) {
  let nivel = 0;
  for (let i = desdeCorchete; i < txt.length; i += 1) {
    const c = txt[i];
    if (c === "'" || c === '"') {
      const comilla = c;
      i += 1;
      while (i < txt.length && !(txt[i] === comilla && txt[i - 1] !== '\\')) i += 1;
      continue;
    }
    if (c === '[') nivel += 1;
    else if (c === ']') { nivel -= 1; if (nivel === 0) return i; }
  }
  return -1;
}

// Las frases que hay ahora mismo en la lección: alemán -> castellano. Se leen
// del fuente y no del módulo porque es el fuente lo que hay que reescribir, y
// así lo que se mueve es exactamente lo que estaba escrito.
function frasesActuales(b) {
  const bloque = b.txt.slice(b.ini, b.fin);
  const iArr = bloque.indexOf('kommunikation: [');
  if (iArr === -1) return null;
  const abs = b.ini + bloque.indexOf('[', iArr);
  const fin = cierre(b.txt, abs);
  if (fin === -1) return null;
  const dentro = b.txt.slice(abs, fin);
  const mapa = new Map();
  // El alemán lleva apóstrofos ("Wie geht's?"), así que algunas líneas están
  // escritas con comillas dobles en vez de simples. Hay que aceptar las dos y
  // quedarse con el texto ya sin escapar: al reescribir se vuelve a escapar.
  const re = /\{\s*de:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"),\s*es:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")[^}]*\}/g;
  const crudo = (s) => s.replace(/\\(['"\\])/g, '$1');
  let m;
  while ((m = re.exec(dentro))) mapa.set(crudo(m[1] ?? m[2]), crudo(m[3] ?? m[4]));
  return { mapa, abs, fin };
}

const planes = [];

for (const [lid, funciones] of Object.entries(entrada)) {
  const b = bloqueLeccion(lid);
  if (!b) continue;
  const actual = frasesActuales(b);
  if (!actual) { problemas.push(`${lid}: no encuentro su kommunikation`); continue; }

  const esStart = /-start$/.test(lid);
  const cuantas = esStart ? 12 : 8;
  if (funciones.length !== cuantas) {
    problemas.push(`${lid}: ${funciones.length} funciones, tienen que ser ${cuantas}`);
  }

  const usadas = new Set();
  const lineasPorFuncion = [];

  for (const f of funciones) {
    if (!f.funktion || !f.es) { problemas.push(`${lid}: una función sin funktion/es`); continue; }
    if (f.esEn) paraEn.push([f.es, f.esEn]);
    const lineas = [];

    for (const de of f.toma || []) {
      if (usadas.has(de)) { problemas.push(`${lid}: "${de}" puesta dos veces`); continue; }
      if (!actual.mapa.has(de)) { problemas.push(`${lid}: "${de}" no está en la lección`); continue; }
      usadas.add(de);
      lineas.push(`{ de: '${esc(de)}', es: '${esc(actual.mapa.get(de))}' }`);
    }

    for (const w of f.nuevas || []) {
      const [de, es, enFra, respDe, respEs, respEn, mas] = w;
      if (usadas.has(de)) { problemas.push(`${lid}: "${de}" puesta dos veces`); continue; }
      if (actual.mapa.has(de)) { problemas.push(`${lid}: "${de}" ya está en la lección, va en "toma"`); continue; }
      // Repetida en otra lección del mismo tomo: el minijuego mezcla frases de
      // varias, y una duplicada saldría dos veces con distinta etiqueta.
      const fuera = b.txt.slice(0, b.ini) + b.txt.slice(b.fin);
      if (fuera.includes(`de: '${esc(de)}'`)) { problemas.push(`${lid}: "${de}" ya está en otra lección`); continue; }
      if (!respDe || !respEs) { problemas.push(`${lid}: "${de}" sin respuesta (sin ella no es conversación)`); continue; }
      if (mas && mas.length % 2 !== 0) {
        problemas.push(`${lid}: "${de}" tiene ${mas.length} turno(s) de seguimiento; tienen que ser pares`);
      }
      usadas.add(de);
      lineas.push(`{ de: '${esc(de)}', es: '${esc(es)}' }`);
      paraEn.push([es, enFra], [respEs, respEn]);
      paraResp.push([de, respDe, respEs, mas || []]);
      for (const [, tEs, tEn] of mas || []) paraEn.push([tEs, tEn]);
    }

    if (lineas.length !== POR_FUNCION) {
      problemas.push(`${lid}: "${f.funktion}" se queda en ${lineas.length}, tienen que ser ${POR_FUNCION}`);
    }
    lineasPorFuncion.push({ funktion: f.funktion, es: f.es, lineas });
    nFunc += 1;
    nConv += lineas.length;
  }

  for (const de of actual.mapa.keys()) if (!usadas.has(de)) retiradas.push(`${lid}: ${de}`);
  planes.push({ lid, banda: b.banda, abs: actual.abs, fin: actual.fin, funciones: lineasPorFuncion });
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// Se escribe de atrás hacia delante dentro de cada tomo: así los índices que
// ya se calcularon siguen valiendo cuando el bloque anterior cambia de tamaño.
planes.sort((a, b) => b.abs - a.abs);
for (const p of planes) {
  let txt = textos.get(p.banda);
  const cuerpo = p.funciones
    .map((f) => {
      const items = f.lineas.map((l) => '            ' + l).join(',\n');
      return `        {\n          funktion: '${esc(f.funktion)}',\n          es: '${esc(f.es)}',\n          wendungen: [\n${items}\n          ]\n        }`;
    })
    .join(',\n');
  txt = txt.slice(0, p.abs) + '[\n' + cuerpo + '\n      ]' + txt.slice(p.fin + 1);
  textos.set(p.banda, txt);
}

let nResp = 0;
if (paraResp.length) {
  const marca = resp.lastIndexOf('};');
  if (marca === -1) { console.error('no encuentro el final de respuestas.js'); process.exit(1); }
  let bloque = '';
  for (const [de, rDe, rEs, mas] of paraResp) {
    if (resp.includes(`'${esc(de)}':`)) continue;
    if (mas && mas.length) {
      const turnos = mas
        .map(([tDe, tEs]) => `        { de: '${esc(tDe)}', es: '${esc(tEs)}' }`)
        .join(',\n');
      bloque += `  '${esc(de)}':\n    { de: '${esc(rDe)}', es: '${esc(rEs)}',\n      mas: [\n${turnos}\n      ] },\n`;
    } else {
      bloque += `  '${esc(de)}':\n    { de: '${esc(rDe)}', es: '${esc(rEs)}' },\n`;
    }
    nResp += 1;
  }
  if (bloque) resp = resp.slice(0, marca) + bloque + resp.slice(marca);
}

const marcaEn = en.lastIndexOf('};');
if (marcaEn === -1) { console.error('no encuentro el final de en.js'); process.exit(1); }
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

console.log(`${nFunc} funciones · ${nConv} conversaciones · ${nResp} respuestas nuevas · ${nuevasEn} traducciones nuevas en en.js`);
if (retiradas.length) {
  console.log(`\n${retiradas.length} frases retiradas:`);
  for (const r of retiradas) console.log('   ' + r);
}
