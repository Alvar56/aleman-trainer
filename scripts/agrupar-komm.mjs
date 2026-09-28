// Encadena frases de Kommunikation en conversaciones más largas.
//
// En la teoría, cada frase abría su propia conversación: frase, respuesta, y a
// otra cosa. Diez frases seguidas eran diez pares sueltos, que no es como
// habla nadie. Marcando una frase con `sigue: true` deja de abrir conversación
// y se engancha a la anterior, así que las dos —o las cuatro— se leen como un
// diálogo seguido.
//
// No se añade ni se quita contenido: son las mismas frases, cada una con su
// respuesta, y cada una sigue siendo su propio ejercicio. Lo único que cambia
// es dónde se corta el diálogo.
//
// Uso:
//   node scripts/agrupar-komm.mjs <fichero.json>
//
// El JSON dice, por lección, qué frases enganchan con la anterior:
//   {
//     "a21-l2": [
//       "Ich habe etwas Spanisches gekocht.",
//       "Bei uns gibt es nur eine Kleinigkeit."
//     ]
//   }
//
// La frase tiene que existir en esa lección y no puede ser la primera de su
// apartado: no hay nada delante a lo que engancharla.

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const auto = args.includes('--auto');
const tam = Number((args.find((a) => a.startsWith('--de=')) || '--de=3').slice(5));
const fichero = args.find((a) => !a.startsWith('--'));
if (!auto && !fichero) {
  console.error('uso: node scripts/agrupar-komm.mjs <fichero.json>');
  console.error('     node scripts/agrupar-komm.mjs --auto [--de=3] [--leccion=a21-l2]');
  process.exit(2);
}
const soloLeccion = (args.find((a) => a.startsWith('--leccion=')) || '').slice(10) || null;

const DIR = path.join(process.cwd(), 'src', 'lib', 'kursbuch');
const BANDAS = ['a11', 'a12', 'a21'];
// En modo --auto la lista se calcula: dentro de cada apartado, las frases van
// de `tam` en `tam`, y todas menos la primera de cada grupo se enganchan. Los
// diez pares sueltos de un apartado se leen entonces como tres o cuatro
// conversaciones seguidas.
//
// Vale porque las frases de un apartado son, por construccion, la MISMA
// funcion comunicativa: dos seguidas hablan de lo mismo y encadenarlas suena a
// una conversacion que avanza, no a un salto de tema. Donde no cuadre, se
// deshace a mano con el JSON.
//
// El ultimo grupo nunca se queda con una sola frase: se pega al anterior, que
// una conversacion de un turno es justo lo que se queria evitar.
async function calcular() {
  globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
  globalThis.window = { addEventListener() {} };
  const { setLang } = await import('../src/lib/i18n.js');
  setLang('es');
  const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');
  const out = {};
  for (const banda of KURSBUCH.baende) {
    for (const l of banda.lektionen) {
      if (soloLeccion && l.id !== soloLeccion) continue;
      const frases = [];
      for (const k of l.kommunikation || []) {
        const ws = k.wendungen || [];
        for (let i = 0; i < ws.length; i += 1) {
          const abre = i % tam === 0 && ws.length - i > 1;
          if (!abre && i > 0 && !ws[i].sigue) frases.push(ws[i].de);
        }
      }
      if (frases.length) out[l.id] = frases;
    }
  }
  return out;
}

const entrada = auto ? await calcular() : JSON.parse(fs.readFileSync(fichero, 'utf8'));
const textos = new Map();
for (const b of BANDAS) textos.set(b, fs.readFileSync(path.join(DIR, `${b}.js`), 'utf8'));

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
let n = 0;

for (const [lid, frases] of Object.entries(entrada)) {
  const banda = lid.split('-')[0];
  let txt = textos.get(banda);
  if (!txt) { problemas.push(`no conozco el tomo de "${lid}"`); continue; }
  const ini = txt.indexOf(`id: '${lid}'`);
  if (ini === -1) { problemas.push(`no encuentro la lección "${lid}"`); continue; }
  const sig = txt.indexOf("      id: 'a", ini + 1);
  let fin = sig === -1 ? txt.length : sig;

  for (const de of frases) {
    const bloque = txt.slice(ini, fin);
    // La línea de esa frase, con comilla simple o doble.
    let rel = bloque.indexOf(`{ de: '${esc(de)}',`);
    let comilla = "'";
    if (rel === -1) { rel = bloque.indexOf(`{ de: "${de}",`); comilla = '"'; }
    if (rel === -1) { problemas.push(`${lid}: no encuentro "${de}"`); continue; }
    const abs = ini + rel;
    const cierre = txt.indexOf('}', abs);
    if (cierre === -1) { problemas.push(`${lid}: línea rota en "${de}"`); continue; }
    const linea = txt.slice(abs, cierre + 1);
    if (linea.includes('sigue:')) {
      if (!auto) problemas.push(`${lid}: "${de}" ya está enganchada`);
      continue;
    }
    // ¿Es la primera de su apartado? Entonces no hay nada delante.
    const desdeWendungen = txt.lastIndexOf('wendungen: [', abs);
    if (desdeWendungen > ini && !txt.slice(desdeWendungen, abs).includes('{ de:')) {
      problemas.push(`${lid}: "${de}" es la primera de su apartado, no puede seguir a nada`);
      continue;
    }
    txt = txt.slice(0, cierre) + ', sigue: true ' + txt.slice(cierre);
    textos.set(banda, txt);
    n += 1;
    // El texto ha crecido, asi que el final de la leccion ya no esta donde
    // estaba. Sin recalcularlo, el bloque se va quedando corto y las ultimas
    // frases parecen no existir.
    fin = sig === -1 ? txt.length : txt.indexOf("      id: 'a", ini + 1);
    if (fin === -1) fin = txt.length;
  }
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

for (const b of BANDAS) fs.writeFileSync(path.join(DIR, `${b}.js`), textos.get(b));
console.log(`${n} frases enganchadas a la conversación anterior`);
