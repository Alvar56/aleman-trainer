// ¿Tiene sentido el material nuevo?
//
// El revisor de traducciones mira si algo está traducido. Esto mira otra cosa:
// si lo que está escrito se sostiene. Son comprobaciones tontas pero que
// pillan justo los errores que se cuelan al escribir cientos de entradas:
//
//   · una frase de ejemplo que no contiene la palabra que ilustra
//     (copiar la de al lado y olvidarse de cambiarla)
//   · una respuesta de Kommunikation que tutea cuando la frase trata de usted,
//     o al revés
//   · un hueco de gramática cuya respuesta no encaja en la frase
//   · una palabra o una frase repetida dentro de la misma lección
//
// Uso: node scripts/revision-contenido.mjs

globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.window = { addEventListener() {} };

const { setLang } = await import('../src/lib/i18n.js');
setLang('es');

const { KURSBUCH, lektionLabel, lektionKommunikation, lektionDeckTodo, ruleKey } =
  await import('../src/lib/kursbuch/index.js');
const { DATA } = await import('../src/lib/kursbuch/frames/index.js');
const { respuestaDe } = await import('../src/lib/kursbuch/respuestas.js');

const avisos = [];
const nota = (tipo, donde, texto) => avisos.push({ tipo, donde, texto });

