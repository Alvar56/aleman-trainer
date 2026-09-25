// Conjugador local. Sin IA, sin red, sin esperas.
//
// El botón "Conjugar" del vocabulario le pedía la tabla a la IA: un minuto de
// espera, cuota gastada, y en la versión de un fichero directamente no
// funcionaba. Pero conjugar en alemán no necesita a nadie pensando: es una
// regla con una lista de excepciones.
//
// Cómo está montado:
//
//   1. Se separa el prefijo, si lo hay. `aufstehen` es `auf` + `stehen`, y el
//      que manda es `stehen`. Con eso, una sola entrada de `stehen` sirve para
//      aufstehen, verstehen, bestehen y entstehen.
//   2. Se busca la base en la tabla de irregulares (abajo). Si está, de ahí
//      salen el cambio de vocal del presente, el Präteritum y el participio.
//   3. Si no está, se conjuga como verbo débil, que es la mayoría.
//
// Lo que NO hace: Konjunktiv, pasiva, ni inventarse frases de ejemplo con
// objeto. Los ejemplos van con adverbios de tiempo -"Gestern fuhr ich"- porque
// eso es correcto con cualquier verbo, lleve objeto o no. Una plantilla con
// objeto ("Ich koche das Auto") sería más vistosa y a veces absurda.

import { ejemplosEnCastellano } from './conjugadorEs.js';

// Prefijos separables. Ordenados de más largo a más corto: si no, `an` se
// llevaría por delante a `anzu`, y `auf` a `aufeinander`.
const SEPARABLES = [
  'auseinander', 'zusammen', 'gegenüber', 'herunter', 'entgegen', 'hinüber',
  'herüber', 'zurecht', 'zurück', 'vorbei', 'weiter', 'hinein', 'herein',
  'hinaus', 'heraus', 'hinauf', 'herauf', 'nieder', 'durch', 'statt',
  'unter', 'wieder', 'gegen', 'hinter', 'über', 'voll', 'fort', 'fest',
  'frei', 'heim', 'kennen', 'nach', 'vor', 'weg', 'zusammen', 'mit',
  'fern', 'teil', 'spazieren', 'sitzen', 'kaputt', 'wach', 'satt',
  'ein', 'auf', 'aus', 'ab', 'an', 'bei', 'her', 'hin', 'los', 'um', 'zu'
].sort((a, b) => b.length - a.length);

// Verbos del tiempo atmosferico: no tienen "yo". El ejemplo va con "es"
// ("Heute regnet es"), que es como se dicen; con "ich" salia "Heute regne
// ich", que no significa nada.
const IMPERSONALES = ['regnen', 'schneien', 'donnern', 'blitzen', 'hageln', 'nieseln', 'dämmern'];

// Prefijos inseparables: no se van al final y el participio NO lleva ge-.
const INSEPARABLES = ['ver', 'be', 'er', 'ent', 'emp', 'ge', 'miss', 'zer'];

