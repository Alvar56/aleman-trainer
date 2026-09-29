// ¿Llega a diez preguntas CADA tipo de ejercicio de Kommunikation, en todas
// las lecciones?
//
// Las condiciones salen de kommTipos.js, que es de donde las saca también el
// componente al montar la pregunta. Antes estaban copiadas aquí a mano y se
// habían quedado en cuatro tipos con otros nombres: la prueba decía que todo
// iba bien sin mirar "Entender" ni "Ordenar".
const base = '../src/lib/kursbuch/';
const { A11 } = await import(base + 'a11.js');
const { A12 } = await import(base + 'a12.js');
const { A21 } = await import(base + 'a21.js');
const { respuestaEnCadena, seguimientoDe } = await import(base + 'respuestas.js');

const { TIPOS, tiposPosibles } = await import('../src/lib/kursbuch/kommTipos.js');

const OBJETIVO = 10;

let malas = 0;
let flojas = 0;
let tandas = 0;
for (const banda of [A11, A12, A21]) {
  for (const lek of banda.lektionen) {
    const funk = lek.kommunikation || [];
    if (!funk.length) continue;
    // Igual que construir(): las frases del libro Y los turnos de dentro de
    // cada conversacion, que es lo que de verdad sale en una tanda.
    const frases = funk.flatMap((f) =>
      (f.wendungen || []).flatMap((w) => [w, ...seguimientoDe(w.de)])
    );
    const puede = frases.map((w) => tiposPosibles(w, frases, respuestaEnCadena));
    const linea = [];
    for (const nombre of TIPOS) {
      // Las frases que admiten ese tipo. construir() da las vueltas que hagan
      // falta, asi que con una sola frase valida ya se llega a diez: lo que se
      // vigila aqui es que no haya CERO (tanda vacia) y que no sean tan pocas
      // que las diez preguntas salgan de dos o tres frases dando vueltas.
      const validas = puede.filter((x) => x[nombre]).length;
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
