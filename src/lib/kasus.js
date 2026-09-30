import { storage } from './storage.js';
import { tc } from './contenido/index.js';
import { KASUS_DATABASE } from './kasus_data.js';
import { ARTIKEL_TABELLEN } from './kasus_tabellen.js';

export { ARTIKEL_TABELLEN };

// Translates Spanish `por` explanations to English using pattern matching.
// Covers all patterns found in kasus_data.js (Sujeto, Objeto directo, Dativ, etc.)
export function porEn(por) {
  if (!por) return por;
  return por
    .replace(/Sujeto de la frase:/g, 'Subject of the sentence:')
    .replace(/Sujeto en plural:/g, 'Plural subject:')
    .replace(/Sujeto \/ atributo:/g, 'Subject / predicate:')
    .replace(/Aunque no vaya primero, sigue siendo el sujeto:/g, "Even though it doesn't come first, it is still the subject:")
    .replace(/Objeto directo:/g, 'Direct object:')
    .replace(/Objeto indirecto:/g, 'Indirect object:')
    .replace(/La persona que recibe va en Dativ:/g, 'The recipient takes Dativ:')
    .replace(/El receptor va en Dativ:/g, 'The recipient takes Dativ:')
    .replace(/La persona va en Dativ:/g, 'The person takes Dativ:')
    .replace(/Preposici[oó]n con Dativ:/g, 'Preposition with Dativ:')
    .replace(/Preposici[oó]n con Akkusativ:/g, 'Preposition with Akkusativ:')
    .replace(/Rige Dativ:/g, 'Governs Dativ:')
    .replace(/Rige Akkusativ:/g, 'Governs Akkusativ:')
    .replace(/Plural:/g, 'Plural:')
    .replace(/maskulin/g, 'masculine')
    .replace(/feminin/g, 'feminine')
    .replace(/neutral/g, 'neuter');
}

// Kasus Trainer: el artículo / determinante correcto dentro de una frase.
//
// Mide si sabes qué le pasa a los artículos (determinados, indeterminados,
// negativos y posesivos) cuando entran en una frase según su género y caso
// (Nominativ, Akkusativ, Dativ).
//
// `por` es la razón explicativa para enseñar de verdad por qué se usa esa forma.

export const OPCIONES = ['der', 'die', 'das', 'den', 'dem'];

// Los filtros disponibles para Kasus Trainer: separados por casos y por tipo de artículo.
export const KASUS_FILTROS_CASO = [
  { id: 'all', es: 'Todos (Mix)', en: 'All (Mix)', corto: 'Todos', cortoEn: 'All' },
  { id: 'Nominativ', es: 'Nominativ', en: 'Nominativ', corto: 'Nom.', cortoEn: 'Nom.' },
  { id: 'Akkusativ', es: 'Akkusativ', en: 'Akkusativ', corto: 'Akk.', cortoEn: 'Akk.' },
  { id: 'Dativ', es: 'Dativ', en: 'Dativ', corto: 'Dat.', cortoEn: 'Dat.' }
];

export const KASUS_FILTROS_ART = [
  { id: 'bestimmt', es: 'Determinados', en: 'Definite', corto: 'Determ.', cortoEn: 'Def.' },
  { id: 'ein', es: 'Indeterminados', en: 'Indefinite', corto: 'Indeterm.', cortoEn: 'Indef.' },
  { id: 'kein', es: 'Negativos', en: 'Negative', corto: 'Negat.', cortoEn: 'Neg.' },
  { id: 'possessiv', es: 'Posesivos', en: 'Possessives', corto: 'Poses.', cortoEn: 'Poss.' }
];

export const KASUS_FILTROS = [...KASUS_FILTROS_CASO, ...KASUS_FILTROS_ART];

const GENERO_NOMBRE = { m: 'der (maskulin)', f: 'die (feminin)', n: 'das (neutral)', p: 'die (Plural)' };

