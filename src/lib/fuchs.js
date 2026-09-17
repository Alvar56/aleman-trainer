// Fuchs: el zorrito que te acompaña. Guarda su nombre, su color y lo que
// lleva puesto, y calcula qué complementos tienes desbloqueados.
//
// Los desbloqueos salen de cosas que ya mide la app: coronas (lecciones
// dominadas), nivel (XP) y récord de aciertos seguidos. Nada nuevo que llevar
// la cuenta por separado.

import { storage } from './storage.js';
import { BAENDE } from './kursbuch/index.js';
import { lektionProgress } from './lektionProgress.js';
import { getLevel, getStreak } from './streak.js';
import { bestStreak } from './rachas.js';
import { saldo, gastar } from './monedas.js';
import { tc } from './contenido/index.js';

const KEY = 'fuchs';

// Cada color lleva sus tres tonos: el pelo, su sombra y la luz de arriba.
// Sin eso la cara sale plana. El naranja viene de serie; el resto NO se compra:
// se abre subiendo de nivel, que es lo unico que sube solo con practicar. Asi
// el zorro cambia de aspecto segun avanzas, sin tener que pagar por ello.
export const COLORES = [
  { id: 'naranja', de: 'Orange', es: 'Naranja', en: 'Orange', fur: '#e8833a', sombra: '#c2611f', luzPelo: '#ffa25c', luz: '#ffe2c2' },
  { id: 'crema', de: 'Creme', es: 'Crema', en: 'Cream', fur: '#e0b487', sombra: '#b98d61', luzPelo: '#f6d3ac', luz: '#fff2e0', req: { tipo: 'nivel', n: 2 } },
  { id: 'rojo', de: 'Rotbraun', es: 'Rojizo', en: 'Red', fur: '#d1553f', sombra: '#a63a28', luzPelo: '#ef7a5f', luz: '#ffd6c8', req: { tipo: 'nivel', n: 3 } },
  { id: 'marron', de: 'Schokolade', es: 'Chocolate', en: 'Chocolate', fur: '#8a5a3b', sombra: '#66402a', luzPelo: '#a97550', luz: '#e6cdb8', req: { tipo: 'nivel', n: 5 } },
  { id: 'gris', de: 'Arktis', es: 'Ártico', en: 'Arctic', fur: '#9fb3c8', sombra: '#7a8fa6', luzPelo: '#c3d5e8', luz: '#f2f7fc', req: { tipo: 'nivel', n: 7 } },
  { id: 'verde', de: 'Wald', es: 'Bosque', en: 'Forest', fur: '#5c9e6b', sombra: '#3f7a4c', luzPelo: '#7cc08b', luz: '#dcf3e2', req: { tipo: 'nivel', n: 9 } },
  { id: 'negro', de: 'Nacht', es: 'Nocturno', en: 'Night', fur: '#4a4a5a', sombra: '#33333f', luzPelo: '#66667a', luz: '#cfcfdd', req: { tipo: 'nivel', n: 11 } },
  { id: 'morado', de: 'Lila', es: 'Morado', en: 'Purple', fur: '#8b6bc7', sombra: '#6a4ba3', luzPelo: '#a98be0', luz: '#e8dcfa', req: { tipo: 'nivel', n: 13 } },
  { id: 'rosa', de: 'Rosa', es: 'Rosa', en: 'Pink', fur: '#e07aa8', sombra: '#b85585', luzPelo: '#f79ac4', luz: '#ffe0ef', req: { tipo: 'nivel', n: 15 } },
  { id: 'hielo', de: 'Eis', es: 'Hielo', en: 'Ice', fur: '#6fc3d9', sombra: '#4a9db3', luzPelo: '#95dced', luz: '#dcf6fc', req: { tipo: 'nivel', n: 18 } },
  { id: 'fuego', de: 'Feuer', es: 'Fuego', en: 'Fire', fur: '#e8552f', sombra: '#b3341a', luzPelo: '#ff8459', luz: '#ffd9c0', req: { tipo: 'nivel', n: 21 } },
  { id: 'dorado', de: 'Gold', es: 'Dorado', en: 'Golden', fur: '#d9a520', sombra: '#a87c12', luzPelo: '#f0c344', luz: '#fff0bc', req: { tipo: 'nivel', n: 25 } }
];

