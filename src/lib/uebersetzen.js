// Juego de traducir frases: alemán → español y al revés.
//
// Las frases salen del propio libro: las expresiones de Kommunikation y los
// ejemplos de las reglas de Gramática. Así traduces lo que estás dando, no
// frases sueltas de ninguna parte.

import { BAENDE, getLektion, ruleConceptId } from './kursbuch/index.js';
import { storage } from './storage.js';
import { GENDER_NIVELES } from './vocab.js';

const KEY = 'uebersetzen:progreso';
const ULTIMAS = 'uebersetzen:ultimas';

// Ni tan cortas que sean una palabra ni tan largas que sean un párrafo.
const MIN_PALABRAS = 3;
const MAX_PALABRAS = 12;

function util(de, es) {
  const d = String(de || '').trim();
  const e = String(es || '').trim();
  const n = d.split(/\s+/).length;
  // Fuera las que traen alternativas ("Guten Tag! / Guten Abend!") o huecos
  // para rellenar: no son una frase que se pueda traducir y corregir.
  const alternativas = /[/·•]|\.\.\./;
  if (alternativas.test(d) || alternativas.test(e) || d.includes('_') || d.includes('…')) return false;
  // Fuera las formulas de gramatica ("der Apfel + der Saft = der Apfelsaft"):
  // no son una frase que se pueda traducir.
  if (/[+=]|→|->/.test(d) || /[+=]|→|->/.test(e)) return false;
  // Y las que no llevan ni un verbo aparente ni signos de frase: listas sueltas.
  if (!/[.!?]$/.test(d) && d.split(/\s+/).length < 4) return false;
  return !!d && !!e && n >= MIN_PALABRAS && n <= MAX_PALABRAS;
}

// Todas las frases del libro, con de dónde salen.
export function frases({ lektionId = null } = {}) {
  const out = [];
  const vistas = new Set();
  const lecciones = lektionId
    ? [getLektion(lektionId)].filter(Boolean)
    : BAENDE.flatMap((b) => b.lektionen);

  for (const l of lecciones) {
    // expresiones de Kommunikation
    for (const k of l.kommunikation || []) {
      for (const w of k.wendungen || []) {
        if (!util(w.de, w.es) || vistas.has(w.de)) continue;
        vistas.add(w.de);
        out.push({ de: w.de.trim(), es: w.es.trim(), de_donde: k.funktion, lektion: l.name, band: l.bandName });
      }
    }
    // ejemplos de las reglas
    for (const g of l.grammatik || []) {
      for (const b of g.beispiele || []) {
        if (!util(b.de, b.es) || vistas.has(b.de)) continue;
        vistas.add(b.de);
        // conceptId: el mismo identificador que usa Gramática. Sin él, acertar
        // aquí no movía el porcentaje de ninguna regla — el juego apuntaba solo
        // en su propio almacén y el tema no se enteraba.
        out.push({
          de: b.de.trim(), es: b.es.trim(), de_donde: g.regel,
          lektion: l.name, band: l.bandName,
          conceptId: ruleConceptId(l, g)
        });
      }
    }
  }
  return out;
}

function progreso() {
  return storage.get(KEY, {});
}

// Igual que el vocabulario: lo que fallas vuelve antes.
const INTERVALOS = [0, 6e4, 6e5, 36e5, 864e5, 3 * 864e5, 7 * 864e5];

export function apuntar(id, acierto) {
  storage.update(KEY, {}, (p) => {
    const c = { bien: 0, mal: 0, fuerza: 0, toca: 0, ...(p[id] || {}) };
    if (acierto) {
      c.bien += 1;
      c.fuerza = Math.min(6, c.fuerza + 1);
    } else {
      c.mal += 1;
      c.fuerza = Math.max(0, c.fuerza - 1);
    }
    c.toca = Date.now() + INTERVALOS[Math.min(c.fuerza, INTERVALOS.length - 1)];
    p[id] = c;
    return p;
  });
}

export function estadisticas({ lektionId = null, nivel = 'all' } = {}) {
  let pool = frases({ lektionId });
  if (nivel !== 'all') {
    const def = GENDER_NIVELES.find(n => n.id === nivel);
    if (def && def.bands) {
      pool = pool.filter(f => def.bands.includes(f.band));
    }
  }
  const p = progreso();
  let sabidas = 0;
  pool.forEach((f) => {
    if (p[f.de]?.fuerza >= 3) sabidas += 1;
  });
  return { total: pool.length, sabidas, pct: Math.round((sabidas / Math.max(1, pool.length)) * 100) };
}

