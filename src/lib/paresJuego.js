// Las parejas alemán/castellano de cada sección, para Emparejar y Blitz.
//
// Los dos juegos nacieron en Vocabulario y trabajan con lo mismo: una lista de
// { de, es }. Gramática y Kommunikation también tienen pares así, sólo que
// escondidos en otra forma —una frase con hueco y su solución, una expresión y
// lo que significa—, y lo único que hacía falta para poder jugarlos era
// sacarlos.
//
// Aquí sólo se construye la lista. Quién apunta el resultado lo decide cada
// pantalla, porque el progreso de cada sección va a su sitio: el de gramática
// por concepto, el de comunicación por apartado.

import { lektionKommunikation } from './kursbuch/index.js';

// Kommunikation: la frase alemana y su glosa. Se quedan fuera las que traen
// alternativas con "/" o "·" ("Hallo! · Servus!"), porque emparejar eso es
// emparejar tres frases a la vez, y las larguísimas, que en una casilla de
// Emparejar no caben.
export function paresDeKommunikation(lektion, { maxPalabras = 9 } = {}) {
  const out = [];
  for (const k of lektionKommunikation(lektion)) {
    for (const w of k.wendungen || []) {
      if (/[/·]/.test(w.de) || /[/·]/.test(w.es)) continue;
      if (w.de.split(/\s+/).length > maxPalabras) continue;
      out.push({ de: w.de, es: w.es, funktion: k.funktion });
    }
  }
  return out;
}

// Gramática: la frase con el hueco y la palabra que va dentro.
//
// Emparejar "Der Tisch ___ neu." con "ist" es exactamente lo que mide la
// regla, y además se lee de un vistazo, que es lo que pide este juego.
//
// Se piden ya montados (topic.frames) porque un frame puede generar la frase
// al vuelo.
//
// Una respuesta, una frase. En gramática la misma solución sale muchas veces
// ("der" en veinte huecos distintos), y dos casillas con la misma palabra no
// tienen una pareja correcta: da igual cuál unas, las dos valen. Antes se
// tiraban TODAS las repetidas y había lecciones que se quedaban en cuatro
// pares, por debajo de las seis que pide una ronda; quedándose con la primera
// de cada grupo no baja de dieciséis.
export function paresDeGramatica(topic, { max = 60 } = {}) {
  const porRespuesta = new Map();
  for (const fr of topic?.frames || []) {
    let it;
    try { it = fr.make(Math.random); } catch { continue; }
    if (!it || it.type !== 'mc' || !it.sentence || !it.answer) continue;
    if (!String(it.sentence).includes('___')) continue;
    if (porRespuesta.has(it.answer)) continue;
    porRespuesta.set(it.answer, { de: it.sentence, es: it.answer, conceptId: it.conceptId });
    if (porRespuesta.size >= max) break;
  }
  return [...porRespuesta.values()];
}
