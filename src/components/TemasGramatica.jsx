import React, { useState } from 'react';
import { SECTIONS, TOPICS } from '../topics/index.js';
import { topicMastery } from '../lib/progress.js';
import { pick, t } from '../lib/i18n.js';

// Los temas de gramática POR TEMÁTICA, debajo de las lecciones del libro.
//
// Existían desde siempre —nueve temas con su teoría y sus ejercicios— y no se
// podía entrar en ninguno: Grammatik solo listaba lecciones. Lo único que los
// alcanzaba era "Toda la gramática mezclada", y ahí salían el 2,5 % de las
// veces, porque el motor sortea frames y estos nueve son 42 de 1768 aunque
// generen la mayor parte del material.
//
// La agrupación en bloques (SECTIONS) ya estaba escrita en topics/index.js,
// con su título y su descripción, esperando a que alguien la pintara.
// Va PLEGADO. Lo que se viene a hacer aquí es la lección del libro; esto es
// material de apoyo -la misma gramática agrupada por asunto- y desplegado se
// comía la pantalla y competía con las lecciones, que es justo lo que no debe
// hacer. Mismo patrón que los mazos extra de Wortschatz.
export default function TemasGramatica({ onOpen }) {
  const porId = new Map(TOPICS.map((x) => [x.id, x]));

  return (
    <div className="stack" style={{ gap: 22, marginTop: 22 }}>
      <p className="muted" style={{ fontSize: '0.82rem', margin: '0 0 4px' }}>
        {pick(
          'La misma gramática ordenada por tema y no por lección: el mismo asunto de varias Lektionen, junto y de una vez.',
          'The same grammar arranged by topic rather than by lesson: one subject from several Lektionen, all in one place.'
        )}
      </p>

      {SECTIONS.map((sec) => {
        const temas = sec.topicIds.map((id) => porId.get(id)).filter(Boolean);
        if (!temas.length) return null;
        return (
          <div key={sec.title}>
            <div className="sec-title">
              <h2>{pick(sec.title, sec.titleEn || sec.title)}</h2>
              {sec.hint && <span className="muted">{pick(sec.hint, sec.hintEn || sec.hint)}</span>}
            </div>
            <div className="topic-grid">
              {temas.map((tema) => {
                const m = topicMastery(tema.concepts.map((c) => c.id));
                return (
                  <button
                    key={tema.id}
                    className="card topic-open lk-card"
                    onClick={() => onOpen(tema.id)}
                  >
                    <div className="row spread">
                      <div className="flex-min">
                        <div className="t-title">
                          {tema.emoji && <span style={{ marginRight: 6 }}>{tema.emoji}</span>}
                          {pick(tema.nameEs || tema.name, tema.name || tema.nameEs)}
                        </div>
                        <div className="t-blurb">
                          {tema.concepts.length} {tema.concepts.length === 1 ? t('rule') : t('rules')}
                        </div>
                      </div>
                      <span className={'lk-pct' + (m.pct >= 100 ? ' dominado' : m.pct > 0 ? ' medio' : '')}>
                        {m.pct >= 100 && <span className="lk-corona">👑</span>}
                        {m.pct}%
                      </span>
                      <span className="chev">›</span>
                    </div>
                    <div className="mini-bar lk-bar">
                      <span
                        style={{
                          width: m.pct + '%',
                          background: m.pct >= 100 ? 'var(--good)' : 'var(--accent)'
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
