import React from 'react';
import { t, pick } from '../lib/i18n.js';
import { gameStats, precisionReciente } from '../lib/leaderboard.js';

// Cómo llevas un tema, sea de Grammatik o de Wortschatz. Está aquí y no
// copiado en cada pantalla porque la recompensa por dominar algo debería ser
// la misma se llame lección o mazo.
//
// Son dos barras distintas y conviene no confundirlas:
//   · dominado  → cuánto del tema has aprendido. Al 100% se pone verde.
//   · aciertos  → cómo lo estás haciendo últimamente. Aparece al llegar al
//                 100%, porque hasta entonces la primera ya lo dice todo, y
//                 porque tener un tema dominado no impide fallarlo al volver.

export function BarrasTema({ topicId, pct, etiqueta }) {
  const completo = pct >= 100;
  const rec = completo ? precisionReciente(topicId) : { pct: null };

  return (
    <div className="tema-barras">
      <div className="row" style={{ gap: 12 }}>
        <div className={'mini-bar' + (completo ? ' completo' : '')} style={{ flex: 1 }}>
          <span style={{ width: pct + '%' }} />
        </div>
        <span className={'pill' + (completo ? ' completo' : '')}>
          {completo ? '👑 100%' : pct + '%'}
        </span>
      </div>
      {etiqueta && !completo && <div className="tema-barras-et muted">{etiqueta}</div>}

      {completo && rec.pct != null && (
        <div className="row" style={{ gap: 12, marginTop: 8 }}>
          <div className="mini-bar" style={{ flex: 1 }}>
            <span
              className={rec.pct >= 80 ? 'bien' : rec.pct >= 50 ? 'medio' : 'mal'}
              style={{ width: rec.pct + '%' }}
            />
          </div>
          <span className="pill">{rec.pct}%</span>
        </div>
      )}
      {completo && rec.pct != null && (
        <div className="tema-barras-et muted">
          {t('gr.recentAcc', { n: rec.sesiones })}
        </div>
      )}
    </div>
  );
}

// Cómo se llama cada minijuego en el desglose.
const NOMBRE_JUEGO = {
  mixed: ['🎲 Mezclado', '🎲 Mixed'],
  todo: ['🎲 De todo un poco', '🎲 A bit of everything'],
  mc: ['✅ Test', '✅ Quiz'],
  order: ['🔀 Ordenar frases', '🔀 Sentence order'],
  judge: ['⚖️ ¿Correcto o no?', '⚖️ Right or wrong?'],
  write: ['⌨️ Escribir', '⌨️ Type it'],
  weak: ['🩹 Solo mis fallos', '🩹 Just my mistakes'],
  flashcards: ['🃏 Tarjetas', '🃏 Flashcards'],
  quiz: ['✅ Test', '✅ Quiz'],
  match: ['🧩 Emparejar', '🧩 Match'],
  wortsalat: ['🔤 Wortsalat', '🔤 Letter salad'],
  blitz: ['⚡ Blitz', '⚡ Blitz'],
  hangman: ['🪢 Ahorcado', '🪢 Hangman'],
  gender: ['🎯 der/die/das', '🎯 der/die/das'],
  cuaderno: ['📓 Cuaderno', '📓 Notebook']
};

// 6.8 -> "6,8" en español, "6.8" en inglés.
function seg(n) {
  const txt = String(n);
  return pick(txt.replace('.', ','), txt);
}

export default function CoronaPanel({ topicId, pct }) {
  if (pct < 100) {
    return <p className="muted corona-locked">🔒 {t('gr.crownLocked', { n: 100 - pct })}</p>;
  }

  const porJuego = gameStats(topicId);

  return (
    <div className="corona-panel">
      <div className="corona-head">
        <span className="corona">👑</span>
        <div>
          <strong>{t('gr.crownTitle')}</strong>
          <p className="muted" style={{ fontSize: '0.78rem', marginTop: 2 }}>{t('gr.crownSub')}</p>
        </div>
      </div>
      {porJuego.length === 0 ? (
        <p className="muted" style={{ fontSize: '0.82rem' }}>{t('gr.crownNone')}</p>
      ) : (
        porJuego.map((j) => (
          <div className="juego-bloque" key={j.game}>
            <div className="juego-fila">
              <span className="jf-nombre">{pick(...(NOMBRE_JUEGO[j.game] || [j.game, j.game]))}</span>
              <span className="mini-bar jf-barra">
                <span
                  className={j.pct >= 80 ? 'bien' : j.pct >= 50 ? 'medio' : 'mal'}
                  style={{ width: j.pct + '%' }}
                />
              </span>
              <span className="jf-pct">{j.pct}%</span>
            </div>
            <div className="jf-tiempos muted">
              <span>{t('gr.crownRuns', { n: j.sesiones })}</span>
              {j.segPorPregunta != null && (
                <span>⏱ {t('gr.crownSpeed', { s: seg(j.segPorPregunta) })}</span>
              )}
              {j.record ? (
                <span className="jf-record">
                  🏆 {t('gr.crownRecord', { s: seg(j.record.segPorPregunta), n: j.record.preguntas })}
                </span>
              ) : (
                <span>{t('gr.crownNoRecord')}</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
