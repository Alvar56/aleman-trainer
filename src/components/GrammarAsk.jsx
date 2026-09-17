import React, { useEffect, useRef, useState } from 'react';
import { explainGrammar } from '../lib/ai.js';
import { aiAvailable } from '../lib/settings.js';
import { t, pick } from '../lib/i18n.js';
import { runJob, clearJob } from '../lib/aiJobs.js';
import { useAiJob } from '../lib/useAiJob.js';
import Cargando from './Cargando.jsx';

const JOB = 'grammar:ask';

const SUG_ES = [
  '¿Cuándo se usa weil y cuándo denn?',
  'Akkusativ o Dativ, ¿cómo lo sé?',
  'Verbos separables',
  '¿Cuándo Perfekt con sein?',
  'Las terminaciones del adjetivo',
  'Diferencia entre wenn y als'
];
const SUG_EN = [
  'When do I use weil and when denn?',
  'Akkusativ or Dativ — how do I know?',
  'Separable verbs',
  'When is the Perfekt formed with sein?',
  'Adjective endings',
  'Difference between wenn and als'
];

export default function GrammarAsk({ niveau = 'A2', onPractise }) {
  // La respuesta vive en aiJobs, no aquí: así aguanta el cambio de sección y
  // sigue puesta hasta que preguntes otra cosa.
  const job = useAiJob(JOB);
  const busy = job.status === 'running';
  const res = job.status === 'done' ? job.result : null;
  const err = job.status === 'error' ? job.error : '';
  const [q, setQ] = useState(() => job.meta?.q || '');
  const aiOn = aiAvailable();
  const SUGERENCIAS = pick(SUG_ES, SUG_EN);
  const box = useRef(null);
  const pidiendo = useRef(false);

  // El scroll SOLO cuando acabas de preguntar tú. Antes iba atado a que
  // cambiara "res", y la respuesta guardada llega un pelo después de montar el
  // componente: entrabas en Grammatik y la página se bajaba sola a una
  // respuesta de ayer.
  useEffect(() => {
    if (!pidiendo.current) return;
    if (res || busy) box.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (res) pidiendo.current = false;
  }, [res, busy]);

  // Si la pregunta guardada no es la que hay en la caja, sincronízala al volver.
  useEffect(() => {
    if (job.meta?.q && job.meta.q !== q) setQ(job.meta.q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job.meta?.q]);

  function ask(text) {
    const pregunta = (text ?? q).trim();
    if (!pregunta) return;
    setQ(pregunta);
    pidiendo.current = true;
    runJob(JOB, () => explainGrammar({ query: pregunta, niveau }), { q: pregunta });
  }

  return (
    <div className="ask" id="ask" ref={box} style={{ scrollMarginTop: 16 }}>
      <div className="sec-title">
        <h2>{t('ask.title')}</h2>
        <span className="muted">{t('ask.sub')}</span>
      </div>

      <div className="card ask-box">
        <div className="ask-row">
          <input
            className="ask-input"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !busy && ask()}
            placeholder={t('ask.ph')}
            disabled={!aiOn}
          />
          <button className="btn-primary" onClick={() => ask()} disabled={!aiOn || busy || !q.trim()}>
            {busy ? t('ask.thinking') : t('ask.go')}
          </button>
        </div>

        {!res && !busy && (
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
            {t('ask.off')}
          </p>
        )}
        {err && <p style={{ color: 'var(--bad)', fontSize: '0.85rem', marginTop: 10 }}>{err}</p>}
      </div>

      {busy && (
        <div style={{ marginTop: 14 }}>
          <Cargando
            icono="💬"
            titulo={t('wait.askTitle')}
            pasos={[t('wait.ask1'), t('wait.ask2'), t('wait.ask3')]}
          />
        </div>
      )}

      {res && (
        <div className="stack" style={{ marginTop: 14 }}>
          <div className="card ask-answer">
            <h2 style={{ marginBottom: 6 }}>{res.titel}</h2>
            {res.kurz && <p className="ask-kurz">{res.kurz}</p>}
          </div>

          {res.abschnitte.map((s, i) => (
            <div className="card" key={i}>
              {s.title && <div className="lk-block-title">{s.title}</div>}
              {s.body && <p className="lk-expl">{s.body}</p>}
              {s.beispiele.length > 0 && (
                <ul className="lk-examples">
                  {s.beispiele.map((b, bi) => (
                    <li key={bi}>
                      <span className="de">{b.de}</span>
                      <span className="es">{b.es}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.tabelle && (
                <div className="scroll-x" style={{ marginTop: 12 }}>
                  {s.tabelle.title && <h3 style={{ marginBottom: 8 }}>{s.tabelle.title}</h3>}
                  <table>
                    <thead>
                      <tr>{s.tabelle.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {s.tabelle.rows.map((r, ri) => (
                        <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {res.fehler.length > 0 && (
            <div className="card">
              <div className="lk-block-title">{t('gr.pitfalls')}</div>
              <ul className="pitfalls">
                {res.fehler.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}

          {res.merksatz && (
            <div className="card ask-merk">
              <span className="ask-merk-ico">🧠</span>
              <div>
                <strong>{t('ask.remember')}</strong>
                <p style={{ marginTop: 3 }}>{res.merksatz}</p>
              </div>
            </div>
          )}

          {/* Leer la explicación y creerse que se ha entendido es facilísimo.
              Cuatro ejercicios sobre ella dicen la verdad. */}
          <div className="btn-row">
            {onPractise && (
              <button className="btn-primary" onClick={() => onPractise({ pregunta: q, res })}>
                {t('ask.practise')}
              </button>
            )}
            <button className="btn-ghost btn-sm" onClick={() => { clearJob(JOB); setQ(''); }}>
              {t('ask.another')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
