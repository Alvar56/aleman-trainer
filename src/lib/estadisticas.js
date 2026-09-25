// Las cuentas de la Bestenliste.
//
// Cada tanda terminada se guarda desde hace tiempo en leaderboard.js -tema,
// juego, aciertos, tiempo, XP y fecha-, pero eso solo se usaba para ordenar una
// tabla de records. Aqui se le sacan las series que se pueden dibujar: cuanto
// practicas cada dia, si aciertas mas que hace dos semanas, en que juego
// flojeas, a que hora estudias.
//
// Todo son funciones puras sobre todas(): no guardan nada nuevo, asi que
// funcionan con el historial que ya tienes.

import { allRuns } from './leaderboard.js';
import { BAENDE, getLektion, lektionFullLabel } from './kursbuch/index.js';

// Las parciales son un trozo de otra tanda (el der/die/das apunta uno por tema
// que toca): cuentan para el acierto de ese tema, pero no son una sesion ni
// tienen tiempo propio, asi que fuera de todo lo que cuente sesiones o minutos.
// Emparejar guardaba correct = total = 6 pasara lo que pasara, y los fallos
// solo viajaban en `accuracy`: en las estadisticas salia al 100% aunque te
// hubieras equivocado diez veces. Ya se guarda bien, pero las tandas de antes
// siguen ahi. El denominador de verdad se saca de la propia tanda, asi que se
// arregla AL LEER y no se toca nada de lo guardado.
function arreglado(r) {
  if (r.game === 'match' && r.accuracy > 0 && r.accuracy < 1 && r.correct === r.total) {
    return { ...r, total: Math.round(r.correct / r.accuracy) };
  }
  return r;
}

function todas() {
  return allRuns().map(arreglado);
}

function reales(runs) {
  return runs.filter((r) => !r.parcial);
}

function clave(d) {
  // Fecha local en YYYY-MM-DD. Con toISOString las tandas de después de las
  // 22:00 en Viena se irían al día siguiente.
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
}

function diaDe(offset) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return d;
}

// ---------- Los totales de arriba ----------
export function totales() {
  const runs = reales(todas());
  const preguntas = runs.reduce((n, r) => n + (r.total || 0), 0);
  const aciertos = runs.reduce((n, r) => n + (r.correct || 0), 0);
  const segundos = runs.reduce((n, r) => n + (r.seconds || 0), 0);
  const xp = runs.reduce((n, r) => n + (r.xp || 0), 0);
  const dias = new Set(runs.map((r) => clave(r.date))).size;
  return {
    sesiones: runs.length,
    preguntas,
    aciertos,
    pct: preguntas ? Math.round((aciertos / preguntas) * 100) : null,
    minutos: Math.round(segundos / 60),
    xp,
    dias,
    // Lo que de verdad dice si esto es un habito o un atracon de domingo.
    minutosPorDia: dias ? Math.round(segundos / 60 / dias) : 0,
    primera: runs.length ? runs[runs.length - 1].date : null
  };
}

// ---------- Actividad por día ----------
// `dias` columnas hasta hoy, incluidos los días en blanco: un hueco es
// información, y una barra pegada a la siguiente sin hueco miente.
export function porDia({ dias = 30 } = {}) {
  const runs = reales(todas());
  const mapa = new Map();
  runs.forEach((r) => {
    const k = clave(r.date);
    const x = mapa.get(k) || { minutos: 0, sesiones: 0, aciertos: 0, preguntas: 0, xp: 0 };
    x.minutos += (r.seconds || 0) / 60;
    x.sesiones += 1;
    x.aciertos += r.correct || 0;
    x.preguntas += r.total || 0;
    x.xp += r.xp || 0;
    mapa.set(k, x);
  });

  const salida = [];
  for (let i = dias - 1; i >= 0; i--) {
    const d = diaDe(-i);
    const k = clave(d);
    const x = mapa.get(k) || { minutos: 0, sesiones: 0, aciertos: 0, preguntas: 0, xp: 0 };
    salida.push({
      fecha: d,
      clave: k,
      minutos: Math.round(x.minutos * 10) / 10,
      sesiones: x.sesiones,
      xp: x.xp,
      pct: x.preguntas ? Math.round((x.aciertos / x.preguntas) * 100) : null
    });
  }
  return salida;
}

