import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { AppErrorBoundary } from './components/AppErrorBoundary.jsx';
import Sidebar from './components/Sidebar.jsx';
import Monedero from './components/Monedero.jsx';
import Dashboard from './components/Dashboard.jsx';
import Grammar from './components/Grammar.jsx';
import TopicDetail from './components/TopicDetail.jsx';
import Session from './components/Session.jsx';
import Summary from './components/Summary.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Settings from './components/Settings.jsx';
import Vocab from './components/Vocab.jsx';
import DeckDetail from './components/DeckDetail.jsx';
import VocabSession from './components/VocabSession.jsx';
import MatchGame from './components/MatchGame.jsx';
import WortsalatGame from './components/WortsalatGame.jsx';
import BlitzGame from './components/BlitzGame.jsx';
import HangmanGame from './components/HangmanGame.jsx';
import VocabReto from './components/VocabReto.jsx';
import AskPractice from './components/AskPractice.jsx';
import GenderGame from './components/GenderGame.jsx';
import FoxChat from './components/FoxChat.jsx';
import TranslateGame from './components/TranslateGame.jsx';
import VocabSummary from './components/VocabSummary.jsx';
import Notebook from './components/Notebook.jsx';
import NotebookEntry from './components/NotebookEntry.jsx';
import NotebookSession from './components/NotebookSession.jsx';
import Kommunikation from './components/Kommunikation.jsx';
import News from './components/News.jsx';
import Lieder from './components/Lieder.jsx';
import Diary from './components/Diary.jsx';
import DiaryEntry from './components/DiaryEntry.jsx';
import Pruefung from './components/Pruefung.jsx';
import ExamLesenHoeren from './components/ExamLesenHoeren.jsx';
import ExamSchreiben from './components/ExamSchreiben.jsx';
import ExamSprechen from './components/ExamSprechen.jsx';
import { getTopic } from './topics/index.js';
import { getDeck, soloFallos, soloQueFaltan } from './lib/vocab.js';
import { getNote } from './lib/notebook.js';
import { getLektion } from './lib/kursbuch/index.js';
import { onLangChange } from './lib/i18n.js';
import { storage } from './lib/storage.js';

// Vistas que no merece la pena recordar: una partida o un resumen a medias.
const EFIMERAS = ['session', 'summary', 'vsession', 'vsummary', 'ksession', 'ksummary', 'nsession', 'nsummary', 'exam', 'vreto', 'gender', 'traducir', 'fox', 'askpractice'];

const TOP_LEVEL = ['home', 'grammar', 'vocab', 'komm', 'news', 'lieder', 'diary', 'pruefung', 'notebook', 'leaderboard', 'settings'];

