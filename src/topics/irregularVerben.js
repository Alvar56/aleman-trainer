import { mc, order } from '../engine/helpers.js';
import { pick, shuffle } from '../lib/rng.js';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Presente con cambio de raiz en du / er-sie-es. g: 'e-i' | 'e-ie' | 'a-ä'
const PRES = [
  { inf: 'essen', g: 'e-i', du: 'isst', er: 'isst', imp: 'Iss', wrong: ['esst', 'esset'], mid: ['in', 'der', 'Kantine', 'meistens', 'nur', 'einen', 'Salat'], es2: 'comes', es3: 'come', midEs: 'casi siempre solo una ensalada en la cantina' },
  { inf: 'geben', g: 'e-i', du: 'gibst', er: 'gibt', imp: 'Gib', wrong: ['gebst', 'gebt'], mid: ['mir', 'zum', 'Abschied', 'die', 'Hand'], es2: 'das', es3: 'da', midEs: 'la mano al despedirse' },
  { inf: 'sprechen', g: 'e-i', du: 'sprichst', er: 'spricht', imp: 'Sprich', wrong: ['sprechst', 'sprecht'], mid: ['fließend', 'Englisch', 'und', 'ein', 'bisschen', 'Französisch'], es2: 'hablas', es3: 'habla', midEs: 'inglés con fluidez y un poco de francés' },
  { inf: 'nehmen', g: 'e-i', du: 'nimmst', er: 'nimmt', imp: 'Nimm', wrong: ['nehmst', 'nehmt'], mid: ['für', 'den', 'Weg', 'zur', 'Arbeit', 'die', 'U-Bahn'], es2: 'coges', es3: 'coge', midEs: 'el metro para ir al trabajo' },
  { inf: 'helfen', g: 'e-i', du: 'hilfst', er: 'hilft', imp: 'Hilf', wrong: ['helfst', 'helft'], mid: ['den', 'älteren', 'Nachbarn', 'oft', 'beim', 'Einkaufen'], es2: 'ayudas', es3: 'ayuda', midEs: 'a menudo a los vecinos mayores con la compra' },
  { inf: 'treffen', g: 'e-i', du: 'triffst', er: 'trifft', imp: 'Triff', wrong: ['treffst', 'trefft'], mid: ['ein', 'paar', 'alte', 'Kollegen', 'im', 'Café'], es2: 'quedas con', es3: 'queda con', midEs: 'a un par de excompañeros en la cafetería' },
  { inf: 'sehen', g: 'e-ie', du: 'siehst', er: 'sieht', imp: 'Sieh', wrong: ['sehst', 'seht'], mid: ['ohne', 'Brille', 'die', 'Untertitel', 'kaum'], es2: 'ves', es3: 've', midEs: 'apenas los subtítulos sin gafas' },
  { inf: 'lesen', g: 'e-ie', du: 'liest', er: 'liest', imp: 'Lies', wrong: ['lesst', 'liesst'], mid: ['im', 'Bett', 'noch', 'ein', 'paar', 'Seiten'], es2: 'lees', es3: 'lee', midEs: 'unas páginas más en la cama' },
  { inf: 'empfehlen', g: 'e-ie', du: 'empfiehlst', er: 'empfiehlt', imp: 'Empfiehl', wrong: ['empfehlst', 'empfehlt'], mid: ['mir', 'ein', 'gutes', 'Restaurant', 'in', 'der', 'Nähe'], es2: 'recomiendas', es3: 'recomienda', midEs: 'un buen restaurante cerca' },
  { inf: 'fahren', g: 'a-ä', du: 'fährst', er: 'fährt', imp: 'Fahr', wrong: ['fahrst', 'fahrt'], mid: ['bei', 'jedem', 'Wetter', 'mit', 'dem', 'Rad', 'ins', 'Büro'], es2: 'vas', es3: 'va', midEs: 'en bici a la oficina haga el tiempo que haga' },
  { inf: 'schlafen', g: 'a-ä', du: 'schläfst', er: 'schläft', imp: 'Schlaf', wrong: ['schlafst', 'schlaft'], mid: ['im', 'Zug', 'nie', 'besonders', 'gut'], es2: 'duermes', es3: 'duerme', midEs: 'nunca especialmente bien en el tren' },
  { inf: 'tragen', g: 'a-ä', du: 'trägst', er: 'trägt', imp: 'Trag', wrong: ['tragst', 'tragt'], mid: ['bei', 'wichtigen', 'Terminen', 'einen', 'dunklen', 'Anzug'], es2: 'llevas', es3: 'lleva', midEs: 'traje oscuro en las citas importantes' },
  { inf: 'laufen', g: 'a-ä', du: 'läufst', er: 'läuft', imp: 'Lauf', wrong: ['laufst', 'lauft'], mid: ['vor', 'der', 'Arbeit', 'eine', 'große', 'Runde', 'im', 'Park'], es2: 'corres', es3: 'corre', midEs: 'una vuelta larga por el parque antes del trabajo' },
  { inf: 'waschen', g: 'a-ä', du: 'wäschst', er: 'wäscht', imp: 'Wasch', wrong: ['waschst', 'wascht'], mid: ['das', 'Auto', 'lieber', 'selbst', 'als', 'in', 'der', 'Waschanlage'], es2: 'lavas', es3: 'lava', midEs: 'el coche a mano antes que en el túnel de lavado' },
  { inf: 'halten', g: 'a-ä', du: 'hältst', er: 'hält', imp: 'Halt', wrong: ['haltst', 'haltet'], mid: ['auf', 'langen', 'Fahrten', 'oft', 'an', 'einer', 'Raststätte'], es2: 'paras', es3: 'para', midEs: 'a menudo en un área de servicio en los viajes largos' }
];

