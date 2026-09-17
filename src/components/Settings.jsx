import React, { useState } from 'react';
import { t } from '../lib/i18n.js';
import { getSettings, setSettings } from '../lib/settings.js';
import { storage } from '../lib/storage.js';
import { getLevel, liveStreak } from '../lib/streak.js';
import { saldo } from '../lib/monedas.js';
import { coronas, getFuchs } from '../lib/fuchs.js';
import { bestStreak } from '../lib/rachas.js';
import { generateItems } from '../lib/ai.js';

export default function Settings({ onBack }) {
  const [s, setS] = useState(getSettings());
  const [test, setTest] = useState(null);
  const lvl = getLevel();
  const racha = liveStreak();

  const up = (patch) => setS(setSettings(patch));

  async function tryAi() {
    setTest(t('set.testing'));
    try {
      const items = await generateItems({ topicId: 'modalverben', topicName: 'Modalverben', count: 2 });
      setTest(items.length ? t('set.testOk', { n: items.length }) : t('set.testWeird'));
    } catch (e) {
      setTest('❌ ' + e.message);
    }
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(storage.exportAll(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'deutsch-trainer-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        storage.importAll(JSON.parse(reader.result));
        alert(t('set.imported'));
        location.reload();
      } catch {
        alert(t('set.badFile'));
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="stack reading">
      <div className="topbar">
        <h1>Einstellungen</h1>
        <button className="link-btn" onClick={onBack}>← {t('back')}</button>
      </div>

      {/* Lo que llevas conseguido, junto. Estaba repartido entre la portada, el
          monedero y el panel del zorro, y aquí es donde uno lo viene a mirar. */}
      <div className="panel">
        <h2>{t('set.account')}</h2>
        <div className="set-resumen">
          <div><strong>{saldo()}</strong><small>{t('fox.coins')}</small></div>
          <div><strong>{lvl.level}</strong><small>{t('set.level')}</small></div>
          <div><strong>{coronas()}</strong><small>{t('set.crowns')}</small></div>
          <div><strong>{racha.current}</strong><small>{t('set.streakDays')}</small></div>
          <div><strong>{bestStreak()}</strong><small>{t('set.bestRun')}</small></div>
        </div>
        <p className="field-hint" style={{ marginTop: 12 }}>{t('set.foxHint', { nombre: getFuchs().nombre })}</p>
      </div>

      <div className="panel">
        <h2>{t('set.session')}</h2>
        <label className="field">
          {t('set.perSession')}
          <input type="number" min="4" max="30" value={s.sessionSize}
            onChange={(e) => up({ sessionSize: Number(e.target.value) })} />
          <span className="field-hint">{t('set.xpHint')}</span>
        </label>
      </div>

      <div className="panel">
        <h2>{t('set.aiTitle')}</h2>
        <p className="muted" style={{ fontSize: '0.9rem' }}>
          {t('set.aiIntro')}
        </p>
        <label className="switch" style={{ marginTop: 14 }}>
          <input type="checkbox" checked={s.aiEnabled} onChange={(e) => up({ aiEnabled: e.target.checked })} />
          <span>{t('set.aiOn')}</span>
        </label>

        {s.aiEnabled && (
          <>
            <label className="field">
              {t('set.provider')}
              <select value={s.aiProvider} onChange={(e) => up({ aiProvider: e.target.value })}>
                <option value="claude-local">Claude (local, sin API key)</option>
                <option value="gemini">Google Gemini (capa gratuita)</option>
                <option value="openai-compat">OpenAI / compatible</option>
              </select>
            </label>
            {s.aiProvider === 'claude-local' ? (
              <p className="field-hint" style={{ marginTop: 10 }}>
                {t('set.localHint')}
              </p>
            ) : (
              <>
                <label className="field">
                  {t('set.model')}
                  <input type="text" value={s.aiModel} onChange={(e) => up({ aiModel: e.target.value })}
                    placeholder={s.aiProvider === 'gemini' ? 'gemini-1.5-flash' : 'gpt-4o-mini'} />
                </label>
                <label className="field">
                  API key
                  <input type="password" value={s.aiKey} onChange={(e) => up({ aiKey: e.target.value })}
                    placeholder={t('set.keyPh')} />
                  <span className="field-hint">
                    {s.aiProvider === 'gemini'
                      ? t('set.geminiHint')
                      : t('set.openaiHint')}
                  </span>
                </label>
                {s.aiProvider === 'openai-compat' && (
                  <label className="field">
                    Base URL
                    <input type="text" value={s.aiBaseUrl || ''}
                      onChange={(e) => up({ aiBaseUrl: e.target.value })}
                      placeholder="https://api.openai.com/v1" />
                    <span className="field-hint">Para Ollama, Groq, OpenRouter u otro endpoint compatible.</span>
                  </label>
                )}
              </>
            )}
            <label className="field">
              {t('set.aiShare')}: <strong>{Math.round(s.aiShare * 100)}%</strong>
              {/* Llega hasta el 100%: quien quiera la tanda entera de la IA
                  puede pedirla. Y el 0 vale: se practica solo con plantillas. */}
              <input type="range" min="0" max="1" step="0.1" value={s.aiShare}
                onChange={(e) => up({ aiShare: Number(e.target.value) })} style={{ width: '100%' }} />
            </label>
            <p className="field-hint" style={{ marginTop: 6 }}>
              {s.aiShare === 0 ? t('set.aiShareOff') : t('set.aiShareHint')}
            </p>
            <div style={{ marginTop: 14 }}>
              <button className="btn-ghost btn-sm" onClick={tryAi}>{t('set.testConn')}</button>
              {test && <p className="field-hint" style={{ marginTop: 8 }}>{test}</p>}
            </div>
          </>
        )}
      </div>

      <div className="panel">
        <h2>{t('set.data')}</h2>
        <p className="muted" style={{ fontSize: '0.9rem', marginBottom: 14 }}>
          {t('set.dataIntro')}
        </p>
        <div className="btn-row">
          <button className="btn-ghost btn-sm" onClick={exportData}>{t('set.export')}</button>
          <label className="btn-ghost btn-sm" style={{ display: 'inline-flex', alignItems: 'center' }}>
            {t('set.import')}
            <input type="file" accept="application/json" onChange={importData} style={{ display: 'none' }} />
          </label>
          <button className="btn-ghost btn-sm danger"
            onClick={() => {
              if (!confirm(t('set.confirmReset'))) return;
              const n = storage.resetAll();
              alert(t('set.resetDone', { n }));
              location.reload();
            }}>
            {t('set.reset')}
          </button>
        </div>
      </div>
    </div>
  );
}