// La raíz de una palabra alemana, para reconocerla dentro de una frase aunque
// vaya conjugada o declinada. No es un lematizador: corta el artículo, se
// queda con la parte más larga si vienen varias formas separadas por "/", y
// recorta las terminaciones típicas.
// Una entrada puede traer VARIAS formas: "der Kuli / der Kugelschreiber",
// "schwer / schwierig", "dreißig, vierzig, fünfzig". Basta con que la frase
// use una de ellas, así que se sacan todas y vale con que encaje cualquiera.
//
// Y basta con el principio de la palabra: los verbos cambian mucho (essen →
// esse, geben → gib, sehen → sieht) y comparar la palabra entera daba 125
// avisos que eran todos correctos. Cuatro letras es el punto donde deja de
// haber ruido sin dejar de pillar el ejemplo copiado de la entrada de al lado.
function raices(de) {
  const limpio = String(de)
    .replace(/\s*\(.*?\)\s*/g, ' ')
    .replace(/[.!?¡¿"„“·]/g, ' ');
  const formas = limpio
    .split(/[/,;]| – | - /)
    .flatMap((x) => {
      // Fuera el artículo y el "sich" de los reflexivos, que si no la forma
      // que se busca en la frase es siempre "sich".
      const t = x.trim().replace(/^(der|die|das|den|dem|sich)\s+/i, '').split(/\s+/).filter(Boolean);
      if (!t.length) return [];
      // La primera y la última: "ein Formular ausfüllen" se reconoce por
      // "ausfüllen", y "der Termin passt mir" por "Termin".
      return t.length > 1 ? [t[0], t[t.length - 1]] : [t[0]];
    })
    .map((x) => x.replace(/[^A-Za-zÄÖÜäöüß]/g, ''))
    .filter((x) => x.length >= 2);

  // Los verbos separables se parten al conjugarse: "aufstehen" sale como
  // "stehe … auf" y el prefijo no toca el verbo. Así que también vale la raíz
  // sin prefijo, o el ejemplo correcto se marcaba como malo.
  const PREFIJOS = ['auf', 'aus', 'ein', 'mit', 'ab', 'an', 'zu', 'vor', 'nach', 'um', 'zurück', 'weg', 'los', 'fest', 'hin', 'her', 'durch', 'über'];
  const con = [...formas];
  for (const f of formas) {
    for (const p of PREFIJOS) {
      if (f.toLowerCase().startsWith(p) && f.length - p.length >= 3) con.push(f.slice(p.length));
    }
  }
  // Los verbos fuertes cambian la vocal al conjugarse: sehen → sieht,
  // geben → gibt, werfen → wirft, fahren → fährt. Se generan esas variantes
  // para no marcar como malo un ejemplo que está bien.
  for (const f of [...con]) {
    con.push(
      f.replace(/e/, 'ie'), f.replace(/e/, 'i'),
      f.replace(/a/, 'ä'), f.replace(/o/, 'ö'), f.replace(/u/, 'ü')
    );
  }
  // Los cuatro verbos que no se parecen en nada a su infinitivo. Cambiar la
  // vocal no basta: sein da "bin", "ist", "war"; haben da "hat". Son los
  // primeros que se aprenden y sus ejemplos son de los mas utiles, asi que no
  // tiene sentido empeorarlos para que el revisor se quede tranquilo.
  const IRREGULARES = {
    sein: ['bin', 'bist', 'ist', 'sind', 'seid', 'war', 'waren', 'gewesen'],
    haben: ['habe', 'hast', 'hat', 'haben', 'habt', 'hatte', 'gehabt'],
    werden: ['werde', 'wirst', 'wird', 'wurde', 'geworden'],
    mögen: ['mag', 'magst', 'mochte', 'möchte', 'möchten']
  };
  for (const f of [...con]) {
    const extra = IRREGULARES[f.toLowerCase()];
    if (extra) con.push(...extra);
  }

  // Tres letras y no cuatro: "sagen" sale como "sagt" y "Oma" no da para
  // mas. Es permisivo a proposito; lo que se busca es el ejemplo copiado de
  // la entrada de al lado, donde la palabra no aparece ni de lejos.
  return con.map((x) => x.slice(0, 3).toLowerCase());
}

// Se comparan solo letras: "E-Mail-Adresse" en la entrada y en la frase
// llevan guiones en sitios distintos y no casaban.
const sinAcentos = (s) => String(s).toLowerCase()
  .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')
  .replace(/[^a-z]/g, '');

// ¿La frase habla de tú o de usted?
function trato(txt) {
  const s = ' ' + String(txt).toLowerCase() + ' ';
  const tu = /\b(du|dich|dir|dein|deine|deinen|deinem|deiner|ihr|euch|euer)\b/.test(s);
  const usted = /\bsie\b/.test(String(txt)) && /\bSie\b/.test(String(txt));
  return { tu, usted };
}

for (const l of KURSBUCH.lektionen) {
  const donde = lektionLabel(l);

  // ---- vocabulario ----
  const deck = lektionDeckTodo(l);
  const vistas = new Set();
  for (const c of deck?.cards || []) {
    if (vistas.has(c.de)) nota('repetida', donde, `la palabra "${c.de}" sale dos veces`);
    vistas.add(c.de);
    if (!c.ex) { nota('sin ejemplo', donde, `"${c.de}" no tiene frase`); continue; }
    const rs = raices(c.de);
    const frase = sinAcentos(c.ex);
    if (rs.length && !rs.some((r) => frase.includes(sinAcentos(r)))) {
      nota('ejemplo suelto', donde, `"${c.de}" → "${c.ex}"`);
    }
  }

  // ---- kommunikation ----
  const frases = new Set();
  for (const k of lektionKommunikation(l)) {
    for (const w of k.wendungen || []) {
      if (frases.has(w.de)) nota('repetida', donde, `la frase "${w.de}" sale dos veces`);
      frases.add(w.de);
      const r = respuestaDe(w.de);
      if (!r) continue;
      const a = trato(w.de);
      const b = trato(r.de);
      if (a.usted && b.tu) nota('trato', donde, `"${w.de}" es de usted y la respuesta tutea: "${r.de}"`);
      if (a.tu && b.usted) nota('trato', donde, `"${w.de}" tutea y la respuesta es de usted: "${r.de}"`);
    }
  }

  // ---- gramática ----
  for (const rg of l.grammatik || []) {
    const d = DATA[ruleKey(rg)];
    for (const p of d?.picks || []) {
      // Sin hueco vale SI es una pregunta de gramatica ("Welchen Kasus
      // verlangt mit?"): se pinta entera y se contesta eligiendo, que es
      // justo lo que MultipleChoice hace cuando la frase no trae ___. Lo que
      // no vale es una afirmacion sin hueco: ahi no hay nada que preguntar.
      if (!String(p.s).includes('___') && !/\?\s*$/.test(String(p.s))) {
        nota('hueco', donde, `sin hueco y no es pregunta: "${p.s}"`);
      }
      if (p.d?.includes(p.a)) nota('hueco', donde, `la respuesta está entre los distractores: "${p.s}"`);
      if (!p.t) nota('hueco', donde, `sin traducción: "${p.s}"`);
    }
    for (const c of d?.clozes || []) {
      const huecos = (String(c.txt).match(/___/g) || []).length;
      if (huecos !== (c.a || []).length) {
        nota('texto', donde, `${huecos} huecos pero ${(c.a || []).length} respuestas: "${String(c.txt).slice(0, 50)}…"`);
      }
      // Lo que importa no es que un señuelo coincida con una respuesta -el
      // banco puede llevar una palabra repetida sin problema-, sino que el
      // banco tenga DE VERDAD alternativas falsas. Sin ellas se resuelve por
      // descarte y el texto no mide nada.
      const utiles = (c.extra || []).filter((x) => !(c.a || []).includes(x));
      if (utiles.length < 2) {
        nota('texto sin señuelos', donde, `solo ${utiles.length} alternativa(s) falsa(s): "${String(c.txt).slice(0, 45)}…"`);
      }
    }
  }
}

const porTipo = {};
for (const a of avisos) (porTipo[a.tipo] ||= []).push(a);

for (const [tipo, lista] of Object.entries(porTipo)) {
  console.log(`\n${tipo.toUpperCase()} (${lista.length})`);
  for (const a of lista.slice(0, 20)) console.log(`   ${a.donde.slice(0, 30).padEnd(32)} ${a.texto}`);
  if (lista.length > 20) console.log(`   … y ${lista.length - 20} más`);
}

console.log(avisos.length ? `\n${avisos.length} cosas que mirar` : '\n✓ nada que mirar');
