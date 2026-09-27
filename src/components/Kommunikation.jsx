import React, { useMemo, useState } from 'react';
import { tc } from '../lib/contenido/index.js';
import Escuchar from './Escuchar.jsx';
import { respuestaDe, conversacionDe, seguimientoDe } from '../lib/kursbuch/respuestas.js';
import { t, pick, codigoIdioma } from '../lib/i18n.js';
import BookNav from './BookNav.jsx';
import Dialog from './Dialog.jsx';
import KommAsk from './KommAsk.jsx';
import Cargando from './Cargando.jsx';
import LargoDialogo, { turnosDe, largoGuardado } from './LargoDialogo.jsx';
import KommPractice, { TIPOS } from './KommPractice.jsx';
import MezclaKomm, { frasesDe } from './MezclaKomm.jsx';
import Desplegable from './Desplegable.jsx';
import { estadisticas as ueStats } from '../lib/uebersetzen.js';
import { getLektion, KURSBUCH, lektionLabel, lektionKommunikation } from '../lib/kursbuch/index.js';
import { generateDialog } from '../lib/ai.js';
import { guardados, borrarGuardado, otroIdioma } from '../lib/guardados.js';
import { SIN_IA, PORTABLE } from '../lib/modo.js';
import { aiAvailable } from '../lib/settings.js';
import { kommMastery, recordKommPracticed, kommApartadosFallados, kommApartadosQueFaltan, UMBRAL_TERMINAR } from '../lib/progress.js';
import { BarrasTema } from './ProgresoTema.jsx';
import { GENDER_NIVELES } from '../lib/vocab.js';
import EtiquetaChip from './EtiquetaChip.jsx';
import BotonCopiar from './BotonCopiar.jsx';
import { getStarredItems, useStars } from '../lib/stars.js';
import FotosVocab from './FotosVocab.jsx';

// Los tipos de pregunta que se pueden practicar sueltos.
const TIPOS_EJERCICIO = [
  { id: 'decir', emoji: '✅', tipos: ['decir'],
    es: 'Elegir la frase', en: 'Pick the phrase',
    subEs: 'Del castellano al alemán', subEn: 'from your language into German' },
  { id: 'significado', emoji: '💭', tipos: ['significado'],
    es: '¿Qué significa?', en: 'What does it mean?',
    subEs: 'Del alemán a lo tuyo', subEn: 'from German into your language' },
  { id: 'responder', emoji: '🗣️', tipos: ['contestar', 'entender'],
    es: 'Contestar', en: 'Reply',
    subEs: 'Qué dices y qué te dicen', subEn: 'what you say and what they say' },
  { id: 'hueco', emoji: '📝', tipos: ['hueco'],
    es: 'La palabra que falta', en: 'The missing word',
    subEs: 'Completa el hueco', subEn: 'fill in the blank' }
];

export default function Kommunikation({ lektionId, tab, onTab, onOpen, onBack, onTraducir, dialog, busy, setDialog, setBusy }) {
  // El tomo que se está practicando mezclado, o 'todo'. null = no hay mezcla en
  // marcha y se ve la lista de lecciones.
  const [mezcla, setMezcla] = useState(null);

  if (mezcla !== null) {
    return <KommMezclada band={mezcla.band} onSalir={() => setMezcla(null)} />;
  }

  if (!lektionId) {
    return (
      <BookNav
        title="Kommunikation"
        subtitle={t(SIN_IA ? 'komm.subSinIA' : 'komm.sub', { libro: KURSBUCH.title })}
        count={(l) => l.kommunikation.length}
        unit={[t('function'), t('functions')]}
        onOpen={(l) => onOpen(l.id)}
        progressKey="kommunikation"
        extra={
          <>
            {onTraducir && <TarjetaTraducir onTraducir={onTraducir} />}
            <KommAsk niveau="A2" />
            {/* Al final del todo, como la mezcla de vocabulario: primero las
                lecciones, y cuando ya las conoces, mezclarlas. */}
            <MezclaKomm onMezcla={(band) => setMezcla({ band })} />
          </>
        }
      />
    );
  }
  return (
    <KommDetail
      lektionId={lektionId}
      tab={tab}
      onTab={onTab}
      onBack={onBack}
      dialog={dialog}
      busy={busy}
      setDialog={setDialog}
      setBusy={setBusy}
    />
  );
}

