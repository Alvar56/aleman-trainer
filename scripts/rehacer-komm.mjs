// Rehace un apartado de Kommunikation entero como conversaciones largas.
//
// El formato viejo dejaba diez frases del libro con una respuesta de un turno
// cada una: diez temas distintos que se abren, se cierran y no llevan a nada.
// El nuevo son tres o cuatro conversaciones sobre EL MISMO tema, de cinco o
// seis intercambios, que es como se habla de verdad.
//
// Hace falta un script propio porque poner-seguimiento no sirve para esto: se
// niega a tocar una conversacion que ya tiene `mas`, y no sabe quitar una frase
// de la leccion. Aqui se reescribe el apartado de una pieza, y las frases que
// dejan de abrir conversacion no se tiran: entran como turnos de dentro, donde
// KommPractice las sigue usando para Decir, Ordenar, Hueco y Significado.
//
// Uso:
//   node scripts/rehacer-komm.mjs <fichero.json>
//
// El JSON es una lista de apartados:
//
//   [{ "leccion": "a11-l1", "funktion": "begrüßen",
//      "conversaciones": [
//        { "turnos": [["Guten Tag!", "Buenos dias", "Good day"],
//                     ["Guten Tag! Wie geht es Ihnen?", "...", "..."],
//                     ...] } ] }]
//
// El PRIMER turno de cada conversacion es la frase del libro: la que abre, la
// que se guarda en wendungen. Los demas alternan: el segundo te lo contestan,
// el tercero lo dices tu, y asi. Por eso tienen que ser pares -cada intercambio
// es una frase y su respuesta-, y cada conversacion son turnos/2 intercambios.
//
// No escribe nada si algo falla en cualquiera de los apartados: a medias
// dejaria el libro y las respuestas sin cuadrar.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/rehacer-komm.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const DIR_KB = path.join(RAIZ, 'src', 'lib', 'kursbuch');
const P_RESP = path.join(DIR_KB, 'respuestas.js');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');

// De que fichero sale cada nivel.
const BANDAS = { a11: 'a11.js', a12: 'a12.js', a21: 'a21.js' };

const entrada = JSON.parse(fs.readFileSync(fichero, 'utf8'));
const apartados = Array.isArray(entrada) ? entrada : [entrada];

