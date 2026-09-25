// Las frases de Kommunikation de una lección, tal cual están, para poder
// repartirlas por funciones antes de pasarlas a reorganizar-komm.mjs.
//
// Uso: node scripts/ver-komm.mjs a11-l1

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { getLektion } = await import('../src/lib/kursbuch/index.js');
const { seguimientoDe } = await import('../src/lib/kursbuch/respuestas.js');

const lid = process.argv[2];
const l = getLektion(lid);
if (!l) { console.error('no existe ' + lid); process.exit(1); }

console.log(`${l.id}  ${l.name}`);
for (const k of l.kommunikation) {
  console.log(`\n## ${k.funktion}  (${k.es})  [${k.wendungen.length}]`);
  for (const w of k.wendungen) {
    const largo = (seguimientoDe(w.de) || []).length ? ' +' : '';
    console.log(`  ${w.de}${largo}`);
  }
}
