// ¿Se puede llenar una tanda de verdad en cada tema y cada minijuego?
//
// La cuenta de "cuántos ejercicios hay" no dice lo que importa. Lo que importa
// es si al pulsar un juego te salen las preguntas que tienes configuradas o se
// queda corto.
//
// Ojo con la UNIDAD: hay que medir lo que de verdad se puede pulsar, no cómo
// esté troceado el material por dentro. En Wortschatz una lección practica su
// mazo entero (lektionDeckTodo), no los bloques de la lista; los bloques son
// para leer. Lo que sí se abre suelto son los mazos extra. Medir los bloques
// daba 111 problemas en Wortschatz que no existen.
//
// Uso: node scripts/diagnostico-tandas.mjs

globalThis.localStorage = {
  _d: {},
  getItem(k) { return k in this._d ? this._d[k] : null; },
  setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; },
  key(i) { return Object.keys(this._d)[i] ?? null; },
  get length() { return Object.keys(this._d).length; }
};
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { TOPICS, bookTopics } = await import('../src/topics/index.js');
const vocab = await import('../src/lib/vocab.js');
const { KURSBUCH, lektionLabel, lektionKommunikation, lektionDeckTodo } = await import('../src/lib/kursbuch/index.js');
const { buildSession } = await import('../src/engine/generator.js');

const SIZE = 10;          // el tamaño de sesión por defecto
const PAREJAS = 6;        // las que pide Emparejar
const problemas = [];
const anota = (seccion, tema, juego, tiene, necesita, nota) =>
  problemas.push({ seccion, tema, juego, tiene, necesita, nota });

// ---------------------------------------------------------------- Grammatik
// Unidades que se pulsan: las 25 lecciones y los 9 temas por temática.
console.log('Grammatik…');
const temasGram = [
  ...KURSBUCH.lektionen.filter((l) => l.grammatik.length)
    .map((l) => [lektionLabel(l), bookTopics().find((t) => t.id === 'kb-' + l.id)]),
  ...TOPICS.map((t) => [t.nameEs || t.name, t])
].filter(([, t]) => t);

for (const [nombre, topic] of temasGram) {
  for (const g of ['mc', 'write', 'order', 'judge']) {
    let peor = SIZE;
    for (let i = 0; i < 20; i += 1) {
      peor = Math.min(peor, buildSession(topic, { size: SIZE, gameType: g }).length);
    }
    if (peor < SIZE) anota('Grammatik', nombre, g, peor, SIZE, 'tanda corta');
  }
}

// --------------------------------------------------------------- Wortschatz
// Unidades que se pulsan: el mazo entero de cada lección, y los mazos extra.
console.log('Wortschatz…');
const extras = vocab.allDecks().filter((d) => !d.lektionId);
const unidadesVocab = [
  ...KURSBUCH.lektionen.map((l) => lektionDeckTodo(l)).filter(Boolean),
  ...extras
];
for (const d of unidadesVocab) {
  const n = d.cards.length;
  const sust = d.cards.filter((c) => /^(der|die|das) /i.test(c.de)).length;
  if (n < SIZE) anota('Wortschatz', d.name || d.id, 'Test · Escribir · Blitz · Wortsalat · Ahorcado', n, SIZE, 'menos palabras que preguntas');
  if (n < PAREJAS) anota('Wortschatz', d.name || d.id, 'Emparejar', n, PAREJAS, 'no llega ni a una ronda');
  if (sust === 0) anota('Wortschatz', d.name || d.id, 'der/die/das', 0, 4, 'sin sustantivos: el juego no puede jugarse');
  else if (sust < 4) anota('Wortschatz', d.name || d.id, 'der/die/das', sust, 4, 'casi sin sustantivos');
}

// ------------------------------------------------------------ Kommunikation
// Unidades que se pulsan: la lección entera (pestaña Ejercicios) y cada
// apartado suelto (botón "Practicar" dentro de Teoría).
console.log('Kommunikation…');
for (const l of KURSBUCH.lektionen) {
  const fs = lektionKommunikation(l);
  const frases = fs.reduce((s, k) => s + (k.wendungen || []).length, 0);
  if (!frases) continue;
  if (frases < SIZE) anota('Kommunikation', lektionLabel(l), 'los cuatro tipos', frases, SIZE, 'menos frases que preguntas');
  for (const k of fs) {
    const n = (k.wendungen || []).length;
    if (n < 4) anota('Kommunikation', lektionLabel(l) + ' › ' + k.funktion, 'practicar el apartado', n, 4, 'apartado diminuto');
  }
}

// ------------------------------------------------------------------ informe
const porSeccion = {};
for (const p of problemas) (porSeccion[p.seccion] ||= []).push(p);

for (const [sec, ps] of Object.entries(porSeccion)) {
  console.log('\n' + '─'.repeat(100));
  console.log(`${sec}: ${ps.length} casos`);
  console.log('─'.repeat(100));
  const porNota = {};
  for (const p of ps) (porNota[p.nota] ||= []).push(p);
  for (const [nota, lista] of Object.entries(porNota)) {
    console.log(`\n  ${nota} (${lista.length})`);
    for (const p of lista.slice(0, 15)) {
      console.log(`     ${String(p.tema).slice(0, 52).padEnd(54)} ${p.juego.slice(0, 22).padEnd(24)} ${p.tiene}/${p.necesita}`);
    }
    if (lista.length > 15) console.log(`     … y ${lista.length - 15} más`);
  }
}

console.log('\n' + '='.repeat(100));
console.log(`TOTAL: ${problemas.length} combinaciones tema × minijuego que no llenan una tanda`);
