import React, { useMemo, useRef, useState } from 'react';
import BookNav from './BookNav.jsx';
import { allDecks, deckStats, saveUserDeck, vocabOverall, vocabSections, genderStats, GENDER_NIVELES, vocabModes, cartasFalladas, cartasQueFaltan, cardProg, limpiarColores, getCardColor, setCardColor } from '../lib/vocab.js';
import { KURSBUCH, getLektion, lektionLabel, lektionDecks, lektionDeckTodo } from '../lib/kursbuch/index.js';
import { parseVocabFile } from '../lib/xlsxImport.js';
import { generateVocab, generateConjugation } from '../lib/ai.js';
import { aiAvailable } from '../lib/settings.js';
import { t, pick } from '../lib/i18n.js';
import CoronaPanel, { BarrasTema } from './ProgresoTema.jsx';
import AmpliarTema from './AmpliarTema.jsx';
import { UMBRAL_TERMINAR } from '../lib/progress.js';
import Escuchar from './Escuchar.jsx';

function DeckCard({ deck, onOpen }) {
  const s = deckStats(deck);
  return (
    <button className="card topic-open" onClick={() => onOpen(deck.id)}>
      <div className="row spread" style={{ alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="t-title">{deck.emoji} {deck.name}</div>
          <div className="t-blurb">
            {s.total} {t('voc.cards')}
            {deck.builtin ? '' : deck.source === 'ai' ? ' · IA' : ' · ' + t('voc.imported')}
          </div>
        </div>
        <span className="pill">{s.pct}%</span>
      </div>
      <div className="mini-bar" style={{ margin: '14px 0 8px' }}>
        <span style={{ width: s.pct + '%' }} />
      </div>
      <div className="muted" style={{ fontSize: '0.78rem' }}>
        {s.known} {t('voc.known')} · {s.fresh} {t('voc.fresh')}
      </div>
    </button>
  );
}

export default function Vocab({ lektionId, tab, onTab, onOpenLektion, onOpen, onGenderGame, onBack, onChanged, onStart, onReto }) {
  if (lektionId) {
    return <LektionVocab lektionId={lektionId} tab={tab} onTab={onTab} onStart={onStart} onReto={onReto} onBack={onBack} />;
  }
  return (
    <VocabHome
      onOpenLektion={onOpenLektion}
      onOpen={onOpen}
      onGenderGame={onGenderGame}
      onChanged={onChanged}
      onStart={onStart}
    />
  );
}

// ---------- vocabulario de una lección ----------
// Igual que una lección de Grammatik: dos pestañas, primero todo el material
// y luego los ejercicios sobre ese material.
// El tomo del Kursbuch como nivel legible: 'a21' -> 'A2.1'. La IA lo usa para
// medir cuanto puede apretar al proponer palabras nuevas.
function nivelDe(lektion) {
  const m = /^a(\d)(\d)$/.exec(String(lektion?.bandId || ''));
  return m ? `A${m[1]}.${m[2]}` : 'A2';
}

function LektionVocab({ lektionId, tab = 'teoria', onTab, onStart, onReto, onBack }) {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  const setTab = (t) => onTab?.(t);
  const lektion = getLektion(lektionId);
  if (!lektion) {
    return (
      <div className="card center stack">
        <p>{t('notFound')}</p>
        <button className="btn-ghost" onClick={onBack}>{t('back')}</button>
      </div>
    );
  }
  const decks = lektionDecks(lektion);
  const todo = lektionDeckTodo(lektion);
  const total = decks.reduce((s2, d) => s2 + d.cards.length, 0);
  const st = todo ? deckStats(todo) : { pct: 0, known: 0 };
  const fallos = todo ? cartasFalladas(todo) : [];
  const aiOn = aiAvailable();
  const [loadingVerb, setLoadingVerb] = useState(null);
  const [conjugation, setConjugation] = useState(null);

  const handleConjugate = async (verb) => {
    setLoadingVerb(verb);
    try {
      const data = await generateConjugation({ verb });
      setConjugation(data);
    } catch (e) {
      alert(e.message);
    }
    setLoadingVerb(null);
  };

  return (
    <div>
      <div className="topbar">
        <div style={{ minWidth: 0 }}>
          <h1>{lektionLabel(lektion)}</h1>
          <p className="muted" style={{ marginTop: 4, fontSize: '0.9rem' }}>
            {lektion.bandName} · {total} {t('words')} · {st.known} {t('voc.known')} ({st.pct}%)
          </p>
        </div>
        <button className="link-btn" onClick={onBack} style={{ flexShrink: 0 }}>← Wortschatz</button>
      </div>

      <BarrasTema topicId={todo ? 'vocab:' + todo.id : ''} pct={st.pct} />

      <div className="tabs">
        <button className={'tab' + (tab === 'teoria' ? ' active' : '')} onClick={() => setTab('teoria')}>
          {t('gr.theory')}
        </button>
        <button
          className={'tab' + (tab === 'ejercicios' ? ' active' : '')}
          onClick={() => setTab('ejercicios')}
        >
          {t('gr.exercises')}
        </button>
      </div>

      {tab === 'teoria' && (
        <div className="stack">
          {/* Las palabras a la vista y agrupadas por tema. Antes había que
              entrar en cada tema por separado para verlas. */}
          {decks.map((d) => (
            <div className="panel" key={d.id}>
              <div className="row spread" style={{ marginBottom: 8 }}>
                <h2 style={{ margin: 0 }}>{d.name}</h2>
                <span className="muted" style={{ fontSize: '0.82rem' }}>
                  {d.cards.length} {t('words')}
                </span>
              </div>
              <div className="scroll-x">
                <table className="woerter-tabla">
                  <tbody>
                    {d.cards.map((c, i2) => (
                      <VocabTableRow 
                        key={i2} 
                        c={c} 
                        deckId={d.id} 
                        onConjugate={handleConjugate} 
                        loadingVerb={loadingVerb} 
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {todo && (
            <div className="panel" style={{ marginTop: 8, marginBottom: 16 }}>
              <h2 style={{ margin: '0 0 14px' }}>{t('voc.cards')}</h2>
              <div className="row" style={{ gap: 8 }}>
                <button className="gametype" style={{ flex: 1, textAlign: 'left', display: 'flex', alignItems: 'center' }} onClick={() => onStart(todo.id, 'flashcards', false, 'de-es')}>
                  🃏 <span style={{ marginLeft: 12 }}>{t('voc.deToEs')}</span>
                </button>
                <button className="gametype" style={{ flex: 1, textAlign: 'left', display: 'flex', alignItems: 'center' }} onClick={() => onStart(todo.id, 'flashcards', false, 'es-de')}>
                  🃏 <span style={{ marginLeft: 12 }}>{t('voc.esToDe')}</span>
                </button>
              </div>
              
              <button 
                className="link-btn" 
                style={{ fontSize: '0.82rem', marginTop: 14, padding: 0 }}
                onClick={() => {
                  if (window.confirm(t('voc.confirmClearColours'))) {
                    limpiarColores(todo);
                    forceUpdate();
                  }
                }}
              >
                {t('voc.clearColours')}
              </button>
            </div>
          )}

          {/* Uno solo para toda la lección, al final. Uno por tabla repetía
              el mismo cartel seis veces y partía la lista de palabras. */}
          {todo && (
            <AmpliarTema
              deck={todo}
              niveau={nivelDe(lektion)}
              subtemas={decks.map((d) => d.name)}
            />
          )}

          <button
            className="btn-primary"
            style={{ alignSelf: 'flex-start' }}
            onClick={() => setTab('ejercicios')}
          >
            {t('gr.toExercises')}
          </button>
        </div>
      )}

      {conjugation && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setConjugation(null); }}>
          <div className="modal card modal-conj">
            <div className="row spread" style={{ marginBottom: 20, borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text)' }}>{conjugation.verb}</h2>
                <div className="muted" style={{ marginTop: 4 }}>{conjugation.translation}</div>
              </div>
              <button className="btn-ghost" onClick={() => setConjugation(null)}>✕</button>
            </div>

            <div className="conj-grid">
              {conjugation.tenses.map((tense, idx) => (
                <div key={idx} className="conj-card">
                  <h3 className="conj-title">{tense.name}</h3>
                  <table className="conj-table">
                    <tbody>
                      {tense.conjugations.map((c, i) => (
                        <tr key={i}>
                          <td className="conj-pronoun">{c.pronoun}</td>
                          <td className="conj-form">{c.form}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            
            {conjugation.examples && conjugation.examples.length > 0 && (
              <div className="conj-examples">
                <h3 className="conj-title" style={{ border: 'none', marginBottom: 16 }}>{t('voc.examples')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {conjugation.examples.map((ex, idx) => (
                    <div key={idx} className="conj-example">
                      <div className="ce-tense">{ex.tense}</div>
                      <div className="ce-de">{ex.de}</div>
                      <div className="ce-es">{ex.es}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Los juegos van sobre TODA la lección de una, no tema por tema: es una
          sola lección de clase y partirla en tandas de diez era puro trámite. */}
      {tab === 'ejercicios' && todo && (
        <div className="stack">
          <div className="panel">
            <h2 style={{ margin: '0 0 14px' }}>{t('gr.practise')}</h2>
            <div className="gametype-label">{t('gr.pickGame')}</div>
            <div className="gametype-grid">
              {vocabModes().filter(m => m.id !== 'flashcards').map((m) => (
                <button className="gametype" key={m.id} onClick={() => onStart(todo.id, m.id)}>
                  {m.emoji} <span>{m.label}</span>
                  <small>{m.hint}</small>
                </button>
              ))}
            </div>

            <p className="muted" style={{ fontSize: '0.78rem', marginTop: 12 }}>
              {aiOn ? t('voc.source') : t('voc.sourceOff')}
            </p>

            <div className="btn-row" style={{ marginTop: 12 }}>
              {fallos.length > 0 && (
                <button className="btn-ghost btn-sm" onClick={() => onStart(todo.id, 'quiz', true)}>
                  {t('gr.reviewWeak')}
                </button>
              )}
              {/* Solo a partir del 70%: antes de eso falta casi todo y este
                  boton seria la sesion normal con otro nombre. */}
              {/* Se ve siempre por debajo del 100%, pero apagado hasta el 70%:
                  un boton que aparece de la nada no se entiende, y asi sabes
                  que existe y cuanto te falta para abrirlo. */}
              {st.pct < 100 && (
                <button
                  className="btn-ghost btn-sm"
                  onClick={() => onStart(todo.id, 'quiz', 'faltan')}
                  disabled={st.pct < UMBRAL_TERMINAR}
                  title={st.pct < UMBRAL_TERMINAR ? t('voc.finishLockedHint', { p: UMBRAL_TERMINAR }) : t('voc.finishHint')}
                >
                  {st.pct < UMBRAL_TERMINAR
                    ? t('voc.finishLocked', { p: UMBRAL_TERMINAR })
                    : t('voc.finish', { n: cartasQueFaltan(todo).length })}
                </button>
              )}
              {aiOn && (
                <button className="btn-ghost btn-sm" onClick={() => onReto(todo.id)}>
                  {t('gr.aiChallenge')}
                </button>
              )}
            </div>
            {fallos.length > 0 && (
              <p className="muted" style={{ fontSize: '0.78rem', marginTop: 10 }}>
                {t(fallos.length === 1 ? 'voc.missedWords' : 'voc.missedWordsPl', { n: fallos.length })}
              </p>
            )}
            <div style={{ marginTop: 14 }}>
              <CoronaPanel topicId={'vocab:' + todo.id} pct={st.pct} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Elegir varios mazos y practicarlos juntos. Va al final de la portada porque
// es lo que haces cuando ya tienes temas sueltos y quieres mezclarlos.
function Combinados({ decks, onStart }) {
  const [sel, setSel] = useState([]);

  // No valen los 111 mazos: los del libro vienen partidos en grupitos de diez
  // palabras y llenaban la pantalla de fichas. Se ofrece una por lección
  // (todas sus palabras juntas), los temas sueltos y los tuyos.
  const elegibles = useMemo(() => {
    const deLibro = decks.filter((d) => /^kb-.+-all$/.test(d.id));
    const temas = vocabSections().flatMap((sec) => sec.ids)
      .map((id) => decks.find((d) => d.id === id))
      .filter(Boolean);
    const mios = decks.filter((d) => !d.builtin);
    return [...deLibro, ...temas, ...mios];
  }, [decks]);

  const total = elegibles.filter((d) => sel.includes(d.id)).reduce((n, d) => n + d.cards.length, 0);

  const marcar = (id) =>
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <div className="panel" style={{ marginTop: 22 }}>
      <h2 style={{ marginBottom: 4 }}>{t('voc.combiTitle')}</h2>
      <p className="muted" style={{ fontSize: '0.84rem', marginBottom: 12 }}>
        {t('voc.combiSub')}
      </p>

      <div className="combi-lista">
        {elegibles.map((d) => (
          <button
            key={d.id}
            className={'combi-chip' + (sel.includes(d.id) ? ' on' : '')}
            onClick={() => marcar(d.id)}
          >
            {d.emoji} {d.name}
            <small>{d.cards.length}</small>
          </button>
        ))}
      </div>

      {sel.length >= 2 ? (
        <>
          <p className="muted" style={{ fontSize: '0.82rem', margin: '12px 0 8px' }}>
            {t('voc.combiCount', { n: sel.length, p: total })}
          </p>
          <div className="gametype-grid">
            {vocabModes().map((m) => (
              <button
                className="gametype"
                key={m.id}
                onClick={() => onStart('combi:' + sel.join('|'), m.id)}
              >
                {m.emoji} <span>{m.label}</span>
                <small>{m.hint}</small>
              </button>
            ))}
          </div>
        </>
      ) : (
        <p className="muted" style={{ fontSize: '0.82rem', marginTop: 12 }}>
          {t('voc.combiPick')}
        </p>
      )}
    </div>
  );
}

// ---------- portada de Vocabulario ----------
function VocabHome({ onOpenLektion, onOpen, onGenderGame, onChanged, onStart }) {
  const decks = allDecks();
  const [nivelGen, setNivelGen] = useState('all');
  const gs = genderStats(nivelGen);
  const aiOn = aiAvailable();
  // El generador con IA está siempre a la vista: es lo que más se usa y el
  // botón para abrirlo ya no pintaba nada. Importar sí sigue plegado, que es
  // cosa de una vez.
  const [verImport, setVerImport] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [showExtra, setShowExtra] = useState(false);
  const [showMine, setShowMine] = useState(false);

  const [preview, setPreview] = useState(null);
  const [impName, setImpName] = useState('');
  const fileRef = useRef(null);
  const [theme, setTheme] = useState('');
  const [count, setCount] = useState(18);

  async function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setErr(''); setBusy(true);
    try {
      const res = await parseVocabFile(file);
      if (!res.cards.length) {
        setErr(pick('No se encontraron tarjetas. Necesitas al menos dos columnas: alemán y español.',
                    'No cards found. You need at least two columns: German and your language.'));
        setPreview(null);
      } else {
        setPreview(res);
        setImpName(file.name.replace(/\.[^.]+$/, ''));
      }
    } catch (e2) {
      setErr(pick('No se pudo leer el archivo: ', 'Could not read the file: ') + e2.message);
    } finally { setBusy(false); }
  }

  function confirmImport() {
    saveUserDeck({ name: impName || pick('Importado', 'Imported'), emoji: '📄', source: 'excel', cards: preview.cards });
    setPreview(null); setVerImport(false); onChanged?.();
  }

  async function runAi() {
    if (!theme.trim()) return;
    setErr(''); setBusy(true);
    try {
      const deck = await generateVocab({ theme: theme.trim(), count: Number(count) || 18 });
      const saved = saveUserDeck({ ...deck, source: 'ai' });
      setTheme(''); onChanged?.(); onOpen(saved.id);
    } catch (e2) {
      setErr(e2.message);
    } finally { setBusy(false); }
  }

  const o = vocabOverall();
  const userDecks = decks.filter((d) => !d.builtin);
  const byId = Object.fromEntries(decks.map((d) => [d.id, d]));

  const extra = (
    <div className="stack" style={{ gap: 22, marginTop: 26 }}>
      <button className="gender-cta" onClick={() => onGenderGame(nivelGen)}>
        <span className="gc-emoji">🎯</span>
        <span style={{ flex: 1 }}>
          <div className="gc-title">{t('voc.genderTitle')}</div>
          <div className="gc-sub">
            {t('voc.genderSub', { known: gs.known, total: gs.total, pct: gs.pct, empezadas: gs.empezadas })}
          </div>
        </span>
        <span className="chev">›</span>
      </button>

      {/* Dificultad por nivel del libro: A1.1 son las palabras de todos los
          días, A2.1 y los mazos extra las menos corrientes. */}
      <div className="gender-niveles">
        <span className="muted" style={{ fontSize: '0.78rem' }}>{t('voc.difficulty')}</span>
        {GENDER_NIVELES.map((n) => (
          <button
            key={n.id}
            className={'ask-chip' + (n.id === nivelGen ? ' on' : '')}
            onClick={() => setNivelGen(n.id)}
          >
            {pick(n.es, n.en)}
          </button>
        ))}
      </div>

      <div className="btn-row">
        <button
          className={'btn-ghost btn-sm' + (verImport ? ' on' : '')}
          onClick={() => { setVerImport(!verImport); setErr(''); setPreview(null); }}
        >
          {t('voc.import')}
        </button>
      </div>

      {verImport && (
        <div className="panel stack">
          <h2>{t('voc.importTitle')}</h2>
          <p className="muted" style={{ fontSize: '0.88rem' }}>
            {t('voc.importHint')}
          </p>
          <input ref={fileRef} type="file" accept=".xlsx,.xls,.csv,.tsv" onChange={onFile} />
          {busy && <p className="muted">{t('voc.reading')}</p>}
          {preview && (
            <>
              <p className="field-hint">{preview.note}</p>
              <div className="panel" style={{ background: 'var(--surface-2)', maxHeight: 200, overflow: 'auto' }}>
                {preview.cards.slice(0, 8).map((c, i) => (
                  <div key={i} style={{ fontSize: '0.86rem', padding: '3px 0' }}>
                    <strong>{c.de}</strong> — {c.es}
                  </div>
                ))}
                {preview.cards.length > 8 && (
                  <div className="muted" style={{ fontSize: '0.8rem' }}>{t('voc.andMore', { n: preview.cards.length - 8 })}</div>
                )}
              </div>
              <label className="field">
                {t('voc.deckName')}
                <input type="text" value={impName} onChange={(e) => setImpName(e.target.value)} />
              </label>
              <button className="btn-primary btn-sm" onClick={confirmImport} style={{ alignSelf: 'flex-start' }}>
                {t('voc.saveDeck', { n: preview.cards.length })}
              </button>
            </>
          )}
        </div>
      )}

      {aiOn && (
        <div className="panel stack">
          <h2>{t('voc.genTitle')}</h2>
          {!aiOn ? (
            <p className="muted">{t('aiOffLong')}</p>
          ) : (
            <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'flex-end' }}>
              <label className="field" style={{ flex: '0 1 380px', marginBottom: 0 }}>
                {t('voc.themeLabel')}
                <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)}
                  placeholder={t('voc.themePh')} />
              </label>
              <label className="field" style={{ width: 110, marginBottom: 0 }}>
                {t('voc.nCards')}
                <input type="number" min="8" max="30" value={count} onChange={(e) => setCount(e.target.value)} />
              </label>
              <button className="btn-primary" onClick={runAi} disabled={busy || !theme.trim()} style={{ marginBottom: 0, height: 46 }}>
                {busy ? t('generating') : t('voc.createDeck')}
              </button>
            </div>
            </>
          )}
        </div>
      )}

      {err && <p style={{ color: 'var(--bad)', fontSize: '0.9rem' }}>{err}</p>}

      {userDecks.length > 0 && (
        <div>
          <button className="link-btn" style={{ padding: 0 }} onClick={() => setShowMine(!showMine)}>
            {showMine ? t('voc.hideMine') : t('voc.showMine', { n: userDecks.length })}
          </button>
          {showMine && (
            <div style={{ marginTop: 14 }}>
              <div className="sec-title">
                <h2>{t('voc.myDecks')}</h2>
                <span className="muted">{t('voc.myDecksSub')}</span>
              </div>
              <div className="topic-grid">
                {userDecks.map((d) => <DeckCard key={d.id} deck={d} onOpen={onOpen} />)}
              </div>
            </div>
          )}
        </div>
      )}

      <div>
        <button className="link-btn" style={{ padding: 0 }} onClick={() => setShowExtra(!showExtra)}>
          {showExtra ? t('voc.hideExtra') : t('voc.showExtra')}
        </button>
        {showExtra && (
          <div className="stack" style={{ gap: 22, marginTop: 14 }}>
            {vocabSections().map((sec) => (
              <div key={sec.title}>
                <div className="sec-title"><h2>{sec.title}</h2></div>
                <div className="topic-grid">
                  {sec.ids.map((id) => byId[id] && <DeckCard key={id} deck={byId[id]} onOpen={onOpen} />)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Al final del todo: cuando ya tienes los temas sueltos, mezclarlos. */}
      <Combinados decks={decks} onStart={onStart} />
    </div>
  );

  return (
    <BookNav
      title="Wortschatz"
      subtitle={t('voc.sub', { known: o.known, total: o.total, pct: o.pct, libro: KURSBUCH.title })}
      count={(l) => l.woerter.reduce((s, g) => s + g.items.length, 0)}
      unit={[t('word'), t('words')]}
      onOpen={(l) => onOpenLektion(l.id)}
      progressKey="woerter"
      extra={extra}
    />
  );
}

const COLORS = ['transparent', '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

function VocabTableRow({ c, deckId, onConjugate, loadingVerb }) {
  const [colorState, setColorState] = useState(() => getCardColor(deckId, c.de) || 'transparent');
  const [showPalette, setShowPalette] = useState(false);

  const word = c.de.split(' ')[0].replace(/[^a-zA-ZäöüÄÖÜß]/g, '');
  const isVerb = 
    (/^[a-zäöüß]+(en|eln|ern)$/.test(word) || word === 'sein' || word === 'tun') && 
    !['sieben', 'neun', 'zehn', 'morgen', 'gestern', 'vorgestern', 'oben', 'unten', 'innen', 'außen', 'gegen'].includes(word);

  const handleColor = (col) => {
    setColorState(col);
    setCardColor(deckId, c.de, col === 'transparent' ? null : col);
    setShowPalette(false);
  };

  const cp = cardProg(deckId, c.de);
  const isBad = cp && cp.wrong > 0 && cp.strength < 4;
  const isGood = cp && cp.strength >= 3;
  const computedColor = colorState !== 'transparent' ? colorState : (isBad ? 'var(--bad)' : isGood ? 'var(--good)' : 'inherit');

  return (
    <tr>
      <td className="wt-de" style={{ color: computedColor }}>
        {c.de}
      </td>
      <td className="wt-es" style={{ color: computedColor }}>
        {c.es}
      </td>
      <td style={{ width: 80, textAlign: 'right', padding: '8px 12px' }}>
        <div className="row" style={{ gap: 8, justifyContent: 'flex-end' }}>
          {isVerb && (
            <button 
              className="btn-ghost btn-sm" 
              style={{ padding: '2px 6px', fontSize: '0.75rem', height: 'auto', minHeight: 0 }}
              onClick={() => onConjugate(word)}
              disabled={loadingVerb === word}
            >
              {loadingVerb === word ? t('loading') : t('voc.conjugate')}
            </button>
          )}
          {/* El altavoz, pegado al punto de color: los dos son cosas que le
              haces a esa palabra concreta. */}
          <Escuchar texto={c.de} />
          <div style={{ position: 'relative' }}>
            <button 
              className="color-dot"
              style={{ 
                width: 16, height: 16, borderRadius: '50%', 
                background: colorState === 'transparent' ? '#e2e8f0' : colorState, 
                border: 'none', cursor: 'pointer', padding: 0 
              }}
              onClick={() => setShowPalette(!showPalette)}
              title={t('voc.markColour')}
            />
            {showPalette && (
              <div 
                style={{ 
                  position: 'absolute', top: 24, right: 0, background: 'var(--bg)', 
                  border: '1px solid var(--border)', borderRadius: 8, padding: 8, 
                  display: 'flex', gap: 6, zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                }}
              >
                {COLORS.map(col => (
                  <button 
                    key={col}
                    style={{ 
                      width: 20, height: 20, borderRadius: '50%', 
                      background: col === 'transparent' ? 'repeating-linear-gradient(45deg, #eee, #eee 4px, #fff 4px, #fff 8px)' : col,
                      border: col === 'transparent' ? '1px solid #ccc' : 'none',
                      cursor: 'pointer', padding: 0 
                    }}
                    onClick={() => handleColor(col)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}
