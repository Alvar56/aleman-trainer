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

import { mc, order, cloze } from '../../../engine/helpers.js';
import { t } from '../../i18n.js';

// Enunciados en alemán, que es el idioma en el que se los va a encontrar en el
// examen. La traducción de cada frase ya viaja en el propio ejercicio.
// El enunciado lleva el aleman fijo (es el que veras en el examen) y la
// aclaracion en tu idioma. Antes la aclaracion estaba en castellano a pelo,
// asi que en la version inglesa salia media frase sin traducir.
const PROMPT_HUECO = () => 'Ergänzen Sie: ' + t('frames.pickOne');
const PROMPT_ORDEN = () => 'Ordnen Sie den Satz: ' + t('frames.orderIt');
const PROMPT_TEXTO = () => 'Ergänzen Sie den Text: ' + t('frames.clozeIt');

// picks:  { s: frase con ___, a: correcta, d: [distractores], t: traducción, e: por qué }
// orders: { sol: [tokens], alt: [[otros tokens], ...] opcional, t, e }
// clozes: { txt: texto con varios ___, a: [respuestas en orden], extra: [senuelos], t, e }
// De dónde sale la cuarta opción de los tests.
//
// Una regla tiene su propio vocabulario: en `konjunktion-weil` se juega con
// weil, denn, el auxiliar y el participio; en `negativartikel-kein-e`, con
// kein/keine/keinen. Todo eso ya está escrito en sus ejercicios, así que la
// reserva son sus palabras y no hace falta inventarse nada.
//
// Primero los que en esta regla SOLO aparecen como señuelo: el autor ya los ha
// dado por malos ahí, así que es el material más seguro. Después el resto.
function reservaDeRegla(d) {
  const respuestas = new Set((d.picks || []).map((x) => String(x.a).toLowerCase()));
  const soloSenuelo = [];
  const tambienRespuesta = [];
  const vistos = new Set();

  const mete = (v, donde) => {
    const s = String(v || '').trim();
    const k = s.toLowerCase();
    if (!s || vistos.has(k)) return;
    vistos.add(k);
    donde.push(s);
  };

  for (const x of d.picks || []) {
    for (const y of x.d || []) {
      mete(y, respuestas.has(String(y).toLowerCase()) ? tambienRespuesta : soloSenuelo);
    }
  }
  // Reserva escrita a mano para la regla, cuando su paradigma es cerrado y no
  // da para cuatro: der/die/das solo son tres, y el cuarto que hace dudar de
  // verdad es el dativo (dem), que es el caso con el que se confunden. Se
  // guarda en el propio bloque de la regla, con `reserva: [...]`.
  //
  // Van las dos mayúsculas: el filtro de mc() exige que el señuelo empiece
  // como la respuesta, y estas palabras abren frase tan a menudo como no.
  // Ojo: aquí la clave es la palabra EXACTA y no su minúscula. Con la de
  // `mete` —que ignora la mayúscula, y hace bien: "Der" y "der" son el mismo
  // señuelo— de cada par solo sobrevivía uno, y los huecos que abren la frase
  // se quedaban sin candidato porque el suyo era el que se había perdido.
  const manual = new Set();
  for (const v of d.reserva || []) {
    const s = String(v || '').trim();
    if (!s) continue;
    manual.add(s[0].toUpperCase() + s.slice(1));
    manual.add(s[0].toLowerCase() + s.slice(1));
  }
  for (const s of manual) {
    if (!soloSenuelo.includes(s)) soloSenuelo.push(s);
  }

  for (const x of d.picks || []) mete(x.a, tambienRespuesta);

  return { seguros: soloSenuelo, otros: tambienRespuesta };
}

export function framesDeRegla(d, conceptId) {
  if (!d) return [];
  const out = [];
  const reserva = reservaDeRegla(d);
  for (const x of d.picks || []) {
    out.push({
      make: (rng) =>
        mc(rng, {
          conceptId,
          prompt: PROMPT_HUECO(),
          sentence: x.s,
          correct: x.a,
          distractors: x.d,
          reserva,
          // La frase alemana no se toca. La traduccion y el por-que van en
          // CASTELLANO, que es la clave del diccionario: se traducen al
          // pintarlos, no aqui. Asi, si cambias de idioma con la tanda
          // empezada, el ejercicio que tienes delante cambia con ella.
          translation: x.t,
          explanation: x.e
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
          // Otras colocaciones que también valen (Vorfeld movido, etc.).
          alt: x.alt,
          translation: x.t,
          explanation: x.e
        })
    });
  }
  // Textos con varios huecos: cuentan como UN ejercicio aunque tengan cuatro
  // huecos, porque se corrigen juntos. Son los que de verdad piden entender la
  // regla en contexto y no acertar una palabra suelta.
  for (const x of d.clozes || []) {
    out.push({
      make: (rng) =>
        cloze(rng, {
          conceptId,
          prompt: PROMPT_TEXTO(),
          text: x.txt,
          answers: x.a,
          extras: x.extra || [],
          translation: x.t,
          explanation: x.e
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
