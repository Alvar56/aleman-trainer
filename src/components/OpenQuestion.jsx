import React, { useEffect, useRef, useState } from 'react';
import { t } from '../lib/i18n.js';
import { tc } from '../lib/contenido/index.js';
import { evaluateAnswer } from '../lib/ai.js';
import { getLektion } from '../lib/kursbuch/index.js';

export default function OpenQuestion({ item, onAnswer, lektionId }) {
  const [texto, setTexto] = useState('');
  const [hecho, setHecho] = useState(false);
  const [evaluando, setEvaluando] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [err, setErr] = useState('');
  const input = useRef(null);

  useEffect(() => {
    setTexto('');
    setHecho(false);
    setEvaluando(false);
    setFeedback(null);
    setErr('');
    input.current?.focus();
  }, [item.id]);

  async function comprobar() {
    if (hecho || evaluando || !texto.trim()) return;
    setEvaluando(true);
    
    try {
      const lektion = getLektion(lektionId);
      const res = await evaluateAnswer({ item, answer: texto.trim(), lektion });
      setFeedback(res);
      setHecho(true);
      onAnswer(res.correct, texto.trim(), res.why);
    } catch (e) {
      setErr(e.message);
    } finally {
      setEvaluando(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      comprobar();
    }
  }

  return (
    <div>
      <div className="prompt-label">{tc(item.anweisung) || t('oq.prompt')}</div>
      
      {item.context && (
        <div style={{ marginBottom: 16, padding: 12, background: 'var(--surface-2)', borderRadius: 8, fontStyle: 'italic', fontSize: '0.95rem' }}>
          {item.context}
        </div>
      )}

      {item.sentence && (
        <div className="sentence" style={{ marginBottom: 16 }}>
          {item.sentence}
        </div>
      )}

      <div className="write-fila write-col">
        <textarea
          ref={input}
          className={'ask-input write-input' + (hecho ? (feedback?.correct ? ' bien' : ' mal') : '')}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={hecho || evaluando}
          placeholder={t('oq.placeholder')}
        />
        
        {!hecho && (
          <button className="btn-primary" style={{ marginTop: 16 }} onClick={comprobar} disabled={!texto.trim() || evaluando}>
            {evaluando ? t('oq.marking') : t('ses.check')}
          </button>
        )}
      </div>

      {err && (
        <p style={{ color: 'var(--bad)', fontSize: '0.85rem', marginTop: 8 }}>❌ {err}</p>
      )}
      {hecho && feedback && (
        <div style={{ marginTop: 20, padding: 16, background: feedback.correct ? 'var(--good-bg)' : 'var(--bad-bg)', borderLeft: `4px solid ${feedback.correct ? 'var(--good)' : 'var(--bad)'}`, borderRadius: 8 }}>
          <strong>{feedback.correct ? t('oq.good') : t('oq.improve')}</strong>
          {feedback.why && <p style={{ marginTop: 8, marginBottom: 0 }}>{feedback.why}</p>}
        </div>
      )}
    </div>
  );
}
