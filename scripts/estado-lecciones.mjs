// Cuántos ejercicios tiene CADA minijuego en CADA lección.
//
// La pregunta que hay que poder contestar es "voy a hacer el Test de la
// Lektion 4 de A1.1, ¿cuántas preguntas distintas hay?". No "cuántos picks
// tiene la regla tal": eso es cómo está guardado por dentro y no le importa a
// nadie. Así que las columnas son los botones que se pulsan.
//
// Cómo sale cada número:
//   Test / Escribir   los huecos escritos de las reglas de esa lección
//   Ordenar           las frases para ordenar; si no llegan, el motor las saca
//                     de los huecos, así que el tope real es huecos + ordenar
//   ¿Está bien?       se deriva de los dos anteriores
//   De todo un poco   todo lo anterior más los textos con varios huecos
//   Wortschatz        las palabras de la lección: cada juego las usa TODAS
//   Emparejar         va de seis en seis
//   Kommunikation     las frases: los cuatro tipos usan TODAS
//
// Uso:
//   node scripts/estado-lecciones.mjs              la tabla entera
//   node scripts/estado-lecciones.mjs a11-l4       una lección
//   node scripts/estado-lecciones.mjs --faltan     solo lo que no llega al suelo
//   node scripts/estado-lecciones.mjs --csv

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, lektionLabel, lektionKommunikation, lektionDeckTodo, ruleKey } =
  await import('../src/lib/kursbuch/index.js');
const { DATA } = await import('../src/lib/kursbuch/frames/index.js');

const PAREJAS = 6;
// Los suelos, en material escrito. Ochenta es el minimo en todo: ocho tandas
// de vocabulario sin repetir una palabra y ocho de Kommunikation.
//
// Emparejar se queda fuera de esa cuenta a proposito: no cuenta preguntas sino
// RONDAS de seis parejas, asi que con 80 palabras da 14 rondas. Para que diera
// 80 harian falta 480 palabras por leccion, que no es lo que se pide.
const SUELO = { picks: 80, orders: 20, clozes: 4, palabras: 80, frases: 80 };

const filas = KURSBUCH.lektionen.map((l) => {
  let picks = 0;
  let orders = 0;
  let clozes = 0;
  for (const r of l.grammatik || []) {
    const d = DATA[ruleKey(r)];
    picks += d?.picks?.length || 0;
    orders += d?.orders?.length || 0;
    clozes += d?.clozes?.length || 0;
  }
  const deck = lektionDeckTodo(l);
  const palabras = deck ? deck.cards.length : 0;
  const frases = lektionKommunikation(l).reduce((s, k) => s + (k.wendungen || []).length, 0);
  return {
    id: l.id,
    label: lektionLabel(l),
    crudo: { picks, orders, clozes, palabras, frases },
    juegos: {
      'gr.Test': picks,
      'gr.Escribir': picks,
      'gr.Ordenar': orders + picks,
      'gr.¿Está bien?': picks + orders,
      'gr.De todo un poco': picks + orders + clozes,
      'wo.Tarjetas': palabras,
      'wo.Test': palabras,
      'wo.Escribir': palabras,
      'wo.Wortsalat': palabras,
      'wo.Blitz': palabras,
      'wo.Ahorcado': palabras,
      'wo.Emparejar': Math.ceil(palabras / PAREJAS),
      'ko.Elegir la frase': frases,
      'ko.¿Qué significa?': frases,
      'ko.Contestar': frases,
      'ko.La palabra que falta': frases
    }
  };
});

const arg = process.argv[2];

// ---- una lección ----------------------------------------------------------
if (arg && !arg.startsWith('--')) {
  const f = filas.find((x) => x.id === arg);
  if (!f) { console.error('no existe la lección ' + arg); process.exit(1); }
  console.log(`\n${f.label}   (${f.id})\n`);
  const secciones = { gr: 'GRAMMATIK', wo: 'WORTSCHATZ', ko: 'KOMMUNIKATION' };
  let actual = null;
  for (const [clave, n] of Object.entries(f.juegos)) {
    const [sec, juego] = clave.split('.');
    if (sec !== actual) { actual = sec; console.log('  ' + secciones[sec]); }
    console.log('    ' + juego.padEnd(24) + String(n).padStart(5) + ' ejercicios');
  }
  const c = f.crudo;
  console.log(`\n  (material escrito: ${c.picks} huecos, ${c.orders} para ordenar, ${c.clozes} textos, ${c.palabras} palabras, ${c.frases} frases)`);
  process.exit(0);
}

// ---- las tablas -----------------------------------------------------------
// Una por sección, porque cada una tiene SUS minijuegos: mezclarlas en una
// sola tabla obliga a acordarse de qué columna es de qué, que es justo lo que
// no se entendía. Dentro de cada una, las lecciones en el orden del libro.
const TABLAS = [
  ['GRAMMATIK', ['Test', 'Escribir', 'Ordenar', '¿Está bien?', 'De todo un poco'], 'gr',
    (f) => f.crudo.picks < SUELO.picks || f.crudo.orders < SUELO.orders || f.crudo.clozes < SUELO.clozes],
  ['WORTSCHATZ', ['Tarjetas', 'Test', 'Escribir', 'Emparejar', 'Wortsalat', 'Blitz', 'Ahorcado'], 'wo',
    (f) => f.crudo.palabras < SUELO.palabras],
  ['KOMMUNIKATION', ['Elegir la frase', '¿Qué significa?', 'Contestar', 'La palabra que falta'], 'ko',
    (f) => f.crudo.frases < SUELO.frases]
];

