import React, { useEffect, useMemo, useState } from 'react';
import { colorDe } from '../lib/fuchs.js';

// Zorro en pixel art, 28x30, sentado y con cola. Se dibuja por formas en vez
// de con cadenas de texto: contar píxeles a mano es donde salen los errores.
// El contorno negro se calcula solo al final, rodeando la silueta.
//
//   f pelo   d pelo en sombra   h pelo iluminado   l crema (hocico, pecho, cola)
//   m sombra del crema   w blanco del ojo   p pupila   s brillo   n nariz
//   r rubor   t boca abierta   o contorno

const W = 28;
const H = 30;
const ALTO_CABEZA = 19; // sin cuerpo, el dibujo se recorta aquí
// Aire alrededor del bicho para que las partículas tengan dónde flotar sin
// que las recorte el borde del SVG.
const MARGEN = 5;
// Cuanto se agranda el objeto de la mano respecto a la rejilla del zorro.
const ESCALA_OBJETO = 1.3;

function lienzo() {
  return Array.from({ length: H }, () => Array(W).fill('.'));
}
function px(g, x, y, k) {
  if (y >= 0 && y < H && x >= 0 && x < W) g[y][x] = k;
}
function fila(g, y, x0, x1, k) {
  for (let x = x0; x <= x1; x++) px(g, x, y, k);
}
function bloque(g, y0, y1, x0, x1, k) {
  for (let y = y0; y <= y1; y++) fila(g, y, x0, x1, k);
}
// Pinta a la izquierda y su reflejo a la derecha de una vez: así la cara sale
// simétrica sin escribir dos veces las mismas coordenadas.
function espejo(g, y, x0, x1, k) {
  fila(g, y, x0, x1, k);
  fila(g, y, W - 1 - x1, W - 1 - x0, k);
}
function espejoPx(g, x, y, k) {
  px(g, x, y, k);
  px(g, W - 1 - x, y, k);
}

// ---------- la cola ----------
// Va en su propia rejilla para poder moverla aparte del cuerpo. Cada bicho
// lleva la suya, y a los que no tienen (búho, rana, pato) se les deja la
// rejilla vacía: el meneo simplemente no se ve.
function colaZorro(g) {
  // curva: ancha abajo, subiendo por la izquierda
  bloque(g, 24, 27, 2, 9, 'f');
  bloque(g, 21, 23, 1, 8, 'f');
  bloque(g, 18, 20, 1, 7, 'f');
  bloque(g, 15, 17, 2, 7, 'f');
  bloque(g, 13, 14, 3, 7, 'f');
  fila(g, 12, 4, 7, 'f');

  // sombra por dentro de la curva
  bloque(g, 22, 27, 7, 9, 'd');
  bloque(g, 19, 21, 6, 7, 'd');

  // la punta clara, grande y arriba
  bloque(g, 12, 14, 4, 7, 'l');
  bloque(g, 15, 16, 2, 6, 'l');
  fila(g, 17, 2, 4, 'l');
  // el borde irregular entre la punta y el naranja
  px(g, 5, 17, 'm');
  px(g, 3, 18, 'm');
  px(g, 7, 15, 'm');
}

function colaGato(g) {
  // fina y curvada, sin la punta esponjosa
  bloque(g, 24, 27, 3, 6, 'f');
  bloque(g, 20, 23, 2, 5, 'f');
  bloque(g, 16, 19, 2, 4, 'f');
  bloque(g, 13, 15, 3, 5, 'f');
  fila(g, 12, 4, 6, 'f');
  bloque(g, 22, 27, 5, 6, 'd');
  bloque(g, 12, 14, 4, 5, 'l');
}

// Perro: como la del zorro pero más corta y con la punta clara pequeña, que
// si no los dos se confunden de lejos.
function colaPerro(g) {
  bloque(g, 24, 27, 3, 9, 'f');
  bloque(g, 21, 23, 2, 8, 'f');
  bloque(g, 18, 20, 2, 7, 'f');
  bloque(g, 16, 17, 3, 7, 'f');
  bloque(g, 22, 27, 7, 9, 'd');
  bloque(g, 16, 18, 3, 6, 'l');
  px(g, 4, 19, 'm');
}

// Oso: un muñón, casi nada.
function colaOso(g) {
  bloque(g, 24, 27, 5, 8, 'f');
  bloque(g, 25, 27, 5, 6, 'd');
}

// Conejo: la bolita blanca.
function colaConejo(g) {
  bloque(g, 23, 27, 4, 8, 'l');
  fila(g, 22, 5, 7, 'l');
  bloque(g, 25, 27, 4, 5, 'm');
}

// Pato: cuatro plumas que apuntan hacia arriba.
function colaPato(g) {
  bloque(g, 23, 26, 4, 9, 'l');
  bloque(g, 21, 22, 5, 9, 'l');
  fila(g, 20, 7, 9, 'l');
  bloque(g, 24, 26, 4, 6, 'm');
}

const COLAS = {
  zorro: colaZorro,
  gato: colaGato,
  perro: colaPerro,
  oso: colaOso,
  conejo: colaConejo,
  buho: null,
  rana: null,
  pato: colaPato
};

function dibujarCola(especie = 'zorro') {
  const g = lienzo();
  const f = COLAS[especie];
  if (f) f(g);
  return g;
}

// ---------- cabeza ----------
// Todos los bichos son el mismo cráneo con el mismo hocico y otras orejas: es
// lo que hace que la cara siga funcionando (ojos, gestos, complementos) sin
// tener que redibujarla ocho veces.
//
//   detras  → lo que sale por arriba, antes del cráneo (orejas de punta)
//   delante → lo que va encima: orejas caídas, manchas, bigotes

function craneo(g) {
  fila(g, 7, 8, 19, 'f');
  fila(g, 8, 6, 21, 'f');
  bloque(g, 9, 16, 5, 22, 'f');
  fila(g, 17, 6, 21, 'f');
  fila(g, 18, 8, 19, 'f');

  // luz arriba y sombra abajo, a lo ancho las dos
  fila(g, 8, 8, 19, 'h');
  fila(g, 9, 7, 20, 'h');
  fila(g, 17, 7, 20, 'd');
  fila(g, 18, 9, 18, 'd');
}

// Hocico crema: banda ancha por la parte baja de la cara. Sube hasta la
// fila 12 para que la nariz y la boca respiren.
function hocico(g) {
  fila(g, 12, 11, 16, 'l');
  fila(g, 13, 9, 18, 'l');
  bloque(g, 14, 16, 8, 19, 'l');
  fila(g, 17, 9, 18, 'l');
  espejoPx(g, 8, 13, 'm');
  espejoPx(g, 8, 17, 'm');
  fila(g, 18, 11, 16, 'm');
}

