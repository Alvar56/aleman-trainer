// Cuántas conversaciones tiene cada función de Kommunikation.
//
// Una conversación es una frase CON respuesta (y, si toca, con turnos de
// seguimiento). Una frase suelta no cuenta: es lo que el usuario llamó
// "frases, que está mal expresado en la lección".
//
//   objetivo: 8 funciones por lección (12 en la Start), 10 conversaciones cada una
//
// Uso: node scripts/estado-komm.mjs [id-de-leccion]

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');
const { KURSBUCH } = await import('../src/lib/kursbuch/index.js');
const { respuestaDe, seguimientoDe } = await import('../src/lib/kursbuch/respuestas.js');

const soloUna = process.argv[2];
const OBJ = 10;

let totalF = 0, totalC = 0, totalSueltas = 0;

for (const band of KURSBUCH.baende) {
  for (const l of band.lektionen) {
    if (soloUna && l.id !== soloUna) continue;
    const meta = l.nr === 'Start' ? 12 : 8;
    const ks = l.kommunikation || [];
    let conv = 0, sueltas = 0;
    const filas = ks.map((k) => {
      const con = k.wendungen.filter((w) => respuestaDe(w.de)).length;
      const largas = k.wendungen.filter((w) => (seguimientoDe(w.de) || []).length).length;
      conv += con;
      sueltas += k.wendungen.length - con;
      return { f: k.funktion, n: k.wendungen.length, con, largas };
    });
    totalF += ks.length;
    totalC += conv;
    totalSueltas += sueltas;
    console.log(
      `\n${l.id.padEnd(9)} ${l.name.padEnd(30)} ${String(ks.length).padStart(2)}/${meta} funciones · ` +
      `${conv} conversaciones + ${sueltas} sueltas (objetivo ${meta * OBJ})`
    );
    for (const r of filas) {
      const marca = r.con === OBJ ? '  ok' : (r.con < OBJ ? '+' : '-') + Math.abs(OBJ - r.con);
      console.log(
        `   ${String(r.con).padStart(3)}${marca.padEnd(6)}(${String(r.n).padStart(2)} frases, ${String(r.largas).padStart(2)} largas)  ${r.f}`
      );
    }
  }
}

if (!soloUna) {
  console.log(`\nTOTAL ${totalF} funciones · ${totalC} conversaciones · ${totalSueltas} frases sin respuesta`);
}
