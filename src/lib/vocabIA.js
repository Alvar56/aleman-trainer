import { storage } from './storage.js';
import { getSettings, aiAvailable } from './settings.js';
import { ampliarVocabulario } from './ai.js';

// Palabras nuevas de la IA para mezclar en los juegos de vocabulario.
//
// Antes el mando de "parte de la sesión generada por IA" solo tocaba el test
// de gramática: los seis juegos de vocabulario tiraban siempre del mazo tal
// cual. Ahora, con el mando por encima de cero, una parte de las palabras de
// cada partida son del mismo campo semántico pero no están en el libro.
//
// Se guarda en local a propósito. Pedirle palabras a la IA cada vez que
// arrancas una partida es una llamada por partida, y en una tarde de juegos
// eso es la cuota entera; así se pide una vez por mazo y se reutiliza.

const CLAVE = 'vocabIA';
const CADUCA = 1000 * 60 * 60 * 24 * 30; // un mes

function guardadas() {
  return storage.get(CLAVE, {});
}

// Las palabras que ya tiene guardadas ese mazo, si no han caducado.
export function extrasDe(deckId) {
  const g = guardadas()[deckId];
  if (!g || !g.woerter?.length) return [];
  if (Date.now() - (g.fecha || 0) > CADUCA) return [];
  return g.woerter;
}

export function olvidarExtras(deckId = null) {
  if (deckId === null) return storage.remove(CLAVE);
  storage.update(CLAVE, {}, (p) => {
    delete p[deckId];
    return p;
  });
}

// Cuántas palabras de IA le tocan a una partida de `size` preguntas.
export function cuantasIA(size, share = null) {
  const s = getSettings();
  const parte = share ?? s.aiShare ?? 0;
  if (parte <= 0) return 0;
  return Math.min(12, Math.max(1, Math.round(size * parte)));
}

// El mazo que ve el juego: el de siempre más las palabras de la IA.
//
// Las palabras nuevas llevan `ia: true`. No entran en el porcentaje del mazo
// -deckStats recorre las cartas del mazo de verdad, y estas no están ahí-,
// así que jugar con ellas no infla ni hunde el progreso del libro.
export async function mazoConIA(deck, { size = 12 } = {}) {
  const s = getSettings();
  const n = cuantasIA(size);
  if (!deck || n === 0 || !aiAvailable(s)) return deck;

  let extra = extrasDe(deck.id);

  if (!extra.length) {
    try {
      const res = await ampliarVocabulario({
        tema: deck.name,
        niveau: deck.bandName || 'A2',
        yaTengo: (deck.cards || []).map((c) => c.de).slice(0, 60)
      });
      extra = (res?.woerter || []).filter((w) => w?.de && w?.es);
      if (extra.length) {
        storage.update(CLAVE, {}, (p) => {
          p[deck.id] = { fecha: Date.now(), woerter: extra };
          return p;
        });
      }
    } catch (e) {
      // Sin red, sin clave o con la cuota agotada se juega con el mazo de
      // siempre. Quedarse sin partida por esto sería absurdo.
      console.warn('No se pudieron pedir palabras nuevas:', e.message);
      return deck;
    }
  }

  if (!extra.length) return deck;

  const cartas = extra.slice(0, n).map((w) => ({
    de: w.de,
    es: w.es,
    ex: w.ex || '',
    exEs: w.exEs || '',
    nota: w.nota || '',
    ia: true
  }));

  return { ...deck, cards: [...deck.cards, ...cartas], iaCount: cartas.length };
}
