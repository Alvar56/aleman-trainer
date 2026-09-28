// ¿Cuántos ejercicios hay en cada minijuego, por tema?
//
// Ordenado como la app: primero Grammatik, luego Wortschatz, luego
// Kommunikation; dentro de cada sección los temas en el orden del libro
// (Start, Lektion 1, 2… y al final lo que no es del libro); y las columnas en
// el orden en que salen los botones de los minijuegos.
//
// No todas las secciones cuentan lo mismo, y conviene tenerlo claro:
//
//   Grammatik      ejercicios escritos: huecos (Test/Escribir) y frases para
//                  ordenar. Algunos temas los generan combinando, así que su
//                  número es lo que sale muestreando, no un tope.
//   Wortschatz     no hay ejercicios: hay palabras, y cada juego las usa todas.
//   Kommunikation  hay frases, y cada tipo de pregunta usa las que le sirven:
//                  "Ordenar" pide de tres a doce palabras y "La palabra que
//                  falta" pide una tapable, así que no salen todas en todo.
//
// Uso: node scripts/cuantos-ejercicios.mjs [--csv]

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

// Varios frames llaman a t() al fabricar el ejercicio (el enunciado va
// traducido). Sin esto, en node revientan y el tema sale con cero ejercicios
// sin que nada lo avise.
const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { TOPICS, bookTopics } = await import('../src/topics/index.js');
const vocab = await import('../src/lib/vocab.js');
const { KURSBUCH, lektionLabel, lektionKommunikation } = await import('../src/lib/kursbuch/index.js');

const csv = process.argv.includes('--csv');

// El orden del libro, para que los temas no salgan como caigan.
const ORDEN = new Map(KURSBUCH.lektionen.map((l, i) => [l.id, i]));
const lugar = (id) => (ORDEN.has(id) ? ORDEN.get(id) : 1000 + ORDEN.size);

// ---------------------------------------------------------------- Grammatik
// Cada frame es una función make(rng). Hay de dos clases y no se cuentan igual:
//
//   los del libro     un frame = un ejercicio escrito a mano
//   los temáticos     un frame saca al azar de un depósito (PRAES, ARTIKEL…),
//                     así que un frame son muchos ejercicios distintos
//
// Para no tener que saber cuál es cuál, se tira del frame hasta que deja de
// salir nada nuevo y se cuentan los distintos. Lo que identifica un ejercicio
// es su frase (o los tokens a ordenar), no las opciones, que van barajadas.
const SIN_NOVEDAD = 400;
const TOPE = 40000;

function cuentaFrames(topic) {
  const mc = new Set();
  const order = new Set();
  let rotos = 0;
  for (const f of topic.frames || []) {
    let secos = 0;
    for (let i = 0; i < TOPE && secos < SIN_NOVEDAD; i += 1) {
      let it;
      // Un frame que revienta se cuenta: si no, el tema sale con menos
      // ejercicios de los que tiene y parece un dato, no un fallo.
      try { it = f.make(Math.random); } catch { rotos += 1; break; }
      if (!it) break;
      const cubo = it.type === 'order' ? order : mc;
      const clave = it.type === 'order'
        ? (it.solution || []).join(' ')
        : String(it.sentence) + ' :: ' + String(it.answer);
      const antes = cubo.size;
      cubo.add(clave);
      secos = cubo.size === antes ? secos + 1 : 0;
    }
  }
  return { mc: mc.size, order: order.size, rotos };
}

// ¿El número es exacto o un muestreo? No hace falta saberlo de antemano: se
// cuenta dos veces. Si un tema tiene una lista cerrada de ejercicios, las dos
// pasadas dan lo mismo; si los genera combinando, no. Así «Lo básico» sale
// como 43 exactos y «Verbos modales» sale marcado.
function filaGramatica(nombre, id, topic) {
  const a = cuentaFrames(topic);
  const b = cuentaFrames(topic);
  const combinatorio = a.mc !== b.mc || a.order !== b.order;
  const mc = Math.max(a.mc, b.mc);
  const order = Math.max(a.order, b.order);
  const rotos = Math.max(a.rotos, b.rotos);
  return {
    orden: lugar(id),
    tema: nombre,
    aprox: combinatorio,
    // En el orden de los botones: Test · Escribir · Ordenar · ¿Está bien?
    // Test y Escribir son el mismo hueco con y sin opciones.
    'Test': mc,
    'Escribir': mc,
    'Ordenar': order || mc,
    '¿Está bien?': mc + order,
    'Mezclado': mc + order,
    rotos
  };
}

const gramatica = [
  ...bookTopics().map((t) => filaGramatica(t.nameEs || t.name, t.id, t)),
  // Los temas por temática no son del libro: van al final, como en la pantalla
  // de Gramática. Los que combinan sujeto × verbo × complemento se marcan,
  // porque su número es un muestreo y varía un poco entre ejecuciones.
  ...TOPICS.map((t) => filaGramatica(t.nameEs || t.name, t.id, t))
].sort((a, b) => a.orden - b.orden);

// --------------------------------------------------------------- Wortschatz
// El orden de los botones: Tarjetas · Test · Escribir · Emparejar · Wortsalat
// · Blitz · Ahorcado. Todos preguntan una palabra cada vez menos Emparejar,
// que va de seis en seis, y der/die/das, que solo usa sustantivos.
const PAREJAS = 6;
const SUSTANTIVO = /^(der|die|das) /i;