// Tres vias, y cada una premia una cosa distinta:
//   · monedas  → lo que compras practicando, la mayoria del armario
//   · 👑       → TODO lo de rey. No se vende: se domina lección a lección
//   · dias     → el equipo de deporte, que es cuestion de constancia
//   · racha    → las particulas
export const COMPLEMENTOS = [
  // ---- cabeza ----
  { id: 'nada', de: 'Nichts', ranura: 'cabeza', es: 'Sin nada', en: 'Nothing', precio: 0 },
  { id: 'cinta', de: 'Stirnband', ranura: 'cabeza', es: 'Cinta del pelo', en: 'Headband', precio: 100 },
  { id: 'flor', de: 'Blume', ranura: 'cabeza', es: 'Flor', en: 'Flower', precio: 120 },
  { id: 'gorroLana', de: 'Wollmütze', ranura: 'cabeza', es: 'Gorro de lana', en: 'Wool beanie', precio: 160 },
  { id: 'gorra', de: 'Kappe', ranura: 'cabeza', es: 'Gorra', en: 'Cap', precio: 180 },
  { id: 'orejeras', de: 'Ohrenschützer', ranura: 'cabeza', es: 'Orejeras', en: 'Earmuffs', precio: 220 },
  { id: 'boina', de: 'Baskenmütze', ranura: 'cabeza', es: 'Boina', en: 'Beret', precio: 240 },
  { id: 'auriculares', de: 'Kopfhörer', ranura: 'cabeza', es: 'Auriculares', en: 'Headphones', precio: 280 },
  { id: 'casco', de: 'Fahrradhelm', ranura: 'cabeza', es: 'Casco de ciclista', en: 'Cycling helmet', precio: 320 },
  { id: 'chistera', de: 'Zylinder', ranura: 'cabeza', es: 'Chistera', en: 'Top hat', precio: 350 },
  { id: 'tirolerhut', de: 'Tirolerhut', ranura: 'cabeza', es: 'Sombrero tirolés', en: 'Tyrolean hat', precio: 420 },
  { id: 'corona', de: 'Königskrone', ranura: 'cabeza', es: '👑 Corona de rey', en: '👑 King crown', req: { tipo: 'coronas', n: 20 } },

  // ---- ojos ----
  { id: 'nadaOjos', de: 'Nichts', ranura: 'ojos', es: 'Sin nada', en: 'Nothing', precio: 0 },
  { id: 'gafas', de: 'Brille', ranura: 'ojos', es: 'Gafas', en: 'Glasses', precio: 100 },
  { id: 'gafasol', de: 'Sonnenbrille', ranura: 'ojos', es: 'Gafas de sol', en: 'Sunglasses', precio: 200 },
  { id: 'parche', de: 'Augenklappe', ranura: 'ojos', es: 'Parche pirata', en: 'Eye patch', precio: 260 },
  { id: 'gafasCiclismo', de: 'Sportbrille', ranura: 'ojos', es: '🚴 Gafas de ciclismo', en: '🚴 Cycling glasses', req: { tipo: 'dias', n: 75 } },
  { id: 'monoculo', de: 'Monokel', ranura: 'ojos', es: '👑 Monóculo', en: '👑 Monocle', req: { tipo: 'coronas', n: 15 } },

  // ---- cuello ----
  { id: 'nadaCuello', de: 'Nichts', ranura: 'cuello', es: 'Sin nada', en: 'Nothing', precio: 0 },
  { id: 'bufanda', de: 'Schal', ranura: 'cuello', es: 'Bufanda', en: 'Scarf', precio: 120 },
  { id: 'collar', de: 'Halsband', ranura: 'cuello', es: 'Collar con cascabel', en: 'Bell collar', precio: 160 },
  { id: 'pajarita', de: 'Fliege', ranura: 'cuello', es: 'Pajarita', en: 'Bow tie', precio: 200 },
  { id: 'corbata', de: 'Krawatte', ranura: 'cuello', es: 'Corbata', en: 'Tie', precio: 240 },
  { id: 'medalla', de: 'Medaille', ranura: 'cuello', es: 'Medalla', en: 'Medal', precio: 300 },
  { id: 'capa', de: 'Königsumhang', ranura: 'cuello', es: '👑 Capa real', en: '👑 Royal cape', req: { tipo: 'coronas', n: 8 } },

  // ---- ropa ----
  { id: 'nadaRopa', de: 'Nichts', ranura: 'ropa', es: 'Sin nada', en: 'Nothing', precio: 0 },
  { id: 'camiseta', de: 'T-Shirt', ranura: 'ropa', es: 'Camiseta', en: 'T-shirt', precio: 120 },
  { id: 'rayas', de: 'Ringelshirt', ranura: 'ropa', es: 'Camiseta de rayas', en: 'Striped shirt', precio: 160 },
  { id: 'jersey', de: 'Pullover', ranura: 'ropa', es: 'Jersey', en: 'Jumper', precio: 200 },
  { id: 'sudadera', de: 'Hoodie', ranura: 'ropa', es: 'Sudadera', en: 'Hoodie', precio: 240 },
  { id: 'chaleco', de: 'Weste', ranura: 'ropa', es: 'Chaleco', en: 'Puffer vest', precio: 320 },
  { id: 'abrigo', de: 'Mantel', ranura: 'ropa', es: 'Abrigo', en: 'Coat', precio: 360 },
  { id: 'tracht', de: 'Tracht', ranura: 'ropa', es: 'Traje típico', en: 'Traditional dress', precio: 400 },
  { id: 'trachtenanzug', de: 'Trachtenanzug', ranura: 'ropa', es: 'Traje tirolés', en: 'Tyrolean suit', precio: 460 },
  { id: 'chandal', de: 'Trainingsanzug', ranura: 'ropa', es: '🏃 Chándal', en: '🏃 Tracksuit', req: { tipo: 'dias', n: 25 } },
  { id: 'trajerey', de: 'Königsrobe', ranura: 'ropa', es: '👑 Traje de rey', en: '👑 King robe', req: { tipo: 'coronas', n: 10 } },

  // ---- pies ----
  { id: 'nadaPies', de: 'Nichts', ranura: 'pies', es: 'Sin nada', en: 'Nothing', precio: 0 },
  { id: 'zapatucos', de: 'Schühchen', ranura: 'pies', es: 'Zapatucos', en: 'Little boots', precio: 100 },
  { id: 'calcetines', de: 'Socken', ranura: 'pies', es: 'Calcetines', en: 'Socks', precio: 140 },
  { id: 'botas', de: 'Stiefel', ranura: 'pies', es: 'Botas', en: 'Boots', precio: 260 },
  { id: 'zapatillas', de: 'Turnschuhe', ranura: 'pies', es: '🏃 Zapatillas', en: '🏃 Trainers', req: { tipo: 'dias', n: 50 } },
  { id: 'zapatosrey', de: 'Königsschuhe', ranura: 'pies', es: '👑 Zapatos de rey', en: '👑 King shoes', req: { tipo: 'coronas', n: 5 } },

  // ---- partículas: se ganan encadenando aciertos, y suben de intensidad ----
  { id: 'p0', de: 'Nichts', ranura: 'particulas', es: 'Nada', en: 'Nothing', precio: 0 },
  { id: 'p1', de: 'Funken', ranura: 'particulas', es: '✨ Chispas', en: '✨ Sparks', req: { tipo: 'racha', n: 10 } },
  { id: 'p2', de: 'Funken ++', ranura: 'particulas', es: '✨ Chispas ++', en: '✨ Sparks ++', req: { tipo: 'racha', n: 20 } },
  { id: 'p3', de: 'Aura', ranura: 'particulas', es: '🔥 Aura', en: '🔥 Aura', req: { tipo: 'racha', n: 30 } },
  { id: 'p4', de: 'Aura ++', ranura: 'particulas', es: '🔥 Aura ++', en: '🔥 Aura ++', req: { tipo: 'racha', n: 40 } },
  { id: 'p5', de: 'Sturm', ranura: 'particulas', es: '⚡ Tormenta', en: '⚡ Storm', req: { tipo: 'racha', n: 50 } },

  // ---- objetos: unos se compran y los tres trofeos se ganan ----
  { id: 'nadaObjeto', de: 'Nichts', ranura: 'objeto', es: 'Nada', en: 'Nothing', precio: 0 },
  { id: 'libro', de: 'Buch', ranura: 'objeto', es: 'Libro', en: 'Book', precio: 180 },
  { id: 'taza', de: 'Kaffeetasse', ranura: 'objeto', es: 'Taza de café', en: 'Coffee mug', precio: 200 },
  { id: 'brezel', de: 'Brezel', ranura: 'objeto', es: 'Brezel', en: 'Pretzel', precio: 260 },
  { id: 'paraguas', de: 'Regenschirm', ranura: 'objeto', es: 'Paraguas', en: 'Umbrella', precio: 320 },
  { id: 'globo', de: 'Luftballon', ranura: 'objeto', es: 'Globo', en: 'Balloon', precio: 380 },
  { id: 'balon', de: 'Ball-Trophäe', ranura: 'objeto', es: '🏅 Trofeo balón', en: '🏅 Ball trophy', req: { tipo: 'dias', n: 100 } },
  { id: 'trofeo', de: 'Goldpokal', ranura: 'objeto', es: '🏆 Trofeo de oro', en: '🏆 Gold trophy', req: { tipo: 'dias', n: 365 } },
  { id: 'bastonrey', de: 'Zepter', ranura: 'objeto', es: '👑 Bastón de rey', en: '👑 Royal sceptre', req: { tipo: 'coronas', n: 24 } }
];

