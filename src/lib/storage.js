// Capa de almacenamiento. Hoy usa localStorage; manana se puede
// cambiar por llamadas a una API sin tocar el resto de la app.
// Todo pasa por get()/set()/update() con claves con prefijo.

import { fusionarClave } from './fusion.js';

const PREFIX = 'dtrainer:';

// El valor por defecto se devuelve SIEMPRE en copia, nunca el objeto que nos
// han pasado.
//
// Casi todos los DEFAULT de la app son objetos sueltos a nivel de modulo, y
// quien los recibe los modifica: storage.update(KEYS.progress, DEFAULT, p =>
// { p.concepts[id] = ... }). Si no hay nada guardado todavia -usuario nuevo,
// o justo despues de reiniciar el progreso-, eso escribia DENTRO del DEFAULT
// del modulo, que a partir de ahi dejaba de estar vacio para el resto de la
// sesion. El sintoma gordo era "Reiniciar progreso": escribe el DEFAULT, y el
// DEFAULT ya venia con los conceptos de antes pegados.
function copia(v) {
  if (v === null || typeof v !== 'object') return v;
  try {
    return structuredClone(v);
  } catch {
    return JSON.parse(JSON.stringify(v));
  }
}

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw == null) return copia(fallback);
    return JSON.parse(raw);
  } catch {
    return copia(fallback);
  }
}

// Guardado en el fichero del servidor de dev, para compartir el progreso entre
// el ordenador y el movil.
//
// El clearTimeout de abajo solo cancela un envio que TODAVIA no ha salido. Si
// uno estaba ya en vuelo y entretanto se guardaba algo mas, salia un segundo
// POST con el `localTs` de antes de que contestara el primero; el servidor veia
// esa marca vieja, la daba por caducada y respondia 409. Ese conflicto no era
// real: nos lo haciamos nosotros solos, y encima el cambio se perdia, porque el
// 409 se tragaba en silencio.
//
// Ahora nunca hay dos a la vez: si llega otro cambio mientras se envia, se
// apunta y se manda UNO detras, ya con la marca actualizada.
let syncTimeout;
let enVuelo = null;
let pendiente = false;
// Se ha mezclado con lo del servidor y hay que avisar, pero SOLO cuando la
// resubida haya terminado: quien escucha recarga la pagina, y una recarga en
// mitad del POST se lo lleva por delante y tu cambio se queda sin subir.
let huboFusion = false;
let reintentoPendiente = false;

// Las claves que has tocado en ESTE aparato y que todavia no ha aceptado el
// servidor. Es lo unico que hace falta para no perder nada en un 409: cuando
// el servidor va por delante, nos traemos lo suyo para todo MENOS para estas,
// que son justamente lo que acabas de escribir tu.
//
// Se guardan en localStorage porque una recarga en medio (la hace el propio
// arranque al detectar datos nuevos) se llevaria la lista por delante y
// volveriamos al problema de antes.
const CLAVE_SUCIAS = 'dtrainer_sync_sucias';

function sucias() {
  try {
    const l = JSON.parse(localStorage.getItem(CLAVE_SUCIAS) || '[]');
    return new Set(Array.isArray(l) ? l : []);
  } catch {
    return new Set();
  }
}

function marcarSucia(key) {
  try {
    const s = sucias();
    s.add(key);
    localStorage.setItem(CLAVE_SUCIAS, JSON.stringify([...s]));
  } catch {
    /* noop */
  }
}

// Quita de la lista solo las claves que acaban de subir bien.
function limpiarSucias(subidas) {
  try {
    const quedan = [...sucias()].filter((k) => !subidas.has(k));
    if (quedan.length) localStorage.setItem(CLAVE_SUCIAS, JSON.stringify(quedan));
    else localStorage.removeItem(CLAVE_SUCIAS);
  } catch {
    /* noop */
  }
}

// Escribe SIN marcar como sucia y SIN disparar un envio: es lo que se usa al
// traerse datos del servidor, que por definicion ya estan alli.
function writeLimpio(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.warn('No se pudo guardar', key, e);
  }
}

// Quien quiera enterarse de que los datos han cambiado por debajo (porque se
// han traido de otro aparato) se apunta aqui. Lo usa App para repintar sin
// recargar la pagina.
const oyentes = new Set();

export function alFusionar(fn) {
  oyentes.add(fn);
  return () => oyentes.delete(fn);
}

function avisarFusion() {
  oyentes.forEach((fn) => {
    try {
      fn();
    } catch {
      /* un oyente roto no puede tumbar la sincronizacion */
    }
  });
}

