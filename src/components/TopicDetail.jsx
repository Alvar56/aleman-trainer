import React, { useState } from 'react';
import { t } from '../lib/i18n.js';
import { topicMastery, weakConcepts, conceptosQueFaltan, UMBRAL_TERMINAR } from '../lib/progress.js';
import { aiAvailable } from '../lib/settings.js';
import CoronaPanel, { BarrasTema } from './ProgresoTema.jsx';

function Examples({ list }) {
  if (!list || !list.length) return null;
  return (
    <div className="examples">
      {list.map((ex, j) => (
        <div className="ex" key={j}>
          <span className="ex-de">{ex.de}</span>
          <span className="ex-es">{ex.es}</span>
        </div>
      ))}
    </div>
  );
}

function MiniTable({ table }) {
  if (!table) return null;
  return (
    <div className="scroll-x" style={{ marginTop: 12 }}>
      {table.title && <h3 style={{ marginBottom: 8 }}>{table.title}</h3>}
      <table>
        <thead>
          <tr>{table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TheorySection({ s }) {
  const [open, setOpen] = useState(false);
  const extraExamples = (s.examples || []).length > 2;
  const canExpand = !!(s.detail || s.more || s.table || extraExamples);
  const shownExamples = open ? s.examples : (s.examples || []).slice(0, 2);

  return (
    <div className={'panel theory-sec' + (open ? ' open' : '')}>
      <button
        className="theory-sec-head"
        onClick={() => canExpand && setOpen((o) => !o)}
        aria-expanded={open}
        disabled={!canExpand}
      >
        <h2>{s.title}</h2>
        {canExpand && <span className="sec-toggle">{open ? t('gr.less') : t('gr.more')}</span>}
      </button>

      {s.body && <p className="muted sec-body">{s.body}</p>}

      <Examples list={shownExamples} />

      {open && (
        <div className="theory-detail">
          {s.detail &&
            String(s.detail)
              .split('\n\n')
              .map((p, i) => <p key={i}>{p}</p>)}
          {s.more && (
            <>
              {s.more.title && <h3>{s.more.title}</h3>}
              <Examples list={s.more.examples} />
            </>
          )}
          <MiniTable table={s.table} />
        </div>
      )}

      {canExpand && !open && (
        <button className="link-btn sec-more-link" onClick={() => setOpen(true)}>
          {t('gr.seeMore')}
        </button>
      )}
    </div>
  );
}

export default function TopicDetail({ topic, tab = 'teoria', onTab, onStart, onBack }) {
  const setTab = (t) => onTab?.(t);
  if (!topic) {
    return (
      <div className="card center stack">
        <p>{t('gr.noTopic')}</p>
        <button className="btn-ghost" onClick={onBack}>{t('back')}</button>
      </div>
    );
  }
  const ids = topic.concepts.map((c) => c.id);
  const m = topicMastery(ids);
  const weak = weakConcepts(ids);
  const aiOn = aiAvailable();
  const th = topic.theory || {};

  return (
    <div>
      <div className="topbar">
        <div style={{ minWidth: 0 }}>
          <h1>{topic.nameEs}</h1>
          <p className="muted" style={{ marginTop: 4, fontSize: '0.9rem' }}>
            {topic.name} · {topic.blurb}
          </p>
        </div>
        <button className="link-btn" onClick={onBack} style={{ flexShrink: 0 }}>
          ← Grammatik
        </button>
      </div>

      {/* Lo dominado del tema, en una línea y arriba del todo: la misma que en
          Wortschatz. Antes vivía dentro del panel de Practicar, con barra,
          píldora y un "4/5 conceptos practicados · 4 para repasar" que había
          que descifrar; y encima solo se veía si estabas en esa pestaña. */}
      <BarrasTema topicId={topic.id} pct={m.pct} />

      <div className="tabs">
        <button className={'tab' + (tab === 'teoria' ? ' active' : '')} onClick={() => setTab('teoria')}>
          {t('gr.theory')}
        </button>
        <button className={'tab' + (tab === 'ejercicios' ? ' active' : '')} onClick={() => setTab('ejercicios')}>
          {t('gr.exercises')}
        </button>
      </div>

      {tab === 'teoria' && (
        <div className="stack">
          {th.intro && (
            <div className="panel intro-panel">
              <p>{th.intro}</p>
            </div>
          )}

          <div className="theory-grid">
            {(th.sections || []).map((s, i) => (
              <TheorySection s={s} key={i} />
            ))}
          </div>

          {th.table && (
            <div className="panel scroll-x">
              <h2>{th.table.title || 'Resumen'}</h2>
              <table>
                <thead>
                  <tr>{th.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {th.table.rows.map((r, i) => (
                    <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {th.pitfalls?.length > 0 && (
            <div className="panel">
              <h2>{t('gr.pitfalls')}</h2>
              <ul className="pitfalls">
                {th.pitfalls.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => setTab('ejercicios')}>
            {t('gr.toExercises')}
          </button>
        </div>
      )}

      {tab === 'ejercicios' && (
        <div className="stack">
          <div className="panel">
              <h2 style={{ margin: '0 0 14px' }}>{t('gr.practise')}</h2>

              {topic.aiOnly ? (
                <>
                  <div className="gametype-label">{t('gr.lessonEx')}</div>
                  <button
                    className="btn-primary"
                    style={{ width: '100%' }}
                    onClick={() => onStart(topic.id, 'ai', 'mixed')}
                    disabled={!aiOn}
                  >
                    {t('gr.genAi')}
                  </button>
                  <p className="muted" style={{ fontSize: '0.78rem', marginTop: 10 }}>
                    {aiOn
                      ? t('gr.aiOnly')
                      : t('gr.aiOnlyOff')}
                  </p>
                </>
              ) : (
              <>
              <div className="gametype-label">{t('gr.pickGame')}</div>
              <div className="gametype-grid">
                <button className="gametype" onClick={() => onStart(topic.id, 'mixed', 'mc')}>
                  ✅ <span>{t('home.gTest')}</span>
                  <small>{t('home.gTestSub')}</small>
                </button>
                <button className="gametype" onClick={() => onStart(topic.id, 'mixed', 'write')}>
                  ⌨️ <span>{t('gr.gWrite')}</span>
                  <small>{t('gr.gWriteSub')}</small>
                </button>
                <button className="gametype" onClick={() => onStart(topic.id, 'mixed', 'order')}>
                  🔀 <span>{t('home.gOrder')}</span>
                  <small>{t('home.gOrderSub')}</small>
                </button>
                <button className="gametype" onClick={() => onStart(topic.id, 'mixed', 'judge')}>
                  ⚖️ <span>{t('home.gJudge')}</span>
                  <small>{t('home.gJudgeSub')}</small>
                </button>
              </div>

              {/* De dónde sale el material: la duda razonable de cualquiera que
                  vea un botón que pone "IA" al lado de otros que no. */}
              <p className="muted" style={{ fontSize: '0.78rem', marginTop: 12 }}>
                {aiOn ? t('gr.mixSource') : t('gr.mixSourceOff')}
              </p>

              <div className="btn-row" style={{ marginTop: 12 }}>
                {weak.length > 0 && (
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => onStart(topic.id, 'weak', 'mixed')}
                  >
                    {t('gr.reviewWeak')}
                  </button>
                )}
                {/* Solo del 70% para arriba. Debajo de eso falta casi todo y
                    seria la sesion normal con otro nombre. */}
                {/* Visible siempre por debajo del 100%, apagado hasta el 70%. */}
                {m.pct < 100 && (
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => onStart(topic.id, 'faltan', 'mixed')}
                    disabled={m.pct < UMBRAL_TERMINAR}
                    title={m.pct < UMBRAL_TERMINAR ? t('voc.finishLockedHint', { p: UMBRAL_TERMINAR }) : t('voc.finishHint')}
                  >
                    {m.pct < UMBRAL_TERMINAR
                      ? t('voc.finishLocked', { p: UMBRAL_TERMINAR })
                      : t('voc.finish', { n: conceptosQueFaltan(topic.concepts.map((c) => c.id)).length })}
                  </button>
                )}
                {aiOn && (
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => onStart(topic.id, 'ai', 'mixed')}
                    title={t('gr.aiChallengeHint')}
                  >
                    {t('gr.aiChallenge')}
                  </button>
                )}
              </div>
              {weak.length > 0 && (
                <p className="muted" style={{ fontSize: '0.78rem', marginTop: 10 }}>
                  {t(weak.length === 1 ? 'gr.missedRules' : 'gr.missedRulesPl', { n: weak.length })}
                </p>
              )}
              </>
              )}
              {!aiOn && !topic.aiOnly && (
                <p className="muted" style={{ fontSize: '0.78rem', marginTop: 10 }}>
                  {t('gr.aiHint')}
                </p>
              )}

              {/* Al llegar al 100% se abre el desglose: en qué formato aciertas
                  y en cuál no. Antes solo estorbaría. */}
              <CoronaPanel topicId={topic.id} pct={m.pct} />
          </div>
        </div>
      )}
    </div>
  );
}
