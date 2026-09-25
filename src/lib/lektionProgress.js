// Progreso por lección del libro: cuánto llevas del vocabulario y de la gramática.
// Vive aparte para no crear un import circular (vocab.js ya importa kursbuch).

import { lektionDecks, lektionTopic, KURSBUCH } from './kursbuch/index.js';
import { deckStats } from './vocab.js';
import { topicMastery, kommMastery } from './progress.js';

// Progreso de una Lektion. Devuelve porcentajes 0-100 y el detalle por bloque.
export function lektionProgress(lektion) {
  if (!lektion) return null;

  // --- vocabulario ---
  //
  // Con la MISMA regla que la barra de dentro del mazo: dos aciertos por
  // palabra. Antes esta contaba palabras acertadas alguna VEZ y la de dentro
  // pedia dos, asi que acertarlas todas una vez dejaba la leccion al 100% y
  // sus mazos al 50%. Dos barras que miden lo mismo tienen que decir lo
  // mismo; y de las dos reglas, la buena es la de dos: acertar una vez no es
  // saberse una palabra.
  //
  // Se suman los aciertos y lo que hace falta, no los porcentajes de cada
  // mazo: la media de porcentajes da de mas a los mazos pequeños.
  const decks = lektionDecks(lektion);
  let vAciertos = 0;
  let vNecesarios = 0;
  for (const d of decks) {
    const s = deckStats(d);
    vAciertos += s.aciertos;
    vNecesarios += s.necesarios;
  }
  const woerter = vNecesarios ? Math.round((vAciertos / vNecesarios) * 100) : null;

  // --- gramática: dominio medio de sus conceptos ---
  const topic = lektionTopic(lektion);
  const ids = topic?.concepts.map((c) => c.id) || [];
  const gm = ids.length ? topicMastery(ids) : null;
  const grammatik = gm ? gm.pct : null;

  // --- comunicación: bloques marcados como aprendidos ---
  const km = lektion.kommunikation && lektion.kommunikation.length ? kommMastery(lektion.id, lektion.kommunikation) : null;
  const kommunikation = km ? km.pct : null;

  // La media solo cuenta los bloques que esa lección tiene.
  const partes = [woerter, grammatik, kommunikation].filter((x) => x !== null);
  const total = partes.length ? Math.round(partes.reduce((a, b) => a + b, 0) / partes.length) : null;

  return {
    total,
    woerter,
    grammatik,
    kommunikation,
    woerterAciertos: vAciertos,
    woerterNecesarios: vNecesarios,
    grammatikPracticed: gm?.practiced || 0,
    grammatikTotal: ids.length,
    kommPracticed: km?.practiced || 0,
    kommTotal: km?.total || 0,
    empezada: (vAciertos > 0) || (gm?.practiced > 0) || (km?.practiced > 0)
  };
}

// Progreso de un tomo entero, ponderado por el tamaño de cada lección.
export function bandProgress(band) {
  const lek = band?.lektionen || [];
  let suma = 0;
  let n = 0;
  for (const l0 of lek) {
    const p = lektionProgress(KURSBUCH.lektionen.find((x) => x.id === l0.id));
    if (p?.total != null) {
      suma += p.total;
      n += 1;
    }
  }
  return n ? Math.round(suma / n) : 0;
}
