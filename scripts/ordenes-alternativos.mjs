// Las otras colocaciones que también valen en los ejercicios de ordenar.
//
// El alemán de enunciado tiene el verbo en segunda posición y deja poner
// delante casi cualquier complemento. "Letzte Woche haben wir das Auto
// verkauft" y "Wir haben letzte Woche das Auto verkauft" son las dos buenas.
// Los ejercicios guardaban UNA sola, así que corregían mal la otra.
//
// Esto busca las frases que empiezan por un complemento y llevan el sujeto
// pronombre justo detrás del verbo -"[Complemento] [verbo] [pronombre] ..."-,
// y escribe la versión con el sujeto delante. Es el único caso que se puede
// dar la vuelta sin analizar la frase: por la regla del verbo en 2ª posición,
// todo lo que va antes del verbo es UN solo bloque.
//
// Se queda fuera a propósito:
//   - las preguntas con partícula (Wann kommst du?), que no se pueden girar
//   - las que empiezan por una palabra que no está en la lista de arranques
//     conocidos, porque no se sabe si lleva minúscula al moverla
//   - las que ya tienen alternativas escritas
//
// Uso:
//   node scripts/ordenes-alternativos.mjs           enseña lo que haría
//   node scripts/ordenes-alternativos.mjs --escribe lo escribe

import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'src', 'lib', 'kursbuch', 'frames');

// Pronombres que pueden ser el sujeto detrás del verbo.
const SUJETOS = new Set(['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie', 'man']);

// Pronombres átonos: van pegados al verbo, antes del complemento que movemos.
const ATONOS = new Set([
  'es', 'ihn', 'sie', 'mich', 'dich', 'uns', 'euch',
  'mir', 'dir', 'ihm', 'ihnen', 'sich'
]);

// Arranques que al moverse van en minúscula. Todo lo demás se deja quieto:
// si no se sabe si es nombre (mayúscula) o no, mejor no tocarlo.
const ARRANQUES = new Set([
  'Am', 'An', 'Auf', 'Aus', 'Bei', 'Bis', 'Durch', 'Für', 'Gegen', 'In', 'Mit',
  'Nach', 'Ohne', 'Seit', 'Um', 'Von', 'Vor', 'Zu', 'Zum', 'Zur', 'Im', 'Ins',
  'Beim', 'Vom', 'Übermorgen', 'Heute', 'Morgen', 'Gestern', 'Jetzt', 'Dann',
  'Danach', 'Später', 'Früher', 'Zuerst', 'Endlich', 'Leider', 'Natürlich',
  'Manchmal', 'Oft', 'Immer', 'Nie', 'Selten', 'Meistens', 'Normalerweise',
  'Deswegen', 'Trotzdem', 'Darum', 'Deshalb', 'Dort', 'Da', 'Hier', 'Draußen',
  'Drinnen', 'Oben', 'Unten', 'Links', 'Rechts', 'Letzte', 'Letzten', 'Letztes',
  'Nächste', 'Nächsten', 'Nächstes', 'Jeden', 'Jede', 'Jedes', 'Diese',
  'Dieses', 'Diesen', 'Dieser', 'Abends', 'Morgens', 'Mittags', 'Nachmittags',
  'Nachts', 'Montags', 'Dienstags', 'Mittwochs', 'Donnerstags', 'Freitags',
  'Samstags', 'Sonntags', 'Damals', 'Heutzutage', 'Bald', 'Gleich', 'Sofort',
  'Vorher', 'Nachher', 'Gern', 'Wirklich', 'Vielleicht', 'Hoffentlich',
  'Zum Glück', 'Sicher', 'Bestimmt', 'Wahrscheinlich', 'Eigentlich'
]);

// Partículas de pregunta: una frase que empieza así no se gira.
const PREGUNTAS = new Set([
  'Wann', 'Wo', 'Was', 'Wer', 'Wen', 'Wem', 'Wie', 'Warum', 'Wieso', 'Woher',
  'Wohin', 'Welcher', 'Welche', 'Welches', 'Welchen', 'Wessen', 'Wofür', 'Womit'
]);

