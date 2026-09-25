import { mc, order } from '../engine/helpers.js';
import { pick, shuffle } from '../lib/rng.js';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const MODALS = {
  koennen: {
    inf: 'können', es: 'poder / saber (capacidad o posibilidad)',
    f: { ich: 'kann', du: 'kannst', er: 'kann', wir: 'können', ihr: 'könnt', sie: 'können' },
    p: { ich: 'konnte', du: 'konntest', er: 'konnte', wir: 'konnten', ihr: 'konntet', sie: 'konnten' },
    esc: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
    pesc: ['podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían']
  },
  muessen: {
    inf: 'müssen', es: 'tener que (obligación o necesidad)',
    f: { ich: 'muss', du: 'musst', er: 'muss', wir: 'müssen', ihr: 'müsst', sie: 'müssen' },
    p: { ich: 'musste', du: 'musstest', er: 'musste', wir: 'mussten', ihr: 'musstet', sie: 'mussten' },
    esc: ['tengo que', 'tienes que', 'tiene que', 'tenemos que', 'tenéis que', 'tienen que'],
    pesc: ['tenía que', 'tenías que', 'tenía que', 'teníamos que', 'teníais que', 'tenían que']
  },
  duerfen: {
    inf: 'dürfen', es: 'tener permiso para',
    f: { ich: 'darf', du: 'darfst', er: 'darf', wir: 'dürfen', ihr: 'dürft', sie: 'dürfen' },
    p: { ich: 'durfte', du: 'durftest', er: 'durfte', wir: 'durften', ihr: 'durftet', sie: 'durften' },
    esc: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
    pesc: ['podía', 'podías', 'podía', 'podíamos', 'podíais', 'podían']
  },
  sollen: {
    inf: 'sollen', es: 'deber (consejo u orden de otra persona)',
    f: { ich: 'soll', du: 'sollst', er: 'soll', wir: 'sollen', ihr: 'sollt', sie: 'sollen' },
    p: { ich: 'sollte', du: 'solltest', er: 'sollte', wir: 'sollten', ihr: 'solltet', sie: 'sollten' },
    esc: ['debería', 'deberías', 'debería', 'deberíamos', 'deberíais', 'deberían'],
    pesc: ['debía', 'debías', 'debía', 'debíamos', 'debíais', 'debían']
  },
  wollen: {
    inf: 'wollen', es: 'querer (voluntad firme)',
    f: { ich: 'will', du: 'willst', er: 'will', wir: 'wollen', ihr: 'wollt', sie: 'wollen' },
    p: { ich: 'wollte', du: 'wolltest', er: 'wollte', wir: 'wollten', ihr: 'wolltet', sie: 'wollten' },
    esc: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'],
    pesc: ['quería', 'querías', 'quería', 'queríamos', 'queríais', 'querían']
  },
  moechten: {
    inf: 'möchten', es: 'querría / me gustaría (deseo cortés)',
    f: { ich: 'möchte', du: 'möchtest', er: 'möchte', wir: 'möchten', ihr: 'möchtet', sie: 'möchten' },
    esc: ['querría', 'querrías', 'querría', 'querríamos', 'querríais', 'querrían']
  }
};

const SUBJ = [
  { de: 'ich', pron: 'ich', k: 'ich', i: 0, es: 'yo' },
  { de: 'du', pron: 'du', k: 'du', i: 1, es: 'tú' },
  { de: 'mein Kollege', pron: 'er', k: 'er', i: 2, es: 'mi compañero' },
  { de: 'unsere Chefin', pron: 'sie', k: 'er', i: 2, es: 'nuestra jefa' },
  { de: 'man', pron: 'man', k: 'er', i: 2, es: 'uno' },
  { de: 'wir', pron: 'wir', k: 'wir', i: 3, es: 'nosotros' },
  { de: 'ihr', pron: 'ihr', k: 'ihr', i: 4, es: 'vosotros' },
  { de: 'die Studenten', pron: 'sie', k: 'sie', i: 5, es: 'los estudiantes' }
];

