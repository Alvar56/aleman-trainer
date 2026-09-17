// Capa de almacenamiento. Hoy usa localStorage; manana se puede
// cambiar por llamadas a una API sin tocar el resto de la app.
// Todo pasa por get()/set()/update() con claves con prefijo.

const PREFIX = 'dtrainer:';

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
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

function pushSync() {
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(enviarSync, 1000);
}

function enviarSync() {
  if (enVuelo) {
    pendiente = true;
    return;
  }
  const localTs = Number(localStorage.getItem('dtrainer_sync_ts') || 0);
  enVuelo = fetch('/api/sync', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ localTs, payload: storage.exportAll() })
  })
    .then(async (res) => {
      if (res.status === 409) {
        // Conflicto de verdad: el fichero lo ha tocado otra pestaña u otro
        // aparato despues de la ultima vez que supimos de el. Aqui NO se pisa
        // nada: lo que se manda es una foto completa del estado local y
        // sobrescribirlo se llevaria por delante lo del otro lado. Se deja la
        // marca como esta, asi que al recargar (o al volver a la pestaña) el
        // arranque se trae los datos buenos, que es la politica que ya tenia
        // la app para esto.
        console.warn('sync: el servidor tiene datos mas nuevos. No se ha sobrescrito; se traeran al recargar.');
        return;
      }
      const data = await res.json();
      if (data?.success && data.timestamp) {
        localStorage.setItem('dtrainer_sync_ts', String(data.timestamp));
      }
    })
    .catch(() => {})
    .finally(() => {
      enVuelo = null;
      if (pendiente) {
        pendiente = false;
        enviarSync();
      }
    });
}

function write(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
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
