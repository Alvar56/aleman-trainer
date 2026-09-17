import React, { useState } from 'react';
import { t, localeFecha } from '../lib/i18n.js';
import { ranking } from '../lib/leaderboard.js';
import { topicsTraducidos } from '../topics/index.js';

export default function Leaderboard({ onBack, highlightId }) {
  const [topicId, setTopicId] = useState('');
  const rows = ranking({ topicId: topicId || null, limit: 15 });

  return (
    <div className="stack">
      <div className="topbar">
        <h1>🏅 Bestenliste</h1>
        <button className="link-btn" onClick={onBack}>
          ← {t('back')}
        </button>
      </div>
      <p className="muted">{t('lb.sub')}</p>

      <select value={topicId} onChange={(e) => setTopicId(e.target.value)}>
        <option value="">{t('lb.allTopics')}</option>
        {topicsTraducidos().map((tp) => (
          <option key={tp.id} value={tp.id}>
            {tp.nameEs}
          </option>
        ))}
      </select>

      <div className="card" style={{ overflowX: 'auto' }}>
        {rows.length === 0 ? (
          <p className="muted">{t('lb.empty')}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="hide-mobile">#</th>
                <th>{t('lb.topic')}</th>
                <th className="hide-mobile">{t('lb.hits')}</th>
                <th>{t('lb.acc')}</th>
                <th className="hide-mobile">{t('lb.time')}</th>
                <th>{t('lb.points')}</th>
                <th className="hide-mobile">{t('lb.date')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className={r.id === highlightId ? 'me' : ''}>
                  <td className="hide-mobile">{i + 1}</td>
                  <td>{r.topicName}</td>
                  <td className="hide-mobile">
                    {r.correct}/{r.total}
                  </td>
                  <td>{Math.round(r.accuracy * 100)}%</td>
                  <td className="hide-mobile">
                    {Math.floor(r.seconds / 60)}:{String(r.seconds % 60).padStart(2, '0')}
                  </td>
                  <td>{r._score}</td>
                  <td className="hide-mobile">{new Date(r.date).toLocaleDateString(localeFecha())}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
