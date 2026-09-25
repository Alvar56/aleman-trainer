// Empaqueta la app en UN SOLO fichero .html que se abre con doble clic, para
// poder mandarsela a alguien que no va a instalar Node ni levantar un servidor.
//
//   npm run portable
//
// Que hace: compila con PORTABLE=1 (rutas relativas, sin PWA) y mete dentro
// del HTML el JavaScript, el CSS y el icono. El resultado no pide NADA a la
// red, asi que funciona desde el escritorio, desde un USB o sin internet.
//
// Lo que ese fichero NO lleva: la IA, y no "apagada" sino sin compilar. Se
// hace con SIN_IA=1, asi que fuera el chat con Felix, las noticias, las
// canciones, el examen, los generadores, la correccion del diario, pasar los
// apuntes a limpio y todos los ajustes de IA. Antes iban dentro y solo servian
// para enseñar botones que al pulsarlos decian que no habia IA.
//
// Todo lo demas -gramatica, vocabulario y sus seis minijuegos, der/die/das,
// traducir, Kommunikation, el cuaderno, el diario, el nivel, la racha y
// Felix con su ropa- va con plantillas y funciona igual.
//
// Si alguna vez quieres el portable CON la IA dentro (para usarlo con tu
// propia clave de Gemini u OpenAI):  SIN_IA= npm run portable

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const SALIDA = 'Deutsch Trainer.html';
const DIST = 'dist-portable';

console.log('1/3  compilando…');
execSync('npx vite build', {
  stdio: 'inherit',
  env: { SIN_IA: '1', ...process.env, PORTABLE: '1' }
});

console.log('2/3  metiendo todo en un fichero…');
const dir = path.resolve(DIST);
let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

function leer(rel) {
  return fs.readFileSync(path.join(dir, rel.replace(/^\.?\//, '')), 'utf8');
}

// El JS puede contener la secuencia "</script>" dentro de un texto (el
// diccionario de traducciones son miles de cadenas). Sin escaparla, el
// navegador cerraria la etiqueta a media biblioteca.
function aSalvo(js) {
  return js.replace(/<\/script/gi, '<\\/script');
}

const script = /<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/;
const estilo = /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/;

const mScript = html.match(script);
const mEstilo = html.match(estilo);
if (!mScript) throw new Error('No encuentro el <script> del bundle en index.html');

// OJO: el reemplazo va como FUNCION, no como cadena. En String.replace, una
// cadena interpreta $&, $1, $` y $' como referencias a lo que caso. El bundle
// minificado esta lleno de esos simbolos (React tiene un .replace(x, "$&/")),
// y pasandolo como cadena se cuela la etiqueta <script> DENTRO del codigo de
// React y la app revienta. Con una funcion se inserta tal cual.
html = html.replace(script, () => `<script type="module">\n${aSalvo(leer(mScript[1]))}\n</script>`);
if (mEstilo) html = html.replace(estilo, () => `<style>\n${leer(mEstilo[1])}\n</style>`);

// El icono, como data URI: si no, la pestaña sale sin icono y ademas el
// navegador pide un fichero que no existe.
//
// Van los dos formatos. El SVG es el bueno -escala a cualquier tamaño-, pero
// el lector de iconos del navegador es mas tiquismiquis que una etiqueta <img>
// y hay versiones que descartan un SVG sin medidas propias o directamente sin
// mirar. El .ico lleva seis tamaños rasterizados (16 a 256) y lo entiende
// cualquier cosa, asi que va primero como red de seguridad: el que sepa leer
// el SVG se queda con el SVG, y el que no, tiene el otro.
const svg = fs.readFileSync('public/favicon.svg', 'utf8');
const icono = 'data:image/svg+xml;base64,' + Buffer.from(svg, 'utf8').toString('base64');
const ico = 'data:image/x-icon;base64,' + fs.readFileSync('public/icon.ico').toString('base64');
html = html.replace(/href="[^"]*favicon\.svg"/g, `href="${icono}"`);
html = html.replace(
  /(\s*)<link rel="icon" type="image\/svg\+xml"/,
  `$1<link rel="icon" type="image/x-icon" href="${ico}" />$1<link rel="icon" type="image/svg+xml"`
);

// Un aviso para quien abra el fichero con un editor en vez de con el navegador.
html = html.replace(
  '<head>',
  `<head>\n    <!-- Deutsch Trainer A2-B1 - version para repartir.\n         Abrelo con doble clic; se ve en el navegador. No necesita internet\n         ni instalar nada. Tu progreso se guarda en este navegador. -->`
);

fs.writeFileSync(SALIDA, html, 'utf8');

console.log('3/3  listo');
const mb = (fs.statSync(SALIDA).size / 1024 / 1024).toFixed(1);
console.log(`\n  ${SALIDA}  (${mb} MB)`);
console.log('  Se abre con doble clic. Mandalo por Drive/WeTransfer;');
console.log('  algunos correos bloquean los .html adjuntos.');

// Comprobacion: que no haya quedado ninguna referencia a un fichero externo.
// Se mira solo el marcado, no lo incrustado: dentro del JS hay cadenas que
// parecen atributos y daban una alarma falsa.
const marcado = html
  .replace(/<script type="module">[\s\S]*?<\/script>/g, '')
  .replace(/<style>[\s\S]*?<\/style>/g, '');
const sueltos = [...marcado.matchAll(/(?:src|href)="(?!data:|#|https?:)([^"]+)"/g)].map((m) => m[1]);
if (sueltos.length) {
  console.log('\n  AVISO: el HTML todavia pide estos ficheros de fuera:');
  for (const s of new Set(sueltos)) console.log('   -', s);
  console.log('  Sin ellos al lado, eso no funcionara.');
}
