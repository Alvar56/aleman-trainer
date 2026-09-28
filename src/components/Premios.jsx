import React from 'react';
import { t, pick } from '../lib/i18n.js';

// La tira de recompensas del final de una tanda.
//
// Estaba copiada tres veces —gramática, vocabulario y Kommunikation— y por eso
// se iba desordenando: la misma pastilla salía en un sitio y en otro no, y el
// orden lo marcaba el orden en que se fueron añadiendo, no lo que significan.
//
// Ahora van en tres grupos, y se nota al mirarlas porque cada grupo tiene su
// color:
//
//   1. LO QUE HA PASADO hoy y no pasa todos los días: subir de nivel y batir
//      el récord de seguidas. Son las dos pastillas de color, y van delante.
//   2. LO QUE HAS GANADO: XP, monedas y el bono del día. Las amarillas.
//   3. DÓNDE ESTÁS: los días seguidos y el puesto en la tabla. Las grises.
//
// Antes el récord caía en medio de las amarillas y partía la tira en dos.
export default function Premios({
  subida = null,
  xp = 0,
  monedas = 0,
  bonoDia = 0,
  rachaMax = 0,
  rachaRecord = null,
  dias = 0,
  congelador = false,
  rank = null
}) {
  return (
    <div className="sum-premios">
      {/* 1. las noticias */}
      {subida && (
        <span className={'pill nivel-nuevo' + (subida.value >= 100 ? ' pill-dorada' : '')}>
          🆙 {t('sum.levelUp', { n: subida.value })} 🪙 +{subida.monedas}
        </span>
      )}
      {rachaMax >= 2 && (
        <span className={'pill racha' + (rachaRecord?.nuevo ? ' fuego' : '')}>
          {rachaRecord?.nuevo
            ? '🏆 ' + t('ses.streakRecord', { n: rachaMax })
            : '⚡ ' + t('ses.streakBest') + ': ' + rachaMax}
        </span>
      )}

      {/* 2. lo ganado */}
      <span className="pill">➕ {xp} XP</span>
      {monedas > 0 && (
        <span className="pill monedas">
          🪙 +{monedas} {pick('por los ejercicios', 'from exercises')}
        </span>
      )}
      {bonoDia > 0 && (
        <span className="pill monedas">📅 +{bonoDia}{t('voc.newDayBonus')}</span>
      )}

      {/* 3. dónde estás */}
      {dias > 0 && (
        <span className="pill">
          ⭐ {t('sum.streak')} {dias}
          {congelador ? ' ' + t('sum.freezeUsed') : ''}
        </span>
      )}
      {rank?.rank > 0 && (
        <span className="pill">🏅 {t('sum.rank')} {rank.rank}/{rank.total}</span>
      )}
    </div>
  );
}
