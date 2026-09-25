// Monta una tanda de cada tipo para CADA lección del libro y comprueba que
// sale completa. Es la prueba que de verdad importa para la parte sin IA: que
// ninguna lección se quede corta de material en ningún minijuego.
globalThis.localStorage = {
  _d: {},
  getItem(k) { return k in this._d ? this._d[k] : null; },
  setItem(k, v) { this._d[k] = String(v); },
  removeItem(k) { delete this._d[k]; },
  key(i) { return Object.keys(this._d)[i] ?? null; },
  get length() { return Object.keys(this._d).length; }
};

// El idioma, antes que los temas: varios frames llaman a t() al fabricar el
// ejercicio y sin esto revientan solo en node.
const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, lektionTopic } = await import('../src/lib/kursbuch/index.js');
const { buildSession } = await import('../src/engine/generator.js');
// Los temas propios (gramática por temática, no por lección) NO estaban aquí,
// y por eso un frame que reventaba en «Participio 2» pasó desapercibido: el
// generador se traga el fallo con un console.warn y sirve la tanda con menos
// material. Ahora entran los dos.
const { TOPICS } = await import('../src/topics/index.js');

const JUEGOS = ['mc', 'write', 'order', 'judge', 'mixed'];
const SIZE = 10;
let malas = 0, total = 0;
const resumen = [];

// Un frame roto no puede quedar en un aviso por consola: aquí es un fallo.
const avisos = [];
const cortas = [];
const warnOriginal = console.warn;
console.warn = (...args) => {
  if (String(args[0]).includes('frame fallo')) avisos.push(args.slice(0, 2).join(' '));
  else warnOriginal(...args);
};

const aProbar = [
  ...KURSBUCH.lektionen.map((l) => ({ id: l.id, topic: lektionTopic(l) })),
  ...TOPICS.map((t) => ({ id: t.id, topic: t }))
];

for (const { id: lid, topic } of aProbar) {
  const l = { id: lid };
  const fila = [l.id.padEnd(16)];
  for (const g of JUEGOS) {
    let peor = SIZE;
    // varias pasadas: el generador va al azar y una sola no prueba nada
    for (let i = 0; i < 30; i++) {
      const items = buildSession(topic, { size: SIZE, gameType: g });
      peor = Math.min(peor, items.length);
      total++;
      if (items.length < SIZE) malas++;
      for (const it of items) {
        if (it.type === 'mc' && (it.options.length < 3 || it.options.length > 4)) throw new Error(`${l.id} ${g}: ${it.options.length} opciones`);
        if (it.type === 'order' && it.tokens.join(' ') === it.solution.join(' ')) throw new Error(`${l.id} ${g}: orden sin mezclar`);
      }
    }
    fila.push(`${g}:${peor}`);
    if (peor < SIZE) cortas.push(`${l.id} · ${g}: ${peor}/${SIZE}`);
  }
  resumen.push(fila.join('  '));
}
console.warn = warnOriginal;
resumen.forEach((r) => console.log(r));
console.log(`\n${total} tandas generadas · ${malas} se quedaron por debajo de ${SIZE} ejercicios`);

// Quedarse corto es un aviso, no un fallo: hay temas con pocas frases para
// ordenar escritas a mano y eso se sabe. Un frame que revienta sí es un fallo:
// significa material que existe y no llega a la pantalla.
if (cortas.length) {
  console.log(`\n⚠ tandas por debajo de ${SIZE} (hay poco material escrito para ese juego):`);
  for (const c of cortas) console.log('   ' + c);
}
if (avisos.length) {
  const unicos = [...new Set(avisos)];
  console.error(`\n✗ ${avisos.length} frames reventaron al fabricar el ejercicio:`);
  for (const a of unicos) console.error('   ' + a);
  process.exit(1);
}
console.log('\n✓ ningún frame roto');