// La tanda mezclada: diez preguntas con frases de todo el libro (o de un tomo).
//
// Se monta una "función" de mentira con diez frases al azar y se le pasa a la
// misma pantalla de práctica que usan las lecciones: los ejercicios, el
// recuento y las monedas ya están ahí, y así no hay dos sitios donde arreglar
// lo mismo. Lo único que no hace es marcar apartados como hechos —no es de
// ninguna función en concreto—, pero cuenta como sesión igual que el resto.
function KommMezclada({ band, onSalir }) {
  const todas = useMemo(() => frasesDe(band), [band]);
  const funktion = useMemo(() => {
    const barajadas = [...todas].sort(() => Math.random() - 0.5);
    return { funktion: t('komm.mixName'), wendungen: barajadas.slice(0, 10) };
  }, [todas]);

  if (todas.length < 4) return null;

  return (
    <KommPractice
      mezcla
      lektionId={band ? 'mix:' + band : 'mix'}
      funktion={funktion}
      todasLasFrases={todas.map((w) => w.de)}
      todasLasGlosas={todas.map((w) => w.es)}
      todasLasRespuestas={todas.map((w) => respuestaDe(w.de)?.de).filter(Boolean)}
      onSalir={onSalir}
    />
  );
}

function TarjetaTraducir({ onTraducir }) {
  const [dir, setDir] = useState('mix');
  const [nivel, setNivel] = useState('all');
  const st = ueStats({ nivel });
  
  return (
    <div className="juego-seccion">
      <button
        className={'gender-cta' + (st.pct >= 100 ? ' dominado' : '')}
        onClick={() => onTraducir(null, dir, nivel)}
      >
        <span className="gc-emoji">🔁</span>
        <span style={{ flex: 1 }}>
          <div className="gc-title">{t('ueb.title')}</div>
          <div className="gc-sub">
            {t('ueb.sub', { known: st.sabidas, total: st.total, pct: st.pct, empezadas: st.empezadas })}
          </div>
        </span>
        <span className="chev">›</span>
      </button>

      <div className="gender-niveles">
        <span className="muted" style={{ fontSize: '0.78rem' }}>{t('voc.difficulty')}</span>
        {GENDER_NIVELES.map((n) => (
          <button
            key={n.id}
            className={'ask-chip' + (n.id === nivel ? ' on' : '')}
            onClick={() => setNivel(n.id)}
          >
            <EtiquetaChip largo={pick(n.es, n.en)} corto={pick(n.corto, n.cortoEn)} />
          </button>
        ))}
      </div>

      {/* El 14 de margen que habia aqui escrito a mano sobraba: el aire entre
          las dos filas lo pone el gap de .juego-seccion, igual que en las
          tarjetas de Wortschatz y Grammatik. */}
      <div className="gender-niveles">
        <span className="muted" style={{ fontSize: '0.78rem' }}>{pick('Dirección', 'Direction')}</span>
        <button className={'ask-chip' + (dir === 'mix' ? ' on' : '')} onClick={() => setDir('mix')}>
          {pick('Mixto', 'Mixed')}
        </button>
        <button className={'ask-chip' + (dir === 'es-de' ? ' on' : '')} onClick={() => setDir('es-de')}>
          <EtiquetaChip
            largo={pick('Nativo → Alemán', 'Native → German')}
            corto={codigoIdioma() + ' → DE'}
          />
        </button>
        <button className={'ask-chip' + (dir === 'de-es' ? ' on' : '')} onClick={() => setDir('de-es')}>
          <EtiquetaChip
            largo={pick('Alemán → Nativo', 'German → Native')}
            corto={'DE → ' + codigoIdioma()}
          />
        </button>
      </div>
    </div>
  );
}

