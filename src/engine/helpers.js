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

// Opciones que enseña un test. Con tres, descartando dos te queda la buena
// demasiadas veces; con cuatro hay que mirar la frase.
export const OPCIONES_MC = 4;

// ¿Pega este candidato como señuelo de esta respuesta?
//
// Venir de la misma regla no basta. Hay reglas que mezclan huecos de formas
// muy distintas —"___ Tisch ist neu." y "Wie viele Formen hat…?" comparten
// clave—, y de ahí salían opciones como "mit der Übersetzung" para un hueco de
// artículo. Un señuelo que no puede ser la respuesta ni por su pinta no hace
// dudar a nadie: se descarta sin leer.
//
// Dos condiciones, las que se ven de un vistazo:
//   · las mismas palabras que la respuesta (una por una, dos por dos);
//   · la misma mayúscula inicial, que en un hueco que abre la frase delata al
//     relleno antes de leerlo.
function encaja(correcta, candidato) {
  const a = String(correcta).trim();
  const b = String(candidato).trim();
  if (!a || !b) return false;
  if (a.split(/\s+/).length !== b.split(/\s+/).length) return false;
  const ia = a[0];
  const ib = b[0];
  const mayus = (c) => c === c.toUpperCase() && c !== c.toLowerCase();
  return mayus(ia) === mayus(ib);
}

// Letras que comparten desde el principio dos palabras. Es la medida barata de
// "son de la misma familia": der/dem comparten 2, gefällt/gefallen 4, der y
// gefallen ninguna.
function raiz(a, b) {
  const x = String(a).toLowerCase();
  const y = String(b).toLowerCase();
  let n = 0;
  while (n < x.length && n < y.length && x[n] === y[n]) n += 1;
  return n;
}

// ¿Se lee ya esta palabra en la frase? Ofrecer como señuelo algo que tienes
// delante no es un señuelo, es ruido: en "Gute ___!" nadie elige "Gute".
function yaEnLaFrase(sentence, candidato) {
  const texto = String(sentence || '').toLowerCase();
  const cand = String(candidato).toLowerCase().trim();
  if (!cand) return true;
  // Con límites de palabra, que "ist" no case dentro de "Christine".
  const palabras = new Set(texto.split(/[^\p{L}\p{N}ß]+/u).filter(Boolean));
  if (cand.split(/\s+/).every((p) => palabras.has(p))) return true;
  return false;
}

export function mc(rng, { conceptId, sentence, correct, distractors, reserva, translation, explanation, prompt }) {
  const uniq = [];
  const normKey = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');

  [correct, ...(distractors || [])].forEach((o) => {
    if (o != null && String(o).trim() !== '' && !uniq.some((x) => normKey(x) === normKey(o))) {
      uniq.push(String(o).trim());
    }
  });
  if (uniq.length < 3) {
    console.warn('mc: distractores insuficientes para', conceptId, sentence, distractors);
  }

  // El cuarto (y el tercero, si la plantilla solo trajo uno) sale de la reserva
  // de la propia regla: las palabras que ya se usan como respuesta o como
  // señuelo en sus otros ejercicios. Son del mismo campo —los conectores con
  // los conectores, los artículos con los artículos—, así que descartar sigue
  // costando lo mismo. Escribir un tercer señuelo a mano en cada uno de los
  // casi tres mil huecos era la otra opción.
  // Se baraja cada nivel por su cuenta y van en orden: los señuelos puros
  // antes que las respuestas de otros huecos. Barajando la lista entera se
  // perdía esa preferencia, que es justo lo que la hace segura.
  if (uniq.length < OPCIONES_MC && reserva) {
    // Primero al azar, para que el cuarto no sea siempre el mismo, y luego se
    // suben los que se PARECEN a la respuesta. Un señuelo que comparte raíz
    // ("gefallen" frente a "gefällt") obliga a mirar la terminación, que es
    // donde está el ejercicio; uno de otra familia ("der") se descarta sin
    // leerlo y deja el test en tres opciones de verdad.
    const candidatos = [
      ...shuffle(rng, reserva.seguros || []),
      ...shuffle(rng, reserva.otros || [])
    ].sort((a, b) => raiz(correct, b) - raiz(correct, a));
    for (const cand of candidatos) {
      if (uniq.length >= OPCIONES_MC) break;
      const c = String(cand).trim();
      if (!c) continue;
      if (uniq.some((x) => normKey(x) === normKey(c))) continue;
      if (!encaja(correct, c)) continue;
      if (yaEnLaFrase(sentence, c)) continue;
      uniq.push(c);
    }
  }

  // Si la reserva no da para cuatro, mejor tres que un cuarto inventado.
  const options = shuffle(rng, uniq.slice(0, OPCIONES_MC));
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

// Sin repetidas y con la de referencia siempre la primera.
function alternativasValidas(solution, alt) {
  const todas = [solution, ...(alt || [])].map((s) => s.join(' '));
  return todas.filter((s, i) => todas.indexOf(s) === i);
}

// El alemán deja mover el Vorfeld: "Letzte Woche haben wir das Auto verkauft"
// y "Wir haben letzte Woche das Auto verkauft" están las dos bien. Si solo se
// acepta la que está guardada, el ejercicio corrige mal una frase correcta, y
// eso es peor que no tener el ejercicio. De ahí `alt`: las otras colocaciones
// que también valen. La primera sigue siendo la de referencia -es la que se
// enseña al fallar-, pero cualquiera de la lista puntúa.
export function order(rng, { conceptId, solution, alt, translation, explanation, prompt }) {
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
    alternativas: alternativasValidas(solution, alt),
    sentence: solution.join(' '),
    translation,
    explanation,
    source: 'plantilla'
  };
}

// Un texto corto con VARIOS huecos y un banco de palabras debajo.
//
// Es el ejercicio que más se parece a lo que pide el examen: no es una frase
// suelta, es un texto donde cada hueco depende de los de al lado, y el banco
// trae señuelos para que no se resuelva por descarte. La pantalla ya existía
// (ClozeTest), pero solo la usaba lo que escribe la IA en el Notizbuch; esto
// permite escribirlos a mano en las plantillas, que es lo que funciona sin IA.
export function cloze(rng, { conceptId, text, answers, extras = [], translation, explanation, prompt }) {
  // El banco: las respuestas más los señuelos, barajado. Si una palabra se
  // repite en dos huecos tiene que aparecer dos veces, así que no se quitan
  // duplicados de las respuestas: solo los señuelos que ya están.
  const banco = [...answers];
  for (const x of extras) {
    if (x != null && String(x) !== '' && !banco.includes(String(x))) banco.push(String(x));
  }
  return {
    id: uid('c'),
    type: 'cloze',
    conceptId,
    prompt: prompt || t('frames.clozeFull'),
    clozeText: text,
    clozeAnswers: answers.map(String),
    clozeChoices: shuffle(rng, banco),
    sentence: text,
    translation,
    explanation,
    source: 'plantilla'
  };
}
