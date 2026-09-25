// Monta una sesion combinando: (1) items nuevos al azar de las plantillas,
// (2) repaso de los conceptos donde fallas, (3) opcionalmente items nuevos
// generados por IA centrados en tus puntos debiles.

import { makeRng, randomSeed, pick, shuffle } from '../lib/rng.js';
import { weakConcepts, freshConcepts, itemSeenRecently, conceptosQueFaltan } from '../lib/progress.js';
import { getSettings, aiAvailable } from '../lib/settings.js';
import { generateItems, generateLektionItems } from '../lib/ai.js';
import { getLektion } from '../lib/kursbuch/index.js';
// Alias: en este archivo `pick` ya es el de rng.js (elige al azar), así que el
// del idioma entra con otro nombre para no confundirlos.
import { pick as enIdioma } from '../lib/i18n.js';

export function itemKey(topicId, it) {
  return `${topicId}:${it.sentence || it.display || ''}|${it.solution ? it.solution.join(' ') : ''}`;
}

function candidatePool(topic, rng, n) {
  const frames = topic.frames || [];
  const out = [];
  if (!frames.length) return out;

  const hacer = (fr) => {
    try {
      out.push(fr.make(rng));
    } catch (e) {
      console.warn('frame fallo', topic.id, e);
    }
  };

  // Primero UNA pasada por todos los frames. En las lecciones del libro cada
  // frame es una frase concreta, asi que esto pone sobre la mesa todo el
  // material escrito a mano; sin ello, "Ordena la frase" sorteaba al azar y se
  // dejaba fuera la mitad de las frases, con tandas de 5 ejercicios en vez de
  // 10 aunque hubiera de sobra.
  for (const fr of shuffle(rng, frames)) hacer(fr);

  // Y luego extras al azar: en los temas escritos a mano (src/topics/*.js) un
  // frame no es una frase sino una bolsa de frases, y ahi la variedad sale
  // justamente de volver a tirar.
  for (let i = out.length; i < n; i++) hacer(pick(rng, frames));

  return out;
}

// Convierte un item (mc u order) en uno de "¿correcto o no?".
function toJudge(rng, it) {
  const wantCorrect = rng() < 0.5;
  if (it.type === 'order') {
    const solStr = it.solution.join(' ');
    let tokens = [...it.solution];
    if (!wantCorrect && tokens.length >= 3) {
      const i = 1 + Math.floor(rng() * (tokens.length - 2));
      [tokens[i], tokens[i + 1]] = [tokens[i + 1], tokens[i]];
    }
    const shown = tokens.join(' ');
    return {
      id: it.id,
      type: 'judge',
      conceptId: it.conceptId,
      display: shown,
      isCorrect: shown === solStr,
      correctForm: solStr,
      translation: it.translation,
      explanation: it.explanation,
      source: it.source
    };
  }
  // mc
  const filler = wantCorrect
    ? it.answer
    : pick(rng, it.options.filter((o) => o !== it.answer)) || it.answer;
  const shown = String(it.sentence).replace('___', filler);
  return {
    id: it.id,
    type: 'judge',
    conceptId: it.conceptId,
    display: shown,
    isCorrect: filler === it.answer,
    correctForm: String(it.sentence).replace('___', it.answer),
    translation: it.translation,
    explanation: it.explanation,
    source: it.source
  };
}

// Convierte un item de opción múltiple en uno de ordenar: se rellena el hueco
// y la frase entera pasa a ser la solución. Hace falta porque la IA solo
// devuelve opción múltiple, y "Ordenar" filtraba por type === 'order': con
// material de IA la tanda se quedaba vacía.
function toOrder(rng, it) {
  if (it.type === 'order') return it;
  if (it.type !== 'mc' || !it.sentence || !it.answer) return null;
  const frase = String(it.sentence).replace('___', it.answer).replace(/\s+/g, ' ').trim();
  const solution = frase.split(' ').filter(Boolean);
  // Menos de tres piezas no es un puzle, y más de doce es un castigo.
  if (solution.length < 3 || solution.length > 12) return null;
  let tokens = shuffle(rng, solution);
  let guard = 0;
  while (tokens.join('') === solution.join('') && guard++ < 10) {
    tokens = shuffle(rng, solution);
  }
  return {
    id: it.id,
    type: 'order',
    conceptId: it.conceptId,
    prompt: it.prompt,
    tokens,
    solution,
    sentence: frase,
    translation: it.translation,
    explanation: it.explanation,
    source: it.source
  };
}

