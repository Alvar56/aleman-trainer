// Dice que texto del CONTENIDO sigue saliendo en castellano cuando la app
// esta en ingles: el libro, la teoria de gramatica, el vocabulario y los
// ejercicios.
//
// COMO LO MIDE
// Monta el contenido dos veces, una en cada idioma, y compara. Lo que cambia
// ya esta traducido; lo que sale igual en los dos, no. Es la prueba de verdad:
// no mira el diccionario, mira lo que veria el alumno. Asi entra tambien lo
// que se traduce por otras vias (los enunciados salen de t(), no de en.js) y
// no cuenta como pendiente algo que en realidad ya funciona.
//
// El aleman se aparta antes de comparar. Los nombres de las reglas, las frases
// de ejemplo y las conjugaciones de las tablas salen igual en los dos idiomas
// a proposito, y contarlos inflaba la cuenta con cientos de cadenas falsas.
//
//   node scripts/extraer-textos.mjs                  -> resumen
//   node scripts/extraer-textos.mjs --faltan         -> ademas, las que faltan
//   node scripts/extraer-textos.mjs --json           -> vuelca las que faltan
//   node scripts/extraer-textos.mjs --json 300       -> solo las 300 primeras
//   node scripts/extraer-textos.mjs --origen topics  -> solo esa parte
//   node scripts/extraer-textos.mjs --claves         -> todas las claves validas

import fs from 'node:fs';
import path from 'node:path';

// El contenido vive en modulos que esperan un navegador. Con esto basta: solo
// se tocan al arrancar, para leer el idioma guardado.
globalThis.localStorage = {
  _d: new Map(),
  getItem(k) { return this._d.has(k) ? this._d.get(k) : null; },
  setItem(k, v) { this._d.set(k, String(v)); },
  removeItem(k) { this._d.delete(k); },
  key() { return null; },
  get length() { return this._d.size; }
};
Object.defineProperty(globalThis, 'navigator', { value: { language: 'es' }, configurable: true });
globalThis.window = globalThis;

const { setLang } = await import('../src/lib/i18n.js');
const {
  KURSBUCH, BAENDE, bandLabel, lektionTopic, lektionDecks,
  lektionKommunikation, lektionWoerter
} = await import('../src/lib/kursbuch/index.js');
const { TOPICS, topicsTraducidos } = await import('../src/topics/index.js');
const vocab = await import('../src/lib/vocab.js');
const { DATA } = await import('../src/lib/kursbuch/frames/index.js');
const { preguntasFuchs } = await import('../src/lib/fuchs.js');
const { teiles, fallen } = await import('../src/lib/pruefung.js');
const { framesDeRegla } = await import('../src/lib/kursbuch/frames/_motor.js');
const { EN } = await import('../src/lib/contenido/en.js');
const { observarTc, tc } = await import('../src/lib/contenido/index.js');

// Un rng deterministico (LCG). Las plantillas eligen su frase con rng(), asi
// que con Math.random el recuento bailaba entre dos ejecuciones seguidas.
// Se reinicia en cada pasada para que las dos vean exactamente lo mismo.
let semilla = 1;
const rngFijo = () => {
  semilla = (semilla * 1103515245 + 12345) % 2147483648;
  return semilla / 2147483648;
};

// Campos con texto para el alumno. Lo que no este aqui no se traduce.
//   id, conceptId, c  -> identificadores
//   options, answer   -> las opciones de un ejercicio, en aleman
const CAMPOS = new Set([
  'es', 'exEs', 'erklaerung', 'wann', 'blurb', 'anweisung', 'nameEs',
  'intro', 'title', 'body', 'detail', 'label', 'hint', 'prompt',
  't', 'e', 'translation', 'explanation', 'situationEs', 'titel', 'text'
]);

// Campos que son listas (o listas de listas) de cadenas sueltas.
const LISTAS = new Set(['pitfalls', 'headers', 'rows', 'tips']);

// Campos que estan en ALEMAN por diseno. Se apuntan para restarlos al final:
// el nombre de una regla es literalmente su `regel` aleman, y sin esto
// "Personalpronomen" contaria como pendiente.
const CAMPOS_ALEMAN = new Set(['regel', 'thema', 'de', 'ex', 'sentence', 'name', 'situation', 'funktion']);

