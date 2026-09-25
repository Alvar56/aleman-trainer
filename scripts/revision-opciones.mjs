// ¿Cuántas opciones saca de verdad cada hueco del Test?
//
// El cuarto señuelo no está escrito a mano: sale de la reserva de la propia
// regla. Esto comprueba dos cosas:
//
//   · cuántos huecos llegan a cuatro opciones y cuáles se quedan en tres
//     (una regla con dos respuestas posibles no da para más, y es correcto);
//   · que la opción añadida no sea la buena escrita de otra manera —solo
//     cambia la mayúscula, o es la misma palabra con otro signo—, que es el
//     único fallo que convertiría un ejercicio en una trampa.
//
// Uso:
//   node scripts/revision-opciones.mjs          el resumen
//   node scripts/revision-opciones.mjs --tres   las reglas que no llegan a 4

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, ruleKey } = await import('../src/lib/kursbuch/index.js');
const { DATA } = await import('../src/lib/kursbuch/frames/index.js');
const { framesDeRegla } = await import('../src/lib/kursbuch/frames/_motor.js');
const { makeRng } = await import('../src/lib/rng.js');

const verTres = process.argv.includes('--tres');

// Misma palabra con otra mayúscula o sin el signo final: no es un señuelo.
const desnudo = (s) => String(s).toLowerCase().replace(/[.,!?¿¡"„“]/g, '').trim();

let total = 0;
let conCuatro = 0;
const cortas = new Map();
const sospechosas = [];
const duplicadas = [];
const minusculas = [];

for (const l of KURSBUCH.lektionen) {
  for (const r of l.grammatik || []) {
    const k = ruleKey(r);
    const d = DATA[k];
    if (!d || !(d.picks || []).length) continue;

    // Cada hueco se monta varias veces: la reserva se baraja, así que el
    // cuarto cambia de una tanda a otra y hay que mirar más de una.
    const frames = framesDeRegla(d, k).filter((f) => f.tipo !== 'order');
    for (let i = 0; i < (d.picks || []).length; i += 1) {
      const pick = d.picks[i];
      for (let semilla = 1; semilla <= 4; semilla += 1) {
        const item = frames[i].make(makeRng(semilla * 7919 + i));
        if (item.type !== 'mc') continue;
        if (semilla === 1) {
          total += 1;
          if (item.options.length >= 4) conCuatro += 1;
          else cortas.set(k, (cortas.get(k) || 0) + 1);
        }
        const buena = desnudo(item.answer);
        for (const o of item.options) {
          if (o === item.answer) continue;
          if (desnudo(o) === buena) {
            sospechosas.push(`${k}  «${pick.s}»  buena: ${item.answer}  ·  señuelo: ${o}`);
          }
        }
        // Dos opciones que solo se diferencian en la mayúscula, o una en
        // minúscula en un hueco que abre la frase: se ve a la legua cuál es
        // el relleno y el ejercicio deja de medir nada.
        const formas = item.options.map(desnudo);
        formas.forEach((f, a) => {
          if (formas.indexOf(f) !== a) {
            duplicadas.push(`${k}  «${pick.s}»  ${item.options.join(' / ')}`);
          }
        });
        const abreFrase = /^\s*___/.test(String(pick.s));
        for (const o of item.options) {
          const inicial = String(o).trim()[0] || '';
          if (abreFrase && inicial && inicial === inicial.toLowerCase() && inicial !== inicial.toUpperCase()) {
            minusculas.push(`${k}  «${pick.s}»  opción: ${o}`);
          }
        }
      }
    }
  }
}

console.log(`\n${conCuatro} de ${total} huecos salen con cuatro opciones (${Math.round((conCuatro / total) * 100)}%)`);

if (cortas.size) {
  console.log(`\n${[...cortas.values()].reduce((a, b) => a + b, 0)} se quedan en tres, en ${cortas.size} reglas:`);
  if (verTres) {
    for (const [k, n] of [...cortas].sort((a, b) => b[1] - a[1])) {
      console.log('  ' + k.padEnd(46) + n);
    }
  } else {
    console.log('  (node scripts/revision-opciones.mjs --tres  para verlas)');
  }
}

for (const [rotulo, lista] of [
  ['opciones que solo cambian la mayúscula', duplicadas],
  ['opciones en minúscula en un hueco que abre la frase', minusculas]
]) {
  const unicas = [...new Set(lista)];
  if (!unicas.length) continue;
  console.log(`
⚠ ${unicas.length} ${rotulo}:`);
  for (const s of unicas.slice(0, 12)) console.log('   ' + s);
  process.exitCode = 1;
}

if (sospechosas.length) {
  console.log(`\n⚠ ${sospechosas.length} señuelos que son la respuesta con otra forma:`);
  for (const s of [...new Set(sospechosas)].slice(0, 20)) console.log('   ' + s);
  process.exitCode = 1;
} else {
  console.log('\n✓ ningún señuelo repite la respuesta');
}
