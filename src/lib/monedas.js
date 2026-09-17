// Monedas: lo que ganas ejercicio a ejercicio y con lo que compras las cosas
// del zorro.
//
// Se cobra por ejercicio, no por sesión: así se nota al momento y no hay que
// terminar una tanda entera para ver algo.

import { storage } from './storage.js';

const KEY = 'monedas';

// Quien quiera enterarse de que ha cambiado el saldo se apunta aqui. Lo usa
// el monedero de arriba a la derecha para animarse solo cuando toca.
const oyentes = new Set();

export function suscribir(fn) {
  oyentes.add(fn);
  return () => oyentes.delete(fn);
}

function avisar(cuanto, total) {
  for (const fn of oyentes) {
    try {
      fn({ cuanto, saldo: total });
    } catch {
      /* que un oyente roto no corte a los demas */
    }
  }
}

export function saldo() {
  const v = storage.get(KEY, 0);
  return Number.isFinite(Number(v)) ? Math.max(0, Math.round(Number(v))) : 0;
}

export function ganar(n) {
  const cuanto = Math.max(0, Math.round(Number(n) || 0));
  if (!cuanto) return saldo();
  const next = saldo() + cuanto;
  storage.set(KEY, next);
  avisar(cuanto, next);
  return next;
}

// Devuelve true si había suficiente. Nunca deja el saldo en negativo.
export function gastar(n) {
  const precio = Math.max(0, Math.round(Number(n) || 0));
  const s = saldo();
  if (s < precio) return false;
  storage.set(KEY, s - precio);
  avisar(-precio, s - precio);
  return true;
}

// UN ejercicio acertado = UNA moneda. En todos los minijuegos, de gramática y
// de vocabulario, y sin bonos por dificultad ni por racha.
//
// Antes iba de 5 a 10 según el tipo y la racha, y salía disparado: una tanda
// de quince clavadas daban más de cien monedas, o sea que una tarde de test te
// compraba media tienda y lo demás sobraba. Los minijuegos se repiten sin
// límite, así que tienen que pagar poco; lo que paga de verdad es lo que
// cuesta hacer: escribir, el examen, el diario.
export const MONEDAS_EJERCICIO = 1;

// Lo que pagan las cosas que no son un ejercicio suelto. La idea es que el
// premio vaya con el esfuerzo: escribirle una frase correcta a Felix vale como
// acertar un ejercicio, y un texto entero o una parte del examen valen lo que
// una tanda de ejercicios, porque cuestan lo mismo.
//
// Los dos del examen se pagan EN PROPORCION a lo que hayas acertado, no por
// llegar al final: terminarlo a boleo no da nada.
export const MONEDAS_FELIX = 5;
export const MONEDAS_EXAMEN = 30;
export const MONEDAS_TAGEBUCH = 25;
export const MONEDAS_NOTIZBUCH = 15;

// Con pistas la palabra te la han dado medio hecha: con las tres, no paga.
export function monedasConPistas(pistas = 0) {
  return pistas >= 3 ? 0 : MONEDAS_EJERCICIO;
}

// De donde sale el premio de un ejercicio. Se sigue devolviendo separado en
// dos porque el resumen lo ensena asi, pero el bono de racha ya no existe:
// con un ejercicio pagando 1, cualquier bono se comia el sueldo.
//
//   fallar     0   <- se cobra acertar, no participar
//   acertar    1
export function desglose({ correcto }) {
  return correcto ? { base: MONEDAS_EJERCICIO, racha: 0 } : { base: 0, racha: 0 };
}

export function monedasPorEjercicio(opciones) {
  const d = desglose(opciones);
  return d.base + d.racha;
}

// Para los juegos que no van ejercicio a ejercicio: se paga al terminar, con
// la misma cuenta, para que salga lo mismo que si se hubiera ido cobrando.
export function monedasPorTanda({ aciertos }) {
  return Math.max(0, aciertos) * MONEDAS_EJERCICIO;
}

// Cosas que solo pagan una vez al día. El Tagebuch y el Notizbuch entran aquí:
// escribir diez entradas de carrerilla no vale más que escribir una en
// condiciones, y si no, lo que sale a cuenta es picar texto.
const DIA = 'monedas:dia';

function hoy(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate()
  ).padStart(2, '0')}`;
}

// Devuelve lo que ha pagado: 0 si hoy ya tocaba.
export function cobrarUnaVezAlDia(clave, cuanto) {
  const dias = storage.get(DIA, {});
  if (dias[clave] === hoy()) return 0;
  storage.set(DIA, { ...dias, [clave]: hoy() });
  ganar(cuanto);
  return cuanto;
}

import { playAudio } from './audio.js';

// Cobra un ejercicio suelto. La racha la saca de los resultados que ya llevas,
// así cada juego solo tiene que decir si se ha acertado y de qué tipo era.
// Hay que llamarla ANTES de meter el resultado nuevo en la lista.
// Los dos primeros argumentos sobran desde que todo paga igual, pero se
// mantienen: los llaman ocho juegos y cambiar la firma en todos para no pasar
// nada solo añade ruido.
export function cobrar(resultados, correcto) {
  playAudio(correcto);
  const premio = monedasPorEjercicio({ correcto });
  if (premio > 0) ganar(premio);
  return premio; // lo que ha pagado ESTE ejercicio, para sumarlo en el resumen
}

