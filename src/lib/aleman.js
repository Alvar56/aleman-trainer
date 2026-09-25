// El alemán que aparece DENTRO de una explicación en castellano o en inglés.
//
// Las explicaciones están escritas mezclando los dos idiomas ("Detrás de sein
// el adjetivo no cambia", "der Tisch (la mesa)"), y el alemán se leía igual
// que el resto: una palabra rara en medio de una frase normal. En cursiva se
// ve de un vistazo qué es el idioma que estás aprendiendo y qué es la
// explicación.
//
// No se marca a mano: son más de mil ochocientas explicaciones. Se reconoce
// con el propio vocabulario del libro, que es justo el alemán del que hablan.

import { BAENDE, getLektion } from './kursbuch/index.js';

// Palabras que están en el libro y TAMBIÉN son palabras corrientes en
// castellano o en inglés. Si se marcaran, media explicación saldría en
// cursiva: "es", "in", "man", "die", "hat", "kind", "plural"…
//
// Estas pueden entrar igualmente en cursiva, pero solo si están rodeadas de
// alemán ("Ich wohne in Wien"): ahí ya no hay duda de qué idioma son.
const AMBIGUAS = new Set([
  // inglés
  'in', 'an', 'am', 'so', 'is', 'it', 'he', 'we', 'die', 'man', 'hat', 'kind',
  'will', 'was', 'war', 'bald', 'gut', 'end', 'ist', 'also', 'fast', 'hut',
  'art', 'arm', 'band', 'hand', 'ring', 'rot', 'not', 'mit', 'bank', 'film',
  'test', 'sport', 'name', 'ball', 'bus', 'taxi', 'hotel', 'radio', 'internet',
  'chat', 'link', 'laptop', 'tablet', 'handy', 'job', 'team', 'international',
  'normal', 'total', 'super', 'ok', 'okay', 'stop', 'tee', 'mama', 'papa',
  'opa', 'oma', 'euro', 'hallo', 'plural', 'singular', 'neutral', 'religion',
  'region', 'person', 'moment', 'minute', 'winter', 'sommer', 'ideal',
  'usa', 'see', 'app', 'serie', 'material', 'central', 'final', 'especial',
  // castellano
  'a', 'ah', 'al', 'as', 'da', 'de', 'den', 'des', 'di', 'do', 'el', 'en',
  'era', 'es', 'ese', 'esa', 'eso', 'este', 'ha', 'la', 'las', 'le', 'lo',
  'los', 'me', 'mi', 'mis', 'no', 'os', 'para', 'por', 'que', 'se', 'si',
  'sin', 'su', 'sus', 'te', 'tu', 'un', 'una', 'uno', 'ya', 'sea', 'ser',
  'sol', 'mar', 'pan', 'dar', 'dos', 'tres', 'leer', 'sal', 'ten', 'ven',
  'van', 'son', 'ron', 'ola', 'oro', 'ja'
]);

// Las que sí, siempre: son la gramática de la que hablan las explicaciones a
// todas horas, y en castellano y en inglés no significan nada.
const SIEMPRE = new Set([
  'der', 'das', 'dem', 'den', 'ein', 'eine', 'einen', 'einem', 'einer',
  'kein', 'keine', 'keinen', 'mein', 'meine', 'dein', 'deine', 'sein',
  'seine', 'ihre', 'jeder', 'jede', 'jedes', 'jeden', 'jedem', 'dieser',
  'diese', 'dieses', 'nicht', 'nichts', 'sie', 'wir', 'ihr', 'ich', 'du',
  'er', 'und', 'oder', 'aber', 'denn', 'weil', 'dass', 'wenn', 'zu', 'bei',
  'von', 'nach', 'aus', 'seit', 'für', 'ohne', 'gegen', 'um', 'auf', 'über',
  'unter', 'vor', 'hinter', 'neben', 'zwischen', 'haben', 'werden', 'können',
  'müssen', 'wollen', 'sollen', 'dürfen', 'mögen', 'möchte', 'wohnen',
  'heißen', 'kommen', 'machen', 'gehen', 'sehen', 'geben', 'nehmen',
  'wissen', 'kennen', 'sprechen', 'lernen', 'arbeiten', 'essen', 'trinken',
  'schlafen', 'fahren', 'laufen', 'bleiben', 'stehen', 'liegen', 'sitzen',
  'helfen', 'gefallen', 'gehören', 'sind', 'seid', 'bist', 'hast', 'habt'
]);

// Las letras alemanas no existen ni en castellano ni en inglés: lo que las
// lleva es alemán seguro, esté o no en el libro.
const PROPIAS = /[äöüßÄÖÜ]/;

let LEXICO = null;

