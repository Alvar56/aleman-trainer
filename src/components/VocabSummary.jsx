import React from 'react';
import { t } from '../lib/i18n.js';

export default function VocabSummary({ data, onRepeat, onDeck, onHome }) {
  const { deck, mode, correct, total, seconds, xp, mistakes, missed = [], streak, monedas = 0 } = data;
  const isMatch = mode === 'match';
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, '0');
  const up = streak?.events?.find((e) => ['up', 'start', 'freeze-used'].includes(e.type));
  // El regalo de estrenar el dia. Solo cae en la primera leccion del dia, sea
  // del juego que sea, asi que solo ahi se puede llegar a 20 en un ejercicio.
  const bonoDia = streak?.events?.find((e) => e.type === 'coins')?.value || 0;

  return (
    <div className="stack reading">
      <div className="card center stack">
        <div className="confetti-badge">{isMatch ? (mistakes === 0 ? '🏆' : '🎉') : pct >= 80 ? '🎉' : '💪'}</div>
        <h2>{deck?.emoji} {deck?.name || ''}</h2>
        <div className="stat-grid">
          <div className="card">
            <div className="big-stat">{isMatch ? mistakes : pct + '%'}</div>
            <div className="muted">{isMatch ? t('voc.mistakesStat') : t('voc.accuracyStat')}</div>
          </div>
          <div className="card">
            <div className="big-stat">{isMatch ? '6/6' : `${correct}/${total}`}</div>
            <div className="muted">{isMatch ? t('voc.pairsStat') : t('voc.cardsStat')}</div>
          </div>
          <div className="card">
            <div className="big-stat">{mm}:{ss}</div>
            <div className="muted">{t('voc.timeStat')}</div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'center', gap: 16, marginTop: 24 }}>
          <span className="pill">➕ {xp} XP</span>
          {up && <span className="pill">⭐ racha {streak.state.current}</span>}
          {monedas > 0 && <span className="pill monedas">🪙 +{monedas}</span>}
          {bonoDia > 0 && <span className="pill monedas">📅 +{bonoDia}{t('voc.newDayBonus')}</span>}
        </div>
      </div>

      {missed.length > 0 && (
        <div className="card stack">
          <h3>{t('vsum.toReview')} ({missed.length})</h3>
          {missed.map((c, i) => (
            <div className="mistake" key={i}>
              <div className="de">{c.de} — {c.es}</div>
              {c.ex && <div className="muted" style={{ fontSize: '0.86rem' }}>{c.ex}</div>}
            </div>
          ))}
        </div>
      )}

      <div className="btn-row">
        <button className="btn-primary" onClick={onRepeat}>{t('vsum.another')}</button>
        <button className="btn-ghost" onClick={onDeck}>
          {mode === 'notebook' ? t('vsum.backEntry') : mode === 'gender' ? t('back') : t('vsum.backDeck')}
        </button>
        <button className="btn-ghost" onClick={onHome}>{t('sum.home')}</button>
      </div>
    </div>
  );
}