if (process.argv.includes('--csv')) {
  console.log('seccion,leccion,minijuego,ejercicios');
  for (const [sec, juegos, pre] of TABLAS) {
    for (const f of filas) {
      for (const j of juegos) console.log([sec, `"${f.label}"`, j, f.juegos[`${pre}.${j}`]].join(','));
    }
  }
  process.exit(0);
}

// ---- comparación con el estado anterior -----------------------------------
// "Ha subido mucho" no es una respuesta. Con la foto de cómo estaba cada
// lección antes de la ampliación se puede enseñar el antes y el después por
// lección y por minijuego, que es lo que de verdad se quiere mirar.
if (process.argv.includes('--antes')) {
  const { readFileSync } = await import('node:fs');
  const path = await import('node:path');
  const antes = JSON.parse(readFileSync(path.join(process.cwd(), 'scripts', '_antes.json'), 'utf8'));

  // Un minijuego por columna, sin agrupar: da igual que Test y Escribir salgan
  // del mismo depósito y den la misma cifra -lo que se quiere mirar es cuánto
  // tiene CADA botón, y agruparlos obliga a acordarse de cuáles iban juntos.
  const juegosPorSeccion = {
    GRAMMATIK: (c) => ({
      'Test': c.picks,
      'Escribir': c.picks,
      'Ordenar': c.orders + c.picks,
      '¿Está bien?': c.picks + c.orders,
      'De todo un poco': c.picks + c.orders + c.clozes
    }),
    WORTSCHATZ: (c) => ({
      'Tarjetas': c.palabras,
      'Test': c.palabras,
      'Escribir': c.palabras,
      'Emparejar': Math.ceil(c.palabras / PAREJAS),
      'Wortsalat': c.palabras,
      'Blitz': c.palabras,
      'Ahorcado': c.palabras
    }),
    KOMMUNIKATION: (c) => ({
      'Elegir la frase': c.frases,
      '¿Qué significa?': c.frases,
      'Contestar': c.frases,
      'La palabra que falta': c.frases
    })
  };

  const anchoL = Math.max(...filas.map((f) => f.label.length));

  for (const [sec, juegos] of Object.entries(juegosPorSeccion)) {
    const COLS = Object.keys(juegos({ picks: 0, orders: 0, clozes: 0, palabras: 0, frases: 0 }));
    const w = (c) => Math.max(c.length, 13);
    console.log('\n' + '─'.repeat(70) + '\n' + sec + '  (antes → ahora)\n' + '─'.repeat(70));
    console.log(['lección'.padEnd(anchoL), ...COLS.map((c) => c.padStart(w(c)))].join(' '));

    const suma = {};
    for (const c of COLS) suma[c] = [0, 0];

    for (const f of filas) {
      const a = antes[f.id];
      if (!a) { console.error('sin foto previa: ' + f.id); continue; }
      const ja = juegos(a);
      const jb = juegos(f.crudo);
      for (const c of COLS) { suma[c][0] += ja[c]; suma[c][1] += jb[c]; }
      console.log([
        f.label.padEnd(anchoL),
        ...COLS.map((c) => `${ja[c]}→${jb[c]}`.padStart(w(c)))
      ].join(' '));
    }
    console.log(['TOTAL'.padEnd(anchoL), ...COLS.map((c) => `${suma[c][0]}→${suma[c][1]}`.padStart(w(c)))].join(' '));
  }
  process.exit(0);
}

const soloFaltan = process.argv.includes('--faltan');
const ancho = Math.max(...filas.map((f) => f.label.length)) + 2;

for (const [sec, juegos, pre, corta] of TABLAS) {
  const lista = soloFaltan ? filas.filter(corta) : filas;
  if (!lista.length) continue;
  const w = (j) => Math.max(j.length, 6);
  const raya = '─'.repeat(ancho + juegos.reduce((s, j) => s + w(j) + 1, 0));
  console.log('\n' + raya + '\n' + sec + '\n' + raya);
  console.log(['lección'.padEnd(ancho), ...juegos.map((j) => j.padStart(w(j)))].join(' '));
  for (const f of lista) {
    console.log([
      (corta(f) ? '  ' + f.label : '✓ ' + f.label).padEnd(ancho),
      ...juegos.map((j) => String(f.juegos[`${pre}.${j}`]).padStart(w(j)))
    ].join(' '));
  }
  const tot = juegos.map((j) => lista.reduce((s, f) => s + f.juegos[`${pre}.${j}`], 0));
  console.log(['  TOTAL'.padEnd(ancho), ...juegos.map((j, i) => String(tot[i]).padStart(w(j)))].join(' '));
}

console.log('\n✓ = esa lección ya llega al suelo EN ESA SECCIÓN');
console.log('Detalle de una lección: node scripts/estado-lecciones.mjs <id>   (p. ej. a11-l4)');
