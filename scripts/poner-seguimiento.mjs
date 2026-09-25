// Alarga conversaciones que ya están escritas.
//
// poner-contenido.mjs escribe la frase y su respuesta. Esto es para después:
// coger una conversación que se queda en dos frases y darle dos turnos más,
// sin volver a tocar el contenido del libro.
//
// Uso:
//   node scripts/poner-seguimiento.mjs <fichero.json>
//
// El JSON es frase-alemana -> turnos que siguen a la respuesta:
//   {
//     "Wie geht es Ihnen heute?": [
//       ["Auch gut, danke.", "Bien también, gracias.", "Good too, thanks."],
//       ["Schön. Dann fangen wir an.", "Bien. Pues empezamos.", "Good. Let's start then."]
//     ]
//   }
//
// Alternan: el primero lo dices tú, el segundo te lo contestan. Por eso tienen
// que ser pares. Si la frase no tiene respuesta todavía, o ya tiene turnos, se
// avisa y no se escribe nada -ni de esa ni de las demás.

import fs from 'node:fs';
import path from 'node:path';

const fichero = process.argv[2];
if (!fichero) {
  console.error('uso: node scripts/poner-seguimiento.mjs <fichero.json>');
  process.exit(2);
}

const RAIZ = process.cwd();
const P_RESP = path.join(RAIZ, 'src', 'lib', 'kursbuch', 'respuestas.js');
const P_EN = path.join(RAIZ, 'src', 'lib', 'contenido', 'en.js');

const entrada = JSON.parse(fs.readFileSync(fichero, 'utf8'));
let resp = fs.readFileSync(P_RESP, 'utf8');
let en = fs.readFileSync(P_EN, 'utf8');

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const problemas = [];
const paraEn = [];
const cambios = [];

for (const [frase, turnos] of Object.entries(entrada)) {
  const clave = `'${esc(frase)}':`;
  const i = resp.indexOf(clave);
  if (i === -1) { problemas.push(`no encuentro la respuesta de "${frase}"`); continue; }
  if (!Array.isArray(turnos) || turnos.length === 0) { problemas.push(`"${frase}": sin turnos`); continue; }
  if (turnos.length % 2 !== 0) { problemas.push(`"${frase}": ${turnos.length} turno(s); tienen que ser pares`); continue; }

  // El valor va desde la clave hasta el "}," que cierra ese objeto. Como los
  // textos llevan comas dentro, se busca el cierre contando llaves y saltando
  // lo que va entre comillas.
  const abre = resp.indexOf('{', i);
  if (abre === -1) { problemas.push(`"${frase}": no encuentro el objeto`); continue; }
  let nivel = 0;
  let cierra = -1;
  let comilla = null;
  for (let k = abre; k < resp.length; k++) {
    const c = resp[k];
    if (comilla) {
      if (c === '\\') k++;
      else if (c === comilla) comilla = null;
      continue;
    }
    if (c === "'" || c === '"') { comilla = c; continue; }
    if (c === '{') nivel++;
    else if (c === '}') { nivel--; if (nivel === 0) { cierra = k; break; } }
  }
  if (cierra === -1) { problemas.push(`"${frase}": no encuentro el cierre`); continue; }

  const valor = resp.slice(abre, cierra + 1);
  if (valor.includes('mas:')) { problemas.push(`"${frase}": ya tiene turnos de seguimiento`); continue; }

  const lineas = turnos
    .map(([de, es]) => `        { de: '${esc(de)}', es: '${esc(es)}' }`)
    .join(',\n');
  const nuevo = valor.replace(/\s*\}$/, `,\n      mas: [\n${lineas}\n      ] }`);
  cambios.push([abre, cierra + 1, nuevo]);
  for (const [, es, ingles] of turnos) paraEn.push([es, ingles]);
}

if (problemas.length) {
  console.error('No se ha tocado nada. Problemas:');
  for (const p of problemas) console.error('   ' + p);
  process.exit(1);
}

// De atrás hacia delante, para que los índices sigan valiendo.
cambios.sort((a, b) => b[0] - a[0]);
for (const [ini, fin, nuevo] of cambios) resp = resp.slice(0, ini) + nuevo + resp.slice(fin);

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

fs.writeFileSync(P_RESP, resp);
fs.writeFileSync(P_EN, en);
console.log(`${cambios.length} conversaciones alargadas · ${nuevas} traducciones nuevas en en.js`);
