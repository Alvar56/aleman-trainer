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

const { KURSBUCH, lektionTopic } = await import('../src/lib/kursbuch/index.js');
const { buildSession } = await import('../src/engine/generator.js');

const JUEGOS = ['mc', 'write', 'order', 'judge', 'mixed'];
const SIZE = 10;
let malas = 0, total = 0;
const resumen = [];

for (const l of KURSBUCH.lektionen) {
  const topic = lektionTopic(l);
  const fila = [l.id.padEnd(9)];
  for (const g of JUEGOS) {
    let peor = SIZE;
    // varias pasadas: el generador va al azar y una sola no prueba nada
    for (let i = 0; i < 30; i++) {
      const items = buildSession(topic, { size: SIZE, gameType: g });
      peor = Math.min(peor, items.length);
      total++;
      if (items.length < SIZE) malas++;
      for (const it of items) {
        if (it.type === 'mc' && it.options.length !== 3) throw new Error(`${l.id} ${g}: ${it.options.length} opciones`);
        if (it.type === 'order' && it.tokens.join(' ') === it.solution.join(' ')) throw new Error(`${l.id} ${g}: orden sin mezclar`);
      }
    }
    fila.push(`${g}:${peor}`);
  }
  resumen.push(fila.join('  '));
}
resumen.forEach((r) => console.log(r));
console.log(`\n${total} tandas generadas · ${malas} se quedaron por debajo de ${SIZE} ejercicios`);
