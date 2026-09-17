import React, { useState } from 'react';
import { liveStreak, getLevel, monthCalendar } from '../lib/streak.js';
import { aiAvailable } from '../lib/settings.js';
import { allRuns } from '../lib/leaderboard.js';
import { bestStreak } from '../lib/rachas.js';
import { t, pick } from '../lib/i18n.js';
import FoxCard from './FoxCard.jsx';

const WD_ES = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const WD_EN = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function recentRunsStats(limit) {
  const all = allRuns();
  const runs = all.slice(0, limit);
  if (!runs.length) return { acc: null, count: 0 };
  const acc = runs.reduce((s, r) => s + r.accuracy, 0) / runs.length;
  return { acc: Math.round(acc * 100), count: runs.length };
}

export default function Dashboard({ onStart, onNavigate, onFox }) {
  const [monthOffset, setMonthOffset] = useState(0);

  const s = liveStreak();
  const lvl = getLevel();
  
  const calDate = new Date();
  calDate.setMonth(calDate.getMonth() + monthOffset);
  const cal = monthCalendar(calDate);
  
  const last10 = recentRunsStats(10);
  const aiOn = aiAvailable();
  const WD = pick(WD_ES, WD_EN);

  const recordSeguidas = bestStreak();

  return (
    <div className="wide">
      <div className="page-head">
        <h1>Startseite</h1>
        <p>{t('home.sub')}</p>
      </div>

      {onFox && <FoxCard onAbrir={onFox} />}

      <div className="statcards">
        <div className="card statcard">
          <div className="n">{t('home.levelN', { n: lvl.level })}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="l" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 4 }}>
              <span>{t('home.xpTotal', { n: lvl.totalXp })}</span>
              <span className="sub" style={{ margin: 0 }}>{lvl.xpInto}/{lvl.xpNeeded}</span>
            </div>
            <div className="mini-bar" style={{ margin: 0, maxWidth: 'none' }}>
              <span style={{ width: lvl.pct + '%' }} />
            </div>
          </div>
        </div>
        <div className="card statcard">
          <div className="n">
            {s.current} {s.current > 0 ? '⭐' : ''}
          </div>
          <div>
            <div className="l">{t('home.streak')}</div>
            <div className="sub">{t('home.record')}: {s.longest} · ❄️ {s.freezes}</div>
          </div>
        </div>
        <div className="card statcard">
          <div className="n">
            {recordSeguidas || '—'} {recordSeguidas >= 5 ? '🔥' : recordSeguidas >= 2 ? '⚡' : ''}
          </div>
          <div>
            <div className="l">{t('home.bestRun')}</div>
            <div className="sub">{t('home.bestRunSub')}</div>
          </div>
        </div>
        <div className="card statcard">
          <div className="n">{last10.acc == null ? '—' : last10.acc + '%'}</div>
          <div>
            <div className="l">{t('home.acc10')}</div>
            <div className="sub">{t('home.sessions', { n: last10.count })}</div>
          </div>
        </div>
        <div className="card statcard">
          <div className="n">{allRuns().length}</div>
          <div>
            <div className="l">{t('home.sessionsTotal')}</div>
            <div className="sub">{aiOn ? t('home.aiOn') : t('home.aiOff')}</div>
          </div>
        </div>
      </div>

      <div className="dash-cols">
        <div className="panel">
          <div className="row spread" style={{ marginBottom: 4 }}>
            <h2 style={{ margin: 0 }}>{t('home.streakTitle')}</h2>
            <span className="pill">
              <span className={'flame' + (s.current > 0 ? '' : ' cold')} style={{ fontSize: '1rem' }}>
                {s.current > 0 ? '⭐' : '🧊'}
              </span>
              {s.current} {s.current === 1 ? t('home.day') : t('home.days')}
            </span>
          </div>
          <div className="row spread" style={{ marginBottom: 12 }}>
            <div className="cal-label" style={{ marginBottom: 0 }}>{cal.label}</div>
            <div className="row" style={{ gap: 8 }}>
              <button className="btn btn-sm" style={{ padding: '2px 8px' }} onClick={() => setMonthOffset(m => m - 1)}>&lt;</button>
              {monthOffset !== 0 && (
                <button className="btn btn-sm" style={{ padding: '2px 10px' }} onClick={() => setMonthOffset(0)}>{t('home.todayBtn')}</button>
              )}
              <button className="btn btn-sm" style={{ padding: '2px 8px' }} onClick={() => setMonthOffset(m => m + 1)}>&gt;</button>
            </div>
          </div>
          <div className="month-cal">
            {WD.map((d, i) => (
              <div className="mc-head" key={i}>
                {d}
              </div>
            ))}
            {cal.cells.map((c, i) =>
              c ? (
                <div
                  key={i}
                  className={'mc-cell' + (c.active ? ' active' : '') + (c.isToday ? ' today' : '')}
                  title={c.key}
                >
                  {c.day}
                </div>
              ) : (
                <div key={i} className="mc-cell empty" />
              )
            )}
          </div>
          <div className="muted" style={{ fontSize: '0.78rem', marginTop: 10 }}>
            {t('home.calMonth', { a: cal.activeThisMonth, b: cal.daysInMonth })}
            {s.atRisk ? t('home.atRisk') : ''}
          </div>
        </div>

        <div className="panel">
          <h2>{t('home.practice')}</h2>
          <p className="muted" style={{ fontSize: '0.83rem', marginBottom: 12 }}>
            {pick(
              <>Gramática y vocabulario mezclados: test, ordenar frases, cazar el error, artículos, anagramas y traducciones.</>,
              <>Grammar and vocabulary mixed: quiz, sentence order, spot the mistake, articles, anagrams and translations.</>
            )}
          </p>
          <button className="btn-primary" style={{ width: '100%', marginBottom: 10 }} onClick={() => onStart('mix', 'mixed', 'todo')}>
            {t('home.random')}
          </button>
          {/* Solo los dos que se practican a diario y no salen en la tanda
              mixta: el artículo y traducir. El resto (test, ordenar, cazar el
              error, tus fallos) ya entran en "De todo un poco", y tenerlos aquí
              además solo llenaba la portada de botones. Tienen pantalla propia,
              así que se navega a ellos en vez de arrancar una sesión. */}
          <div className="gametype-grid" style={{ marginBottom: 12 }}>
            <button className="gametype" onClick={() => onNavigate('gender')}>
              <span style={{ fontSize: '1.2rem' }}>🎯</span>
              <div>
                <span>{t('home.gGender')}</span><br/>
                <small>{t('home.gGenderSub')}</small>
              </div>
            </button>
            <button className="gametype" onClick={() => onNavigate('komm')}>
              <span style={{ fontSize: '1.2rem' }}>🔁</span>
              <div>
                <span>{t('home.gUeb')}</span><br/>
                <small>{t('home.gUebSub')}</small>
              </div>
            </button>
          </div>
          {aiOn && (
            <button className="btn-ghost btn-sm" style={{ width: '100%', marginBottom: 12 }} onClick={() => onStart('mix', 'ai', 'mixed')}>
              {t('home.aiReview')}
            </button>
          )}
          <div className="home-practica-pies">
            <button className="link-btn" style={{ padding: 0, fontSize: '0.84rem' }} onClick={() => onNavigate('grammar')}>
              {t('home.pickTopic')}
            </button>
            {/* El ahorcado y los demás juegos de mazo necesitan que elijas uno,
                así que desde aquí solo se puede llevar a Wortschatz. */}
            <button className="link-btn" style={{ padding: 0, fontSize: '0.84rem' }} onClick={() => onNavigate('vocab')}>
              {t('home.moreGames')}
            </button>
          </div>
          <p className="muted home-practica-nota">{t('home.practiceNote')}</p>
        </div>
      </div>
    </div>
  );
}