// Predicados de nivel A2-B1: situaciones reales (trabajo, trámites, salud, estudios).
const PRED = [
  { mid: ['einen', 'Termin', 'beim', 'Arzt'], inf: 'vereinbaren', zu: 'zu vereinbaren', part: 'vereinbart', es: 'concertar una cita con el médico' },
  { mid: ['das', 'Formular'], inf: 'ausfüllen', zu: 'auszufüllen', part: 'ausgefüllt', es: 'rellenar el formulario' },
  { mid: ['die', 'Miete', 'pünktlich'], inf: 'überweisen', zu: 'zu überweisen', part: 'überwiesen', es: 'transferir el alquiler a tiempo' },
  { mid: ['eine', 'wichtige', 'Entscheidung'], inf: 'treffen', zu: 'zu treffen', part: 'getroffen', es: 'tomar una decisión importante' },
  { mid: ['an', 'der', 'Besprechung'], inf: 'teilnehmen', zu: 'teilzunehmen', part: 'teilgenommen', es: 'participar en la reunión' },
  { mid: ['den', 'Bericht', 'bis', 'Freitag'], inf: 'abgeben', zu: 'abzugeben', part: 'abgegeben', es: 'entregar el informe para el viernes' },
  { mid: ['das', 'Auto', 'in', 'die', 'Werkstatt'], inf: 'bringen', zu: 'zu bringen', part: 'gebracht', es: 'llevar el coche al taller' },
  { mid: ['die', 'Wohnung'], inf: 'aufräumen', zu: 'aufzuräumen', part: 'aufgeräumt', es: 'ordenar la casa' },
  { mid: ['mit', 'dem', 'Rauchen'], inf: 'aufhören', zu: 'aufzuhören', part: 'aufgehört', es: 'dejar de fumar' },
  { mid: ['die', 'Präsentation'], inf: 'vorbereiten', zu: 'vorzubereiten', part: 'vorbereitet', es: 'preparar la presentación' },
  { mid: ['den', 'Kollegen', 'im', 'Büro'], inf: 'helfen', zu: 'zu helfen', part: 'geholfen', es: 'ayudar a los compañeros en la oficina' },
  { mid: ['mehr', 'Geduld', 'mit', 'den', 'Kindern'], inf: 'haben', zu: 'zu haben', part: 'gehabt', es: 'tener más paciencia con los niños' }
];

// Complementos que alargan la frase (Mittelfeld o Vorfeld).
const ADV = [
  { de: 'nächste Woche', es: 'la semana que viene' },
  { de: 'so schnell wie möglich', es: 'lo antes posible' },
  { de: 'unbedingt', es: 'sin falta' },
  { de: 'eigentlich', es: 'en realidad' },
  { de: 'endlich', es: 'por fin' },
  { de: 'am Wochenende', es: 'el fin de semana' },
  { de: 'heute Abend', es: 'esta noche' },
  { de: 'trotz des Regens', es: 'a pesar de la lluvia' }
];

const MODAL_KEYS = Object.keys(MODALS);
const PRET_KEYS = ['koennen', 'muessen', 'duerfen', 'sollen', 'wollen'];

// La glosa se arma con trozos traducidos por separado: el molde vive en
// i18n.js y cada pieza pasa por tc(). Antes era una plantilla de JS en
// castellano, asi que en ingles salia la frase entera sin traducir.
const esMain = (subj, esConj, pred, adv) =>
  t('tp.mainGloss', {
    s: cap(tc(subj.es)),
    v: tc(esConj),
    p: tc(pred.es),
    adv: adv ? ' ' + tc(adv.es) : ''
  });

