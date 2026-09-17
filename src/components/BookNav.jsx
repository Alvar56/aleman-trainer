import React, { useState } from 'react';
import { BAENDE, getLektion, lektionLabel } from '../lib/kursbuch/index.js';
import { lektionProgress, bandProgress } from '../lib/lektionProgress.js';
import { pick, t } from '../lib/i18n.js';

// Navegador común de las secciones del libro: pestañas de tomo + rejilla de
// lecciones. `count(lektion)` devuelve el número que se muestra en cada tarjeta;
// las lecciones sin contenido de esta sección no se listan.
// `progressKey` dice qué porcentaje mostrar: 'woerter', 'grammatik' o 'total'.
export default function BookNav({ title, subtitle, count, unit, onOpen, extra, progressKey = 'total' }) {
  const [band, setBand] = useState('a21');
  const activeBand = BAENDE.find((b) => b.id === band) || BAENDE[0];
  const lektionen = activeBand.lektionen
    .map((l) => getLektion(l.id))
    .filter((l) => l && count(l) > 0);

  return (
    <div className="wide">
      <div className="page-head">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="band-tabs">
        {BAENDE.map((b) => {
          const p = bandProgress(b);
          return (
            <button
              key={b.id}
              className={'band-tab' + (band === b.id ? ' on' : '')}
              onClick={() => setBand(b.id)}
            >
              <strong>{b.name}</strong>
              <small>{p}%</small>
              <span className="band-bar"><span style={{ width: p + '%' }} /></span>
            </button>
          );
        })}
        <button className="band-tab" disabled style={{ opacity: 0.5, cursor: 'default', background: 'transparent', borderColor: 'var(--border)' }}>
          <strong>A2.2</strong>
          <small>{pick('Próximamente', 'Coming soon')}</small>
        </button>
      </div>

      {lektionen.length === 0 ? (
        <div className="card center">
          <p className="muted">
            {pick(
              'Este tomo todavía no tiene contenido en esta sección.',
              'This volume has no content in this section yet.'
            )}
          </p>
        </div>
      ) : (
        <div className="topic-grid">
          {lektionen.map((l) => {
            const n = count(l);
            const prog = lektionProgress(l);
            const pct = prog ? prog[progressKey] : null;
            return (
              <button key={l.id} className="card topic-open lk-card" onClick={() => onOpen(l)}>
                <div className="row spread" style={{ alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="t-title">{lektionLabel(l)}</div>
                    <div className="t-blurb">{n} {n === 1 ? unit[0] : unit[1]}</div>
                  </div>
                  {pct != null && (
                    <span className={'lk-pct' + (pct >= 100 ? ' alto' : pct > 0 ? ' medio' : '')}>
                      {pct}%
                    </span>
                  )}
                  <span className="chev">›</span>
                </div>
                {pct != null && (
                  <div className="mini-bar lk-bar">
                    <span
                      style={{
                        width: pct + '%',
                        background: pct >= 100 ? 'var(--good)' : 'var(--accent)'
                      }}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {extra}
    </div>
  );
}