// Irregulares, por verbo BASE. Para cada uno:
//   du/er → el cambio de vocal del presente (null si no cambia)
//   prät  → la raíz del Präteritum (ich/er, sin terminación)
//   pp    → el participio
//   aux   → haben o sein
const IRREGULARES = {
  sein:       { du: 'bist', er: 'ist', pratRaiz: 'war', pratIch: 'war', pp: 'gewesen', aux: 'sein', ich: 'bin', wir: 'sind', ihr: 'seid' },
  haben:      { du: 'hast', er: 'hat', pratRaiz: 'hatt', pp: 'gehabt', aux: 'haben' },
  werden:     { du: 'wirst', er: 'wird', pratRaiz: 'wurd', pp: 'geworden', aux: 'sein' },
  gehen:      { pratRaiz: 'ging', pp: 'gegangen', aux: 'sein' },
  stehen:     { pratRaiz: 'stand', pp: 'gestanden', aux: 'haben' },
  kommen:     { pratRaiz: 'kam', pp: 'gekommen', aux: 'sein' },
  fahren:     { du: 'fährst', er: 'fährt', pratRaiz: 'fuhr', pp: 'gefahren', aux: 'sein' },
  laufen:     { du: 'läufst', er: 'läuft', pratRaiz: 'lief', pp: 'gelaufen', aux: 'sein' },
  fallen:     { du: 'fällst', er: 'fällt', pratRaiz: 'fiel', pp: 'gefallen', aux: 'sein' },
  halten:     { du: 'hältst', er: 'hält', pratRaiz: 'hielt', pp: 'gehalten', aux: 'haben' },
  schlafen:   { du: 'schläfst', er: 'schläft', pratRaiz: 'schlief', pp: 'geschlafen', aux: 'haben' },
  tragen:     { du: 'trägst', er: 'trägt', pratRaiz: 'trug', pp: 'getragen', aux: 'haben' },
  laden:      { du: 'lädst', er: 'lädt', pratRaiz: 'lud', pp: 'geladen', aux: 'haben' },
  hängen:     { pratRaiz: 'hing', pp: 'gehangen', aux: 'haben' },
  sitzen:     { du: 'sitzt', er: 'sitzt', pratRaiz: 'saß', pp: 'gesessen', aux: 'haben' },
  bitten:     { pratRaiz: 'bat', pp: 'gebeten', aux: 'haben' },
  schlagen:   { du: 'schlägst', er: 'schlägt', pratRaiz: 'schlug', pp: 'geschlagen', aux: 'haben' },
  heben:      { pratRaiz: 'hob', pp: 'gehoben', aux: 'haben' },
  weisen:     { pratRaiz: 'wies', pp: 'gewiesen', aux: 'haben' },
  meiden:     { pratRaiz: 'mied', pp: 'gemieden', aux: 'haben' },
  gleichen:   { pratRaiz: 'glich', pp: 'geglichen', aux: 'haben' },
  schieben:   { pratRaiz: 'schob', pp: 'geschoben', aux: 'haben' },
  gelten:     { du: 'giltst', er: 'gilt', pratRaiz: 'galt', pp: 'gegolten', aux: 'haben' },
  greifen:    { pratRaiz: 'griff', pp: 'gegriffen', aux: 'haben' },
  schneiden:  { pratRaiz: 'schnitt', pp: 'geschnitten', aux: 'haben' },
  steigen:    { pratRaiz: 'stieg', pp: 'gestiegen', aux: 'sein' },
  schweigen:  { pratRaiz: 'schwieg', pp: 'geschwiegen', aux: 'haben' },
  leihen:     { pratRaiz: 'lieh', pp: 'geliehen', aux: 'haben' },
  wachsen:    { du: 'wächst', er: 'wächst', pratRaiz: 'wuchs', pp: 'gewachsen', aux: 'sein' },
  waschen:    { du: 'wäschst', er: 'wäscht', pratRaiz: 'wusch', pp: 'gewaschen', aux: 'haben' },
  braten:     { du: 'brätst', er: 'brät', pratRaiz: 'briet', pp: 'gebraten', aux: 'haben' },
  raten:      { du: 'rätst', er: 'rät', pratRaiz: 'riet', pp: 'geraten', aux: 'haben' },
  stoßen:     { du: 'stößt', er: 'stößt', pratRaiz: 'stieß', pp: 'gestoßen', aux: 'haben' },
  fliegen:    { pratRaiz: 'flog', pp: 'geflogen', aux: 'sein' },
  ziehen:     { pratRaiz: 'zog', pp: 'gezogen', aux: 'haben' },
  bieten:     { pratRaiz: 'bot', pp: 'geboten', aux: 'haben' },
  gießen:     { du: 'gießt', er: 'gießt', pratRaiz: 'goss', pp: 'gegossen', aux: 'haben' },
  genießen:   { du: 'genießt', er: 'genießt', pratRaiz: 'genoss', pp: 'genossen', aux: 'haben' },
  schließen:  { du: 'schließt', er: 'schließt', pratRaiz: 'schloss', pp: 'geschlossen', aux: 'haben' },
  entscheiden:{ pratRaiz: 'entschied', pp: 'entschieden', aux: 'haben' },
  scheiden:   { pratRaiz: 'schied', pp: 'geschieden', aux: 'haben' },
  streichen:  { pratRaiz: 'strich', pp: 'gestrichen', aux: 'haben' },
  treiben:    { pratRaiz: 'trieb', pp: 'getrieben', aux: 'haben' },
  schaffen:   { pratRaiz: 'schaffte', pratDebil: true, pp: 'geschafft', aux: 'haben' },
  lesen:      { du: 'liest', er: 'liest', pratRaiz: 'las', pp: 'gelesen', aux: 'haben' },
  sehen:      { du: 'siehst', er: 'sieht', pratRaiz: 'sah', pp: 'gesehen', aux: 'haben' },
  essen:      { du: 'isst', er: 'isst', pratRaiz: 'aß', pp: 'gegessen', aux: 'haben' },
  geben:      { du: 'gibst', er: 'gibt', pratRaiz: 'gab', pp: 'gegeben', aux: 'haben' },
  nehmen:     { du: 'nimmst', er: 'nimmt', pratRaiz: 'nahm', pp: 'genommen', aux: 'haben' },
  sprechen:   { du: 'sprichst', er: 'spricht', pratRaiz: 'sprach', pp: 'gesprochen', aux: 'haben' },
  treffen:    { du: 'triffst', er: 'trifft', pratRaiz: 'traf', pp: 'getroffen', aux: 'haben' },
  helfen:     { du: 'hilfst', er: 'hilft', pratRaiz: 'half', pp: 'geholfen', aux: 'haben' },
  werfen:     { du: 'wirfst', er: 'wirft', pratRaiz: 'warf', pp: 'geworfen', aux: 'haben' },
  bleiben:    { pratRaiz: 'blieb', pp: 'geblieben', aux: 'sein' },
  schreiben:  { pratRaiz: 'schrieb', pp: 'geschrieben', aux: 'haben' },
  steigen:    { pratRaiz: 'stieg', pp: 'gestiegen', aux: 'sein' },
  schweigen:  { pratRaiz: 'schwieg', pp: 'geschwiegen', aux: 'haben' },
  ziehen:     { pratRaiz: 'zog', pp: 'gezogen', aux: 'haben' },
  fliegen:    { pratRaiz: 'flog', pp: 'geflogen', aux: 'sein' },
  verlieren:  { pratRaiz: 'verlor', pp: 'verloren', aux: 'haben' },
  schließen:  { pratRaiz: 'schloss', pp: 'geschlossen', aux: 'haben' },
  finden:     { pratRaiz: 'fand', pp: 'gefunden', aux: 'haben' },
  singen:     { pratRaiz: 'sang', pp: 'gesungen', aux: 'haben' },
  springen:   { pratRaiz: 'sprang', pp: 'gesprungen', aux: 'sein' },
  trinken:    { pratRaiz: 'trank', pp: 'getrunken', aux: 'haben' },
  gewinnen:   { pratRaiz: 'gewann', pp: 'gewonnen', aux: 'haben' },
  beginnen:   { pratRaiz: 'begann', pp: 'begonnen', aux: 'haben' },
  schwimmen:  { pratRaiz: 'schwamm', pp: 'geschwommen', aux: 'sein' },
  bringen:    { pratRaiz: 'brachte', pratDebil: true, pp: 'gebracht', aux: 'haben' },
  denken:     { pratRaiz: 'dachte', pratDebil: true, pp: 'gedacht', aux: 'haben' },
  kennen:     { pratRaiz: 'kannte', pratDebil: true, pp: 'gekannt', aux: 'haben' },
  rufen:      { pratRaiz: 'rief', pp: 'gerufen', aux: 'haben' },
  heißen:     { du: 'heißt', er: 'heißt', pratRaiz: 'hieß', pp: 'geheißen', aux: 'haben' },
  streichen:  { pratRaiz: 'strich', pp: 'gestrichen', aux: 'haben' },
  stoßen:     { du: 'stößt', er: 'stößt', pratRaiz: 'stieß', pp: 'gestoßen', aux: 'haben' },
  waschen:    { du: 'wäschst', er: 'wäscht', pratRaiz: 'wusch', pp: 'gewaschen', aux: 'haben' },
  wissen:     { ich: 'weiß', du: 'weißt', er: 'weiß', pratRaiz: 'wusste', pratDebil: true, pp: 'gewusst', aux: 'haben' },
  // Modales: singular sin terminacion y con otra vocal.
  können:     { ich: 'kann', du: 'kannst', er: 'kann', pratRaiz: 'konnte', pratDebil: true, pp: 'gekonnt', aux: 'haben' },
  müssen:     { ich: 'muss', du: 'musst', er: 'muss', pratRaiz: 'musste', pratDebil: true, pp: 'gemusst', aux: 'haben' },
  dürfen:     { ich: 'darf', du: 'darfst', er: 'darf', pratRaiz: 'durfte', pratDebil: true, pp: 'gedurft', aux: 'haben' },
  wollen:     { ich: 'will', du: 'willst', er: 'will', pratRaiz: 'wollte', pratDebil: true, pp: 'gewollt', aux: 'haben' },
  sollen:     { ich: 'soll', du: 'sollst', er: 'soll', pratRaiz: 'sollte', pratDebil: true, pp: 'gesollt', aux: 'haben' },
  mögen:      { ich: 'mag', du: 'magst', er: 'mag', pratRaiz: 'mochte', pratDebil: true, pp: 'gemocht', aux: 'haben' },
  // "möchten" es el Konjunktiv de mögen: no tiene pasado propio, se dice
  // "wollte", ni participio, asi que se apunta el de mögen.
  möchten:    { ich: 'möchte', du: 'möchtest', er: 'möchte', wir: 'möchten', ihr: 'möchtet', pratRaiz: 'wollte', pratDebil: true, pp: 'gewollt', aux: 'haben' },
  tun:        { du: 'tust', er: 'tut', pratRaiz: 'tat', pp: 'getan', aux: 'haben' }
};

