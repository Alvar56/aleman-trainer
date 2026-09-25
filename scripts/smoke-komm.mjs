// ¿Llega a diez preguntas CADA tipo de ejercicio de Kommunikation, en todas
// las lecciones? Repite las condiciones de montadores() sin montar la pregunta.
const base = '../src/lib/kursbuch/';
const { A11 } = await import(base + 'a11.js');
const { A12 } = await import(base + 'a12.js');
const { A21 } = await import(base + 'a21.js');
const { respuestaDe } = await import(base + 'respuestas.js');

const OBJETIVO = 10;
const SIGNOS = /[.,!?¿¡"„“]/g;

function tapable(de) {
  const fuera = new Set(['der', 'die', 'das', 'den', 'dem', 'ein', 'eine', 'und', 'ist', 'ich', 'du', 'sie']);
  const p = String(de).trim().split(/\s+/);
  const limpias = p.map((x) => x.replace(SIGNOS, '').toLowerCase());
  for (let k = 1; k < p.length; k++) {
    const l = p[k].replace(SIGNOS, '');
    if (l.length < 4 || fuera.has(l.toLowerCase())) continue;
    // la palabra no puede repetirse en la frase, o el hueco se rellena solo
    if (limpias.filter((x) => x === l.toLowerCase()).length > 1) continue;
    return true;
  }
  return false;
}

const TIPOS = {
  decir: (w, ctx) => ctx.frases.length >= 3,
  significado: (w, ctx) => ctx.glosas.filter((x) => x && x !== w.es).length >= 2,
  responder: (w, ctx) => !!respuestaDe(w.de) && ctx.respuestas.length >= 3,
  hueco: (w) => tapable(w.de)
};

let malas = 0;
let flojas = 0;
let tandas = 0;
for (const banda of [A11, A12, A21]) {
  for (const lek of banda.lektionen) {
    const funk = lek.kommunikation || [];
    if (!funk.length) continue;
    const frases = funk.flatMap((f) => f.wendungen || []);
    const ctx = {
      frases: frases.map((w) => w.de),
      glosas: frases.map((w) => w.es),
      respuestas: frases.map((w) => respuestaDe(w.de)?.de).filter(Boolean)
    };
    const linea = [];
    for (const [nombre, vale] of Object.entries(TIPOS)) {
      // Las frases que admiten ese tipo. construir() da las vueltas que hagan
      // falta, asi que con una sola frase valida ya se llega a diez: lo que se
      // vigila aqui es que no haya CERO (tanda vacia) y que no sean tan pocas
      // que las diez preguntas salgan de dos o tres frases dando vueltas.
      const validas = frases.filter((w) => vale(w, ctx)).length;
      tandas++;
      if (!validas) malas++;
      else if (validas * 3 < OBJETIVO) flojas++;
      linea.push(nombre + ':' + String(validas).padStart(2));
    }
    console.log(lek.id.padEnd(10), 'frases:' + String(frases.length).padStart(3), ' frases validas por tipo ->', linea.join('  '));
  }
}
console.log('');
console.log(tandas + ' tandas · ' + malas + ' sin ninguna frase · ' + flojas + ' con menos de ' + Math.ceil(OBJETIVO / 3));
