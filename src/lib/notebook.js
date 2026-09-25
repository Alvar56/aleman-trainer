// Cuaderno de clase: cada entrada guarda los apuntes en bruto de una clase,
// su versión "a limpio" (generada por IA) y una tanda de ejercicios de repaso.
// Todo en localStorage; al migrar a web pasará por la misma capa storage.

import { storage } from './storage.js';
import { guardarFoto, borrarFoto, todasLasRefs } from './fotos.js';
import { resolveLektionId, DEFAULT_LEKTION_ID } from './kursbuch/index.js';

const KEY = 'notebook:notes';

// Las notas antiguas guardaban ids como 'l1'; ahora son 'a21-l1'.
function all() {
  return storage.get(KEY, []).map((n) => ({ ...n, lektionId: resolveLektionId(n.lektionId) }));
}

export function listNotes() {
  return [...all()].sort(
    (a, b) => String(b.date || '').localeCompare(String(a.date || '')) || b.createdAt - a.createdAt
  );
}

export function getNote(id) {
  return all().find((n) => n.id === id) || null;
}

export function notesForLektion(lektionId) {
  const wanted = resolveLektionId(lektionId);
  return listNotes().filter((n) => n.lektionId === wanted);
}

export function createNote(patch = {}) {
  const now = Date.now();
  const note = {
    id: `n-${now}-${Math.random().toString(36).slice(2, 6)}`,
    createdAt: now,
    updatedAt: now,
    date: patch.date || new Date().toISOString().slice(0, 10),
    lektionId: resolveLektionId(patch.lektionId),
    title: patch.title || '',
    raw: '',
    clean: '',
    cleanAt: null,
    items: [],
    itemsAt: null
  };
  storage.update(KEY, [], (list) => [note, ...list]);
  return note;
}

export function updateNote(id, patch) {
  let updated = null;
  storage.update(KEY, [], (list) =>
    list.map((n) => {
      if (n.id !== id) return n;
      updated = { ...n, ...patch, updatedAt: Date.now() };
      return updated;
    })
  );
  return updated;
}

// Las fotos resueltas de una nota, de la mas nueva a la mas vieja. Vive aqui
// y no en la pantalla porque la usan dos sitios: la pantalla para pintarlas y
// el bloque de la foto para apilar la recien resuelta sobre las que ya habia.
//
// Antes se guardaba UNA sola foto por nota. Las notas de entonces traen ese
// campo suelto y se les hace sitio al final de la lista, para que lo que ya
// tenias siga apareciendo en vez de desaparecer sin avisar.
export function fotosDeNota(note, modo) {
  if (!note) return [];
  const campo = modo === 'aufgabe' ? 'fotoAufgaben' : 'fotoBilder';
  const viejo = modo === 'aufgabe' ? note.fotoAufgabe : note.fotoBild;
  const suelto = note.fotoAnalyse?.modo === modo ? note.fotoAnalyse : null;
  return [...(note[campo] || []), ...(viejo ? [viejo] : []), ...(suelto ? [suelto] : [])];
}

export function deleteNote(id) {
  // Primero las fotos: despues de quitar la nota ya no hay de donde sacar sus
  // referencias y se quedarian en IndexedDB para siempre.
  borrarFotosDeNota(getNote(id));
  storage.update(KEY, [], (list) => list.filter((n) => n.id !== id));
}

export function notebookStats() {
  const list = all();
  return {
    count: list.length,
    withClean: list.filter((n) => n.clean).length,
    withItems: list.filter((n) => n.items && n.items.length).length
  };
}

// Los ejercicios de verdad que has fotografiado del libro, de la nota más
// reciente a la más antigua. Se usan como MODELO para que la IA genere cosas
// del mismo estilo que hacéis en clase, en vez de tests genéricos.
//
// Sale de lo que ya guarda el Notizbuch al resolver una foto: la instrucción
// impresa, el enunciado del ítem y su respuesta.
export function ejerciciosDeClase({ max = 8 } = {}) {
  const out = [];
  for (const nota of listNotes()) {
    // TODAS las fotos de la nota, no solo `fotoAufgabe`. Ese campo es el de
    // cuando se guardaba una sola foto por nota; desde que se apilan, las que
    // resuelves van a `fotoAufgaben` y este bloque no las veia. Resultado: la
    // clase mas reciente, que es justo la que mejor modelo da, no llegaba a la
    // IA. fotosDeNota junta las dos formas.
    for (const a of fotosDeNota(nota, 'aufgabe')) {
      const bloques = a.bloecke?.length ? a.bloecke : [{ anweisung: '', aufgaben: a.aufgaben || [] }];
      for (const b of bloques) {
        for (const it of b.aufgaben || []) {
          if (!it.frage || !it.antwort) continue;
          out.push({ anweisung: b.anweisung || '', frage: it.frage, antwort: it.antwort });
          if (out.length >= max) return out;
        }
      }
    }
  }
  return out;
}


