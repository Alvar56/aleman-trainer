// Constructores de items. Todos los ejercicios (plantillas o IA) tienen
// esta forma para que los componentes no tengan que saber de donde vienen.
//
// El texto llega ya traducido: lo hace quien construye el item, porque solo
// alli se sabe si es una cadena del libro (tc) o una frase armada con t().
//
// item = {
//   id, type: 'mc' | 'order', conceptId, prompt,
//   sentence,               // mc: frase con ___   | order: frase correcta
//   options, answer,        // solo mc
//   tokens, solution,       // solo order
//   translation, explanation, source
// }

import { shuffle } from '../lib/rng.js';
import { t } from '../lib/i18n.js';

let counter = 0;
function uid(prefix) {
  counter += 1;
  return `${prefix}-${Date.now().toString(36)}-${counter}`;
}

export function mc(rng, { conceptId, sentence, correct, distractors, translation, explanation, prompt }) {
  const uniq = [];
  [correct, ...distractors].forEach((o) => {
    if (o != null && String(o) !== '' && !uniq.some((x) => x.toLowerCase() === String(o).toLowerCase())) {
      uniq.push(String(o));
    }
  });
  if (uniq.length < 3) {
    console.warn('mc: distractores insuficientes para', conceptId, sentence, distractors);
  }
  // Asegura 3 opciones exactas.
  const options = shuffle(rng, uniq.slice(0, 3));
  return {
    id: uid('t'),
    type: 'mc',
    conceptId,
    prompt: prompt || t('frames.pickOneFull'),
    sentence,
    options,
    answer: String(correct),
    translation,
    explanation,
    source: 'plantilla'
  };
}

export function order(rng, { conceptId, solution, translation, explanation, prompt }) {
  let tokens = shuffle(rng, solution);
  let guard = 0;
  while (tokens.join('') === solution.join('') && guard++ < 10) {
    tokens = shuffle(rng, solution);
  }
  return {
    id: uid('o'),
    type: 'order',
    conceptId,
    prompt: prompt || t('frames.orderFull'),
    tokens,
    solution: [...solution],
    sentence: solution.join(' '),
    translation,
    explanation,
    source: 'plantilla'
  };
}