const minus = (w) => w.charAt(0).toLowerCase() + w.slice(1);
const mayus = (w) => w.charAt(0).toUpperCase() + w.slice(1);

// Devuelve la colocación alternativa, o null si esta frase no se puede girar.
export function giraVorfeld(sol) {
  if (sol.length < 4) return null;
  if (!ARRANQUES.has(sol[0])) return null;

  // El verbo va en 2ª posición, o sea: justo delante del sujeto pronombre.
  // Buscamos ese sujeto; lo que quede a su izquierda, menos el verbo, es el
  // bloque que va delante.
  let iSujeto = -1;
  for (let i = 2; i < sol.length; i++) {
    if (SUJETOS.has(sol[i])) { iSujeto = i; break; }
  }
  if (iSujeto < 2) return null;

  const bloque = sol.slice(0, iSujeto - 1);
  const verbo = sol[iSujeto - 1];
  const sujeto = sol[iSujeto];
  const resto = sol.slice(iSujeto + 1);
  if (!bloque.length) return null;
  // La partícula de pregunta puede no ir la primera: "Seit wann lernst du
  // Deutsch?" empieza por Seit, que sí está en la lista, pero girarla da
  // "Du lernst seit wann Deutsch?", que no es alemán. Si la partícula está en
  // cualquier punto del bloque, la frase es una pregunta y no se toca.
  if (bloque.some((w) => PREGUNTAS.has(w) || PREGUNTAS.has(mayus(w)))) return null;
  // Si el sujeto es "Sie" de usted se queda en mayúscula; los demás no van
  // nunca en mayúscula a mitad de frase, así que al pasar delante hay que
  // ponérsela, y eso solo se sabe hacer con los de la lista.
  if (!SUJETOS.has(sujeto)) return null;

  // Los pronombres átonos se quedan pegados al verbo: "Ich habe es gestern
  // gekauft", no "Ich habe gestern es gekauft".
  let corte = 0;
  while (corte < resto.length && ATONOS.has(resto[corte])) corte++;

  const bloqueMovido = [minus(bloque[0]), ...bloque.slice(1)];
  const nuevo = [
    mayus(sujeto), verbo,
    ...resto.slice(0, corte),
    ...bloqueMovido,
    ...resto.slice(corte)
  ];
  if (nuevo.join(' ') === sol.join(' ')) return null;
  return nuevo;
}

// ---- recorrer los ficheros ------------------------------------------------
if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}` ||
    process.argv[1].endsWith('ordenes-alternativos.mjs')) {
  const escribe = process.argv.includes('--escribe');
  const ficheros = fs.readdirSync(DIR).filter((f) => f.endsWith('.js') && !f.startsWith('_') && f !== 'index.js');

  let vistos = 0;
  let tocados = 0;
  const muestra = [];

  for (const nombre of ficheros) {
    const p = path.join(DIR, nombre);
    let txt = fs.readFileSync(p, 'utf8');
    let cambiado = false;

    // Cada línea de orden es "{ sol: ['a', 'b'], t: '…', e: '…' }". Se toca
    // solo la que no tiene ya alt.
    txt = txt.replace(/\{ sol: \[([^\]]*)\](, alt: )?/g, (todo, dentro, yaTiene) => {
      vistos++;
      if (yaTiene) return todo;
      const sol = [...dentro.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
      const otro = giraVorfeld(sol);
      if (!otro) return todo;
      tocados++;
      if (muestra.length < 99) muestra.push(`${sol.join(' ')}\n      → ${otro.join(' ')}`);
      cambiado = true;
      const alt = `[[${otro.map((x) => `'${x.replace(/'/g, "\\'")}'`).join(', ')}]]`;
      return `{ sol: [${dentro}], alt: ${alt}`;
    });

    if (cambiado && escribe) fs.writeFileSync(p, txt);
  }

  console.log(`órdenes mirados: ${vistos}`);
  console.log(`con otra colocación buena: ${tocados}`);
  console.log('\nmuestra:');
  for (const m of muestra) console.log('    ' + m);
  console.log(escribe ? '\n✓ escrito' : '\n(no se ha escrito nada; usa --escribe)');
}
