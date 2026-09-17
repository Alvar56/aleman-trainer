// Plantillas de ejercicios escritas a mano: el núcleo de la app cuando no hay
// IA (y también cuando la hay, porque la IA solo completa lo que ya existe).
//
// Están repartidas POR TEMÁTICA, no por lección: una misma regla aparece en
// varias Lektionen del libro y así se escribe y se revisa una sola vez, con
// todo el tema delante. Cada bloque exporta un mapa `key -> { picks, orders }`
// y aquí se unen en uno solo.
//
//   picks:  { s: frase con ___, a: correcta, d: [2 distractores], t, e }
//   orders: { sol: [tokens], t, e }
//
// La key es la de la regla en a11/a12/a21.js (o el slug de su nombre).

import { framesDeRegla, unir } from './_motor.js';

import { FRASE } from './frase.js';
import { VERBOS } from './verbos.js';
import { MODALES } from './modales.js';
import { PASADO } from './pasado.js';
import { ARTICULOS } from './articulos.js';
import { PRONOMBRES } from './pronombres.js';
import { PREP_TIEMPO } from './prep-tiempo.js';
import { PREP_LUGAR } from './prep-lugar.js';
import { WECHSEL } from './wechsel.js';
import { NOMBRES } from './nombres.js';

export const TEMAS = {
  'La frase': FRASE,
  'El verbo': VERBOS,
  'Modales y cortesía': MODALES,
  'El pasado': PASADO,
  'Artículos': ARTICULOS,
  'Pronombres y dativo': PRONOMBRES,
  'Preposiciones de tiempo': PREP_TIEMPO,
  'Preposiciones de lugar': PREP_LUGAR,
  'Wechselpräpositionen': WECHSEL,
  'Nombres y adjetivos': NOMBRES
};

export const DATA = unir(TEMAS);

// Los frames que consume el motor de ejercicios (src/engine/generator.js).
export function framesForRule(key, conceptId) {
  return framesDeRegla(DATA[key], conceptId);
}

export function hasFrames(key) {
  return !!DATA[key];
}

// Cuántas frases hay escritas para una regla. La usa la pantalla de la lección
// para saber si puede ofrecer práctica sin IA y con cuánta variedad.
export function frameCount(key) {
  const d = DATA[key];
  if (!d) return { picks: 0, orders: 0, total: 0 };
  const picks = d.picks?.length || 0;
  const orders = d.orders?.length || 0;
  return { picks, orders, total: picks + orders };
}
