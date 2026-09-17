import grundlagen from './grundlagen.js';
import modalverben from './modalverben.js';
import partizip2 from './partizip2.js';
import seinHaben from './seinHaben.js';
import kasus from './kasus.js';
import praepositionen from './praepositionen.js';
import irregularVerben from './irregularVerben.js';
import konnektoren from './konnektoren.js';
import trennbar from './trennbar.js';
import { KURSBUCH, getLektion, lektionTopic } from '../lib/kursbuch/index.js';
import { tc, tcEjemplos, tcTabla, tcMas, tcLista } from '../lib/contenido/index.js';

export const TOPICS = [
  grundlagen,
  modalverben,
  partizip2,
  seinHaben,
  kasus,
  praepositionen,
  irregularVerben,
  konnektoren,
  trennbar
];

// Agrupación temática para la pantalla de Gramática.
export const SECTIONS = [
  { title: 'Primeros pasos (A1)', hint: 'Presente, artículos, orden de la frase, preguntas y negación', topicIds: ['grundlagen'] },
  { title: 'El verbo', hint: 'Presente irregular, imperativo, modales y verbos separables', topicIds: ['irregularVerben', 'modalverben', 'trennbar'] },
  { title: 'El pasado (Perfekt)', hint: 'Formar el participio y elegir haben o sein', topicIds: ['partizip2', 'seinHaben'] },
  { title: 'Los casos', hint: 'Nominativ, Akkusativ, Dativ: artículos, pronombres y declinación', topicIds: ['kasus'] },
  { title: 'Preposiciones', hint: 'Qué caso rige cada preposición y las Wechselpräpositionen', topicIds: ['praepositionen'] },
  { title: 'La oración', hint: 'Conectores, subordinadas y orden de las palabras', topicIds: ['konnektoren'] }
];

// Temas construidos a partir del libro (uno por Lektion con gramática).
export function bookTopics() {
  return KURSBUCH.lektionen.filter((l) => l.grammatik.length).map((l) => lektionTopic(l));
}

// "Tema" virtual que junta todas las plantillas y conceptos: práctica mixta.
// Incluye el libro y los temas generales, para que la práctica aleatoria tenga
// siempre material offline.
export function mixTopic() {
  const all = [...bookTopics(), ...TOPICS];
  return {
    id: 'mix',
    name: 'Alles gemischt',
    nameEs: 'Práctica mixta',
    blurb: 'Ejercicios al azar de toda la gramática',
    theory: null,
    concepts: all.flatMap((t) => t.concepts),
    frames: all.flatMap((t) => t.frames)
  };
}

// Traduce un tema entero al idioma de la interfaz: nombre, resumen, teoria y
// etiquetas de los conceptos. Se hace aqui, en la frontera, para no repartir
// tc() por las veinte pantallas que pintan un tema.
//
// El aleman no se toca: los `de` de los ejemplos, el `name` del tema y las
// celdas de las tablas que estan en aleman pasan tal cual, porque tc()
// devuelve el original cuando no hay traduccion.
function traducirSeccion(sec) {
  return {
    ...sec,
    title: tc(sec.title),
    body: tc(sec.body),
    detail: tc(sec.detail),
    examples: tcEjemplos(sec.examples),
    table: tcTabla(sec.table),
    more: tcMas(sec.more)
  };
}

export function traducirTopic(topic) {
  if (!topic) return topic;
  const th = topic.theory;
  return {
    ...topic,
    nameEs: tc(topic.nameEs),
    blurb: tc(topic.blurb),
    concepts: (topic.concepts || []).map((c) => ({ ...c, label: tc(c.label) })),
    theory: th
      ? {
          ...th,
          intro: tc(th.intro),
          sections: (th.sections || []).map(traducirSeccion),
          table: tcTabla(th.table),
          pitfalls: tcLista(th.pitfalls)
        }
      : th
  };
}

export function getTopic(id) {
  if (id === 'mix') return traducirTopic(mixTopic());
  if (typeof id === 'string' && id.startsWith('kb-')) {
    return traducirTopic(lektionTopic(getLektion(id.slice(3))));
  }
  return traducirTopic(TOPICS.find((t) => t.id === id));
}

// Los temas listos para pintar. TOPICS se queda como esta (es la definicion
// en castellano); esto es lo que consumen las pantallas.
export function topicsTraducidos() {
  return TOPICS.map(traducirTopic);
}

export function allConceptIds() {
  return [...bookTopics(), ...TOPICS].flatMap((t) => t.concepts.map((c) => c.id));
}
