// En que version se esta ejecutando la app. Las dos banderas las pone Vite al
// compilar (ver `define` en vite.config.js), asi que lo que no se use se queda
// fuera del bundle en vez de viajar como codigo muerto.

// El HTML de un solo fichero, el que se abre con doble clic. Ahi no hay
// servidor: ni sincronizacion entre aparatos ni puente de IA local.
export const PORTABLE = typeof __PORTABLE__ !== 'undefined' && __PORTABLE__;

// Compilada sin nada de IA. Fuera el chat con Felix, las noticias, las
// canciones, el examen, los generadores de vocabulario y gramatica, la
// correccion del diario, pasar los apuntes a limpio, leer fotos del libro y
// todos los ajustes de IA.
//
// No es "la IA apagada": es que no esta. Apagada dejaba media app llena de
// botones que al pulsarlos decian que no habia IA, y sesiones enteras
// (noticias, canciones, examen) que no eran otra cosa.
export const SIN_IA = typeof __SIN_IA__ !== 'undefined' && __SIN_IA__;

// Cuándo se compiló este fichero. Se enseña en Ajustes porque el service
// worker puede estar sirviendo un build anterior, y con el HTML portable es
// fácil abrir sin querer una copia vieja de la carpeta de descargas: sin una
// fecha a la vista no hay forma de saber qué versión estás mirando.
export const BUILD = typeof __BUILD__ !== 'undefined' ? __BUILD__ : '';