function orejasZorro(g) {
  // Orejas grandes y puntiagudas: casi un tercio del bicho.
  espejo(g, 0, 8, 9, 'f');
  espejo(g, 1, 7, 10, 'f');
  espejo(g, 2, 7, 10, 'f');
  espejo(g, 3, 6, 11, 'f');
  espejo(g, 4, 6, 11, 'f');
  espejo(g, 5, 6, 12, 'f');
  espejo(g, 6, 5, 12, 'f');
  espejo(g, 7, 5, 13, 'f');

  // borde oscuro por fuera, como el zorro de verdad
  espejo(g, 0, 8, 9, 'd');
  espejo(g, 1, 7, 8, 'd');
  espejo(g, 2, 7, 7, 'd');
  espejo(g, 3, 6, 7, 'd');
  espejo(g, 4, 6, 6, 'd');
  espejo(g, 5, 6, 6, 'd');

  // hueco claro de la oreja, con la veta naranja de en medio
  espejo(g, 2, 8, 9, 'l');
  espejo(g, 3, 8, 10, 'l');
  espejo(g, 4, 7, 10, 'l');
  espejo(g, 5, 7, 11, 'l');
  espejo(g, 6, 8, 11, 'l');
  espejo(g, 7, 9, 12, 'm');
  espejo(g, 4, 9, 9, 'f');
  espejo(g, 5, 9, 10, 'f');
}

// El gato: orejas más bajas y anchas, sin la punta oscura del zorro.
function orejasGato(g) {
  espejo(g, 2, 7, 9, 'f');
  espejo(g, 3, 6, 10, 'f');
  espejo(g, 4, 6, 11, 'f');
  espejo(g, 5, 5, 12, 'f');
  espejo(g, 6, 5, 12, 'f');
  espejo(g, 7, 5, 13, 'f');
  espejo(g, 3, 8, 9, 'l');
  espejo(g, 4, 7, 10, 'l');
  espejo(g, 5, 7, 11, 'l');
  espejo(g, 6, 8, 11, 'm');
}
function marcasGato(g) {
  // rayas en la frente y bigotes
  espejoPx(g, 10, 7, 'd');
  espejoPx(g, 12, 7, 'd');
  espejoPx(g, 11, 8, 'd');
  espejo(g, 14, 4, 6, 'o');
  espejo(g, 16, 4, 6, 'o');
}

// Perro: orejas caídas por los lados, por delante del cráneo, y la mancha
// clara del morro subiendo por la frente.
function orejasPerro(g) {
  espejo(g, 5, 4, 7, 'f');
  espejo(g, 6, 3, 7, 'f');
  espejo(g, 7, 2, 6, 'f');
  espejo(g, 8, 2, 5, 'f');
  espejo(g, 9, 2, 5, 'f');
  espejo(g, 10, 2, 5, 'f');
  espejo(g, 11, 2, 5, 'f');
  espejo(g, 12, 2, 5, 'f');
  espejo(g, 13, 3, 5, 'f');
  espejo(g, 14, 3, 5, 'f');
  // la oreja es más oscura que la cabeza, o no se despega de ella
  espejo(g, 7, 2, 3, 'd');
  espejo(g, 8, 2, 3, 'd');
  espejo(g, 9, 2, 3, 'd');
  espejo(g, 10, 2, 3, 'd');
  espejo(g, 11, 2, 4, 'd');
  espejo(g, 12, 2, 5, 'd');
  espejo(g, 13, 3, 5, 'd');
  espejo(g, 14, 3, 5, 'd');
}
function marcasPerro(g) {
  fila(g, 8, 12, 15, 'l');
  fila(g, 9, 12, 15, 'l');
  fila(g, 10, 13, 14, 'l');
  fila(g, 11, 13, 14, 'l');
}

// Oso: orejotas redondas en las esquinas de arriba. Anchas y con el hueco en
// tono apagado; con el crema del zorro parecían orejas de zorro pequeñas.
function orejasOso(g) {
  espejo(g, 0, 6, 9, 'f');
  espejo(g, 1, 5, 10, 'f');
  espejo(g, 2, 4, 10, 'f');
  espejo(g, 3, 4, 10, 'f');
  espejo(g, 4, 5, 10, 'f');
  espejo(g, 5, 6, 11, 'f');
  espejo(g, 6, 7, 12, 'f');
  espejo(g, 2, 6, 8, 'm');
  espejo(g, 3, 6, 8, 'm');
}

// Conejo: dos orejas largas y estrechas, tiesas.
function orejasConejo(g) {
  for (let y = 0; y <= 6; y++) espejo(g, y, 8, 10, 'f');
  espejo(g, 7, 8, 11, 'f');
  for (let y = 1; y <= 5; y++) espejo(g, y, 9, 9, 'l');
  espejo(g, 6, 9, 9, 'm');
}

// Búho: penachos en las puntas y el disco pálido de la cara.
function orejasBuho(g) {
  espejo(g, 2, 5, 6, 'f');
  espejo(g, 3, 5, 7, 'f');
  espejo(g, 4, 5, 8, 'f');
  espejo(g, 5, 5, 9, 'f');
  espejo(g, 6, 5, 10, 'f');
  espejo(g, 2, 5, 5, 'd');
  espejo(g, 3, 5, 5, 'd');
}
function marcasBuho(g) {
  bloque(g, 9, 13, 6, 21, 'l');
  bloque(g, 9, 13, 13, 14, 'm');
  espejo(g, 8, 7, 12, 'm');
}

// Rana: sin orejas, pero con dos bultos encima de los ojos y los carrillos
// anchos. Los ojos siguen donde siempre, y al quedar justo debajo del bulto
// se leen como ojos saltones.
function orejasRana(g) {
  espejo(g, 4, 8, 11, 'f');
  espejo(g, 5, 7, 12, 'f');
  espejo(g, 6, 6, 12, 'f');
  espejo(g, 7, 4, 13, 'f');
}
function marcasRana(g) {
  // la cúpula clara del ojo
  espejo(g, 5, 8, 11, 'h');
  espejo(g, 6, 7, 11, 'h');
  espejo(g, 7, 6, 11, 'h');
  espejo(g, 8, 6, 11, 'h');
  espejo(g, 9, 7, 11, 'l');
  // los carrillos, un poco más oscuros
  espejo(g, 8, 4, 5, 'd');
  espejo(g, 9, 4, 6, 'd');
}

// Pato: el mechón de arriba, con su antenita.
function orejasPato(g) {
  fila(g, 5, 11, 16, 'f');
  fila(g, 4, 12, 15, 'f');
  fila(g, 3, 13, 14, 'f');
  px(g, 15, 2, 'f');
  px(g, 16, 1, 'f');
  px(g, 16, 0, 'f');
}