function aObjeto([vor, nach, genus, kasus, es, por, artType = 'bestimmt'], i) {
  const tbl = ARTIKEL_TABELLEN[artType] || ARTIKEL_TABELLEN.bestimmt;
  const art = tbl[genus]?.[kasus] || tbl.m.Nominativ;
  const options = tbl.options || OPCIONES;
  return {
    id: 'k' + i,
    vor,
    nach,
    genus,
    kasus,
    artType,
    art,
    options,
    // El sustantivo es la primera palabra de lo que va después del hueco.
    nomen: String(nach).split(' ')[0].replace(/[.,?!]/g, ''),
    // Pista de género: qué artículo lleva ese sustantivo en Nominativ.
    pistaGenero: GENERO_NOMBRE[genus] || genus,
    es,
    por
  };
}

export function todasLasFrases() {
  return KASUS_DATABASE.map(aObjeto);
}

// Una tanda. Prioriza lo que has fallado y lo que no has visto nunca: repetir
// lo que ya te sabes no enseña nada.
// Garantiza variedad completa: en tanda mixta ("all"), los posesivos (mein, dein,
// sein, ihr, unser, euer) y los indeterminados/negativos (ein, kein) tienen fuerte
// presencia para que no sea solo "der/die/das".
export function pickKasus(n = 12, filtro = 'all') {
  const prog = progreso();
  const pool = todasLasFrases();
  if (!pool.length) return [];

  const puntos = (f) => {
    const p = prog[f.id];
    if (!p) return 1;                  // sin ver: despues de las falladas
    if (p.wrong >= p.correct) return 0; // fallada o dudosa: maxima prioridad
    return 2 + p.correct;               // cuanto mas la aciertas, mas atras
  };

  const sortByPriority = (list) =>
    [...list]
      .map((f) => ({ f, k: puntos(f) + Math.random() * 0.85 }))
      .sort((a, b) => a.k - b.k)
      .map((x) => x.f);

  // Helper para repartir subconjunto entre tipos de artículos con cuotas equilibradas
  function pickBalancedArticles(subPool, count) {
    if (!subPool.length || count <= 0) return [];
    const poss = subPool.filter((f) => ['mein', 'dein', 'sein', 'ihr', 'unser', 'euer'].includes(f.artType));
    const einList = subPool.filter((f) => f.artType === 'ein');
    const keinList = subPool.filter((f) => f.artType === 'kein');
    const bestList = subPool.filter((f) => f.artType === 'bestimmt');

    const nPoss = Math.max(1, Math.round(count * 0.40));
    const nEin = Math.max(1, Math.round(count * 0.20));
    const nKein = Math.max(1, Math.round(count * 0.20));
    const nBest = Math.max(1, count - nPoss - nEin - nKein);

    let res = [
      ...sortByPriority(poss).slice(0, nPoss),
      ...sortByPriority(einList).slice(0, nEin),
      ...sortByPriority(keinList).slice(0, nKein),
      ...sortByPriority(bestList).slice(0, nBest)
    ];

    if (res.length < count) {
      const idSet = new Set(res.map((s) => s.id));
      const rem = sortByPriority(subPool.filter((f) => !idSet.has(f.id)));
      res = [...res, ...rem.slice(0, count - res.length)];
    }
    return res.slice(0, count);
  }

  let selected = [];

  if (filtro && filtro !== 'all') {
    if (['Nominativ', 'Akkusativ', 'Dativ'].includes(filtro)) {
      const byCase = pool.filter((f) => f.kasus === filtro);
      selected = pickBalancedArticles(byCase, n);
    } else if (filtro === 'possessiv') {
      const filtered = pool.filter((f) => ['mein', 'dein', 'sein', 'ihr', 'unser', 'euer'].includes(f.artType));
      const nNom = Math.max(1, Math.floor(n / 3));
      const nAkk = Math.max(1, Math.floor(n / 3));
      const nDat = Math.max(1, n - nNom - nAkk);
      const nomList = filtered.filter((f) => f.kasus === 'Nominativ');
      const akkList = filtered.filter((f) => f.kasus === 'Akkusativ');
      const datList = filtered.filter((f) => f.kasus === 'Dativ');
      selected = [
        ...sortByPriority(nomList).slice(0, nNom),
        ...sortByPriority(akkList).slice(0, nAkk),
        ...sortByPriority(datList).slice(0, nDat)
      ];
      if (selected.length < n) {
        const idSet = new Set(selected.map((s) => s.id));
        const rem = sortByPriority(filtered.filter((f) => !idSet.has(f.id)));
        selected = [...selected, ...rem.slice(0, n - selected.length)];
      }
    } else {
      // bestimmt, ein, kein
      const filtered = pool.filter((f) => f.artType === filtro);
      const nNom = Math.max(1, Math.floor(n / 3));
      const nAkk = Math.max(1, Math.floor(n / 3));
      const nDat = Math.max(1, n - nNom - nAkk);
      const nomList = filtered.filter((f) => f.kasus === 'Nominativ');
      const akkList = filtered.filter((f) => f.kasus === 'Akkusativ');
      const datList = filtered.filter((f) => f.kasus === 'Dativ');
      selected = [
        ...sortByPriority(nomList).slice(0, nNom),
        ...sortByPriority(akkList).slice(0, nAkk),
        ...sortByPriority(datList).slice(0, nDat)
      ];
      if (selected.length < n) {
        const idSet = new Set(selected.map((s) => s.id));
        const rem = sortByPriority(filtered.filter((f) => !idSet.has(f.id)));
        selected = [...selected, ...rem.slice(0, n - selected.length)];
      }
    }
  } else {
    // filtro === 'all': GARANTIZAR presencia equilibrada de los 3 casos (Nominativ, Akkusativ, Dativ)
    const nNom = Math.max(1, Math.floor(n / 3));
    const nAkk = Math.max(1, Math.floor(n / 3));
    const nDat = Math.max(1, n - nNom - nAkk);

    const nomPool = pool.filter((f) => f.kasus === 'Nominativ');
    const akkPool = pool.filter((f) => f.kasus === 'Akkusativ');
    const datPool = pool.filter((f) => f.kasus === 'Dativ');

    selected = [
      ...pickBalancedArticles(nomPool, nNom),
      ...pickBalancedArticles(akkPool, nAkk),
      ...pickBalancedArticles(datPool, nDat)
    ];

    if (selected.length < n) {
      const idSet = new Set(selected.map((s) => s.id));
      const rem = sortByPriority(pool.filter((f) => !idSet.has(f.id)));
      selected = [...selected, ...rem.slice(0, n - selected.length)];
    }
  }

  // Barajar para que no salgan por bloques
  for (let i = selected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selected[i], selected[j]] = [selected[j], selected[i]];
  }

  return selected
    .slice(0, n)
    .map((x) => ({ ...x, es: tc(x.es), por: tc(x.por) }));
}