// Verbos que se mueven y por eso van con "sein" aunque sean regulares.
const CON_SEIN = ['wandern', 'reisen', 'klettern', 'joggen', 'passieren', 'folgen', 'begegnen'];

// El auxiliar NO se hereda del verbo base: `stehen` va con haben, pero
// `aufstehen` va con sein. Pasa con los de movimiento y los de cambio de
// estado en cuanto llevan prefijo, asi que van escritos uno a uno. Es una
// lista larga y aburrida, pero es la verdad; una regla automatica acertaria
// la mayoria y fallaria justo en los que mas se usan.
const AUX_ENTERO = {
  // Heredan el auxiliar de su raiz y no les toca: "das hat mir gefallen",
  // "ich habe einen Brief bekommen", aunque fallen y kommen vayan con sein.
  gefallen: 'haben',
  bekommen: 'haben',
  aufstehen: 'sein',
  aufwachen: 'sein',
  einschlafen: 'sein',
  // Mudarse de casa. `sich umziehen` (cambiarse de ropa) va con haben,
  // pero ese es reflexivo y en el libro aparece el de la mudanza.
  umziehen: 'sein',
  einsteigen: 'sein',
  aussteigen: 'sein',
  umsteigen: 'sein',
  abfahren: 'sein',
  losfahren: 'sein',
  ankommen: 'sein',
  zurückkommen: 'sein',
  mitkommen: 'sein',
  vorbeikommen: 'sein',
  ausgehen: 'sein',
  weggehen: 'sein',
  spazierengehen: 'sein',
  durchfallen: 'sein',
  hinfallen: 'sein',
  auswandern: 'sein',
  einwandern: 'sein',
  umsteigen: 'sein',
  sitzenbleiben: 'sein',
  aufwachsen: 'sein',
  einziehen: 'sein',
  ausziehen: 'sein',
  wegfahren: 'sein',
  hinfahren: 'sein',
  zurückfahren: 'sein',
  weglaufen: 'sein',
  davonlaufen: 'sein'
};