export default function App() {
  const [view, setView] = useState({ name: 'home' });
  // Al cambiar el idioma hay que repintar toda la app.
  const [, setLangTick] = useState(0);
  useEffect(() => onLangChange(() => setLangTick((n) => n + 1)), []);

  useEffect(() => {
    const sync = async () => {
      try {
        const res = await fetch('/api/sync');
        if (res.ok) {
          const { timestamp, data } = await res.json();
          const localTs = Number(localStorage.getItem('dtrainer_sync_ts') || 0);
          if (timestamp > localTs) {
            storage.importAll(data);
            localStorage.setItem('dtrainer_sync_ts', timestamp);
            location.reload();
          }
        }
      } catch (e) {
        // console.warn('Sync failed', e);
      }
    };
    sync();
    const handleVis = () => { if (!document.hidden) sync(); };
    window.addEventListener('visibilitychange', handleVis);
    return () => window.removeEventListener('visibilitychange', handleVis);
  }, []);

  const current = TOP_LEVEL.includes(view.name)
    ? view.name
    : ['grammar', 'topic', 'askpractice'].includes(view.name)
    ? 'grammar'
    : (view.name === 'session' && view.topicId !== 'mix') || (view.name === 'summary' && view.data?.topic?.id !== 'mix')
    ? 'grammar'
    : (view.name === 'session' && view.topicId === 'mix') || (view.name === 'summary' && view.data?.topic?.id === 'mix')
    ? 'home'
    : ['deck', 'vsession', 'vsummary', 'gender', 'lektionvocab', 'vreto'].includes(view.name)
    ? 'vocab'
    : ['kommlektion', 'ksession', 'ksummary', 'traducir'].includes(view.name)
    ? 'komm'
    : ['exam', 'dentry', 'note', 'nsession', 'nsummary'].includes(view.name)
    ? view.name === 'exam' ? 'pruefung' : view.name.startsWith('d') ? 'diary' : 'notebook'
    : 'home';

  // Dónde estabas la última vez en cada sección.
  const memoria = useRef({});
  const scrollMap = useRef({});

  // Adónde hay que dejar el scroll en cuanto se pinte la vista nueva. Lo aplica
  // el useLayoutEffect de abajo, en UN solo sitio.
  //
  // Antes esto eran dos setTimeout compitiendo: uno a 10 ms restauraba la
  // posición guardada y otro a 20 ms forzaba el principio. En un ordenador
  // descansado ganaba siempre el segundo y todo iba bien, pero basta con que el
  // de 10 ms se retrase (pestaña ocupada, una generación en marcha) para que
  // lleguen al revés: primero el "vete arriba" y encima de él la posición
  // vieja. Resultado: entrabas en una sección y aparecías unos píxeles más
  // abajo, de forma intermitente y solo a veces.
  const scrollPedido = useRef(null);

  const setViewProxy = (newViewOrFn) => {
    setView((prevView) => {
      const nextView = typeof newViewOrFn === 'function' ? newViewOrFn(prevView) : newViewOrFn;
      scrollMap.current[JSON.stringify(prevView)] = window.scrollY;
      // Por defecto, volver a donde estabas en esa vista; si no la conocíamos,
      // al principio.
      if (scrollPedido.current === null) {
        scrollPedido.current = scrollMap.current[JSON.stringify(nextView)] ?? 0;
      }
      return nextView;
    });
  };

  useEffect(() => {
    memoria.current[current] = view;
  }, [view, current]);

  // El único sitio que toca el scroll al cambiar de pantalla. useLayoutEffect y
  // no useEffect: se ejecuta con el DOM nuevo ya montado pero ANTES de que el
  // navegador pinte, así que no se llega a ver el salto.
  useLayoutEffect(() => {
    if (scrollPedido.current === null) return;
    const y = scrollPedido.current;
    scrollPedido.current = null;
    window.scrollTo(0, y);
  }, [view]);

  const irASeccion = (name) => {
    const memView = (current === name) ? { name } : (memoria.current[name] || { name });
    // Pulsar el menú te lleva al principio de la sección, salvo que estés
    // volviendo a un ejercicio a medias: ahí se respeta dónde ibas.
    scrollPedido.current = EFIMERAS.includes(memView.name)
      ? (scrollMap.current[JSON.stringify(memView)] ?? 0)
      : 0;
    setViewProxy(memView);
  };

  // El "volver" de cada pantalla: ese sí va al índice, que es lo que pides.
  const go = (name) => setViewProxy({ name });
  const openTopic = (topicId) => setViewProxy({ name: 'topic', topicId });
  // La pestaña viaja en la vista para que la memoria de sección la recuerde.
  const setTab = (tab) => setViewProxy((v) => ({ ...v, tab }));
  const start = (topicId, mode, game = 'mixed') =>
    setViewProxy({ name: 'session', topicId, mode, game, k: Date.now() });

  // La teoria del tema que acabas de practicar. Devuelve null cuando no hay
  // ninguna (la tanda mixta), y asi el resumen no pinta el boton.
  const volverAlTema = (topicId, tab) => {
    if (!topicId || topicId === 'mix') return null;
    return () => setViewProxy({ name: 'topic', topicId, tab });
  };

  const openDeck = (deckId) => setViewProxy({ name: 'deck', deckId });
  const returnToDeck = (deckId) => {
    if (deckId.startsWith('kb-') && deckId.endsWith('-all')) {
      setViewProxy({ name: 'lektionvocab', lektionId: deckId.slice(3, -4), tab: 'ejercicios' });
    } else {
      openDeck(deckId);
    }
  };
  // fallos: la misma partida pero con un subconjunto del mazo.
  //   true / 'fallos' -> solo lo que has fallado
  //   'faltan'        -> solo lo que aun no cuenta para el porcentaje
  const startVocab = (deckId, vmode, fallos = false, dir = null) =>
    setViewProxy({ name: 'vsession', deckId, vmode, fallos, dir, k: Date.now() });
  const startReto = (deckId) => setViewProxy({ name: 'vreto', deckId, k: Date.now() });
  // El mazo de "solo mis fallos" lleva el mismo id, así que el progreso de cada
  // palabra se sigue apuntando donde toca.
  const mazoDeLaVista = () => {
    const d = getDeck(view.deckId);
    if (view.fallos === 'faltan') return soloQueFaltan(d);
    return view.fallos ? soloFallos(d) : d;
  };

  return (
    <AppErrorBoundary>
      <div className="layout">
      <Monedero />
      <Sidebar current={current} onNavigate={irASeccion} />
      <main className="main">
        {view.name === 'home' && (
          <Dashboard
            onStart={start}
            onNavigate={go}
            onFox={(abrirCon) => setView({ name: 'fox', abrirCon })}
          />
        )}
        {view.name === 'grammar' && (
          <Grammar
            onOpen={openTopic}
            onPractise={(d) => setView({ name: 'askpractice', ...d, k: Date.now() })}
          />
        )}

        {view.name === 'askpractice' && (
          <AskPractice
            key={view.k}
            pregunta={view.pregunta}
            res={view.res}
            onExit={() => go('grammar')}
            onFinish={(data) =>
              setView({
                name: 'vsummary',
                data: {
                  ...data,
                  deck: { id: 'ask', name: view.res?.titel || view.pregunta, emoji: '💬' },
                  mode: 'ask'
                }
              })
            }
          />
        )}

        {view.name === 'topic' && (
          <TopicDetail
            topic={getTopic(view.topicId)}
            tab={view.tab}
            onTab={setTab}
            onStart={start}
            onBack={() => go('grammar')}
          />
        )}

        {view.name === 'session' && (
          <Session
            key={view.k}
            topic={getTopic(view.topicId)}
            mode={view.mode}
            game={view.game}
            onExit={() => view.topicId === 'mix' ? go('home') : openTopic(view.topicId)}
            onDone={(data) => setView({ name: 'summary', data })}
          />
        )}

        {view.name === 'summary' && (
          <Summary
            data={view.data}
            onRepeat={() => start(view.data.topic.id, view.data.mode || 'mixed', view.data.game || 'mixed')}
            onWeak={() => start(view.data.topic.id, 'weak', 'mixed')}
            onHome={() => go('home')}
            onLeaderboard={() => go('leaderboard')}
            /* La tanda mixta no sale de un tema, asi que ahi no hay teoria a
               la que volver: el boton no se pinta. */
            onTeoria={volverAlTema(view.data?.topic?.id, 'teoria')}
            onEjercicios={volverAlTema(view.data?.topic?.id, 'ejercicios')}
          />
        )}

        {view.name === 'traducir' && (
          <TranslateGame
            key={view.k}
            lektionId={view.lektionId}
            dir={view.dir}
            nivel={view.nivel}
            onExit={() => go('komm')}
            onFinish={(data) => setView({ name: 'vsummary', data })}
          />
        )}

        {view.name === 'fox' && (
          <div className="reading">
            <FoxChat abrirCon={view.abrirCon} onClose={() => go('home')} />
          </div>
        )}

        {view.name === 'vocab' && (
          <Vocab
            onOpen={openDeck}
            onOpenLektion={(lektionId) => setViewProxy({ name: 'lektionvocab', lektionId })}
            onGenderGame={(nivel) => setViewProxy({ name: 'gender', k: Date.now(), nivel })}
            onChanged={() => setViewProxy({ name: 'vocab', k: Date.now() })}
            onStart={startVocab}
          />
        )}

        {view.name === 'lektionvocab' && (
          <Vocab
            lektionId={view.lektionId}
            tab={view.tab}
            onTab={setTab}
            onStart={startVocab}
            onReto={startReto}
            onBack={() => go('vocab')}
          />
        )}

        {view.name === 'gender' && (
          <GenderGame
            key={view.k}
            nivel={view.nivel || 'all'}
            onExit={() => go('vocab')}
            onFinish={(data) => setView({ name: 'vsummary', data })}
          />
        )}

        {view.name === 'deck' && getDeck(view.deckId) && (
          <DeckDetail
            deck={getDeck(view.deckId)}
            tab={view.tab}
            onTab={setTab}
            onStart={startVocab}
            onReto={startReto}
            onBack={() => go('vocab')}
            onDeleted={() => go('vocab')}
          />
        )}
        {view.name === 'deck' && !getDeck(view.deckId) && <Vocab onOpen={openDeck} onChanged={() => go('vocab')} />}

        {view.name === 'vreto' && (
          <VocabReto
            key={view.k}
            deck={getDeck(view.deckId)}
            onExit={() => returnToDeck(view.deckId)}
            onFinish={(data) => setView({ name: 'vsummary', data: { ...data, deck: getDeck(view.deckId), mode: 'reto' } })}
          />
        )}

        {view.name === 'vsession' &&
          (view.vmode === 'match' ? (
            <MatchGame
              key={view.k}
              deck={mazoDeLaVista()}
              onExit={() => returnToDeck(view.deckId)}
              onFinish={(data) => setView({ name: 'vsummary', data })}
            />
          ) : view.vmode === 'wortsalat' ? (
            <WortsalatGame
              key={view.k}
              deck={mazoDeLaVista()}
              onExit={() => returnToDeck(view.deckId)}
              onFinish={(data) => setView({ name: 'vsummary', data })}
            />
          ) : view.vmode === 'hangman' ? (
            <HangmanGame
              key={view.k}
              deck={mazoDeLaVista()}
              onExit={() => returnToDeck(view.deckId)}
              onFinish={(data) => setView({ name: 'vsummary', data })}
            />
          ) : view.vmode === 'blitz' ? (
            <BlitzGame
              key={view.k}
              deck={mazoDeLaVista()}
              onExit={() => returnToDeck(view.deckId)}
              onFinish={(data) => setView({ name: 'vsummary', data })}
            />
          ) : (
            <VocabSession
              key={view.k}
              deck={mazoDeLaVista()}
              mode={view.vmode}
              dir={view.dir}
              onExit={() => returnToDeck(view.deckId)}
              onFinish={(data) => setView({ name: 'vsummary', data })}
            />
          ))}

        {view.name === 'vsummary' && (
          <VocabSummary
            data={view.data}
            onRepeat={() =>
              view.data.mode === 'gender'
                ? setView({ name: 'gender', k: Date.now() })
                : startVocab(view.data.deck.id, view.data.mode)
            }
            onDeck={() => (view.data.mode === 'gender' ? go('vocab') : returnToDeck(view.data.deck.id))}
            onHome={() => go('home')}
          />
        )}

        {view.name === 'komm' && (
          <Kommunikation
            onOpen={(lektionId) => setViewProxy({ name: 'kommlektion', lektionId })}
            onTraducir={(lektionId, dir, nivel) => setViewProxy({ name: 'traducir', lektionId, dir, nivel, k: Date.now() })}
          />
        )}

        {view.name === 'kommlektion' && (
          <Kommunikation 
            lektionId={view.lektionId} 
            dialog={view.dialog}
            busy={view.busy}
            setDialog={(dialog) => setViewProxy((v) => ({ ...v, dialog }))}
            setBusy={(busy) => setViewProxy((v) => ({ ...v, busy }))}
            onBack={() => go('komm')} 
          />
        )}

        {view.name === 'news' && <News />}
        {view.name === 'lieder' && <Lieder />}

        {view.name === 'diary' && (
          <Diary onOpen={(entryId) => setViewProxy({ name: 'dentry', entryId })} />
        )}

        {view.name === 'dentry' && (
          <DiaryEntry
            entryId={view.entryId}
            onBack={() => go('diary')}
            onRefresh={() => setViewProxy({ name: 'dentry', entryId: view.entryId, k: Date.now() })}
          />
        )}

        {view.name === 'pruefung' && (
          <Pruefung
            onStart={(teil, typ) => setViewProxy({ name: 'exam', teil, typ, k: Date.now() })}
          />
        )}

        {view.name === 'exam' && view.teil === 'schreiben' && (
          <ExamSchreiben key={view.k} typ={view.typ} onBack={() => go('pruefung')} />
        )}
        {view.name === 'exam' && view.teil === 'sprechen' && (
          <ExamSprechen key={view.k} typ={view.typ} onBack={() => go('pruefung')} />
        )}
        {view.name === 'exam' && (view.teil === 'lesen' || view.teil === 'hoeren') && (
          <ExamLesenHoeren key={view.k} teil={view.teil} typ={view.typ} onBack={() => go('pruefung')} />
        )}

        {view.name === 'notebook' && (
          <Notebook
            onOpen={(noteId) => setViewProxy({ name: 'note', noteId })}
            onSession={() => setViewProxy({ name: 'nsession', k: Date.now() })}
          />
        )}

        {view.name === 'note' && (
          <NotebookEntry
            noteId={view.noteId}
            onBack={() => go('notebook')}
            onRefresh={() => setViewProxy({ name: 'note', noteId: view.noteId, k: Date.now() })}
            onReview={(noteId) => setView({ name: 'nsession', noteId, k: Date.now() })}
          />
        )}

        {view.name === 'nsession' && (
          <NotebookSession
            key={view.k}
            note={getNote(view.noteId)}
            lektion={getLektion(getNote(view.noteId)?.lektionId)}
            onExit={() => setView({ name: 'note', noteId: view.noteId })}
            onFinish={(data) => setView({ name: 'nsummary', data, noteId: view.noteId })}
          />
        )}

        {view.name === 'nsummary' && (
          <VocabSummary
            data={view.data}
            onRepeat={() => setView({ name: 'nsession', noteId: view.noteId, k: Date.now() })}
            onDeck={() => setView({ name: 'note', noteId: view.noteId })}
            onHome={() => go('home')}
          />
        )}

        {view.name === 'leaderboard' && <Leaderboard onBack={() => go('home')} />}
        {view.name === 'settings' && <Settings onBack={() => go('home')} />}
      </main>
      </div>
    </AppErrorBoundary>
  );
}
