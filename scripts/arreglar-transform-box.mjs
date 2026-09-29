// Pone `transform-box: fill-box` donde hace falta, dentro de los SVG.
//
// En SVG, `transform-origin: center bottom` NO se refiere a la caja del
// elemento: se resuelve contra el viewBox entero. Un grupito de hierba de 20
// unidades, en un lienzo de 1000, acaba girando alrededor de un punto que
// está a medio kilómetro, y al animarlo sale disparado por la pantalla. Es
// exactamente lo que pasaba con las matas de la pradera.
//
// Con `transform-box: fill-box` el origen vuelve a ser la caja del propio
// elemento, que es lo que uno espera. Sólo hace falta cuando el origen va en
// palabras (center, bottom, left…) o en porcentajes; si va en px absolutos,
// el comportamiento por defecto ya es el correcto.
//
// Uso: node scripts/arreglar-transform-box.mjs [--probar]

import fs from 'node:fs';
import path from 'node:path';

const RUTA = path.join(process.cwd(), 'src', 'index.css');
const soloProbar = process.argv.includes('--probar');

// origen en palabras o porcentajes = necesita fill-box
const RELATIVO = /transform-origin:\s*(?![^;]*\d\s*px)[^;]+;/g;

const css = fs.readFileSync(RUTA, 'utf8');
const re = /(\.fox-(?:escena|suelo)-[a-zA-Z]+[^{]*\{[^}]*?background-image:\s*url\("data:image\/svg\+xml,)([^"]+)("\))/gs;

let total = 0;
const resumen = [];

const nuevo = css.replace(re, (todo, antes, datos, despues) => {
  const nombre = /\.fox-(escena|suelo)-([a-zA-Z]+)/.exec(antes).slice(1).join(' ');
  let svg = decodeURIComponent(datos);
  let n = 0;

  svg = svg.replace(RELATIVO, (regla) => {
    // ya lo tiene justo delante: no se toca
    n += 1;
    return 'transform-box: fill-box; ' + regla;
  });

  if (!n) return todo;
  // no repetirlo si ya estaba
  svg = svg.replace(/transform-box: fill-box;\s*transform-box: fill-box;/g,
                    'transform-box: fill-box;');

  total += n;
  resumen.push(`   ${nombre}: ${n}`);
  return antes + encodeURIComponent(svg) + despues;
});

console.log(resumen.length ? resumen.join('\n') : '   nada que arreglar');
console.log(`\n${total} transform-origin relativos`);

if (soloProbar) console.log('(--probar: no se ha escrito nada)');
else { fs.writeFileSync(RUTA, nuevo, 'utf8'); console.log('index.css actualizado'); }
