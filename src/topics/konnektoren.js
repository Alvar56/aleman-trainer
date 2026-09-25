import { mc, order } from '../engine/helpers.js';
import { pick } from '../lib/rng.js';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';

// 1) Elegir el conector correcto (el orden de la frase da la pista)
const PICK = [
  { s: 'Ich nehme den Schirm mit, ___ es regnen soll.', a: 'weil', d: ['denn', 'deshalb'], c: 'konn:kausal', t: 'Me llevo el paraguas porque va a llover.', e: 'El verbo ("soll") está al final → conector subordinante. "weil" y "denn" significan lo mismo, pero solo "weil" manda el verbo al final; "denn" deja el orden normal.' },
  { s: 'Es soll regnen, ___ nehme ich den Schirm mit.', a: 'deshalb', d: ['weil', 'dass'], c: 'konn:konsekutiv', t: 'Va a llover, por eso me llevo el paraguas.', e: '"deshalb / deswegen / darum / daher" (por eso) ocupa la posición 1 y detrás va el verbo conjugado: "…, deshalb nehme ich…".' },
  { s: 'Ich glaube, ___ er heute nicht mehr kommt.', a: 'dass', d: ['das', 'weil'], c: 'konn:dass', t: 'Creo que hoy ya no viene.', e: '"dass" (que) introduce una completiva y manda el verbo ("kommt") al final. No lo confundas con el artículo/pronombre "das" (una sola s).' },
  { s: '___ ich ein Kind war, hatten wir einen großen Garten.', a: 'Als', d: ['Wenn', 'Wann'], c: 'konn:temporal', t: 'Cuando era niño teníamos un jardín grande.', e: '"als" = "cuando" para UN momento concreto del pasado. "wenn" = cuando (repetido, futuro o condición). "wann" solo en preguntas.' },
  { s: 'Immer ___ ich gestresst bin, gehe ich laufen.', a: 'wenn', d: ['als', 'wann'], c: 'konn:temporal', t: 'Siempre que estoy estresado, salgo a correr.', e: 'Acción repetida ("immer") → "wenn". El verbo ("bin") va al final de la subordinada.' },
  { s: '___ es sehr kalt war, sind wir spazieren gegangen.', a: 'Obwohl', d: ['Trotzdem', 'Deshalb'], c: 'konn:konzessiv', t: 'Aunque hacía mucho frío, salimos a pasear.', e: '"obwohl" (aunque) es subordinante: el verbo ("war") va al final. "trotzdem" no es subordinante y va en posición 1.' },
  { s: 'Es war sehr kalt. ___ sind wir spazieren gegangen.', a: 'Trotzdem', d: ['Obwohl', 'Weil'], c: 'konn:konzessiv', t: 'Hacía mucho frío. Aun así salimos a pasear.', e: '"trotzdem" (aun así) une dos frases principales y ocupa la posición 1: "Trotzdem + verbo + sujeto…".' },
  { s: 'Ruf mich bitte an, ___ du am Bahnhof angekommen bist.', a: 'wenn', d: ['als', 'ob'], c: 'konn:temporal', t: 'Llámame cuando hayas llegado a la estación.', e: '"wenn" para un momento futuro o una condición. El verbo ("bist") va al final.' },
  { s: 'Ich weiß noch nicht, ___ ich am Samstag Zeit habe.', a: 'ob', d: ['wenn', 'dass'], c: 'konn:dass', t: 'Todavía no sé si el sábado tengo tiempo.', e: '"ob" = "si" en preguntas indirectas de sí/no. "wenn" es condicional, no interrogativo.' },
  { s: 'Wir gehen heute nicht raus, ___ das Wetter zu schlecht ist.', a: 'weil', d: ['denn', 'trotzdem'], c: 'konn:kausal', t: 'Hoy no salimos porque hace demasiado mal tiempo.', e: 'El verbo "ist" está al final → conector subordinante "weil".' },
  { s: 'Das Wetter ist schlecht, ___ wir gehen trotzdem raus.', a: 'aber', d: ['obwohl', 'weil'], c: 'konn:koordinierend', t: 'Hace mal tiempo, pero salimos igualmente.', e: '"aber / und / oder / denn / sondern" son coordinantes: NO cambian el orden (posición 0, no cuentan). El verbo sigue en 2ª posición: "…, aber wir gehen…".' },
  { s: 'Ich lerne jeden Tag Deutsch, ___ ich in Wien studieren möchte.', a: 'weil', d: ['damit', 'deshalb'], c: 'konn:kausal', t: 'Estudio alemán cada día porque quiero estudiar en Viena.', e: 'Mismo sujeto y motivo → "weil" (+ verbo al final). "damit" sería para un objetivo con sujeto distinto.' }
];

