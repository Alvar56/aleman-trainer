// Añade traducciones sueltas a contenido/en.js.
//
// El contenido se escribe en castellano y en.js es el diccionario que usa
// tc(). Cuando una glosa se queda sin su línea aquí, la versión inglesa la
// enseña en castellano sin avisar. Esto es para rellenar esos huecos.
//
// Uso:
//   node scripts/poner-ingles.mjs <fichero.json>
//
// El JSON es castellano -> inglés:
//   { "Claro, dime qué necesitas.": "Sure, tell me what you need." }
//
// Las que ya estén no se tocan, y se dice cuántas eran.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/poner-ingles.mjs <fichero.json>');
  process.exit(2);
}

const P_EN = path.join(process.cwd(), 'src', 'lib', 'contenido', 'en.js');
const pares = JSON.parse(fs.readFileSync(fichero, 'utf8'));
let en = fs.readFileSync(P_EN, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const marca = en.lastIndexOf('};');
if (marca === -1) { console.error('no encuentro el final de en.js'); process.exit(1); }

let bloque = '';
let nuevas = 0;
let ya = 0;
for (const [es, ingles] of Object.entries(pares)) {
  if (!es || !ingles) continue;
  if (en.includes(`'${esc(es)}':`)) { ya += 1; continue; }
  bloque += `  '${esc(es)}': '${esc(ingles)}',\n`;
  nuevas += 1;
}

if (bloque) fs.writeFileSync(P_EN, en.slice(0, marca) + bloque + en.slice(marca));
console.log(`${nuevas} traducciones nuevas · ${ya} ya estaban`);
