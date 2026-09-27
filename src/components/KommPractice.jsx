import React, { useMemo, useRef, useState } from 'react';
import { t, pick, codigoIdioma } from '../lib/i18n.js';
import { recordKommPracticed, bumpSessions, KOMM_APROBADO } from '../lib/progress.js';
import { recordActivity } from '../lib/streak.js';
import { saveRun, rankOfRun } from '../lib/leaderboard.js';
import { cobrarEjercicio, RECONOCER, RECONSTRUIR, PRODUCIR } from '../lib/monedas.js';
import MultipleChoice from './MultipleChoice.jsx';
import { respuestaDe, seguimientoDe } from '../lib/kursbuch/respuestas.js';
import WordOrder from './WordOrder.jsx';
import WriteCard from './WriteCard.jsx';
import FoxOverlay, { useFox } from './FoxOverlay.jsx';
import { apuntarRespuesta, currentStreak } from '../lib/rachas.js';
import { useTeclas } from '../lib/teclas.js';
import Reloj from './Reloj.jsx';
import RachaPill from './RachaPill.jsx';
import Premios from './Premios.jsx';
import StarButton from './StarButton.jsx';

// Miniejercicio de una función comunicativa, con las frases que YA trae el
// Kursbuch. Sin IA: las Wendungen están impresas en el libro, así que esto
// funciona con la IA apagada, que antes dejaba esta sección clavada en 0.
//
// Y se corrige solo. La primera versión te preguntaba "¿la sabías?" y te fiabas
// de tu palabra; eso no es acertar, es decir que sí. Aquí o eliges bien o
// colocas bien las palabras, y el porcentaje sube con cada acierto.
// Se aprueba con un 80%. Estuvo en 100 mientras la tanda eran tres o cuatro
// preguntas -ahi fallar una era fallar un cuarto del examen-, pero ahora son
// diez: exigir el pleno en diez preguntas no mide que sepas la funcion, mide
// que no te hayas despistado ni una vez.
//
// El numero vive en progress.js, que es quien lo usa para el porcentaje: aqui
// solo se re-exporta para las pantallas que ya lo importaban de aqui.
export const APROBADO = KOMM_APROBADO;

function mezclar(a) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

// Una pregunta por frase, de CUATRO tipos, porque miden cosas distintas:
//
//   decir      elegir la frase alemana a partir del castellano: reconocer.
//   ordenar    colocar las palabras, que es donde de verdad se falla en
//              alemán: el verbo tiene su sitio y no es el de aquí.
//   contestar  te dicen la frase, eliges qué respondes.
//   entender   al revés: te contestan algo y hay que saber qué habías dicho.
//              Es lo que pasa de verdad en una conversación — la frase que tú
//              sueltas te la sabes; la que te devuelven, no.
//
// Los dos últimos salen de las respuestas de respuestas.js. Antes solo se
// usaba uno de los dos, y encima con un `i % 3` que si no se cumplía la
// condición se caía al de siempre: había lecciones enteras donde no salía
// ninguna respuesta. Ahora, para cada frase, se mira QUÉ tipos se pueden
// montar y se reparte entre esos, así que la variedad no depende de la suerte
// del orden en que hayan caído las frases.
//
// `ajenas` son las frases del resto de la lección y `otrasRespuestas` las
// respuestas del resto: hacen de distractores. Sin ellas el test se resuelve
// por descarte y no vale nada.
//   hueco      la frase alemana con una palabra tapada. Mide la palabra
//              exacta, que es lo que se te escapa al repetir de oido.
//   significado  al reves que "decir": te dan la frase alemana y eliges lo que
//              quiere decir. Es la que se contesta mas rapido, y por eso paga
//              menos, pero hace falta: reconocer lo que te dicen es la mitad
//              de una conversacion.
export const TIPOS = ['decir', 'contestar', 'entender', 'hueco', 'significado', 'ordenar'];

// Preguntas por tanda. Una funcion del libro trae tres o cuatro frases, asi
// que una pregunta por frase dejaba tandas de tres: se acababan antes de
// enterarte y no daba tiempo ni a equivocarte. Cada frase da para varias
// preguntas distintas (elegirla, ordenarla, contestarla...), asi que se
// reparten por rondas hasta llegar a diez.
export const POR_TANDA = 10;

