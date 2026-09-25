import React from 'react';
import { t } from '../lib/i18n.js';
import { bandasConGramatica } from '../topics/index.js';

// Practicar gramática sin elegir lección.
//
// La pantalla de Grammatik era una lista de lecciones y nada más: para repasar
// había que decidir primero POR QUÉ lección repasar, que es justo lo que no
// sabes cuando quieres repasar. Aquí se practica todo mezclado, o un nivel
// entero, y ya.
//
// Por nivel y no solo "todo" porque mezclar A1.1 con A2.1 cuando vas por A1.1
// llena media tanda de cosas que aún no has visto.
export default function MezclaGramatica({ onStart }) {
  const bandas = bandasConGramatica();

  return (
    <div className="panel" style={{ marginTop: 22 }}>
      <h2 style={{ marginBottom: 4 }}>{t('gr.mixTitle')}</h2>
      <p className="muted" style={{ fontSize: '0.84rem', marginBottom: 12 }}>
        {t('gr.mixSub')}
      </p>

      <button
        className="btn-primary home-todo"
        onClick={() => onStart('mix', 'mixed', 'mixed')}
      >
        <span className="gt-ico">🎲</span>
        <span className="gt-txt">{t('gr.mixAll')}</span>
      </button>

      <div className="mezcla-niveles">
        {bandas.map((b) => (
          <button
            key={b.id}
            className="btn-ghost btn-sm"
            onClick={() => onStart('mix:' + b.id, 'mixed', 'mixed')}
          >
            {t('gr.mixBand', { b: b.name })}
          </button>
        ))}
      </div>
    </div>
  );
}