// 2) Elegir la subordinada bien ordenada
const ORDERCHOICE = [
  { s: 'Wir bleiben zu Hause, weil ___.', opts: ['es regnet stark', 'es stark regnet', 'regnet es stark'], a: 'es stark regnet', c: 'konn:wortstellung', t: 'Nos quedamos en casa porque llueve fuerte.', e: 'En la subordinada el verbo conjugado va AL FINAL: "…, weil es stark regnet".' },
  { s: 'Er sagt, dass ___.', opts: ['er hat keine Zeit', 'er keine Zeit hat', 'hat er keine Zeit'], a: 'er keine Zeit hat', c: 'konn:wortstellung', t: 'Dice que no tiene tiempo.', e: 'Tras "dass" el verbo ("hat") va al final: "…, dass er keine Zeit hat".' },
  { s: 'Ich frage mich, ob ___.', opts: ['der Laden ist noch offen', 'der Laden noch offen ist', 'ist der Laden noch offen'], a: 'der Laden noch offen ist', c: 'konn:wortstellung', t: 'Me pregunto si la tienda todavía está abierta.', e: 'Tras "ob" el verbo ("ist") va al final.' },
  { s: 'Ruf an, wenn ___.', opts: ['du bist fertig', 'du fertig bist', 'bist du fertig'], a: 'du fertig bist', c: 'konn:wortstellung', t: 'Llama cuando estés listo.', e: 'Subordinada con "wenn" → verbo al final: "…, wenn du fertig bist".' },
  { s: 'Obwohl ___, ist er zur Arbeit gegangen.', opts: ['er war krank', 'er krank war', 'war er krank'], a: 'er krank war', c: 'konn:wortstellung', t: 'Aunque estaba enfermo, fue a trabajar.', e: 'La subordinada va primero (verbo al final: "er krank war") y la principal invierte: "…, ist er…".' }
];

// 3) Ordenar la subordinada
const ORDERS = [
  { sol: ['weil', 'ich', 'morgen', 'früh', 'arbeiten', 'muss'], t: '…porque mañana tengo que trabajar temprano.', e: 'En la subordinada: … + infinitivo + verbo conjugado ("muss") al final.', c: 'konn:kausal' },
  { sol: ['dass', 'sie', 'nächste', 'Woche', 'nach', 'Berlin', 'zieht'], t: '…que la semana que viene se muda a Berlín.', e: 'Tras "dass" el verbo conjugado ("zieht") va al final.', c: 'konn:dass' },
  { sol: ['obwohl', 'das', 'Hotel', 'ziemlich', 'teuer', 'war'], t: '…aunque el hotel era bastante caro.', e: 'Tras "obwohl" el verbo ("war") va al final.', c: 'konn:konzessiv' },
  { sol: ['wenn', 'du', 'am', 'Wochenende', 'Zeit', 'hast'], t: '…si tienes tiempo el fin de semana.', e: 'Subordinada con "wenn": verbo ("hast") al final.', c: 'konn:temporal' },
  { sol: ['dass', 'er', 'den', 'letzten', 'Zug', 'verpasst', 'hat'], t: '…que ha perdido el último tren.', e: 'En Perfekt dentro de subordinada: participio + auxiliar ("hat") al final.', c: 'konn:dass' }
];

