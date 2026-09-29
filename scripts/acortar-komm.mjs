// Deja UNA conversacion por apartado y tira el resto.
//
// Con tres conversaciones de tres o cuatro intercambios cada apartado pedia
// treinta turnos, y en pantalla eso es una lista que no se acaba nunca. Lo
// pedido es una sola conversacion por tema, de cuatro a seis intercambios, con
// lo mas importante del apartado y punto.
//
// Se queda la PRIMERA conversacion, que es la que se escribio con las frases
// centrales del tema. Las demas se borran: sus frases salen del libro y sus
// respuestas del fichero de respuestas.
//
// Uso:
//   node scripts/acortar-komm.mjs [--de-verdad]
//
// Sin --de-verdad solo dice lo que haria. Un apartado cuya primera
// conversacion no llegue a cuatro intercambios NO se toca: todavia esta en el
// formato viejo de diez frases sueltas, y recortarlo lo dejaria en una.

import fs from 'node:fs';
import path from 'node:path';

const ESCRIBIR = process.argv.includes('--de-verdad');

const RAIZ = process.cwd();
const DIR_KB = path.join(RAIZ, 'src', 'lib', 'kursbuch');
const P_RESP = path.join(DIR_KB, 'respuestas.js');
const BANDAS = { a11: 'a11.js', a12: 'a12.js', a21: 'a21.js' };

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };
const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');
const { respuestaDe, seguimientoDe } = await import('../src/lib/kursbuch/respuestas.js');

const MIN = 4;
const MAX = 6;

const textos = new Map();
for (const f of new Set(Object.values(BANDAS))) {
  textos.set(f, fs.readFileSync(path.join(DIR_KB, f), 'utf8'));
}
let resp = fs.readFileSync(P_RESP, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

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
    else if (c === cierra) { nivel -= 1; if (nivel === 0) return i; }
  }
  return -1;
}

function tramoLeccion(txt, leccion) {
  const marca = `id: '${leccion}'`;
  const i = txt.indexOf(marca);
  if (i === -1) return null;
  const re = /\n\s+id: '[a-z0-9-]+'/g;
  re.lastIndex = i + marca.length;
  const m = re.exec(txt);
  return { ini: i, fin: m ? m.index : txt.length };
}

function tramoWendungen(txt, leccion, funktion) {
  const tramo = tramoLeccion(txt, leccion);
  if (!tramo) return null;
  const iF = txt.indexOf(`funktion: '${esc(funktion)}'`, tramo.ini);
  if (iF === -1 || iF > tramo.fin) return null;
  const iW = txt.indexOf('wendungen: [', iF);
  if (iW === -1 || iW > tramo.fin) return null;
  const abre = txt.indexOf('[', iW);
  const cierra = cierreDe(txt, abre);
  return cierra === -1 ? null : { abre, cierra };
}

function tramoRespuesta(txt, frase) {
  const clave = `\n  '${esc(frase)}':`;
  const i = txt.indexOf(clave);
  if (i === -1) return null;
  const abre = txt.indexOf('{', i);
  if (abre === -1) return null;
  const cierra = cierreDe(txt, abre);
  if (cierra === -1) return null;
  let fin = cierra + 1;
  if (txt[fin] === ',') fin += 1;
  return { ini: i + 1, fin };
}

const plan = [];
const saltados = [];

for (const band of KURSBUCH.baende) {
  for (const l of band.lektionen) {
    const nivel = l.id.split('-')[0];
    const fBanda = BANDAS[nivel];
    for (const k of l.kommunikation || []) {
      const ws = k.wendungen || [];
      if (ws.length <= 1) continue;
      const primera = ws[0];
      if (!respuestaDe(primera.de)) { saltados.push(`${l.id}/${k.funktion}: la primera frase no tiene respuesta`); continue; }
      const inter = (2 + (seguimientoDe(primera.de) || []).length) / 2;
      if (inter < MIN) {
        saltados.push(`${l.id}/${k.funktion}: la primera conversacion tiene ${inter} intercambio(s), sigue en el formato viejo`);
        continue;
      }
      plan.push({
        leccion: l.id, funktion: k.funktion, fBanda,
        quedan: primera, fuera: ws.slice(1), inter
      });
    }
  }
}

if (saltados.length) {
  console.log('Sin tocar:');
  for (const s of saltados) console.log('   ' + s);
  console.log('');
}

if (!plan.length) { console.log('nada que acortar'); process.exit(0); }

let quitadas = 0;
for (const p of plan) quitadas += p.fuera.length;
console.log(`${plan.length} apartados se quedan en 1 conversacion · salen ${quitadas} conversaciones`);
const largos = plan.filter((p) => p.inter > MAX);
for (const p of largos) console.log(`   ojo: ${p.leccion}/${p.funktion} se queda con ${p.inter} intercambios (mas de ${MAX})`);

if (!ESCRIBIR) {
  console.log('\n(prueba: nada escrito. Con --de-verdad se aplica.)');
  process.exit(0);
}

// El libro, de atras hacia delante para que los indices sigan valiendo.
const porFichero = new Map();
for (const p of plan) {
  if (!porFichero.has(p.fBanda)) porFichero.set(p.fBanda, []);
  porFichero.get(p.fBanda).push(p);
}
for (const [fBanda, lista] of porFichero) {
  let txt = textos.get(fBanda);
  const conTramo = lista
    .map((p) => ({ p, t: tramoWendungen(txt, p.leccion, p.funktion) }))
    .filter((x) => x.t)
    .sort((a, b) => b.t.abre - a.t.abre);
  for (const { p, t } of conTramo) {
    const linea = `            { de: '${esc(p.quedan.de)}', es: '${esc(p.quedan.es)}' }`;
    txt = txt.slice(0, t.abre) + `[\n${linea}\n          ]` + txt.slice(t.cierra + 1);
  }
  textos.set(fBanda, txt);
}

// Y sus respuestas.
const cortes = [];
for (const p of plan) {
  for (const w of p.fuera) {
    const t = tramoRespuesta(resp, w.de);
    if (t) cortes.push([t.ini, t.fin]);
  }
}
cortes.sort((a, b) => b[0] - a[0]);
for (const [ini, fin] of cortes) resp = resp.slice(0, ini) + resp.slice(fin);

for (const [f, txt] of textos) fs.writeFileSync(path.join(DIR_KB, f), txt);
fs.writeFileSync(P_RESP, resp);
console.log(`\nhecho · ${cortes.length} respuestas borradas`);
