// ¿Qué reglas tienen pocas preguntas de test escritas?
//
// El Test coge una pregunta por regla y por tanda (take() reparte en round
// robin entre los conceptos), así que lo que decide cada cuánto se te repite
// una frase no es el total de la lección: es cuántas hay ESCRITAS PARA ESA
// REGLA. Con diez, la vuelta entera son ocho tandas.
//
// Uso:
//   node scripts/reglas-flacas.mjs [tope]     (por defecto 12)

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { bookTopics } = await import('../src/topics/index.js');

const TOPE = Number(process.argv[2] || 12);

let nReglas = 0;
let nPicks = 0;
for (const t of bookTopics()) {
  const porConcepto = new Map();
  for (const fr of t.frames || []) {
    let it;
    try { it = fr.make(() => 0.5); } catch { continue; }
    if (it.type !== 'mc') continue;
    porConcepto.set(it.conceptId, (porConcepto.get(it.conceptId) || 0) + 1);
  }
  const flacas = [...porConcepto.entries()].filter(([, n]) => n <= TOPE);
  if (!flacas.length) continue;
  console.log(`\n${t.id}  ${t.nameEs || t.name}`);
  for (const [cid, n] of flacas) {
    // El conceptId es "<leccion>:<clave de la regla>".
    console.log(`   ${String(n).padStart(2)}  ${cid.split(':').slice(1).join(':')}`);
    nReglas += 1;
    nPicks += n;
  }
}
console.log(`\n${nReglas} reglas con ${TOPE} o menos · ${nPicks} preguntas · faltan ${nReglas * 20 - nPicks} para dejarlas en 20`);