const frames = [
  { make: (rng) => { const x = pick(rng, PICK); return mc(rng, { conceptId: x.c, prompt: t('tp.pickConnector'), sentence: x.s, correct: x.a, distractors: x.d, translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, ORDERCHOICE); return mc(rng, { conceptId: x.c, prompt: t('tp.pickClause'), sentence: x.s, correct: x.a, distractors: x.opts.filter((o) => o !== x.a), translation: tc(x.t), explanation: tc(x.e) }); } },
  { make: (rng) => { const x = pick(rng, ORDERS); return order(rng, { conceptId: x.c, prompt: t('tp.orderSubclause'), solution: x.sol, translation: tc(x.t), explanation: tc(x.e) }); } }
];

export const theory = {
  intro:
    'Los conectores unen frases. Lo decisivo es qué le hacen al VERBO: los subordinantes (weil, dass, wenn, obwohl…) lo mandan al final; los adverbios conectores (deshalb, trotzdem…) ocupan la posición 1 y provocan inversión; los coordinantes (und, aber, oder, denn, sondern) no cambian nada. Pulsa cada bloque para ver la explicación completa y más ejemplos.',
  sections: [
    {
      title: 'Subordinantes: verbo al final (weil, dass, wenn, obwohl, ob, damit…)',
      body: 'Introducen una subordinada; el verbo conjugado va al final de esa frase.',
      examples: [
        { de: 'Ich bleibe zu Hause, weil ich krank bin.', es: 'Me quedo en casa porque estoy enfermo.' },
        { de: 'Er sagt, dass er später kommt.', es: 'Dice que viene más tarde.' }
      ],
      detail:
        'Con la conjunción va una coma delante. Si hay dos verbos (Perfekt, modal, futuro), el orden final es: … + infinitivo/participio + verbo conjugado. "…, weil ich nicht kommen kann." / "…, dass er den Bus verpasst hat."\n\nSi la subordinada va PRIMERA, cuenta como posición 1 de la frase entera, así que la principal invierte (verbo + sujeto): "Weil ich krank bin, bleibe ich zu Hause." Conjunciones frecuentes: weil (causa), dass (que), wenn (si/cuando repetido), als (cuando, pasado puntual), obwohl (aunque), ob (si, pregunta indirecta), damit (para que), bevor / nachdem / während / seit / bis (tiempo), falls (en caso de que).',
      table: {
        title: 'Qué le hace cada tipo de conector al verbo',
        headers: ['Tipo', 'Ejemplos', 'Posición del verbo'],
        rows: [
          ['Subordinante', 'weil, dass, wenn, als, obwohl, ob, damit', 'al FINAL de la subordinada'],
          ['Coordinante', 'und, aber, oder, denn, sondern', 'sin cambios (posición 2)'],
          ['Adverbio conector', 'deshalb, deswegen, trotzdem, dann', 'posición 1 + inversión (verbo, luego sujeto)']
        ]
      },
      more: {
        examples: [
          { de: 'Bevor ich schlafen gehe, lese ich noch etwas.', es: 'Antes de irme a dormir leo un rato.' },
          { de: 'Ich weiß nicht, ob das eine gute Idee ist.', es: 'No sé si es buena idea.' },
          { de: 'Wir üben viel, damit die Prüfung gut läuft.', es: 'Practicamos mucho para que el examen salga bien.' },
          { de: 'Nachdem wir gegessen hatten, gingen wir spazieren.', es: 'Después de comer salimos a pasear.' },
          { de: 'Sie kam zu spät, obwohl sie früh losgefahren war.', es: 'Llegó tarde aunque había salido pronto.' }
        ]
      }
    },
    {
      title: 'weil vs denn · und/aber/oder/sondern (coordinantes)',
      body: 'Los coordinantes NO cambian el orden de la frase.',
      examples: [
        { de: 'Ich komme nicht, weil ich arbeiten muss.', es: '…subordinada: verbo al final.' },
        { de: 'Ich komme nicht, denn ich muss arbeiten.', es: '…coordinante: orden normal.' }
      ],
      detail:
        'weil y denn significan lo mismo ("porque"), pero weil es subordinante (verbo al final) y denn es coordinante (orden normal: sujeto + verbo). En el habla se usa muchísimo "weil".\n\nLos coordinantes und (y), aber (pero), oder (o), sondern (sino), denn (porque) van en la "posición 0": no cuentan y detrás sigue el orden normal (sujeto + verbo en 2ª posición). "sondern" solo después de una negación: "Das ist nicht Kaffee, sondern Tee". No confundas "aber" (pero) con "sondern" (sino, tras negación).',
      more: {
        examples: [
          { de: 'Ich lerne Deutsch, denn ich möchte in Wien arbeiten.', es: 'Aprendo alemán porque quiero trabajar en Viena.' },
          { de: 'Wir können ins Kino gehen oder wir bleiben zu Hause.', es: 'Podemos ir al cine o quedarnos en casa.' },
          { de: 'Es ist nicht kalt, aber es ist sehr windig.', es: 'No hace frío, pero hace mucho viento.' },
          { de: 'Er kommt nicht heute, sondern morgen.', es: 'No viene hoy, sino mañana.' }
        ]
      }
    },
    {
      title: 'Adverbios conectores: posición 1 + inversión (deshalb, trotzdem, dann…)',
      body: 'Enlazan dos frases principales; ocupan la posición 1 y el verbo va justo detrás.',
      examples: [
        { de: 'Es regnet. Deshalb bleibe ich zu Hause.', es: 'Llueve. Por eso me quedo en casa.' },
        { de: 'Es regnete. Trotzdem sind wir rausgegangen.', es: 'Llovía. Aun así salimos.' }
      ],
      detail:
        'Son adverbios, no conjunciones: cuentan como posición 1, así que detrás va el verbo conjugado y luego el sujeto (inversión). "Deshalb + verbo + sujeto".\n\nCausa/consecuencia: deshalb, deswegen, darum, daher (por eso). Concesión: trotzdem (aun así). Tiempo/secuencia: dann, danach, davor, außerdem, sonst. También pueden ir en el medio de la frase: "Ich bleibe deshalb zu Hause". Par típico: weil (subordinante, mira a la causa) ↔ deshalb (adverbio, mira a la consecuencia).',
      more: {
        examples: [
          { de: 'Der Zug hatte Verspätung, deswegen kam ich zu spät.', es: 'El tren venía con retraso, por eso llegué tarde.' },
          { de: 'Zuerst räume ich auf, dann koche ich.', es: 'Primero recojo, luego cocino.' },
          { de: 'Nimm einen Schirm mit, sonst wirst du nass.', es: 'Llévate un paraguas, si no te vas a mojar.' },
          { de: 'Das Essen war teuer. Außerdem hat es nicht geschmeckt.', es: 'La comida era cara. Además no estaba buena.' }
        ]
      }
    },
    {
      title: 'als vs wenn (cuando)',
      body: 'als = un momento concreto del pasado. wenn = repetido, futuro o condición.',
      examples: [
        { de: 'Als ich 18 war, bin ich nach Berlin gezogen.', es: 'Cuando tenía 18 me mudé a Berlín.' },
        { de: 'Wenn ich Zeit habe, rufe ich dich an.', es: 'Cuando tenga tiempo te llamo.' }
      ],
      detail:
        '"als" = una sola vez en el pasado ("Als ich klein war…", "Als wir ankamen…"). "wenn" = (a) acciones repetidas también en pasado, sobre todo con immer/jedes Mal: "Immer wenn es regnete, blieben wir drinnen"; (b) presente/futuro: "Wenn du kommst, …"; (c) condición: "Wenn es morgen schön ist, gehen wir baden".\n\n"wann" solo es interrogativo (directo o indirecto): "Wann kommst du?", "Ich weiß nicht, wann er kommt". Los tres se traducen a veces por "cuando", pero no son intercambiables.',
      more: {
        examples: [
          { de: 'Als das Telefon klingelte, schlief ich schon.', es: 'Cuando sonó el teléfono ya dormía.' },
          { de: 'Jedes Mal, wenn ich ihn sehe, hat er einen neuen Plan.', es: 'Cada vez que lo veo tiene un plan nuevo.' },
          { de: 'Sag mir, wann der Film anfängt.', es: 'Dime cuándo empieza la película.' },
          { de: 'Wenn du fertig bist, können wir gehen.', es: 'Cuando estés listo podemos irnos.' }
        ]
      }
    }
  ],
  pitfalls: [
    'weil manda el verbo al final; denn no: ✗ …, weil ich muss arbeiten → ✓ …, weil ich arbeiten muss.',
    'Tras "deshalb/trotzdem" hay inversión: ✗ Deshalb ich bleibe zu Hause → ✓ Deshalb bleibe ich zu Hause.',
    '"dass" (conjunción, doble s) ≠ "das" (artículo/pronombre): "Ich glaube, dass das gut ist".',
    '"als" para un hecho puntual del pasado; "wenn" para lo repetido o futuro: ✗ Wenn ich klein war… → ✓ Als ich klein war…'
  ]
};

export default {
  id: 'konnektoren',
  name: 'Konnektoren & Nebensätze',
  nameEs: 'Conectores y subordinadas',
  emoji: '🔗',
  blurb: 'weil/denn, dass, wenn/als, obwohl/trotzdem, deshalb… y el orden del verbo',
  theory,
  concepts: [
    { id: 'konn:kausal', label: 'Causa: weil / denn' },
    { id: 'konn:konsekutiv', label: 'Consecuencia: deshalb / deswegen' },
    { id: 'konn:dass', label: 'Completivas: dass / ob' },
    { id: 'konn:temporal', label: 'Tiempo: wenn / als' },
    { id: 'konn:konzessiv', label: 'Concesión: obwohl / trotzdem' },
    { id: 'konn:koordinierend', label: 'Coordinantes: und / aber / oder / sondern' },
    { id: 'konn:wortstellung', label: 'Orden del verbo en la subordinada' }
  ],
  frames
};