// Hay campos donde conviven las dos lenguas y no se puede dar por hecho que
// esten en castellano:
//   e / explanation -> casi siempre castellano, pero a veces es un patron
//     aleman a secas ("er nimmt.", "wir + -en.", "anrufen: ruft ... an.")
//   headers / rows  -> casi todo conjugaciones (ich / war / hatte), con alguna
//     cabecera en castellano ("Persona", "Posicion del verbo")
// En esos solo cuenta lo que tenga marcas de castellano. En la app da igual:
// tc() pasa por todos y devuelve el original cuando no hay traduccion.
const ACENTOS_ES = /[áéíóúñ¿¡]/;
const PALABRAS_ES = /(?<![\w-])(el|la|los|las|un|una|de|del|con|sin|para|por|que|no|se|su|mi|persona|caso|ejemplo|significado|uso|siempre|nunca|nada|cambio|verbo|frase|final|antes|despues|solo|otro|otra|mismo|misma|masculino|femenino|neutro|singular|nominativo|acusativo|dativo|genitivo|sujeto|objeto|directo|indirecto)(?![\w-])/i;
const MIXTOS = new Set(['e', 'explanation', 'headers', 'rows']);

// No se puede mirar si lleva Umlaut: una explicacion en castellano cita
// palabras alemanas continuamente ("el verbo fahrt va al final").
function pareceCastellano(x) {
  return ACENTOS_ES.test(x) || PALABRAS_ES.test(x);
}

function util(s) {
  const x = String(s).trim();
  if (x.length < 2) return false;
  // Cifras y signos: "0, 1, 2, 3" se lee igual en cualquier idioma.
  if (/^[\d\s.,:;%·—–+()[\]/|-]+$/.test(x)) return false;
  return true;
}

