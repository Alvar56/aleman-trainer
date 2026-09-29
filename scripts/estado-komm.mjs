// Como va Kommunikation, apartado por apartado.
//
// Lo que se cuenta son INTERCAMBIOS: una frase y lo que te contestan. Una
// conversacion de cinco intercambios son diez turnos.
//
// Antes se contaban conversaciones y el objetivo eran diez por apartado, y eso
// es justo lo que estaba mal: salian diez temas distintos que se abrian con una
// frase, se cerraban con la respuesta y no llevaban a ninguna parte. Ahora el
// objetivo es el mismo volumen repartido de otra forma:
//
//   10 intercambios por apartado, en 2 o 3 conversaciones de 3 a 6
//
// Asi las frases del libro siguen estando todas -son los turnos que dices tu-
// pero encadenadas sobre el mismo tema en vez de sueltas.
//
// Uso: node scripts/estado-komm.mjs [id-de-leccion]

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');
const { respuestaDe, seguimientoDe } = await import('../src/lib/kursbuch/respuestas.js');

const soloUna = process.argv[2];
const OBJ = 10;          // intercambios por apartado
const MIN_CONV = 3;      // intercambios de la conversacion mas corta
const MAX_CONV = 6;      // y de la mas larga

let totalF = 0, totalI = 0, totalC = 0, totalSueltas = 0, malas = 0;

for (const band of KURSBUCH.baende) {
  for (const l of band.lektionen) {
    if (soloUna && l.id !== soloUna) continue;
    const meta = l.nr === 'Start' ? 12 : 8;
    const ks = l.kommunikation || [];
    let inter = 0, conv = 0, sueltas = 0;

    const filas = ks.map((k) => {
      const largos = [];
      let sinResp = 0;
      for (const w of k.wendungen) {
        if (!respuestaDe(w.de)) { sinResp += 1; continue; }
        // La frase, la respuesta y los turnos de seguimiento.
        largos.push((2 + (seguimientoDe(w.de) || []).length) / 2);
      }
      const i = largos.reduce((a, b) => a + b, 0);
      inter += i;
      conv += largos.length;
      sueltas += sinResp;
      return { f: k.funktion, i, largos, sinResp };
    });

    totalF += ks.length;
    totalI += inter;
    totalC += conv;
    totalSueltas += sueltas;

    console.log(
      `\n${l.id.padEnd(9)} ${l.name.padEnd(30)} ${String(ks.length).padStart(2)}/${meta} funciones · ` +
      `${inter} intercambios en ${conv} conversaciones (objetivo ${meta * OBJ})`
    );

    for (const r of filas) {
      // Un apartado esta bien cuando suma 10 y ninguna conversacion se queda
      // en dos turnos ni se va a doce.
      const fuera = r.largos.filter((x) => x < MIN_CONV || x > MAX_CONV).length;
      const ok = r.i === OBJ && !fuera && !r.sinResp;
      if (!ok) malas += 1;
      const marca = r.i === OBJ ? (fuera ? ` !${fuera}` : '  ok') : (r.i < OBJ ? '+' : '-') + Math.abs(OBJ - r.i);
      const forma = r.largos.length ? r.largos.join('+') : '-';
      console.log(
        `   ${String(r.i).padStart(3)}${marca.padEnd(6)}(${String(r.largos.length).padStart(2)} conv: ${forma.padEnd(11)}` +
        `${r.sinResp ? `, ${r.sinResp} sueltas` : ''})  ${r.f}`
      );
    }
  }
}

if (!soloUna) {
  console.log(
    `\nTOTAL ${totalF} funciones · ${totalI} intercambios en ${totalC} conversaciones · ` +
    `${totalSueltas} frases sin respuesta`
  );
  console.log(`${malas} apartados fuera de forma (objetivo ${OBJ} intercambios en conversaciones de ${MIN_CONV} a ${MAX_CONV})`);
}
