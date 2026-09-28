// Control de calidad de Kommunikation.
//
// Los contadores dicen que hay 8 funciones y 10 conversaciones en cada una,
// pero no dicen si el contenido vale. Esto busca lo que sí rompe la práctica:
//
//   - la misma frase alemana en dos sitios (el minijuego la sacaría dos veces)
//   - dos frases de la MISMA lección con la misma glosa castellana: "decir" y
//     "ordenar" enseñan el castellano y piden el alemán, así que las dos
//     valdrían y solo una cuenta como buena. Pregunta sin solución.
//   - dos frases de la misma lección con la MISMA respuesta, por lo mismo en
//     "contestar" y "entender"
//   - la misma respuesta castellana para frases distintas
//   - frases sin respuesta, que no son conversación
//   - respuestas que repiten la frase o que no llegan a frase
//   - turnos de seguimiento impares (acaba hablando quien no toca)
//   - la misma función repetida dentro de una lección
//   - frases larguísimas o cortísimas para lo que es hablar
//
// Uso: node scripts/revision-komm.mjs

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

import fs from 'node:fs';

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');
const { respuestaDe, seguimientoDe } = await import('../src/lib/kursbuch/respuestas.js');

const avisos = new Map();
const nota = (tipo, texto) => {
  if (!avisos.has(tipo)) avisos.set(tipo, []);
  avisos.get(tipo).push(texto);
};

const vistasDe = new Map();   // frase alemana -> dónde
const vistasEs = new Map();   // glosa castellana -> dónde
let total = 0;

for (const band of KURSBUCH.baende) {
  for (const l of band.lektionen) {
    const funciones = new Set();
    // Por lección, porque la tanda se monta con las frases de UNA lección: es
    // ahí donde dos glosas iguales acaban de opciones en la misma pregunta.
    const glosaEnLeccion = new Map();
    const respEnLeccion = new Map();
    for (const k of l.kommunikation || []) {
      if (funciones.has(k.funktion)) nota('FUNCIÓN REPETIDA', `${l.id}: "${k.funktion}"`);
      funciones.add(k.funktion);

      for (const w of k.wendungen) {
        total += 1;
        const donde = `${l.id} · ${k.funktion}`;

        if (vistasDe.has(w.de)) nota('FRASE REPETIDA', `"${w.de}"\n      ${vistasDe.get(w.de)}\n      ${donde}`);
        else vistasDe.set(w.de, donde);

        if (vistasEs.has(w.es) && vistasEs.get(w.es).frase !== w.de) {
          nota('MISMA TRADUCCIÓN', `"${w.es}"\n      ${vistasEs.get(w.es).frase}\n      ${w.de}`);
        } else vistasEs.set(w.es, { donde, frase: w.de });

        if (glosaEnLeccion.has(w.es)) {
          nota('GLOSA REPETIDA EN LA LECCIÓN', `${l.id}: "${w.es}"\n      ${glosaEnLeccion.get(w.es)}\n      ${w.de}`);
        } else glosaEnLeccion.set(w.es, w.de);

        const r = respuestaDe(w.de);
        if (!r) { nota('SIN RESPUESTA', `${donde}: "${w.de}"`); continue; }
        if (!r.de || !r.es) { nota('RESPUESTA A MEDIAS', `${donde}: "${w.de}"`); continue; }
        if (r.de.trim() === w.de.trim()) nota('RESPUESTA = FRASE', `${donde}: "${w.de}"`);
        if (respEnLeccion.has(r.de)) {
          nota('RESPUESTA REPETIDA EN LA LECCIÓN', `${l.id}: "${r.de}"\n      ${respEnLeccion.get(r.de)}\n      ${w.de}`);
        } else respEnLeccion.set(r.de, w.de);
        if (r.de.trim().split(/\s+/).length < 2) nota('RESPUESTA DE UNA PALABRA', `${donde}: "${w.de}" → "${r.de}"`);

        const mas = seguimientoDe(w.de) || [];
        if (mas.length % 2 !== 0) nota('SEGUIMIENTO IMPAR', `${donde}: "${w.de}" (${mas.length} turnos)`);
        for (const t of mas) {
          if (!t.de || !t.es) nota('TURNO A MEDIAS', `${donde}: "${w.de}"`);
        }

        const palabras = w.de.split(/\s+/).length;
        if (palabras > 16) nota('FRASE MUY LARGA', `${donde}: "${w.de}" (${palabras} palabras)`);
      }
    }
  }
}

// Respuestas que ya no contesta nadie: se quedan cuando una frase se retira o
// se cambia. No rompen nada, pero engordan el fichero y despistan al leerlo.
const txtResp = fs.readFileSync(new URL('../src/lib/kursbuch/respuestas.js', import.meta.url), 'utf8');
for (const m of txtResp.matchAll(/^ {2}'((?:[^'\\]|\\.)*)':$/gm)) {
  const clave = m[1].replace(/\\(['\\])/g, '$1');
  if (!vistasDe.has(clave)) nota('RESPUESTA HUÉRFANA', clave);
}

// Cada glosa castellana tiene que tener su inglés, o la versión inglesa sale a
// medias: tc() devuelve el castellano tal cual cuando no encuentra la clave.
// Cuentan las de las frases y también las de las respuestas y sus turnos, que
// es lo que se olvida al cambiar una conversación a mano.
const txtEn = fs.readFileSync(new URL('../src/lib/contenido/en.js', import.meta.url), 'utf8');
const hayIngles = (es) => txtEn.includes(`'${es.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}':`);
for (const [es, { frase }] of vistasEs) {
  if (!hayIngles(es)) nota('SIN INGLÉS', `"${es}"  (${frase})`);
}
for (const [de] of vistasDe) {
  const r = respuestaDe(de);
  if (r?.es && !hayIngles(r.es)) nota('SIN INGLÉS', `"${r.es}"  (respuesta de: ${de})`);
  for (const t of seguimientoDe(de) || []) {
    if (t?.es && !hayIngles(t.es)) nota('SIN INGLÉS', `"${t.es}"  (turno de: ${de})`);
  }
}

console.log(`${total} conversaciones revisadas\n`);
if (!avisos.size) {
  console.log('✓ nada que mirar');
} else {
  let n = 0;
  for (const [tipo, lista] of avisos) {
    console.log(`${tipo} (${lista.length})`);
    for (const t of lista) console.log('   ' + t);
    console.log();
    n += lista.length;
  }
  console.log(`${n} cosas que mirar`);
}
