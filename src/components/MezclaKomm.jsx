import React from 'react';
import { t } from '../lib/i18n.js';
import { BAENDE, getLektion, lektionKommunikation } from '../lib/kursbuch/index.js';

// Practicar comunicación sin elegir lección, igual que la mezcla de gramática
// y la de vocabulario. Cuando quieres repasar no sabes QUÉ repasar, y tener que
// decidirlo primero es lo que hace que no repases.
//
// Por nivel además de "todo", por lo mismo que en las otras dos: mezclar A2.1
// con A1.1 cuando vas por A1.1 llena media tanda de frases que aún no has
// visto.

// Todas las frases de un tomo, o del libro entero si no se pasa ninguno.
export function frasesDe(bandId = null) {
  const bandas = bandId ? BAENDE.filter((b) => b.id === bandId) : BAENDE;
  return bandas.flatMap((b) =>
    b.lektionen.flatMap((l) => {
      const lek = getLektion(l.id);
      if (!lek) return [];
      // lektionKommunikation traduce la glosa al idioma de la interfaz: la
      // mezcla tiene que hablar el mismo idioma que el resto de la pantalla.
      return lektionKommunikation(lek).flatMap((k) => k.wendungen || []);
    })
  );
}

export function bandasConKommunikation() {
  return BAENDE.map((b) => ({
    id: b.id,
    name: b.name,
    frases: frasesDe(b.id).length
  })).filter((b) => b.frases >= 4);
}

export default function MezclaKomm({ onMezcla }) {
  const bandas = bandasConKommunikation();
  if (!bandas.length) return null;

  return (
    <div className="panel" style={{ marginTop: 22 }}>
      <h2 style={{ marginBottom: 4 }}>{t('komm.mixTitle')}</h2>
      <p className="muted" style={{ fontSize: '0.84rem', marginBottom: 12 }}>
        {t('komm.mixSub')}
      </p>

      <button className="btn-primary home-todo" onClick={() => onMezcla(null)}>
        <span className="gt-ico">🎲</span>
        <span className="gt-txt">{t('komm.mixAll')}</span>
      </button>

      <div className="mezcla-niveles">
        {bandas.map((b) => (
          <button key={b.id} className="btn-ghost btn-sm" onClick={() => onMezcla(b.id)}>
            {t('gr.mixBand', { b: b.name })}
          </button>
        ))}
      </div>
    </div>
  );
}