// --- Fotos: de dentro de la nota a IndexedDB --------------------------------
//
// Los cinco sitios donde puede haber una foto. Los tres ultimos son de cuando
// se guardaba UNA por nota; siguen existiendo en las notas de entonces.
const CAMPOS_FOTO = ['fotoBilder', 'fotoAufgaben'];
const CAMPOS_FOTO_SUELTA = ['fotoBild', 'fotoAufgabe', 'fotoAnalyse'];

function esImagenIncrustada(x) {
  return typeof x === 'string' && x.startsWith('data:');
}

// Mueve a IndexedDB las imagenes que todavia viajan dentro de la nota y las
// deja apuntadas con `thumbRef`.
//
// Es idempotente: lo ya migrado no tiene `thumb`, asi que en los arranques
// siguientes no toca nada ni escribe nada. Y si IndexedDB no esta disponible,
// guardarFoto devuelve null y la imagen se queda donde estaba: peor, pero
// nadie pierde una foto por esto.
// Una sola a la vez. Sin esto, las dos pasadas que hace React en desarrollo
// (StrictMode monta, limpia y vuelve a montar) leian las mismas notas todavia
// sin migrar y guardaban copia de cada foto: la segunda escritura ganaba y la
// primera tanda se quedaba en IndexedDB sin que nada la apuntara.
let migrando = null;

export function migrarFotos() {
  if (!migrando) migrando = hacerMigracion().finally(() => { migrando = null; });
  return migrando;
}

async function hacerMigracion() {
  const notas = storage.get(KEY, []);
  let movidas = 0;

  for (const nota of notas) {
    let tocada = false;

    const mover = async (a) => {
      if (!a || !esImagenIncrustada(a.thumb) || a.thumbRef) return a;
      const ref = await guardarFoto(a.thumb);
      if (!ref) return a;
      movidas += 1;
      tocada = true;
      const { thumb, ...resto } = a;
      return { ...resto, thumbRef: ref };
    };

    for (const campo of CAMPOS_FOTO) {
      if (!Array.isArray(nota[campo])) continue;
      const lista = [];
      for (const a of nota[campo]) lista.push(await mover(a));
      nota[campo] = lista;
    }
    for (const campo of CAMPOS_FOTO_SUELTA) {
      if (!nota[campo]) continue;
      nota[campo] = await mover(nota[campo]);
    }

    if (tocada) {
      // Se escribe la lista entera de una vez al final, no nota a nota: cada
      // storage.set dispara un envio y no hacen falta veinte.
      storage.set(KEY, notas);
    }
  }

  await limpiarHuerfanas();
  return movidas;
}

// Fotos en IndexedDB que ya no apunta ninguna nota. Salen de haber borrado una
// nota antes de que existiera borrarFotosDeNota, y de la migracion duplicada
// de arriba. Ocupan sitio y no las ve nadie.
export async function limpiarHuerfanas() {
  const guardadas = await todasLasRefs();
  if (!guardadas.length) return 0;
  const enUso = new Set();
  storage.get(KEY, []).forEach((n) => refsDeNota(n).forEach((r) => enUso.add(r)));
  const sobran = guardadas.filter((r) => !enUso.has(r));
  for (const r of sobran) await borrarFoto(r);
  return sobran.length;
}

// Las referencias de una nota, para pedirlas todas juntas.
export function refsDeNota(note) {
  if (!note) return [];
  const out = [];
  const meter = (a) => { if (a?.thumbRef) out.push(a.thumbRef); };
  CAMPOS_FOTO.forEach((c) => (note[c] || []).forEach(meter));
  CAMPOS_FOTO_SUELTA.forEach((c) => meter(note[c]));
  return out;
}

// Al borrar una nota se llevan por delante sus fotos: si no, se quedan en
// IndexedDB para siempre sin que nada las apunte.
export function borrarFotosDeNota(note) {
  refsDeNota(note).forEach((ref) => borrarFoto(ref));
}