// Todo en memoria; se escribe al final y solo si no hay ningun problema.
const textos = new Map();
for (const f of new Set(Object.values(BANDAS))) {
  textos.set(f, fs.readFileSync(path.join(DIR_KB, f), 'utf8'));
}
let resp = fs.readFileSync(P_RESP, 'utf8');
let en = fs.readFileSync(P_EN, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const paraEn = [];

// El cierre del corchete o la llave que abre en `desde`, saltandose lo que va
// entre comillas: un texto con "[" o "}" dentro no cuenta.
function cierreDe(txt, desde) {
  const abre = txt[desde];
  const cierra = abre === '[' ? ']' : '}';
  let nivel = 0;
  let comilla = null;
  for (let i = desde; i < txt.length; i += 1) {
    const c = txt[i];
    if (comilla) {
      if (c === '\\') i += 1;
      else if (c === comilla) comilla = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { comilla = c; continue; }
    if (c === abre) nivel += 1;
    else if (c === cierra) {
      nivel -= 1;
      if (nivel === 0) return i;
    }
  }
  return -1;
}

// Donde empieza y acaba el texto de una leccion dentro de su fichero.
function tramoLeccion(txt, leccion) {
  const marca = `id: '${leccion}'`;
  const i = txt.indexOf(marca);
  if (i === -1) return null;
  // La leccion siguiente, para no colarse en ella.
  const re = /\n\s+id: '[a-z0-9-]+'/g;
  re.lastIndex = i + marca.length;
  const m = re.exec(txt);
  return { ini: i, fin: m ? m.index : txt.length };
}

// El array `wendungen` del apartado pedido: sus posiciones en el fichero.
function tramoWendungen(txt, leccion, funktion) {
  const tramo = tramoLeccion(txt, leccion);
  if (!tramo) return null;
  const marca = `funktion: '${esc(funktion)}'`;
  const iF = txt.indexOf(marca, tramo.ini);
  if (iF === -1 || iF > tramo.fin) return null;
  const iW = txt.indexOf('wendungen: [', iF);
  if (iW === -1 || iW > tramo.fin) return null;
  const abre = txt.indexOf('[', iW);
  const cierra = cierreDe(txt, abre);
  if (cierra === -1) return null;
  return { abre, cierra };
}

// Las frases alemanas que tiene hoy ese array.
function frasesDe(txt, tramo) {
  const dentro = txt.slice(tramo.abre, tramo.cierra + 1);
  const fuera = [];
  const re = /\{\s*de: '((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = re.exec(dentro))) fuera.push(m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\'));
  return fuera;
}

// El objeto de una respuesta: desde la clave hasta la llave que lo cierra.
function tramoRespuesta(txt, frase) {
  const clave = `\n  '${esc(frase)}':`;
  const i = txt.indexOf(clave);
  if (i === -1) return null;
  const abre = txt.indexOf('{', i);
  if (abre === -1) return null;
  const cierra = cierreDe(txt, abre);
  if (cierra === -1) return null;
  // Se lleva por delante la coma y el salto de linea del final, si los hay.
  let fin = cierra + 1;
  if (txt[fin] === ',') fin += 1;
  return { ini: i + 1, abre, cierra, fin };
}

// ---- Validar todo antes de tocar nada --------------------------------------

const plan = [];

for (const ap of apartados) {
  const { leccion, funktion, conversaciones } = ap;
  const nivel = String(leccion || '').split('-')[0];
  const fBanda = BANDAS[nivel];
  if (!fBanda) { problemas.push(`"${leccion}": no se de que fichero sale`); continue; }
  const txt = textos.get(fBanda);

  const tramo = tramoWendungen(txt, leccion, funktion);
  if (!tramo) { problemas.push(`no encuentro "${funktion}" en ${leccion}`); continue; }
  if (!Array.isArray(conversaciones) || !conversaciones.length) {
    problemas.push(`${leccion}/${funktion}: sin conversaciones`);
    continue;
  }

  const aperturas = [];
  const cadenas = [];
  let intercambios = 0;
  let mal = false;

  for (const conv of conversaciones) {
    const turnos = conv.turnos;
    if (!Array.isArray(turnos) || turnos.length < 4) {
      problemas.push(`${leccion}/${funktion}: una conversacion tiene ${turnos?.length || 0} turno(s); hacen falta 4 o mas`);
      mal = true;
      continue;
    }
    if (turnos.length % 2 !== 0) {
      problemas.push(`${leccion}/${funktion}: una conversacion tiene ${turnos.length} turnos; tienen que ser pares (cada intercambio es frase y respuesta)`);
      mal = true;
      continue;
    }
    for (const turn of turnos) {
      if (!Array.isArray(turn) || turn.length < 2 || !turn[0] || !turn[1]) {
        problemas.push(`${leccion}/${funktion}: un turno no trae [aleman, castellano, ingles]`);
        mal = true;
      }
    }
    if (mal) continue;
    aperturas.push(turnos[0]);
    cadenas.push(turnos);
    intercambios += turnos.length / 2;
  }
  if (mal) continue;

  // Dos turnos con el mismo aleman dentro del apartado dejarian el juego de
  // Decir con dos opciones buenas, y el de Contestar sin saber cual toca.
  const vistos = new Map();
  for (const turnos of cadenas) {
    for (const [de] of turnos) {
      vistos.set(de, (vistos.get(de) || 0) + 1);
    }
  }
  for (const [de, n] of vistos) {
    if (n > 1) problemas.push(`${leccion}/${funktion}: "${de}" sale ${n} veces`);
  }

  plan.push({ leccion, funktion, fBanda, tramo, aperturas, cadenas, intercambios, viejas: frasesDe(txt, tramo) });
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// ---- Escribir --------------------------------------------------------------

// El libro, de atras hacia delante por fichero para que los indices valgan.
const porFichero = new Map();
for (const p of plan) {
  if (!porFichero.has(p.fBanda)) porFichero.set(p.fBanda, []);
  porFichero.get(p.fBanda).push(p);
}

for (const [fBanda, lista] of porFichero) {
  let txt = textos.get(fBanda);
  lista.sort((a, b) => b.tramo.abre - a.tramo.abre);
  for (const p of lista) {
    const lineas = p.aperturas
      .map(([de, es]) => `            { de: '${esc(de)}', es: '${esc(es)}' }`)
      .join(',\n');
    txt = txt.slice(0, p.tramo.abre) + `[\n${lineas}\n          ]` + txt.slice(p.tramo.cierra + 1);
  }
  textos.set(fBanda, txt);
}

// Las respuestas: primero fuera las viejas del apartado, luego las nuevas.
const aQuitar = new Set();
for (const p of plan) for (const v of p.viejas) aQuitar.add(v);

const cortes = [];
for (const frase of aQuitar) {
  const t = tramoRespuesta(resp, frase);
  if (t) cortes.push([t.ini, t.fin]);
}
cortes.sort((a, b) => b[0] - a[0]);
for (const [ini, fin] of cortes) resp = resp.slice(0, ini) + resp.slice(fin);

// Las nuevas van al final del mapa, agrupadas por apartado.
const cierreMapa = resp.lastIndexOf('\n};');
if (cierreMapa === -1) { console.error('no encuentro el final de RESPUESTAS'); process.exit(1); }
let bloque = '';
let nConv = 0;
for (const p of plan) {
  bloque += `\n  // ---- ${p.leccion} · ${p.funktion} ${'-'.repeat(Math.max(3, 58 - p.leccion.length - p.funktion.length))}\n`;
  for (const turnos of p.cadenas) {
    const [apertura, respuesta, ...mas] = turnos;
    const lineasMas = mas
      .map(([de, es]) => `        { de: '${esc(de)}', es: '${esc(es)}' }`)
      .join(',\n');
    bloque += `  '${esc(apertura[0])}':\n    { de: '${esc(respuesta[0])}', es: '${esc(respuesta[1])}'`;
    bloque += mas.length ? `,\n      mas: [\n${lineasMas}\n      ] },\n` : ' },\n';
    for (const [, es, ingles] of turnos) paraEn.push([es, ingles]);
    nConv += 1;
  }
}
resp = resp.slice(0, cierreMapa) + '\n' + bloque + resp.slice(cierreMapa);

// El ingles de las glosas nuevas.
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

for (const [f, txt] of textos) fs.writeFileSync(path.join(DIR_KB, f), txt);
fs.writeFileSync(P_RESP, resp);
fs.writeFileSync(P_EN, en);

const tot = plan.reduce((a, p) => a + p.intercambios, 0);
console.log(`${plan.length} apartado(s) rehecho(s) · ${nConv} conversaciones · ${tot} intercambios · ${nuevas} traducciones nuevas`);
for (const p of plan) {
  console.log(`   ${p.leccion}/${p.funktion}: ${p.cadenas.length} conversaciones, ${p.intercambios} intercambios (${p.cadenas.map((c) => c.length / 2).join('+')})`);
}
