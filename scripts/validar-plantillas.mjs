// Comprueba que cada plantilla es jugable ANTES de que te la encuentres en
// medio de una tanda: tres opciones distintas, un solo hueco, frases que no se
// repiten y tokens suficientes para que ordenar tenga sentido.
import { DATA } from '../src/lib/kursbuch/frames/index.js';

const fallos = [];
const avisos = [];

for (const [key, d] of Object.entries(DATA)) {
  const vistas = new Set();
  (d.picks || []).forEach((x, i) => {
    const huecos = (String(x.s).match(/___/g) || []).length;
    const partesAns = String(x.a || '').split(/\s*\.\.\.\s*|\s*…\s*/).filter(Boolean).length;
    // Una pregunta de gramatica pura ("Welchen Kasus verlangt mit?") no
    // lleva hueco: se pinta entera y se contesta eligiendo, que es lo que
    // hace MultipleChoice cuando la frase no trae ___. Se reconoce por el
    // interrogante final. Todo lo demas sigue necesitando su hueco.
    const esPregunta = huecos === 0 && /\?\s*$/.test(String(x.s));
    if (!esPregunta && huecos !== 1 && huecos !== partesAns) fallos.push(`${donde}: ${huecos} huecos "___" (debe haber 1 o coincidir con partes de respuesta) → ${x.s}`);
    const opts = [x.a, ...(x.d || [])].map((o) => String(o).toLowerCase().trim());
    if (new Set(opts).size !== 3) fallos.push(`${donde}: ${new Set(opts).size} opciones distintas (deben ser 3) → ${JSON.stringify([x.a, ...(x.d || [])])}`);
    if (!x.t) fallos.push(`${donde}: sin traducción`);
    if (!x.e) fallos.push(`${donde}: sin explicación`);
    if (vistas.has(x.s)) fallos.push(`${donde}: frase repetida dentro de la regla → ${x.s}`);
    vistas.add(x.s);
    // la solución tiene que caber en el hueco sin dejar la frase coja
    if (String(x.a).includes('___')) fallos.push(`${donde}: la respuesta contiene "___"`);
  });
  const vistasO = new Set();
  (d.orders || []).forEach((x, i) => {
    const donde = `${key}#order${i}`;
    if (!Array.isArray(x.sol) || x.sol.length < 3) fallos.push(`${donde}: pocas palabras para ordenar`);
    else if (x.sol.length > 10) avisos.push(`${donde}: ${x.sol.length} palabras (largo)`);
    if (x.sol?.some((t) => /\s/.test(t))) fallos.push(`${donde}: un token lleva espacios → ${JSON.stringify(x.sol)}`);
    if (!x.t) fallos.push(`${donde}: sin traducción`);
    const s = (x.sol || []).join(' ');
    if (vistasO.has(s)) fallos.push(`${donde}: frase repetida → ${s}`);
    vistasO.add(s);
  });
}

if (avisos.length) { console.log('AVISOS (' + avisos.length + ')'); avisos.forEach((x) => console.log('  · ' + x)); }
if (!fallos.length) { console.log('\nOK: todas las plantillas son jugables.'); process.exit(0); }
console.log('\nFALLOS (' + fallos.length + ')');
fallos.forEach((x) => console.log('  ✗ ' + x));
process.exit(1);
