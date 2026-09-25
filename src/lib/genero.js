// La pista del juego der / die / das.
//
// El género es lo más difícil del alemán para un hispanohablante, y hasta
// ahora el juego no daba nada: o te la sabías o fallabas. Pero el género no es
// del todo azar: hay terminaciones que lo deciden siempre, y aprenderlas vale
// más que memorizar palabra a palabra.
//
// La pista NUNCA dice el artículo. Dice la REGLA, que es lo que se queda:
// "-ung → die" sirve para las otras doscientas palabras en -ung.
//
// Solo están las terminaciones que se cumplen de verdad. La tentación era
// meter -er (der Lehrer, der Computer) y -e (die Lampe, die Blume), pero en el
// vocabulario del A2 conviven con das Fenster, das Zimmer, das Messer, der
// Name y das Auge: una pista que falla una de cada cinco veces es peor que no
// tener pista, porque te hace dudar de la regla cuando la regla era buena.
// Para esas, `pistaGenero` devuelve el otro tipo de ayuda: descartar uno.

const REGLAS = [
  // --- das -----------------------------------------------------------------
  { fin: 'chen', art: 'das', es: 'Todo lo acabado en -chen es das (es un diminutivo): das Mädchen, das Brötchen.', en: 'Anything ending in -chen is das (it is a diminutive): das Mädchen, das Brötchen.' },
  { fin: 'lein', art: 'das', es: 'Todo lo acabado en -lein es das (otro diminutivo): das Fräulein.', en: 'Anything ending in -lein is das (another diminutive): das Fräulein.' },
  { fin: 'ment', art: 'das', es: 'Las palabras en -ment son das: das Dokument, das Instrument.', en: 'Words ending in -ment are das: das Dokument, das Instrument.' },
  { fin: 'tum', art: 'das', es: 'Las palabras en -tum son das: das Eigentum, das Wachstum.', en: 'Words ending in -tum are das: das Eigentum, das Wachstum.' },
  { fin: 'um', art: 'das', es: 'Las palabras en -um son das: das Museum, das Zentrum, das Datum.', en: 'Words ending in -um are das: das Museum, das Zentrum, das Datum.' },
  { fin: 'nis', art: 'das', es: 'Las palabras en -nis son das casi siempre: das Ergebnis, das Erlebnis.', en: 'Words ending in -nis are almost always das: das Ergebnis, das Erlebnis.' },

  // --- die -----------------------------------------------------------------
  { fin: 'ung', art: 'die', es: 'Todo lo acabado en -ung es die: die Wohnung, die Zeitung, die Übung.', en: 'Anything ending in -ung is die: die Wohnung, die Zeitung, die Übung.' },
  { fin: 'heit', art: 'die', es: 'Todo lo acabado en -heit es die: die Gesundheit, die Freiheit.', en: 'Anything ending in -heit is die: die Gesundheit, die Freiheit.' },
  { fin: 'keit', art: 'die', es: 'Todo lo acabado en -keit es die: die Möglichkeit, die Schwierigkeit.', en: 'Anything ending in -keit is die: die Möglichkeit, die Schwierigkeit.' },
  { fin: 'schaft', art: 'die', es: 'Todo lo acabado en -schaft es die: die Mannschaft, die Freundschaft.', en: 'Anything ending in -schaft is die: die Mannschaft, die Freundschaft.' },
  { fin: 'tion', art: 'die', es: 'Las palabras en -tion son die: die Station, die Information.', en: 'Words ending in -tion are die: die Station, die Information.' },
  { fin: 'sion', art: 'die', es: 'Las palabras en -sion son die: die Diskussion, die Explosion.', en: 'Words ending in -sion are die: die Diskussion, die Explosion.' },
  { fin: 'tät', art: 'die', es: 'Las palabras en -tät son die: die Universität, die Qualität.', en: 'Words ending in -tät are die: die Universität, die Qualität.' },
  { fin: 'erin', art: 'die', es: '-in es la forma femenina de una persona, así que es die: die Lehrerin, die Ärztin.', en: '-in is the feminine form of a person, so it is die: die Lehrerin, die Ärztin.' },
  { fin: 'ei', art: 'die', es: 'Las palabras en -ei son die: die Bäckerei, die Metzgerei.', en: 'Words ending in -ei are die: die Bäckerei, die Metzgerei.' },
  { fin: 'ie', art: 'die', es: 'Las palabras en -ie son die: die Familie, die Industrie.', en: 'Words ending in -ie are die: die Familie, die Industrie.' },
  { fin: 'ik', art: 'die', es: 'Las palabras en -ik son die: die Musik, die Politik.', en: 'Words ending in -ik are die: die Musik, die Politik.' },
  { fin: 'ur', art: 'die', es: 'Las palabras en -ur son die: die Natur, die Kultur.', en: 'Words ending in -ur are die: die Natur, die Kultur.' },
  { fin: 'anz', art: 'die', es: 'Las palabras en -anz son die: die Toleranz, die Distanz.', en: 'Words ending in -anz are die: die Toleranz, die Distanz.' },
  { fin: 'enz', art: 'die', es: 'Las palabras en -enz son die: die Konferenz, die Konsequenz.', en: 'Words ending in -enz are die: die Konferenz, die Konsequenz.' },

  // --- der -----------------------------------------------------------------
  { fin: 'ismus', art: 'der', es: 'Las palabras en -ismus son der: der Tourismus, der Kapitalismus.', en: 'Words ending in -ismus are der: der Tourismus, der Kapitalismus.' },
  { fin: 'ling', art: 'der', es: 'Las palabras en -ling son der: der Frühling, der Lehrling.', en: 'Words ending in -ling are der: der Frühling, der Lehrling.' },
  { fin: 'ant', art: 'der', es: 'Las palabras en -ant son der: der Praktikant, der Elefant.', en: 'Words ending in -ant are der: der Praktikant, der Elefant.' },
  { fin: 'ent', art: 'der', es: 'Las palabras en -ent son der: der Student, der Patient.', en: 'Words ending in -ent are der: der Student, der Patient.' },
  { fin: 'ist', art: 'der', es: 'Las palabras en -ist son der: der Tourist, der Polizist.', en: 'Words ending in -ist are der: der Tourist, der Polizist.' },
  { fin: 'or', art: 'der', es: 'Las palabras en -or son der: der Motor, der Doktor.', en: 'Words ending in -or are der: der Motor, der Doktor.' },
  // Va despues de -ur a proposito: -eur es frances y da der (der Friseur,
  // der Ingenieur). Como se busca la terminacion mas larga primero, gana.
  { fin: 'eur', art: 'der', es: 'Las palabras en -eur son der: der Friseur, der Ingenieur.', en: 'Words ending in -eur are der: der Friseur, der Ingenieur.' }
];

