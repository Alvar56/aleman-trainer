import React from 'react';
import { t, pick } from '../lib/i18n.js';

// El mismo listón que en gramática y en Kommunikation.
const APROBADO = 80;

import Premios from './Premios.jsx';

export default function VocabSummary({ data, onRepeat, onRepetirFallos, onDeck, onHome }) {
  const {
    deck, mode, correct, total, seconds, xp, mistakes, missed = [], streak,
    monedas = 0, rachaMax = 0, rachaRecord = null, rank = null
  } = data;
  const isMatch = mode === 'match';
  // Los mazos de una lección del libro vuelven a la pestaña de ejercicios;
  // los mazos sueltos, a su propia pantalla, que no tiene pestañas.
  const esDeLeccion = String(deck?.id || '').startsWith('kb-');
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const pleno = isMatch ? mistakes === 0 : total > 0 && correct === total;
  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, '0');
  const up = streak?.events?.find((e) => ['up', 'start', 'freeze-used'].includes(e.type));
  const subida = streak?.events?.find((e) => e.type === 'level');
  // El regalo de estrenar el dia. Solo cae en la primera leccion del dia, sea
  // del juego que sea, asi que solo ahi se puede llegar a 20 en un ejercicio.
  const bonoDia = streak?.events?.find((e) => e.type === 'coins')?.value || 0;

  return (
    <div className="stack reading">
      <div className="card center stack">
        <div className="confetti-badge">{pleno ? '🏆' : pct >= APROBADO ? '🎉' : '💪'}</div>
        <h2>{pleno ? t('sum.perfect') : pct >= APROBADO ? t('sum.good') : t('sum.keep')}</h2>
        {/* El mazo baja a la pastilla de siempre: arriba va el veredicto,
            como en gramática y en Kommunikation. */}
        <span className="pill ctx-tema">{deck?.emoji} {deck?.name || ''}</span>
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
        <Premios
          subida={subida}
          xp={xp}
          monedas={monedas}
          bonoDia={bonoDia}
          rachaMax={rachaMax}
          rachaRecord={rachaRecord}
          dias={streak?.state?.current || 0}
          congelador={up?.type === 'freeze-used'}
          rank={rank}
        />
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
        {/* Otra tanda solo con las que se te han escapado. */}
        {onRepetirFallos && missed.length > 0 && (
          <button className="btn-primary" onClick={onRepetirFallos}>
            {mode === 'flashcards'
              ? t('vsum.retryCards', { n: missed.length })
              : t('sum.retryFails', { n: missed.length })}
          </button>
        )}
        <button className={onRepetirFallos && missed.length > 0 ? 'btn-ghost' : 'btn-primary'} onClick={onRepeat}>{t('vsum.another')}</button>
        <button className="btn-ghost" onClick={onDeck}>
          {mode === 'notebook'
            ? t('vsum.backEntry')
            : mode === 'gender'
            ? t('back')
            : mode === 'flashcards'
            ? t('vsum.backLesson')
            : esDeLeccion
            ? t('vsum.backExercises')
            : t('vsum.backDeck')}
        </button>
        <button className="btn-ghost" onClick={onHome}>{t('sum.home')}</button>
      </div>
    </div>
  );
}