function filaVocabulario(tema, orden, cartas, mazos) {
  const n = cartas.length;
  return {
    orden,
    tema,
    'mazos': mazos,
    'palabras': n,
    'Tarjetas': n,
    'Test': n,
    'Escribir': n,
    'Emparejar': Math.ceil(n / PAREJAS),
    'Wortsalat': n,
    'Blitz': n,
    'Ahorcado': n,
    'der/die/das': cartas.filter((c) => SUSTANTIVO.test(c.de)).length
  };
}

// Por lección y no por mazo. Cada Lektion tiene sus ocho o diez subtemas, y
// una tabla de doscientas filas de diez palabras no dice cuánto hay para
// practicar en una lección, que es la pregunta.
const porLeccion = new Map();
const sueltos = [];
for (const d of vocab.allDecks()) {
  if (!d.lektionId) { sueltos.push(d); continue; }
  if (!porLeccion.has(d.lektionId)) porLeccion.set(d.lektionId, []);
  porLeccion.get(d.lektionId).push(d);
}

const vocabulario = [
  ...KURSBUCH.lektionen
    .filter((l) => porLeccion.has(l.id))
    .map((l) => {
      const ds = porLeccion.get(l.id);
      return filaVocabulario(lektionLabel(l), lugar(l.id), ds.flatMap((d) => d.cards), ds.length);
    }),
  // Los mazos que no son del libro van al final, como en la pantalla.
  ...sueltos.map((d) => filaVocabulario(d.name || d.id, 1000 + ORDEN.size, d.cards, 1))
].sort((a, b) => a.orden - b.orden);

// ------------------------------------------------------------ Kommunikation
// Los seis tipos de pregunta de KommPractice. No valen todas las frases para
// todos: "Ordenar" pide entre tres y doce palabras y "La palabra que falta"
// pide una palabra tapable que no se repita en la frase, así que hay que
// preguntárselo al montador de verdad en vez de dar por hecho que salen todas.
// Antes esta tabla listaba cuatro tipos y ponía el total de frases en los
// cuatro: faltaban dos columnas y las otras estaban de más por unas pocas.
const { tiposPosibles } = await import('../src/lib/kursbuch/kommTipos.js');
const { respuestaDe } = await import('../src/lib/kursbuch/respuestas.js');

// Las columnas son los BOTONES de la pantalla, no los seis tipos internos:
// cada botón puede tirar de más de un tipo ("Elegir la frase" va en las dos
// direcciones y "Contestar" junta contestar y entender), que es como está
// escrito en TIPOS_EJERCICIO. Una frase cuenta para el botón si le sirve para
// alguno de sus tipos.
const BOTONES = [
  ['Elegir la frase', ['decir', 'significado']],
  ['Contestar', ['contestar', 'entender']],
  ['La palabra que falta', ['hueco']],
  ['Ordenar', ['ordenar']]
];

const comunicacion = KURSBUCH.lektionen.map((l) => {
  const fs = lektionKommunikation(l);
  const todas = fs.flatMap((k) => k.wendungen || []);
  if (!todas.length) return null;
  const fila = {
    orden: lugar(l.id),
    tema: lektionLabel(l),
    'apartados': fs.length,
    'frases': todas.length
  };
  for (const [col] of BOTONES) fila[col] = 0;
  for (const w of todas) {
    const puede = tiposPosibles(w, todas, respuestaDe);
    for (const [col, tipos] of BOTONES) if (tipos.some((t) => puede[t])) fila[col] += 1;
  }
  return fila;
}).filter(Boolean).sort((a, b) => a.orden - b.orden);

const SECCIONES = [
  ['GRAMMATIK', gramatica],
  ['WORTSCHATZ', vocabulario],
  ['KOMMUNIKATION', comunicacion]
];

// ------------------------------------------------------------------ pintarlo
const OCULTAS = new Set(['orden', 'aprox', 'rotos']);

if (csv) {
  console.log('seccion,tema,minijuego,ejercicios');
  for (const [sec, filas] of SECCIONES) {
    for (const f of filas) {
      for (const c of Object.keys(f)) {
        if (OCULTAS.has(c) || c === 'tema') continue;
        console.log([sec, `"${f.tema}"`, c, f[c]].join(','));
      }
    }
  }
} else {
  for (const [sec, filas] of SECCIONES) {
    const cols = [...new Set(filas.flatMap((f) => Object.keys(f)))].filter((c) => !OCULTAS.has(c) && c !== 'tema');
    const ancho = Math.max(...filas.map((f) => f.tema.length), 4);
    const w = (c) => Math.max(c.length, 6);
    console.log('\n' + '─'.repeat(ancho + cols.reduce((s, c) => s + w(c) + 1, 0)));
    console.log(sec);
    console.log('─'.repeat(ancho + cols.reduce((s, c) => s + w(c) + 1, 0)));
    console.log(['tema'.padEnd(ancho), ...cols.map((c) => c.padStart(w(c)))].join(' '));
    for (const f of filas) {
      const marca = f.aprox ? '~' : '';
      console.log([
        f.tema.padEnd(ancho),
        ...cols.map((c) => (marca + String(f[c] ?? '·')).padStart(w(c)))
      ].join(' '));
    }
    const tot = {};
    for (const c of cols) tot[c] = filas.reduce((s, f) => s + (Number(f[c]) || 0), 0);
    console.log(['TOTAL'.padEnd(ancho), ...cols.map((c) => String(tot[c]).padStart(w(c)))].join(' '));
  }
  const rotos = gramatica.reduce((s, f) => s + (f.rotos || 0), 0);
  console.log(rotos ? `\n✗ ${rotos} frames reventaron al fabricar el ejercicio` : '\n✓ ningún frame roto');
  console.log('~ = el tema genera combinando, el número es un muestreo');
}
