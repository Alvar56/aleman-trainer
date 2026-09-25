// Cuánto falta (o sobra) para los objetivos por lección.
//
//   palabras   120 en todas, 150 en la Start
//   reglas       8 en todas,  12 en la Start
//   funciones    8 en todas,  12 en la Start
//
// Uso: node scripts/estado-objetivo.mjs

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');

const meta = (l) => (l.nr === 'Start' ? { w: 150, g: 12, k: 12 } : { w: 120, g: 8, k: 8 });
const dif = (n, obj) => (n === obj ? '  ok' : (n < obj ? '+' : '-') + Math.abs(obj - n));

let tw = 0, tg = 0, tk = 0, fw = 0, fg = 0, fk = 0;

console.log('\nlección                                 palabras        reglas      funciones     frases K');
console.log('─'.repeat(96));

for (const l of KURSBUCH.lektionen) {
  const o = meta(l);
  const w = (l.woerter || []).reduce((s, g) => s + (g.items || []).length, 0);
  const g = (l.grammatik || []).length;
  const k = (l.kommunikation || []).length;
  const frases = (l.kommunikation || []).reduce((s, x) => s + (x.wendungen || []).length, 0);
  const temas = (l.woerter || []).length;

  tw += w; tg += g; tk += k;
  fw += Math.max(0, o.w - w); fg += Math.max(0, o.g - g); fk += Math.max(0, o.k - k);

  console.log(
    (l.nr === 'Start' ? 'Start' : 'L' + l.nr).padEnd(6) +
    l.name.slice(0, 30).padEnd(32) +
    String(w).padStart(4) + '/' + o.w + ' ' + dif(w, o.w).padStart(5) +
    String(g).padStart(8) + '/' + o.g + ' ' + dif(g, o.g).padStart(5) +
    String(k).padStart(8) + '/' + o.k + ' ' + dif(k, o.k).padStart(5) +
    String(frases).padStart(10) +
    '   (' + temas + ' subtemas)'
  );
}

console.log('─'.repeat(96));
console.log(`TOTAL  palabras ${tw}  ·  reglas ${tg}  ·  funciones ${tk}`);
console.log(`FALTAN palabras ${fw}  ·  reglas ${fg}  ·  funciones ${fk}`);
