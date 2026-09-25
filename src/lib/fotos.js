// Las fotos del cuaderno, fuera de localStorage.
//
// Vivian dentro de `notebook:notes`, en base64, junto al texto de la nota. Dos
// problemas, los dos medidos:
//
//   1. Cada guardado sincroniza `storage.exportAll()`, o sea TODO. Con seis
//      fotos eso son 555 KB subidos cada vez que ganas una moneda. En el movil
//      con datos, en cada ejercicio.
//
//   2. localStorage tiene un tope de unos 5 MB. A 57 KB por foto quedaban unas
//      ochenta, y al pasarlo el `catch` de storage.js suelta un console.warn
//      que no lee nadie: escribes una nota, no se guarda y no te enteras.
//
// IndexedDB arregla las dos: no tiene ese tope (la cuota va por origen, del
// orden de gigas) y no pasa por exportAll(), asi que no viaja en cada envio.
//
// La nota se queda solo con la REFERENCIA: `thumbRef`. Las notas de antes
// llevan la imagen en `thumb`; migrar() las mueve aqui una sola vez, y
// mientras tanto se siguen pintando (ver el fallback en NotePhoto).

const DB = 'dtrainer-fotos';
const ALMACEN = 'fotos';

let abierta = null;

function abrir() {
  if (abierta) return abierta;
  abierta = new Promise((resolve) => {
    // Nunca rechaza: si no hay IndexedDB se devuelve null y quien llama se
    // queda sin foto, no sin nota.
    //
    // El try no sobra. Con el HTML portable la pagina va por file://, y ahi
    // Chrome y Brave lanzan SecurityError en el propio open(), de forma
    // sincrona. Sin el try eso rechazaba la promesa, y como `abierta` se
    // cachea, TODAS las llamadas posteriores heredaban el rechazo: guardar
    // una foto reventaba. Lo mismo vale para el modo privado de algunos
    // navegadores.
    if (typeof indexedDB === 'undefined') {
      resolve(null);
      return;
    }
    let req;
    try {
      req = indexedDB.open(DB, 1);
    } catch {
      resolve(null);
      return;
    }
    const timer = setTimeout(() => resolve(null), 1500);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(ALMACEN)) db.createObjectStore(ALMACEN);
    };
    req.onsuccess = () => {
      clearTimeout(timer);
      resolve(req.result);
    };
    req.onerror = () => {
      clearTimeout(timer);
      resolve(null);
    };
    req.onblocked = () => {
      clearTimeout(timer);
      resolve(null);
    };
  });
  return abierta;
}

function conAlmacen(modo, fn) {
  return abrir().then(
    (db) =>
      new Promise((resolve) => {
        if (!db) {
          resolve(null);
          return;
        }
        let tx;
        try {
          tx = db.transaction(ALMACEN, modo);
        } catch {
          resolve(null);
          return;
        }
        const req = fn(tx.objectStore(ALMACEN));
        if (!req) {
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(null);
          return;
        }
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      })
  );
}

function nuevoId() {
  return 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// Guarda una imagen y devuelve su referencia. Si IndexedDB no va, devuelve
// null y quien llama se queda con la imagen en la nota, como antes: peor,
// pero no se pierde.
export async function guardarFoto(dataUrl) {
  if (!dataUrl) return null;
  const id = nuevoId();
  const ok = await conAlmacen('readwrite', (s) => {
    s.put(dataUrl, id);
    return null;
  });
  return ok ? id : null;
}

export async function leerFoto(id) {
  if (!id) return null;
  return conAlmacen('readonly', (s) => s.get(id));
}

// Varias de una vez: la pantalla de una nota pinta todas sus fotos juntas y
// no tiene sentido abrir una transaccion por cada una.
export async function leerFotos(ids) {
  const limpios = [...new Set((ids || []).filter(Boolean))];
  if (!limpios.length) return {};
  const db = await abrir();
  if (!db) return {};
  return new Promise((resolve) => {
    let tx;
    try {
      tx = db.transaction(ALMACEN, 'readonly');
    } catch {
      resolve({});
      return;
    }
    const s = tx.objectStore(ALMACEN);
    const out = {};
    limpios.forEach((id) => {
      const req = s.get(id);
      req.onsuccess = () => {
        if (req.result) out[id] = req.result;
      };
    });
    tx.oncomplete = () => resolve(out);
    tx.onerror = () => resolve(out);
  });
}

// Todas las referencias guardadas, para poder ver cuales sobran.
export async function todasLasRefs() {
  const db = await abrir();
  if (!db) return [];
  return new Promise((resolve) => {
    let tx;
    try {
      tx = db.transaction(ALMACEN, 'readonly');
    } catch {
      resolve([]);
      return;
    }
    const req = tx.objectStore(ALMACEN).getAllKeys();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

export async function borrarFoto(id) {
  if (!id) return;
  await conAlmacen('readwrite', (s) => {
    s.delete(id);
    return null;
  });
}

// ---- copia de seguridad ---------------------------------------------------
//
// Las fotos no estan en localStorage, asi que storage.exportAll() no las ve.
// Estas dos las meten y las sacan del fichero de copia.

// { id: dataUrl } con TODAS las fotos guardadas. Puede pesar: seis fotos son
// medio mega, asi que la copia se hace solo cuando la pides tu a mano.
export async function exportarFotos() {
  const ids = await todasLasRefs();
  if (!ids.length) return {};
  return leerFotos(ids);
}

// Mete en IndexedDB las fotos de una copia, con sus MISMOS ids: las notas las
// apuntan por id, asi que cambiarlos las dejaria sin imagen.
export async function importarFotos(fotos) {
  const pares = Object.entries(fotos || {});
  if (!pares.length) return 0;
  const ok = await conAlmacen('readwrite', (st) => {
    for (const [id, dataUrl] of pares) if (id && dataUrl) st.put(dataUrl, id);
    return pares.length;
  });
  return ok || 0;
}