const PRES_SUBJ = [
  { de: 'du', k: 'du', es: 'tú' },
  { de: 'meine Kollegin', k: 'er', es: 'mi compañera' },
  { de: 'mein Nachbar', k: 'er', es: 'mi vecino' },
  { de: 'der neue Praktikant', k: 'er', es: 'el nuevo becario' },
  { de: 'sie', k: 'er', es: 'ella' }
];

const GEX = {
  'e-i': 'Cambio de vocal e → i en las formas de "du" y "er/sie/es": ',
  'e-ie': 'Cambio de vocal e → ie en "du" y "er/sie/es": ',
  'a-ä': 'La vocal de la raíz recibe Umlaut (a → ä) en "du" y "er/sie/es": '
};

// Präteritum (1ª y 3ª persona del singular, iguales)
const PRAET = [
  { inf: 'gehen', form: 'ging', wrong: ['gegangen', 'gehte'], mid: ['nach', 'dem', 'Streit', 'früh', 'nach', 'Hause'], midEs: 'a casa pronto después de la discusión', ppEs: 'me fui' },
  { inf: 'kommen', form: 'kam', wrong: ['gekommen', 'kommte'], mid: ['wegen', 'des', 'Staus', 'zu', 'spät', 'zum', 'Termin'], midEs: 'tarde a la cita por el atasco', ppEs: 'llegué' },
  { inf: 'sehen', form: 'sah', wrong: ['gesehen', 'sehte'], mid: ['auf', 'dem', 'Heimweg', 'einen', 'kleinen', 'Unfall'], midEs: 'un accidente leve de camino a casa', ppEs: 'vi' },
  { inf: 'essen', form: 'aß', wrong: ['gegessen', 'esste'], mid: ['vor', 'lauter', 'Aufregung', 'fast', 'nichts'], midEs: 'casi nada de los nervios', ppEs: 'comí' },
  { inf: 'trinken', form: 'trank', wrong: ['getrunken', 'trinkte'], mid: ['zum', 'Frühstück', 'nur', 'einen', 'schwarzen', 'Kaffee'], midEs: 'solo un café solo para desayunar', ppEs: 'bebí' },
  { inf: 'fahren', form: 'fuhr', wrong: ['gefahren', 'fuhrte'], mid: ['am', 'Wochenende', 'mit', 'dem', 'Zug', 'nach', 'Köln'], midEs: 'en tren a Colonia el fin de semana', ppEs: 'fui' },
  { inf: 'geben', form: 'gab', wrong: ['gegeben', 'gebte'], mid: ['dem', 'Chef', 'zuerst', 'keine', 'klare', 'Antwort'], midEs: 'al jefe ninguna respuesta clara al principio', ppEs: 'di' },
  { inf: 'nehmen', form: 'nahm', wrong: ['genommen', 'nehmte'], mid: ['den', 'letzten', 'Zug', 'um', 'Mitternacht'], midEs: 'el último tren a medianoche', ppEs: 'cogí' },
  { inf: 'finden', form: 'fand', wrong: ['gefunden', 'findete'], mid: ['den', 'Schlüssel', 'zum', 'Glück', 'in', 'der', 'Jackentasche'], midEs: 'la llave por suerte en el bolsillo de la chaqueta', ppEs: 'encontré' },
  { inf: 'sprechen', form: 'sprach', wrong: ['gesprochen', 'sprechte'], mid: ['lange', 'mit', 'der', 'Ärztin', 'über', 'die', 'Ergebnisse'], midEs: 'largo rato con la médica sobre los resultados', ppEs: 'hablé' },
  { inf: 'schreiben', form: 'schrieb', wrong: ['geschrieben', 'schreibte'], mid: ['ihm', 'noch', 'am', 'selben', 'Abend', 'eine', 'lange', 'E-Mail'], midEs: 'un correo largo esa misma noche', ppEs: 'escribí' },
  { inf: 'bleiben', form: 'blieb', wrong: ['geblieben', 'bleibte'], mid: ['wegen', 'des', 'schlechten', 'Wetters', 'den', 'ganzen', 'Tag', 'zu', 'Hause'], midEs: 'todo el día en casa por el mal tiempo', ppEs: 'me quedé' }
];