// Los días, los meses y las estaciones son todos der. No es una terminación,
// así que van por lista.
const DER_TIEMPO = [
  'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag',
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
  'September', 'Oktober', 'November', 'Dezember',
  'Frühling', 'Sommer', 'Herbst', 'Winter', 'Tag', 'Monat', 'Morgen', 'Abend'
];

// Palabras en las que la terminacion no es una terminacion, sino un trozo de
// la raiz: "Knochen" no es el diminutivo de nada, y un "Weitsprung" es un
// "Sprung". Se comprobo una a una contra las 505 palabras de la app.
const EXCEPCIONES = new Set(['Knochen', 'Kuchen', 'Drachen', 'Rachen', 'Laken']);
const RAICES = ['sprung', 'schwung', 'hunger', 'finger'];

const LIMPIA = /^(der|die|das)\s+/i;

export function limpiaNombre(x) {
  return String(x || '').replace(LIMPIA, '').trim();
}

// La regla que decide el género de esta palabra, si la hay.
// Devuelve { tipo: 'regla', art, es, en } o null.
export function reglaDe(palabra) {
  const w = limpiaNombre(palabra);
  if (!w) return null;
  const bajo = w.toLowerCase();
  if (DER_TIEMPO.includes(w)) {
    return {
      tipo: 'regla',
      art: 'der',
      es: 'Los días, los meses y las estaciones son todos der: der Montag, der Mai, der Sommer.',
      en: 'Days, months and seasons are all der: der Montag, der Mai, der Sommer.'
    };
  }
  if (EXCEPCIONES.has(w)) return null;
  if (RAICES.some((x) => bajo.endsWith(x))) return null;
  // La más larga primero: "die Zeitung" tiene que dar -ung y no -ng.
  const orden = [...REGLAS].sort((a, b) => b.fin.length - a.fin.length);
  for (const r of orden) {
    // Y tiene que quedar raiz delante: sin esto "das Ei" cae en -ei, "das
    // Knie" en -ie y "die Frist" en -ist. La terminacion no es la palabra.
    if (bajo.endsWith(r.fin) && w.length >= r.fin.length + 3) return { tipo: 'regla', ...r };
  }
  return null;
}

// La pista que se enseña. Si hay regla, la regla; si no, se descarta uno de
// los dos artículos equivocados, que deja la duda en dos y no en tres.
//
// `aleatorio` se inyecta para poder probarlo.
export function pistaGenero(palabra, correcto, aleatorio = Math.random) {
  const r = reglaDe(palabra);
  if (r) return r;
  const sobran = ['der', 'die', 'das'].filter((a) => a !== correcto);
  const fuera = sobran[Math.floor(aleatorio() * sobran.length)];
  return { tipo: 'descarte', fuera };
}
