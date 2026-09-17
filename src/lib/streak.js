// Racha: dias consecutivos con al menos una sesion completada, con
// "congeladores" que perdonan un dia perdido. La XP acumulada sirve
// solo para subir de nivel (ver levelFromXp).

import { storage, KEYS } from './storage.js';
import { ganar } from './monedas.js';
import { localeFecha } from './i18n.js';

const DAY = 86400000;
// Lo que paga sumar un dia mas de racha.
export const MONEDAS_POR_DIA = 10;

function todayKey(d = new Date()) {
  // Fecha local en formato YYYY-MM-DD
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
}

function dayDiff(aKey, bKey) {
  const a = new Date(aKey + 'T00:00:00');
  const b = new Date(bKey + 'T00:00:00');
  return Math.round((b - a) / DAY);
}

const DEFAULT = {
  current: 0,
  longest: 0,
  lastDay: null,
  freezes: 2,
  history: {}, // { 'YYYY-MM-DD': xpDelDia }
  totalXp: 0
};

export function getStreak() {
  return { ...DEFAULT, ...storage.get(KEYS.streak, DEFAULT) };
}

// Llamar al terminar una sesion. Devuelve el estado nuevo + eventos
// para poder animar ("racha subida", "congelador usado"...).
export function recordActivity(xpGained) {
  const s = getStreak();
  const today = todayKey();
  const events = [];

  if (s.lastDay === today) {
    s.history[today] = (s.history[today] || 0) + xpGained;
    s.totalXp += xpGained;
    storage.set(KEYS.streak, s);
    return { state: s, events, alreadyToday: true };
  }

  if (s.lastDay == null) {
    s.current = 1;
    events.push({ type: 'start' });
  } else {
    const gap = dayDiff(s.lastDay, today);
    if (gap === 1) {
      s.current += 1;
      events.push({ type: 'up', value: s.current });
    } else if (gap === 2 && s.freezes > 0) {
      s.freezes -= 1;
      s.current += 1;
      events.push({ type: 'freeze-used', remaining: s.freezes });
    } else {
      if (s.current > 0) events.push({ type: 'lost', was: s.current });
      s.current = 1;
    }
  }

  s.longest = Math.max(s.longest, s.current);
  s.lastDay = today;
  s.history[today] = (s.history[today] || 0) + xpGained;
  s.totalXp += xpGained;

  // Recompensa: cada 5 dias, un congelador extra (maximo 3).
  if (s.current > 0 && s.current % 5 === 0 && s.freezes < 3) {
    s.freezes += 1;
    events.push({ type: 'freeze-earned', remaining: s.freezes });
  }

  // Un dia mas de racha, 10 monedas. Solo la primera sesion del dia paga:
  // volver por la tarde no es un dia nuevo.
  ganar(MONEDAS_POR_DIA);
  events.push({ type: 'coins', value: MONEDAS_POR_DIA });

  storage.set(KEYS.streak, s);
  return { state: s, events, alreadyToday: false };
}

// Estado "en vivo" para la pantalla de inicio: si te saltaste ayer y no
// hay congelador, la racha visible ya es 0 aunque no lo hayamos escrito.
export function liveStreak() {
  const s = getStreak();
  if (s.lastDay == null) return { ...s, current: 0, atRisk: false };
  const gap = dayDiff(s.lastDay, todayKey());
  if (gap === 0) return { ...s, atRisk: false, doneToday: true };
  if (gap === 1) return { ...s, atRisk: true, doneToday: false };
  if (gap === 2 && s.freezes > 0) return { ...s, atRisk: true, doneToday: false };
  return { ...s, current: 0, atRisk: false, doneToday: false };
}

// ---------- Nivel por XP acumulada ----------
// XP total necesaria para alcanzar el nivel L = 50 * (L-1) * L
// (nivel 2 = 100 XP, nivel 3 = 300, nivel 4 = 600, nivel 5 = 1000...)
export function levelFromXp(totalXp = 0) {
  let level = 1;
  while (50 * level * (level + 1) <= totalXp) level++;
  const base = 50 * (level - 1) * level;
  const next = 50 * level * (level + 1);
  return {
    level,
    totalXp,
    xpInto: totalXp - base,
    xpNeeded: next - base,
    pct: Math.min(100, Math.round(((totalXp - base) / (next - base)) * 100))
  };
}

export function getLevel() {
  return levelFromXp(getStreak().totalXp);
}

// ---------- Calendario del mes ----------
// Semana de lunes a domingo. `cells` incluye null para los huecos del inicio.
export function monthCalendar(ref = new Date()) {
  const s = getStreak();
  const year = ref.getFullYear();
  const month = ref.getMonth();
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (first.getDay() + 6) % 7; // lunes = 0
  const tKey = todayKey();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const k = todayKey(new Date(year, month, d));
    cells.push({ day: d, key: k, active: (s.history[k] || 0) > 0, isToday: k === tKey });
  }

  const activeThisMonth = cells.filter((c) => c && c.active).length;
  const label = first.toLocaleDateString(localeFecha(), { month: 'long', year: 'numeric' });
  return { label: label.charAt(0).toUpperCase() + label.slice(1), cells, activeThisMonth, daysInMonth };
}
