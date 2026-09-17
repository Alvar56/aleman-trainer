import React, { useState } from 'react';
import { deckStats, deleteUserDeck, vocabModes, cartasFalladas, cartasQueFaltan, getCardColor, setCardColor } from '../lib/vocab.js';
import { t } from '../lib/i18n.js';
import { aiAvailable } from '../lib/settings.js';
import { generateConjugation } from '../lib/ai.js';
import CoronaPanel, { BarrasTema } from './ProgresoTema.jsx';
import AmpliarTema from './AmpliarTema.jsx';
import { UMBRAL_TERMINAR } from '../lib/progress.js';
import Escuchar from './Escuchar.jsx';

// Mismas dos pestañas que en Grammatik: primero te lees las palabras, luego
// juegas. Antes salía todo de corrido y los juegos tapaban la lista, que es
// justo lo que quieres mirar antes de ponerte a practicar.
export default function DeckDetail({ deck, tab = 'teoria', onTab, onStart, onReto, onBack, onDeleted }) {
  const setTab = (t) => onTab?.(t);
  const [showText, setShowText] = useState(true);
  const [loadingVerb, setLoadingVerb] = useState(null);
  const [conjugation, setConjugation] = useState(null);
  const st = deckStats(deck);
  const fallos = cartasFalladas(deck);
  const aiOn = aiAvailable();

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
          <h1>{deck.emoji} {deck.name}</h1>
          <p className="muted" style={{ marginTop: 4, fontSize: '0.9rem' }}>
            {t('voc.deckStats', { total: st.total, known: st.known, pct: st.pct, mastered: st.mastered })}
            {deck.builtin ? '' : deck.source === 'ai' ? t('voc.aiCreated') : t('voc.importedLabel')}
          </p>
        </div>
        <button className="link-btn" onClick={onBack} style={{ flexShrink: 0 }}>← Wortschatz</button>
      </div>

      <BarrasTema topicId={'vocab:' + deck.id} pct={st.pct} />

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
          {deck.text && (
            <div className="panel">
              <div className="row spread">
                <h2 style={{ margin: 0 }}>📖 {t('voc.topicText')}</h2>
                <button className="link-btn" onClick={() => setShowText((s) => !s)}>
                  {showText ? t('voc.hide') : t('voc.show')}
                </button>
              </div>
              {showText && (
                <div style={{ marginTop: 12 }}>
                  <p style={{ lineHeight: 1.7 }}>{deck.text}</p>
                  {deck.textEs && (
                    <p className="muted" style={{ marginTop: 10, fontSize: '0.9rem' }}>{deck.textEs}</p>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="panel">
            <h2>{t('voc.allCards', { n: deck.cards.length })}</h2>
            <div className="card-list-grid">
              {deck.cards.map((c, i) => (
                <VocabCard
                  key={i}
                  card={c}
                  deckId={deck.id}
                  onConjugate={handleConjugate}
                  loadingVerb={loadingVerb}
                />
              ))}
            </div>
          </div>

          <div className="panel" style={{ marginTop: 8, marginBottom: 16 }}>
            <h2 style={{ margin: '0 0 14px' }}>{t('voc.cards')}</h2>
            <div className="row" style={{ gap: 8 }}>
              <button className="gametype" style={{ flex: 1, textAlign: 'left', display: 'flex', alignItems: 'center' }} onClick={() => onStart(deck.id, 'flashcards', false, 'de-es')}>
                🃏 <span style={{ marginLeft: 12 }}>{t('voc.deToEs')}</span>
              </button>
              <button className="gametype" style={{ flex: 1, textAlign: 'left', display: 'flex', alignItems: 'center' }} onClick={() => onStart(deck.id, 'flashcards', false, 'es-de')}>
                🃏 <span style={{ marginLeft: 12 }}>{t('voc.esToDe')}</span>
              </button>
            </div>
          </div>

          {/* Con todo el mazo en verde se abre pedirle más palabras del mismo
              campo a la IA. Al final, después de la lista y de las tarjetas. */}
          <AmpliarTema deck={deck} onCreado={onBack} />

          <button
            className="btn-primary"
            style={{ alignSelf: 'flex-start' }}
            onClick={() => setTab('ejercicios')}
          >
            {t('gr.toExercises')}
          </button>

          {!deck.builtin && (
            <button
              className="btn-ghost btn-sm"
              style={{ alignSelf: 'flex-start', color: 'var(--bad)', borderColor: 'var(--bad-border)' }}
              onClick={() => {
                if (confirm(t('voc.confirmDeleteDeck', { name: deck.name }))) {
                  deleteUserDeck(deck.id);
                  onDeleted();
                }
              }}
            >
              {t('voc.deleteDeck')}
            </button>
          )}
        </div>
      )}

      {tab === 'ejercicios' && (
        <div className="stack">
          <div className="panel">
            <h2 style={{ margin: '0 0 14px' }}>{t('gr.practise')}</h2>
            <div className="gametype-label">{t('gr.pickGame')}</div>
            <div className="gametype-grid">
              {vocabModes().filter(m => m.id !== 'flashcards').map((m) => (
                <button className="gametype" key={m.id} onClick={() => onStart(deck.id, m.id)}>
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
                <button className="btn-ghost btn-sm" onClick={() => onStart(deck.id, 'quiz', true)}>
                  {t('gr.reviewWeak')}
                </button>
              )}
              {/* Solo del 70% para arriba: por debajo falta casi todo y esto
                  seria la sesion normal con otro nombre. */}
              {/* Se ve siempre por debajo del 100%, pero apagado hasta el 70%:
                  un boton que aparece de la nada no se entiende, y asi sabes
                  que existe y cuanto te falta para abrirlo. */}
              {st.pct < 100 && (
                <button
                  className="btn-ghost btn-sm"
                  onClick={() => onStart(deck.id, 'quiz', 'faltan')}
                  disabled={st.pct < UMBRAL_TERMINAR}
                  title={st.pct < UMBRAL_TERMINAR ? t('voc.finishLockedHint', { p: UMBRAL_TERMINAR }) : t('voc.finishHint')}
                >
                  {st.pct < UMBRAL_TERMINAR
                    ? t('voc.finishLocked', { p: UMBRAL_TERMINAR })
                    : t('voc.finish', { n: cartasQueFaltan(deck).length })}
                </button>
              )}
              {aiOn && (
                <button className="btn-ghost btn-sm" onClick={() => onReto(deck.id)}>
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
              <CoronaPanel topicId={'vocab:' + deck.id} pct={st.pct} />
            </div>
          </div>
        </div>
      )}

      {conjugation && (
        <div className="modal-overlay" onClick={() => setConjugation(null)}>
          <div className="modal card modal-conj" onClick={(e) => e.stopPropagation()}>
            <div className="row spread" style={{ marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>
                {conjugation.verb} <span className="muted" style={{ fontSize: '1rem', fontWeight: 'normal' }}>— {conjugation.translation}</span>
              </h2>
              <button className="link-btn" onClick={() => setConjugation(null)}>{t('voc.close')}</button>
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
    </div>
  );
}

const COLORS = ['transparent', '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

function VocabCard({ card, deckId, onConjugate, loadingVerb }) {
  const [color, setColor] = useState(() => getCardColor(deckId, card.de) || 'transparent');
  const [showPalette, setShowPalette] = useState(false);

  // Determinamos si parece un verbo (termina en en, eln, ern, o es irregular, y empieza en minúscula)
  const word = card.de.split(' ')[0].replace(/[^a-zA-ZäöüÄÖÜß]/g, '');
  const isVerb = 
    (/^[a-zäöüß]+(en|eln|ern)$/.test(word) || word === 'sein' || word === 'tun') && 
    !['sieben', 'neun', 'zehn', 'morgen', 'gestern', 'vorgestern', 'oben', 'unten', 'innen', 'außen', 'gegen'].includes(word);

  const handleColor = (c) => {
    setColor(c);
    setCardColor(deckId, card.de, c === 'transparent' ? null : c);
    setShowPalette(false);
  };

  return (
    <div 
      className="card-mini" 
      style={{ 
        position: 'relative', 
        borderLeft: color !== 'transparent' ? '4px solid ' + color : undefined,
        paddingLeft: color !== 'transparent' ? 12 : undefined
      }}
    >
      <div className="row spread" style={{ alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontWeight: 600 }}>{card.de}</div>
          <div className="muted" style={{ fontSize: '0.82rem' }}>{card.es}</div>
        </div>
        <div className="row" style={{ gap: 8 }}>
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
          <Escuchar texto={card.de} />
          <div style={{ position: 'relative' }}>
            <button 
              className="color-dot"
              style={{ 
                width: 16, height: 16, borderRadius: '50%', 
                background: color === 'transparent' ? '#e2e8f0' : color, 
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
                {COLORS.map(c => (
                  <button 
                    key={c}
                    style={{ 
                      width: 20, height: 20, borderRadius: '50%', 
                      background: c === 'transparent' ? 'repeating-linear-gradient(45deg, #eee, #eee 4px, #fff 4px, #fff 8px)' : c,
                      border: c === 'transparent' ? '1px solid #ccc' : 'none',
                      cursor: 'pointer', padding: 0 
                    }}
                    onClick={() => handleColor(c)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
