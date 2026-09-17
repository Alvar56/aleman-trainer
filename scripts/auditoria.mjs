// Radiografía del motor offline: cuánta gramática del libro se puede practicar
// sin IA, con cuántas frases distintas y con qué reparto por temática.
import { KURSBUCH, ruleKey } from '../src/lib/kursbuch/index.js';
import { DATA, TEMAS, frameCount } from '../src/lib/kursbuch/frames/index.js';

let con = 0, sin = 0, picks = 0, orders = 0;
const faltan = [], flojas = [];
const usadas = new Set();

for (const l of KURSBUCH.lektionen) {
  for (const r of l.grammatik || []) {
    const k = ruleKey(r);
    if (!DATA[k]) { sin++; faltan.push(`${l.id.padEnd(9)} ${k}`); continue; }
    usadas.add(k);
    con++;
    const c = frameCount(k);
    picks += c.picks; orders += c.orders;
    if (c.total < 14) flojas.push(`${String(c.total).padStart(3)}  ${l.id.padEnd(9)} ${k}`);
  }
}

console.log('REGLAS DEL LIBRO:', con + sin, '| con plantillas:', con, '| solo IA:', sin);
console.log('FRASES a mano:', picks, 'de hueco +', orders, 'de ordenar =', picks + orders);
console.log('\nPOR TEMÁTICA');
for (const [nombre, datos] of Object.entries(TEMAS)) {
  const ks = Object.keys(datos);
  const p = ks.reduce((s, k) => s + (datos[k].picks?.length || 0), 0);
  const o = ks.reduce((s, k) => s + (datos[k].orders?.length || 0), 0);
  console.log(`  ${nombre.padEnd(26)} ${String(ks.length).padStart(2)} reglas  ${String(p).padStart(4)} huecos  ${String(o).padStart(3)} ordenar`);
}
if (flojas.length) { console.log('\nCON POCA VARIEDAD (<14)'); flojas.forEach((x) => console.log('  ' + x)); }
if (faltan.length) { console.log('\nSIN PLANTILLA (' + sin + ')'); faltan.forEach((x) => console.log('  ' + x)); }

const huerfanas = Object.keys(DATA).filter((k) => !usadas.has(k));
if (huerfanas.length) console.log('\nPLANTILLAS QUE NO USA NINGUNA LECCIÓN:', huerfanas.join(', '));