// Mezcla lo que hay en el servidor con lo de aqui: gana el servidor en todo
// menos en las claves que tu has tocado y aun no se han subido.
//
// Devuelve cuantas claves se han traido, para que quien llame sepa si hace
// falta repintar.
export function fusionarDelServidor(data, timestamp) {
  const mias = sucias();
  let traidas = 0;
  Object.entries(data || {}).forEach(([k, v]) => {
    // Los cajones gordos -el vocabulario, los apuntes, el diario- se juntan
    // por dentro, y por eso se juntan TAMBIEN cuando la clave es tuya: eso es
    // justo lo que antes tiraba a la basura lo del otro aparato.
    const unido = fusionarClave(k, read(k, null), v);
    if (unido !== undefined) {
      // Si de la mezcla sale algo distinto de lo que hay en el servidor, es
      // que este aparato tenia cosas que alli no estan: hay que SUBIRLO, no
      // solo guardarlo. Y como juntar es repetible -juntar(x, x) = x-, en
      // cuanto los dos lados tienen lo mismo deja de haber diferencia y esto
      // se para solo.
      const cambia = JSON.stringify(unido) !== JSON.stringify(v);
      if (cambia) write(k, unido);
      else writeLimpio(k, unido);
      traidas += 1;
      return;
    }
    if (mias.has(k)) return;
    writeLimpio(k, v);
    traidas += 1;
  });
  try {
    localStorage.setItem('dtrainer_sync_ts', String(timestamp));
  } catch {
    /* noop */
  }
  return traidas;
}

// El HTML portable no tiene servidor detras: se abre con doble clic desde
// file://. Ahi la sincronizacion no es que falle, es que no aplica.
export const HAY_SERVIDOR = typeof __PORTABLE__ === 'undefined' || !__PORTABLE__;

function pushSync() {
  if (!HAY_SERVIDOR) return;
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(enviarSync, 1000);
}

function enviarSync(reintento = false) {
  if (enVuelo) {
    pendiente = true;
    return;
  }
  const localTs = Number(localStorage.getItem('dtrainer_sync_ts') || 0);
  const enviadas = sucias();
  enVuelo = fetch('/api/sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ localTs, payload: storage.exportAll() })
  })
    .then(async (res) => {
      if (res.status === 409) {
        // El fichero lo ha tocado otra pestaña u otro aparato despues de la
        // ultima vez que supimos de el.
        //
        // Antes esto era un callejon sin salida: se avisaba por consola -donde
        // no lo lee nadie- y no se hacia nada mas. Como el arranque y el volver
        // a la pestaña se traen lo del servidor ENCIMA de lo local, lo que
        // acababas de escribir aqui desaparecia sin decir ni mu. Escribir una
        // entrada del diario en el ordenador despues de haber usado el movil
        // bastaba para perderla.
        //
        // Ahora se mezcla: lo del servidor para todo, menos las claves que has
        // tocado tu y aun no han subido, y se vuelve a subir ya con la marca
        // buena. Una sola vez: si el segundo intento tambien choca es que hay
        // otro aparato escribiendo ahora mismo, y entonces si toca esperar al
        // siguiente cambio.
        if (reintento) return;
        try {
          const g = await fetch('/api/sync');
          if (g.ok) {
            const { timestamp, data } = await g.json();
            fusionarDelServidor(data, timestamp);
            huboFusion = true;
            // Se APUNTA. Lanzarlo aqui rompia el "solo un envio a la vez":
            // el .finally() de este mismo envio llegaba despues y ponia
            // enVuelo = null con el reintento todavia en vuelo.
            reintentoPendiente = true;
          }
        } catch {
          /* sin red: se reintenta con el siguiente cambio */
        }
        return;
      }
      const data = await res.json();
      if (data?.success && data.timestamp) {
        localStorage.setItem('dtrainer_sync_ts', String(data.timestamp));
        // Solo las que iban en ESTE envio: si has escrito algo mientras el
        // POST estaba en el aire, esa clave sigue sucia y tiene que subir.
        limpiarSucias(enviadas);
        if (huboFusion) {
          huboFusion = false;
          avisarFusion();
        }
      }
    })
    .catch(() => {})
    .finally(() => {
      enVuelo = null;
      if (reintentoPendiente) {
        reintentoPendiente = false;
        enviarSync(true);
        return;
      }
      if (pendiente) {
        pendiente = false;
        enviarSync();
      }
    });
}

function write(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
    marcarSucia(key);
    pushSync();
  } catch (e) {
    console.warn('No se pudo guardar', key, e);
  }
}

export const storage = {
  get: read,
  set: write,
  update(key, fallback, fn) {
    const current = read(key, fallback);
    const next = fn(current);
    write(key, next);
    return next;
  },
  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
      marcarSucia(key);
      pushSync();
    } catch {
      /* noop */
    }
  },
  // Exporta todo el progreso para copia de seguridad / migracion futura.
  exportAll() {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) {
        out[k.slice(PREFIX.length)] = read(k.slice(PREFIX.length), null);
      }
    }
    return out;
  },
  importAll(obj) {
    Object.entries(obj || {}).forEach(([k, v]) => write(k, v));
  },

  // Borra TODO lo aprendido y deja los ajustes en paz: perder la clave de la
  // IA o el idioma por reiniciar el progreso no tiene ningún sentido.
  //
  // Va por prefijo a propósito. Con una lista de claves escrita a mano, cada
  // cosa nueva (monedas, el zorro, las notas de las canciones…) se quedaba
  // fuera sin que nadie se diera cuenta, y el botón mentía.
  resetAll(conservar = ['settings']) {
    const fuera = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX) && !conservar.includes(k.slice(PREFIX.length))) fuera.push(k);
    }
    fuera.forEach((k) => localStorage.removeItem(k));
    return fuera.length;
  }
};

export const KEYS = {
  streak: 'streak',
  progress: 'progress',
  leaderboard: 'leaderboard',
  settings: 'settings'
};
