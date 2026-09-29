// Claves de i18n declaradas que no usa nadie.
//
// El diccionario de la interfaz (lib/i18n.js) acumula claves de pantallas que
// se rehicieron o de cosas que nunca se terminaron. No rompen nada, pero van al
// bundle y hacen el fichero ilegible.
//
// OJO, y es la razon de que esto sea un script y no un grep: hay claves que NO
// aparecen escritas en ningun sitio porque se arman al vuelo.
//
//   t('ueb.pista' + (i + 1))     ->  ueb.pista1, ueb.pista2, ueb.pista3
//   t('tp.perfAux.' + subj.k)    ->  tp.perfAux.ich, tp.perfAux.du, ...
//
// Un grep las da por muertas y borrarlas deja sin texto las pistas de Traducir
// y el auxiliar del Perfekt. Asi que los prefijos de esas familias se sacan del
// propio codigo -se busca t('algo' + ...)- y todo lo que empiece por uno de
// ellos queda protegido. Si manana alguien escribe otra familia dinamica, esto
// la respeta sola.
//
// Uso:
//   node scripts/claves-i18n-sin-usar.mjs            (solo cuenta)
//   node scripts/claves-i18n-sin-usar.mjs --escribe

import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.cwd();
const P_I18N = path.join(RAIZ, 'src', 'lib', 'i18n.js');
const ESCRIBIR = process.argv.includes('--escribe');

const original = fs.readFileSync(P_I18N, 'utf8');

// Las claves del diccionario: "  'algo.asi': ['es', 'en'],"
const RE_CLAVE = /^(\s+)'([A-Za-z0-9_.]+)':\s*\[/;
const declaradas = [];
for (const linea of original.split('\n')) {
  const m = RE_CLAVE.exec(linea);
  if (m) declaradas.push(m[2]);
}

// Todo el codigo que puede usarlas, menos el propio diccionario.
const fuentes = [];
// Este mismo fichero queda fuera: sus comentarios traen ejemplos de t('…' + x)
// y el detector de familias los tomaria por codigo de verdad.
const YO = path.join(RAIZ, 'scripts', 'claves-i18n-sin-usar.mjs');
function anda(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === 'dist') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) anda(p);
    else if (/\.(jsx?|mjs)$/.test(e.name) && p !== P_I18N && p !== YO) fuentes.push(fs.readFileSync(p, 'utf8'));
  }
}
anda(path.join(RAIZ, 'src'));
anda(path.join(RAIZ, 'scripts'));
const codigo = fuentes.join('\n');

// Los prefijos de las familias que se construyen sumando texto: t('x.y' + loQueSea).
const protegidos = new Set();
for (const m of codigo.matchAll(/\bt\(\s*'([A-Za-z0-9_.]+)'\s*\+/g)) protegidos.add(m[1]);

const estaProtegida = (k) => [...protegidos].some((p) => k.startsWith(p));
const seUsa = (k) => codigo.includes(`'${k}'`) || codigo.includes(`"${k}"`) || codigo.includes('`' + k + '`');

const muertas = declaradas.filter((k) => !seUsa(k) && !estaProtegida(k));
const salvadas = declaradas.filter((k) => !seUsa(k) && estaProtegida(k));

console.log(`${declaradas.length} claves declaradas · ${muertas.length} sin usar`);
if (protegidos.size) {
  console.log(`\nfamilias que se arman al vuelo (protegidas): ${[...protegidos].join(', ')}`);
  console.log(`   ${salvadas.length} claves suyas se salvan del borrado: ${salvadas.join(', ') || '-'}`);
}

if (!muertas.length) process.exit(0);

if (!ESCRIBIR) {
  console.log('\nsin usar:');
  for (const k of muertas) console.log('   ' + k);
  console.log('\n(pon --escribe para borrarlas)');
  process.exit(0);
}

// Una entrada NO siempre cabe en una linea: los textos largos parten el array
// en varias. Borrar solo la linea de la clave dejaba sueltas las de abajo y el
// fichero no compilaba. Asi que se busca el corchete que cierra, contando los
// de dentro y saltandose lo que va entre comillas.
function cierreDe(txt, desde) {
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
    if (c === '[') nivel += 1;
    else if (c === ']') { nivel -= 1; if (nivel === 0) return i; }
  }
  return -1;
}

let texto = original;
const cortes = [];
for (const k of muertas) {
  const aguja = `\n  '${k}': [`;
  const i = texto.indexOf(aguja);
  if (i === -1) continue;
  const abre = texto.indexOf('[', i);
  const cierra = cierreDe(texto, abre);
  if (cierra === -1) continue;
  // Se lleva tambien la coma final y deja el salto de linea de delante.
  let fin = cierra + 1;
  if (texto[fin] === ',') fin += 1;
  cortes.push([i, fin]);
}
cortes.sort((a, b) => b[0] - a[0]);
for (const [ini, fin] of cortes) texto = texto.slice(0, ini) + texto.slice(fin);

fs.writeFileSync(P_I18N, texto);
console.log(`\ni18n.js: ${original.split('\n').length} → ${texto.split('\n').length} lineas · ${cortes.length} claves borradas`);
