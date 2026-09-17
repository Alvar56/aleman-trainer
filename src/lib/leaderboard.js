// Leaderboard local: guarda cada sesion terminada (tema, aciertos,
// precision, tiempo, XP, fecha) y permite rankear tus mejores marcas.
// Al migrar a web, esto pasara a una tabla compartida.

import { storage, KEYS } from './storage.js';

const MAX = 200;

// Cuantas partidas mira la segunda barra. Hasta que tengas diez cuenta las que
// haya; a partir de ahi, solo las diez ultimas, para que una mala racha de
// hace un mes no siga tirando del numero hacia abajo.
const VENTANA = 10;

export function saveRun(run) {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date: new Date().toISOString(),
    ...run
  };
  storage.update(KEYS.leaderboard, [], (list) => {
    const next = [entry, ...list].slice(0, MAX);
    return next;
  });
  return entry;
}

export function allRuns() {
  return storage.get(KEYS.leaderboard, []);
}

// Partidas DERIVADAS: un juego que mezcla temas (der/die/das, traducir frases)
// guarda ademas un apunte por cada tema que ha tocado, para que la segunda
// barra de ese tema se entere de como lo estas haciendo.
//
// Llevan `parcial: true` y se quedan fuera del ranking y de los records: son un
// trozo de una partida, no una partida. Contarlas como marca seria mentir,
// porque su tiempo es el de la tanda entera pero sus preguntas son solo unas
// pocas.
export function guardarParcial(run) {
  return saveRun({ ...run, parcial: true, seconds: null });
}

// Los minijuegos de un tema, con la precisión media de las últimas N sesiones
// de cada uno. Sirve para ver en qué formato flojeas cuando el tema ya lo
// tienes al 100%: puedes dominar la regla y seguir fallando al ordenar frases.
export function gameStats(topicId, { ultimas = VENTANA } = {}) {
  const runs = allRuns().filter((r) => r.topicId === topicId); // ya vienen del más nuevo al más viejo
  // Las parciales cuentan para el acierto pero no tienen tiempo propio.
  const conTiempo = (r) => !r.parcial && typeof r.seconds === 'number';
  // Los juegos salen de las partidas jugadas, no de una lista fija: así vale
  // igual para gramática y para vocabulario, y no salen filas vacías de
  // juegos que ni has tocado.
  const juegos = [...new Set(runs.map((r) => r.game).filter(Boolean))];
  return juegos.map((game) => {
    const suyas = runs.filter((r) => r.game === game).slice(0, ultimas);
    if (!suyas.length) return { game, sesiones: 0, pct: null, aciertos: 0, total: 0 };
    const aciertos = suyas.reduce((n, r) => n + (r.correct || 0), 0);
    const total = suyas.reduce((n, r) => n + (r.total || 0), 0);
    const cronometradas = suyas.filter(conTiempo);
    const segundos = cronometradas.reduce((n, r) => n + (r.seconds || 0), 0);
    const preguntasCron = cronometradas.reduce((n, r) => n + (r.total || 0), 0);
    // Velocidad POR PREGUNTA: las sesiones no siempre traen el mismo número
    // de ejercicios, así que los tiempos totales no se pueden comparar.
    const segPorPregunta = preguntasCron ? Math.round((segundos / preguntasCron) * 10) / 10 : null;
    // El récord solo cuenta entre las sesiones sin ningún fallo: correr y
    // fallar no es un récord. Se mira en TODO el historial, no en las 5.
    const perfectas = runs.filter((r) => r.game === game && r.total > 0 && r.correct === r.total && conTiempo(r));
    const mejor = perfectas.length
      ? perfectas.reduce((a, b2) => (a.seconds / a.total <= b2.seconds / b2.total ? a : b2))
      : null;
    return {
      game,
      sesiones: suyas.length,
      // sobre el total de preguntas, no la media de medias: una sesión de 3
      // preguntas no debe pesar lo mismo que una de 15
      pct: total ? Math.round((aciertos / total) * 100) : null,
      aciertos,
      total,
      segPorPregunta,
      record: mejor
        ? {
            segPorPregunta: Math.round((mejor.seconds / mejor.total) * 10) / 10,
            seconds: mejor.seconds,
            preguntas: mejor.total,
            date: mejor.date
          }
        : null
    };
  }).filter((x) => x.sesiones > 0);
}

// Ranking de mejores sesiones. Puntuacion = precision * aciertos - penalizacion por tiempo.
function score(r) {
  return r.accuracy * r.correct * 10 - r.seconds * 0.15;
}

// Precisión media de las últimas sesiones de un tema, con todos los juegos
// juntos. Es la segunda barra: una cosa es tener el tema dominado y otra
// seguir acertando cuando vuelves a él.
export function precisionReciente(topicId, { ultimas = VENTANA } = {}) {
  const runs = allRuns().filter((r) => r.topicId === topicId).slice(0, ultimas);
  if (!runs.length) return { pct: null, sesiones: 0 };
  const aciertos = runs.reduce((n, r) => n + (r.correct || 0), 0);
  const total = runs.reduce((n, r) => n + (r.total || 0), 0);
  return { pct: total ? Math.round((aciertos / total) * 100) : null, sesiones: runs.length };
}

export function ranking({ topicId = null, limit = 10 } = {}) {
  return allRuns()
    .filter((r) => !r.parcial)
    .filter((r) => (topicId ? r.topicId === topicId : true))
    .map((r) => ({ ...r, _score: Math.round(score(r)) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function personalBest(topicId) {
  const list = ranking({ topicId, limit: 1 });
  return list[0] || null;
}

export function rankOfRun(runId, topicId) {
  const full = allRuns()
    .filter((r) => (topicId ? r.topicId === topicId : true))
    .map((r) => ({ id: r.id, s: score(r) }))
    .sort((a, b) => b.s - a.s);
  const idx = full.findIndex((r) => r.id === runId);
  return { rank: idx + 1, total: full.length };
}
