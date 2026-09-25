// Qué tiene cada lección del libro, regla por regla, y cuánto le falta para
// llegar al suelo que nos hemos puesto.
//
// Los ejercicios de una lección no viven en la lección: viven en
// lib/kursbuch/frames/*.js, agrupados POR TEMÁTICA y con la clave de la regla.
// Para escribir los que faltan hay que saber dos cosas que no están juntas en
// ningún sitio: qué reglas tiene cada lección, y cuántos picks/orders hay hoy
// bajo cada una de esas claves.
//
// Uso:
//   node scripts/inventario-gramatica.mjs            resumen por lección
//   node scripts/inventario-gramatica.mjs <id>       el detalle de una (a12-l13)
//   node scripts/inventario-gramatica.mjs --faltan   solo lo que no llega

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, lektionLabel, ruleKey } = await import('../src/lib/kursbuch/index.js');
const { DATA } = await import('../src/lib/kursbuch/frames/index.js');

// El suelo: lo que queremos que tenga cada lección.
export const SUELO_PICKS = 80;
export const SUELO_ORDERS = 20;
// Los textos con varios huecos cuentan como un ejercicio cada uno, pero valen
// por varios: se corrigen juntos y obligan a leer. Con cuatro por leccion sale
// uno en cada tanda mixta sin repetirse enseguida.
export const SUELO_CLOZES = 4;

const arg = process.argv[2];

// La clave con la que una regla busca sus ejercicios: la misma que usa la app
// (ruleKey), no una copia parecida. Escribirla otra vez aqui daba claves
// vacias y "61 reglas sin ejercicios" que si los tenian.

const filas = [];
for (const l of KURSBUCH.lektionen) {
  if (!l.grammatik.length) continue;
  const reglas = l.grammatik.map((r) => {
    const k = ruleKey(r);
    const d = DATA[k];
    return {
      titel: r.regel,
      key: k,
      existe: !!d,
      picks: d?.picks?.length || 0,
      orders: d?.orders?.length || 0,
      clozes: d?.clozes?.length || 0
    };
  });
  const picks = reglas.reduce((s, r) => s + r.picks, 0);
  const orders = reglas.reduce((s, r) => s + r.orders, 0);
  const clozes = reglas.reduce((s, r) => s + r.clozes, 0);
  filas.push({ id: l.id, label: lektionLabel(l), reglas, picks, orders, clozes });
}

if (arg && !arg.startsWith('--')) {
  const f = filas.find((x) => x.id === arg);
  if (!f) { console.error('no existe la lección ' + arg); process.exit(1); }
  console.log(`${f.label}   (${f.id})`);
  console.log(`  picks ${f.picks}/${SUELO_PICKS}   orders ${f.orders}/${SUELO_ORDERS}\n`);
  for (const r of f.reglas) {
    console.log(`  ${r.existe ? ' ' : '✗'} ${String(r.titel).slice(0, 46).padEnd(48)} ${r.key.padEnd(38)} picks:${String(r.picks).padStart(3)}  orders:${String(r.orders).padStart(3)}  textos:${String(r.clozes).padStart(2)}`);
  }
  process.exit(0);
}

const soloFaltan = arg === '--faltan';
const anchoL = Math.max(...filas.map((f) => f.label.length));
console.log('lección'.padEnd(anchoL), 'reglas'.padStart(7), 'picks'.padStart(7), 'faltan'.padStart(7), 'orders'.padStart(7), 'faltan'.padStart(7), 'textos'.padStart(7), 'faltan'.padStart(7));

let faltanP = 0;
let faltanO = 0;
let faltanC = 0;
for (const f of filas) {
  const dP = Math.max(0, SUELO_PICKS - f.picks);
  const dO = Math.max(0, SUELO_ORDERS - f.orders);
  const dC = Math.max(0, SUELO_CLOZES - f.clozes);
  faltanP += dP;
  faltanO += dO;
  faltanC += dC;
  if (soloFaltan && !dP && !dO && !dC) continue;
  console.log(
    f.label.padEnd(anchoL),
    String(f.reglas.length).padStart(7),
    String(f.picks).padStart(7),
    String(dP || '·').padStart(7),
    String(f.orders).padStart(7),
    String(dO || '·').padStart(7),
    String(f.clozes).padStart(7),
    String(dC || '·').padStart(7)
  );
}
console.log('\nPara el suelo de ' + SUELO_PICKS + ' picks / ' + SUELO_ORDERS + ' orders por lección:');
console.log('  faltan ' + faltanP + ' huecos (Test/Escribir), ' + faltanO + ' frases para ordenar y ' + faltanC + ' textos');

const sinDatos = filas.flatMap((f) => f.reglas.filter((r) => !r.existe).map((r) => `${f.id} · ${r.titel} (${r.key})`));
if (sinDatos.length) {
  console.log(`\n✗ ${sinDatos.length} reglas del libro sin NINGÚN ejercicio:`);
  for (const s of sinDatos) console.log('   ' + s);
}
