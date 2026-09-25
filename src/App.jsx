import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { AppErrorBoundary } from './components/AppErrorBoundary.jsx';
import Sidebar from './components/Sidebar.jsx';
import Monedero from './components/Monedero.jsx';
import MazoConIA from './components/MazoConIA.jsx';
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
import { getDeck, soloFallos, soloQueFaltan, mazosParaMezclar } from './lib/vocab.js';
import { getNote, migrarFotos } from './lib/notebook.js';
import KasusGame from './components/KasusGame.jsx';
import { SIN_IA, PORTABLE } from './lib/modo.js';
import { getLektion } from './lib/kursbuch/index.js';
import { onLangChange } from './lib/i18n.js';
import { storage, fusionarDelServidor, alFusionar, HAY_SERVIDOR } from './lib/storage.js';

// Vistas que no merece la pena recordar: una partida o un resumen a medias.
const EFIMERAS = ['session', 'summary', 'vsession', 'vsummary', 'nsession', 'nsummary', 'exam', 'vreto', 'gender', 'kasus', 'traducir', 'fox', 'askpractice'];

// Pantallas donde estas HACIENDO un ejercicio. El monedero va fijo arriba a la
// derecha y ahi tapaba el contador (1/20), asi que en estas se aparta. Lo
// marcamos con una clase en el <body> en vez de deducirlo desde el CSS: se ve
// en el inspector y no depende de que el navegador resuelva un :has().
// Los juegos de vocabulario cuya tanda es una lista de tarjetas y por tanto se
// puede repetir con solo las falladas. Fuera: emparejar (es una parrilla) y
// der/die/das (no va por mazo).
const REPETIBLES = ['quiz', 'write', 'flashcards', 'wortsalat', 'blitz', 'hangman'];
const EJERCICIO = ['session', 'vsession', 'nsession', 'exam', 'vreto', 'gender', 'kasus', 'traducir'];

const TOP_LEVEL = ['home', 'grammar', 'vocab', 'komm', 'news', 'lieder', 'diary', 'pruefung', ...(PORTABLE ? [] : ['notebook']), 'leaderboard', 'settings'];