function KommDetail({
  lektionId,
  tab: propTab,
  onTab,
  onBack,
  dialog: propDialog,
  busy: propBusy,
  setDialog: propSetDialog,
  setBusy: propSetBusy
}) {
  const lektion = getLektion(lektionId);
  const [localBusy, setLocalBusy] = useState(null); // null | 'alles' | índice de la función
  const [err, setErr] = useState('');
  const [open, setOpen] = useState(null);
  const [localTab, setLocalTab] = useState('teoria');
  const tab = propTab || localTab;
  const setTab = (t) => {
    setLocalTab(t);
    onTab?.(t);
  };
  const [localDialog, setLocalDialog] = useState(null);
  // Una conversacion guardada se abre desde una lista por la que estabas
  // navegando: ni sube arriba al abrirla ni te deja en el principio al volver.
  const [desdeGuardada, setDesdeGuardada] = useState(false);
  const scrollLeccion = React.useRef(null);
  const [lastFocus, setLastFocus] = useState(null);
  const [practica, setPractica] = useState(null);   // la función que estás practicando
  // Sube al terminar una práctica, para repintar las marcas sin recargar.
  const [vuelta, setVuelta] = useState(0);
  const [misKonv, setMisKonv] = useState(() => guardados('konversation'));
  
  const dialog = propDialog !== undefined ? propDialog : localDialog;
  const setDialog = propSetDialog || setLocalDialog;

  // La vuelta al sitio se hace aquí y no en el onBack: al pulsar "volver" la
  // lección todavía no está montada, mide menos que la pantalla y el navegador
  // recorta el scroll a 0.
  //
  // useLayoutEffect y no useEffect con requestAnimationFrame: rAF no se ejecuta
  // en una pestaña que no está a la vista, así que la vuelta se quedaba sin
  // hacer si te ibas a otra pestaña. Es la misma razón por la que App.jsx usa
  // useLayoutEffect para su memoria de scroll.
  React.useLayoutEffect(() => {
    if (dialog || !desdeGuardada) return;
    const y = scrollLeccion.current;
    setDesdeGuardada(false);
    if (y != null) window.scrollTo(0, y);
  }, [dialog, desdeGuardada]);
  // En que idioma se genero la conversacion que estas mirando, si la has
  // abierto de las guardadas. null = la acabas de pedir, o sea tu idioma.
  const [abiertaLang, setAbiertaLang] = useState(null);
  const [reveladas, setReveladas] = useState(() => new Set());
  function toggleRevelada(id) {
    setReveladas((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  const busy = propBusy !== undefined ? propBusy : localBusy;
  const setBusy = propSetBusy || setLocalBusy;
  
  const aiOn = aiAvailable();
  useStars();
  const allStarredKomm = getStarredItems('komm');
  const starredKomm = allStarredKomm.filter((i) => {
    if (!lektion) return false;
    if (i.lektionId === lektion.id) return true;
    if (i.lektionId && (i.lektionId === `kb-${lektion.id}` || lektion.id === `kb-${i.lektionId}`)) return true;
    if (String(i.id).includes(`:${lektion.id}:`) || String(i.id).startsWith(`komm:${lektion.id}:`)) return true;
    return false;
  });
  // Las frases del libro, con la glosa ya en el idioma de la interfaz.
  const funktionen = useMemo(() => lektionKommunikation(lektion), [lektion]);
  const todasLasFrases = useMemo(() =>
    funktionen.flatMap((x) =>
      (x.wendungen || []).flatMap((w) => [w.de, ...seguimientoDe(w.de).map((y) => y.de)])
    ),
    [funktionen]
  );
  const todasLasRespuestas = useMemo(() =>
    funktionen.flatMap((x) =>
      (x.wendungen || []).map((w) => respuestaDe(w.de)?.de).filter(Boolean)
    ),
    [funktionen]
  );
  const todasLasGlosas = useMemo(() =>
    funktionen.flatMap((x) =>
      (x.wendungen || []).flatMap((w) => [w.es, ...seguimientoDe(w.de).map((y) => y.es)])
    ),
    [funktionen]
  );
  const km = lektion ? kommMastery(lektion.id, lektion.kommunikation) : null;
  // Lo que se te ha resistido y lo que te falta para el 100%, por apartado.
  const kFallados = lektion ? kommApartadosFallados(lektion.id, lektion.kommunikation) : [];
  const kFaltan = lektion ? kommApartadosQueFaltan(lektion.id, lektion.kommunikation) : [];
  // Una "función" de mentira con TODAS las frases de la lección: es lo que
  // practican los tipos de ejercicio de la pestaña de al lado.
  const todaLaLeccion = useMemo(() => ({
    funktion: lektion ? lektionLabel(lektion) : '',
    // Cada frase se lleva puesto de qué apartado salió: así una tanda de la
    // pestaña de ejercicios puede marcar como hechos los apartados que hayas
    // sacado limpios, en vez de no contar para nada.
    wendungen: funktionen.flatMap((x) =>
      (x.wendungen || []).map((w) => ({ ...w, seccion: x.funktion }))
    )
  }), [lektion, funktionen]);
  const hecho = km?.hechas || {};

  // Una tanda con las frases de UNOS apartados concretos: los fallados o los
  // que faltan. Misma forma que `todaLaLeccion`, para que KommPractice pueda
  // seguir apuntando cada acierto a su apartado.
  function tandaDe(apartados, nombre) {
    return {
      funktion: nombre,
      wendungen: apartados.flatMap((x) =>
        (x.wendungen || []).map((w) => ({ ...w, seccion: x.funktion }))
      )
    };
  }

  // El apartado entero en alemán y de corrido: cada frase del libro con lo que
  // te contestan y la vuelta que sigue. Es exactamente lo que se ve en las
  // burbujas, sin las traducciones, para pegarlo en un lector de voz.
  function textoApartado(k) {
    const lineas = [];
    for (const w of k.wendungen || []) {
      lineas.push(w.de);
      for (const turno of conversacionDe(w.de)) lineas.push(turno.de);
      lineas.push('');
    }
    return lineas.join('\n').trim();
  }

  // Las que escribe la IA llevan su propio botón dentro de Dialog.jsx.

  if (!lektion) {
    return (
      <div className="card center stack">
        <p>{t('notFound')}</p>
        <button className="btn-ghost" onClick={onBack}>{t('back')}</button>
      </div>
    );
  }

  // `largo` fijo para la conversación de UNA función: son tres frases y no hay
  // nada que preguntar, sale corta y ya está. La de la lección entera sí usa
  // el largo que hayas elegido.
  async function makeDialog(funktion, key, largo) {
    setErr('');
    setBusy(key);
    setLastFocus(funktion);
    try {
      const d = await generateDialog({ lektion, funktion, turns: turnosDe(largo || largoGuardado()) });
      setAbiertaLang(null);
      setDialog(d);
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(null);
    }
  }

  if (practica) {
    return (
      // Los despistes salen de toda la leccion, turnos de seguimiento
      // incluidos: son frases que tambien has leido.
      <KommPractice
        lektionId={lektion.id}
        funktion={practica.funktion}
        tipos={practica.tipos}
        itemsFijos={practica.itemsFijos}
        mezcla={practica.mezcla}
        volverA={practica.volverA}
        todasLasFrases={todasLasFrases}
        todasLasRespuestas={todasLasRespuestas}
        todasLasGlosas={todasLasGlosas}
        onHecho={() => setVuelta((v) => v + 1)}
        onSalir={() => setPractica(null)}
      />
    );
  }



  if (dialog) {
    return (
      <Dialog
        dialog={dialog}
        lektion={lektion}
        busy={busy !== null}
        onContestadas={() => {
          if (lastFocus?.funktion) {
            recordKommPracticed(lektion.id, lastFocus.funktion);
            setVuelta((v) => v + 1);
          }
        }}
        otroIdioma={otroIdioma({ lang: abiertaLang })}
        desdeGuardada={desdeGuardada}
        onBack={() => {
          setAbiertaLang(null);
          setDialog(null);
        }}
        onRegenerate={() => makeDialog(lastFocus, 'regen')}
        onGuardado={() => setMisKonv(guardados('konversation'))}
      />
    );
  }

  return (
    <div>
      {/* Misma cabecera y mismas pestañas que una lección de Wortschatz o de
          Grammatik: el título con el botón de volver a la derecha, la barra de
          lo que llevas hecho, y Teoría / Ejercicios. */}
      <div className="topbar">
        <div className="min0">
          <h1>{lektionLabel(lektion)}</h1>
          <p className="muted" style={{ marginTop: 4, fontSize: '0.9rem' }}>
            {lektion.bandName} · {lektion.kommunikation.length} {t('functions')}
            {km && km.total > 0 && ` · ${km.practiced}/${km.total} ${t('komm.hechas')}`}
          </p>
        </div>
        <button className="link-btn" onClick={onBack} style={{ flexShrink: 0 }}>
          <span className="fl-atras">◂</span> Kommunikation
        </button>
      </div>

      <BarrasTema topicId={'komm:' + lektion.id} pct={km?.pct || 0} />

      <div className="tabs">
        <button className={'tab' + (tab === 'teoria' ? ' active' : '')} onClick={() => setTab('teoria')}>
          {t('gr.theory')}
        </button>
        <button className={'tab' + (tab === 'ejercicios' ? ' active' : '')} onClick={() => setTab('ejercicios')}>
          {t('gr.exercises')}
        </button>
        {!PORTABLE && (
          <button className={'tab' + (tab === 'fotos' ? ' active' : '')} onClick={() => setTab('fotos')}>
            📸 {pick('Fotos', 'Photos')}
          </button>
        )}
      </div>

      {tab === 'teoria' && (
      <div className="stack">

      {/* Aquí había dos ajustes: un botón para tapar las glosas y el largo de
          la conversación. Los dos se han ido.

          El de las glosas, porque no hacía falta: la traducción ya está tapada
          siempre y aparece al pasar el ratón por la burbuja. Con un botón que
          las enseña todas y el ratón que enseña la que miras, el botón sobra.

          El del largo, porque se ha bajado al pie, junto al único sitio donde
          se pide una conversación. Arriba pedía una decisión antes de que
          hiciera falta, y encima para funciones de tres frases. */}

      {/* Las conversaciones que has guardado de esta leccion. Se vuelven a
          abrir sin gastar IA: la conversacion entera esta guardada. */}
      {misKonv.filter((k) => k.lektionId === lektion.id).length > 0 && (
        <div className="guardados">
          <div className="guardados-tit">
            {t('save.mineConv', { n: misKonv.filter((k) => k.lektionId === lektion.id).length })}
          </div>
          <div className="guardados-lista">
            {misKonv
              .filter((k) => k.lektionId === lektion.id)
              .map((k) => (
                <span className="guardado-chip" key={k.id}>
                  <button
                    className="gc-abrir"
                    onClick={() => {
                      // Dónde estabas leyendo, para devolverte ahí al cerrar.
                      scrollLeccion.current = window.scrollY;
                      setDesdeGuardada(true);
                      setAbiertaLang(k.lang || null);
                      setDialog(k.dialog);
                    }}
                    title={k.titel}
                  >
                    {k.titel}
                  </button>
                  <button
                    className="gc-quitar"
                    title={t('save.remove')}
                    onClick={() => {
                      borrarGuardado('konversation', k.id);
                      setMisKonv(guardados('konversation'));
                    }}
                  >
                    ✕
                  </button>
                </span>
              ))}
          </div>
        </div>
      )}

      {funktionen.map((k, i) => (
        <div className={'card' + (open === i ? ' abierta' : '')} key={i} style={{ padding: 0, overflow: 'hidden' }}>
          <button className="komm-head" onClick={() => setOpen(open === i ? null : i)} style={{ padding: 12 }}>
            <span className="lk-block-title" style={{ margin: 0 }}>
              {k.funktion}
              {k.es && <div className="muted" style={{ fontSize: '0.8rem', fontWeight: 'normal', marginTop: 2 }}>{k.es}</div>}
            </span>
            {/* En una columna estrecha esto partia por el ultimo espacio y la
                flecha se caia sola a la linea de abajo. La clase la mantiene
                entera; quien encoge es el titulo. */}
            <span className="komm-cuenta">
              {hecho[k.funktion] && <span className="pill completo">✓</span>}
              <span>{(k.wendungen || []).length} {t('komm.phrases')} {open === i ? '▴' : '▾'}</span>
            </span>
          </button>
          <Desplegable abierto={open === i}>
            <div style={{ padding: '0 12px 12px' }}>
              {/* Las frases, con la misma pinta que las conversaciones que
                  escribe la IA: la del libro a la izquierda y lo que te pueden
                  contestar a la derecha. Se ve de un vistazo quién dice qué, y
                  la sección entera va a juego. */}
              <div className="komm-chat">
                {(k.wendungen || []).map((w, wi) => {
                  // La conversacion entera: lo que te contestan y, si la hay,
                  // la vuelta que sigue. Una frase suelta no se usa sola: se
                  // usa porque alguien contesta y tu sigues.
                  const turnos = conversacionDe(w.de);
                  const bubbleKeyA = `${i}-${wi}-a`;
                  const revA = reveladas.has(bubbleKeyA);
                  return (
                    <div className="kc-par" key={wi}>
                      <div className="dlg-turn a">
                        <div
                          className={'dlg-bubble' + (revA ? ' revelada' : '')}
                          onClick={() => toggleRevelada(bubbleKeyA)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleRevelada(bubbleKeyA);
                            }
                          }}
                        >
                          <p className="dlg-de">
                            {w.de}
                            <Escuchar texto={w.de} className="dlg-say" frase />
                          </p>
                          <p className="dlg-es"><span>{w.es}</span></p>
                        </div>
                      </div>
                      {turnos.map((turno, ti) => {
                        const bubbleKeyB = `${i}-${wi}-t-${ti}`;
                        const revB = reveladas.has(bubbleKeyB);
                        return (
                          <div className={'dlg-turn ' + (turno.quien === 'tu' ? 'a' : 'b')} key={ti}>
                            <div
                              className={'dlg-bubble' + (revB ? ' revelada' : '')}
                              onClick={() => toggleRevelada(bubbleKeyB)}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleRevelada(bubbleKeyB);
                                }
                              }}
                            >
                              <p className="dlg-de">
                                {turno.de}
                                <Escuchar texto={turno.de} className="dlg-say" frase />
                              </p>
                              <p className="dlg-es"><span>{tc(turno.es)}</span></p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              {/* Practicar ESTE apartado, aquí mismo: es lo que apetece justo
                  después de leerse sus frases. En la pestaña de ejercicios
                  están los tipos de pregunta sobre la lección entera.

                  La conversación sale siempre corta, sin preguntar: son tres
                  frases, y elegir el largo aquí era una decisión de más. El
                  selector es para la conversación de la lección entera. */}
              <div className="row" style={{ gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                <button
                  className="btn-primary btn-sm"
                  onClick={() => setPractica({ funktion: k, volverA: 'teoria' })}
                >
                  {t('komm.practise')}
                </button>
                {!SIN_IA && (
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => makeDialog(k, i, 'corta')}
                    disabled={!aiOn || busy !== null}
                  >
                    {busy === i ? t('generating') : t('komm.convThis')}
                  </button>
                )}
                {/* La conversación entera de este apartado, en alemán y de
                    corrido, para pegarla en un lector con voz decente. La del
                    navegador vale para una frase, no para escucharse el
                    apartado entero. */}
                <BotonCopiar texto={() => textoApartado(k)} etiqueta={t('komm.copyConv')} />
              </div>
              {busy === i && (
                <div style={{ marginTop: 14 }}>
                  <Cargando
                    icono="💬"
                    titulo={t('wait.dlgTitle')}
                    pasos={[t('wait.dlg1'), t('wait.dlg2'), t('wait.dlg3'), t('wait.dlg4')]}
                  />
                </div>
              )}
            </div>
          </Desplegable>
        </div>
      ))}

        <button
          className="btn-primary"
          style={{ alignSelf: 'flex-start' }}
          onClick={() => setTab('ejercicios')}
        >
          {t('gr.toExercises')}
        </button>
      </div>
      )}

      {tab === 'ejercicios' && (
      <div className="stack">
        {/* Los TIPOS de pregunta, sobre las frases de toda la lección: igual
            que en Wortschatz se elige el juego y en Grammatik el tipo de
            ejercicio. Practicar un apartado suelto está en Teoría, que es
            donde lo acabas de leer. */}
        <div className="panel">
          <h2 style={{ margin: '0 0 14px' }}>{t('gr.practise')}</h2>
          <div className="gametype-label">{t('gr.pickGame')}</div>
          <div className="gametype-grid">
            {TIPOS_EJERCICIO.map((j) => (
              <button
                className="gametype"
                key={j.id}
                onClick={() =>
                  setPractica({ funktion: todaLaLeccion, tipos: j.tipos, mezcla: true, volverA: 'ejercicios' })
                }
              >
                <span className="gt-ico">{j.emoji}</span>
                <span className="gt-txt">
                  <span>{pick(j.es, j.en)}</span>
                  <small>{pick(j.subEs, j.subEn)}</small>
                </span>
              </button>
            ))}
          </div>
          <p className="muted" style={{ fontSize: '0.78rem', marginTop: 12 }}>
            {aiOn ? t('komm.source') : t('komm.sourceOff')}
          </p>

          {/* Los dos de siempre, que aquí faltaban: repasar lo fallado y
              rematar lo que queda. Como el progreso de Kommunikation va por
              apartado y no frase a frase, lo que vuelve es el apartado. */}
          <div className="btn-row" style={{ marginTop: 12 }}>
            {starredKomm.length > 0 && (
              <button
                className="btn-ghost btn-sm"
                onClick={() =>
                  setPractica({
                    funktion: todaLaLeccion,
                    itemsFijos: starredKomm,
                    mezcla: true,
                    volverA: 'ejercicios'
                  })
                }
              >
                {t('star.review', { n: starredKomm.length })}
              </button>
            )}
            <button
              className="btn-ghost btn-sm"
              onClick={() =>
                setPractica({
                  funktion: tandaDe(kFallados, t('gr.reviewWeak')),
                  mezcla: true,
                  volverA: 'ejercicios'
                })
              }
              disabled={kFallados.length === 0}
              title={kFallados.length ? t('gr.reviewWeakHint') : t('gr.reviewWeakNone')}
            >
              {kFallados.length
                ? t('gr.reviewWeakN', { n: kFallados.length })
                : t('gr.reviewWeak')}
            </button>

            {/* Igual que en vocabulario: se ve siempre por debajo del 100% y
                se abre al 70%, para que sea el último tramo y no la tanda
                normal con otro nombre. */}
            {(km?.pct || 0) < 100 && (
              <button
                className="btn-ghost btn-sm"
                onClick={() =>
                  setPractica({
                    funktion: tandaDe(kFaltan, t('voc.finishLocked')),
                    mezcla: true,
                    volverA: 'ejercicios'
                  })
                }
                disabled={(km?.pct || 0) < UMBRAL_TERMINAR}
                title={(km?.pct || 0) < UMBRAL_TERMINAR
                  ? t('voc.finishLockedHint', { p: UMBRAL_TERMINAR })
                  : t('voc.finishHint')}
              >
                {(km?.pct || 0) < UMBRAL_TERMINAR
                  ? t('voc.finishLocked', { p: UMBRAL_TERMINAR })
                  : t('voc.finish', { n: kFaltan.length })}
              </button>
            )}
          </div>
        </div>

      {!SIN_IA && (
        <div className="card komm-conv">
          {/* Arriba, el texto y el botón, uno en cada punta como en las demás
              tarjetas de "hazlo todo". El largo va debajo, en fila de opciones
              como la dificultad de los juegos o la dirección de las
              flashcards: es un ajuste, no la acción. */}
          <div className="komm-conv-fila">
            <div>
              <strong>{t('komm.convLesson')}</strong>
              <p className="muted" style={{ fontSize: '0.84rem', marginTop: 3 }}>
                {t('komm.convLessonSub')}
              </p>
            </div>
            <button className="btn-primary" onClick={() => makeDialog(null, 'alles')} disabled={!aiOn || busy !== null}>
              {busy === 'alles' ? t('komm.writing') : t('komm.genConv')}
            </button>
          </div>
          <LargoDialogo disabled={busy !== null} chips />
        </div>
      )}

      {busy === 'alles' && (
        <div style={{ marginTop: 14 }}>
          <Cargando
            icono="💬"
            titulo={t('wait.dlgTitle')}
            pasos={[t('wait.dlg1'), t('wait.dlg2'), t('wait.dlg3'), t('wait.dlg4')]}
          />
        </div>
      )}

      {!SIN_IA && !aiOn && (
        <p className="muted" style={{ fontSize: '0.83rem' }}>
          {t('komm.offConv')}
        </p>
      )}
      {err && <p style={{ color: 'var(--bad)', fontSize: '0.85rem' }}>{err}</p>}
      </div>
      )}

      {!PORTABLE && tab === 'fotos' && (
        <FotosVocab ownerId={`komm:${lektion.id}`} nombre={lektionLabel(lektion)} />
      )}
    </div>
  );
}
