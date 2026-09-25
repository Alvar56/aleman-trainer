import { storage } from './storage.js';
import { getLang, esOtroIdioma } from './i18n.js';

// Lo que guardas de la IA para volver a ello: explicaciones de gramática y
// conversaciones de Kommunikation.
//
// Hasta ahora solo se podían guardar dos cosas: los mazos de vocabulario (en
// vocab.js) y las canciones (en lieder.js). Una explicación buena de "wenn vs
// als" o una conversación de la panadería se perdían en cuanto preguntabas
// otra cosa, aunque hubieran costado un minuto de IA.
//
// Van las dos en el mismo almacén porque se guardan igual y se listan igual;
// lo único que cambia es qué se pinta al abrirlas.

const CLAVE = 'guardados';
const LIMITE = 60; // por tipo: más que eso no se busca, se acumula

function todo() {
  return storage.get(CLAVE, {});
}

// tipo: 'gramatica' | 'konversation'
export function guardados(tipo) {
  const l = todo()[tipo];
  return Array.isArray(l) ? l : [];
}

export function estaGuardado(tipo, id) {
  return guardados(tipo).some((x) => x.id === id);
}

export function getGuardado(tipo, id) {
  return guardados(tipo).find((x) => x.id === id) || null;
}

// Guarda o quita, y devuelve si ha quedado guardado.
export function alternarGuardado(tipo, item) {
  if (!item?.id) return false;
  let quedaGuardado = false;
  storage.update(CLAVE, {}, (p) => {
    const lista = Array.isArray(p[tipo]) ? p[tipo] : [];
    const i = lista.findIndex((x) => x.id === item.id);
    if (i >= 0) {
      p[tipo] = lista.filter((x) => x.id !== item.id);
    } else {
      // Se sella el idioma en el que lo genero la IA. Si luego cambias la
      // app de idioma, lo guardado sigue en el de antes: sin esto te lo
      // enseñaba en castellano con la app en ingles y sin decir nada.
      p[tipo] = [{ ...item, lang: item.lang || getLang(), savedAt: Date.now() }, ...lista].slice(0, LIMITE);
      quedaGuardado = true;
    }
    return p;
  });
  return quedaGuardado;
}

export function borrarGuardado(tipo, id) {
  storage.update(CLAVE, {}, (p) => {
    p[tipo] = guardados(tipo).filter((x) => x.id !== id);
    return p;
  });
}

export function otroIdioma(item) {
  return esOtroIdioma(item?.lang);
}

// Un id estable a partir del texto: así preguntar dos veces lo mismo no crea
// dos entradas, y al volver a preguntarlo la estrella ya sale marcada.
export function idDe(texto) {
  return String(texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 70);
}
