// Mete ejercicios nuevos de gramática en los ficheros de plantillas.
//
// Los ejercicios viven en lib/kursbuch/frames/*.js, agrupados por temática y
// con la clave de la regla. Meterlos a mano es donde se rompen las cosas: hay
// que encontrar el bloque de la regla, el array correcto, y el corchete que lo
// cierra sin confundirlo con el de los distractores.
//
// Uso:
//   node scripts/poner-ejercicios.mjs <fichero.json>
//
// El JSON es un mapa clave-de-regla -> { picks: [...], orders: [...] }:
//
//   picks:  [s, a, [d1, d2], t, tEn, e, eEn]
//     s     la frase con ___
//     a     la respuesta correcta
//     d     los dos distractores
//     t/e   traducción y explicación, EN CASTELLANO (son la clave del
//           diccionario: se traducen al pintarlas, no aquí)
//     tEn/eEn  su inglés, que va a contenido/en.js
//
//   orders: [[tokens], t, tEn, e, eEn, [[otros tokens], ...]]
//           el último es opcional: otras colocaciones que TAMBIÉN se aceptan
//           (mover el Vorfeld, sobre todo). Tienen que llevar las mismas
//           palabras; si no, salta y no se escribe nada.
//
// Comprueba antes de tocar nada: que la regla exista, que la frase no esté ya
// puesta, y que los distractores sean dos y distintos de la respuesta.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/poner-ejercicios.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const DIR = path.join(RAIZ, 'src', 'lib', 'kursbuch', 'frames');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');

const entrada = JSON.parse(fs.readFileSync(fichero, 'utf8'));
const ficheros = fs.readdirSync(DIR).filter((f) => f.endsWith('.js') && !f.startsWith('_') && f !== 'index.js');

// Se carga todo en memoria y solo se escribe si NO hay ningún problema: a
// medias dejaría unos ficheros tocados y otros no.
const textos = new Map();
for (const f of ficheros) textos.set(f, fs.readFileSync(path.join(DIR, f), 'utf8'));
let en = fs.readFileSync(P_EN, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const paraEn = [];
let puestos = 0;
let puestosO = 0;
let puestosC = 0;

// La clave va entre comillas salvo cuando es un identificador válido de
// JavaScript, y entonces se escribe a pelo (`imperativ: {`). Las dos formas
// conviven en los ficheros, así que hay que buscar las dos.
function agujas(clave) {
  const fuera = [`'${clave}': {`];
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(clave)) fuera.push(`\n  ${clave}: {`);
  return fuera;
}

const contiene = (txt, clave) => agujas(clave).some((a) => txt.includes(a));

// Dónde vive cada regla.
function ficheroDe(clave) {
  const encontrados = ficheros.filter((f) => contiene(textos.get(f), clave));
  if (encontrados.length === 0) return null;
  if (encontrados.length > 1) {
    problemas.push(`la regla "${clave}" está en varios ficheros: ${encontrados.join(', ')}`);
    return null;
  }
  return encontrados[0];
}

// El corchete que cierra `campo: [` contando los de dentro (los distractores
// abren y cierran los suyos). Devuelve la posición del ']'.
function findCierre(txt, desde) {
  let nivel = 0;
  for (let i = desde; i < txt.length; i += 1) {
    const c = txt[i];
    // Saltarse la cadena entera, con comillas simples O dobles: un distractor
    // con apóstrofo dentro se escribe "Ahmet's", y contando solo las simples
    // el apóstrofo abría una cadena que no existía y el recuento de corchetes
    // se iba al garete.
    if (c === "'" || c === '"') {
      const comilla = c;
      i += 1;
      while (i < txt.length && !(txt[i] === comilla && txt[i - 1] !== '\\')) i += 1;
      continue;
    }
    if (c === '[') nivel += 1;
    else if (c === ']') {
      nivel -= 1;
      if (nivel === 0) return i;
    }
  }
  return -1;
}

