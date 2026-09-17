import React, { useState } from 'react';
import { t } from '../lib/i18n.js';
import { aiAvailable } from '../lib/settings.js';
import { explainItem } from '../lib/ai.js';

export default function Feedback({ item, correct, chosen, onNext, onRetry, last }) {
  const [aiText, setAiText] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const aiOn = aiAvailable();

  async function askAi() {
    setLoading(true);
    setErr('');
    try {
      const txt = await explainItem({ item, chosen });
      setAiText(txt);
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  const isOpen = item.type === 'open';

  return (
    <div className={'feedback ' + (correct ? 'ok' : 'no')}>
      <div className="verdict">{correct ? t('fb.right') : t('fb.wrong')}</div>
      {!isOpen && <div className="de">{deLine(item)}</div>}
      {!isOpen && <div className="es"><span className="lang-tag">ES</span>{item.translation || item.sentence || item.clozeText || ''}</div>}
      {!isOpen && item.explanation && <div className="why"><span className="lang-tag">{t('fb.why')}</span>{item.explanation}</div>}
      {item.source === 'ia' && <div className="pill ai" style={{ marginTop: 10 }}>{t('fb.aiItem')}</div>}

      {aiText && <div className="ai-explain">✨ {aiText}</div>}
      {err && <p className="muted" style={{ marginTop: 8, fontSize: '0.83rem' }}>{t('fb.aiFail')}{err}</p>}

      <div className="btn-row" style={{ marginTop: 14 }}>
        <button className="btn-primary" onClick={onNext}>
          {last ? t('fb.results') : t('fb.next')}
        </button>
        {!correct && onRetry && (
          <button className="btn-ghost" onClick={onRetry}>
            Reintentar
          </button>
        )}
        {aiOn && !aiText && !isOpen && (
          <button className="btn-ghost" onClick={askAi} disabled={loading}>
            {loading ? t('fb.asking') : t('fb.askAi')}
          </button>
        )}
      </div>
    </div>
  );
}

function deLine(item) {
  if (!item) return '';
  if (item.type === 'order' && item.solution) return item.solution.join(' ');
  if (item.type === 'judge') return item.correctForm || '';
  if (item.type === 'cloze') {
    if (!item.clozeText) return '';
    let i = 0;
    return String(item.clozeText).replace(/___/g, () => item.clozeAnswers ? (item.clozeAnswers[i++] || '___') : '___');
  }
  if (item.type === 'open') return item.question || item.sentence || '';
  
  const parts = String(item.answer || '___').split(/\s*\.\.\.\s*/);
  let i = 0;
  return String(item.sentence || '').replace(/___/g, () => parts[i++] || '___');
}
