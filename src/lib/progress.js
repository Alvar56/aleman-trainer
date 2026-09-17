// Seguimiento de dominio por "concepto" (una regla concreta dentro de un
// tema, p.ej. "modal:muessen" o "prep:akkusativ:durch"). Con esto la app
// sabe donde fallas y te lo vuelve a preguntar (repeticion espaciada simple).

import { storage, KEYS } from './storage.js';

const DEFAULT = { concepts: {}, seenItems: {}, kommPracticed: {}, sessions: 0 };

function load() {
  return { ...DEFAULT, ...storage.get(KEYS.progress, DEFAULT) };
}

// Modelo por concepto: aciertos, fallos, "fuerza" (0..5 estilo Leitner),
// ultima vez visto y proxima revision recomendada (timestamp).
function blank() {
  return { correct: 0, wrong: 0, strength: 0, lastSeen: 0, due: 0, streak: 0 };
}

const INTERVALS = [0, 20e3, 2 * 60e3, 10 * 60e3, 60 * 60e3, 24 * 60e3 * 60, 3 * 24 * 60e3 * 60];

export function recordAnswer(conceptId, correct, extra = {}) {
  return storage.update(KEYS.progress, DEFAULT, (p) => {
    const c = { ...blank(), ...(p.concepts[conceptId] || {}) };
    const now = Date.now();
    if (correct) {
      c.correct += 1;
      c.streak += 1;
      c.strength = Math.min(6, c.strength + 1);
    } else {
      c.wrong += 1;
      c.streak = 0;
      c.strength = Math.max(0, c.strength - 2);
    }
    c.lastSeen = now;
    c.due = now + INTERVALS[Math.min(c.strength, INTERVALS.length - 1)];
    p.concepts[conceptId] = c;
    if (extra.itemKey) p.seenItems[extra.itemKey] = now;
    return p;
  });
}

export function bumpSessions() {
  storage.update(KEYS.progress, DEFAULT, (p) => ({ ...p, sessions: (p.sessions || 0) + 1 }));
}

export function getConcept(conceptId) {
  return load().concepts[conceptId] || blank();
}

// Prioridad de repaso: cuanto mas alto, mas urgente volver a preguntarlo.
function priority(c, now) {
  if (!c || (c.correct === 0 && c.wrong === 0)) return 0; // no visto -> lo maneja "nuevos"
  const overdue = Math.max(0, now - c.due) / 60000; // minutos de retraso
  const errRate = c.wrong / Math.max(1, c.correct + c.wrong);
  const weakBonus = (6 - c.strength) * 1.5;
  return errRate * 6 + Math.min(overdue, 30) * 0.4 + weakBonus;
}

// Devuelve ids de conceptos ordenados por urgencia de repaso.
export function weakConcepts(allConceptIds, limit = 12) {
  const p = load();
  const now = Date.now();
  return allConceptIds
    .map((id) => ({ id, score: priority(p.concepts[id], now) }))
    .filter((x) => x.score > 0.5)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.id);
}

// Conceptos que aun no has practicado (para introducir cosas nuevas).
export function freshConcepts(allConceptIds) {
  const p = load();
  return allConceptIds.filter((id) => {
    const c = p.concepts[id];
    return !c || (c.correct === 0 && c.wrong === 0);
  });
}

export function itemSeenRecently(itemKey, withinMs = 6 * 60 * 60 * 1000) {
  const t = load().seenItems[itemKey];
  return t ? Date.now() - t < withinMs : false;
}

// Aciertos que necesita una regla para contar entera en el porcentaje, y tope
// por encima del cual dejan de sumar. Es el mismo numero que usa topicMastery
// y el que decide que reglas faltan.
//
// Eran 10, y con 4 reglas por leccion salian 40 aciertos frente a los ~90 del
// vocabulario de la misma leccion: gramatica iba a menos de la mitad de
// esfuerzo y la barra volaba. Con 15 quedan 60, que se acerca sin igualarlo.
export const ACIERTOS_POR_CONCEPTO = 15;

// A partir de que porcentaje aparece el boton de "terminar el tema". Por
// debajo falta tanto que seria la sesion normal con otro nombre.
export const UMBRAL_TERMINAR = 70;

export function conceptosQueFaltan(conceptIds) {
  const p = load();
  return conceptIds
    .filter((id) => (p.concepts[id]?.correct || 0) < ACIERTOS_POR_CONCEPTO)
    .sort((a, b) => (p.concepts[a]?.correct || 0) - (p.concepts[b]?.correct || 0));
}

export function topicMastery(conceptIds) {
  const p = load();
  if (!conceptIds.length) return { pct: 0, practiced: 0, total: 0 };
  let sum = 0;
  let practiced = 0;
  conceptIds.forEach((id) => {
    const c = p.concepts[id];
    if (c && (c.correct || c.wrong)) {
      practiced += 1;
      if (c.correct > 0) sum += Math.min(ACIERTOS_POR_CONCEPTO, c.correct);
    }
  });
  return {
    pct: Math.round((sum / (Math.max(1, conceptIds.length) * ACIERTOS_POR_CONCEPTO)) * 100),
    practiced,
    total: conceptIds.length
  };
}

// Se llama al TERMINAR de practicar una función, no al abrirla. Antes bastaba
// con que la IA devolviera el diálogo —sin leerlo siquiera— para que contara,
// así que el porcentaje medía clics, no práctica.
//
// Guarda tambien el acierto de esa vuelta. Las entradas antiguas son un numero
// suelto (la fecha) y se siguen leyendo igual: lo que cuenta para el porcentaje
// es que exista, no su forma.
export function recordKommPracticed(lektionId, funktion, pct = null) {
  storage.update(KEYS.progress, DEFAULT, (p) => {
    p.kommPracticed = p.kommPracticed || {};
    const clave = `${lektionId}:${funktion}`;
    const antes = p.kommPracticed[clave];
    const veces = (typeof antes === 'object' && antes?.veces) || (antes ? 1 : 0);
    p.kommPracticed[clave] = { at: Date.now(), pct, veces: veces + 1 };
    return p;
  });
}

export function kommMastery(lektionId, kommunikationArray) {
  const p = load();
  const vacio = { pct: 0, practiced: 0, total: 0, hechas: {} };
  if (!kommunikationArray || !kommunikationArray.length) return vacio;
  let practiced = 0;
  const kp = p.kommPracticed || {};
  // Cuáles están hechas, no solo cuántas: la lista las marca con un ✓ para que
  // se vea de un vistazo cuál te queda por practicar.
  const hechas = {};
  kommunikationArray.forEach((k) => {
    const v = kp[`${lektionId}:${k.funktion}`];
    if (!v) return;
    practiced += 1;
    hechas[k.funktion] = typeof v === 'object' ? v : { at: v, pct: null, veces: 1 };
  });
  return {
    pct: Math.round((practiced / kommunikationArray.length) * 100),
    practiced,
    total: kommunikationArray.length,
    hechas
  };
}

export function resetProgress() {
  storage.set(KEYS.progress, DEFAULT);
}
