// Saca los paisajes de index.css a ficheros .svg sueltos, para poder editarlos.
//
// Los dibujos viven metidos en index.css como data URI: una sola linea de
// 20.000 caracteres con cada espacio escrito %20. Asi no se puede ni leer ni
// dibujar. Este script los desempaqueta a _paisajes/ y el de al lado
// (paisajes-meter.mjs) los vuelve a meter.
//
// El CSS sigue siendo el original: _paisajes/ es una copia de trabajo, va en
// .gitignore y se puede borrar cuando quieras.
//
//   node scripts/paisajes-extraer.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = process.cwd();
const P_CSS = path.join(RAIZ, 'src', 'index.css');
const DESTINO = path.join(RAIZ, '_paisajes');

// Las dos familias: la escena grande de detras y la franja de suelo de abajo.
export const RE_PAISAJE = /(\.fox-(escena|suelo)-([a-zA-Z]+)\b[^{]*\{[^}]*?background-image:\s*url\(")(data:image\/svg\+xml,)([^"]+)("\))/gs;

// OJO: solo saca los ficheros si lo llamas tu. paisajes-meter.mjs importa de
// aqui la expresion de arriba, y cuando esto se ejecutaba tambien al
// importarlo, meter volvia a extraer del CSS ANTES de leer tus cambios y se
// los llevaba por delante: "ningun paisaje ha cambiado" con el trabajo ya
// borrado.
const meLlaman = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (meLlaman) {
  const css = fs.readFileSync(P_CSS, 'utf8');
  fs.mkdirSync(DESTINO, { recursive: true });

  let n = 0;
  for (const m of css.matchAll(RE_PAISAJE)) {
    const nombre = `${m[2]}-${m[3]}.svg`;
    const svg = decodeURIComponent(m[5]);
    // Una etiqueta por linea: el original viene todo seguido y asi no hay quien
    // lo lea ni quien lo edite con las herramientas de texto.
    const legible = svg.replace(/>\s*</g, '>\n<').trim() + '\n';
    fs.writeFileSync(path.join(DESTINO, nombre), legible);
    console.log(`   ${nombre.padEnd(22)} ${String(svg.length).padStart(6)} bytes`);
    n += 1;
  }

  console.log(`\n${n} paisajes en _paisajes/`);
  console.log('Edita los que quieras y luego: node scripts/paisajes-meter.mjs');
}