const PRONOMBRES = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];

// Verbos que EMPIEZAN por algo que parece un prefijo y no lo es. Sin esto,
// "antworten" se leia como "an + tworten" y salia "ich tworte an".
const SIN_PREFIJO = ['antworten', 'ändern', 'angeln', 'anders', 'enden', 'ernten', 'einen', 'umen'];

// Los de prefijo ambiguo (uber-, unter-, um-, wieder-, durch-) que van
// SIEMPRE juntos: "ich ubersetze den Text", no "ich setze den Text uber".
// El participio tampoco lleva ge-: ubersetzt, unterstutzt, wiederholt.
const INSEPARABLES_VERBOS = [
  'überweisen', 'überzeugen', 'übersetzen', 'übernachten', 'übernehmen',
  'überlegen', 'überraschen', 'überprüfen', 'überqueren', 'übertreiben',
  'unterstützen', 'unterschreiben', 'unterhalten', 'unterrichten',
  'unterbrechen', 'unternehmen', 'untersuchen', 'wiederholen', 'umarmen',
  'durchsuchen', 'hinterlassen', 'vollenden', 'widersprechen'
];

// Separa el prefijo, si lo hay. Devuelve { prefijo, base, inseparable }.
//
// En los dos casos se separa la base: la tabla de fuertes va por verbo base,
// y asi una sola entrada de "stehen" sirve para aufstehen, verstehen y
// bestehen. Lo que cambia es donde vuelve el prefijo al conjugar: los
// separables se van al final de la frase ("ich stehe auf") y los
// inseparables se quedan pegados delante ("ich bestehe").
function separar(inf) {
  if (SIN_PREFIJO.includes(inf)) return { prefijo: '', base: inf, inseparable: false };

  for (const p of INSEPARABLES) {
    if (inf.startsWith(p) && inf.length > p.length + 3) {
      return { prefijo: p, base: inf.slice(p.length), inseparable: true };
    }
  }
  if (INSEPARABLES_VERBOS.includes(inf)) {
    for (const p of SEPARABLES) {
      if (inf.startsWith(p)) return { prefijo: p, base: inf.slice(p.length), inseparable: true };
    }
  }
  for (const p of SEPARABLES) {
    if (inf.startsWith(p) && inf.length > p.length + 3) return { prefijo: p, base: inf.slice(p.length), inseparable: false };
  }
  return { prefijo: '', base: inf, inseparable: false };
}