const BICHOS = {
  zorro: { detras: orejasZorro },
  gato: { detras: orejasGato, delante: marcasGato },
  perro: { delante: orejasPerro, marcas: marcasPerro },
  oso: { detras: orejasOso },
  conejo: { detras: orejasConejo },
  buho: { detras: orejasBuho, delante: marcasBuho },
  rana: { detras: orejasRana, delante: marcasRana },
  pato: { detras: orejasPato }
};

export const ESPECIES = Object.keys(BICHOS);

function cabeza(g, especie = 'zorro') {
  const b = BICHOS[especie] || BICHOS.zorro;
  if (b.detras) b.detras(g);
  craneo(g);
  if (b.delante) b.delante(g);
  hocico(g);
  if (b.marcas) b.marcas(g);
}

// Lo que va POR ENCIMA del gesto, porque sustituye a la nariz o a la boca:
// el pico del pato y del búho, y el bocón de la rana.
function rasgos(g, especie) {
  if (especie === 'pato') {
    bloque(g, 13, 15, 10, 17, 'k');
    fila(g, 16, 11, 16, 'j');
    fila(g, 13, 10, 17, 'j');
  } else if (especie === 'buho') {
    fila(g, 12, 13, 14, 'k');
    fila(g, 13, 13, 14, 'k');
    fila(g, 14, 13, 14, 'j');
    fila(g, 15, 13, 14, 'j');
  } else if (especie === 'rana') {
    fila(g, 16, 9, 18, 'o');
    espejoPx(g, 8, 15, 'o');
  }
}

// ---------- cuerpo sentado ----------
// Rechoncho a propósito: un zorro sentado se ensancha hacia abajo, y así
// además hay sitio de sobra para vestirlo.
function cuerpo(g) {
  fila(g, 18, 9, 18, 'f');
  fila(g, 19, 8, 19, 'f');
  bloque(g, 20, 27, 7, 20, 'f');
  fila(g, 28, 7, 20, 'f');

  // sombra del costado
  bloque(g, 20, 28, 19, 20, 'd');
  px(g, 19, 19, 'd');

  // pechera crema en pico, como un babero
  fila(g, 19, 11, 16, 'l');
  bloque(g, 20, 23, 9, 18, 'l');
  bloque(g, 24, 25, 10, 17, 'l');
  fila(g, 26, 12, 15, 'l');
  fila(g, 27, 13, 14, 'm');
  espejoPx(g, 9, 19, 'm');

  // patas delanteras, separadas por un hueco
  bloque(g, 25, 28, 7, 11, 'f');
  bloque(g, 25, 28, 16, 20, 'f');
  espejoPx(g, 13, 27, 'd');
  espejoPx(g, 13, 28, 'd');
  // deditos claros
  bloque(g, 28, 29, 7, 11, 'l');
  bloque(g, 28, 29, 16, 20, 'l');
  px(g, 8, 29, 'm');
  px(g, 19, 29, 'm');
}

// ---------- ojos y boca ----------
// Ojos diminutos, dos cuadraditos blancos y nada más: es lo que le da la cara
// del zorro de la foto. Con ojos grandes parecía otro bicho.
const OJO_X = 9;
// Tres de ancho por dos de alto. Más altos que anchos parecían ranuras
// blancas pegadas encima del pelo, no ojos. Y apoyados en el naranja liso,
// no a caballo de la banda clara de la frente.
function ojosNormales(g) {
  espejo(g, 10, OJO_X, OJO_X + 2, 'w');
  espejo(g, 11, OJO_X, OJO_X + 2, 'w');
  // La pupila: dos píxeles en la esquina de dentro, la que da a la nariz. Es
  // lo que hace que mire a algún sitio en vez de tener dos manchas blancas.
  espejo(g, 10, OJO_X + 2, OJO_X + 2, 'p');
  espejo(g, 11, OJO_X + 2, OJO_X + 2, 'p');
}
function ojosCerrados(g) {
  // Solo la raya. Antes llevaba una punta suelta a cada lado para insinuar el
  // arco, pero a este tamaño no se lee como una curva: son cuatro motas
  // negras flotando junto a los ojos.
  espejo(g, 11, OJO_X, OJO_X + 2, 'o');
}
function ojosGrandes(g) {
  espejo(g, 9, OJO_X, OJO_X + 2, 'w');
  espejo(g, 10, OJO_X, OJO_X + 2, 'w');
  espejo(g, 11, OJO_X, OJO_X + 2, 'w');
  // de par en par: la pupila se encoge y sube, como cuando te sorprendes
  espejo(g, 10, OJO_X + 2, OJO_X + 2, 'p');
}
function ojosCaidos(g) {
  espejo(g, 10, OJO_X, OJO_X + 2, 'o');
  espejo(g, 11, OJO_X, OJO_X + 2, 'w');
  espejo(g, 11, OJO_X + 2, OJO_X + 2, 'p');
}
function ojoEntornado(g, izquierda) {
  const x0 = izquierda ? OJO_X : W - 1 - (OJO_X + 2);
  // Entornado = medio ojo, todo blanco. El párpado negro por encima se leía
  // como un ojo tachado, no como un ojo a medio cerrar.
  bloque(g, 10, 11, x0, x0 + 2, 'f');
  fila(g, 11, x0, x0 + 2, 'w');
  px(g, izquierda ? x0 + 2 : x0, 11, 'p'); // la pupila sigue mirando adentro
}
function ojoGuinando(g, izquierda) {
  const x0 = izquierda ? OJO_X : W - 1 - (OJO_X + 2);
  bloque(g, 10, 11, x0, x0 + 2, 'f');
  fila(g, 11, x0, x0 + 2, 'o');
}

// Naricita de dos píxeles. Con cuatro de ancho parecía una barra negra
// cruzándole la cara.
function nariz(g) {
  fila(g, 13, 13, 14, 'n');
}
// Sonrisa de arco con las puntas hacia arriba, un poco por debajo de la nariz.
// Es lo que hace que el zorro se vea simpático estando quieto.
// Todas bajan una fila respecto a la nariz: pegadas se leían como una sola
// mancha con el hocico y no se distinguía dónde acababa una y empezaba otra.
function bocaSonrisa(g) {
  fila(g, 16, 12, 15, 'o');
  espejoPx(g, 11, 15, 'o');
}
function bocaAncha(g) {
  fila(g, 16, 11, 16, 'o');
  espejoPx(g, 10, 15, 'o');
}
function bocaAbierta(g) {
  fila(g, 16, 12, 15, 'o');
  bloque(g, 17, 18, 12, 15, 't');
  espejoPx(g, 11, 15, 'o');
}
function bocaTriste(g) {
  fila(g, 17, 12, 15, 'o');
  espejoPx(g, 11, 16, 'o');
}
function bocaLado(g) {
  fila(g, 16, 13, 16, 'o');
  px(g, 12, 15, 'o');
}
function rubor(g) {
  espejo(g, 12, 6, 7, 'r');
  espejo(g, 13, 6, 7, 'r');
}

