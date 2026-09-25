import React from 'react';
import { t } from '../lib/i18n.js';
import { BAENDE } from '../lib/kursbuch/index.js';
import { mazosParaMezclar, vocabModes } from '../lib/vocab.js';

// Practicar vocabulario sin elegir mazo. Mismo trato que la mezcla de
// gramática, y por lo mismo: cuando quieres repasar no sabes QUÉ repasar, y
// tener que decidirlo primero es lo que hace que no repases.
//
// Antes esto era una rejilla de siete juegos sobre todos los mazos. Siete
// botones para algo que se hace en un minuto muerto es demasiado: ahora el
// juego lo elige la app.
//
// Las tarjetas no entran en el sorteo: están en la portada, y tenerlas en dos
// sitios no añade nada.
const JUEGOS_AL_AZAR = ['quiz', 'write', 'match', 'wortsalat', 'blitz', 'hangman'];

function unJuego() {
  const hay = vocabModes().map((m) => m.id).filter((id) => JUEGOS_AL_AZAR.includes(id));
  return hay[Math.floor(Math.random() * hay.length)] || 'quiz';
}
export default function MezclaVocab({ onStart }) {
  // Uno por lección (todas sus palabras juntas), los temas sueltos y los
  // tuyos. Se piden a la librería y no se filtran de `allDecks()`: los de
  // lección son virtuales y allí no están, así que filtrando salían cero y la
  // mezcla se dejaba fuera TODO el vocabulario del libro.
  const elegibles = mazosParaMezclar();
  if (!elegibles.length) return null;

  const idsDe = (lista) => lista.map((d) => d.id).join('|');
  // Niveles que de verdad tienen mazos, para no pintar un botón vacío.
  const bandas = BAENDE.map((b) => ({
    id: b.id,
    name: b.name,
    mazos: elegibles.filter((d) => d.bandId === b.id)
  })).filter((b) => b.mazos.length);

  return (
    <div className="panel" style={{ marginTop: 22 }}>
      <h2 style={{ marginBottom: 4 }}>{t('voc.combiTitle')}</h2>
      <p className="muted" style={{ fontSize: '0.84rem', marginBottom: 12 }}>
        {t('voc.combiSubDado')}
      </p>

      <button
        className="btn-primary home-todo"
        onClick={() => onStart('combi:' + idsDe(elegibles), unJuego())}
      >
        <span className="gt-ico">🎲</span>
        <span className="gt-txt">{t('voc.combiAll')}</span>
      </button>

      <div className="mezcla-niveles">
        {bandas.map((b) => (
          <button
            key={b.id}
            className="btn-ghost btn-sm"
            onClick={() => onStart('combi:' + idsDe(b.mazos), unJuego())}
          >
            {t('gr.mixBand', { b: b.name })}
          </button>
        ))}
      </div>
    </div>
  );
}