export default function App() {
  const [view, setView] = useState({ name: 'home' });
  // Al cambiar el idioma hay que repintar toda la app.
  const [, setLangTick] = useState(0);
  useEffect(() => onLangChange(() => setLangTick((n) => n + 1)), []);

  useEffect(() => {
    document.body.classList.toggle('en-ejercicio', EJERCICIO.includes(view.name));
  }, [view.name]);

  // Traerse lo de los otros aparatos.
  //
  // Dos cosas que hacia mal:
  //
  // 1. Metia los datos del servidor ENCIMA de los de aqui, clave por clave.
  //    Si habias escrito algo en este aparato y no habia llegado a subir
  //    (porque el servidor iba por delante y el POST se habia comido un 409),
  //    desaparecia. Ahora fusionarDelServidor respeta lo que has tocado tu y
  //    aun esta sin subir.
  //
  // 2. Recargaba la pagina. Y esto esta enganchado a volver a la pestaña, o
  //    sea que mirar el movil en mitad de una tanda y volver al ordenador te
  //    borraba la tanda: las vistas de ejercicio estan en EFIMERAS y no se
  //    recuerdan. Ahora, si estas en un ejercicio, se apunta y se hace al
  //    salir de el.
  const vistaAhora = useRef(view);
  vistaAhora.current = view;
  const syncAplazada = useRef(false);
  const recargaAplazada = useRef(false);
  const sincronizar = useRef(null);

  useEffect(() => {
    sincronizar.current = async () => {
      if (!HAY_SERVIDOR) return;
      try {
        const res = await fetch('/api/sync');
        if (!res.ok) return;
        const { timestamp, data } = await res.json();
        const localTs = Number(localStorage.getItem('dtrainer_sync_ts') || 0);
        if (timestamp <= localTs) return;
        if (EJERCICIO.includes(vistaAhora.current.name)) {
          syncAplazada.current = true;
          return;
        }
        const traidas = fusionarDelServidor(data, timestamp);
        // Recargar y no repintar a secas: media app lee el almacen UNA vez, al
        // montarse (useState(() => ...)), asi que un repintado no se entera de
        // lo que acaba de llegar. La recarga es bruta pero honesta; lo que no
        // vale es hacerla encima de un ejercicio, y de eso se encarga la
        // comprobacion de arriba.
        if (traidas > 0) location.reload();
      } catch {
        /* sin servidor: se reintenta al volver a la pestaña */
      }
    };
    sincronizar.current();
    const alVolver = () => { if (!document.hidden) sincronizar.current(); };
    window.addEventListener('visibilitychange', alVolver);
    // Si los datos cambian por debajo (una fusion tras un 409), repintar.
    // Tras una fusion por conflicto: si estas en un ejercicio se espera a que
    // salgas, igual que arriba.
    const quitar = alFusionar(() => {
      if (EJERCICIO.includes(vistaAhora.current.name)) {
        // Bandera propia: aqui la mezcla YA esta hecha y la marca ya esta al
        // dia, asi que al salir no hay que volver a mirar el servidor -diria
        // "nada nuevo"-, hay que pintar lo que ya tenemos.
        recargaAplazada.current = true;
        return;
      }
      location.reload();
    });
    return () => {
      window.removeEventListener('visibilitychange', alVolver);
      quitar();
    };
  }, []);

  // Las fotos del cuaderno, de dentro de la nota a IndexedDB. Una sola vez:
  // cuando ya no queda ninguna incrustada, no escribe nada.
  useEffect(() => {
    if (PORTABLE) return;
    migrarFotos().catch(() => {
      /* si no se puede, las fotos se quedan donde estaban */
    });
  }, []);

  useEffect(() => {
    if (PORTABLE && ['notebook', 'note', 'nsession', 'nsummary'].includes(view.name)) {
      setView({ name: 'home' });
    }
  }, [view.name]);

  // Al salir de un ejercicio, lo que se quedo esperando.
  useEffect(() => {
    if (EJERCICIO.includes(view.name)) return;
    if (recargaAplazada.current) {
      recargaAplazada.current = false;
      location.reload();
      return;
    }
    if (!syncAplazada.current) return;
    syncAplazada.current = false;
    sincronizar.current?.();
  }, [view.name]);

  const current = TOP_LEVEL.includes(view.name)
    ? view.name
    : ['grammar', 'topic', 'askpractice', 'kasus'].includes(view.name)
    ? 'grammar'
    : (view.name === 'session' && view.topicId !== 'mix') || (view.name === 'summary' && view.data?.topic?.id !== 'mix')
    ? 'grammar'
    : (view.name === 'session' && view.topicId === 'mix') || (view.name === 'summary' && view.data?.topic?.id === 'mix')
    ? 'home'
    : ['deck', 'vsession', 'vsummary', 'gender', 'lektionvocab', 'vreto'].includes(view.name)
    ? 'vocab'
    : ['kommlektion', 'traducir'].includes(view.name)
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

  const go = (name) => setViewProxy({ name });
  const openTopic = (topicId, tab = 'teoria') => setViewProxy({ name: 'topic', topicId, tab });
  // La pestaña viaja en la vista para que la memoria de sección la recuerde.
  const setTab = (tab) => setViewProxy((v) => ({ ...v, tab }));
  // Entrar a traducir frases. Desde la portada se entra directo, con todas
  // las dificultades y en mixto; desde Kommunikation se elige antes.
  const traducir = (lektionId = null, dir = 'mix', nivel = 'all', cartasFijas = null) =>
    setViewProxy({ name: 'traducir', lektionId, dir, nivel, cartasFijas, k: Date.now() });

  const start = (topicId, mode, game = 'mixed', itemsFijos = null, origen = null) =>
    setViewProxy({ name: 'session', topicId, mode, game, itemsFijos, origen, k: Date.now() });

  // La teoria del tema que acabas de practicar. Devuelve null cuando no hay
  // ninguna (la tanda mixta), y asi el resumen no pinta el boton.
  const volverAlTema = (topicId, tab = 'ejercicios') => {
    if (!topicId || topicId === 'mix' || String(topicId).startsWith('mix:')) return null;
    return () => setViewProxy({ name: 'topic', topicId, tab });
  };

  const openDeck = (deckId) => setViewProxy({ name: 'deck', deckId });
  // Al salir de un juego se vuelve a la pestaña de ejercicios, que es de donde
  // se ha salido... salvo con las tarjetas, que se lanzan desde la teoría: allí
  // devolver a ejercicios dejaba al alumno en otra pantalla de la que estaba.
  const returnToDeck = (deckId, tab = 'ejercicios', origen = null) => {
    if (origen === 'home') {
      go('home');
      return;
    }
    // La mezcla de TODO el vocabulario devuelve a Wortschatz (vocabulario)
    if (String(deckId).startsWith('combi:')) {
      go('vocab');
      return;
    }
    const d = getDeck(deckId);
    if (d?.lektionId || (String(deckId).startsWith('kb-') && !String(deckId).startsWith('kb-topic-'))) {
      const lid = d?.lektionId || String(deckId).replace(/^kb-/, '').replace(/-w\d+$/, '').replace(/-all$/, '');
      setViewProxy({ name: 'lektionvocab', lektionId: lid, tab });
    } else {
      openDeck(deckId);
    }
  };
  const volverDeJuego = (deckId, vmode, origen = null) =>
    returnToDeck(deckId, vmode === 'flashcards' ? 'teoria' : 'ejercicios', origen);
  // fallos: la misma partida pero con un subconjunto del mazo.
  //   true / 'fallos' -> solo lo que has fallado
  //   'faltan'        -> solo lo que aun no cuenta para el porcentaje
  const startVocab = (deckId, vmode, fallos = false, dir = null, cartasFijas = null, origen = null) =>
    setViewProxy({ name: 'vsession', deckId, vmode, fallos, dir, cartasFijas, origen, k: Date.now() });
  const startReto = (deckId) => setViewProxy({ name: 'vreto', deckId, k: Date.now() });

  // Tarjetas de TODO el vocabulario, sin pasar por Wortschatz. Los mazos del
  // libro se cogen enteros por lección (`kb-…-all`) y no en grupitos de diez,
  // que es como vienen partidos; si no, cada palabra entraria dos veces.
  // `dir` es el sentido de la tarjeta ('de-es' o 'es-de'). Importa mas de lo
  // que parece: el color que gana la palabra depende de el, y sin elegirlo
  // salia al azar, asi que no se podia practicar el lado dificil a proposito.
  const flashcardsDeTodo = (dir = null) => {
    const ids = mazosParaMezclar().map((d) => d.id);
    if (ids.length) startVocab('combi:' + ids.join('|'), 'flashcards', false, dir, null, 'home');
  };
  // El mazo de "solo mis fallos" lleva el mismo id, así que el progreso de cada
  // palabra se sigue apuntando donde toca.
  const mazoDeLaVista = () => {
    const d = view.deckId === 'starred'
      ? { id: 'starred', name: 'Marcados', emoji: '⭐', builtin: true, cards: view.cartasFijas || [] }
      : getDeck(view.deckId);
    if (!d) return null;
    if (view.cartasFijas?.length) {
      return { ...d, cards: view.cartasFijas };
    }
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
            onStart={(topicId, mode, game) => start(topicId, mode, game, null, 'home')}
            onNavigate={go}
            onFox={(abrirCon) => setView({ name: 'fox', abrirCon })}
            onFlashcards={flashcardsDeTodo}
          />
        )}
        {view.name === 'grammar' && (
          <Grammar
            onOpen={openTopic}
            onStart={start}
            onKasus={(filtro) => setViewProxy({ name: 'kasus', filtro, k: Date.now() })}
            onPractise={(d) => setView({ name: 'askpractice', ...d, k: Date.now() })}
          />
        )}

        {!SIN_IA && view.name === 'askpractice' && (
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
            itemsFijos={view.itemsFijos}
            onExit={() => {
              if (view.origen === 'home' || view.game === 'todo') {
                go('home');
              } else if (!view.topicId || view.topicId === 'mix' || String(view.topicId).startsWith('mix:')) {
                go('grammar');
              } else {
                openTopic(view.topicId, 'ejercicios');
              }
            }}
            onDone={(data) => setView({ name: 'summary', data })}
          />
        )}

        {view.name === 'summary' && (
          <Summary
            data={view.data}
            onRepeat={() => start(view.data.topic.id, view.data.mode || 'mixed', view.data.game || 'mixed')}
            /* Otra tanda con lo que acaba de fallar, sin generar nada nuevo. */
            onRepetirFallos={() =>
              setViewProxy({
                name: 'session',
                topicId: view.data.topic.id,
                mode: view.data.mode || 'mixed',
                game: view.data.game || 'mixed',
                itemsFijos: view.data.fallos,
                k: Date.now()
              })
            }
            onHome={() => go('home')}
            /* La tanda mixta no sale de un tema, asi que ahi no hay adonde
               volver: el boton no se pinta. */
            onTema={volverAlTema(view.data?.topic?.id, 'ejercicios')}
          />
        )}

        {view.name === 'traducir' && (
          <TranslateGame
            key={view.k}
            lektionId={view.lektionId}
            dir={view.dir}
            nivel={view.nivel}
            cartasFijas={view.cartasFijas}
            onExit={() => go('komm')}
            onFinish={(data) => setView({ name: 'vsummary', data })}
          />
        )}

        {!SIN_IA && view.name === 'fox' && (
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
            onStartGrammar={start}
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
            onBack={() => {
              const d = getDeck(view.deckId);
              if (d?.lektionId) setViewProxy({ name: 'lektionvocab', lektionId: d.lektionId });
              else go('vocab');
            }}
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

        {/* MazoConIA anade al mazo palabras nuevas segun el mando de Ajustes.
            Con el mando a cero -como viene- devuelve el mazo tal cual y no
            pide nada. Envuelve a los seis porque todos reciben el mazo por
            la misma puerta. */}
        {view.name === 'vsession' && (
          <MazoConIA deck={mazoDeLaVista()}>
            {(mazo) =>
              view.vmode === 'match' ? (
                <MatchGame
                  key={view.k}
                  deck={mazo}
                  onExit={() => returnToDeck(view.deckId, 'ejercicios', view.origen)}
                  onFinish={(data) => setView({ name: 'vsummary', data: { ...data, origen: view.origen } })}
                />
              ) : view.vmode === 'wortsalat' ? (
                <WortsalatGame
                  key={view.k}
                  deck={mazo}
                  cartasFijas={view.cartasFijas}
                  onExit={() => returnToDeck(view.deckId, 'ejercicios', view.origen)}
                  onFinish={(data) => setView({ name: 'vsummary', data: { ...data, origen: view.origen } })}
                />
              ) : view.vmode === 'hangman' ? (
                <HangmanGame
                  key={view.k}
                  deck={mazo}
                  cartasFijas={view.cartasFijas}
                  onExit={() => returnToDeck(view.deckId, 'ejercicios', view.origen)}
                  onFinish={(data) => setView({ name: 'vsummary', data: { ...data, origen: view.origen } })}
                />
              ) : view.vmode === 'blitz' ? (
                <BlitzGame
                  key={view.k}
                  deck={mazo}
                  cartasFijas={view.cartasFijas}
                  onExit={() => returnToDeck(view.deckId, 'ejercicios', view.origen)}
                  onFinish={(data) => setView({ name: 'vsummary', data: { ...data, origen: view.origen } })}
                />
              ) : (
                <VocabSession
                  key={view.k}
                  deck={mazo}
                  mode={view.vmode}
                  dir={view.dir}
                  cartasFijas={view.cartasFijas}
                  onExit={() => volverDeJuego(view.deckId, view.vmode, view.origen)}
                  onFinish={(data) => setView({ name: 'vsummary', data: { ...data, origen: view.origen } })}
                />
              )
            }
          </MazoConIA>
        )}

        {view.name === 'vsummary' && (
          <VocabSummary
            data={view.data}
            /* Las que se te han escapado, otra vez. Emparejar no lo ofrece:
               alli la tanda es una parrilla de parejas, no una lista de
               tarjetas que se pueda repetir tal cual. */
            onRepetirFallos={REPETIBLES.includes(view.data.mode) && view.data.missed?.length
              ? () =>
                  setViewProxy({
                    name: 'vsession',
                    deckId: view.data.deck.id,
                    vmode: view.data.mode,
                    dir: view.data.dir || null,
                    cartasFijas: view.data.missed,
                    origen: view.data.origen,
                    k: Date.now()
                  })
              : null}
            onRepeat={() =>
              view.data.mode === 'gender'
                ? setView({ name: 'gender', k: Date.now() })
                : startVocab(view.data.deck.id, view.data.mode, false, view.data.dir, null, view.data.origen)
            }
            onDeck={() =>
              view.data.mode === 'gender'
                ? (view.data.origen === 'home' ? go('home') : go('vocab'))
                : volverDeJuego(view.data.deck.id, view.data.mode, view.data.origen)
            }
            onHome={() => go('home')}
          />
        )}

        {view.name === 'komm' && (
          <Kommunikation
            onOpen={(lektionId) => setViewProxy({ name: 'kommlektion', lektionId })}
            onTraducir={traducir}
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

        {view.name === 'kasus' && (
          <KasusGame
            key={view.k}
            filtro={view.filtro}
            onExit={() => go('grammar')}
            onFinish={(data) => setView({ name: 'vsummary', data })}
          />
        )}

        {!SIN_IA && view.name === 'news' && <News />}
        {!SIN_IA && view.name === 'lieder' && <Lieder />}

        {view.name === 'diary' && (
          <Diary onOpen={(entryId) => setViewProxy({ name: 'dentry', entryId })} />
        )}

        {/* `onDeleted` faltaba en las dos pantallas de entrada, aquí y en la
            del Notizbuch. Borrar sí borraba, pero justo después onDeleted()
            petaba por no ser una función y la pantalla se quedaba quieta
            enseñando una entrada que ya no existía. */}
        {view.name === 'dentry' && (
          <DiaryEntry
            entryId={view.entryId}
            onBack={() => go('diary')}
            onDeleted={() => go('diary')}
            onRefresh={() => setViewProxy({ name: 'dentry', entryId: view.entryId, k: Date.now() })}
          />
        )}

        {!SIN_IA && view.name === 'pruefung' && (
          <Pruefung
            onStart={(teil, typ) => setViewProxy({ name: 'exam', teil, typ, k: Date.now() })}
          />
        )}

        {!SIN_IA && view.name === 'exam' && view.teil === 'schreiben' && (
          <ExamSchreiben key={view.k} typ={view.typ} onBack={() => go('pruefung')} />
        )}
        {!SIN_IA && view.name === 'exam' && view.teil === 'sprechen' && (
          <ExamSprechen key={view.k} typ={view.typ} onBack={() => go('pruefung')} />
        )}
        {!SIN_IA && view.name === 'exam' && (view.teil === 'lesen' || view.teil === 'hoeren') && (
          <ExamLesenHoeren key={view.k} teil={view.teil} typ={view.typ} onBack={() => go('pruefung')} />
        )}

        {!PORTABLE && view.name === 'notebook' && (
          <Notebook
            onOpen={(noteId) => setViewProxy({ name: 'note', noteId })}
            onSession={() => setViewProxy({ name: 'nsession', k: Date.now() })}
          />
        )}

        {!PORTABLE && view.name === 'note' && (
          <NotebookEntry
            noteId={view.noteId}
            onBack={() => go('notebook')}
            onDeleted={() => go('notebook')}
            onRefresh={() => setViewProxy({ name: 'note', noteId: view.noteId, k: Date.now() })}
            onReview={(noteId) => setView({ name: 'nsession', noteId, k: Date.now() })}
          />
        )}

        {!PORTABLE && view.name === 'nsession' && (
          <NotebookSession
            key={view.k}
            note={getNote(view.noteId)}
            lektion={getLektion(getNote(view.noteId)?.lektionId)}
            onExit={() => setView({ name: 'note', noteId: view.noteId })}
            onFinish={(data) => setView({ name: 'nsummary', data, noteId: view.noteId })}
          />
        )}

        {!PORTABLE && view.name === 'nsummary' && (
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
