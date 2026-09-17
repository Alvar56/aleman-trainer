import React, { useEffect, useState } from 'react';
import { t, localeFecha } from '../lib/i18n.js';
import { listNotes, createNote, notebookStats } from '../lib/notebook.js';
import { getLektion, lektionLabel } from '../lib/kursbuch/index.js';
import { runningJobs, subscribeAll } from '../lib/aiJobs.js';
import { aiAvailable } from '../lib/settings.js';

function fmtDate(d) {
  if (!d) return '';
  try {
    return new Date(d + 'T00:00:00').toLocaleDateString(localeFecha(), { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return d;
  }
}

export default function Notebook({ onOpen }) {
  // Qué notas tienen algo cociéndose. Así, si lanzaste el análisis de una foto
  // y te fuiste, al volver ves en qué nota estaba y entras de un clic en vez de
  // buscarla por la fecha.
  const [enMarcha, setEnMarcha] = useState(() => runningJobs());
  useEffect(() => subscribeAll(() => setEnMarcha(runningJobs())), []);
  const notes = listNotes();
  const st = notebookStats();
  const aiOn = aiAvailable();

  return (
    <div>
      <div className="page-head">
        <h1>Notizbuch</h1>
        <p>{t('nb.sub')}</p>
      </div>

      {!aiOn && (
        <div className="card" style={{ marginBottom: 16 }}>
          {t('nb.offHint')}
        </div>
      )}

      <div className="row" style={{ gap: 10, marginBottom: 18, flexWrap: 'wrap', alignItems: 'center' }}>
        <button className="btn-primary" onClick={() => onOpen(createNote().id)}>
          {t('nb.new')}
        </button>
        <span className="pill">{st.count} {st.count === 1 ? t('entry') : t('entries')}</span>
        {st.withItems > 0 && <span className="pill">{t('nb.withEx', { n: st.withItems })}</span>}
      </div>

      {notes.length === 0 ? (
        <div className="card center">
          <p className="muted">{t('nb.empty')}</p>
        </div>
      ) : (
        <div className="stack">
          {notes.map((n) => {
            const l = getLektion(n.lektionId);
            const preview = (n.clean || n.raw || '').replace(/\s+/g, ' ').trim().slice(0, 140);
            return (
              <button className="card topic-open" key={n.id} onClick={() => onOpen(n.id)}>
                <div className="row spread" style={{ alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="t-title">{n.title || lektionLabel(l)}</div>
                    <div className="muted" style={{ fontSize: '0.8rem', margin: '2px 0 6px' }}>
                      {fmtDate(n.date)} · {l?.bandName} · {lektionLabel(l)}
                    </div>
                    <div className="t-blurb">{preview || t('nb.noContent')}</div>
                  </div>
                  <span className="chev">›</span>
                </div>
                <div className="row" style={{ gap: 8, marginTop: 10, fontSize: '0.76rem', flexWrap: 'wrap' }}>
                  {n.clean && <span className="pill">{t('nb.clean')}</span>}
                  {n.items?.length > 0 && <span className="pill">{t('nb.exercises', { n: n.items.length })}</span>}
                  {!n.clean && !n.items?.length && <span className="muted">{t('nb.draft')}</span>}
                  {enMarcha.some((k) => k.startsWith('foto:' + n.id + ':')) && (
                    <span className="pill ai">⏳ {t('nb.analysing')}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