const GESTOS = {
  normal: (g) => { ojosNormales(g); nariz(g); bocaSonrisa(g); },
  feliz: (g) => { ojosCerrados(g); nariz(g); bocaAncha(g); },
  muyfeliz: (g) => { ojosCerrados(g); nariz(g); bocaAbierta(g); rubor(g); },
  pensando: (g) => { ojosNormales(g); ojoEntornado(g, false); nariz(g); bocaLado(g); },
  guino: (g) => { ojosNormales(g); ojoGuinando(g, true); nariz(g); bocaAncha(g); },
  sorpresa: (g) => { ojosGrandes(g); nariz(g); bocaAbierta(g); },
  triste: (g) => { ojosCaidos(g); nariz(g); bocaTriste(g); },
  parpadeo: (g) => { ojosCerrados(g); nariz(g); bocaSonrisa(g); }
};

// Rodea la silueta de negro. Cualquier hueco pegado a un píxel pintado pasa a
// ser borde: así no hay que dibujar el contorno a mano.
function contornear(g, hasta) {
  const fuera = new Set(['.', 'o']);
  const copia = g.map((f) => [...f]);
  for (let y = 0; y < hasta; y++) {
    for (let x = 0; x < W; x++) {
      if (g[y][x] !== '.') continue;
      const vecino =
        (y > 0 && !fuera.has(g[y - 1][x])) ||
        (y < hasta - 1 && !fuera.has(g[y + 1][x])) ||
        (x > 0 && !fuera.has(g[y][x - 1])) ||
        (x < W - 1 && !fuera.has(g[y][x + 1]));
      if (vecino) copia[y][x] = 'o';
    }
  }
  return copia;
}

function rect(x0, y0, x1, y1, k) {
  const out = [];
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) out.push([x, y, k]);
  return out;
}
function marco(x0, y0, x1, y1) {
  const out = [];
  for (let x = x0; x <= x1; x++) { out.push([x, y0, 'a']); out.push([x, y1, 'a']); }
  for (let y = y0; y <= y1; y++) { out.push([x0, y, 'a']); out.push([x1, y, 'a']); }
  return out;
}