function inserta(f, clave, campo, lineas, crear = false) {
  let txt = textos.get(f);
  const iRegla = agujas(clave).map((a) => txt.indexOf(a)).filter((i) => i !== -1).sort((a, b) => a - b)[0] ?? -1;
  if (iRegla === -1) { problemas.push(`no encuentro la regla "${clave}"`); return; }
  // El final del bloque de ESTA regla, para no colarse en la siguiente.
  // El final del bloque de ESTA regla: la siguiente clave del mapa, venga
  // entrecomillada o no.
  const candidatos = [];
  const conComillas = txt.indexOf("\n  '", iRegla + 1);
  if (conComillas !== -1) candidatos.push(conComillas);
  const re = /\n {2}[A-Za-z_$][A-Za-z0-9_$]*: \{/g;
  re.lastIndex = iRegla + 1;
  const m = re.exec(txt);
  if (m) candidatos.push(m.index);
  const fin = candidatos.length ? Math.min(...candidatos) : txt.length;
  const iCampo = txt.indexOf(`${campo}: [`, iRegla);
  if (iCampo === -1 || iCampo > fin) {
    if (!crear) {
      problemas.push(`la regla "${clave}" no tiene "${campo}" (habría que crearlo a mano)`);
      return;
    }
    // El array no existe: se crea al final del bloque de la regla, detrás del
    // último campo. Pasaba con "clozes" (ninguna regla lo traía) y pasa
    // también con "orders" en las reglas de pronunciación, que solo tenían
    // huecos.
    const bloqueRegla = txt.slice(iRegla, fin);
    const iCierreRegla = iRegla + bloqueRegla.lastIndexOf('\n  }');
    if (iCierreRegla <= iRegla) { problemas.push(`no encuentro el final del bloque de "${clave}"`); return; }
    const antesR = txt.slice(0, iCierreRegla).trimEnd();
    const comaR = antesR.endsWith(',') ? '' : ',';
    const nuevo = comaR + '\n    ' + campo + ': [\n' +
      lineas.map((l) => '      ' + l).join(',\n') + '\n    ]';
    textos.set(f, antesR + nuevo + txt.slice(iCierreRegla));
    return;
  }
  const iCierre = findCierre(txt, txt.indexOf('[', iCampo));
  if (iCierre === -1 || iCierre > fin) { problemas.push(`no encuentro el final de "${campo}" en "${clave}"`); return; }

  // La sangría de la última entrada, para que lo nuevo quede igual.
  const antes = txt.slice(0, iCierre).trimEnd();
  const sangria = (/\n(\s+)\{[^\n]*$/.exec(antes.slice(-400)) || [, '      '])[1];
  // Ojo con el array VACÍO: ahí `antes` acaba en '[' y meter una coma delante
  // del primer elemento deja un hueco (`picks: [ , {...}]`) que en JS es un
  // undefined, y el motor reventaba al montar la reserva de distractores.
  const coma = (antes.endsWith(',') || antes.endsWith('[')) ? '' : ',';
  const bloque = coma + '\n' + lineas.map((l) => sangria + l).join(',\n') + '\n' + sangria.slice(0, -2);
  txt = antes + bloque + txt.slice(iCierre);
  textos.set(f, txt);
}

// Crea el bloque vacio de una regla nueva al final del objeto de su fichero.
// Hace falta porque las reglas se escriben primero en el libro (poner-reglas) y
// sus ejercicios vienen despues: sin esto habria que abrir el fichero a mano
// justo cuando se estan metiendo noventa reglas de golpe.
function crearBloque(clave, fichero) {
  if (!ficheros.includes(fichero)) {
    problemas.push(`"${fichero}" no es un fichero de frames/`);
    return false;
  }
  const txt = textos.get(fichero);
  // El ultimo '}' del objeto exportado, que es el que cierra el fichero.
  const fin = txt.lastIndexOf('};');
  if (fin === -1) { problemas.push(`no encuentro el final de "${fichero}"`); return false; }
  const antes = txt.slice(0, fin).trimEnd();
  const coma = antes.endsWith(',') ? '' : ',';
  textos.set(fichero, antes + coma + `
  '${clave}': {
    picks: []
  }
` + txt.slice(fin));
  return true;
}

for (const [clave, datos] of Object.entries(entrada)) {
  let f = ficheroDe(clave);
  // `fichero` en el JSON dice donde crearla si todavia no existe.
  if (!f && datos.fichero) {
    if (crearBloque(clave, datos.fichero)) f = datos.fichero;
  }
  if (!f) { problemas.push(`la regla "${clave}" no existe en frames/ (pon "fichero": "xxx.js" para crearla)`); continue; }
  const txt = textos.get(f);

  const lineasP = [];
  for (const fila of datos.picks || []) {
    const [s, a, d, t, tEn, e, eEn] = fila;
    if (!Array.isArray(d) || d.length !== 2) { problemas.push(`${clave}: "${s}" no tiene dos distractores`); continue; }
    if (d.includes(a)) { problemas.push(`${clave}: "${s}" tiene la respuesta entre los distractores`); continue; }
    if (txt.includes(`s: '${esc(s)}'`)) { problemas.push(`${clave}: ya está puesta "${s}"`); continue; }
    lineasP.push(`{ s: '${esc(s)}', a: '${esc(a)}', d: ['${esc(d[0])}', '${esc(d[1])}'], t: '${esc(t)}', e: '${esc(e)}' }`);
    paraEn.push([t, tEn], [e, eEn]);
    puestos += 1;
  }

  const lineasO = [];
  for (const fila of datos.orders || []) {
    const [sol, t, tEn, e, eEn, alt] = fila;
    if (!Array.isArray(sol) || sol.length < 3) { problemas.push(`${clave}: orden demasiado corto`); continue; }
    const yaEsta = `sol: [${sol.map((x) => `'${esc(x)}'`).join(', ')}]`;
    if (txt.includes(yaEsta)) { problemas.push(`${clave}: ya está puesto el orden "${sol.join(' ')}"`); continue; }
    // Cada alternativa tiene que llevar exactamente las mismas palabras que la
    // de referencia, o no es otra colocación: es otra frase.
    let malas = false;
    for (const a of alt || []) {
      if (!Array.isArray(a) || [...a].sort().join('|') !== [...sol].sort().join('|')) {
        problemas.push(`${clave}: la alternativa "${(a || []).join(' ')}" no lleva las mismas palabras que "${sol.join(' ')}"`);
        malas = true;
      }
    }
    if (malas) continue;
    const alts = (alt || []).length
      ? `, alt: [${alt.map((a) => `[${a.map((x) => `'${esc(x)}'`).join(', ')}]`).join(', ')}]`
      : '';
    lineasO.push(`{ ${yaEsta}${alts}, t: '${esc(t)}', e: '${esc(e)}' }`);
    paraEn.push([t, tEn], [e, eEn]);
    puestosO += 1;
  }

  const lineasC = [];
  for (const fila of datos.clozes || []) {
    const [txtCloze, a, extra, t, tEn, e, eEn] = fila;
    const huecos = (String(txtCloze).match(/___/g) || []).length;
    if (huecos < 2) { problemas.push(`${clave}: el texto "${String(txtCloze).slice(0, 40)}…" tiene ${huecos} hueco(s), hacen falta 2 o más`); continue; }
    if (!Array.isArray(a) || a.length !== huecos) { problemas.push(`${clave}: ${huecos} huecos pero ${a?.length} respuestas`); continue; }
    if (txt.includes(`txt: '${esc(txtCloze)}'`)) { problemas.push(`${clave}: ya está puesto ese texto`); continue; }
    const extras = (extra || []).length ? `, extra: [${extra.map((x) => `'${esc(x)}'`).join(', ')}]` : '';
    lineasC.push(`{ txt: '${esc(txtCloze)}', a: [${a.map((x) => `'${esc(x)}'`).join(', ')}]${extras}, t: '${esc(t)}', e: '${esc(e)}' }`);
    paraEn.push([t, tEn], [e, eEn]);
    puestosC += 1;
  }

  if (lineasP.length) inserta(f, clave, 'picks', lineasP);
  if (lineasO.length) inserta(f, clave, 'orders', lineasO, true);
  if (lineasC.length) inserta(f, clave, 'clozes', lineasC, true);
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// El inglés, al final del mapa de contenido.
const cierre = en.lastIndexOf('};');
if (cierre === -1) { console.error('no encuentro el final de en.js'); process.exit(1); }
const nl = en.includes('\r\n') ? '\r\n' : '\n';
let bloque = '';
let nuevas = 0;
const vistas = new Set();
for (const [es, ingles] of paraEn) {
  if (!es || !ingles) continue;
  if (vistas.has(es)) continue;
  vistas.add(es);
  if (en.includes(`'${esc(es)}':`)) continue;
  bloque += `  '${esc(es)}': '${esc(ingles)}',${nl}`;
  nuevas += 1;
}
if (bloque) en = en.slice(0, cierre) + bloque + en.slice(cierre);

for (const [f, txt] of textos) fs.writeFileSync(path.join(DIR, f), txt);
fs.writeFileSync(P_EN, en);

console.log(`${puestos} huecos, ${puestosO} frases para ordenar y ${puestosC} textos · ${nuevas} traducciones nuevas en en.js`);
