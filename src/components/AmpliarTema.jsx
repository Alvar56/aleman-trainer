import React from 'react';
import { t } from '../lib/i18n.js';
import { coloresDeck, saveUserDeck } from '../lib/vocab.js';
import { ampliarVocabulario } from '../lib/ai.js';
import { aiAvailable } from '../lib/settings.js';
import { runJob, clearJob } from '../lib/aiJobs.js';
import { useAiJob } from '../lib/useAiJob.js';

// El premio por dejar un tema entero en verde: pedirle a la IA más palabras de
// ese mismo campo.
//
// Mientras falten palabras se ve igualmente, pero apagado y diciendo cuántas
// quedan. Un botón que aparece de la nada no se entiende; uno que lleva un
// rato ahí con un contador sí, y encima da algo que perseguir.
export default function AmpliarTema({ deck, niveau = 'A2', subtemas = [], onCreado }) {
  const CLAVE = `voc:ampliar:${deck?.id}`;
  const job = useAiJob(CLAVE);
  const busy = job.status === 'running';
  const nuevas = job.status === 'done' ? job.result : null;
  const err = job.status === 'error' ? job.error : '';
  const col = coloresDeck(deck);
  const aiOn = aiAvailable();

  if (!deck?.cards?.length) return null;

  const faltan = col.total - col.verdes;

  function pedir() {
    if (busy) return;
    runJob(CLAVE, () =>
      ampliarVocabulario({
        tema: deck.name,
        niveau,
        subtemas,
        yaTengo: deck.cards.map((c) => c.de)
      })
    );
  }

  // Las palabras nuevas se guardan como mazo propio, no dentro del original:
  // el del libro es el del libro, y mezclarlas ahí dejaría el tema del
  // Kursbuch con palabras que no vienen en el Kursbuch.
  function guardar() {
    const creado = saveUserDeck({
      name: `${deck.name} +`,
      emoji: '✨',
      cards: nuevas.woerter.map(({ de, es, ex, exEs }) => ({ de, es, ex, exEs })),
      source: 'ai'
    });
    clearJob(CLAVE);
    onCreado?.(creado);
  }

  return (
    <div className="ampliar">
      <div className="row spread" style={{ alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div>
          <div className="lk-block-title" style={{ margin: 0 }}>
            {col.todasVerdes ? '✨ ' : '🔒 '}
            {t('voc.expandTitle', { tema: deck.name })}
          </div>
          <p className="muted" style={{ fontSize: '0.8rem', margin: '3px 0 0' }}>
            {col.todasVerdes
              ? t('voc.expandReady')
              : t(faltan === 1 ? 'voc.expandLocked1' : 'voc.expandLocked', { n: faltan, total: col.total })}
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={pedir}
          disabled={!col.todasVerdes || !aiOn || busy}
        >
          {busy ? t('voc.expandThinking') : t('voc.expandGo')}
        </button>
      </div>

      {/* El semáforo del tema, para saber qué te falta sin bajar a la lista. */}
      {!col.todasVerdes && (
        <div className="ampliar-barra" title={t('voc.expandLegend')}>
          {col.verdes > 0 && <span className="av-verde" style={{ flex: col.verdes }} />}
          {col.amarillas > 0 && <span className="av-amarilla" style={{ flex: col.amarillas }} />}
          {col.rojas > 0 && <span className="av-roja" style={{ flex: col.rojas }} />}
          {col.sinColor > 0 && <span className="av-vacia" style={{ flex: col.sinColor }} />}
        </div>
      )}

      {!aiOn && col.todasVerdes && (
        <p className="muted" style={{ fontSize: '0.8rem', marginTop: 8 }}>{t('voc.expandNeedsAi')}</p>
      )}
      {err && <p style={{ color: 'var(--bad)', fontSize: '0.83rem', marginTop: 8 }}>{err}</p>}

      {nuevas && (
        <div className="stack" style={{ gap: 10, marginTop: 14 }}>
          <div className="lk-block-title" style={{ margin: 0 }}>
            {t('voc.expandFound', { n: nuevas.woerter.length })}
          </div>
          <div className="card-list-grid">
            {nuevas.woerter.map((w, i) => (
              <div className="card-mini" key={i}>
                <div style={{ fontWeight: 600 }}>{w.de}</div>
                <div className="muted">{w.es}</div>
                {w.ex && <div className="ampliar-ej">{w.ex}</div>}
                {w.exEs && <div className="muted ampliar-ej-es">{w.exEs}</div>}
                {w.nota && <div className="ampliar-nota">{w.nota}</div>}
              </div>
            ))}
          </div>
          <div className="row" style={{ gap: 10, flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={guardar}>{t('voc.expandSave')}</button>
            <button className="btn-ghost btn-sm" onClick={pedir} disabled={busy}>{t('voc.expandMore')}</button>
            <button
              className="link-btn"
              style={{ padding: 0, marginLeft: 'auto', fontSize: '0.8rem' }}
              onClick={() => clearJob(CLAVE)}
            >
              {t('voc.expandDiscard')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