function barajar(a) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

// Elige las frases de una ronda: primero las que tocan repasar, luego las
// nuevas, y evita repetir las de la tanda anterior si hay material de sobra.
export function elegirFrases(cuantas = 10, { lektionId = null, direccion = 'mix', nivel = 'all' } = {}) {
  let pool = frases({ lektionId });
  if (nivel !== 'all') {
    const def = GENDER_NIVELES.find(n => n.id === nivel);
    if (def && def.bands) {
      pool = pool.filter(f => def.bands.includes(f.band));
    }
  }
  if (!pool.length) return [];
  const p = progreso();
  const ahora = Date.now();
  const ultimas = new Set(storage.get(ULTIMAS, []));

  const tocan = [];
  const nuevas = [];
  const resto = [];
  for (const f of pool) {
    const c = p[f.de];
    if (!c || c.bien + c.mal === 0) nuevas.push(f);
    else if (c.toca <= ahora) tocan.push({ f, retraso: ahora - c.toca });
    else resto.push(f);
  }
  tocan.sort((a, b) => b.retraso - a.retraso);

  const evitar = (arr) => {
    const limpio = arr.filter((f) => !ultimas.has(f.de));
    return limpio.length >= cuantas ? limpio : arr;
  };

  const out = [];
  const meter = (arr) => {
    for (const f of arr) {
      if (out.length >= cuantas) break;
      if (!out.some((x) => x.de === f.de)) out.push(f);
    }
  };
  meter(tocan.slice(0, Math.max(1, Math.round(cuantas * 0.4))).map((x) => x.f));
  meter(barajar(evitar(nuevas)));
  meter(barajar(evitar(resto)));
  meter(barajar(pool));

  const elegidas = out.slice(0, Math.min(cuantas, pool.length));
  storage.set(ULTIMAS, elegidas.map((f) => f.de));

  // La dirección se decide por frase, para que la ronda vaya alternando.
  return elegidas.map((f, i) => ({
    ...f,
    dir: direccion === 'mix' ? (i % 2 === 0 ? 'de-es' : 'es-de') : direccion
  }));
}

// ---------- corrección ----------
// Comparación indulgente: ni las mayúsculas, ni los acentos, ni la puntuación
// ni los espacios de más cuentan como fallo. Lo que se practica es la frase.
export function normalizar(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // las tildes que NFD deja sueltas
    .replace(/ß/g, 'ss')
    .replace(/[¿?¡!.,;:"'()–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Además de "bien" y "mal" hay un "casi": una sola palabra distinta. Ahí no
// tiene sentido tratarlo como si no supieras la frase.
export function corregir(tuya, buena) {
  const a = normalizar(tuya);
  const b = normalizar(buena);
  if (!a) return { estado: 'vacio', distintas: [] };
  if (a === b) return { estado: 'bien', distintas: [] };

  const pa = a.split(' ');
  const pb = b.split(' ');
  const faltan = pb.filter((w) => !pa.includes(w));
  const sobran = pa.filter((w) => !pb.includes(w));

  if (faltan.length === 0 && sobran.length === 0) {
    // mismas palabras, otro orden
    return { estado: 'orden', distintas: [] };
  }
  if (faltan.length <= 1 && sobran.length <= 1 && pa.length === pb.length) {
    return { estado: 'casi', distintas: faltan };
  }
  return { estado: 'mal', distintas: faltan };
}

// ---------- pistas ----------
// Se dan de una en una y de menos a más: primero cuántas palabras hay, luego
// la primera, luego la mitad. Pedir pista no invalida el acierto, solo cuenta
// menos puntos.
export function pistas(frase) {
  const buena = frase.dir === 'de-es' ? frase.es : frase.de;
  const palabras = buena.split(/\s+/);
  const mitad = Math.max(1, Math.ceil(palabras.length / 2));
  return [
    { tipo: 'largo', texto: `${palabras.length}` },
    { tipo: 'inicio', texto: palabras[0] },
    {
      tipo: 'mitad',
      texto: palabras.map((w, i) => (i < mitad ? w : '·'.repeat(Math.min(w.length, 5)))).join(' ')
    }
  ];
}

export function xpDe(estado, pistasUsadas) {
  if (estado === 'bien') return Math.max(3, 10 - pistasUsadas * 2);
  if (estado === 'casi' || estado === 'orden') return Math.max(2, 6 - pistasUsadas * 2);
  return 2;
}
