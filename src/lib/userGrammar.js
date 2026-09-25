import { storage } from './storage.js';
import { getLang } from './i18n.js';
import { topicMastery } from './progress.js';

const KEY = 'user_grammar_topics';

export function getUserGrammarTopics() {
  const list = storage.get(KEY, []);
  return Array.isArray(list) ? list : [];
}

export function getUserGrammarTopic(id) {
  if (!id) return null;
  return getUserGrammarTopics().find((t) => t.id === id) || null;
}

export function saveUserGrammarTopic(topic) {
  const id = topic.id || 'ug-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
  const clean = {
    id,
    name: topic.name || 'Neues Grammatikthema',
    nameEs: topic.nameEs || topic.name || 'Nuevo tema de gramática',
    emoji: topic.emoji || '📖',
    blurb: topic.blurb || 'Tema de gramática generado con IA',
    custom: true,
    source: 'ai',
    createdAt: topic.createdAt || Date.now(),
    lang: topic.lang || getLang(),
    concepts: Array.isArray(topic.concepts) && topic.concepts.length
      ? topic.concepts
      : [{ id: `${id}-c1`, name: topic.name, label: topic.nameEs }],
    cards: Array.isArray(topic.cards)
      ? topic.cards.map((c) => ({
          de: String(c.de || '').trim(),
          es: String(c.es || '').trim(),
          ex: c.ex ? String(c.ex).trim() : '',
          exEs: c.exEs ? String(c.exEs).trim() : '',
          rule: c.rule ? String(c.rule).trim() : ''
        })).filter((c) => c.de && c.es)
      : [],
    theory: {
      intro: topic.theory?.intro || '',
      sections: Array.isArray(topic.theory?.sections)
        ? topic.theory.sections.map((s) => ({
            title: String(s.title || '').trim(),
            body: String(s.body || '').trim(),
            detail: s.detail ? String(s.detail).trim() : '',
            examples: Array.isArray(s.examples)
              ? s.examples.map((e) => ({ de: String(e.de || '').trim(), es: String(e.es || '').trim() })).filter((e) => e.de)
              : [],
            table: s.table && Array.isArray(s.table.headers) && Array.isArray(s.table.rows)
              ? {
                  title: s.table.title || '',
                  headers: s.table.headers.map(String),
                  rows: s.table.rows.map((r) => r.map(String))
                }
              : null
          }))
        : [],
      pitfalls: Array.isArray(topic.theory?.pitfalls) ? topic.theory.pitfalls.map(String) : [],
      merksatz: topic.theory?.merksatz ? String(topic.theory.merksatz).trim() : '',
      table: topic.theory?.table || null
    },
    userItems: Array.isArray(topic.userItems) ? topic.userItems : []
  };

  storage.update(KEY, [], (list) => [...list.filter((t) => t.id !== id), clean]);
  return clean;
}

export function deleteUserGrammarTopic(id) {
  storage.update(KEY, [], (list) => list.filter((t) => t.id !== id));
}

export function userTopicStats(topic) {
  const conceptIds = (topic.concepts || []).map((c) => c.id);
  const m = topicMastery(conceptIds);
  return {
    totalCards: (topic.cards || []).length,
    totalExercises: (topic.userItems || []).length,
    pct: m.pct || 0,
    known: m.known || 0
  };
}