// La raíz de un verbo débil: kochen -> koch, sammeln -> sammel.
function raiz(inf) {
  if (inf.endsWith('en')) return inf.slice(0, -2);
  if (inf.endsWith('ern') || inf.endsWith('eln')) return inf.slice(0, -1);
  return inf.replace(/n$/, '');
}

// ¿Hace falta -e- de apoyo? arbeiten -> du arbeitest, no "arbeitst".
//
// La piden las raices acabadas en -d o -t, y las de m/n con otra consonante
// delante: atmen -> atmete, rechnen -> rechnete, öffnen -> öffnete. Pero NO
// si esa consonante es l, r, m, n o h, que se pronuncian de seguido: lernen
// -> lernte, wohnen -> wohnte, filmen -> filmte. Antes entraban todas y
// salian "wohnete", "lernete" y "gelernet".
function necesitaE(r) {
  if (/[dt]$/.test(r)) return true;
  return /[^aeiouäöülrmnh][mn]$/.test(r);
}

function presenteDebil(r, inf) {
  const e = necesitaE(r) ? 'e' : '';
  const sFinal = /(?:s|ß|z|x)$/.test(r) ? 't' : e + 'st';

  // -ern y -eln: wir/sie es el infinitivo tal cual, no la raiz + en.
  // "wir wandern", no "wir wanderen".
  const enEln = /(?:ern|eln)$/.test(inf || '');
  const nosotros = enEln ? inf : r + 'en';

  // Y en los de -eln se cae la -e- de la raiz en la primera persona:
  // "ich sammle", no "ich sammele".
  const yo = /eln$/.test(inf || '') ? r.replace(/el$/, 'l') + 'e' : r + 'e';

  return [
    yo,
    r + sFinal,
    r + e + 't',
    nosotros,
    r + e + 't',
    nosotros
  ];
}

function preteritoDebil(r) {
  const e = necesitaE(r) ? 'e' : '';
  const t = r + e + 'te';
  return [t, t + 'st', t, t + 'n', t + 't', t + 'n'];
}

function participioDebil(inf, r, inseparable) {
  const e = necesitaE(r) ? 'e' : '';
  const fin = r + e + 't';
  // Los acabados en -ieren y los de prefijo inseparable no llevan ge-.
  if (inseparable || inf.endsWith('ieren')) return fin;
  return 'ge' + fin;
}

function presenteFuerte(base, irr) {
  const r = raiz(base);
  const d = presenteDebil(r, base);
  return [
    irr.ich || d[0],
    irr.du || d[1],
    irr.er || d[2],
    irr.wir || d[3],
    irr.ihr || d[4],
    irr.wir || d[5]
  ];
}

function preteritoFuerte(irr) {
  const p = irr.pratRaiz;
  // Los mixtos (bringen -> brachte) ya traen la terminación puesta.
  if (irr.pratDebil) return [p, p.replace(/e$/, 'est'), p, p.replace(/e$/, 'en'), p.replace(/e$/, 'et'), p.replace(/e$/, 'en')];
  // Con -e- de apoyo cuando la raiz acaba en sibilante (du) o en d/t (du e
  // ihr): "du sassest", "du standest", "ihr standet".
  const sib = /(?:s|ß|z)$/.test(p);
  const dt = /[dt]$/.test(p);
  const du = p + (sib || dt ? 'est' : 'st');
  const ihr = p + (dt ? 'et' : 't');
  return [p, du, p, p + 'en', ihr, p + 'en'];
}

