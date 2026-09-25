// Mete reglas de gramática nuevas en una lección del libro.
//
// Las reglas viven en el array `grammatik:` de cada Lektion, dentro de
// src/lib/kursbuch/a11.js, a12.js o a21.js. Meterlas a mano es donde se rompen
// las cosas: hay que dar con la lección correcta, con el corchete que cierra su
// `grammatik` y no con el de los ejemplos de dentro.
//
// Uso:
//   node scripts/poner-reglas.mjs <fichero.json>
//
// El JSON es un mapa id-de-lección -> lista de reglas:
//
//   { "a12-l13": [
//       { "key": "imperativ-hoeflich",          // la clave con la que los
//         "regel": "Höflicher Imperativ",       //   ejercicios la encuentran
//         "erklaerung": "...",                  // EN CASTELLANO
//         "erklaerungEn": "...",                //   su inglés, va a en.js
//         "beispiele": [[de, es, en], ...] } ] }
//
// `regel` va en alemán, como todas las demás: es el nombre que se ve en la
// pantalla de teoría y el que usan los apuntes.
//
// Comprueba antes de tocar nada: que la lección exista, que no haya ya una
// regla con ese nombre o esa clave, y que cada regla traiga al menos un
// ejemplo. Si algo falla no escribe NADA: a medias dejaría unos tomos tocados
// y otros no.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/poner-reglas.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const DIR = path.join(RAIZ, 'src', 'lib', 'kursbuch');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');
const BANDAS = ['a11', 'a12', 'a21'];

const entrada = JSON.parse(fs.readFileSync(fichero, 'utf8'));
const textos = new Map();
for (const b of BANDAS) textos.set(b, fs.readFileSync(path.join(DIR, `${b}.js`), 'utf8'));
let en = fs.readFileSync(P_EN, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const paraEn = [];
let puestas = 0;

// El mismo contador de corchetes que usa poner-contenido: salta lo que va
// dentro de comillas, porque un apóstrofo en una frase descuadraba la cuenta.
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

function bloqueLeccion(lid) {
  const banda = lid.split('-')[0];
  const txt = textos.get(banda);
  if (!txt) { problemas.push(`no conozco el tomo de "${lid}"`); return null; }
  const i = txt.indexOf(`id: '${lid}'`);
  if (i === -1) { problemas.push(`no encuentro la lección "${lid}"`); return null; }
  const j = txt.indexOf("      id: 'a", i + 1);
  return { banda, txt, ini: i, fin: j === -1 ? txt.length : j };
}

for (const [lid, reglas] of Object.entries(entrada)) {
  const b = bloqueLeccion(lid);
  if (!b) continue;
  const bloque = b.txt.slice(b.ini, b.fin);

  const lineas = [];
  for (const r of reglas) {
    if (!r.regel || !r.erklaerung) { problemas.push(`${lid}: una regla sin nombre o sin explicación`); continue; }
    if (!(r.beispiele || []).length) { problemas.push(`${lid}: "${r.regel}" no trae ejemplos`); continue; }
    if (bloque.includes(`regel: '${esc(r.regel)}'`)) { problemas.push(`${lid}: la regla "${r.regel}" ya está`); continue; }
    if (r.key && bloque.includes(`key: '${esc(r.key)}'`)) { problemas.push(`${lid}: la clave "${r.key}" ya está`); continue; }

    const ej = r.beispiele
      .map(([de, es]) => `            { de: '${esc(de)}', es: '${esc(es)}' }`)
      .join(',\n');
    lineas.push(
      `        {\n` +
      (r.key ? `          key: '${esc(r.key)}',\n` : '') +
      `          regel: '${esc(r.regel)}',\n` +
      `          erklaerung: '${esc(r.erklaerung)}',\n` +
      `          beispiele: [\n${ej}\n          ]\n` +
      `        }`
    );
    if (r.erklaerungEn) paraEn.push([r.erklaerung, r.erklaerungEn]);
    for (const [, es, enEj] of r.beispiele) if (enEj) paraEn.push([es, enEj]);
    puestas += 1;
  }
  if (!lineas.length) continue;

  const iG = bloque.indexOf('grammatik: [');
  if (iG === -1) { problemas.push(`${lid}: no tiene grammatik`); continue; }
  const abs = b.ini + bloque.indexOf('[', iG);
  const iCierre = cierre(b.txt, abs);
  if (iCierre === -1) { problemas.push(`${lid}: no encuentro el final de grammatik`); continue; }

  const antes = b.txt.slice(0, iCierre).trimEnd();
  const coma = antes.endsWith(',') ? '' : ',';
  textos.set(b.banda, antes + coma + '\n' + lineas.join(',\n') + '\n      ' + b.txt.slice(iCierre));
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// Las traducciones al inglés, al final del diccionario de contenido.
let nuevasEn = 0;
const pendientes = [];
for (const [es, ing] of paraEn) {
  if (!es || !ing) continue;
  if (en.includes(`'${esc(es)}':`)) continue;
  if (pendientes.some(([x]) => x === es)) continue;
  pendientes.push([es, ing]);
}
if (pendientes.length) {
  const marca = en.lastIndexOf('};');
  // Con coma tambien en la ULTIMA: si no, el siguiente script que escriba aqui
  // deja su primera entrada pegada a esta y el fichero deja de ser JS valido.
  const linea = pendientes.map(([es, ing]) => `  '${esc(es)}': '${esc(ing)}',`).join('\n');
  en = en.slice(0, marca) + (en.slice(0, marca).trimEnd().endsWith(',') ? '' : ',') + '\n' + linea + '\n' + en.slice(marca);
  nuevasEn = pendientes.length;
}

for (const b of BANDAS) fs.writeFileSync(path.join(DIR, `${b}.js`), textos.get(b));
fs.writeFileSync(P_EN, en);
console.log(`${puestas} reglas · ${nuevasEn} traducciones nuevas en en.js`);