// Complementos, en coordenadas [x, y, 'a'|'b'|'c'].
const EXTRAS = {
  // --- cabeza ---
  gorra: {
    a: '#2d5f8a', b: '#1c3f5c', c: '#f0f4f8',
    px: [
      ...rect(7, 4, 20, 4, 'b'), ...rect(6, 5, 21, 6, 'a'), ...rect(5, 7, 22, 8, 'a'),
      ...rect(4, 9, 23, 9, 'b'), ...rect(21, 10, 25, 10, 'b'), ...rect(22, 11, 25, 11, 'b'),
      ...rect(13, 5, 14, 6, 'c')
    ]
  },
  chistera: {
    a: '#2b2b33', b: '#8a1f2f', c: '#4a4a55',
    px: [
      ...rect(8, 0, 19, 3, 'a'), ...rect(8, 4, 19, 5, 'b'), ...rect(8, 6, 19, 6, 'a'),
      ...rect(4, 7, 23, 8, 'a'), ...rect(8, 1, 10, 3, 'c')
    ]
  },
  corona: {
    a: '#f2c230', b: '#b8860b', c: '#e8558f',
    px: [
      ...rect(6, 2, 6, 5, 'a'), ...rect(13, 1, 14, 5, 'a'), ...rect(21, 2, 21, 5, 'a'),
      ...rect(9, 5, 11, 5, 'a'), ...rect(16, 5, 18, 5, 'a'),
      ...rect(6, 6, 21, 7, 'a'), ...rect(6, 8, 21, 8, 'b'),
      [8, 7, 'c'], [13, 7, 'c'], [19, 7, 'c']
    ]
  },
  flor: {
    a: '#e8558f', b: '#f7d94c', c: '#4d8a52',
    px: [
      [20, 3, 'a'], [22, 3, 'a'], [21, 4, 'b'], [20, 5, 'a'], [22, 5, 'a'],
      [21, 3, 'a'], [21, 5, 'a'], [23, 4, 'c']
    ]
  },
  orejeras: {
    a: '#c0559b', b: '#8d3b72', c: '#f7d3ea',
    px: [
      ...rect(2, 10, 4, 14, 'a'), ...rect(23, 10, 25, 14, 'a'),
      ...rect(3, 11, 3, 13, 'c'), ...rect(24, 11, 24, 13, 'c'),
      ...rect(6, 5, 21, 5, 'b'), ...rect(4, 6, 5, 9, 'b'), ...rect(22, 6, 23, 9, 'b')
    ]
  },
  auriculares: {
    a: '#33384a', b: '#5b6478', c: '#7bd88f',
    px: [
      ...rect(2, 10, 4, 15, 'a'), ...rect(23, 10, 25, 15, 'a'),
      ...rect(3, 11, 3, 14, 'c'), ...rect(24, 11, 24, 14, 'c'),
      ...rect(7, 4, 20, 4, 'b'), ...rect(4, 5, 6, 9, 'b'), ...rect(21, 5, 23, 9, 'b')
    ]
  },
  // Sombrero tirolés: fieltro verde, cinta, y el Gamsbart (el penacho de pelo
  // de gamuza) al lado, que es lo que lo hace inconfundible.
  tirolerhut: {
    a: '#3d6b4a', b: '#243f2c', c: '#8a6b3a',
    px: [
      // Apoyado en la frente, no calado hasta las cejas: así las puntas de
      // las orejas asoman por encima y se sigue viendo que es un zorro.
      ...rect(10, 3, 17, 3, 'a'), ...rect(9, 4, 18, 6, 'a'),
      ...rect(12, 3, 15, 3, 'b'),
      ...rect(9, 7, 18, 7, 'b'), ...rect(13, 7, 14, 7, 'c'),
      ...rect(6, 8, 21, 8, 'a'), ...rect(5, 9, 22, 9, 'b'),
      [19, 6, 'c'], [20, 5, 'c'], [20, 4, 'c'], [21, 3, 'c'], [21, 4, 'c'], [22, 2, 'c']
    ]
  },
  // --- ojos ---
  gafas: {
    a: '#3a3a48', b: '#cfe8ff',
    px: [
      ...marco(6, 9, 12, 13), ...marco(15, 9, 21, 13),
      ...rect(13, 11, 14, 11, 'a'),
      ...rect(7, 10, 11, 12, 'b'), ...rect(16, 10, 20, 12, 'b')
    ]
  },
  gafasol: {
    a: '#1b1b22', b: '#33333f',
    px: [
      ...marco(6, 9, 12, 13), ...marco(15, 9, 21, 13),
      ...rect(13, 11, 14, 11, 'a'),
      ...rect(7, 10, 11, 12, 'b'), ...rect(16, 10, 20, 12, 'b'),
      [7, 10, 'a'], [16, 10, 'a']
    ]
  },
  monoculo: {
    a: '#d9a520', b: '#eaf4ff',
    px: [
      ...marco(15, 9, 21, 13), ...rect(16, 10, 20, 12, 'b'),
      [21, 14, 'a'], [21, 15, 'a'], [20, 16, 'a']
    ]
  },
  // --- cuello ---
  bufanda: {
    a: '#c0392b', b: '#8e2a20',
    px: [
      ...rect(10, 18, 17, 18, 'a'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 20, 'b'), ...rect(8, 21, 19, 21, 'a'),
      ...rect(10, 19, 11, 21, 'b'), ...rect(16, 19, 17, 21, 'b'),
      ...rect(19, 22, 20, 26, 'a'), ...rect(19, 27, 20, 27, 'b')
    ]
  },
  pajarita: {
    a: '#8a1f2f', b: '#5c1420',
    px: [
      ...rect(9, 19, 11, 21, 'a'), ...rect(16, 19, 18, 21, 'a'),
      ...rect(12, 19, 15, 21, 'b'), [13, 20, 'a'], [14, 20, 'a']
    ]
  },
  // --- pies ---
  zapatucos: {
    a: '#7a4a2b', b: '#553220', c: '#e8c98f',
    px: [
      ...rect(7, 27, 11, 28, 'a'), ...rect(16, 27, 20, 28, 'a'),
      ...rect(7, 29, 12, 29, 'b'), ...rect(15, 29, 20, 29, 'b'),
      ...rect(8, 27, 10, 27, 'c'), ...rect(17, 27, 19, 27, 'c')
    ]
  },
  // --- objetos: se sostienen con la pata derecha ---
  balon: {
    a: '#f5f5f5', b: '#33333f', c: '#c9a227',
    px: [
      ...rect(21, 22, 24, 25, 'a'),
      [22, 22, 'b'], [23, 23, 'b'], [21, 24, 'b'], [24, 24, 'b'], [22, 25, 'b'],
      ...rect(22, 26, 23, 27, 'c'), ...rect(20, 28, 25, 28, 'c')
    ]
  },
  trofeo: {
    a: '#f2c230', b: '#a87c12', c: '#fff0bc',
    px: [
      ...rect(21, 21, 24, 24, 'a'), ...rect(20, 22, 20, 23, 'b'), ...rect(25, 22, 25, 23, 'b'),
      ...rect(22, 21, 23, 22, 'c'),
      ...rect(22, 25, 23, 26, 'b'), ...rect(20, 27, 25, 28, 'a'), ...rect(20, 28, 25, 28, 'b')
    ]
  },
  bastonrey: {
    a: '#f2c230', b: '#8e1f38', c: '#a87c12',
    px: [
      ...rect(22, 20, 23, 21, 'a'), [21, 21, 'a'], [24, 21, 'a'], [22, 19, 'a'], [23, 19, 'a'],
      [22, 20, 'b'], [23, 20, 'b'],
      ...rect(22, 22, 23, 28, 'c')
    ]
  },
  // --- de rey (se gana con coronas) ---
  capa: {
    a: '#8e1f38', b: '#631426', c: '#f2c230',
    px: [
      ...rect(9, 18, 18, 18, 'a'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(6, 20, 8, 28, 'a'), ...rect(19, 20, 21, 28, 'a'),
      ...rect(12, 19, 15, 19, 'c'), [13, 20, 'c'], [14, 20, 'c']
    ]
  },
  zapatosrey: {
    a: '#8e1f38', b: '#5c1424', c: '#f2c230',
    px: [
      ...rect(7, 27, 11, 28, 'a'), ...rect(16, 27, 20, 28, 'a'),
      ...rect(7, 29, 11, 29, 'b'), ...rect(16, 29, 20, 29, 'b'),
      [9, 27, 'c'], [18, 27, 'c']
    ]
  },
  trajerey: {
    a: '#6b2d8e', b: '#4a1d63', c: '#f5f0e6',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 27, 'a'), ...rect(19, 20, 20, 27, 'b'),
      // el armiño: el ribete blanco con sus motitas
      ...rect(7, 21, 20, 22, 'c'), [9, 22, 'b'], [13, 22, 'b'], [17, 22, 'b'],
      ...rect(7, 28, 20, 28, 'c'),
      ...rect(12, 23, 15, 27, 'c'), [13, 25, 'a'], [14, 25, 'a']
    ]
  },
  // --- de deportista (se gana con la racha) ---
  cinta: {
    a: '#2f7de0', b: '#1c56a0', c: '#ffffff',
    px: [
      ...rect(5, 8, 22, 8, 'a'), ...rect(5, 9, 22, 9, 'b'),
      ...rect(11, 8, 12, 8, 'c'), ...rect(15, 8, 16, 8, 'c')
    ]
  },
  zapatillas: {
    a: '#f5f5f5', b: '#2f7de0', c: '#33333f',
    px: [
      ...rect(7, 27, 11, 28, 'a'), ...rect(16, 27, 20, 28, 'a'),
      ...rect(7, 29, 11, 29, 'c'), ...rect(16, 29, 20, 29, 'c'),
      ...rect(8, 27, 10, 27, 'b'), ...rect(17, 27, 19, 27, 'b')
    ]
  },
  chandal: {
    a: '#2f7de0', b: '#1c56a0', c: '#ffffff',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 27, 'a'), ...rect(19, 20, 20, 27, 'b'),
      // las tres rayas por las mangas
      ...rect(7, 20, 7, 27, 'c'), ...rect(20, 20, 20, 27, 'c'),
      ...rect(9, 20, 9, 27, 'c'), ...rect(18, 20, 18, 27, 'c'),
      ...rect(7, 28, 20, 28, 'b')
    ]
  },
  // --- ropa (solo con cuerpo) ---
  // Todas cubren el torso de la fila 18 a la 27 y las columnas 7 a 20, que es
  // lo que mide el cuerpo. Las mangas caen por fuera, sobre los brazos.
  camiseta: {
    a: '#3f7ec4', b: '#2f61a0', c: '#ffffff',
    px: [
      ...rect(9, 18, 18, 18, 'a'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 26, 'a'),
      ...rect(19, 20, 20, 26, 'b'), ...rect(7, 26, 20, 26, 'b'),
      ...rect(7, 20, 8, 23, 'a'), ...rect(19, 20, 20, 23, 'a'),
      ...rect(12, 22, 15, 25, 'c')
    ]
  },
  jersey: {
    a: '#b5533f', b: '#8d3c2c', c: '#e8c98f',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 27, 'a'),
      ...rect(7, 22, 20, 22, 'c'), ...rect(7, 25, 20, 25, 'c'),
      ...rect(19, 20, 20, 27, 'b'), ...rect(7, 27, 20, 27, 'b')
    ]
  },
  tracht: {
    a: '#2f6b45', b: '#1f4a2f', c: '#e8dcc0',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 22, 'a'),
      ...rect(11, 19, 16, 22, 'c'), ...rect(7, 23, 20, 27, 'c'),
      ...rect(7, 23, 20, 23, 'b'), ...rect(13, 20, 14, 22, 'b'),
      ...rect(19, 20, 20, 22, 'b')
    ]
  },
  abrigo: {
    a: '#4a4f63', b: '#333747', c: '#c8a06a',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 28, 'a'),
      ...rect(13, 19, 14, 28, 'b'),
      ...rect(10, 19, 11, 21, 'c'), ...rect(16, 19, 17, 21, 'c'),
      ...rect(19, 20, 20, 28, 'b'), [12, 23, 'c'], [12, 26, 'c']
    ]
  },
  // Trachtenanzug: chaqueta de loden con solapas oscuras, camisa clara y
  // botones de asta. El premio gordo.
  trachtenanzug: {
    a: '#3d6b4a', b: '#243f2c', c: '#ece3cb',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 28, 'a'),
      ...rect(19, 20, 20, 28, 'b'),
      ...rect(12, 20, 15, 27, 'c'),
      ...rect(10, 19, 11, 24, 'b'), ...rect(16, 19, 17, 24, 'b'),
      [11, 25, 'c'], [11, 27, 'c'], [16, 25, 'c'], [16, 27, 'c'],
      ...rect(7, 28, 20, 28, 'b')
    ]
  },
  // --- cabeza (con monedas) ---
  gorroLana: {
    a: '#c0392b', b: '#8e2a1e', c: '#f5e6d3',
    px: [
      ...rect(11, 0, 16, 2, 'c'),
      ...rect(6, 3, 21, 3, 'a'), ...rect(5, 4, 22, 7, 'a'),
      ...rect(19, 4, 22, 7, 'b'),
      ...rect(4, 8, 23, 9, 'c'),
      [6, 9, 'b'], [10, 9, 'b'], [14, 9, 'b'], [18, 9, 'b'], [21, 9, 'b']
    ]
  },
  boina: {
    a: '#2c3e50', b: '#1a252f', c: '#c0392b',
    px: [
      ...rect(13, 2, 14, 3, 'b'),
      ...rect(6, 4, 21, 4, 'a'), ...rect(5, 5, 22, 8, 'a'),
      ...rect(19, 5, 22, 8, 'b'), ...rect(6, 9, 21, 9, 'b'),
      [8, 5, 'c'], [9, 5, 'c']
    ]
  },
  casco: {
    a: '#ecf0f1', b: '#aeb6bf', c: '#e74c3c',
    px: [
      ...rect(6, 2, 21, 2, 'a'), ...rect(5, 3, 22, 7, 'a'),
      ...rect(13, 2, 14, 7, 'c'),
      [8, 4, 'b'], [9, 4, 'b'], [18, 4, 'b'], [19, 4, 'b'],
      [8, 6, 'b'], [9, 6, 'b'], [18, 6, 'b'], [19, 6, 'b'],
      ...rect(4, 8, 23, 8, 'b'),
      ...rect(4, 9, 4, 12, 'b'), ...rect(23, 9, 23, 12, 'b')
    ]
  },

  // --- ojos ---
  gafasCiclismo: {
    a: '#1b2a3a', b: '#f39c12', c: '#ffe6b0',
    px: [
      ...rect(6, 8, 21, 8, 'a'),
      ...rect(6, 9, 21, 11, 'b'),
      ...rect(6, 12, 21, 12, 'a'),
      ...rect(13, 9, 14, 11, 'a'),
      [8, 9, 'c'], [9, 9, 'c'], [17, 9, 'c'],
      ...rect(4, 9, 5, 10, 'a'), ...rect(22, 9, 23, 10, 'a')
    ]
  },
  parche: {
    a: '#22252b', b: '#3b4048', c: '#5a6068',
    px: [
      ...rect(15, 9, 20, 13, 'a'), ...rect(16, 10, 19, 12, 'b'),
      ...rect(4, 8, 14, 8, 'c'), ...rect(21, 9, 23, 9, 'c')
    ]
  },

  // --- cuello ---
  collar: {
    a: '#c0392b', b: '#8e2a1e', c: '#f1c40f',
    px: [
      ...rect(9, 18, 18, 18, 'a'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(16, 19, 19, 19, 'b'),
      ...rect(12, 20, 15, 22, 'c'), ...rect(13, 22, 14, 22, 'b'), [15, 21, 'b']
    ]
  },
  corbata: {
    a: '#8e1f38', b: '#5e1425', c: '#f4f6f7',
    px: [
      ...rect(10, 18, 17, 18, 'c'), ...rect(9, 19, 18, 19, 'c'),
      ...rect(12, 19, 15, 20, 'a'),
      ...rect(12, 21, 15, 25, 'a'), ...rect(13, 26, 14, 27, 'a'),
      ...rect(15, 21, 15, 25, 'b'), [14, 26, 'b']
    ]
  },
  medalla: {
    a: '#2e86c1', b: '#1b4f72', c: '#f1c40f',
    px: [
      ...rect(10, 18, 11, 21, 'a'), ...rect(16, 18, 17, 21, 'a'),
      [11, 21, 'b'], [17, 21, 'b'],
      ...rect(12, 22, 15, 25, 'c'), ...rect(12, 25, 15, 25, 'b'),
      [13, 23, 'b'], [14, 24, 'b']
    ]
  },

  // --- ropa ---
  rayas: {
    a: '#f4f6f7', b: '#1f3a93', c: '#d8dde3',
    px: [
      ...rect(9, 18, 18, 18, 'a'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 27, 'a'), ...rect(19, 20, 20, 27, 'c'),
      ...rect(7, 21, 20, 21, 'b'), ...rect(7, 23, 20, 23, 'b'),
      ...rect(7, 25, 20, 25, 'b'), ...rect(7, 27, 20, 27, 'b')
    ]
  },
  sudadera: {
    a: '#5d6d7e', b: '#42525f', c: '#d5dbdb',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 28, 'a'), ...rect(19, 20, 20, 28, 'b'),
      ...rect(12, 19, 12, 22, 'c'), ...rect(15, 19, 15, 22, 'c'),
      ...rect(9, 24, 18, 26, 'b'), ...rect(10, 25, 17, 25, 'a'),
      ...rect(7, 28, 20, 28, 'b')
    ]
  },
  chaleco: {
    // Iba un pixel mas estrecho por cada lado que la camiseta y la sudadera, y
    // al ponerselo el zorro se le veia el cuerpo por los costados.
    a: '#e67e22', b: '#b35c10', c: '#f8c471',
    px: [
      ...rect(9, 18, 18, 18, 'b'), ...rect(8, 19, 19, 19, 'a'),
      ...rect(7, 20, 20, 28, 'a'), ...rect(19, 20, 20, 28, 'b'),
      ...rect(7, 22, 20, 22, 'b'), ...rect(7, 25, 20, 25, 'b'),
      ...rect(13, 19, 14, 28, 'c')
    ]
  },

  // --- pies ---
  calcetines: {
    a: '#f4f6f7', b: '#e74c3c', c: '#c9ced1',
    px: [
      ...rect(7, 26, 11, 29, 'a'), ...rect(16, 26, 20, 29, 'a'),
      ...rect(7, 26, 11, 26, 'b'), ...rect(16, 26, 20, 26, 'b'),
      ...rect(7, 28, 11, 28, 'b'), ...rect(16, 28, 20, 28, 'b'),
      [11, 27, 'c'], [20, 27, 'c']
    ]
  },
  botas: {
    a: '#6e4b2a', b: '#4a3119', c: '#c9a227',
    px: [
      ...rect(7, 25, 11, 29, 'a'), ...rect(16, 25, 20, 29, 'a'),
      ...rect(7, 29, 12, 29, 'b'), ...rect(15, 29, 20, 29, 'b'),
      ...rect(7, 26, 11, 26, 'c'), ...rect(16, 26, 20, 26, 'c'),
      [11, 27, 'b'], [11, 28, 'b'], [20, 27, 'b'], [20, 28, 'b']
    ]
  },

  // --- objetos que se compran, en la manita derecha ---
  libro: {
    a: '#8e44ad', b: '#5b2c6f', c: '#f4f6f7',
    px: [
      ...rect(21, 22, 25, 28, 'a'),
      ...rect(21, 23, 22, 27, 'c'),
      ...rect(24, 22, 25, 28, 'b'), [23, 24, 'b'], [23, 25, 'b']
    ]
  },
  taza: {
    a: '#f4f6f7', b: '#aeb6bf', c: '#6b3e26',
    px: [
      ...rect(21, 23, 24, 28, 'a'),
      ...rect(21, 23, 24, 23, 'c'),
      ...rect(24, 24, 24, 28, 'b'),
      [25, 24, 'b'], [26, 25, 'b'], [26, 26, 'b'], [25, 27, 'b']
    ]
  },
  brezel: {
    a: '#a9662d', b: '#7a4519', c: '#f4f4f4',
    px: [
      ...rect(21, 22, 24, 22, 'a'),
      [20, 23, 'a'], [25, 23, 'a'], [22, 23, 'a'], [23, 23, 'a'],
      [20, 24, 'a'], [25, 24, 'a'], [21, 24, 'a'], [24, 24, 'a'],
      ...rect(21, 25, 24, 25, 'a'),
      [22, 26, 'a'], [23, 26, 'a'],
      ...rect(21, 27, 24, 27, 'a'),
      [20, 25, 'b'], [25, 25, 'b'],
      [22, 22, 'c'], [24, 25, 'c'], [22, 27, 'c']
    ]
  },
  paraguas: {
    // Abierto por encima de la cabeza, pero solo se le ve la mitad de arriba:
    // una franja fina de copa y el mastil bajando por fuera de la cara. Antes
    // ocupaba seis filas y le tapaba media cabeza al zorro.
    //
    // Escala propia: el resto de objetos se agrandan un 30% desde su base, y
    // este ya ocupa el alto entero. Escalarlo lo sacaria del lienzo por arriba.
    escala: 1,
    a: '#c0392b', b: '#8e2a1e', c: '#5d4037',
    px: [
      // La copa: tres filas. La de arriba tiene que tapar la cabeza ENTERA,
      // que con gorro llega de x4 a x23. Cuando era mas estrecha asomaban las
      // puntas de las orejas por encima y parecia medio paraguas.
      ...rect(4, 0, 23, 0, 'a'),
      ...rect(3, 1, 24, 1, 'a'),
      ...rect(2, 2, 25, 2, 'a'),
      // la mitad derecha, en sombra, para que se le vea el volumen
      ...rect(14, 0, 23, 0, 'b'),
      ...rect(15, 1, 24, 1, 'b'),
      ...rect(16, 2, 25, 2, 'b'),
      // el mastil baja por fuera de la cabeza hasta la patita
      ...rect(24, 3, 25, 27, 'c'),
      ...rect(22, 28, 25, 28, 'c')
    ]
  },
  globo: {
    a: '#e74c3c', b: '#b03a2e', c: '#ffffff',
    px: [
      ...rect(22, 16, 24, 16, 'a'), ...rect(21, 17, 25, 21, 'a'),
      ...rect(24, 18, 25, 21, 'b'),
      [22, 18, 'c'],
      [23, 22, 'b'], ...rect(23, 23, 23, 28, 'b')
    ]
  }
};