// Filtra/transforma el pool según el tipo de juego elegido.
function applyGameType(rng, items, gameType) {
  if (!gameType || gameType === 'mixed') return items;
  if (gameType === 'mc') return items.filter((it) => it.type === 'mc');
  if (gameType === 'order') {
    const nativos = items.filter((it) => it.type === 'order');
    if (nativos.length) return nativos;
    return items.map((it) => toOrder(rng, it)).filter(Boolean);
  }
  // Un texto con varios huecos no se puede convertir en "¿correcto o no?": no
  // hay UNA palabra que enseñar bien o mal. Se quedan fuera, y toJudge sigue
  // viendo solo lo que sabe convertir (sin este filtro reventaba al leer
  // it.options, que un cloze no tiene).
  if (gameType === 'judge') return items.filter((it) => it.type !== 'cloze').map((it) => toJudge(rng, it));
  // Escribir y contrarreloj no necesitan material nuevo: son los mismos huecos
  // de test, uno sin las opciones y el otro con un reloj encima.
  if (gameType === 'write') {
    return items.filter((it) => it.type === 'mc').map((it) => ({ ...it, type: 'write' }));
  }
  if (gameType === 'blitz') return items.filter((it) => it.type === 'mc');
  return items;
}

export function buildSession(topic, { size = 10, mode = 'mixed', gameType = 'mixed' } = {}) {
  const rng = makeRng(randomSeed());
  const ids = topic.concepts.map((c) => c.id);
  const weak = new Set(mode === 'learn' ? [] : weakConcepts(ids));
  const fresh = new Set(freshConcepts(ids));
  // Solo las reglas a las que aun les faltan aciertos para contar al 100%.
  const faltan = new Set(mode === 'faltan' ? conceptosQueFaltan(ids) : []);

  let pool = candidatePool(topic, rng, size * 10);
  pool = applyGameType(rng, pool, gameType);

  const seen = new Set();
  const uniq = [];
  for (const it of pool) {
    const k = itemKey(topic.id, it);
    if (seen.has(k)) continue;
    seen.add(k);
    if (itemSeenRecently(k)) continue; // no repitas lo mismo en pocas horas
    it._key = k;
    uniq.push(it);
  }
  // Si el filtro "visto hace poco" deja pocos, rellena con el pool completo.
  if (uniq.length < size) {
    for (const it of pool) {
      const k = itemKey(topic.id, it);
      if (uniq.some((x) => x._key === k)) continue;
      it._key = k;
      uniq.push(it);
      if (uniq.length >= size * 3) break;
    }
  }

  const wItems = [];
  const fItems = [];
  const rItems = [];
  uniq.forEach((it) => {
    if (weak.has(it.conceptId)) wItems.push(it);
    else if (fresh.has(it.conceptId)) fItems.push(it);
    else rItems.push(it);
  });

  const chosen = [];
  const used = new Set();
  // Un texto con varios huecos es UN frame entre cientos, así que al azar no
  // salía casi nunca aunque esté escrito. Como es el ejercicio que más se
  // parece al examen, en las tandas mixtas se reserva un sitio: uno por tanda
  // si el tema tiene alguno. Con juegos concretos (Test, Ordenar…) no aplica,
  // porque ahí el cloze ni siquiera está en el pool.
  const RESERVA_CLOZE = 1;
  // Coge hasta `n` items distintos de `arr` (sin repetir lo ya elegido).
  const take = (arr, n) => {
    for (const it of shuffle(rng, arr)) {
      if (chosen.length >= size || n <= 0) break;
      if (used.has(it._key)) continue;
      used.add(it._key);
      chosen.push(it);
      n--;
    }
  };

  // El sitio reservado, antes de repartir el resto.
  if (gameType === 'mixed' && size >= 4) {
    take(uniq.filter((it) => it.type === 'cloze'), RESERVA_CLOZE);
  }

  if (mode === 'faltan') {
    // Solo lo que impide llegar al 100%, y lo que menos aciertos lleva primero.
    const loQueFalta = uniq.filter((it) => faltan.has(it.conceptId));
    take(loQueFalta, size);
  } else if (mode === 'learn') {
    take([...fItems, ...rItems], size);
  } else if (mode === 'random') {
    take([...wItems, ...fItems, ...rItems], size);
  } else {
    take(wItems, weak.size ? Math.round(size * 0.4) : 0);
    take(fItems, fresh.size ? Math.round(size * 0.25) : 0);
  }
  // Rellena hasta `size` con lo que quede, sin repetir.
  take(rItems, size - chosen.length);
  take([...wItems, ...fItems], size - chosen.length);

  // En tandas mixtas ("De todo un poco"), diversifica los ejercicios para que
  // haya una mezcla real de tipos: test, ordenar, escribir y cazar el error.
  if (gameType === 'mixed' && chosen.length >= 4) {
    const mcIndices = [];
    chosen.forEach((it, idx) => {
      if (it.type === 'mc' && it.sentence && it.answer && !it.sentence.startsWith('—')) {
        mcIndices.push(idx);
      }
    });
    const shuffled = shuffle(rng, mcIndices);
    if (shuffled.length >= 1) {
      const idx = shuffled[0];
      const j = toJudge(rng, chosen[idx]);
      if (j) chosen[idx] = j;
    }
    if (shuffled.length >= 2) {
      const idx = shuffled[1];
      const ord = toOrder(rng, chosen[idx]);
      if (ord) chosen[idx] = ord;
    }
    if (shuffled.length >= 3) {
      const idx = shuffled[2];
      chosen[idx] = { ...chosen[idx], type: 'write' };
    }
  }

  return shuffle(rng, chosen).slice(0, size).map(stripInternal);
}

