import React, { useState } from 'react';
import { BAENDE, getLektion, lektionLabel } from '../lib/kursbuch/index.js';
import { lektionProgress, bandProgress } from '../lib/lektionProgress.js';
import { pick, t } from '../lib/i18n.js';
import { storage } from '../lib/storage.js';

// Navegador común de las secciones del libro: pestañas de tomo + rejilla de
// lecciones. `count(lektion)` devuelve el número que se muestra en cada tarjeta;
// las lecciones sin contenido de esta sección no se listan.
// `progressKey` dice qué porcentaje mostrar: 'woerter', 'grammatik' o 'total'.
export default function BookNav({ title, subtitle, count, unit, onOpen, extra, antes, progressKey = 'total' }) {
  // El tomo elegido se recuerda, y ademas entre secciones: estas con A1.1 en
  // Wortschatz, pasas a Grammatik y sigues en A1.1. Antes cada pantalla
  // arrancaba en A2.1 -que era el tomo en curso escrito a mano-, asi que
  // cambiar de seccion te devolvia alli una y otra vez.
  //
  // Es uno solo para las tres: si estas repasando A1.1, lo estas repasando
  // entero, no el vocabulario de A1.1 y la gramatica de A2.1.
  const [band, setBandLocal] = useState(() => storage.get('ui:band', 'a21'));
  const setBand = (id) => {
    setBandLocal(id);
    storage.set('ui:band', id);
  };
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
            const ancha = l.nr === 'Start';
            const barra = pct == null ? null : (
              <div className="mini-bar lk-bar">
                <span
                  style={{
                    width: pct + '%',
                    background: pct >= 100 ? 'var(--good)' : 'var(--accent)'
                  }}
                />
              </div>
            );
            return (
              // La Start no es una lección más: es la de antes de empezar, y
              // va sola en su fila. En dos columnas quedaba emparejada con la
              // Lektion 1 como si fueran hermanas, y no lo son.
              <button
                key={l.id}
                className={'card topic-open lk-card' + (ancha ? ' lk-card-ancha' : '')}
                onClick={() => onOpen(l)}
              >
                {/* La Start ocupa el ancho entero, asi que lo suyo es que no
                    ocupe ademas el alto de una tarjeta normal: el titulo, la
                    cuenta y la barra van en la misma fila. Las demas, que son
                    de media columna, siguen en dos alturas. */}
                <div className="row spread">
                  <div className="flex-min">
                    <div className="t-title">{lektionLabel(l)}</div>
                    <div className="t-blurb">{n} {n === 1 ? unit[0] : unit[1]}</div>
                  </div>
                  {ancha && barra}
                  {pct != null && (
                    /* Al 100% la pastilla se pone dorada y se lleva la corona:
                       en verde se confundia con "vas bien" y lo que dice es
                       otra cosa, que ese tema ya esta. */
                    <span className={'lk-pct' + (pct >= 100 ? ' dominado' : pct > 0 ? ' medio' : '')}>
                      {pct >= 100 && <span className="lk-corona">👑</span>}
                      {pct}%
                    </span>
                  )}
                  <span className="chev">›</span>
                </div>
                {!ancha && barra}
              </button>
            );
          })}
        </div>
      )}

      {/* El juego de la seccion: debajo de las lecciones, porque no es de
          ninguna en concreto pero tampoco debe tapar la lista. */}
      {antes}

      {extra}
    </div>
  );
}
