// Trabajos de IA que viven fuera de los componentes.
//
// Antes cada pantalla se guardaba la respuesta en su propio useState: al
// cambiar de sección React desmontaba el componente, el resultado caía en el
// vacío y parecía que la IA se había cortado. Aquí el estado vive en el módulo,
// así que sigue vivo aunque no haya nadie mirando, y la pantalla lo recupera
// tal cual al volver.
//
// Lo terminado se guarda además en el almacenamiento, para que también
// aguante una recarga de la página. Lo que está en marcha no: esa petición
// muere con la pestaña del navegador y fingir lo contrario sería mentir.

import { storage } from './storage.js';

const KEY = 'ai:jobs:v2';
// La v1 del almacen. Ya no la lee nadie, pero se quedo escrita en el disco y
// ocupaba mas que el diario entero. Se tira una sola vez, al arrancar.
//
// Va aqui y no a mano en el navegador porque el estado se sincroniza con un
// fichero: borrarla solo en localStorage la deja en el fichero, y vuelve en la
// siguiente recarga o desde el movil. Asi se borra dondequiera que aparezca.
const KEY_VIEJA = 'ai:jobs';
const VACIO = { status: 'idle', result: null, error: '', meta: null, startedAt: 0, endedAt: 0 };

// Trabajos que NO se guardan en el disco: viven mientras la app esta abierta y
// se van con la recarga.
//
// La explicacion de gramatica es de usar y tirar: la pides, la lees y sigues.
// Guardandola, al volver a la seccion dias despues te encontrabas la pregunta
// escrita en la caja y la explicacion desplegada, como si la acabaras de
// pedir. Si una merece quedarse, se guarda con la estrella, que para eso esta.
const EFIMEROS = ['grammar:ask'];

const jobs = new Map();   // clave -> estado
const subs = new Map();   // clave -> Set(callback)
const runIds = new Map(); // clave -> id de la ejecución en curso

let seq = 0;

function guardados() {
  const g = storage.get(KEY, {});
  return g && typeof g === 'object' ? g : {};
}

if (storage.get(KEY_VIEJA, null) !== null) storage.remove(KEY_VIEJA);

// Al arrancar, recupera lo último que terminó bien en cada clave. Los efimeros
// no: y si quedaron guardados de una version anterior, se tiran.
for (const [clave, val] of Object.entries(guardados())) {
  if (EFIMEROS.includes(clave)) {
    storage.update(KEY, {}, (p) => { delete p[clave]; return p; });
    continue;
  }
  if (val?.result) {
    jobs.set(clave, {
      ...VACIO,
      status: 'done',
      result: val.result,
      meta: val.meta ?? null,
      endedAt: val.endedAt || 0
    });
  }
}

function persistir(clave, estado) {
  if (EFIMEROS.includes(clave)) return;
  const g = guardados();
  if (estado.status === 'done' && estado.result) {
    g[clave] = { result: estado.result, meta: estado.meta, endedAt: estado.endedAt };
  } else {
    delete g[clave];
  }
  storage.set(KEY, g);
}

// Para quien quiera enterarse de CUALQUIER trabajo, sin saber la clave: lo usa
// la lista del cuaderno para marcar en qué nota se está analizando una foto.
const subsTodos = new Set();

export function subscribeAll(fn) {
  subsTodos.add(fn);
  return () => subsTodos.delete(fn);
}

function emitir(clave) {
  const estado = getJob(clave);
  for (const fn of subs.get(clave) || []) fn(estado);
  for (const fn of subsTodos) fn(clave, estado);
}

function fijar(clave, parche, { persiste = true } = {}) {
  const estado = { ...getJob(clave), ...parche };
  jobs.set(clave, estado);
  if (persiste) persistir(clave, estado);
  emitir(clave);
}

export function getJob(clave) {
  return jobs.get(clave) || VACIO;
}

export function subscribe(clave, fn) {
  if (!subs.has(clave)) subs.set(clave, new Set());
  subs.get(clave).add(fn);
  return () => subs.get(clave)?.delete(fn);
}

// Lanza el trabajo. Si ya había uno en marcha con esa clave, el nuevo manda:
// el viejo sigue corriendo pero su resultado se descarta al volver.
export async function runJob(clave, fn, meta = null) {
  const id = ++seq;
  runIds.set(clave, id);
  fijar(clave, { status: 'running', error: '', result: null, meta, startedAt: Date.now(), endedAt: 0 });
  try {
    const result = await fn();
    if (runIds.get(clave) !== id) return null; // llegó tarde, ya hay otro
    fijar(clave, { status: 'done', result, error: '', endedAt: Date.now() });
    return result;
  } catch (e) {
    if (runIds.get(clave) !== id) return null;
    fijar(clave, { status: 'error', error: e.message || String(e), result: null, endedAt: Date.now() });
    return null;
  }
}

// Como runJob, pero si ya hay uno EN MARCHA con esa clave no lanza otro: se
// engancha al que corre. Es lo que quieres cuando se vuelve a pedir lo mismo
// que ya se está calculando — arrancar un segundo `claude` cuesta lo mismo que
// el primero, tarda igual y tira a la basura el trabajo que ya iba por la
// mitad. runJob sigue estando para cuando lo nuevo SÍ debe mandar (refrescar
// noticias, rehacer un examen…).
export function ensureJob(clave, fn, meta = null) {
  if (getJob(clave).status === 'running') return null;
  return runJob(clave, fn, meta);
}

export function clearJob(clave) {
  runIds.delete(clave);
  jobs.set(clave, { ...VACIO });
  persistir(clave, VACIO);
  emitir(clave);
}

// Deja un resultado ya calculado (p. ej. al abrir algo guardado) como si
// lo acabara de traer la IA.
export function setJobResult(clave, result, meta = null) {
  runIds.delete(clave);
  fijar(clave, { status: 'done', result, error: '', meta, endedAt: Date.now() });
}

export function runningJobs() {
  return [...jobs.entries()].filter(([, v]) => v.status === 'running').map(([k]) => k);
}
