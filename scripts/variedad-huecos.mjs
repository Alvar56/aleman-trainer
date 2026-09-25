// Cuánta variedad tiene el Test de cada regla.
//
// Ochenta huecos no valen de nada si los ochenta son el mismo ejercicio con
// otras palabras. Dos cosas delatan la monotonía:
//
//   respuestas     cuántas respuestas DISTINTAS hay. Si una regla tiene 40
//                  huecos y 3 respuestas, se contesta de memoria.
//   la más repetida  qué porcentaje se lleva la respuesta más frecuente.
//
// También mira dónde cae el hueco: al principio, en medio o al final de la
// frase. Un tema que solo pide la palabra del medio nunca entrena la posición
// del verbo, que es justo donde se falla en alemán.
//
// Uso:
//   node scripts/variedad-huecos.mjs            lo peor primero
//   node scripts/variedad-huecos.mjs --todo     todas las reglas

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, ruleKey } = await import('../src/lib/kursbuch/index.js');
const { DATA } = await import('../src/lib/kursbuch/frames/index.js');

const todo = process.argv.includes('--todo');
const filas = [];

for (const l of KURSBUCH.lektionen) {
  for (const r of l.grammatik || []) {
    const k = ruleKey(r);
    const picks = DATA[k]?.picks || [];
    if (picks.length < 6) continue;

    const cuenta = new Map();
    let alFinal = 0;
    let alPrincipio = 0;
    let multi = 0;
    for (const p of picks) {
      cuenta.set(p.a, (cuenta.get(p.a) || 0) + 1);
      const s = String(p.s).trim();
      if (/___\s*[.!?]?$/.test(s)) alFinal += 1;
      if (s.startsWith('___')) alPrincipio += 1;
      if (String(p.a).includes(' ')) multi += 1;
    }
    const top = Math.max(...cuenta.values());
    filas.push({
      leccion: l.id,
      regla: k,
      n: picks.length,
      distintas: cuenta.size,
      repetida: Math.round((top / picks.length) * 100),
      final: Math.round((alFinal / picks.length) * 100),
      principio: Math.round((alPrincipio / picks.length) * 100),
      multi: Math.round((multi / picks.length) * 100)
    });
  }
}

// Lo más monótono arriba: pocas respuestas distintas y una que se lleva todo.
filas.sort((a, b) => b.repetida - a.repetida || a.distintas - b.distintas);
const lista = todo ? filas : filas.filter((f) => f.repetida >= 40 || f.distintas <= 4);

console.log('\nregla'.padEnd(46) + 'huecos  distintas  la+repetida  hueco-final  varias-palabras');
for (const f of lista) {
  console.log(
    ('  ' + f.regla).padEnd(46) +
    String(f.n).padStart(6) +
    String(f.distintas).padStart(11) +
    (f.repetida + '%').padStart(13) +
    (f.final + '%').padStart(13) +
    (f.multi + '%').padStart(17)
  );
}
console.log(`\n${lista.length} de ${filas.length} reglas`);
if (!todo) console.log('(solo las que repiten una respuesta en 40% o más, o tienen 4 respuestas o menos)');
