// Racha de aciertos SEGUIDOS dentro y fuera de una sesión, y el récord histórico.
// No confundir con la racha de días seguidos practicando, que vive en
// streak.js: esa mide constancia, esta mide puntería.

import { storage } from './storage.js';

const KEY_BEST = 'racha:aciertos:record';
const KEY_CURR = 'racha:aciertos:actual';

// Compatibilidad con la clave antigua
const OLD_KEY = 'racha:aciertos';

export function bestStreak() {
  const old = storage.get(OLD_KEY, 0);
  const v = storage.get(KEY_BEST, old);
  return Number.isFinite(Number(v)) ? Number(v) : 0;
}

export function currentStreak() {
  const v = storage.get(KEY_CURR, 0);
  return Number.isFinite(Number(v)) ? Number(v) : 0;
}

// Actualiza el récord y la racha actual a la vez. Devuelve
// { max, record, nuevo } para poder felicitar solo cuando toca.
export function updateStreak(current) {
  const n = Number(current) || 0;
  storage.set(KEY_CURR, n);

  const anterior = bestStreak();
  if (n > anterior) {
    storage.set(KEY_BEST, n);
    return { max: n, record: n, nuevo: true };
  }
  return { max: n, record: anterior, nuevo: false };
}

// Mantenemos la función antigua por si acaso (para el dashboard o similar)
export function recordStreak(max) {
  return updateStreak(max);
}
