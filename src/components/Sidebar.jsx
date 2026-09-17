import React, { useState } from 'react';
import { getSettings, setSettings, aiAvailable } from '../lib/settings.js';
import { getLang, setLang, LANGS, t, pick } from '../lib/i18n.js';

// El menú va en alemán. La traducción se queda en el tooltip, no en pantalla.
const NAV = [
  { id: 'home', ico: '🏠', label: 'Startseite', es: 'Inicio', en: 'Home' },
  { id: 'grammar', ico: '📖', label: 'Grammatik', es: 'Gramática', en: 'Grammar' },
  { id: 'vocab', ico: '📚', label: 'Wortschatz', es: 'Vocabulario', en: 'Vocabulary' },
  { id: 'komm', ico: '💬', label: 'Kommunikation', es: 'Comunicación', en: 'Communication' },
  { id: 'news', ico: '📰', label: 'Nachrichten', es: 'Noticias', en: 'News' },
  { id: 'lieder', ico: '🎵', label: 'Lieder', es: 'Canciones', en: 'Songs' },
  { id: 'diary', ico: '✍️', label: 'Tagebuch', es: 'Diario', en: 'Diary' },
  { id: 'pruefung', ico: '🎓', label: 'Prüfung', es: 'Examen A2', en: 'A2 exam' },
  { id: 'notebook', ico: '📓', label: 'Notizbuch', es: 'Cuaderno', en: 'Notebook' },
  { id: 'leaderboard', ico: '🏅', label: 'Bestenliste', es: 'Clasificación', en: 'Leaderboard' },
  { id: 'settings', ico: '⚙️', label: 'Einstellungen', es: 'Ajustes', en: 'Settings' }
];

// value del <select>: 'plantillas' | 'gemini' | 'openai-compat'
function engineValue(s) {
  if (!s.aiEnabled) return 'plantillas';
  return s.aiProvider || 'gemini';
}

export default function Sidebar({ current, onNavigate }) {
  const [s, setS] = useState(getSettings());

  function changeEngine(v) {
    const patch = v === 'plantillas' ? { aiEnabled: false } : { aiEnabled: true, aiProvider: v };
    setS(setSettings(patch));
  }

  const aiOn = aiAvailable(s);
  const aiWanted = s.aiEnabled && !aiOn;

  return (
    <aside className="sidebar">
      <div className="brand">Deutsch Trainer</div>

      {NAV.map((n) => (
        <button
          key={n.id}
          className={'nav-item' + (current === n.id ? ' active' : '')}
          onClick={() => onNavigate(n.id)}
          title={pick(n.es, n.en)}
        >
          <span className="ico">{n.ico}</span>
          <span className="nav-de">{n.label}</span>
        </button>
      ))}

      <div className="sep" />

      <div className="lang-box">
        {LANGS.map((l) => (
          <button
            key={l.id}
            className={'lang-btn' + (getLang() === l.id ? ' on' : '')}
            onClick={() => setLang(l.id)}
            title={l.label}
          >
            {l.id.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="engine-box">
        <label htmlFor="engine">{t('engine')}</label>
        <select id="engine" value={engineValue(s)} onChange={(e) => changeEngine(e.target.value)}>
          <option value="plantillas">Plantillas (sin IA)</option>
          <option value="claude-local">IA · Claude (local, sin key)</option>
          <option value="gemini">IA · Google Gemini</option>
          <option value="openai-compat">IA · OpenAI / compatible</option>
        </select>
        <div className="engine-status">
          {aiOn ? (
            <>
              <span className="dot-live" /> IA activa · genera y explica
            </>
          ) : aiWanted ? (
            <>
              <span className="dot-off" />
              <button className="link-btn" style={{ padding: 0, fontSize: '0.76rem' }} onClick={() => onNavigate('settings')}>
                Falta la API key →
              </button>
            </>
          ) : (
            <>
              <span className="dot-off" /> Plantillas locales
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
