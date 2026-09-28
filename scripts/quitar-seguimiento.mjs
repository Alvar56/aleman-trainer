// Acorta conversaciones: les quita los turnos de seguimiento.
//
// Es el reverso de poner-seguimiento.mjs. Hace falta porque una conversación
// de cuatro turnos se lee muy bien, pero diez seguidas en un apartado son
// cuarenta burbujas y ahí ya no se lee nada. La idea es dejar largas sólo dos
// o tres por apartado y las demás en frase + respuesta.
//
// Uso:
//   node scripts/quitar-seguimiento.mjs <fichero.json>
//
// El JSON es una lista de frases alemanas:
//   ["Vor fünf Jahren war hier alles anders.", "..."]
//
// La frase tiene que existir y tener turnos; si no, se avisa y no se escribe
// nada, ni de esa ni de las demás.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/quitar-seguimiento.mjs <fichero.json>');
  process.exit(2);
}

const P = path.join(process.cwd(), 'src', 'lib', 'kursbuch', 'respuestas.js');
const frases = JSON.parse(fs.readFileSync(fichero, 'utf8'));
let txt = fs.readFileSync(P, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const cortes = [];

for (const de of frases) {
  // Sin el salto de linea al final: respuestas.js esta en CRLF, y buscar
  // con \n solo no encontraba ni una clave.
  const clave = `  '${esc(de)}':`;
  const i = txt.indexOf(clave);
  if (i === -1) { problemas.push(`no encuentro "${de}"`); continue; }
  // El objeto de la respuesta: desde el '{' hasta el '},' que lo cierra al
  // final de su propia línea.
  const abre = txt.indexOf('{', i + clave.length);
  // El cierre del objeto ENTERO, no el del primer turno de dentro. Los
  // turnos tambien acaban en " },", asi que buscar eso a secas cortaba el
  // bloque por la mitad y dejaba las lineas de abajo sueltas: el fichero
  // dejaba de ser JavaScript valido. El cierre de verdad es el "] },".
  const cierre = txt.indexOf('] },', abre);
  const fin = cierre === -1 ? -1 : txt.indexOf('\n', cierre);
  if (abre === -1 || fin === -1) { problemas.push(`no leo la respuesta de "${de}"`); continue; }
  const bloque = txt.slice(abre, fin);
  if (!bloque.includes('mas:')) { problemas.push(`"${de}" no tiene turnos que quitar`); continue; }
  // La respuesta sin los turnos: de y es, y punto.
  const m = /de:\s*'((?:[^'\\]|\\.)*)',\s*es:\s*'((?:[^'\\]|\\.)*)'/.exec(bloque);
  if (!m) { problemas.push(`no leo de/es de "${de}"`); continue; }
  cortes.push({ abre, fin, nuevo: `{ de: '${m[1]}', es: '${m[2]}' },` });
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// De atrás hacia delante, para que los índices ya calculados sigan valiendo.
cortes.sort((a, b) => b.abre - a.abre);
for (const c of cortes) txt = txt.slice(0, c.abre) + c.nuevo + txt.slice(c.fin);

fs.writeFileSync(P, txt);
console.log(`${cortes.length} conversaciones acortadas`);
