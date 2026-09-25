// Como se junta lo de ESTE aparato con lo del servidor, clave por clave.
//
// Antes se reemplazaba la clave entera: o la tuya o la del servidor. Y en esta
// app una clave no es un dato, es un cajon: `vocab:progress` son las 169
// palabras juntas, `notebook:notes` son todos los apuntes, `diary:entries` todo
// el diario. Asi que bastaba con practicar en el movil y luego tocar cualquier
// cosa en el ordenador para que el cajon del ordenador pisara el del movil y
// desapareciera lo del movil entero, sin decir nada:
//
//   1. el ordenador tiene {A, B}; en el movil practicas C y sube: servidor {A, C}
//   2. en el ordenador tocas algo -> la clave queda "sucia" -> intenta subir
//   3. 409, el servidor va por delante -> se trae lo suyo PERO se salta las
//      claves sucias -> el ordenador conserva {A, B} -> vuelve a subir
//   4. servidor {A, B}. C ya no existe.
//
// Ahora los cajones gordos se juntan por dentro: palabra a palabra, nota a
// nota. Lo demas sigue igual, que para un numero o un ajuste reemplazar esta
// bien.
//
// Todas las funciones de aqui cumplen tres cosas, y son las que hacen que dos
// aparatos acaben en el mismo sitio en vez de pasarse el cambio sin parar:
//
//   · juntar(x, x) devuelve x. Sin esto, cada sincronizacion volveria a sumar
//     los mismos aciertos y el progreso se inflaria solo.
//   · juntar(a, b) y juntar(b, a) dan lo mismo.
//   · el resultado sale siempre con las claves en el mismo orden, porque quien
//     compara para saber si hay que volver a subir compara el texto JSON.
//
// Lo que NO hace: recordar lo que has borrado. Si borras una nota en el movil
// y el ordenador todavia la tiene, al juntarse vuelve. Preferible a la
// alternativa: hoy el caso malo es perder ocho apuntes de golpe, y lo peor que
// puede pasar con esto es que reaparezca uno y lo borres otra vez.

// Cuando hay que quedarse con UNO de los dos y no hay nada que lo decida, se
// elige siempre igual mirando el texto. Parece una tonteria y no lo es: sin
// esto, juntar(a, b) y juntar(b, a) dan objetos distintos.
function elMismoSiempre(a, b) {
  return JSON.stringify(a) <= JSON.stringify(b) ? a : b;
}

// Las claves, siempre en el mismo orden.
function ordenado(obj) {
  const out = {};
  for (const k of Object.keys(obj).sort()) out[k] = obj[k];
  return out;
}

// Numeros que solo suben: el numero de sesiones, la XP total, el record.
const mayor = (a, b) => Math.max(Number(a) || 0, Number(b) || 0);

// Un contador de repaso (palabra, concepto, sustantivo del juego de generos).
// Se queda con lo mas alto de cada cosa: nunca se pierde practica, y repetir la
// fusion no cambia nada.
function contadorMax(a, b) {
  if (!a || typeof a !== 'object') return b;
  if (!b || typeof b !== 'object') return a;
  // Lo que no es un contador -el color, marcas sueltas- sale del apunte mas
  // reciente; si empatan, del que diga elMismoSiempre.
  const ha = a.lastSeen || 0;
  const hb = b.lastSeen || 0;
  const base = ha > hb ? a : hb > ha ? b : elMismoSiempre(a, b);
  const r = {
    ...base,
    correct: mayor(a.correct, b.correct),
    wrong: mayor(a.wrong, b.wrong),
    strength: mayor(a.strength, b.strength),
    lastSeen: Math.max(ha, hb),
    due: mayor(a.due, b.due)
  };
  if (a.streak != null || b.streak != null) r.streak = mayor(a.streak, b.streak);
  const color = a.color || b.color;
  if (color) r.color = color;
  return ordenado(r);
}

// Los apartados de Kommunikation llevan sus propios contadores.
function contadorKomm(a, b) {
  const r = contadorMax(a, b);
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return r;
  return ordenado({
    ...r,
    aciertos: mayor(a.aciertos, b.aciertos),
    preguntas: mayor(a.preguntas, b.preguntas),
    veces: mayor(a.veces, b.veces),
    at: mayor(a.at, b.at)
  });
}