// ---------- Cómo va la precisión ----------
// Media móvil sobre las últimas `n` tandas: tanda a tanda el porcentaje salta
// demasiado (una de tres preguntas te manda al 33% o al 100%) y no se ve la
// línea. Devuelve los puntos del más viejo al más nuevo.
export function evolucionPrecision({ ultimas = 40, ventana = 5 } = {}) {
  const runs = reales(todas())
    .filter((r) => r.total > 0)
    .slice(0, ultimas)
    .reverse();
  return runs.map((r, i) => {
    const desde = Math.max(0, i - ventana + 1);
    const trozo = runs.slice(desde, i + 1);
    const a = trozo.reduce((n, x) => n + (x.correct || 0), 0);
    const t = trozo.reduce((n, x) => n + (x.total || 0), 0);
    return {
      i,
      fecha: r.date,
      suelta: Math.round((r.correct / r.total) * 100),
      media: t ? Math.round((a / t) * 100) : null
    };
  });
}

// ---------- Por juego ----------
// En qué formato flojeas: puedes tener la regla dominada y seguir fallando al
// ordenar frases. Ordenado de peor a mejor, que es el orden en el que interesa.
// Juegos que existen en gramatica Y en vocabulario con el mismo id. Se
// separan por el tema de la tanda -los de vocabulario empiezan por "vocab:"-,
// que funciona tambien con todo el historial que ya tienes: no hace falta
// cambiar como se guardan las tandas ni migrar nada.
const COMPARTIDOS = new Set(['write']);

export function porJuego() {
  const runs = reales(todas());
  const mapa = new Map();
  runs.forEach((r) => {
    const base = r.game || r.mode || '?';
    const esVocab = String(r.topicId || '').startsWith('vocab:');
    const g = COMPARTIDOS.has(base) && esVocab ? base + ':voc' : base;
    const x = mapa.get(g) || { juego: g, sesiones: 0, aciertos: 0, preguntas: 0, segundos: 0 };
    x.sesiones += 1;
    x.aciertos += r.correct || 0;
    x.preguntas += r.total || 0;
    x.segundos += r.seconds || 0;
    mapa.set(g, x);
  });
  return [...mapa.values()]
    .map((x) => ({
      ...x,
      pct: x.preguntas ? Math.round((x.aciertos / x.preguntas) * 100) : null,
      segPorPregunta: x.preguntas ? Math.round((x.segundos / x.preguntas) * 10) / 10 : null
    }))
    .sort((a, b) => (a.pct ?? 101) - (b.pct ?? 101));
}

// ---------- Por tema ----------
//
// La lista del libro, en el orden del libro: A1.1 Start, A1.1 Lektion 1, ...
// hasta A2.1 Lektion 8. Una fila por leccion, juntando lo que has hecho de
// ella en cualquier sitio -gramatica, vocabulario y Kommunikation-.
//
// Antes cada leccion salia hasta tres veces, una por seccion, y ademas
// ordenadas de peor a mejor: no habia forma de seguir el hilo ni de comparar
// una leccion con la siguiente.
//
// Aqui SI entran las parciales: su razon de ser es decir como llevas un tema
// cuando lo tocas de refilon en un juego que mezcla varios.

// leccion -> el sitio que ocupa en el libro.
const ORDEN = (() => {
  const m = new Map();
  let n = 0;
  for (const b of BAENDE) for (const l of b.lektionen) m.set(l.id, n++);
  return m;
})();

// De que leccion es una tanda. El id la lleva dentro venga de donde venga:
// "kb-a21-l1", "vocab:kb-a21-l1-w0", "komm:a11-start".
function lektionDe(topicId) {
  const m = /(a\d{2}-(?:l\d+|start))/.exec(String(topicId || ''));
  return m && ORDEN.has(m[1]) ? m[1] : null;
}