// La palabra que se tapa: la mas larga que no sea la primera -la primera va en
// mayuscula y se adivina sola- ni un articulo. Devuelve null si la frase no da
// para tanto, y entonces se prueba con otro tipo.
//
// `salto` es para cuando la misma frase vuelve a caer en la tanda: en vez de
// taparle otra vez la misma palabra, se tapa la siguiente en tamano.
function palabraTapable(palabras, salto = 0) {
  const fuera = new Set(['der', 'die', 'das', 'den', 'dem', 'ein', 'eine', 'und', 'ist', 'ich', 'du', 'sie']);
  const limpias = palabras.map((x) => x.replace(/[.,!?¿¡"„“]/g, '').toLowerCase());
  const candidatas = [];
  for (let k = 1; k < palabras.length; k++) {
    const limpia = palabras[k].replace(/[.,!?¿¡"„“]/g, '');
    if (limpia.length < 4 || fuera.has(limpia.toLowerCase())) continue;
    // Tampoco vale una palabra que se repite en la propia frase: en
    // "Passt dir 18 Uhr? - Ja, das ___." la tienes escrita dos lineas mas
    // arriba y el hueco se rellena solo.
    if (limpias.filter((x) => x === limpia.toLowerCase()).length > 1) continue;
    candidatas.push({ k, largo: limpia.length });
  }
  if (!candidatas.length) return null;
  candidatas.sort((a, b) => b.largo - a.largo);
  return candidatas[salto % candidatas.length].k;
}

// Todas las preguntas que se le pueden montar a UNA frase. Devuelve funciones
// y no objetos: montar una pregunta cuesta barajar tres listas, y de estas seis
// solo se usan una o dos por frase.
function montadores(w, ajenas, otrasRespuestas, glosas, vuelta = 0) {
  const palabras = String(w.de).trim().split(/\s+/);
  const distractores = mezclar(ajenas.filter((x) => x !== w.de)).slice(0, 3);
  const resp = respuestaDe(w.de);
  const despistes = resp
    ? mezclar(otrasRespuestas.filter((x) => x !== resp.de)).slice(0, 3)
    : [];

  return {
    decir: () => distractores.length >= 2 && {
      tipo: 'mc',
      item: {
        prompt: t('komm.exPick'),
        sentence: w.es + (w.wann ? `  (${w.wann})` : ''),
        marco: 'tuyo',
        answer: w.de,
        options: mezclar([w.de, ...distractores])
      },
      explica: { de: w.de, es: w.es }
    },
    ordenar: () => palabras.length >= 3 && palabras.length <= 12 && {
      tipo: 'orden',
      item: {
        prompt: w.es + (w.wann ? ` — ${w.wann}` : ''),
        tokens: mezclar(palabras),
        solution: palabras
      },
      explica: { de: w.de, es: w.es }
    },
    contestar: () => resp && despistes.length >= 2 && {
      tipo: 'mc',
      item: {
        prompt: t('komm.exAntwort'),
        sentence: w.de,
        marco: 'dicho',
        answer: resp.de,
        options: mezclar([resp.de, ...despistes])
      },
      // Aqui lo que se contesta es la RESPUESTA, asi que se explica esa.
      explica: { de: resp.de, es: resp.es }
    },
    entender: () => resp && distractores.length >= 2 && {
      tipo: 'mc',
      item: {
        prompt: t('komm.exFrage'),
        sentence: resp.de,
        marco: 'dicho',
        answer: w.de,
        options: mezclar([w.de, ...distractores])
      },
      explica: { de: w.de, es: w.es }
    },
    hueco: () => {
      const k = palabraTapable(palabras, vuelta);
      if (k === null) return false;
      const buena = palabras[k].replace(/[.,!?¿¡"„“]/g, '');
      // Aqui se ESCRIBE la palabra, no se elige entre tres. Con opciones
      // delante bastaba con reconocer cual pegaba; teclearla es lo que de
      // verdad se parece a decir la frase. La inicial la da WriteCard, asi
      // que tampoco es adivinar a ciegas.
      //
      // Y al no hacer falta despistes, ya no se descartan las frases de las
      // que no salian tres palabras ajenas decentes: hay mas huecos posibles.
      //
      // Solo se tapa la PALABRA: el signo que la sigue se queda. Si no,
      // "...das wiederholen?" perdia la interrogacion y la frase quedaba
      // coja justo donde estas mirando.
      const conHueco = palabras
        .map((x, n) => (n === k ? x.replace(/^[^.,!?¿¡"„“]+/, '___') : x))
        .join(' ');
      return {
        tipo: 'escribir',
        item: {
          anweisung: t('komm.exHueco'),
          sentence: conHueco,
          answer: buena
        },
        explica: { de: w.de, es: w.es }
      };
    },
    // Al reves que 'decir': la frase alemana delante y eliges lo que significa.
    // Las glosas de las otras frases hacen de distractores.
    significado: () => {
      const otras = mezclar(glosas.filter((x) => x && x !== w.es)).slice(0, 3);
      return otras.length >= 2 && {
        tipo: 'mc',
        item: {
          prompt: t('komm.exSentido'),
          sentence: w.de,
          marco: 'dicho',
          answer: w.es,
          options: mezclar([w.es, ...otras])
        },
        explica: { de: w.de, es: w.es }
      };
    }
  };
}

// Espacia las preguntas para que nunca aparezcan dos de la misma frase
// seguidas ni se concentren los mismos tipos de ejercicio.
function espaciarPreguntas(lista) {
  if (lista.length <= 2) return mezclar(lista);
  const mezcladas = mezclar(lista);
  const res = [];
  const pendientes = [...mezcladas];

  while (pendientes.length > 0) {
    const ultimoDe = res.length > 0 ? res[res.length - 1].de : null;
    const ultimoTipo = res.length > 0 ? res[res.length - 1].tipo : null;

    // 1. Intentar encontrar candidato con distinta frase y distinto tipo
    let idx = pendientes.findIndex((p) => p.de !== ultimoDe && p.tipo !== ultimoTipo);
    // 2. Si no hay, al menos distinta frase
    if (idx === -1) {
      idx = pendientes.findIndex((p) => p.de !== ultimoDe);
    }
    // 3. Si no queda otra, el primero disponible
    if (idx === -1) {
      idx = 0;
    }
    res.push(pendientes.splice(idx, 1)[0]);
  }
  return res;
}

// La tanda: genera hasta `objetivo` preguntas con máxima variedad y sin
// repeticiones innecesarias.
//
// Prioriza las frases del apartado elegido (con tipos distintos para cada
// una), y si el apartado tiene pocas frases, complementa con otras frases de
// la lección en vez de machacar las mismas 3 frases en un bucle repetitivo.
function construir(wendungen, ajenas = [], otrasRespuestas = [], glosas = [], objetivo = POR_TANDA, tipos = TIPOS, lektionId = null) {
  const frasesPrimarias = mezclar(
    wendungen.flatMap((w) => [
      w,
      ...seguimientoDe(w.de).map((x) => ({ ...x, seccion: w.seccion || w.funktion }))
    ])
  );

  const ajenasTxt = ajenas.filter((txt) => !frasesPrimarias.some((p) => p.de === txt));
  const frasesAjenas = ajenasTxt.map((txt) => {
    const gIdx = ajenas.indexOf(txt);
    const es = glosas[gIdx] || '';
    return { de: txt, es, seccion: null };
  });

  if (!frasesPrimarias.length && !frasesAjenas.length) return [];

  const tiposDisponibles = tipos.length ? tipos : TIPOS;
  const candidatas = [];
  const usadasPorFrase = new Map();

  const intentarGenerar = (w, tipoForzado = null, vuelta = 0) => {
    const tiposProbables = tipoForzado ? [tipoForzado] : mezclar([...tiposDisponibles]);
    const monta = montadores(w, ajenas, otrasRespuestas, glosas, vuelta);
    for (const t of tiposProbables) {
      if (typeof monta[t] === 'function') {
        const p = monta[t]();
        if (p) {
          return {
            ...p,
            id: `komm:${lektionId || ''}:${p.tipo || 'mc'}:${w.de}:${t}:${vuelta}`,
            seccion: w.seccion,
            lektionId,
            de: w.de,
            es: w.es,
            _kommTipo: t
          };
        }
      }
    }
    return null;
  };

  // Ronda 1: Al menos un ejercicio de cada frase primaria
  for (const w of frasesPrimarias) {
    const item = intentarGenerar(w, null, 0);
    if (item) {
      candidatas.push(item);
      if (!usadasPorFrase.has(w.de)) usadasPorFrase.set(w.de, new Set());
      usadasPorFrase.get(w.de).add(item._kommTipo);
    }
  }

  // Ronda 2: Si el apartado es corto, dar un 2º ejercicio con formato/tipo DISTINTO
  if (candidatas.length < objetivo) {
    for (const w of mezclar(frasesPrimarias)) {
      if (candidatas.length >= objetivo) break;
      const yaUsados = usadasPorFrase.get(w.de) || new Set();
      const tiposRestantes = tiposDisponibles.filter((t) => !yaUsados.has(t));
      const tipoElegido = tiposRestantes.length ? mezclar(tiposRestantes)[0] : null;
      const item = intentarGenerar(w, tipoElegido, 1);
      if (item) {
        candidatas.push(item);
        yaUsados.add(item._kommTipo);
      }
    }
  }

  // Ronda 3: Si todavía faltan preguntas (para no saturar con la misma frase),
  // añadimos preguntas de repaso del resto de la lección
  if (candidatas.length < objetivo && frasesAjenas.length > 0) {
    for (const w of mezclar(frasesAjenas)) {
      if (candidatas.length >= objetivo) break;
      const item = intentarGenerar(w, null, 0);
      if (item) {
        candidatas.push(item);
      }
    }
  }

  // Ronda 4: Si no hay frases ajenas disponibles, completar con variación de salto
  let vueltaExtra = 2;
  while (candidatas.length < objetivo && vueltaExtra < 5) {
    let anyAdded = false;
    for (const w of mezclar(frasesPrimarias)) {
      if (candidatas.length >= objetivo) break;
      const item = intentarGenerar(w, null, vueltaExtra);
      if (item) {
        candidatas.push(item);
        anyAdded = true;
      }
    }
    if (!anyAdded) break;
    vueltaExtra++;
  }

  return espaciarPreguntas(candidatas.slice(0, objetivo));
}

export default function KommPractice({
  lektionId,
  funktion,
  todasLasFrases = [],
  todasLasRespuestas = [],
  todasLasGlosas = [],
  // Que tipos de pregunta entran. Por defecto, los seis.
  tipos = TIPOS,
  // La tanda mezclada no es de ninguna función, así que no marca ninguna
  // como hecha. Todo lo demás (monedas, XP, racha, sesión) cuenta igual.
  itemsFijos = null,
  mezcla = false,
  // A donde te devuelve el boton del resumen, para decirlo con su nombre:
  // 'teoria' si has entrado desde las frases, 'ejercicios' si desde la rejilla.
  volverA = null,
  onSalir,
  onHecho
}) {
  const fox = useFox();
  const [vuelta, setVuelta] = useState(0);
  // Las preguntas de "repetir los fallos": cuando las hay, la tanda son esas.
  const [fijas, setFijas] = useState(null);
  const generadas = useMemo(
    () => construir(funktion?.wendungen || [], todasLasFrases, todasLasRespuestas, todasLasGlosas, POR_TANDA, tipos, lektionId),
    [funktion?.funktion, (funktion?.wendungen || []).length, tipos, vuelta, lektionId]
  );
  const preguntas = fijas || itemsFijos || generadas;
  const [i, setI] = useState(0);
  const [juzgada, setJuzgada] = useState(null); // null | true | false
  const aciertos = useRef(0);
  // Para que la tanda cuente como sesión hace falta lo mismo que en los demás
  // juegos: qué has ido acertando (la racha de monedas sale de ahí) y cuánto
  // has tardado.
  const resultados = useRef([]);
  const monedas = useRef(0);
  // La racha de aciertos seguidos, igual que en los demás juegos.
  // Lo que llevas seguidas ahora, para el rayito de la cabecera.
  const [seguidas, setSeguidas] = useState(() => currentStreak());
  // Cuantas respuestas de esta tanda han ido a parar a un apartado. Solo
  // sirve para saber si hay que refrescar la lista al terminar.
  const apuntados = useRef(0);
  const mejorSeguidas = useRef(0);
  const ultimaSeguidas = useRef(null);
  const desde = useRef(Date.now());
  const [fin, setFin] = useState(null);

  const p = preguntas[i] || null;

  const starItem = useMemo(() => {
    if (!p) return null;
    const pid = p.id || `komm:${lektionId || ''}:${p.tipo || 'mc'}:${p.explica?.de || p.item?.sentence || i}`;
    return {
      ...p,
      id: pid,
      tipo: p.tipo || 'mc',
      item: p.item,
      explica: p.explica,
      seccion: p.seccion,
      lektionId: p.lektionId || lektionId,
      funktion: typeof funktion === 'object' ? (funktion?.funktion || '') : (funktion || ''),
      sentence: p.item?.sentence,
      prompt: p.item?.prompt || p.item?.anweisung,
      de: p.explica?.de || p.de,
      es: p.explica?.es || p.es,
      ...(p.item || {})
    };
  }, [p, lektionId, funktion, i]);

  // Enter para pasar a la siguiente, como en gramática.
  useTeclas({ Enter: () => siguiente(), ' ': () => siguiente(), ArrowLeft: () => atras() }, juzgada !== null && !fin);

  if (!preguntas.length) return null;

  function contestar(ok, _texto, pistas = 0) {
    if (juzgada !== null) return;
    if (ok) aciertos.current += 1;
    // Elegir la frase es RECONOCER; ordenarla, RECONSTRUIR.
    // Elegir es RECONOCER, ordenar es RECONSTRUIR y escribir el hueco es
    // PRODUCIR: no cuesta lo mismo marcar una opcion que teclear la palabra.
    monedas.current += cobrarEjercicio(ok, {
      nivel: preguntas[i].tipo === 'orden'
        ? RECONSTRUIR
        : preguntas[i].tipo === 'escribir'
          ? PRODUCIR
          : RECONOCER,
      pistas
    });
    resultados.current[i] = { ok, seccion: preguntas[i].seccion, pregunta: preguntas[i] };
    // La barra de la leccion sube AQUI, en cada respuesta, igual que en
    // gramatica y en vocabulario. Antes se apuntaba todo junto al terminar la
    // tanda: la barra pegaba un salto de hasta veinte puntos de una vez, y si
    // te salias a la mitad no contaba nada de lo que llevabas bien.
    const seccion = preguntas[i].seccion || (mezcla ? null : funktion.funktion);
    if (seccion) {
      recordKommPracticed(lektionId, seccion, ok ? 1 : 0, 1);
      apuntados.current += 1;
    }
    const rSeg = apuntarRespuesta(ok);
    if (rSeg.seguidas > mejorSeguidas.current) mejorSeguidas.current = rSeg.seguidas;
    setSeguidas(rSeg.seguidas);
    ultimaSeguidas.current = rSeg;
    fox.acierto(ok);
    setJuzgada(ok);
  }

  function verEstado(idx) {
    setI(idx);
    const hecho = resultados.current[idx];
    if (hecho) {
      setJuzgada(hecho.ok);
    } else {
      setJuzgada(null);
    }
    fox.sigue();
  }

  function atras() {
    if (i === 0) return;
    verEstado(i - 1);
  }

  function siguiente() {
    if (i + 1 < preguntas.length) {
      verEstado(i + 1);
      return;
    }
    const pct = Math.round((aciertos.current / preguntas.length) * 100);
    // Lo de cada apartado ya se ha ido apuntando respuesta a respuesta; aqui
    // solo queda avisar a la lista de que se repinte.
    if (apuntados.current > 0) onHecho?.();
    // La SESIÓN, en cambio, cuenta siempre. Has practicado, y eso es lo que
    // miden la racha, el nivel y la precisión de las últimas diez. Estos
    // ejercicios eran los únicos de la app que no contaban para nada: podías
    // pasarte una tarde en Kommunikation y la portada seguía en cero.
    const segundos = Math.max(1, Math.round((Date.now() - desde.current) / 1000));
    const total = preguntas.length;
    const acc = total ? aciertos.current / total : 0;
    let xp = aciertos.current * 10 + (total - aciertos.current) * 2;
    if (acc >= 0.9) xp += 5;
    bumpSessions();
    // Lo que devuelve dice si esta tanda ha subido de nivel.
    const racha = recordActivity(xp);
    const run = saveRun({
      topicId: 'komm:' + lektionId,
      topicName: 'Kommunikation · ' + (typeof funktion === 'object' ? (funktion?.funktion || '') : (funktion || '')),
      mode: 'komm',
      game: 'komm',
      correct: aciertos.current,
      total,
      accuracy: Math.round(acc * 100) / 100,
      seconds: segundos,
      xp
    });
    const rank = rankOfRun(run.id, 'komm:' + lektionId);
    setFin({
      pct,
      segundos,
      // Cuantas has fallado, para el boton de repetirlas.
      fallos: resultados.current.filter((r) => !r.ok).length,
      aciertos: aciertos.current,
      total,
      xp,
      monedas: monedas.current,
      bonoDia: racha.events.find((e) => e.type === 'coins')?.value || 0,
      dias: racha.state.current,
      rachaMax: mejorSeguidas.current,
      rachaRecord: ultimaSeguidas.current,
      rank,
      subida: racha.events.find((e) => e.type === 'level') || null
    });
  }

  function otraVez() {
    aciertos.current = 0;
    resultados.current = [];
    apuntados.current = 0;
    monedas.current = 0;
    desde.current = Date.now();
    setI(0);
    setJuzgada(null);
    setFin(null);
    setFijas(null);
    setVuelta((v) => v + 1); // frases barajadas de nuevo, no la misma tanda
  }

  // Otra tanda solo con lo que acabas de fallar.
  function repetirFallos() {
    const malas = resultados.current.filter((r) => !r.ok).map((r) => r.pregunta).filter(Boolean);
    if (!malas.length) return;
    resultados.current = [];
    apuntados.current = 0;
    aciertos.current = 0;
    monedas.current = 0;
    mejorSeguidas.current = 0;
    desde.current = Date.now();
    setFijas(malas);
    setI(0);
    setJuzgada(null);
    setFin(null);
  }

  if (fin) {
    const aprobado = fin.pct >= APROBADO;
    return (
      <div className="card center stack kp-fin">
        {/* La misma cabecera que en gramatica y en vocabulario: el emoji
            manda y el porcentaje baja a su tarjeta. Un 100% gigante en
            verde no dice si es para celebrarlo o no; una copa, si. */}
        <div className="confetti-badge">{fin.pct === 100 ? '🏆' : aprobado ? '🎉' : '💪'}</div>
        <h2>{fin.pct === 100 ? t('sum.perfect') : aprobado ? t('sum.good') : t('sum.keep')}</h2>
        <span className="pill ctx-tema">
          💬 {typeof funktion === 'object' ? (funktion?.funktion || '') : (funktion || '')}
        </span>
        <div className="stat-grid">
          <div className="card">
            <div className="big-stat">{fin.pct}%</div>
            <div className="muted">{t('sum.accuracy')}</div>
          </div>
          <div className="card">
            <div className="big-stat">{fin.aciertos}/{fin.total}</div>
            <div className="muted">{t('sum.hits')}</div>
          </div>
          <div className="card">
            <div className="big-stat">
              {Math.floor(fin.segundos / 60)}:{String(fin.segundos % 60).padStart(2, '0')}
            </div>
            <div className="muted">{t('sum.time')}</div>
          </div>
        </div>
        <Premios
          subida={fin.subida}
          xp={fin.xp}
          monedas={fin.monedas}
          bonoDia={fin.bonoDia}
          rachaMax={fin.rachaMax}
          rachaRecord={fin.rachaRecord}
          dias={fin.dias}
          rank={fin.rank}
        />
        {/* En la mezcla no hay apartado que completar: la nota es la nota. */}
        {!mezcla && (
          <p className={aprobado ? '' : 'muted'}>
            {aprobado ? t('komm.exPassed') : t('komm.exFailed', { p: APROBADO })}
          </p>
        )}
        <div className="row" style={{ gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Lo fallado, otra vez y nada más. */}
          {fin.fallos > 0 && (
            <button className="btn-primary" onClick={repetirFallos}>
              {t('sum.retryFails', { n: fin.fallos })}
            </button>
          )}
          <button className={fin.fallos > 0 ? 'btn-ghost' : 'btn-primary'} onClick={otraVez}>
            {t('komm.practiceAgain')}
          </button>
          <button className="btn-ghost" onClick={onSalir}>
            {volverA === 'ejercicios'
              ? t('vsum.backExercises')
              : volverA === 'teoria'
                ? t('komm.backTheory')
                : t('back')}
          </button>
        </div>
      </div>
    );
  }

  const buena = p?.item?.answer || (p?.item?.solution || []).join(' ');

  return (
    <div className="stack kp">
      <div className="progress-top">
        <button className="btn-ghost" onClick={onSalir} title={t('back')}>✕</button>
        <div className="bar"><span style={{ width: ((i + (juzgada !== null ? 1 : 0)) / preguntas.length) * 100 + '%' }} /></div>
        {i > 0 && resultados.current[i - 1] && (
          <button className="btn-ghost ses-atras ses-icon-btn" onClick={atras} title={t('ses.prev')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <span className="timer">{i + 1}/{preguntas.length}</span>
      </div>

      {/* El nombre de la funcion es CONTEXTO, no un enunciado. Llevaba la
          misma clase que el enunciado del ejercicio y salian dos lineas
          grises identicas seguidas, sin saber cual era cual. */}
      <div className="ctx-fila">
        <span className="pill ctx-tema">
          💬 {typeof funktion === 'object' ? (funktion?.funktion || '') : (funktion || '')}
        </span>
        <span className="row" style={{ gap: 8 }}>
          <StarButton item={starItem} />
          <RachaPill n={seguidas} />
          <Reloj desde={desde.current} />
        </span>
      </div>

      {/* key: sin él, React reaprovecha el componente entre preguntas y se
          queda la respuesta anterior ya marcada. */}
      {p.tipo === 'mc' ? (
        <MultipleChoice key={i} item={p.item} onAnswer={contestar} />
      ) : p.tipo === 'escribir' ? (
        <WriteCard key={i} item={p.item} onAnswer={contestar} />
      ) : (
        <WordOrder key={i} item={p.item} onAnswer={contestar} />
      )}

      {/* La correccion, con el mismo cuadro que gramatica y vocabulario: la
          frase alemana y lo que quiere decir. Antes era una linea suelta -"x
          Era: <la frase>"- que decia cual era la buena pero no que
          significaba, que es justo lo que te falta cuando acabas de fallarla. */}
      {juzgada !== null && (
        <div className={'feedback ' + (juzgada ? 'ok' : 'no')}>
          <div className="verdict">{juzgada ? t('fb.right') : t('fb.wrong')}</div>
          {p.explica && <div className="de">{p.explica.de}</div>}
          {p.explica && (
            <div className="es">
              <span className="lang-tag">{codigoIdioma()}</span>
              {p.explica.es}
            </div>
          )}
          {/* Cuando fallas, cual era la buena. Solo si aporta algo: en
              "elegir la frase" la buena ES la frase de arriba, y en "que
              significa" es su traduccion, que tambien esta ya. En el hueco es
              una palabra y en ordenar es el orden, y entonces si aporta. */}
          {!juzgada && buena && buena !== p.explica?.de && buena !== p.explica?.es && (
            <div className="es">
              {t('vs.answerIs')}{' '}
              <strong>{buena}</strong>
            </div>
          )}
          <button className="btn-primary" style={{ marginTop: 14 }} onClick={siguiente}>
            {i + 1 < preguntas.length ? t('ueb.siguiente') : t('ueb.terminar')}
          </button>
        </div>
      )}
      {/* El zorro, como en los demás ejercicios: reacciona a cada respuesta y
          se calla mientras está el pie de la corrección, que es donde se le
          montaría el bocadillo. */}
      <FoxOverlay fox={fox} mudo={juzgada !== null} racha={seguidas} />
    </div>
  );
}