const IMP_TIP = 'El imperativo de "du" usa la raíz sin -st y sin "du". Los verbos e→i mantienen el cambio ("Nimm!", "Sprich!", "Gib!"); los verbos a→ä NO ("Fahr!", no "Fähr!").';

// El sujeto de la frase C es aleman; su glosa vive aparte para que pase por
// tc() como cualquier otro trozo, en vez de ir encadenada en un ternario.
const SUJ_ES = {
  'mein Bruder': 'mi hermano',
  'meine Kollegin': 'mi compañera',
  'unser Nachbar': 'nuestro vecino',
  'die Praktikantin': 'la becaria'
};

const frames = [
  // A · presente con cambio de raíz (frase larga con contexto)
  {
    make(rng) {
      const subj = pick(rng, PRES_SUBJ);
      const v = pick(rng, PRES);
      const correct = v[subj.k];
      const regular = subj.k === 'du' ? `${v.inf.replace(/en$/, '')}st` : `${v.inf.replace(/en$/, '')}t`;
      const esVerb = subj.k === 'du' ? v.es2 : v.es3;
      return mc(rng, {
        conceptId: `irr:present:${v.g}`,
        prompt: t('tp.fillPresIrr'),
        sentence: `${cap(subj.de)} ___ ${v.mid.join(' ')}.`,
        correct,
        distractors: shuffle(rng, [...new Set(v.wrong)]).slice(0, 2),
        translation: t('tp.glossPlain', { s: cap(tc(subj.es)), v: tc(esVerb), m: tc(v.midEs) }),
        explanation: t('tp.irrPres', {
          g: tc(GEX[v.g]),
          inf: v.inf,
          p: subj.k === 'du' ? 'du' : 'er/sie/es',
          correct,
          regular
        })
      });
    }
  },
  // B · Präteritum en un contexto de relato (con causa/circunstancia)
  {
    make(rng) {
      const v = pick(rng, PRAET);
      return mc(rng, {
        conceptId: 'irr:praeteritum',
        prompt: t('tp.fillPraetTale'),
        sentence: `Gestern ___ ich ${v.mid.join(' ')}.`,
        correct: v.form,
        distractors: shuffle(rng, [...new Set(v.wrong)]).slice(0, 2),
        translation: t('tp.yesterdayGloss', { v: tc(v.ppEs), m: tc(v.midEs) }),
        explanation: t('tp.strongPraet', { inf: v.inf, form: v.form, part: v.wrong[0] })
      });
    }
  },
  // C · ordenar frase en presente (empieza por un adverbio de frase → inversión)
  {
    make(rng) {
      const v = pick(rng, PRES);
      const subj = pick(rng, ['mein Bruder', 'meine Kollegin', 'unser Nachbar', 'die Praktikantin']);
      const adv = pick(rng, [
        { de: 'Normalerweise', es: 'Normalmente' },
        { de: 'Meistens', es: 'Casi siempre' },
        { de: 'Zum Glück', es: 'Por suerte' },
        { de: 'Ehrlich gesagt', es: 'La verdad es que' }
      ]);
      const advWords = adv.de.split(' ');
      return order(rng, {
        conceptId: `irr:present:${v.g}`,
        prompt: t('tp.orderAdvFirst'),
        solution: [...advWords, v.er, ...subj.split(' '), ...v.mid],
        translation: t('tp.advGloss', {
          adv: tc(adv.es),
          s: tc(SUJ_ES[subj] || subj),
          v: tc(v.es3),
          m: tc(v.midEs)
        }),
        explanation: t('tp.advExpl', { adv: adv.de, er: v.er, inf: v.inf })
      });
    }
  },
  // D · imperativo de "du" (muy útil y ligado a estos verbos)
  {
    make(rng) {
      const pool = [
        { v: 'nehmen', a: 'Nimm', d: ['Nehm', 'Nimmst'], rest: 'lieber den Bus, die U-Bahn fährt heute nicht.', tr: 'Coge mejor el autobús, el metro hoy no funciona.' },
        { v: 'sprechen', a: 'Sprich', d: ['Sprech', 'Sprechst'], rest: 'bitte etwas lauter, ich verstehe dich kaum.', tr: 'Habla un poco más alto, por favor, casi no te oigo.' },
        { v: 'geben', a: 'Gib', d: ['Geb', 'Gibst'], rest: 'mir bitte kurz deinen Stift.', tr: 'Pásame un momento tu bolígrafo, por favor.' },
        { v: 'lesen', a: 'Lies', d: ['Les', 'Liest'], rest: 'dir die Aufgabe in Ruhe durch.', tr: 'Léete el ejercicio con calma.' },
        { v: 'essen', a: 'Iss', d: ['Ess', 'Isst'], rest: 'nicht so schnell, wir haben Zeit.', tr: 'No comas tan rápido, tenemos tiempo.' },
        { v: 'fahren', a: 'Fahr', d: ['Fähr', 'Fahrst'], rest: 'nicht so schnell, hier ist eine 30er-Zone!', tr: '¡No vayas tan rápido, esto es zona 30!' },
        { v: 'helfen', a: 'Hilf', d: ['Helf', 'Hilfst'], rest: 'mir mal kurz mit dem Koffer.', tr: 'Ayúdame un momento con la maleta.' }
      ];
      const x = pick(rng, pool);
      return mc(rng, {
        conceptId: 'irr:imperativ',
        prompt: t('tp.fillImpDu'),
        sentence: `___ ${x.rest}`,
        correct: x.a,
        distractors: x.d,
        translation: tc(x.tr),
        explanation: t('tp.impExpl', { tip: tc(IMP_TIP), a: x.a })
      });
    }
  }
];