// Conjuga un infinitivo. Devuelve null si no parece un verbo.
export function conjugar(infinitivo, traduccion = '') {
  const inf = String(infinitivo || '').trim();
  if (!/^[a-zäöüß]+(en|eln|ern|n)$/.test(inf)) return null;

  const { prefijo, base, inseparable } = separar(inf);
  const irr = IRREGULARES[base];
  const r = raiz(base);

  const presente = irr ? presenteFuerte(base, irr) : presenteDebil(r, base);
  const preterito = irr ? preteritoFuerte(irr) : preteritoDebil(r);

  // El participio del verbo entero: aufstehen -> auf + gestanden.
  //
  // Con prefijo inseparable se cae el ge- de la raiz: stehen hace
  // "gestanden", pero bestehen hace "bestanden", no "begestanden".
  const ppCrudo = irr ? irr.pp : participioDebil(base, r, inseparable);
  const ppBase = inseparable ? ppCrudo.replace(/^ge/, '') : ppCrudo;
  const participio = prefijo ? prefijo + ppBase : ppBase;

  const aux = AUX_ENTERO[inf] || (irr ? irr.aux : (CON_SEIN.includes(base) ? 'sein' : 'haben'));
  const auxForms = aux === 'sein'
    ? ['bin', 'bist', 'ist', 'sind', 'seid', 'sind']
    : ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'];

  // En una frase normal el prefijo separable se va al final ("ich stehe auf")
  // y el inseparable se queda pegado delante ("ich bestehe").
  const conPrefijo = (forma) => {
    if (!prefijo) return forma;
    return inseparable ? prefijo + forma : forma + ' … ' + prefijo;
  };

  const tiempos = [
    { name: 'Präsens', conjugations: PRONOMBRES.map((p, i) => ({ pronoun: p, form: conPrefijo(presente[i]) })) },
    { name: 'Präteritum', conjugations: PRONOMBRES.map((p, i) => ({ pronoun: p, form: conPrefijo(preterito[i]) })) },
    { name: 'Perfekt', conjugations: PRONOMBRES.map((p, i) => ({ pronoun: p, form: auxForms[i] + ' … ' + participio })) }
  ];

  // Con "ich", salvo los del tiempo, que van con "es" y en tercera persona.
  const impersonal = IMPERSONALES.includes(base);
  const sujeto = impersonal ? 'es' : 'ich';
  const quien = impersonal ? 2 : 0;
  // La frase del ejemplo: "stehe ich auf" (separable), "bestehe ich"
  // (inseparable), "wohne ich" (sin prefijo).
  const fraseConAdv = (forma, adv) => {
    if (!prefijo) return `${forma} ${sujeto} ${adv}`;
    return inseparable ? `${prefijo}${forma} ${sujeto} ${adv}` : `${forma} ${sujeto} ${adv} ${prefijo}`;
  };

  const castellano = ejemplosEnCastellano(traduccion);

  return {
    verb: inf,
    infinitivo: inf,
    prefijoSeparable: prefijo || null,
    irregular: !!irr,
    aux,
    participio,
    tenses: tiempos,
    examples: [
      { tense: 'Präsens', de: cap(`heute ${fraseConAdv(presente[quien], 'am Nachmittag')}.`), es: castellano?.presente || '' },
      { tense: 'Präteritum', de: cap(`gestern ${fraseConAdv(preterito[quien], 'den ganzen Tag')}.`), es: castellano?.pasado || '' },
      { tense: 'Perfekt', de: cap(`${sujeto} ${auxForms[quien]} schon mehrmals ${participio}.`), es: castellano?.perfecto || '' }
    ]
  };
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ¿Sabemos conjugarlo? Lo usa el botón para no ofrecerse con un sustantivo.
export function sePuedeConjugar(de) {
  return !!conjugar(primeraPalabra(de));
}

// De "sich freuen (über + Akk.)" saca "freuen": el reflexivo y el paréntesis
// no son parte del verbo que se conjuga.
export function primeraPalabra(de) {
  const limpio = String(de || '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\bsich\b/g, ' ')
    .trim();
  return (limpio.split(/[\s,/]+/)[0] || '').toLowerCase();
}
