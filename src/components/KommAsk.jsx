import React, { useEffect, useRef, useState } from 'react';
import Dialog from './Dialog.jsx';
import { generateDialog } from '../lib/ai.js';
import { aiAvailable } from '../lib/settings.js';
import { t, pick } from '../lib/i18n.js';
import { runJob, clearJob } from '../lib/aiJobs.js';
import { useAiJob } from '../lib/useAiJob.js';

const JOB = 'komm:ask';

const SUG_ES = [
  'En el médico',
  'Alquilar un piso en Viena',
  'Una entrevista de trabajo',
  'Devolver algo en una tienda',
  'Quedar con un amigo el finde',
  'Discutir con el vecino por el ruido',
  'Abrir una cuenta en el banco',
  'Small talk en la pausa del café'
];
const SUG_EN = [
  'At the doctor',
  'Renting a flat in Vienna',
  'A job interview',
  'Returning something in a shop',
  'Making plans with a friend',
  'Arguing with a neighbour about noise',
  'Opening a bank account',
  'Small talk on the coffee break'
];

export default function KommAsk({ niveau = 'A2' }) {
  // La conversacion vive en aiJobs: cambiar de seccion ya no la borra ni corta
  // la generacion a medias.
  const job = useAiJob(JOB);
  const busy = job.status === 'running';
  const dialog = job.status === 'done' ? job.result : null;
  const err = job.status === 'error' ? job.error : '';
  const lastThema = job.meta?.thema || '';
  const [q, setQ] = useState(() => job.meta?.thema || '');
  const aiOn = aiAvailable();
  const SUGERENCIAS = pick(SUG_ES, SUG_EN);
  const box = useRef(null);
  // Se pone a true al pulsar tu, y es lo unico que autoriza el scroll.
  const pidiendo = useRef(false);

  // El scroll SOLO cuando acabas de pedir tú un diálogo: si no, se queda
  // debajo de la rejilla de lecciones y parece que no pasa nada.
  //
  // Antes se intentaba con un ref que se saltaba la PRIMERA pasada del efecto,
  // y eso no aguanta: estamos dentro de <React.StrictMode> (main.jsx) y en
  // desarrollo React monta, ejecuta el efecto, lo limpia y lo vuelve a
  // ejecutar. La primera pasada gastaba la guarda y la segunda ya entraba, así
  // que abrir Kommunikation te bajaba solo a una conversación de otro día.
  //
  // Este ref no tiene ese problema porque no lo pone el montaje: solo lo pone
  // ask(), o sea tú al pedir. Es la misma solución que GrammarAsk.
  useEffect(() => {
    if (!pidiendo.current) return;
    if (dialog || busy) box.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (dialog) pidiendo.current = false;
  }, [dialog, busy]);

  function ask(text) {
    const thema = (text ?? q).trim();
    if (!thema) return;
    setQ(thema);
    pidiendo.current = true;
    runJob(JOB, () => generateDialog({ thema, niveau }), { thema });
  }

  if (dialog) {
    return (
      <div style={{ marginTop: 34, scrollMarginTop: 16 }} ref={box}>
        <Dialog
          dialog={dialog}
          lektion={null}
          busy={busy}
          onBack={() => clearJob(JOB)}
          onRegenerate={() => ask(lastThema)}
        />
      </div>
    );
  }

  return (
    <div className="ask" ref={box} style={{ scrollMarginTop: 16 }}>
      <div className="sec-title">
        <h2>{t('komm.askTitle')}</h2>
        <span className="muted">{t('komm.askSub')}</span>
      </div>

      <div className="card ask-box">
        <div className="ask-row">
          <input
            className="ask-input"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !busy && ask()}
            placeholder={t('komm.askPh')}
            disabled={!aiOn}
          />
          <button className="btn-primary" onClick={() => ask()} disabled={!aiOn || busy || !q.trim()}>
            {busy ? t('komm.writing') : t('komm.askGo')}
          </button>
        </div>

        {!busy && (
          <div className="ask-sug">
            {SUGERENCIAS.map((s) => (
              <button key={s} className="ask-chip" onClick={() => ask(s)} disabled={!aiOn}>
                {s}
              </button>
            ))}
          </div>
        )}

        {!aiOn && (
          <p className="muted" style={{ fontSize: '0.83rem', marginTop: 10 }}>
            {t('komm.offConv')}
          </p>
        )}
        {err && <p style={{ color: 'var(--bad)', fontSize: '0.85rem', marginTop: 10 }}>{err}</p>}
      </div>

      {busy && (
        <div className="card center" style={{ marginTop: 14 }}>
          <p className="muted">{t('komm.askWriting')}</p>
        </div>
      )}
    </div>
  );
}