// Dos diccionarios { clave: valor }, juntados clave a clave con la funcion que
// se le pase para las que estan en los dos.
function porClave(a, b, juntar) {
  const out = { ...(b || {}) };
  for (const [k, v] of Object.entries(a || {})) {
    out[k] = k in out ? juntar(v, out[k]) : v;
  }
  // Tambien se ordena por dentro de cada valor, no solo la lista de claves.
  // Las que solo estaban en un lado pasan tal cual y conservan SU orden; a la
  // siguiente fusion ya pasan por juntar(), que las ordena, y entonces el
  // texto JSON cambiaba sin que hubiera cambiado ningun dato: dos aparatos se
  // pasaban el mismo cajon el uno al otro para siempre.
  for (const k of Object.keys(out)) {
    const v = out[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) out[k] = ordenado(v);
  }
  return ordenado(out);
}

// Dos listas de cosas con id. La que se quede es la que se toco mas tarde.
function porId(a, b, fecha = (x) => x?.updatedAt || x?.createdAt || 0) {
  const out = new Map();
  for (const x of Array.isArray(b) ? b : []) if (x?.id != null) out.set(x.id, x);
  for (const x of Array.isArray(a) ? a : []) {
    if (x?.id == null) continue;
    const y = out.get(x.id);
    if (!y) { out.set(x.id, x); continue; }
    const fx = fecha(x);
    const fy = fecha(y);
    out.set(x.id, fx > fy ? x : fy > fx ? y : elMismoSiempre(x, y));
  }
  return [...out.values()].sort((x, y) => String(x.id).localeCompare(String(y.id)));
}

// Las tandas de la tabla de records no se editan nunca: basta con juntarlas.
const porIdSinFecha = (a, b) => porId(a, b, () => 0);

// La racha de dias. El historial manda -es lo que de verdad paso- y el resto
// son cuentas sacadas de el.
function juntarRacha(a, b) {
  if (!a || typeof a !== 'object') return b;
  if (!b || typeof b !== 'object') return a;
  return ordenado({
    ...elMismoSiempre(a, b),
    history: porClave(a.history, b.history, mayor),
    current: mayor(a.current, b.current),
    longest: mayor(a.longest, b.longest),
    totalXp: mayor(a.totalXp, b.totalXp),
    // Congeladores: el mas bajo. Son lo unico que se GASTA, y quedarse con el
    // numero alto seria regalarlos cada vez que sincronizas.
    freezes: Math.min(a.freezes ?? 2, b.freezes ?? 2),
    lastDay: (a.lastDay || '') >= (b.lastDay || '') ? a.lastDay : b.lastDay
  });
}

// El progreso de gramatica: tres diccionarios y un contador, dentro de la
// misma clave.
function juntarProgreso(a, b) {
  if (!a || typeof a !== 'object') return b;
  if (!b || typeof b !== 'object') return a;
  return ordenado({
    ...elMismoSiempre(a, b),
    concepts: porClave(a.concepts, b.concepts, contadorMax),
    seenItems: porClave(a.seenItems, b.seenItems, mayor),
    kommPracticed: porClave(a.kommPracticed, b.kommPracticed, contadorKomm),
    sessions: mayor(a.sessions, b.sessions)
  });
}

// `mio` es lo de este aparato y `suyo` lo del servidor.
export const FUSIONES = {
  'vocab:progress': (mio, suyo) => porClave(mio, suyo, contadorMax),
  'vocab:gender': (mio, suyo) => porClave(mio, suyo, contadorMax),
  progress: juntarProgreso,
  streak: juntarRacha,
  'notebook:notes': porId,
  'diary:entries': porId,
  leaderboard: porIdSinFecha,
  'vocab:decks': porId,
  guardados: (mio, suyo) => porClave(mio, suyo, elMismoSiempre),
  'lieder:notas': (mio, suyo) => porClave(mio, suyo, elMismoSiempre)
};

// Junta el valor de una clave. Si esa clave no tiene forma de juntarse,
// devuelve undefined y quien llama decide (reemplazar o quedarse con lo suyo).
export function fusionarClave(clave, mio, suyo) {
  const juntar = FUSIONES[clave];
  if (!juntar) return undefined;
  if (mio == null) return suyo;
  if (suyo == null) return mio;
  return juntar(mio, suyo);
}
