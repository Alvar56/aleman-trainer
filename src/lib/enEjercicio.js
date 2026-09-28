// ¿Hay un ejercicio en marcha ahora mismo?
//
// App.jsx se recarga sola cuando la sincronización trae datos nuevos del
// servidor, y para no hacerlo encima de un ejercicio mira si la vista actual
// es una de las de practicar (session, vsession, exam…).
//
// Pero en Comunicación la práctica no es una vista propia: pasa DENTRO de
// `kommlektion`, en un estado del componente. Así que la lista no la veía y la
// recarga entraba igual: te ibas a otra ventana, volvías, y la tanda a medias
// había desaparecido y estabas otra vez en la teoría.
//
// Un contador y no un booleano porque el aviso de fin de partida puede montar
// otro antes de que el anterior se desmonte del todo, y con un booleano el
// desmontaje del primero apagaría la marca del segundo.

let abiertos = 0;
const oyentes = new Set();

export function hayEjercicio() {
  return abiertos > 0;
}

// Para llamar desde un useEffect: entra al montar y sale al desmontar.
//
//   useEffect(() => marcarEjercicio(), []);
export function marcarEjercicio() {
  abiertos += 1;
  avisar();
  let cerrado = false;
  return () => {
    if (cerrado) return;
    cerrado = true;
    abiertos = Math.max(0, abiertos - 1);
    avisar();
  };
}

export function alCambiarEjercicio(fn) {
  oyentes.add(fn);
  return () => oyentes.delete(fn);
}

function avisar() {
  for (const fn of oyentes) {
    try { fn(hayEjercicio()); } catch { /* un oyente roto no para a los demás */ }
  }
}
