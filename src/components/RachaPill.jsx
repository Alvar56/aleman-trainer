import React from 'react';
import { t } from '../lib/i18n.js';

// El rayito de aciertos seguidos.
//
// Estaba escrito a mano dentro de Session, así que solo salía en las lecciones
// de gramática: en el test de vocabulario, en der/die/das, en el Kasus
// Trainer, en el ahorcado, en Blitz y en los anagramas llevabas ocho seguidas
// y no te enterabas, aunque por dentro sí se estaban contando y sí contaban
// para el récord de la portada.
//
// Aparece a partir de dos: con una no hay racha que enseñar, y un contador
// que parpadea en cada ejercicio es ruido. A las cinco se pone en fuego.
export default function RachaPill({ n = 0 }) {
  if (n < 2) return null;
  return (
    <span key={n} className={'pill racha' + (n >= 5 ? ' fuego' : '') + ' racha-pop'}>
      {n >= 5 ? '🔥' : '⚡'} {t('ses.streakN', { n })}
    </span>
  );
}