const frames = [
  // A · conjugar el modal en presente (frase larga con complemento)
  {
    make(rng) {
      const subj = pick(rng, SUBJ);
      const mkey = pick(rng, MODAL_KEYS);
      const m = MODALS[mkey];
      const pred = pick(rng, PRED);
      const adv = pick(rng, ADV);
      const correct = m.f[subj.k];
      const forms = shuffle(rng, [...new Set(Object.values(m.f))].filter((x) => x !== correct));
      return mc(rng, {
        conceptId: `modal:${mkey}`,
        prompt: t('tp.fillModalPres'),
        sentence: `${cap(subj.de)} ___ ${adv.de} ${pred.mid.join(' ')} ${pred.inf}.`,
        correct,
        distractors: [forms[0], forms[1] || m.inf],
        translation: esMain(subj, m.esc[subj.i], pred, adv),
        explanation: t('tp.modalExpl', { de: subj.de, correct, inf: pred.inf, m: m.inf, es: tc(m.es) })
      });
    }
  },

  // B · Satzklammer: qué forma cierra la frase
  {
    make(rng) {
      const subj = pick(rng, SUBJ);
      const mkey = pick(rng, MODAL_KEYS);
      const m = MODALS[mkey];
      const pred = pick(rng, PRED);
      const adv = pick(rng, ADV);
      const finite = m.f[subj.k];
      return mc(rng, {
        conceptId: 'modal:satzklammer',
        prompt: t('tp.pickCloserForm'),
        sentence: `${cap(subj.de)} ${finite} ${adv.de} ${pred.mid.join(' ')} ___.`,
        correct: pred.inf,
        distractors: [pred.zu, pred.part],
        translation: esMain(subj, m.esc[subj.i], pred, adv),
        explanation: t('tp.modalSatzklammer', { inf: pred.inf, zu: pred.zu, part: pred.part })
      });
    }
  },

  // C · ordenar la frase principal (a veces con complemento en Vorfeld → inversión)
  {
    make(rng) {
      const subj = pick(rng, SUBJ);
      const mkey = pick(rng, MODAL_KEYS);
      const m = MODALS[mkey];
      const pred = pick(rng, PRED);
      const adv = pick(rng, ADV);
      const finite = m.f[subj.k];
      const fronted = rng() < 0.5;
      const solution = fronted
        ? [cap(adv.de.split(' ')[0]), ...adv.de.split(' ').slice(1), finite, subj.de, ...pred.mid, pred.inf]
        : [cap(subj.de), finite, adv.de, ...pred.mid, pred.inf];
      return order(rng, {
        conceptId: 'modal:satzklammer',
        prompt: t('tp.orderFinite2'),
        solution,
        translation: esMain(subj, m.esc[subj.i], pred, adv),
        explanation: fronted
          ? t('tp.modalFronted', { adv: adv.de, fin: finite })
          : t('tp.modalPlain')
      });
    }
  },

  // D · Nebensatz con "weil": el verbo conjugado va al FINAL
  {
    make(rng) {
      const subj = pick(rng, SUBJ.filter((s) => ['ich', 'er', 'wir', 'sie'].includes(s.pron)));
      const mkey = pick(rng, MODAL_KEYS);
      const m = MODALS[mkey];
      const pred = pick(rng, PRED);
      const finite = m.f[subj.k];
      return order(rng, {
        conceptId: 'modal:nebensatz',
        prompt: t('tp.orderWeilStress'),
        solution: ['weil', subj.de, ...pred.mid, pred.inf, finite],
        translation: t('tp.becauseGloss', {
          s: subj.es === 'yo' ? '' : tc(subj.es) + ' ',
          v: tc(m.esc[subj.i]),
          m: tc(pred.es)
        }),
        explanation: t('tp.modalNeben', { fin: finite, s: subj.de, inf: pred.inf })
      });
    }
  },

  // E · Präteritum del modal
  {
    make(rng) {
      const subj = pick(rng, SUBJ);
      const mkey = pick(rng, PRET_KEYS);
      const m = MODALS[mkey];
      const pred = pick(rng, PRED);
      const correct = m.p[subj.k];
      const present = m.f[subj.k];
      const otherPerson = shuffle(rng, [...new Set(Object.values(m.p))].filter((x) => x !== correct))[0];
      return mc(rng, {
        conceptId: 'modal:praeteritum',
        prompt: t('tp.fillPraetPast'),
        sentence: `Früher ___ ${subj.de} ${pred.mid.join(' ')} ${pred.inf}.`,
        correct,
        distractors: [present, otherPerson],
        translation: t('tp.beforeGloss', {
          s: subj.es === 'yo' ? '' : tc(subj.es) + ' ',
          v: tc(m.pesc[subj.i]),
          p: tc(pred.es)
        }),
        explanation: t('tp.modalPraet', { m: m.inf, correct })
      });
    }
  },

  // F · Konjunktiv II: cortesía, consejos y propuestas (B1)
  {
    make(rng) {
      const pool = [
        { s: '___ Sie mir bitte kurz helfen?', a: 'Könnten', d: ['Können', 'Könnt'], tr: '¿Podría ayudarme un momento, por favor?', ex: 'Petición cortés → Konjunktiv II de "können".' },
        { s: 'Ich ___ eigentlich viel mehr für die Prüfung lernen.', a: 'sollte', d: ['soll', 'sollst'], tr: 'En realidad debería estudiar mucho más para el examen.', ex: 'Reproche suave / consejo → "sollte".' },
        { s: 'An deiner Stelle ___ ich sofort einen Arzt anrufen.', a: 'würde', d: ['werde', 'wird'], tr: 'Yo que tú llamaría a un médico ahora mismo.', ex: '"An deiner Stelle + würde + infinitivo" para dar consejos.' },
        { s: '___ ich bitte das Fenster aufmachen?', a: 'Dürfte', d: ['Darf', 'Dürfen'], tr: '¿Me permitiría abrir la ventana?', ex: '"Dürfte ich…?" es más cortés que "Darf ich…?".' },
        { s: 'Wir ___ am Wochenende zusammen einen Ausflug machen.', a: 'könnten', d: ['können', 'konnten'], tr: 'Podríamos hacer una excursión juntos el fin de semana.', ex: 'Propuesta amable → "könnten" (Konjunktiv II).' },
        { s: 'Es ___ langsam Zeit sein zu gehen.', a: 'könnte', d: ['kann', 'konnte'], tr: 'Ya podría ser hora de irse.', ex: 'Suposición prudente → "könnte".' }
      ];
      const x = pick(rng, pool);
      return mc(rng, {
        conceptId: 'modal:konjunktiv2',
        prompt: t('tp.fillKonj2'),
        sentence: x.s,
        correct: x.a,
        distractors: x.d,
        translation: tc(x.tr),
        explanation: tc(x.ex)
      });
    }
  }
];