// ---- progreso ---------------------------------------------------------------
const CLAVE = 'kasus:progreso';

function progreso() {
  return storage.get(CLAVE, {});
}

export function recordKasus(id, ok) {
  storage.update(CLAVE, {}, (p) => {
    const c = p[id] || { correct: 0, wrong: 0, strength: 0 };
    if (ok) {
      c.correct += 1;
      c.strength = Math.min(6, (c.strength != null ? c.strength : 0) + 1);
    } else {
      c.wrong += 1;
      c.strength = Math.max(0, (c.strength != null ? c.strength : 0) - 1);
    }
    p[id] = c;
    return p;
  });
}

// Para la tarjeta: cuántas dominas (fuerza 3 o más).
export function kasusStats(filtro = 'all') {
  const prog = progreso();
  const pool = filtro === 'all'
    ? todasLasFrases()
    : todasLasFrases().filter((f) => {
        if (['Nominativ', 'Akkusativ', 'Dativ'].includes(filtro)) return f.kasus === filtro;
        if (filtro === 'possessiv') return ['mein', 'dein', 'sein', 'ihr', 'unser', 'euer'].includes(f.artType);
        return f.artType === filtro;
      });
  let dominadas = 0;
  let empezadas = 0;
  for (const f of pool) {
    const p = prog[f.id];
    if (!p || p.correct + p.wrong === 0) continue;
    empezadas += 1;
    const fuerza = p.strength != null ? p.strength : (p.correct - p.wrong);
    if (fuerza >= 3) dominadas += 1;
  }
  return {
    total: pool.length,
    dominadas,
    empezadas,
    pct: Math.round((dominadas / Math.max(1, pool.length)) * 100)
  };
}
