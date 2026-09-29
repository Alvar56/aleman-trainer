// ¿Qué colores usa cada paisaje y cuáles chillan?
//
// Los fondos de Felix venían con la gama viva de Tailwind (#22c55e, #f97316,
// #0ea5e9...). A pantalla completa, detrás del zorro y bajo un degradado al
// blanco, esos tonos se ven de rotulador. Este script lista por escena los
// colores más saturados para saber cuáles bajar de tono.
//
// Uso: node scripts/colores-paisajes.mjs [nombre-de-escena]

import fs from 'node:fs';
import path from 'node:path';

const css = fs.readFileSync(path.join(process.cwd(), 'src', 'index.css'), 'utf8');
const soloEsta = process.argv[2];

function hsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (!d) return { h: 0, s: 0, l };
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h: h * 360, s, l };
}

// Paisajes del modal y franjas de suelo de los ejercicios: son dos juegos
// distintos de dibujos y hay que mirar los dos.
const re = /\.fox-(escena|suelo)-([a-zA-Z]+)[^{]*\{[^}]*?background-image:\s*url\("data:image\/svg\+xml,([^"]+)"\)/gs;

for (const m of css.matchAll(re)) {
  const nombre = `${m[1]} ${m[2]}`;
  if (soloEsta && m[2] !== soloEsta) continue;
  const svg = decodeURIComponent(m[3]);

  // cuántas veces aparece cada color, para saber cuál pesa en la escena
  const cuenta = new Map();
  for (const c of svg.matchAll(/#[0-9a-fA-F]{6}/g)) {
    const k = c[0].toLowerCase();
    cuenta.set(k, (cuenta.get(k) || 0) + 1);
  }

  // chillón = muy saturado y ni muy claro ni muy oscuro
  const vivos = [...cuenta.entries()]
    .map(([c, n]) => ({ c, n, ...hsl(c) }))
    .filter((x) => x.s > 0.6 && x.l > 0.24 && x.l < 0.68)
    .sort((a, b) => b.s - a.s);

  console.log(`\n${nombre}  ·  ${cuenta.size} colores`);
  if (!vivos.length) {
    console.log('   sin tonos chillones');
  } else {
    for (const v of vivos) {
      console.log(`   ${v.c}  x${String(v.n).padStart(2)}  sat ${Math.round(v.s * 100)}%  luz ${Math.round(v.l * 100)}%`);
    }
  }
}
