// Las preguntas de test que ya tiene una regla, para poder escribirle más sin
// repetir ni acabar haciendo doce variantes de la misma frase.
//
// Uso:
//   node scripts/ver-picks.mjs <clave-de-regla> [clave2 ...]
//   node scripts/ver-picks.mjs --leccion kb-a11-start

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { bookTopics } = await import('../src/topics/index.js');

const args = process.argv.slice(2);
const porLeccion = args[0] === '--leccion';
const claves = new Set(porLeccion ? [] : args);
const leccion = porLeccion ? args[1] : null;

for (const t of bookTopics()) {
  if (leccion && t.id !== leccion) continue;
  const porConcepto = new Map();
  for (const fr of t.frames || []) {
    let it;
    try { it = fr.make(() => 0.5); } catch { continue; }
    if (it.type !== 'mc') continue;
    const clave = it.conceptId.split(':').slice(1).join(':');
    if (!leccion && !claves.has(clave)) continue;
    if (!porConcepto.has(clave)) porConcepto.set(clave, []);
    porConcepto.get(clave).push(it);
  }
  for (const [clave, items] of porConcepto) {
    console.log(`\n## ${clave}  [${items.length}]`);
    for (const it of items) console.log(`   ${it.sentence}   →  ${it.answer}`);
  }
}
