// Motor de las plantillas: convierte las frases escritas a mano en "frames",
// que son las fábricas de ejercicios que consume src/engine/generator.js.
//
// Antes cada regla producía DOS fábricas (una de huecos y otra de ordenar) y
// el generador elegía entre ellas al azar. Eso tenía dos efectos malos:
//   · una regla con 15 huecos y 2 frases para ordenar sacaba la mitad de
//     ejercicios de ordenar, repitiendo esas dos frases hasta el aburrimiento;
//   · el juego "Ordena la frase" se quedaba sin material (2 frases por regla)
//     y las tandas salían cortas.
// Ahora cada frase es su propia fábrica: el azar reparte proporcional a lo que
// hay escrito, y el filtro de duplicados del generador funciona de verdad.

import { tc } from '../../contenido/index.js';
import { mc, order } from '../../../engine/helpers.js';
import { t } from '../../i18n.js';

// Enunciados en alemán, que es el idioma en el que se los va a encontrar en el
// examen. La traducción de cada frase ya viaja en el propio ejercicio.
// El enunciado lleva el aleman fijo (es el que veras en el examen) y la
// aclaracion en tu idioma. Antes la aclaracion estaba en castellano a pelo,
// asi que en la version inglesa salia media frase sin traducir.
const PROMPT_HUECO = () => 'Ergänzen Sie: ' + t('frames.pickOne');
const PROMPT_ORDEN = () => 'Ordnen Sie den Satz: ' + t('frames.orderIt');

// picks:  { s: frase con ___, a: correcta, d: [distractores], t: traducción, e: por qué }
// orders: { sol: [tokens], t, e }
export function framesDeRegla(d, conceptId) {
  if (!d) return [];
  const out = [];
  for (const x of d.picks || []) {
    out.push({
      make: (rng) =>
        mc(rng, {
          conceptId,
          prompt: PROMPT_HUECO(),
          sentence: x.s,
          correct: x.a,
          distractors: x.d,
          // La frase alemana no se toca; la traduccion y el por-que si.
          translation: tc(x.t),
          explanation: tc(x.e)
        })
    });
  }
  for (const x of d.orders || []) {
    out.push({
      make: (rng) =>
        order(rng, {
          conceptId,
          prompt: PROMPT_ORDEN(),
          solution: x.sol,
          translation: tc(x.t),
          explanation: tc(x.e)
        })
    });
  }
  return out;
}

// Junta los bloques temáticos en un único mapa key -> datos, avisando si dos
// bloques declaran la misma regla (sería un despiste al reorganizar, y el
// último ganaría en silencio).
export function unir(bloques) {
  const todo = {};
  for (const [nombre, datos] of Object.entries(bloques)) {
    for (const [key, val] of Object.entries(datos)) {
      if (todo[key]) {
        console.warn(`plantillas: la regla "${key}" está duplicada (${todo[key].__tema} y ${nombre})`);
      }
      todo[key] = { ...val, __tema: nombre };
    }
  }
  return todo;
}