// Cambiar de bicho es lo más caro de todo.
export const PRECIO_ANIMAL = 1000;
// Ponerle tu nombre es lo más caro de todo: es lo único que no se puede
// deshacer con otra compra, así que se gana a base de practicar.
export const PRECIO_NOMBRE = 2000;
const LLAVE_NOMBRE = 'nombre';

export function puedeCambiarNombre(f = getFuchs()) {
  return f.comprado.includes(LLAVE_NOMBRE);
}

// Devuelve { ok, saldo } igual que comprar().
export function comprarNombre() {
  const f = getFuchs();
  if (puedeCambiarNombre(f)) return { ok: true, saldo: saldo() };
  if (!gastar(PRECIO_NOMBRE)) return { ok: false, saldo: saldo() };
  setFuchs({ comprado: [...f.comprado, LLAVE_NOMBRE] });
  return { ok: true, saldo: saldo() };
}
export const ANIMALES = [
  { id: 'zorro', de: 'Fuchs', es: 'Zorro', en: 'Fox', precio: 0 },
  { id: 'gato', de: 'Katze', es: 'Gato', en: 'Cat', precio: PRECIO_ANIMAL },
  { id: 'perro', de: 'Hund', es: 'Perro', en: 'Dog', precio: PRECIO_ANIMAL },
  { id: 'conejo', de: 'Hase', es: 'Conejo', en: 'Rabbit', precio: PRECIO_ANIMAL },
  { id: 'oso', de: 'Bär', es: 'Oso', en: 'Bear', precio: PRECIO_ANIMAL },
  { id: 'buho', de: 'Eule', es: 'Búho', en: 'Owl', precio: PRECIO_ANIMAL },
  { id: 'rana', de: 'Frosch', es: 'Rana', en: 'Frog', precio: PRECIO_ANIMAL },
  { id: 'pato', de: 'Ente', es: 'Pato', en: 'Duck', precio: PRECIO_ANIMAL }
];

