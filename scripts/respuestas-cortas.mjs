// Las respuestas que se quedan en dos palabras.
//
// Una respuesta de conversación no es solo la corrección de un ejercicio: es
// el material del que salen "Contestar" y "La palabra que falta". Si dice
// "Danke", no hay nada que practicar. Esto lista las que se quedan cortas,
// por lección, para poder reescribirlas con algo dentro.
//
// Solo mira las respuestas de primer nivel. Los turnos de seguimiento pueden
// ser cortos sin problema: ahí lo que importa es que la conversación siga.
//
// Uso:
//   node scripts/respuestas-cortas.mjs            todas
//   node scripts/respuestas-cortas.mjs a11-l4     una lección
//   node scripts/respuestas-cortas.mjs --json     para dárselo a una herramienta

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, lektionLabel, lektionKommunikation } = await import('../src/lib/kursbuch/index.js');
const { respuestaDe } = await import('../src/lib/kursbuch/respuestas.js');

const MINIMO = Number(process.env.MIN || 9);
const palabras = (s) => String(s).trim().split(/\s+/).length;

const arg = process.argv[2];
const soloJson = process.argv.includes('--json');
const salida = [];

let total = 0;
let cortas = 0;

for (const l of KURSBUCH.lektionen) {
  if (arg && !arg.startsWith('--') && l.id !== arg) continue;
  const filas = [];
  for (const k of lektionKommunikation(l)) {
    for (const w of k.wendungen || []) {
      const r = respuestaDe(w.de);
      if (!r) continue;
      total += 1;
      if (palabras(r.de) >= MINIMO) continue;
      cortas += 1;
      filas.push({ frase: w.de, de: r.de, es: r.es });
    }
  }
  if (!filas.length) continue;
  salida.push({ id: l.id, label: lektionLabel(l), filas });
}

if (soloJson) {
  console.log(JSON.stringify(salida, null, 1));
  process.exit(0);
}

for (const bloque of salida) {
  console.log('\n' + bloque.label + '   (' + bloque.id + ')   ' + bloque.filas.length);
  for (const f of bloque.filas) {
    console.log('   ' + f.frase);
    console.log('      → ' + f.de);
  }
}

console.log(`\n${cortas} de ${total} respuestas tienen menos de ${MINIMO} palabras`);