// Todo el alemán del libro: el vocabulario, los ejemplos de las reglas y las
// frases de Kommunikation. Se arma una vez, la primera vez que hace falta.
function lexico() {
  if (LEXICO) return LEXICO;
  LEXICO = new Set();
  const meter = (frase) => {
    for (const bruto of String(frase || '').split(/[\s/·,;:.!?¿¡()"„“»«…]+/)) {
      const p = bruto.replace(/^[-–]+|[-–]+$/g, '');
      if (p.length >= 2) LEXICO.add(p.toLowerCase());
    }
  };
  for (const b of BAENDE) {
    for (const l of b.lektionen) {
      const lek = getLektion(l.id);
      if (!lek) continue;
      for (const t of lek.woerter || []) for (const it of t.items) meter(it.de);
      for (const r of lek.grammatik || []) {
        // El nombre de la regla tambien: 'Nominativ', 'Prateritum' o
        // 'Satzklammer' son aleman y salen en las explicaciones a cada paso.
        meter(r.regel);
        for (const e of r.beispiele || []) meter(e.de);
      }
      for (const k of lek.kommunikation || []) for (const w of k.wendungen || []) meter(w.de);
    }
  }
  for (const p of SIEMPRE) LEXICO.add(p);
  return LEXICO;
}

// 'seguro' = alemán sin discusión · 'quizas' = está en el libro pero también
// es una palabra de aquí · false = ni lo uno ni lo otro.
function clasificar(palabra, capitalizada) {
  const limpia = palabra.replace(/^[-–]+|[-–]+$/g, '');
  if (limpia.length < 2) return false;
  if (PROPIAS.test(limpia)) return 'seguro';
  const baja = limpia.toLowerCase();
  if (SIEMPRE.has(baja)) return 'seguro';
  if (!lexico().has(baja)) return false;
  if (AMBIGUAS.has(baja)) return 'quizas';
  // Tres letras o más, o en mayúscula a mitad de frase: en alemán los
  // sustantivos la llevan y en castellano no.
  return limpia.length >= 3 || capitalizada ? 'seguro' : 'quizas';
}

// Trocea el texto en partes normales y partes en alemán.
//
// Devuelve [{ de: false, texto }, { de: true, texto }, …] para que lo pinte
// quien quiera: aquí no se genera HTML.
export function trozosAleman(texto) {
  const s = String(texto || '');
  if (!s) return [];

  // Lo que va entre comillas españolas «…» es la PRONUNCIACIÓN escrita a la
  // española («vain», «tsait»): parece alemán y no lo es. Se aparta y se
  // devuelve al final, para que no lo miren ni las palabras ni los huecos.
  const guardadas = [];
  const conHuecos = s.replace(/«[^»]*»/g, (m) => {
    guardadas.push(m);
    return '\uE000' + (guardadas.length - 1) + '\uE001';
  });

  // Palabras y separadores, en orden y sin perder nada.
  // \p{L} y no [A-Za-zÄÖÜäöüß]: sin las vocales acentuadas del
  // castellano, "dirías" se partia en "dir" + "as" y "dir" SI esta en el libro.
  const piezas = conHuecos
    .split(/(\p{L}[\p{L}-]*)/u)
    .filter((x) => x !== '');

  let nPalabra = 0;
  const marcas = piezas.map((p) => {
    if (!/^\p{L}/u.test(p)) return { tipo: 'sep', texto: p };
    nPalabra += 1;
    const cap = /^[A-ZÄÖÜ]/.test(p) && nPalabra > 1;
    return { tipo: 'palabra', texto: p, clase: clasificar(p, cap) };
  });

  // Segunda pasada: una palabra dudosa dentro de una tirada alemana ES alemana.
  // "Ich wohne in Wien" lleva "in" en medio; "Wien es la ciudad", no.
  const esSeguro = (i) => marcas[i] && marcas[i].tipo === 'palabra' && marcas[i].clase === 'seguro';
  const vecino = (i, paso) => {
    for (let k = i + paso; k >= 0 && k < marcas.length; k += paso) {
      if (marcas[k].tipo === 'palabra') return k;
      // Un salto de frase corta la tirada: lo de después ya es otra cosa.
      if (/[.;:!?]|\n/.test(marcas[k].texto)) return -1;
    }
    return -1;
  };
  const ARTICULO = /^(die|Die)$/;
  marcas.forEach((m, i) => {
    if (m.tipo !== 'palabra' || m.clase !== 'quizas') return;
    const antes = vecino(i, -1);
    const despues = vecino(i, 1);
    // "die" es el articulo mas comun del aleman y a la vez un verbo ingles: con
    // una palabra alemana detras no hay duda de cual de los dos es.
    if (ARTICULO.test(m.texto) && esSeguro(despues)) { m.clase = 'seguro'; return; }
    // "in + dativo", "für + Akkusativ": la preposición con un signo + detrás es
    // la fórmula con la que se explica el caso, y ahí siempre es alemana.
    if (marcas[i + 1] && marcas[i + 1].tipo === 'sep' && /^\s*\+/.test(marcas[i + 1].texto)) {
      m.clase = 'seguro';
      return;
    }
    m.clase = esSeguro(antes) && esSeguro(despues) ? 'seguro' : false;
  });

  // Y los huecos entre dos palabras alemanas se van con ellas, para que
  // "der Tisch" salga como una sola cosa en cursiva y no como dos.
  const alemana = marcas.map((m, i) => {
    if (m.tipo === 'palabra') return m.clase === 'seguro';
    // Solo espacios: con el guion, "du" y el sufijo "-st" de al lado se pegaban
    // en una sola cursiva y parecian una palabra.
    if (!/^[ \t]+$/.test(m.texto)) return false;
    return esSeguro(vecino(i, -1)) && esSeguro(vecino(i, 1));
  });

  const out = [];
  marcas.forEach((m, i) => {
    const de = alemana[i];
    const ultimo = out[out.length - 1];
    if (ultimo && ultimo.de === de) ultimo.texto += m.texto;
    else out.push({ de, texto: m.texto });
  });

  return out.map((x) => ({
    de: x.de,
    texto: x.texto.replace(/\uE000(\d+)\uE001/g, (_, n) => guardadas[Number(n)])
  }));
}

// ¿Hay algo que marcar? Si no, quien lo pinte se ahorra el troceo.
export function tieneAleman(texto) {
  return trozosAleman(texto).some((x) => x.de);
}