const DEFAULT = {
  nombre: 'Felix',
  especie: 'zorro',
  comprado: [], // ids de lo que ya has pagado
  color: 'naranja',
  cabeza: 'nada',
  ojos: 'nadaOjos',
  cuello: 'nadaCuello',
  ropa: 'nadaRopa',
  pies: 'nadaPies',
  objeto: 'nadaObjeto',
  particulas: 'p0',
  visto: [] // ids ya vistos, para avisar solo de lo nuevo
};

export function getFuchs() {
  return { ...DEFAULT, ...storage.get(KEY, {}) };
}

export function setFuchs(patch) {
  const next = { ...getFuchs(), ...patch };
  storage.set(KEY, next);
  return next;
}

export function colorDe(f = getFuchs()) {
  return COLORES.find((c) => c.id === f.color) || COLORES[0];
}

// Colores con si los tienes abiertos, para pintar el selector.
export function coloresDisponibles() {
  const l = logros();
  return COLORES.map((c) => ({ ...c, abierto: cumple(c.req, l) }));
}

// Lo gratis se tiene siempre; lo demás, si lo has comprado.
export function tienes(id, f = getFuchs()) {
  const cosa = [...COLORES, ...COMPLEMENTOS, ...ANIMALES].find((c) => c.id === id);
  if (!cosa) return false;
  // Dos maneras de tener algo: los trofeos se ganan y no se venden; lo demás
  // se paga.
  if (cosa.req) return cumple(cosa.req);
  return !cosa.precio || f.comprado.includes(id);
}

