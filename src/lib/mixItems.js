// Rondas de vocabulario con la misma forma que los ejercicios de gramática,
// para poder mezclarlas en la misma sesión sin inventar pantallas nuevas:
// las de elegir salen como "mc" y el anagrama como "order".

import { allDecks, allNouns } from './vocab.js';
import { pick } from './i18n.js';

function mezclar(a) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

function distintos(pool, correcta, campo, n) {
  const out = [];
  const vistos = new Set([correcta]);
  for (const c of mezclar(pool)) {
    const v = String(c[campo] || '').trim();
    if (!v || vistos.has(v)) continue;
    vistos.add(v);
    out.push(v);
    if (out.length >= n) break;
  }
  return out;
}

import { getLektion, lektionWordList } from './kursbuch/index.js';

// Todas las palabras (del cuaderno de usuario + de la lección actual)
function tarjetas(lektionId) {
  const userCards = allDecks()
    .flatMap((d) => d.cards)
    .map((c) => ({ de: String(c.de || '').trim(), es: String(c.es || '').trim() }));
    
  let lektionCards = [];
  if (lektionId) {
    const l = getLektion(lektionId);
    if (l) {
      lektionCards = lektionWordList(l).map(c => ({ de: String(c.de || '').trim(), es: String(c.es || '').trim() }));
    }
  }

  // Combinar y eliminar duplicados (basado en 'de')
  const combined = [...userCards, ...lektionCards].filter((c) => c.de && c.es);
  const unique = [];
  const seen = new Set();
  for (const c of combined) {
    if (!seen.has(c.de)) {
      seen.add(c.de);
      unique.push(c);
    }
  }
  return unique;
}

function itemGenero(n, i) {
  const opciones = mezclar(['der', 'die', 'das']);
  return {
    id: `mix-gen-${i}-${n.noun}`,
    type: 'mc',
    conceptId: 'vocab:artikel',
    prompt: pick('¿Qué artículo lleva?', 'Which article does it take?'),
    sentence: `___ ${n.noun}`,
    options: opciones,
    answer: n.article,
    translation: n.es,
    explanation: pick(
      `Es «${n.article} ${n.noun}» — ${n.es}.`,
      `It is "${n.article} ${n.noun}" — ${n.es}.`
    )
  };
}

function itemSentido(c, pool, i) {
  const malas = distintos(pool, c.es, 'es', 2);
  if (malas.length < 2) return null;
  return {
    id: `mix-sen-${i}`,
    type: 'mc',
    conceptId: 'vocab:bedeutung',
    prompt: pick('¿Qué significa?', 'What does it mean?'),
    sentence: c.de,
    options: mezclar([c.es, ...malas]),
    answer: c.es,
    translation: c.es,
    explanation: `${c.de} — ${c.es}`
  };
}

function itemComoSeDice(c, pool, i) {
  const malas = distintos(pool, c.de, 'de', 2);
  if (malas.length < 2) return null;
  return {
    id: `mix-dic-${i}`,
    type: 'mc',
    conceptId: 'vocab:ausdruck',
    prompt: pick('¿Cómo se dice en alemán?', 'How do you say it in German?'),
    sentence: c.es,
    options: mezclar([c.de, ...malas]),
    answer: c.de,
    translation: c.de,
    explanation: `${c.es} — ${c.de}`
  };
}

// Anagrama: las letras son los "tokens" y WordOrder las coloca igual que las
// palabras de una frase. Solo con palabras de largo razonable.
function itemAnagrama(c, i) {
  const limpia = c.de.replace(/^(der|die|das)\s+/i, '').split(/[\s,/(]/)[0];
  if (limpia.length < 4 || limpia.length > 8 || !/^[A-Za-zÄÖÜäöüß]+$/.test(limpia)) return null;
  const letras = limpia.split('');
  return {
    id: `mix-ana-${i}`,
    type: 'order',
    conceptId: 'vocab:schreibung',
    prompt: pick(`Ordena las letras: «${c.es}»`, `Put the letters in order: "${c.es}"`),
    tokens: mezclar(letras),
    solution: letras,
    sentence: limpia,
    translation: c.es,
    explanation: `${c.de} — ${c.es}`
  };
}

// n rondas de vocabulario variadas. Si no hay material suficiente, devuelve
// las que haya podido montar (o ninguna) en vez de fallar.
export function vocabMixItems(n = 4, lektionId = null) {
  const pool = tarjetas(lektionId);
  if (pool.length < 4) return [];
  const nouns = allNouns();
  const elegidas = mezclar(pool).slice(0, n * 3);
  const out = [];
  let i = 0;

  const constructores = [
    () => (nouns.length ? itemGenero(mezclar(nouns)[0], i) : null),
    () => itemSentido(elegidas[i % elegidas.length], pool, i),
    () => itemComoSeDice(elegidas[(i + 1) % elegidas.length], pool, i),
    () => itemAnagrama(elegidas[(i + 2) % elegidas.length], i)
  ];

  // Se va rotando el tipo para que salgan variadas, no cuatro iguales. El
  // contador de intentos avanza siempre, así un tipo que no encuentra material
  // (el anagrama con palabras largas) no bloquea a los demás.
  const orden = mezclar([0, 1, 2, 3]);
  for (let intento = 0; out.length < n && intento < n * 8; intento++) {
    const it = constructores[orden[intento % orden.length]]();
    i++;
    if (it && !out.some((x) => x.id === it.id)) out.push(it);
  }
  return out;
}

// Intercala las rondas de vocabulario entre las de gramática, repartidas, no
// todas seguidas al final.
export function intercalar(gramatica, vocab) {
  if (!vocab.length) return gramatica;
  const total = gramatica.length + vocab.length;
  const paso = total / vocab.length;
  const out = [];
  let g = 0;
  let v = 0;
  for (let k = 0; k < total; k++) {
    // la ronda v de vocabulario cae en el centro de su reparto
    const tocaVocab = v < vocab.length && k >= Math.floor(v * paso + paso / 2);
    if (tocaVocab) out.push(vocab[v++]);
    else if (g < gramatica.length) out.push(gramatica[g++]);
    else out.push(vocab[v++]);
  }
  return out;
}
