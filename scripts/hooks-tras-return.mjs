// ¿Hay algún hook declarado DESPUÉS de un return temprano?
//
// React exige que cada render de un componente llame a los mismos hooks en el
// mismo orden. Si un componente sale por un `return` antes de llegar a un
// `useAlgo()`, ese render declara menos hooks que el anterior y React tira la
// pantalla entera con "Rendered fewer hooks than expected".
//
// No es teórico: `useStars()` estaba al final del cuerpo de TopicDetail, por
// debajo del `return` que pinta Emparejar y Blitz, y abrir cualquiera de los
// dos desde Gramática reventaba la pantalla. Ni el build ni las pruebas lo
// ven, porque sólo pasa al renderizar esa rama.
//
// Cómo distingue un return "de salida" de los demás: recorre el cuerpo del
// componente contando llaves y anotando cuándo entra en una función anidada
// (una callback de useEffect, un manejador de clic...). Los return de dentro
// de esas funciones no sacan del componente y se ignoran. El primer intento
// miraba sólo el sangrado y no servía: los return de este fallo estaban
// dentro de bloques `if { }`, a cuatro espacios.
//
// Uso: node scripts/hooks-tras-return.mjs

import fs from 'node:fs';
import path from 'node:path';

const DIRS = ['src/components', 'src/lib'];

// Empieza un componente o un hook propio (los dos siguen la misma regla).
const EMPIEZA = /^(?:export\s+)?(?:default\s+)?function\s+([A-Za-z]\w*)\s*\(|^(?:export\s+)?const\s+([A-Za-z]\w*)\s*=\s*(?:\([^)]*\)|\w+)\s*=>\s*\{/;
const HOOK = /(?:^|[\s=(,])(use[A-Z]\w*)\s*\(/;
const RETURN = /(?:^|[\s{};])return[\s(;]/;
// Salidas por una constante de compilación (`if (SIN_IA) return null`): el
// valor es el mismo en todos los renders de la vida de la app, así que el
// número de hooks nunca cambia. Rompe la regla sobre el papel pero no puede
// provocar el fallo, y marcarlas tapa las de verdad.
const RETURN_CONSTANTE = /if\s*\(!?[A-Z][A-Z0-9_]{2,}\)\s*return/;
// Una línea que abre una función anidada.
const ABRE_FUNCION = /(=>\s*\{|\bfunction\b[^;]*\{)/;

const avisos = [];

function revisar(ruta, lineas) {
  for (let i = 0; i < lineas.length; i++) {
    const m = EMPIEZA.exec(lineas[i]);
    if (!m) continue;
    const nombre = m[1] || m[2];
    // Sólo componentes (Mayúscula) y hooks propios (useAlgo).
    if (!/^[A-Z]/.test(nombre) && !/^use[A-Z]/.test(nombre)) continue;

    let prof = 0;            // llaves abiertas dentro del componente
    let enFuncion = null;    // profundidad a la que empezó una función anidada
    let salida = 0;          // línea del primer return de salida
    let arrancado = false;

    for (let j = i; j < lineas.length; j++) {
      const s = lineas[j];
      // El \r va fuera ANTES de nada. Los fuentes son CRLF y en JavaScript
      // `.` no cruza un \r (es terminador de línea), así que un
      // `/\/\/.*$/` no llega nunca al `$` y deja el comentario entero. Con
      // eso, una línea que sólo MENCIONA un return contaba como return.
      const cuerpo = s.replace(/\r/g, '')
        .replace(/\/\/.*/, '')
        .replace(/(['"`]).*?\1/g, '""');

      if (arrancado && enFuncion === null) {
        if (!salida && RETURN.test(cuerpo) && !RETURN_CONSTANTE.test(cuerpo)) {
          salida = j + 1;
        } else if (salida) {
          const h = HOOK.exec(cuerpo);
          if (h) {
            avisos.push(`${ruta}:${j + 1}  ${nombre} llama a ${h[1]}()`
              + ` y hay un return de salida en la línea ${salida}`);
          }
        }
      }

      const abre = (cuerpo.match(/\{/g) || []).length;
      const cierra = (cuerpo.match(/\}/g) || []).length;
      // Si esta línea abre una función anidada, a partir de aquí se ignora
      // hasta volver a la profundidad en la que estábamos.
      if (arrancado && enFuncion === null && abre > cierra && ABRE_FUNCION.test(cuerpo)) {
        enFuncion = prof;
      }
      prof += abre - cierra;
      if (enFuncion !== null && prof <= enFuncion) enFuncion = null;
      if (!arrancado && abre > 0) arrancado = true;
      if (arrancado && prof <= 0) { i = j; break; }  // se acabó el componente
    }
  }
}

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!/\.jsx?$/.test(f)) continue;
    const ruta = path.join(dir, f).replace(/\\/g, '/');
    revisar(ruta, fs.readFileSync(ruta, 'utf8').split('\n'));
  }
}

if (!avisos.length) {
  console.log('✓ ningún hook por debajo de un return de salida');
} else {
  console.log('Hooks que no se ejecutan en todos los renders:\n');
  for (const a of avisos) console.log('   ' + a);
  console.log(`\n${avisos.length} sitios que mirar`);
  process.exitCode = 1;
}
