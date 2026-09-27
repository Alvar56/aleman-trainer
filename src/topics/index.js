import grundlagen from './grundlagen.js';
import modalverben from './modalverben.js';
import partizip2 from './partizip2.js';
import seinHaben from './seinHaben.js';
import kasus from './kasus.js';
import praepositionen from './praepositionen.js';
import irregularVerben from './irregularVerben.js';
import konnektoren from './konnektoren.js';
import trennbar from './trennbar.js';
import { KURSBUCH, BAENDE, getLektion, lektionTopic } from '../lib/kursbuch/index.js';
import { tc, tcEjemplos, tcTabla, tcMas, tcLista } from '../lib/contenido/index.js';
import { pick } from '../lib/i18n.js';
import { getUserGrammarTopic, getUserGrammarTopics } from '../lib/userGrammar.js';
import { respuestaDe } from '../lib/kursbuch/respuestas.js';

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
  { title: 'Primeros pasos (A1)', titleEn: 'First steps (A1)',
    hint: 'Presente, artículos, orden de la frase, preguntas y negación',
    hintEn: 'Present tense, articles, word order, questions and negation',
    topicIds: ['grundlagen'] },
  { title: 'El verbo', titleEn: 'The verb',
    hint: 'Presente irregular, imperativo, modales y verbos separables',
    hintEn: 'Irregular present, imperative, modals and separable verbs',
    topicIds: ['irregularVerben', 'modalverben', 'trennbar'] },
  { title: 'El pasado (Perfekt)', titleEn: 'The past (Perfekt)',
    hint: 'Formar el participio y elegir haben o sein',
    hintEn: 'Forming the participle and choosing haben or sein',
    topicIds: ['partizip2', 'seinHaben'] },
  { title: 'Los casos', titleEn: 'The cases',
    hint: 'Nominativ, Akkusativ, Dativ: artículos, pronombres y declinación',
    hintEn: 'Nominativ, Akkusativ, Dativ: articles, pronouns and declension',
    topicIds: ['kasus'] },
  { title: 'Preposiciones', titleEn: 'Prepositions',
    hint: 'Qué caso rige cada preposición y las Wechselpräpositionen',
    hintEn: 'Which case each preposition takes, and the Wechselpräpositionen',
    topicIds: ['praepositionen'] },
  { title: 'La oración', titleEn: 'The sentence',
    hint: 'Conectores, subordinadas y orden de las palabras',
    hintEn: 'Connectors, subordinate clauses and word order',
    topicIds: ['konnektoren'] }
];

// Temas construidos a partir del libro (uno por Lektion con gramática).
export function bookTopics() {
  return KURSBUCH.lektionen.filter((l) => l.grammatik.length).map((l) => lektionTopic(l));
}

// Frames de comunicación para incluir en la práctica mixta ("De todo un poco").
export function kommFrames(bandId = null) {
  const lecciones = bandId 
    ? KURSBUCH.lektionen.filter((l) => l.bandId === bandId)
    : KURSBUCH.lektionen;
  const todasFrases = [];
  for (const l of lecciones) {
    for (const k of l.kommunikation || []) {
      for (const w of k.wendungen || []) {
        if (w.de && w.es) todasFrases.push({ de: w.de, es: tc(w.es), funktion: k.funktion, lektionId: l.id });
      }
    }
  }
  if (!todasFrases.length) return [];
  return todasFrases.map((w, idx) => ({
    conceptId: `komm:${w.lektionId}`,
    make(rng) {
      const resp = respuestaDe(w.de);
      if (resp && rng() < 0.4) {
        const distractores = todasFrases
          .filter((f) => f.de !== resp.de && f.de !== w.de)
          .map((f) => {
            const r = respuestaDe(f.de);
            return r ? r.de : f.de;
          })
          .filter((d, i, arr) => d && arr.indexOf(d) === i)
          .slice(0, 3);
        const options = [resp.de, ...distractores];
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(rng() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
        return {
          id: `komm-r-${idx}`,
          type: 'mc',
          conceptId: `komm:${w.lektionId}`,
          prompt: w.de,
          sentence: `— ${w.de}\n— ___`,
          answer: resp.de,
          options,
          translation: w.es + (resp.es ? ' → ' + tc(resp.es) : ''),
          explanation: pick(`Respuesta adecuada: "${resp.de}"`, `Appropriate response: "${resp.de}"`)
        };
      }
      const distractores = todasFrases
        .filter((f) => f.de !== w.de)
        .map((f) => f.de)
        .slice(0, 3);
      const options = [w.de, ...distractores];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      return {
        id: `komm-q-${idx}`,
        type: 'mc',
        conceptId: `komm:${w.lektionId}`,
        sentence: pick(`¿Cómo se dice: "${w.es}"?`, `How do you say: "${w.es}"?`),
        answer: w.de,
        options,
        translation: w.es,
        explanation: `${w.de} — ${w.es}`
      };
    }
  }));
}

// "Tema" virtual que junta todas las plantillas y conceptos: práctica mixta.
// Incluye el libro, los temas generales y comunicación para tener práctica completa.
export function mixTopic() {
  const all = [...bookTopics(), ...TOPICS];
  const kFrames = kommFrames();
  return {
    id: 'mix',
    name: 'Alles gemischt',
    nameEs: 'Práctica mixta',
    blurb: 'Ejercicios al azar de gramática, vocabulario y comunicación',
    theory: null,
    concepts: all.flatMap((t) => t.concepts),
    frames: [...all.flatMap((t) => t.frames), ...kFrames]
  };
}

// Lo mismo pero de UN nivel.
export function mixTopicBanda(bandId) {
  const banda = BAENDE.find((b) => b.id === bandId);
  const lecciones = KURSBUCH.lektionen.filter(
    (l) => l.bandId === bandId && l.grammatik.length
  );
  const temas = lecciones.map((l) => lektionTopic(l));
  const kFrames = kommFrames(bandId);
  return {
    id: 'mix:' + bandId,
    name: (banda?.name || bandId) + ' gemischt',
    nameEs: 'Mezcla de ' + (banda?.name || bandId),
    blurb: 'Ejercicios al azar de ' + (banda?.name || bandId),
    theory: null,
    concepts: temas.flatMap((t) => t.concepts),
    frames: [...temas.flatMap((t) => t.frames), ...kFrames]
  };
}

// Los niveles que tienen gramática, para pintar un botón por cada uno.
export function bandasConGramatica() {
  return BAENDE.filter((b) =>
    KURSBUCH.lektionen.some((l) => l.bandId === b.id && l.grammatik.length)
  ).map((b) => ({ id: b.id, name: b.name }));
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
  if (typeof id === 'string' && id.startsWith('mix:')) {
    return traducirTopic(mixTopicBanda(id.slice(4)));
  }
  if (typeof id === 'string' && id.startsWith('kb-')) {
    return traducirTopic(lektionTopic(getLektion(id.slice(3))));
  }
  const userTopic = getUserGrammarTopic(id);
  if (userTopic) return traducirTopic(userTopic);
  return traducirTopic(TOPICS.find((t) => t.id === id));
}

// Los temas listos para pintar. TOPICS se queda como esta (es la definicion
// en castellano); esto es lo que consumen las pantallas.
export function topicsTraducidos() {
  return [...TOPICS, ...getUserGrammarTopics()].map(traducirTopic);
}

export function allConceptIds() {
  return [...bookTopics(), ...TOPICS, ...getUserGrammarTopics()].flatMap((t) => (t.concepts || []).map((c) => c.id));
}