export const theory = {
  intro:
    'Muchos verbos frecuentes cambian la vocal de la raíz. En presente el cambio ocurre SOLO en "du" y "er/sie/es". En Präteritum los verbos fuertes cambian de forma por completo. Pulsa cada bloque para ver la explicación completa y más ejemplos.',
  sections: [
    {
      title: 'Presente e → i',
      body: 'Cambian la e de la raíz por i, solo en "du" y "er/sie/es".',
      examples: [
        { de: 'essen: du isst, er isst', es: 'Er isst gerade zu Mittag.' },
        { de: 'geben: du gibst, er gibt', es: 'Sie gibt mir den Schlüssel.' }
      ],
      detail:
        'Verbos del grupo: essen (du isst), geben (du gibst), nehmen (du nimmst — además dobla la m y cambia la h), sprechen (du sprichst), helfen (du hilfst), treffen (du triffst), werfen, brechen, sterben, vergessen (du vergisst).\n\nEl resto de personas es regular: ich esse, wir essen, ihr esst, sie essen. En el imperativo de "du" también aparece el cambio y sin -e: "Iss!", "Nimm!", "Gib mir das!", "Sprich langsamer!", "Hilf mir!".',
      table: {
        title: 'Presente de "sprechen" (modelo e → i)',
        headers: ['persona', 'sprechen'],
        rows: [
          ['ich', 'spreche'],
          ['du', 'sprichst'],
          ['er / sie / es', 'spricht'],
          ['wir', 'sprechen'],
          ['ihr', 'sprecht'],
          ['sie / Sie', 'sprechen']
        ]
      },
      more: {
        examples: [
          { de: 'Nimmst du den Bus oder gehst du zu Fuß?', es: '¿Coges el autobús o vas a pie?' },
          { de: 'Er hilft seiner Mutter im Garten.', es: 'Ayuda a su madre en el jardín.' },
          { de: 'Sprichst du auch Französisch?', es: '¿Hablas también francés?' },
          { de: 'Sie vergisst nie einen Geburtstag.', es: 'Nunca olvida un cumpleaños.' },
          { de: 'Gib mir bitte kurz dein Handy.', es: 'Pásame un momento el móvil, por favor.' }
        ]
      }
    },
    {
      title: 'Presente e → ie',
      body: 'La e larga de la raíz se convierte en ie, en "du" y "er/sie/es".',
      examples: [
        { de: 'sehen: du siehst, er sieht', es: 'Er sieht abends fern.' },
        { de: 'lesen: du liest, er liest', es: 'Liest du gerade etwas Gutes?' }
      ],
      detail:
        'Grupo más pequeño: sehen (du siehst), lesen (du liest — no "liesst"), empfehlen (du empfiehlst), geschehen, stehlen. Como la vocal era larga, el resultado también es largo (ie).\n\nImperativo de "du": "Sieh mal!", "Lies das!". Cuidado con "lesen": la 3ª persona es "er liest" (una sola s antes de la -t).',
      table: {
        title: 'Presente de "sehen" y "lesen"',
        headers: ['persona', 'sehen', 'lesen'],
        rows: [
          ['ich', 'sehe', 'lese'],
          ['du', 'siehst', 'liest'],
          ['er / sie / es', 'sieht', 'liest'],
          ['wir', 'sehen', 'lesen'],
          ['ihr', 'seht', 'lest'],
          ['sie / Sie', 'sehen', 'lesen']
        ]
      },
      more: {
        examples: [
          { de: 'Was empfiehlst du mir auf der Karte?', es: '¿Qué me recomiendas de la carta?' },
          { de: 'Sie liest jeden Abend ihren Kindern vor.', es: 'Les lee a sus hijos todas las noches.' },
          { de: 'Man sieht von hier oben die ganze Stadt.', es: 'Desde aquí arriba se ve toda la ciudad.' },
          { de: 'Sieh dir das mal an!', es: '¡Mira esto!' }
        ]
      }
    },
    {
      title: 'Presente a → ä (y au → äu, o → ö)',
      body: 'La vocal de la raíz recibe Umlaut en "du" y "er/sie/es".',
      examples: [
        { de: 'fahren: du fährst, er fährt', es: 'Er fährt jeden Tag mit dem Rad zur Arbeit.' },
        { de: 'schlafen: du schläfst, er schläft', es: 'Das Baby schläft endlich.' }
      ],
      detail:
        'a → ä: fahren, schlafen, tragen, waschen, fallen, halten (du hältst), lassen (du lässt), einladen (du lädst ein), fangen, raten. au → äu: laufen (du läufst). o → ö: stoßen (du stößt). También "werden" es especial: du wirst, er wird.\n\nNo lo confundas con verbos regulares parecidos: "machen" no cambia (du machst), "sagen" no cambia. Y "halten" pierde una t: "du hältst", "er hält" (no "haltet").',
      table: {
        title: 'Presente de "fahren" y "laufen"',
        headers: ['persona', 'fahren', 'laufen'],
        rows: [
          ['ich', 'fahre', 'laufe'],
          ['du', 'fährst', 'läufst'],
          ['er / sie / es', 'fährt', 'läuft'],
          ['wir', 'fahren', 'laufen'],
          ['ihr', 'fahrt', 'lauft'],
          ['sie / Sie', 'fahren', 'laufen']
        ]
      },
      more: {
        examples: [
          { de: 'Trägst du die Tasche oder soll ich?', es: '¿Llevas tú la bolsa o la llevo yo?' },
          { de: 'Sie lädt uns zu ihrer Party ein.', es: 'Nos invita a su fiesta.' },
          { de: 'Der Bus hält direkt vor dem Haus.', es: 'El autobús para justo delante de casa.' },
          { de: 'Wäschst du dir vor dem Essen die Hände?', es: '¿Te lavas las manos antes de comer?' },
          { de: 'Wenn du so weiterläufst, fällst du noch.', es: 'Si sigues corriendo así, te vas a caer.' }
        ]
      }
    },
    {
      title: 'Präteritum de los verbos fuertes',
      body: 'Cambian la vocal (a veces la raíz entera). La 1ª y la 3ª persona del singular NO llevan terminación.',
      examples: [
        { de: 'gehen → ging · sehen → sah · essen → aß', es: 'Gestern ging ich früh nach Hause.' },
        { de: 'fahren → fuhr · nehmen → nahm · finden → fand', es: 'Ich nahm den letzten Zug.' }
      ],
      detail:
        'El Präteritum es el pasado de los textos escritos y las narraciones; al hablar se usa más el Perfekt (salvo sein, haben y los modales). Terminaciones: ich – (nada), du -st, er – (nada), wir -en, ihr -t, sie -en. Ejemplo con "kommen → kam": ich kam, du kamst, er kam, wir kamen, ihr kamt, sie kamen.\n\nMerece la pena aprender los verbos en tríada Infinitiv – Präteritum – Partizip II. No mezcles formas: "ich ging" (Präteritum) o "ich bin gegangen" (Perfekt), nunca "ich bin ging".',
      table: {
        title: 'Verbos fuertes frecuentes (Infinitiv · Präteritum · Partizip II)',
        headers: ['Infinitiv', 'Präteritum (ich/er)', 'Partizip II'],
        rows: [
          ['gehen', 'ging', 'ist gegangen'],
          ['kommen', 'kam', 'ist gekommen'],
          ['fahren', 'fuhr', 'ist gefahren'],
          ['essen', 'aß', 'hat gegessen'],
          ['trinken', 'trank', 'hat getrunken'],
          ['sehen', 'sah', 'hat gesehen'],
          ['sprechen', 'sprach', 'hat gesprochen'],
          ['nehmen', 'nahm', 'hat genommen'],
          ['geben', 'gab', 'hat gegeben'],
          ['finden', 'fand', 'hat gefunden'],
          ['schreiben', 'schrieb', 'hat geschrieben'],
          ['bleiben', 'blieb', 'ist geblieben']
        ]
      },
      more: {
        title: 'Mini-relato en Präteritum',
        examples: [
          { de: 'Er stand früh auf und trank einen Kaffee.', es: 'Se levantó temprano y se tomó un café.' },
          { de: 'Wir fuhren an die Küste und blieben eine Woche.', es: 'Fuimos a la costa y nos quedamos una semana.' },
          { de: 'Sie schrieb ihm einen langen Brief.', es: 'Le escribió una carta larga.' },
          { de: 'Ich fand die Idee zuerst komisch.', es: 'Al principio la idea me pareció rara.' },
          { de: 'Plötzlich kam ein Hund um die Ecke.', es: 'De repente un perro apareció por la esquina.' }
        ]
      }
    }
  ],
  pitfalls: [
    'El cambio de vocal NO afecta a ich/wir/ihr/sie: ✓ ich esse, du isst, er isst, wir essen.',
    '✗ er fahrt / er schlaft → ✓ er fährt / er schläft.',
    'Präteritum 3ª persona sin -t: ✗ er gingte → ✓ er ging.',
    'No mezcles Präteritum y Perfekt: ✗ ich bin ging → ✓ ich ging  /  ich bin gegangen.'
  ]
};

export default {
  id: 'irregularVerben',
  name: 'Unregelmäßige Verben',
  nameEs: 'Verbos irregulares',
  emoji: '⚡',
  blurb: 'Cambio de raíz en presente (e→i, e→ie, a→ä), imperativo y Präteritum de verbos fuertes',
  theory,
  concepts: [
    { id: 'irr:present:e-i', label: 'Presente e → i (essen, geben, nehmen…)' },
    { id: 'irr:present:e-ie', label: 'Presente e → ie (sehen, lesen…)' },
    { id: 'irr:present:a-ä', label: 'Presente a → ä (fahren, schlafen…)' },
    { id: 'irr:imperativ', label: 'Imperativo de "du" (Nimm!, Sprich!, Fahr!…)' },
    { id: 'irr:praeteritum', label: 'Präteritum de verbos fuertes' }
  ],
  frames
};
