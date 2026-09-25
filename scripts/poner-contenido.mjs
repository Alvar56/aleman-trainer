// Añade palabras y frases a una lección del libro.
//
// Los ejercicios de gramática se meten con poner-ejercicios.mjs. Esto es lo
// otro: el vocabulario de la lección (Wortschatz) y las frases de comunicación
// (Kommunikation), que son las que alimentan sus minijuegos —cada juego usa
// TODAS las palabras o TODAS las frases, así que subir el número es lo único
// que hace más larga la práctica.
//
// Uso:
//   node scripts/poner-contenido.mjs <fichero.json>
//
// El JSON:
//   {
//     "a11-l7": {
//       "palabras": [
//         { "thema": "Wetter",            // grupo existente o nuevo
//           "items": [[de, es, en, ex, exEs, exEn], ...] }
//       ],
//       "frases": [
//         { "funktion": "über das Wetter sprechen", "es": "Hablar del tiempo",
//           "wendungen": [[de, es, en, respDe, respEs, respEn, mas], ...] }
//
// `mas` es opcional: los turnos que siguen a la respuesta, para que la
// conversación no se acabe en dos frases. Van alternando -el primero lo dices
// tú, el segundo te lo contestan-, así que tienen que ser un número par:
//   [[de, es, en], [de, es, en]]
//       ]
//     }
//   }
//
// Las respuestas (respDe/respEs) son opcionales pero importan: sin ellas el
// minijuego "Contestar" no puede usar esa frase. Van a respuestas.js.
//
// Comprueba todo antes de escribir nada: que la lección exista, que no haya
// palabras ni frases repetidas, y que cada palabra traiga su ejemplo -que es
// obligatorio desde que todas las tarjetas lo tienen.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/poner-contenido.mjs <fichero.json>');
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
let nPal = 0;
let nFra = 0;

// El bloque de una lección dentro del fichero de su tomo.
function bloqueLeccion(lid) {
  const banda = lid.split('-')[0];
  const txt = textos.get(banda);
  if (!txt) { problemas.push(`no conozco el tomo de "${lid}"`); return null; }
  const i = txt.indexOf(`id: '${lid}'`);
  if (i === -1) { problemas.push(`no encuentro la lección "${lid}"`); return null; }
  // Hasta la siguiente lección (o el final).
  const j = txt.indexOf("      id: 'a", i + 1);
  return { banda, txt, ini: i, fin: j === -1 ? txt.length : j };
}

