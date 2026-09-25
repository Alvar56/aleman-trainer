// Repasa las traducciones buscando los fallos que se pueden buscar solos.
//
// No juzga si una traducción es bonita: busca tres cosas concretas que sí se
// pueden comprobar con una regla, y que son justo las que se cuelan.
//
//   1. Alemán de usted (Sie/Ihnen) con la glosa de tú, o al revés. En alemán
//      elegir entre du y Sie es media conversación; si la glosa dice lo
//      contrario, aprendes al revés.
//   2. Glosas que se quedaron sin traducir: iguales al alemán, o vacías.
//   3. Entradas de en.js donde el inglés es idéntico al castellano, que casi
//      siempre es una línea copiada y no traducida.
//
//   node scripts/revision-traducciones.mjs

import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(process.cwd(), 'src/lib');

function ficheros(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return ficheros(p);
    return d.name.endsWith('.js') ? [p] : [];
  });
}

// Sie de usted: mayúscula y NO al principio de la frase (ahí puede ser "sie",
// ella o ellos). Ihnen / Ihr… con mayúscula en medio son siempre de usted.
const FORMAL_DE = /(?<!^)(?<![.!?]\s)\bSie\b|\bIhnen\b|(?<!^)\bIhre?[nmrs]?\b/;
const INFORMAL_DE = /\b(du|dich|dir|dein\w*|euch|euer)\b/i;

// Marcas claras de tuteo. Nada de terminaciones verbales sueltas: "toma" puede
// ser imperativo de usted, y eso llenaría esto de avisos falsos.
const INFORMAL_ES = new RegExp(
  '\\b(t\\u00fa|te|ti|tus?|contigo|tienes|quieres|puedes|eres|est\\u00e1s|vas|haces|sabes|vives|hablas|' +
  'necesitas|vienes|dices|conoces|trabajas|llamas|prefieres|entiendes|piensas|crees)\\b',
  'i'
);
// usted(es)? y no ustedes?: el ? se aplica a la última letra, así que
// /ustedes?/ pide "ustede" y no casaba con "usted". Lo pilló la prueba de
// control de aquí abajo, que para eso está.
const FORMAL_ES = /\busted(es)?\b/i;

const desnudo = (x) => String(x).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');

function mira(de, es) {
  if (FORMAL_DE.test(de) && INFORMAL_ES.test(es) && !FORMAL_ES.test(es)) {
    return 'alemán de USTED, glosa de TÚ';
  }
  if (INFORMAL_DE.test(de) && FORMAL_ES.test(es)) {
    return 'alemán de TÚ, glosa de USTED';
  }
  if (!String(es).trim()) return 'glosa vacía';
  // Igual que el alemán solo importa si son varias palabras. Los países
  // (Portugal, China), los colores que se escriben igual (rosa, beige) y un
  // apellido deletreado coinciden con razón, y avisar de ellos solo entrena a
  // no leer los avisos.
  if (desnudo(de) === desnudo(es) && String(de).trim().split(/\s+/).length >= 2) {
    return 'glosa igual que el alemán';
  }
  return null;
}

// El detector tiene que fallar cuando toca. Uno que no salta nunca pasa todas
// las revisiones y no sirve para nada.
const CONTROL = [
  ['Können Sie mir helfen?', '¿Puedes ayudarme?', true],
  ['Können Sie mir helfen?', '¿Puede usted ayudarme?', false],
  ['Wie heißt du?', '¿Cómo se llama usted?', true],
  ['Wie heißt du?', '¿Cómo te llamas?', false],
  ['Guten Morgen!', 'Guten Morgen!', true]
];
for (const [de, es, esperado] of CONTROL) {
  const salta = !!mira(de, es);
  if (salta !== esperado) {
    console.error(`El propio detector está roto: "${de}" -> "${es}" debía ${esperado ? '' : 'NO '}avisar`);
    process.exit(2);
  }
}

const avisos = [];
let pares = 0;

for (const f of ficheros(RAIZ)) {
  if (f.includes(path.join('contenido', 'en.js'))) continue;
  const src = fs.readFileSync(f, 'utf8');
  const re = /de:\s*'((?:[^'\\]|\\.)*)'\s*,\s*es:\s*'((?:[^'\\]|\\.)*)'/g;
  for (const m of src.matchAll(re)) {
    const de = m[1].replace(/\\'/g, "'");
    const es = m[2].replace(/\\'/g, "'");
    pares += 1;
    const tipo = mira(de, es);
    if (tipo) {
      const linea = src.slice(0, m.index).split('\n').length;
      avisos.push({ sitio: `${path.relative(process.cwd(), f)}:${linea}`, tipo, de, es });
    }
  }
}

// --- 3. inglés idéntico al castellano en en.js ------------------------------
const enJs = fs.readFileSync(path.join(RAIZ, 'contenido', 'en.js'), 'utf8');
const reEn = /^\s*'((?:[^'\\]|\\.)*)':\s*'((?:[^'\\]|\\.)*)',?\s*$/gm;
let entradas = 0;
const copiadas = [];
for (const m of enJs.matchAll(reEn)) {
  const es = m[1].replace(/\\'/g, "'");
  const en = m[2].replace(/\\'/g, "'");
  entradas += 1;
  // Hay traducciones que coinciden de verdad ("Hotel", "Taxi", "Internet"), y
  // sobre todo hay cientos de entradas que NO son castellano: ejemplos de
  // gramática alemana ("in dem = im", "Wo? → im", "du isst, er isst"). Esas
  // coinciden porque no hay nada que traducir.
  //
  // Solo se mira lo que de verdad parece una frase en castellano: tres
  // palabras o más y alguna palabra funcional española dentro.
  // Sin "es", "un", "y", "al" ni "no": en alemán "es" es "ello", "un-" es un
  // prefijo y todas aparecen en los ejemplos de gramática. Solo palabras que
  // no existen en alemán.
  const castellano = /\b(el|la|los|las|una|unos|unas|del|que|con|para|por|se|son|está|están|hay)\b/i;
  if (desnudo(es) === desnudo(en) && es.trim().split(/\s+/).length >= 3 && castellano.test(es)) {
    copiadas.push({ es, en });
  }
}

console.log(`${pares} pares alemán/castellano · ${entradas} entradas en en.js\n`);

if (avisos.length) {
  console.log(`Glosas para mirar: ${avisos.length}\n`);
  for (const a of avisos) {
    console.log(`${a.sitio}  [${a.tipo}]`);
    console.log(`   de: ${a.de}`);
    console.log(`   es: ${a.es}\n`);
  }
} else {
  console.log('Glosas alemán/castellano: nada que mirar');
}

if (copiadas.length) {
  console.log(`\nInglés igual que el castellano: ${copiadas.length}\n`);
  for (const c of copiadas.slice(0, 30)) console.log(`   ${c.es}`);
} else {
  console.log('Inglés de en.js: nada copiado sin traducir');
}

// Solo fallan las glosas: lo de en.js es informativo. Siempre quedan tres o
// cuatro ejemplos de formacion de palabras ("Arbeit + -los") que coinciden
// con razon, y un script que falla siempre no lo mira nadie.
process.exitCode = avisos.length ? 1 : 0;
