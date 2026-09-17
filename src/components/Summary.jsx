import React from 'react';
import { t, pick } from '../lib/i18n.js';

export default function Summary({ data, onRepeat, onWeak, onHome, onLeaderboard, onTeoria, onEjercicios }) {
  const { correctCount, total, accuracy, seconds, xp, streak, rank, mistakes, rachaMax, rachaRecord, monedas, bonoDia } = data;
  const pct = Math.round(accuracy * 100);
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  const perfect = correctCount === total;

  const streakEvent = streak?.events?.find((e) => ['up', 'start', 'freeze-used'].includes(e.type));

  return (
    <div className="stack reading">
      <div className="card center stack">
        <div className="confetti-badge">{perfect ? '🏆' : pct >= 70 ? '🎉' : '💪'}</div>
        <h2>{perfect ? t('sum.perfect') : pct >= 70 ? t('sum.good') : t('sum.keep')}</h2>
        <div className="stat-grid">
          <div className="card">
            <div className="big-stat">{pct}%</div>
            <div className="muted">{t('sum.accuracy')}</div>
          </div>
          <div className="card">
            <div className="big-stat">
              {correctCount}/{total}
            </div>
            <div className="muted">{t('sum.hits')}</div>
          </div>
          <div className="card">
            <div className="big-stat">
              {mm}:{String(ss).padStart(2, '0')}
            </div>
            <div className="muted">{t('sum.time')}</div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'center', gap: 18, marginTop: 24 }}>
          <span className="pill">➕ {xp} XP</span>
          {/* De dónde salen las monedas, desglosado: los ejercicios, las
              rachas de tres y el día nuevo van cada uno por su lado. */}
          {monedas > 0 && (
            <span className="pill monedas">🪙 +{monedas} {pick('por los ejercicios', 'from exercises')}</span>
          )}
          {bonoDia > 0 && (
            <span className="pill monedas">
              📅 +{bonoDia} {pick('por el día nuevo', 'new day')}
            </span>
          )}
        {rachaMax >= 2 && (
          <span className={'pill racha' + (rachaRecord?.nuevo ? ' fuego' : '')}>
            {rachaRecord?.nuevo ? '🏆 ' + t('ses.streakRecord', { n: rachaMax })
              : '⚡ ' + t('ses.streakBest') + ': ' + rachaMax}
          </span>
        )}
          {streakEvent && (
            <span className="pill">
              ⭐ {t('sum.streak')} {streak.state.current} {streakEvent.type === 'freeze-used' ? t('sum.freezeUsed') : ''}
            </span>
          )}
          {rank?.rank > 0 && (
            <span className="pill">
              🏅 {t('sum.rank')} {rank.rank}/{rank.total}
            </span>
          )}
        </div>
      </div>

      <div className="card stack">
        <h3>{t('sum.mistakes', { n: mistakes.reduce((a, m) => a + m.items.length, 0) })}</h3>
        {mistakes.length === 0 && <p className="muted">{t('sum.noMistakes')}</p>}
        {mistakes.map((m) => (
          <div key={m.conceptId}>
            <div className="pill" style={{ marginBottom: 6 }}>
              {m.label}
            </div>
            {m.items.map((it, i) => (
              <div className="mistake" key={i}>
                <div className="de">
                  {it.type === 'order' ? (it.solution || []).join(' ') 
                   : it.type === 'cloze' ? (it.clozeText ? String(it.clozeText).replace(/___/g, () => it.clozeAnswers ? it.clozeAnswers.join('/') : '___') : '')
                   : it.type === 'open' ? (it.sentence || '')
                   : (() => {
                       const parts = String(it.answer || '___').split(/\s*\.\.\.\s*/);
                       let i = 0;
                       return String(it.sentence || '').replace(/___/g, () => parts[i++] || '___');
                     })()}
                </div>
                <div className="muted" style={{ fontSize: '0.88rem', marginTop: 4 }}>
                  <span className="lang-tag">ES</span>{it.translation}
                </div>
                <div className="muted" style={{ fontSize: '0.86rem', marginTop: 4 }}>
                  <span className="lang-tag">{t('fb.why')}</span>{it.explanation}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="btn-row">
        <button className="btn-primary" onClick={onRepeat}>
          {t('sum.again')}
        </button>
        {mistakes.length > 0 && (
          <button className="btn-ghost" onClick={onWeak}>
            {t('sum.onlyWeak')}
          </button>
        )}
        {/* Al acabar es cuando de verdad quieres releer la regla que has
            fallado, y desde aqui solo se podia ir a Inicio y navegar a mano. */}
        {onTeoria && (
          <button className="btn-ghost" onClick={onTeoria}>
            {t('sum.theory')}
          </button>
        )}
        {onEjercicios && (
          <button className="btn-ghost" onClick={onEjercicios}>
            {t('sum.exercises')}
          </button>
        )}
        <button className="btn-ghost" onClick={onLeaderboard}>
          Leaderboard
        </button>
        <button className="btn-ghost" onClick={onHome}>
          {t('sum.home')}
        </button>
      </div>
    </div>
  );
}