function stripInternal(it) {
  const { _key, ...clean } = it;
  return clean;
}

// Version que ademas intenta meter items de IA (si esta activada).
// mode 'ai' = sesion muy centrada en IA + tus fallos.
// Cuánto se espera a la IA antes de tirar de plantillas.
//
// Medido con el puente local: escribir los ejercicios de una Lektion tarda
// ~50 s. Con el límite anterior (30 s para todo) la IA NUNCA llegaba a tiempo:
// se esperaba medio minuto y se acababa jugando con plantillas igualmente.
//
//   ESPERA_RETO   → has pulsado "Reto con IA": lo has pedido tú, así que se le
//                   da tiempo de verdad. Y desde que la tanda vive en aiJobs,
//                   irte a otra sección ya no tira el trabajo.
//   ESPERA_MEZCLA → Test normal, donde la IA solo aporta unos pocos ejercicios
//                   de propina: aquí manda empezar rápido.
// Medido: un reto de 6 ejercicios "difíciles" ronda los 100 s, así que 120 no
// daba margen y se perdía por los pelos.
const ESPERA_RETO = 180000;
const ESPERA_MEZCLA = 30000;

export async function buildSessionSmart(topic, opts = {}) {
  const gt = opts.gameType || 'mixed';
  const size = opts.size || 10;

  // Tema de usuario generado con IA: usa directamente sus ejercicios guardados
  if (topic.custom && topic.userItems?.length) {
    const rng = makeRng(randomSeed());
    const listos = applyGameType(rng, topic.userItems, gt);
    const finalItems = listos.length ? listos : topic.userItems;
    return {
      items: shuffleArray(finalItems).slice(0, size),
      aiUsed: true,
      aiCount: finalItems.length
    };
  }

  const aiMode = opts.mode === 'ai';
  const base = buildSession(topic, { ...opts, mode: aiMode ? 'weak' : opts.mode });
  const s = getSettings();

  // Lección del libro sin plantillas propias: todo el material viene de la IA,
  // generado a partir de las reglas de esa Lektion.
  if (topic.aiOnly) {
    if (!aiAvailable()) return { items: [], aiUsed: false, aiError: 'IA no disponible' };
    try {
      const items = await generateLektionItems({
        lektion: getLektion(topic.lektionId),
        focus: 'grammatik',
        count: size
      });
      // La IA devuelve opción múltiple; si has pedido escribir o cazar el
      // error, se convierten igual que los de plantilla. Sin esto, en las
      // lecciones sin plantillas propias el botón de Escribir daba un test.
      const rng = makeRng(randomSeed());
      return {
        items: shuffleArray(applyGameType(rng, items, gt)),
        aiUsed: true,
        aiCount: items.length
      };
    } catch (e) {
      return { items: [], aiUsed: false, aiError: e.message };
    }
  }

  // La IA genera opción múltiple; solo la mezclamos en juegos que la admiten.
  //
  // En la portada hay dos botones que caen los dos en el topic 'mix', y hacen
  // cosas distintas a propósito:
  //   "De todo un poco"  (mode 'mixed'/'todo') → offline, solo plantillas.
  //   "Repaso con IA"    (mode 'ai')           → ejercicios nuevos de la IA.
  // Por eso el corte es `topic.id === 'mix' && !aiMode`: antes era solo
  // `topic.id === 'mix'` y se llevaba por delante también al botón de IA, que
  // nunca llegaba a pedir nada.
  // El mando de ajustes puede estar a cero: entonces la tanda sale entera de
  // plantillas y aparece al instante, sin esperar a la IA.
  //
  // 'Repaso con IA' se salta el mando a proposito (sube a 0.6 como minimo):
  // ese boton pide ejercicios nuevos, y respetar el cero ahi lo dejaria sin
  // hacer nada.
  const share = aiMode ? Math.max(0.6, s.aiShare ?? 0.3) : s.aiShare ?? 0.3;

  // El mando vale para los CUATRO juegos de gramática, no solo para el test.
  // La IA devuelve opción múltiple y de ahí salen los demás: escribir es el
  // mismo hueco sin opciones, cazar el error enseña la frase con una pieza
  // cambiada y ordenar reparte la frase entera en piezas.
  if (!aiAvailable() || share <= 0 || (topic.id === 'mix' && !aiMode)) {
    return { items: aiMode ? buildSession(topic, { ...opts, mode: 'weak' }) : base, aiUsed: false };
  }

  // Sin el suelo de 1: con el mando a cero pedia un ejercicio igualmente, y la
  // espera era la misma que con el mando al 10%.
  const want = Math.max(1, Math.round(size * share));
  const ids = topic.concepts.map((c) => c.id);
  const hints = weakConcepts(ids, 5)
    .map((id) => topic.concepts.find((c) => c.id === id))
    .map((c) => c?.label || c?.name)
    .filter(Boolean);
  const avoid = base.map((it) => it.sentence).filter(Boolean).slice(0, 8);

  try {
    const aiItems = await Promise.race([
      topic.lektionId
        ? generateLektionItems({ lektion: getLektion(topic.lektionId), focus: 'grammatik', count: want })
        : generateItems({
            topicId: topic.id,
            topicName: topic.name,
            conceptHints: hints,
            count: want,
            avoid,
            // Si has pulsado "Repaso con IA" es que quieres algo que las
            // plantillas no te dan: frases más largas y con dos reglas a la
            // vez, no otro hueco suelto.
            reto: aiMode
          }),
      new Promise((res) => setTimeout(() => res([]), aiMode ? ESPERA_RETO : ESPERA_MEZCLA))
    ]);
    if (!aiItems.length) return { items: base, aiUsed: false };
    // Al juego pedido antes de mezclar: si no, en "Escribir" salían con
    // opciones y en "Ordenar" no salían en absoluto.
    const rng = makeRng(randomSeed());
    const aiListos = applyGameType(rng, aiItems, gt);
    if (!aiListos.length) return { items: base, aiUsed: false };
    // Sustituye los ultimos `n` items base por los de IA.
    const n = Math.max(0, Math.min(aiListos.length, want, base.length - 1));
    if (n === 0) return { items: base, aiUsed: false };
    const merged = [...base.slice(0, base.length - n), ...aiListos.slice(0, n)];
    return { items: shuffleArray(merged), aiUsed: true, aiCount: n };
  } catch (e) {
    console.warn('IA no disponible:', e.message);
    return { items: base, aiUsed: false, aiError: e.message };
  }
}

function shuffleArray(a) {
  const r = makeRng(randomSeed());
  return shuffle(r, a);
}

// Las rondas de vocabulario que se mezclan en la sesión no salen del temario,
// así que no están en topic.concepts: sin esto el resumen de fallos enseñaba
// "vocab:bedeutung" tal cual.
const ETIQUETAS_VOCAB = {
  'vocab:artikel': ['El artículo (der/die/das)', 'The article (der/die/das)'],
  'vocab:bedeutung': ['Qué significa la palabra', 'What the word means'],
  'vocab:ausdruck': ['Cómo se dice en alemán', 'How to say it in German'],
  'vocab:schreibung': ['Cómo se escribe', 'How it is spelled']
};

export function conceptLabel(topic, id) {
  // Los temas escritos a mano traen "label"; las lecciones del libro, "name".
  // Sin el segundo, el resumen enseñaba el id pelado (a21-l1:perfekt-...).
  const c = topic.concepts.find((x) => x.id === id);
  if (c?.label || c?.name) return c.label || c.name;
  const voc = ETIQUETAS_VOCAB[id];
  if (voc) return enIdioma(voc[0], voc[1]);
  return id;
}