export const theory = {
  intro:
    'Los verbos modales (Modalverben) matizan a otro verbo: expresan capacidad, obligación, permiso, deseo… Ese otro verbo va en infinitivo, sin "zu", al final de la frase. Pulsa cada bloque para ver la explicación completa y más ejemplos.',
  sections: [
    {
      title: 'Los seis modales y su significado',
      body: 'können = poder/saber · müssen = tener que · dürfen = tener permiso · sollen = deber (consejo u orden de otro) · wollen = querer (voluntad firme) · möchten = querría (forma cortés de mögen).',
      examples: [
        { de: 'Ich kann dir bei der Bewerbung helfen.', es: 'Puedo ayudarte con la solicitud.' },
        { de: 'Du musst den Bericht bis Freitag abgeben.', es: 'Tienes que entregar el informe para el viernes.' }
      ],
      detail:
        'können mezcla "poder" y "saber": "Ich kann schwimmen" = sé nadar. müssen es la obligación fuerte; su negación cambia de sentido: "Du musst nicht kommen" = no hace falta que vengas (no "no debes"). Para prohibir se usa "nicht dürfen": "Du darfst nicht rauchen".\n\nsollen transmite lo que otra persona quiere o aconseja: "Der Arzt sagt, ich soll mehr schlafen". wollen es voluntad firme, casi un plan; para deseos y peticiones educadas se usa möchten (que es en realidad el Konjunktiv II de mögen). mögen a secas significa "gustar": "Ich mag Kaffee" ≠ "Ich möchte einen Kaffee".',
      more: {
        title: 'Más ejemplos por verbo',
        examples: [
          { de: 'Kannst du mir sagen, wie spät es ist?', es: '¿Puedes decirme qué hora es?' },
          { de: 'Du musst nicht alles verstehen.', es: 'No hace falta que lo entiendas todo.' },
          { de: 'Darf ich Sie etwas fragen?', es: '¿Le puedo preguntar una cosa?' },
          { de: 'Wir sollen bis morgen antworten.', es: 'Nos han dicho que respondamos para mañana.' },
          { de: 'Ich will dieses Jahr wirklich Deutsch lernen.', es: 'Este año quiero aprender alemán de verdad.' },
          { de: 'Möchtest du noch einen Kaffee?', es: '¿Querrías otro café?' }
        ]
      }
    },
    {
      title: 'Conjugación en presente',
      body: 'Irregulares en singular: "ich" y "er/sie/es" son iguales y sin terminación. "möchten" se conjuga como un verbo normal.',
      examples: [
        { de: 'ich kann · du kannst · er kann · wir können · ihr könnt · sie können', es: '' },
        { de: 'ich möchte · du möchtest · er möchte · wir möchten', es: 'möchten sí lleva -st / -t' }
      ],
      detail:
        'El singular cambia la vocal respecto al plural: können → ich kann, müssen → ich muss, dürfen → ich darf, wollen → ich will. Solo mögen/möchten mantiene la vocal.\n\nError típico: poner -t en la 3ª persona ("er kannt"). No la lleva ningún modal salvo möchten ("er möchte"). En plural (wir/sie) el modal recupera su forma de infinitivo: wir können, sie müssen.',
      table: {
        title: 'Presente de los seis modales',
        headers: ['', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'möchten'],
        rows: [
          ['ich', 'kann', 'muss', 'darf', 'soll', 'will', 'möchte'],
          ['du', 'kannst', 'musst', 'darfst', 'sollst', 'willst', 'möchtest'],
          ['er/sie/es', 'kann', 'muss', 'darf', 'soll', 'will', 'möchte'],
          ['wir/sie/Sie', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'möchten'],
          ['ihr', 'könnt', 'müsst', 'dürft', 'sollt', 'wollt', 'möchtet']
        ]
      }
    },
    {
      title: 'Posición del verbo: Satzklammer e inversión',
      body: 'El modal conjugado va en 2ª posición y el infinitivo al final. Si empiezas por un complemento, el sujeto pasa detrás del verbo.',
      examples: [
        { de: 'Ich möchte nächste Woche einen Termin beim Arzt vereinbaren.', es: 'Querría concertar una cita con el médico la semana que viene.' },
        { de: 'Nächste Woche möchte ich einen Termin vereinbaren.', es: 'La semana que viene querría concertar una cita.' }
      ],
      detail:
        'La "Satzklammer" (paréntesis oracional) es la idea clave: el modal (posición 2) y el infinitivo (final) encierran el resto de la frase. Todo lo demás —objetos, tiempo, lugar— va en medio, normalmente en el orden TeKaMoLo (Tiempo – Causa – Modo – Lugar).\n\nEn alemán la posición 2 es del verbo conjugado, no necesariamente del sujeto. Si pones otra cosa delante (un complemento de tiempo, "heute", "nächste Woche"…), el verbo sigue segundo y el sujeto va justo detrás: "Heute kann ich nicht kommen". En preguntas sin pronombre interrogativo el modal va primero: "Kannst du mir helfen?".',
      more: {
        examples: [
          { de: 'Am Wochenende will ich mich richtig ausruhen.', es: 'El fin de semana quiero descansar de verdad.' },
          { de: 'Leider kann ich heute nicht länger bleiben.', es: 'Por desgracia hoy no puedo quedarme más.' },
          { de: 'Musst du wirklich schon gehen?', es: '¿De verdad tienes que irte ya?' },
          { de: 'Deinen Ausweis darfst du nicht vergessen.', es: 'El carné no puedes olvidarlo.' }
        ]
      }
    },
    {
      title: 'En la subordinada (weil, dass, wenn, obwohl…)',
      body: 'El verbo conjugado se va al FINAL, detrás del infinitivo.',
      examples: [
        { de: 'Ich bin im Stress, weil ich die Präsentation vorbereiten muss.', es: 'Estoy estresado porque tengo que preparar la presentación.' }
      ],
      detail:
        'Las conjunciones weil, dass, wenn, obwohl, damit, ob… mandan el verbo conjugado al final de su frase. Con un modal, el orden final es: … + infinitivo + modal conjugado. "…, weil ich morgen früh aufstehen muss".\n\nSi la frase empieza por la subordinada, la principal invierte: "Weil ich arbeiten muss, kann ich nicht kommen" (subordinada + coma + verbo de la principal). No confundas weil (subordinada, verbo al final) con denn (coordinada, orden normal): "Ich komme nicht, denn ich muss arbeiten".',
      more: {
        examples: [
          { de: 'Er sagt, dass er uns nicht helfen kann.', es: 'Dice que no puede ayudarnos.' },
          { de: 'Wenn du mitkommen willst, ruf mich an.', es: 'Si quieres venir, llámame.' },
          { de: 'Obwohl sie krank ist, will sie arbeiten.', es: 'Aunque está enferma, quiere trabajar.' },
          { de: 'Ich weiß nicht, ob ich das schaffen kann.', es: 'No sé si podré conseguirlo.' }
        ]
      }
    },
    {
      title: 'Präteritum y Konjunktiv II',
      body: 'Pasado: konnte, musste, durfte, sollte, wollte (pierden el Umlaut). Konjunktiv II para cortesía y consejos: könnte, müsste, dürfte, sollte, würde.',
      examples: [
        { de: 'Als Kind musste ich jeden Tag Klavier üben.', es: 'De niño tenía que tocar el piano todos los días.' },
        { de: 'Könnten Sie mir bitte helfen?', es: '¿Podría ayudarme, por favor?' }
      ],
      detail:
        'Präteritum (pasado real, muy usado con los modales incluso al hablar): quitas el Umlaut y añades -te → konnte, musste, durfte, wollte; sollen ya no tenía Umlaut → sollte. "Gestern konnte ich nicht kommen" = ayer no pude venir.\n\nKonjunktiv II (irreal / cortesía): recupera el Umlaut → könnte, müsste, dürfte; wollte y sollte coinciden con el Präteritum. Usos: peticiones educadas ("Könntest du…?"), consejos ("Du solltest…", "An deiner Stelle würde ich…") y suposiciones prudentes ("Das könnte stimmen"). Cuidado: "ich musste" (pasado) ≠ "ich müsste" (tendría que, hipotético).',
      more: {
        title: 'Präteritum vs Konjunktiv II',
        examples: [
          { de: 'Früher durften Kinder allein zur Schule gehen.', es: 'Antes los niños podían ir solos al colegio.' },
          { de: 'Wir wollten eigentlich früher losfahren.', es: 'En realidad queríamos salir antes.' },
          { de: 'Dürfte ich kurz Ihr Telefon benutzen?', es: '¿Me permitiría usar su teléfono un momento?' },
          { de: 'Du müsstest dich echt mal ausruhen.', es: 'Deberías descansar de una vez.' },
          { de: 'Das könnte ein Problem werden.', es: 'Eso podría convertirse en un problema.' }
        ]
      }
    }
  ],
  pitfalls: [
    'Nunca pongas "zu": ✗ Ich muss zu arbeiten → ✓ Ich muss arbeiten.',
    'Nada de -t en er/sie/es: ✗ er kannt / er willt → ✓ er kann / er will.',
    'En subordinada el modal va al final: ✗ …, weil ich muss arbeiten → ✓ …, weil ich arbeiten muss.',
    'Präteritum sin Umlaut: ✗ ich müsste (eso es Konjunktiv II) → ✓ ich musste (pasado real).'
  ]
};

export default {
  id: 'modalverben',
  name: 'Modalverben',
  nameEs: 'Verbos modales',
  emoji: '🚦',
  blurb: 'können, müssen, dürfen, sollen, wollen, möchten · presente, Präteritum, Konjunktiv II y subordinadas',
  theory,
  concepts: [
    { id: 'modal:koennen', label: 'können (poder)' },
    { id: 'modal:muessen', label: 'müssen (tener que)' },
    { id: 'modal:duerfen', label: 'dürfen (permiso)' },
    { id: 'modal:sollen', label: 'sollen (consejo)' },
    { id: 'modal:wollen', label: 'wollen (querer)' },
    { id: 'modal:moechten', label: 'möchten (deseo cortés)' },
    { id: 'modal:satzklammer', label: 'Posición del infinitivo e inversión' },
    { id: 'modal:nebensatz', label: 'Modal en subordinada (verbo al final)' },
    { id: 'modal:praeteritum', label: 'Präteritum (konnte, musste…)' },
    { id: 'modal:konjunktiv2', label: 'Konjunktiv II (cortesía y consejos)' }
  ],
  frames
};
