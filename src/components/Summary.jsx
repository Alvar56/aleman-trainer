import React from 'react';
import { t, pick, codigoIdioma } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';
import TextoAleman from './TextoAleman.jsx';
import Premios from './Premios.jsx';

// A partir de aqui la tanda se da por buena: el mismo 80% con el que se
// aprueba un apartado de Kommunikation, para no tener dos listones.
const APROBADO = 80;

export default function Summary({ data, onRepeat, onRepetirFallos, onHome, onTema }) {
  const { topic, correctCount, total, accuracy, seconds, xp, streak, rank, mistakes, rachaMax, rachaRecord, monedas, bonoDia, bonoCien } = data;
  const fallos = data.fallos || [];
  const pct = Math.round(accuracy * 100);
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  const perfect = correctCount === total;

  const streakEvent = streak?.events?.find((e) => ['up', 'start', 'freeze-used'].includes(e.type));

  // Subir de nivel es lo mas gordo que puede pasar al terminar una tanda y
  // era lo unico que no se decia: te enterabas al volver a la portada.
  const subida = streak?.events?.find((e) => e.type === 'level');

  return (
    <div className="stack reading">
      <div className="card center stack">
        <div className="confetti-badge">{perfect ? '🏆' : pct >= APROBADO ? '🎉' : '💪'}</div>
        <h2>{perfect ? t('sum.perfect') : pct >= APROBADO ? t('sum.good') : t('sum.keep')}</h2>
        {/* De que iba la tanda, con la misma pastilla que se lleva arriba
            mientras la haces. */}
        {topic?.nameEs && <span className="pill ctx-tema">📖 {topic.nameEs}</span>}
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
        <Premios
          subida={subida}
          xp={xp}
          monedas={monedas}
          bonoDia={bonoDia}
          bonoCien={bonoCien}
          rachaMax={rachaMax}
          rachaRecord={rachaRecord}
          dias={streak?.state?.current || 0}
          congelador={streakEvent?.type === 'freeze-used'}
          rank={rank}
        />
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
                  <span className="lang-tag">{codigoIdioma()}</span>{tc(it.translation)}
                </div>
                <div className="muted" style={{ fontSize: '0.86rem', marginTop: 4 }}>
                  <span className="lang-tag">{t('fb.why')}</span>
                  <TextoAleman texto={tc(it.explanation)} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Los mismos tres que al acabar una tanda de vocabulario: otra vez,
          volver a lo que estabas y inicio. Habia seis (teoria, ejercicios,
          solo fallos, Bestenliste...) y acabar un ejercicio se convertia en
          elegir entre seis cosas. La tanda mixta no sale de ningun tema, asi
          que ahi el de volver no se pinta. */}
      <div className="btn-row">
        {/* Lo que acabas de fallar, otra vez y nada más: es lo que apetece
            cuando terminas y ves que se te han escapado dos. */}
        {onRepetirFallos && fallos.length > 0 && (
          <button className="btn-primary" onClick={onRepetirFallos}>
            {t('sum.retryFails', { n: fallos.length })}
          </button>
        )}
        <button className={onRepetirFallos && fallos.length > 0 ? 'btn-ghost' : 'btn-primary'} onClick={onRepeat}>
          {t('sum.again')}
        </button>
        {onTema && (
          <button className="btn-ghost" onClick={onTema}>
            {t('sum.backTema')}
          </button>
        )}
        <button className="btn-ghost" onClick={onHome}>
          {t('sum.home')}
        </button>
      </div>
    </div>
  );
}
