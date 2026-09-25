// Claro u oscuro.
//
// Antes esto era solo una media query de prefers-color-scheme. Funciona en el
// servidor de dev y falla justo donde mas se nota: al abrir el HTML de un solo
// fichero, Chrome en Windows no le pasa el modo oscuro del sistema a la pagina
// y la app salia siempre en claro, sin manera de cambiarlo.
//
// Ahora el tema lo decide JS y lo escribe en <html data-theme>. "auto" sigue
// mirando el sistema -y le hace caso en caliente si lo cambias-, pero ya se
// puede forzar a mano. El CSS solo necesita entonces un selector, sin duplicar
// las variables en dos sitios.
//
// El arranque sin parpadeo esta en index.html: un script diminuto que pone el
// atributo antes de que pinte nada. Este modulo y aquel leen la MISMA clave.

import { storage } from './storage.js';

export const TEMAS = ['auto', 'claro', 'oscuro'];

const CLAVE = 'ui:tema';

export function getTema() {
  const t = storage.get(CLAVE, 'auto');
  return TEMAS.includes(t) ? t : 'auto';
}

// El que se acaba pintando: "auto" pregunta al sistema.
export function temaEfectivo(tema = getTema()) {
  if (tema === 'oscuro') return 'dark';
  if (tema === 'claro') return 'light';
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function aplicarTema(tema = getTema()) {
  const modo = temaEfectivo(tema);
  document.documentElement.dataset.theme = modo;
  // La barra del navegador en el movil, del color de la app.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', modo === 'dark' ? '#0f1117' : '#f5f6f8');
  return modo;
}

export function setTema(tema) {
  const limpio = TEMAS.includes(tema) ? tema : 'auto';
  storage.set(CLAVE, limpio);
  aplicarTema(limpio);
  return limpio;
}

// Si estas en "auto" y cambias el modo del sistema, la app cambia sola.
export function escucharSistema() {
  let mq;
  try {
    mq = window.matchMedia('(prefers-color-scheme: dark)');
  } catch {
    return () => {};
  }
  const alCambiar = () => { if (getTema() === 'auto') aplicarTema('auto'); };
  // Safari viejo no tiene addEventListener en MediaQueryList.
  if (mq.addEventListener) mq.addEventListener('change', alCambiar);
  else if (mq.addListener) mq.addListener(alCambiar);
  return () => {
    if (mq.removeEventListener) mq.removeEventListener('change', alCambiar);
    else if (mq.removeListener) mq.removeListener(alCambiar);
  };
}