// Recorre todo el contenido y apunta cada cadena traducible con su origen.
function recolecta() {
  semilla = 1;
  const cadenas = new Map(); // texto -> de donde salio
  const aleman = new Set();

  function anota(s, origen) {
    if (typeof s !== 'string' || !util(s)) return;
    const k = s.trim();
    if (!cadenas.has(k)) cadenas.set(k, origen);
  }

  function recorre(nodo, origen, clave = null, visto = new Set(), extra = null) {
    if (nodo == null) return;
    if (typeof nodo === 'string') {
      if (clave && CAMPOS_ALEMAN.has(clave) && !extra?.has(clave)) aleman.add(nodo.trim());
      const vale = clave && (CAMPOS.has(clave) || extra?.has(clave));
      if (vale && (!MIXTOS.has(clave) || pareceCastellano(nodo))) anota(nodo, origen);
      return;
    }
    if (typeof nodo !== 'object' || visto.has(nodo)) return;
    visto.add(nodo);

    if (Array.isArray(nodo)) {
      // Una lista hereda la clave del padre: pitfalls: ['...', '...'].
      for (const x of nodo) {
        if (typeof x === 'string') {
          const vale = clave && (CAMPOS.has(clave) || LISTAS.has(clave) || extra?.has(clave));
          if (vale && (!MIXTOS.has(clave) || pareceCastellano(x))) anota(x, origen);
        } else {
          recorre(x, origen, LISTAS.has(clave) ? clave : null, visto, extra);
        }
      }
      return;
    }
    for (const [k, v] of Object.entries(nodo)) recorre(v, origen, k, visto, extra);
  }

  // ---- el libro ----
  // Solo lo que la app pinta de verdad, que es lo que pasa por tc(). Recorrer
  // KURSBUCH en crudo daba castellano en los dos idiomas y marcaba como
  // pendiente contenido que ya se traduce por su accesor.
  anota(KURSBUCH.title, 'kursbuch');
  for (const b of BAENDE) anota(bandLabel(b), 'kursbuch');
  for (const l of KURSBUCH.lektionen) {
    if (l.grammatik?.length) recorre(lektionTopic(l), 'kursbuch');
    recorre(lektionDecks(l), 'kursbuch');
    recorre(lektionKommunikation(l), 'kursbuch');
    recorre(lektionWoerter(l), 'kursbuch');
  }

  // ---- las plantillas del libro ----
  // Se leen de DATA y no de los ejercicios ya montados: el motor dejo de
  // traducir al montarlos -ahora se traduce al pintarlos, para que cambiar de
  // idioma a mitad de tanda cambie tambien lo que ya tienes delante- y el
  // recuento veia las dos pasadas iguales y las daba por sin traducir.
  for (const d of Object.values(DATA)) {
    for (const x of [...(d.picks || []), ...(d.orders || [])]) {
      anota(tc(x.t), 'frames');
      // El 'por que' a veces es un patron aleman a secas: cuenta como
      // traducible solo si de verdad esta en castellano, igual que hace
      // recorre() con los campos mixtos.
      if (x.e && pareceCastellano(x.e)) anota(tc(x.e), 'frames');
    }
  }

  // ---- la gramatica general (src/topics) ----
  for (const tp of topicsTraducidos()) recorre(tp, 'topics');
  // 400 tiradas por plantilla bastan para que salgan todas las variantes.
  for (const tp of TOPICS) {
    for (const f of tp.frames || []) {
      for (let i = 0; i < 400; i += 1) {
        try { recorre(f.make(rngFijo), 'topics'); } catch { /* ok */ }
      }
    }
  }

  // ---- el vocabulario de arranque ----
  // El `name` del mazo SI se traduce ("Dia a dia"), al reves que el `name` de
  // un tema de gramatica, que esta en aleman.
  const CAMPOS_MAZO = new Set(['name']);
  for (const d of vocab.allDecks()) {
    if (d.builtin && !String(d.id).startsWith('kb-')) recorre(d, 'vocab', null, new Set(), CAMPOS_MAZO);
  }
  recorre(vocab.vocabModes(), 'vocab');
  recorre(vocab.vocabSections(), 'vocab');

  // ---- el zorro ----
  // Las preguntas con las que saluda al abrir la app. La alemana no se toca;
  // la glosa se traduce como cualquier otra.
  recorre(preguntasFuchs(), 'fuchs');

  // ---- el examen ----
  // El nombre de cada parte (Lesen, "Teil 1 · Ansagen") es aleman; lo que se
  // traduce es la explicacion y las trampas.
  recorre(teiles(), 'pruefung');
  recorre(fallen(), 'pruefung');

  for (const x of aleman) cadenas.delete(x);
  return cadenas;
}

// PASADA 1 - en castellano: la lista de todo el texto que existe.
setLang('es');
const enEspanol = recolecta();

// PASADA 2 - en ingles, escuchando a tc(). El enganche apunta cada texto que
// el contenido pide traducir; si vuelve igual, es que le falta al diccionario.
// Esto encuentra ademas los trozos con los que se arma una frase, que de otro
// modo solo se verian ya montados y no se podrian buscar.
const pedidas = new Set();
const sinTraducir = new Set();
setLang('en');
const suelta = observarTc((origen, salida) => {
  pedidas.add(origen);
  if (salida === origen) sinTraducir.add(origen);
});
const enIngles = recolecta();
suelta();
setLang('es');

// Pendiente = sale igual en los dos idiomas. Lo que cambia, ya esta traducido.
const todas = [...enEspanol.keys()];
// Ojo: una cadena puede salir igual en los dos idiomas A PROPOSITO (un nombre
// propio como "Miteinander", o una lista de formas alemanas). Eso se declara
// poniendola en el diccionario tal cual, y entonces no cuenta como pendiente.
const declarada = (x) => EN[x] === x;

// 1) Lo que el contenido pide traducir y vuelve igual.
//
//    Por tc() pasa tambien aleman (nombres de bloque, celdas de tabla), asi
//    que hay que descartarlo. Se hace en dos pasos, y el orden importa:
//
//    a) Si el recorrido lo vio como texto traducible, entra. El recorrido sabe
//       de que campo viene cada cadena, asi que ya ha aplicado el filtro fino
//       (solo duda en `e` y en las tablas). Esto es lo fiable.
//    b) Si no lo vio, es un trozo con el que se arma una frase, y ahi solo
//       queda mirar si parece castellano.
//
//    Antes se aplicaba (b) a TODO, y se colaban sin avisar cadenas sin acentos
//    ni palabras corrientes: "Textos cotidianos: correos, anuncios, carteles y
//    foros." no tiene ninguna marca, asi que el contador la daba por buena.
const traducibles = new Set(enEspanol.keys());
const pendientesTc = [...sinTraducir]
  .filter((x) => !declarada(x) && (traducibles.has(x) || pareceCastellano(x)))
  .sort((a, b) => a.length - b.length || a.localeCompare(b));

