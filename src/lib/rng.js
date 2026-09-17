// Pequeno generador pseudo-aleatorio con semilla (mulberry32).
// Sirve para poder reproducir una sesion si hiciera falta, y para
// mezclar/elegir de forma controlada.

export function makeRng(seed) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function randomSeed() {
  return (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0;
}

export function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

export function pickN(rng, arr, n) {
  return shuffle(rng, [...arr]).slice(0, n);
}

export function shuffle(rng, arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Elige `count` distractores de `pool` que no esten en `exclude`.
export function distractors(rng, pool, exclude, count) {
  const ex = new Set(exclude.map((x) => String(x).toLowerCase()));
  const options = pool.filter((x) => !ex.has(String(x).toLowerCase()));
  return pickN(rng, options, count);
}
