// Diario: el alumno escribe en alemán sobre su día y la IA se lo corrige.
// Cada entrada guarda el texto original, la corrección completa y la lección
// que salió de sus errores. Todo en localStorage (misma capa que el resto).

import { storage } from './storage.js';

const KEY = 'diary:entries';

function all() {
  return storage.get(KEY, []);
}

export function listEntries() {
  return [...all()].sort(
    (a, b) => String(b.date || '').localeCompare(String(a.date || '')) || b.createdAt - a.createdAt
  );
}

export function getEntry(id) {
  return all().find((e) => e.id === id) || null;
}

export function createEntry(patch = {}) {
  const now = Date.now();
  const entry = {
    id: `d-${now}-${Math.random().toString(36).slice(2, 6)}`,
    createdAt: now,
    updatedAt: now,
    date: patch.date || new Date().toISOString().slice(0, 10),
    title: patch.title || '',
    text: '',
    correction: null, // { korrigiert, niveau, lob, korrekturen[], lektion, wortschatz[], naechsterSchritt }
    correctedAt: null
  };
  storage.update(KEY, [], (list) => [entry, ...list]);
  return entry;
}

export function updateEntry(id, patch) {
  let updated = null;
  storage.update(KEY, [], (list) =>
    list.map((e) => {
      if (e.id !== id) return e;
      updated = { ...e, ...patch, updatedAt: Date.now() };
      return updated;
    })
  );
  return updated;
}

// Los temas de escritura que ya te ha propuesto la IA. Se guardan para poder
// pedirle que no repita: sin esta lista acababa proponiendo el fin de semana
// una y otra vez.
const TEMAS = 'diary:temas';

export function temasVistos() {
  return storage.get(TEMAS, []);
}

export function recordarTema(thema) {
  const txt = String(thema || '').trim();
  if (!txt) return;
  storage.set(TEMAS, [txt, ...temasVistos().filter((x) => x !== txt)].slice(0, 12));
}

export function deleteEntry(id) {
  storage.update(KEY, [], (list) => list.filter((e) => e.id !== id));
}

export function diaryStats() {
  const list = all();
  const corregidas = list.filter((e) => e.correction);
  const palabras = list.reduce((s, e) => s + countWords(e.text), 0);
  return {
    count: list.length,
    corregidas: corregidas.length,
    palabras,
    racha: writingStreak(list)
  };
}

export function countWords(t) {
  return String(t || '').trim() ? String(t).trim().split(/\s+/).length : 0;
}

// Días seguidos escribiendo (contando desde hoy o ayer).
function writingStreak(list) {
  const dias = new Set(list.filter((e) => countWords(e.text) > 0).map((e) => e.date));
  if (!dias.size) return 0;
  const d = new Date();
  const key = (x) => x.toISOString().slice(0, 10);
  if (!dias.has(key(d))) {
    d.setDate(d.getDate() - 1);
    if (!dias.has(key(d))) return 0;
  }
  let n = 0;
  while (dias.has(key(d))) {
    n += 1;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// Errores que más se repiten en todas las entradas corregidas.
export function topMistakes(limit = 5) {
  const cuenta = {};
  for (const e of all()) {
    for (const k of e.correction?.korrekturen || []) {
      const clave = (k.regel || k.typ || '').trim();
      if (!clave) continue;
      cuenta[clave] = (cuenta[clave] || 0) + 1;
    }
  }
  return Object.entries(cuenta)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([regel, n]) => ({ regel, n }));
}