// Las partículas van por fuera de la silueta y suben flotando. Cada nivel
// mete más y más vivas: es el premio a encadenar aciertos.
const PARTICULAS = {
  p1: { n: 4, color: '#ffd76e', tam: 1, seg: 3.4 },
  p2: { n: 7, color: '#ffc93c', tam: 1, seg: 3.0 },
  p3: { n: 10, color: '#ff9f43', tam: 1, seg: 2.6 },
  p4: { n: 13, color: '#ff6b35', tam: 2, seg: 2.2 },
  p5: { n: 17, color: '#7bd8ff', tam: 2, seg: 1.8 }
};

// Reparto fijo (no aleatorio en cada pintado, o parpadearían al repintar) y
// en anillo por FUERA del bicho: dentro quedaban tapadas por el cuerpo.
function motas(cfg, alto) {
  const out = [];
  const cx = W / 2;
  const cy = alto / 2;
  for (let i = 0; i < cfg.n; i++) {
    const ang = i * 2.399963; // ángulo áureo: se reparten sin agruparse
    const r = 0.5 + ((i * 0.618034) % 1) * 0.09; // justo fuera de la silueta
    const x = Math.round(cx + Math.cos(ang) * (W + MARGEN) * r);
    const y = Math.round(cy + Math.sin(ang) * (alto + MARGEN) * r * 0.95);
    out.push({ x, y, retraso: ((i * 0.37) % 1) * cfg.seg });
  }
  return out;
}