// El ']' que cierra un array, contando los de dentro y saltándose las cadenas.
function cierre(txt, desdeCorchete) {
  let nivel = 0;
  for (let i = desdeCorchete; i < txt.length; i += 1) {
    const c = txt[i];
    // Comillas simples o dobles: dentro de unas dobles puede haber un
    // apóstrofo, y tomarlo por el principio de una cadena descoloca el conteo.
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

// Mete líneas dentro del array `items:` (o `wendungen:`) del grupo cuyo
// `thema`/`funktion` coincide. Si el grupo no existe, lo crea al final.
function meter(lid, tipoGrupo, nombreGrupo, etiquetaEs, campoItems, lineas) {
  const b = bloqueLeccion(lid);
  if (!b) return;
  let txt = b.txt;
  const bloque = txt.slice(b.ini, b.fin);
  const aguja = `${tipoGrupo}: '${esc(nombreGrupo)}'`;
  const iGrupo = bloque.indexOf(aguja);

  if (iGrupo !== -1) {
    const iItems = bloque.indexOf(`${campoItems}: [`, iGrupo);
    if (iItems === -1) { problemas.push(`${lid}: el grupo "${nombreGrupo}" no tiene ${campoItems}`); return; }
    const abs = b.ini + bloque.indexOf('[', iItems);
    const iCierre = cierre(txt, abs);
    if (iCierre === -1) { problemas.push(`${lid}: no encuentro el final de ${campoItems} en "${nombreGrupo}"`); return; }
    const antes = txt.slice(0, iCierre).trimEnd();
    const sangria = (/\n(\s+)\{[^\n]*$/.exec(antes.slice(-500)) || [, '            '])[1];
    const coma = antes.endsWith(',') ? '' : ',';
    txt = antes + coma + '\n' + lineas.map((l) => sangria + l).join(',\n') + '\n' + sangria.slice(0, -2) + txt.slice(iCierre);
    textos.set(b.banda, txt);
    return;
  }

  // Grupo nuevo: al final del array que los contiene.
  const nombreArray = campoItems === 'items' ? 'woerter' : 'kommunikation';
  const iArr = bloque.indexOf(`${nombreArray}: [`);
  if (iArr === -1) { problemas.push(`${lid}: no tiene ${nombreArray}`); return; }
  const abs = b.ini + bloque.indexOf('[', iArr);
  const iCierre = cierre(txt, abs);
  if (iCierre === -1) { problemas.push(`${lid}: no encuentro el final de ${nombreArray}`); return; }
  const antes = txt.slice(0, iCierre).trimEnd();
  const coma = antes.endsWith(',') ? '' : ',';
  const cabecera = campoItems === 'items'
    ? `        {\n          thema: '${esc(nombreGrupo)}',\n          items: [`
    : `        {\n          funktion: '${esc(nombreGrupo)}',\n          es: '${esc(etiquetaEs || nombreGrupo)}',\n          wendungen: [`;
  const cuerpo = lineas.map((l) => '            ' + l).join(',\n');
  txt = antes + coma + '\n' + cabecera + '\n' + cuerpo + '\n          ]\n        }\n      ' + txt.slice(iCierre);
  textos.set(b.banda, txt);
}

for (const [lid, datos] of Object.entries(entrada)) {
  const b = bloqueLeccion(lid);
  if (!b) continue;
  const bloque = b.txt.slice(b.ini, b.fin);

  for (const grupo of datos.palabras || []) {
    const lineas = [];
    for (const it of grupo.items || []) {
      const [de, es, enPal, ex, exEs, exEn] = it;
      if (!ex || !exEs) { problemas.push(`${lid}: "${de}" sin frase de ejemplo (son obligatorias)`); continue; }
      if (bloque.includes(`de: '${esc(de)}'`)) { problemas.push(`${lid}: la palabra "${de}" ya está`); continue; }
      lineas.push(`{ de: '${esc(de)}', es: '${esc(es)}', ex: '${esc(ex)}', exEs: '${esc(exEs)}' }`);
      paraEn.push([es, enPal], [exEs, exEn]);
      nPal += 1;
    }
    if (lineas.length) meter(lid, 'thema', grupo.thema, null, 'items', lineas);
  }

  for (const grupo of datos.frases || []) {
    // El rótulo del apartado también se pinta y también pasa por tc(): sin su
    // inglés, la pantalla sale a medias en la versión inglesa.
    if (grupo.es && grupo.esEn) paraEn.push([grupo.es, grupo.esEn]);
    const lineas = [];
    for (const w of grupo.wendungen || []) {
      const [de, es, enFra, respDe, respEs, respEn, mas] = w;
      if (bloque.includes(`de: '${esc(de)}'`)) { problemas.push(`${lid}: la frase "${de}" ya está`); continue; }
      lineas.push(`{ de: '${esc(de)}', es: '${esc(es)}' }`);
      paraEn.push([es, enFra]);
      if (respDe && respEs) {
        // Los turnos que siguen van alternando: el primero lo dices tú otra
        // vez, el segundo te lo contestan. Por eso tienen que venir en número
        // par, o la conversación termina hablando el que no toca.
        if (mas && mas.length % 2 !== 0) {
          problemas.push(`${lid}: "${de}" tiene ${mas.length} turno(s) de seguimiento; tienen que ser pares`);
        }
        paraResp.push([de, respDe, respEs, mas || []]);
        paraEn.push([respEs, respEn]);
        for (const [, tEs, tEn] of mas || []) paraEn.push([tEs, tEn]);
      } else if (mas && mas.length) {
        problemas.push(`${lid}: "${de}" trae seguimiento pero no trae respuesta`);
      }
      nFra += 1;
    }
    if (lineas.length) meter(lid, 'funktion', grupo.funktion, grupo.es, 'wendungen', lineas);
  }
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// Las respuestas, al final del mapa de respuestas.js.
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

// El inglés.
const marcaEn = en.lastIndexOf('};');
if (marcaEn === -1) { console.error('no encuentro el final de en.js'); process.exit(1); }
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

for (const b of BANDAS) fs.writeFileSync(path.join(DIR, `${b}.js`), textos.get(b));
fs.writeFileSync(P_EN, en);
fs.writeFileSync(P_RESP, resp);

console.log(`${nPal} palabras y ${nFra} frases (${nResp} con respuesta) · ${nuevas} traducciones nuevas en en.js`);