// Devuelve { ok, saldo } — ok en false si no llegabas.
export function comprar(id) {
  const f = getFuchs();
  const cosa = [...COLORES, ...COMPLEMENTOS, ...ANIMALES].find((c) => c.id === id);
  if (!cosa) return { ok: false, saldo: saldo() };
  if (tienes(id, f)) return { ok: true, saldo: saldo() };
  if (!gastar(cosa.precio)) return { ok: false, saldo: saldo() };
  setFuchs({ comprado: [...f.comprado, id] });
  return { ok: true, saldo: saldo() };
}


export function complementosDe(ranura) {
  const f = getFuchs();
  return COMPLEMENTOS.filter((c) => c.ranura === ranura).map((c) => ({
    ...c,
    abierto: tienes(c.id, f)
  }));
}

export function animalesDisponibles() {
  const f = getFuchs();
  return ANIMALES.map((a) => ({ ...a, abierto: tienes(a.id, f) }));
}

// Cuántas lecciones tienes dominadas del todo. Es la misma corona que sale en
// la lista de Grammatik. Ya no abre nada, pero se sigue enseñando como marca.
export function coronas() {
  let n = 0;
  for (const banda of BAENDE) {
    for (const l of banda.lektionen) {
      const p = lektionProgress(l);
      if (p?.grammatik >= 100) n += 1;
    }
  }
  return n;
}

export function logros() {
  const st = getStreak();
  return {
    coronas: coronas(),
    nivel: getLevel().level,
    racha: bestStreak(),
    // el record de dias, no el actual: perder un trofeo de 100 dias por
    // saltarte uno seria una crueldad
    dias: Math.max(st.current || 0, st.longest || 0),
    monedas: saldo()
  };
}