function paleta(c) {
  return {
    o: '#211a16',
    f: c.fur,
    d: c.sombra,
    h: c.luzPelo,
    l: c.luz,
    m: c.luzSombra || c.luz,
    w: '#ffffff',
    p: '#211a16',
    s: '#ffffff',
    n: '#211a16',
    k: '#f5a623',
    j: '#c97e12',
    r: '#ff9ab5',
    t: '#c9526b'
  };
}

export default function FoxFace({
  fuchs,
  gesto = 'normal',
  size = 96,
  parpadea = true,
  conCuerpo = false,
  className = ''
}) {
  const [cerrando, setCerrando] = useState(false);

  // Parpadeo suelto cada pocos segundos: es lo que hace que parezca vivo.
  useEffect(() => {
    if (!parpadea) return;
    let t;
    const ciclo = () => {
      t = setTimeout(() => {
        setCerrando(true);
        setTimeout(() => setCerrando(false), 130);
        ciclo();
      }, 2400 + Math.random() * 3400);
    };
    ciclo();
    return () => clearTimeout(t);
  }, [parpadea]);

  const c = colorDe(fuchs);
  const col = paleta(c);
  const yaCerrados = ['feliz', 'muyfeliz', 'guino', 'parpadeo'];
  const gestoFinal = cerrando && !yaCerrados.includes(gesto) ? 'parpadeo' : gesto;
  const alto = conCuerpo ? H : ALTO_CABEZA;
  const chispas = PARTICULAS[fuchs?.particulas] || null;
  const especie = ESPECIES.includes(fuchs?.especie) ? fuchs.especie : 'zorro';

  const celdas = useMemo(() => {
    const g = lienzo();
    if (conCuerpo) cuerpo(g);
    cabeza(g, especie);
    (GESTOS[gestoFinal] || GESTOS.normal)(g);
    rasgos(g, especie);
    return contornear(g, conCuerpo ? H : ALTO_CABEZA);
  }, [gestoFinal, conCuerpo, especie]);

  // La cola va en su propia rejilla y en su propio grupo del SVG: así se le
  // puede dar el meneo sin arrastrar al resto del zorro.
  const celdasCola = useMemo(
    () => (conCuerpo ? contornear(dibujarCola(especie), H) : null),
    [conCuerpo, especie]
  );

  // El orden importa: lo de fuera se pinta encima. La ropa va antes que el
  // cuello, o la bufanda y el collar quedarian tapados por la camiseta.
  const extras = [
    fuchs?.cabeza,
    conCuerpo ? fuchs?.ropa : null,
    fuchs?.cuello,
    fuchs?.ojos,
    conCuerpo ? fuchs?.pies : null,
    conCuerpo ? fuchs?.objeto : null
  ]
    .map((id, i) => {
      const ex = EXTRAS[id];
      // El objeto de la mano se dibuja algo mas grande que el resto: a tamaño
      // de rejilla se quedaba en un manchurron de cinco pixeles y no se
      // distinguia un libro de una taza. Crece desde su base, que es donde lo
      // agarra, asi que sigue apoyado en la patita.
      return ex ? { ex, escala: i === 5 ? ex.escala ?? ESCALA_OBJETO : 1 } : null;
    })
    .filter(Boolean);

  return (
    <svg
      className={`fox-face fox-${gestoFinal} ${className}`}
      width={size}
      height={(size / W) * alto}
      viewBox={
        chispas
          ? `${-MARGEN / 2} ${-MARGEN / 2} ${W + MARGEN} ${alto + MARGEN}`
          : `0 0 ${W} ${alto}`
      }
      shapeRendering="crispEdges"
      role="img"
      aria-label={fuchs?.nombre || 'Fuchs'}
    >
      {celdasCola && (
        <g className="fox-cola">
          {celdasCola.map((f, y) =>
            f.map((k, x) =>
              k === '.' ? null : (
                <rect key={`c${y}-${x}`} x={x} y={y} width="1" height="1" fill={col[k]} />
              )
            )
          )}
        </g>
      )}
      <g className="fox-cuerpo">
        {celdas.slice(0, alto).map((f, y) =>
          f.map((k, x) =>
            k === '.' ? null : (
              <rect key={`${y}-${x}`} x={x} y={y} width="1" height="1" fill={col[k]} />
            )
          )
        )}
        {extras.map(({ ex, escala }, i) => {
          const vis = ex.px.filter(([, y]) => y < alto);
          // El ancla es la base del propio dibujo. Y cada pixel se coloca ya
          // escalado en vez de meterlo todo en un <g transform>: asi los
          // cuadrados siguen encajando justos entre si y no salen las rayas
          // finas de fondo que deja el redondeo.
          const x0 = escala === 1 ? 0 : Math.min(...vis.map((q) => q[0]));
          const x1 = escala === 1 ? 0 : Math.max(...vis.map((q) => q[0]));
          const cx = escala === 1 ? 0 : (x0 + x1 + 1) / 2;
          const cy = escala === 1 ? 0 : Math.max(...vis.map((q) => q[1])) + 1;
          // Al crecer, el paraguas se salia dos decimas por la derecha y se le
          // cortaba el borde. En vez de encogerlo, se empuja hacia dentro lo
          // justo para que quepa: vale para este y para cualquiera que se
          // añada luego.
          const der = cx + (x1 - cx) * escala + escala;
          const izq = cx + (x0 - cx) * escala;
          const ajuste = der > W ? W - der : izq < 0 ? -izq : 0;
          // Y lo mismo por arriba: nada puede quedar por encima del lienzo.
          const arriba = cy + (Math.min(...vis.map((q) => q[1])) - cy) * escala;
          const ajusteY = arriba < 0 ? -arriba : 0;
          return vis.map(([x, y, k], j) => (
            <rect
              key={`e${i}-${j}`}
              x={escala === 1 ? x : cx + (x - cx) * escala + ajuste}
              y={escala === 1 ? y : cy + (y - cy) * escala + ajusteY}
              width={escala}
              height={escala}
              fill={k === 'a' ? ex.a : k === 'b' ? ex.b : ex.c}
            />
          ));
        })}
      </g>
      {chispas && (
        <g className="fox-particulas" aria-hidden="true">
          {motas(chispas, alto).map((m, i) => (
            <rect
              key={`p${i}`}
              className="fox-mota"
              x={m.x}
              y={m.y}
              width={chispas.tam}
              height={chispas.tam}
              fill={chispas.color}
              style={{ animationDelay: `${m.retraso}s`, animationDuration: `${chispas.seg}s` }}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