export function porTema({ limite = 99, minimo = 5 } = {}) {
  const mapa = new Map();
  todas().forEach((r) => {
    const lek = lektionDe(r.topicId);
    // Lo que no es del libro -la mezcla, el Kasus Trainer, los mazos sueltos,
    // el cuaderno- se agrupa por su nombre y va detras.
    const clave = lek || 'x:' + (r.topicName || r.topicId || '?');
    const x = mapa.get(clave) || {
      id: clave,
      nombre: lek ? lektionFullLabel(getLektion(lek)) : r.topicName || r.topicId,
      orden: lek ? ORDEN.get(lek) : null,
      sesiones: 0,
      aciertos: 0,
      preguntas: 0
    };
    if (!r.parcial) x.sesiones += 1;
    x.aciertos += r.correct || 0;
    x.preguntas += r.total || 0;
    mapa.set(clave, x);
  });
  return [...mapa.values()]
    // Una leccion sale en cuanto la has tocado: es la lista del libro y un
    // hueco en medio se lee como un error. El suelo es para lo de fuera del
    // libro, que es donde aparecian las filas de una sola pregunta.
    .filter((x) => (x.orden != null ? x.preguntas > 0 : x.preguntas >= minimo))
    .map((x) => ({ ...x, pct: Math.round((x.aciertos / x.preguntas) * 100) }))
    // Primero las lecciones en el orden del libro; detras, lo que no es una
    // leccion, lo mas practicado arriba.
    .sort((a, b) => {
      if (a.orden != null && b.orden != null) return a.orden - b.orden;
      if (a.orden != null) return -1;
      if (b.orden != null) return 1;
      return b.preguntas - a.preguntas;
    })
    .slice(0, limite);
}

// ---------- A qué hora estudias ----------
// Las 24 horas del día con los minutos que has echado en cada una. Sirve para
// lo de siempre: descubrir que lo que crees que haces por la mañana lo haces
// a las once de la noche.
export function porHora() {
  const runs = reales(todas());
  const horas = Array.from({ length: 24 }, (_, h) => ({ hora: h, minutos: 0, sesiones: 0 }));
  runs.forEach((r) => {
    const h = new Date(r.date).getHours();
    horas[h].minutos += (r.seconds || 0) / 60;
    horas[h].sesiones += 1;
  });
  return horas.map((x) => ({ ...x, minutos: Math.round(x.minutos * 10) / 10 }));
}

// ---------- Los días de la semana ----------
// Lunes primero, como el calendario de la portada.
export function porDiaSemana() {
  const runs = reales(todas());
  const dias = Array.from({ length: 7 }, (_, i) => ({ dia: i, minutos: 0, sesiones: 0 }));
  runs.forEach((r) => {
    const d = (new Date(r.date).getDay() + 6) % 7; // 0 = lunes
    dias[d].minutos += (r.seconds || 0) / 60;
    dias[d].sesiones += 1;
  });
  return dias.map((x) => ({ ...x, minutos: Math.round(x.minutos * 10) / 10 }));
}

// ---------- Lo mejor de cada juego ----------
// Un récord es la tanda más rápida SIN fallos: correr fallando no es un récord.
export function records() {
  const runs = reales(todas()).filter((r) => r.total > 0 && r.correct === r.total && r.seconds > 0);
  const mapa = new Map();
  runs.forEach((r) => {
    const g = r.game || r.mode || '?';
    const seg = r.seconds / r.total;
    const x = mapa.get(g);
    if (!x || seg < x.segPorPregunta) {
      mapa.set(g, {
        juego: g,
        segPorPregunta: Math.round(seg * 10) / 10,
        seconds: r.seconds,
        preguntas: r.total,
        tema: r.topicName,
        date: r.date
      });
    }
  });
  return [...mapa.values()].sort((a, b) => a.segPorPregunta - b.segPorPregunta);
}