// 2) Lo que sale igual en los dos idiomas y ademas NUNCA paso por tc(). Eso no
//    es una traduccion que falte: es texto sin cablear, que ninguna traduccion
//    arreglaria. Son los que hay que ir a buscar al codigo.
const sinCablear = todas.filter((x) => enIngles.has(x) && !declarada(x) && !pedidas.has(x));

const faltan = [...new Set([...pendientesTc, ...sinCablear])];

const soloOrigen = process.argv.includes('--origen')
  ? process.argv[process.argv.indexOf('--origen') + 1]
  : null;
const filtra = (l) => l.filter((x) => !soloOrigen || (enEspanol.get(x) || 'pieza') === soloOrigen);

if (process.argv.includes('--claves')) {
  // Todo lo que existe: lo que se ve al recorrer el contenido MAS lo que
  // tc() pide por su cuenta (los trozos con los que se arman las frases).
  const claves = [...new Set([...todas, ...pedidas])];
  fs.writeFileSync(path.resolve('scripts/_claves.json'), JSON.stringify(claves, null, 0), 'utf8');
  console.log('volcadas ' + claves.length + ' claves en scripts/_claves.json');
} else if (process.argv.includes('--pendientes')) {
  // La lista accionable: lo que el contenido pide traducir y no encuentra.
  const n = Number(process.argv[process.argv.indexOf('--pendientes') + 1]) || pendientesTc.length;
  const desde = Number(process.argv[process.argv.indexOf('--desde') + 1]) || 0;
  console.log(JSON.stringify(pendientesTc.slice(desde, desde + n), null, 1));
} else if (process.argv.includes('--sincablear')) {
  console.log(JSON.stringify(sinCablear.slice(0, 60), null, 1));
} else if (process.argv.includes('--json')) {
  const lista = filtra(faltan);
  const n = Number(process.argv[process.argv.indexOf('--json') + 1]) || lista.length;
  console.log(JSON.stringify(lista.slice(0, n), null, 1));
} else {
  const pendiente = new Set(faltan);
  const porOrigen = new Map();
  for (const x of todas) {
    const o = enEspanol.get(x);
    if (!porOrigen.has(o)) porOrigen.set(o, [0, 0]);
    const c = porOrigen.get(o);
    c[0] += 1;
    if (pendiente.has(x)) c[1] += 1;
  }
  console.log('Contenido que sigue en castellano con la app en inglés');
  console.log('-----------------------------------------------------');
  for (const [o, [n, f]] of [...porOrigen].sort((a, b) => b[1][1] - a[1][1])) {
    console.log(`  ${o.padEnd(10)} ${String(n).padStart(5)} cadenas · faltan ${String(f).padStart(5)}`);
  }
  console.log('');
  console.log(`  cadenas distintas : ${todas.length}`);
  console.log(`  traducidas        : ${todas.length - faltan.length}`);
  console.log(`  faltan            : ${faltan.length}`);
  console.log(`  avance            : ${Math.round(((todas.length - faltan.length) / Math.max(1, todas.length)) * 100)}%`);
  console.log('');
  console.log(`  sin traducir (pasan por tc) : ${pendientesTc.length}`);
  console.log(`  sin cablear  (no pasan)     : ${sinCablear.length}`);
  if (pendientesTc.length) {
    console.log('');
    console.log('  Ojo: "sin cablear" no es fiable mientras queden cadenas sin');
    console.log('  traducir. Una frase armada con trozos todavia en castellano sale');
    console.log('  igual en los dos idiomas y parece que no esta conectada.');
  }
  if (process.argv.includes('--faltan')) {
    console.log('');
    for (const x of filtra(faltan).slice(0, 40)) console.log('  · ' + x.slice(0, 110));
  }
}