export function cumple(req, l = logros()) {
  if (!req) return true;
  if (req.tipo === 'coronas') return l.coronas >= req.n;
  if (req.tipo === 'nivel') return l.nivel >= req.n;
  if (req.tipo === 'dias') return l.dias >= req.n;
  if (req.tipo === 'racha') return l.racha >= req.n;
  return false;
}

export function textoReq(req) {
  if (!req) return '';
  const n = req.n;
  if (req.tipo === 'coronas') return `${n} Kronen`;
  if (req.tipo === 'nivel') return `Level ${n}`;
  if (req.tipo === 'dias') return `${n} Tage in Folge`;
  return `${n} richtig in Folge`;
}

// Lo que acabas de poder permitirte y aún no has visto.
export function nuevosDesbloqueos() {
  const f = getFuchs();
  const s = saldo();
  return [...COMPLEMENTOS, ...COLORES].filter(
    (c) => c.precio > 0 && !f.comprado.includes(c.id) && s >= c.precio && !f.visto.includes(c.id)
  );
}

export function marcarVisto(ids) {
  const f = getFuchs();
  const visto = [...new Set([...f.visto, ...ids])];
  return setFuchs({ visto });
}

// Preguntas de andar por casa, en alemán A2. Van aquí y no las genera la IA
// para que el zorro salude al instante al abrir la app, sin esperas.
//
// La pregunta alemana no se toca; la glosa pasa por tc() al pintarla.
export const PREGUNTAS = [
  { de: 'Na, wie geht es dir heute?', es: '¿Qué tal estás hoy?' },
  { de: 'Was hast du gestern gemacht?', es: '¿Qué hiciste ayer?' },
  { de: 'Was isst du am liebsten zum Frühstück?', es: '¿Qué desayunas más a gusto?' },
  { de: 'Wie ist das Wetter heute bei dir?', es: '¿Qué tiempo hace hoy por ahí?' },
  { de: 'Hast du am Wochenende schon etwas vor?', es: '¿Ya tienes planes para el finde?' },
  { de: 'Welche Musik hörst du gern?', es: '¿Qué música te gusta escuchar?' },
  { de: 'Was gefällt dir an Wien am besten?', es: '¿Qué es lo que más te gusta de Viena?' },
  { de: 'Erzähl mir: was machst du beruflich?', es: 'Cuéntame: ¿a qué te dedicas?' },
  { de: 'Wohin möchtest du mal reisen?', es: '¿A dónde te gustaría viajar algún día?' },
  { de: 'Was ist heute dein Plan?', es: '¿Cuál es tu plan de hoy?' },
  { de: 'Welches deutsche Wort findest du komisch?', es: '¿Qué palabra alemana te hace gracia?' },
  { de: 'Kochst du gern? Was denn?', es: '¿Te gusta cocinar? ¿El qué?' },
  { de: 'Wie kommst du zur Arbeit: U-Bahn oder Rad?', es: '¿Cómo vas al trabajo: metro o bici?' },
  { de: 'Was war das Beste an deiner Woche?', es: '¿Qué ha sido lo mejor de tu semana?' },
  { de: 'Hast du Haustiere?', es: '¿Tienes mascotas?' },
  { de: 'Stehst du gern früh auf oder lieber spät?', es: '¿Te gusta madrugar o prefieres levantarte tarde?' },
  { de: 'Was machst du normalerweise nach der Arbeit?', es: '¿Qué sueles hacer después del trabajo?' },
  { de: 'Trinkst du lieber Kaffee oder Tee?', es: '¿Prefieres café o té?' },
  { de: 'Wie oft gehst du einkaufen?', es: '¿Cada cuánto vas a la compra?' },
  { de: 'Räumst du gern auf oder schiebst du es auf?', es: '¿Te gusta ordenar o lo vas dejando?' },
  { de: 'Wann hast du zuletzt richtig gut geschlafen?', es: '¿Cuándo has dormido bien de verdad por última vez?' },
  { de: 'In welchem Bezirk wohnst du in Wien?', es: '¿En qué distrito vives en Viena?' },
  { de: 'Was ist dein Lieblingsort in der Stadt?', es: '¿Cuál es tu sitio favorito de la ciudad?' },
  { de: 'Warst du schon mal auf einem Christkindlmarkt?', es: '¿Has estado alguna vez en un mercadillo de Navidad?' },
  { de: 'Magst du österreichisches Essen? Was denn?', es: '¿Te gusta la comida austriaca? ¿El qué?' },
  { de: 'Fährst du lieber mit der U-Bahn oder mit der Straßenbahn?', es: '¿Prefieres el metro o el tranvía?' },
  { de: 'Was vermisst du am meisten aus deiner Heimat?', es: '¿Qué es lo que más echas de menos de tu tierra?' },
  { de: 'Was fällt dir am Deutschen am schwersten?', es: '¿Qué es lo que más te cuesta del alemán?' },
  { de: 'Seit wann lernst du eigentlich Deutsch?', es: '¿Desde cuándo aprendes alemán?' },
  { de: 'Sprichst du im Alltag viel Deutsch?', es: '¿Hablas mucho alemán en el día a día?' },
  { de: 'Was möchtest du diese Woche lernen?', es: '¿Qué te gustaría aprender esta semana?' },
  { de: 'Schaust du Serien auf Deutsch?', es: '¿Ves series en alemán?' },
  { de: 'Welcher Fehler passiert dir immer wieder?', es: '¿Qué error se te repite siempre?' },
  { de: 'Was machst du gern am Sonntag?', es: '¿Qué te gusta hacer los domingos?' },
  { de: 'Treibst du Sport? Welchen?', es: '¿Haces deporte? ¿Cuál?' },
  { de: 'Liest du gerade ein Buch?', es: '¿Estás leyendo algún libro?' },
  { de: 'Warst du in letzter Zeit im Kino?', es: '¿Has ido al cine últimamente?' },
  { de: 'Hast du ein Hobby, das keiner kennt?', es: '¿Tienes alguna afición que no conozca nadie?' },
  { de: 'Gehst du lieber ins Café oder ins Restaurant?', es: '¿Prefieres ir a una cafetería o a un restaurante?' },
  { de: 'Mit wem hast du heute schon gesprochen?', es: '¿Con quién has hablado ya hoy?' },
  { de: 'Wann triffst du deine Freunde am liebsten?', es: '¿Cuándo te gusta más quedar con tus amigos?' },
  { de: 'Hast du diesen Monat etwas Schönes vor?', es: '¿Tienes algún plan bonito este mes?' },
  { de: 'Wo würdest du am liebsten wohnen?', es: '¿Dónde te gustaría vivir más que en ningún sitio?' },
  { de: 'Was würdest du machen, wenn du heute freihättest?', es: '¿Qué harías si hoy tuvieras el día libre?' },
  { de: 'Worauf freust du dich gerade am meisten?', es: '¿Qué es lo que más ilusión te hace ahora mismo?' }
];

// Una pregunta al azar, con la glosa ya en el idioma de la interfaz. La
// pregunta alemana no se toca: es justo lo que el alumno tiene que leer.
export function preguntaFuchs() {
  const p = PREGUNTAS[Math.floor(Math.random() * PREGUNTAS.length)];
  return { ...p, es: tc(p.es) };
}

// Todas, traducidas. La usan las herramientas para saber que falta.
export function preguntasFuchs() {
  return PREGUNTAS.map((p) => ({ ...p, es: tc(p.es) }));
}

// Como se llama el bicho que tiene puesto, para meterlo en el prompt del
// chat. Si te compras un gato, la IA no puede seguir diciendo que es un
// zorro. El prompt esta escrito en castellano, asi que va en castellano.
export function nombreEspecie(f = getFuchs()) {
  return (ANIMALES.find((a) => a.id === f.especie) || ANIMALES[0]).es.toLowerCase();
}
