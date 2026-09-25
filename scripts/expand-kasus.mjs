import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Re-read existing database
const kasusDataPath = path.resolve(__dirname, '../src/lib/kasus_data.js');
const fileContent = fs.readFileSync(kasusDataPath, 'utf8');

const match = fileContent.match(/export const KASUS_DATABASE = (\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not find KASUS_DATABASE in file");
  process.exit(1);
}

// Keep the first 982 original items
const all = eval(match[1]);
const original982 = all.slice(0, 982);
console.log("Restoring to initial count:", original982.length);

const M_NOUNS = [
  { n: 'Vater', es: 'padre', datN: false },
  { n: 'Bruder', es: 'hermano', datN: false },
  { n: 'Sohn', es: 'hijo', datN: false },
  { n: 'Freund', es: 'amigo', datN: false },
  { n: 'Kollege', es: 'compañero', datN: 'Kollegen' },
  { n: 'Chef', es: 'jefe', datN: false },
  { n: 'Lehrer', es: 'profesor', datN: false },
  { n: 'Arzt', es: 'médico', datN: false },
  { n: 'Nachbar', es: 'vecino', datN: 'Nachbarn' },
  { n: 'Onkel', es: 'tío', datN: false },
  { n: 'Opa', es: 'abuelo', datN: false },
  { n: 'Hund', es: 'perro', datN: false },
  { n: 'Schlüssel', es: 'llave', datN: false },
  { n: 'Koffer', es: 'maleta', datN: false },
  { n: 'Pass', es: 'pasaporte', datN: false },
  { n: 'Wagen', es: 'coche', datN: false },
  { n: 'Garten', es: 'jardín', datN: false },
  { n: 'Computer', es: 'ordenador', datN: false },
  { n: 'Tisch', es: 'mesa', datN: false },
  { n: 'Stuhl', es: 'silla', datN: false },
  { n: 'Rucksack', es: 'mochila', datN: false },
  { n: 'Pullover', es: 'jersey', datN: false },
  { n: 'Mantel', es: 'abrigo', datN: false }
];

const F_NOUNS = [
  { n: 'Mutter', es: 'madre' },
  { n: 'Schwester', es: 'hermana' },
  { n: 'Tochter', es: 'hija' },
  { n: 'Freundin', es: 'amiga' },
  { n: 'Kollegin', es: 'compañera' },
  { n: 'Chefin', es: 'jefa' },
  { n: 'Lehrerin', es: 'profesora' },
  { n: 'Ärztin', es: 'médica' },
  { n: 'Nachbarin', es: 'vecina' },
  { n: 'Tante', es: 'tía' },
  { n: 'Oma', es: 'abuela' },
  { n: 'Katze', es: 'gata' },
  { n: 'Tasche', es: 'bolso' },
  { n: 'Wohnung', es: 'vivienda' },
  { n: 'Küche', es: 'cocina' },
  { n: 'Brille', es: 'gafas' },
  { n: 'Jacke', es: 'chaqueta' },
  { n: 'Uhr', es: 'reloj' },
  { n: 'Kamera', es: 'cámara' }
];

const N_NOUNS = [
  { n: 'Kind', es: 'hijo/niño' },
  { n: 'Baby', es: 'bebé' },
  { n: 'Haus', es: 'casa' },
  { n: 'Auto', es: 'coche' },
  { n: 'Fahrrad', es: 'bicicleta' },
  { n: 'Handy', es: 'móvil' },
  { n: 'Buch', es: 'libro' },
  { n: 'Zimmer', es: 'habitación' },
  { n: 'Gepäck', es: 'equipaje' },
  { n: 'Ticket', es: 'billete' },
  { n: 'Brot', es: 'pan' },
  { n: 'Geld', es: 'dinero' },
  { n: 'Büro', es: 'oficina' },
  { n: 'Foto', es: 'foto' },
  { n: 'Geschenk', es: 'regalo' }
];

const P_NOUNS = [
  { n: 'Eltern', es: 'padres', dat: 'Eltern' },
  { n: 'Kinder', es: 'hijos', dat: 'Kindern' },
  { n: 'Freunde', es: 'amigos', dat: 'Freunden' },
  { n: 'Kollegen', es: 'compañeros', dat: 'Kollegen' },
  { n: 'Schlüssel', es: 'llaves', dat: 'Schlüsseln' },
  { n: 'Bücher', es: 'libros', dat: 'Büchern' },
  { n: 'Sachen', es: 'cosas', dat: 'Sachen' },
  { n: 'Dokumente', es: 'documentos', dat: 'Dokumenten' },
  { n: 'Geschwister', es: 'hermanos', dat: 'Geschwistern' }
];

const newSentences = [];
const seenKeys = new Set(original982.map(r => `${r[6]}:${r[0]} ___ ${r[1]}`));

function addSentence(vor, nach, genus, kasus, es, por, artType) {
  const key = `${artType}:${vor} ___ ${nach}`;
  if (seenKeys.has(key)) return;
  seenKeys.add(key);
  newSentences.push([vor, nach, genus, kasus, es, por, artType]);
}

// Context builders per pronoun
const PRON_CONFIG = {
  mein: {
    esPoss: 'mi/mis',
    nomMPrefix: (item) => ["Hier ist", `${item.n}.`],
    nomFPrefix: (item) => ["Das ist", `${item.n}.`],
    nomNPrefix: (item) => ["Hier liegt", `${item.n}.`],
    nomPPrefix: (item) => ["Da sind", `${item.n}.`],
    akkM: (item) => ["Ich brauche", `${item.n} für das Projekt.`, `Necesito mi ${item.es} para el proyecto.`],
    akkM2: (item) => ["Ich suche", `${item.n} überall.`, `Busco mi ${item.es} por todas partes.`],
    akkF: (item) => ["Ich nehme", `${item.n} mit.`, `Me llevo mi ${item.es}.`],
    akkN: (item) => ["Ich verkaufe", `${item.n} bald.`, `Pronto vendo mi ${item.es}.`],
    akkP: (item) => ["Ich rufe", `${item.n} an.`, `Llamo a mis ${item.es}.`],
    datM: (item) => ["Ich helfe", `${item.datN || item.n} heute.`, `Hoy ayudo a mi ${item.es}.`],
    datM2: (item) => ["Ich gehe mit", `${item.datN || item.n} ins Kino.`, `Voy con mi ${item.es} al cine.`],
    datF: (item) => ["Ich schenke", `${item.n} Blumen.`, `Le regalo flores a mi ${item.es}.`],
    datF2: (item) => ["Ich wohne bei", `${item.n}.`, `Vivo con mi ${item.es}.`],
    datN: (item) => ["Ich spiele mit", `${item.n}.`, `Juego con mi ${item.es}.`],
    datP: (item) => ["Ich danke", `${item.dat} herzlich.`, `Agradezco de corazón a mis ${item.es}.`],
    datP2: (item) => ["Ich reise mit", `${item.dat}.`, `Viajo con mis ${item.es}.`]
  },
  dein: {
    esPoss: 'tu/tus',
    nomMPrefix: (item) => ["Ist das", `${item.n}?`],
    nomFPrefix: (item) => ["Wo steht", `${item.n}?`],
    nomNPrefix: (item) => ["Wie alt ist", `${item.n}?`],
    nomPPrefix: (item) => ["Sind das", `${item.n}?`],
    akkM: (item) => ["Hast du", `${item.n} eingepackt?`, `¿Has metido tu ${item.es}?`],
    akkM2: (item) => ["Kennst du", `${item.n} schon lange?`, `¿Conoces a tu ${item.es} desde hace mucho?`],
    akkF: (item) => ["Vergisst du oft", `${item.n}?`, `¿Olvidas a menudo tu ${item.es}?`],
    akkN: (item) => ["Reparierst du", `${item.n} selbst?`, `¿Reparas tú mismo tu ${item.es}?`],
    akkP: (item) => ["Besuchst du", `${item.n} oft?`, `¿Visitas a menudo a tus ${item.es}?`],
    datM: (item) => ["Hilfst du", `${item.datN || item.n} am Samstag?`, `¿Ayudas a tu ${item.es} el sábado?`],
    datM2: (item) => ["Sprichst du mit", `${item.datN || item.n}?`, `¿Hablas con tu ${item.es}?`],
    datF: (item) => ["Schreibst du", `${item.n} eine E-Mail?`, `¿Le escribes un email a tu ${item.es}?`],
    datF2: (item) => ["Kommst du mit", `${item.n}?`, `¿Vienes con tu ${item.es}?`],
    datN: (item) => ["Fährst du mit", `${item.n}?`, `¿Vas con tu ${item.es}?`],
    datP: (item) => ["Dankst du", `${item.dat}?`, `¿Le das las gracias a tus ${item.es}?`],
    datP2: (item) => ["Spielst du mit", `${item.dat}?`, `¿Juegas con tus ${item.es}?`]
  },
  sein: {
    esPoss: 'su/sus (de él)',
    nomMPrefix: (item) => ["Hier wartet", `${item.n}.`],
    nomFPrefix: (item) => ["Dort arbeitet", `${item.n}.`],
    nomNPrefix: (item) => ["Das ist", `${item.n}.`],
    nomPPrefix: (item) => ["Hier spielen", `${item.n}.`],
    akkM: (item) => ["Er sucht", `${item.n}.`, `Él busca su ${item.es}.`],
    akkM2: (item) => ["Er besucht", `${item.n}.`, `Él visita a su ${item.es}.`],
    akkF: (item) => ["Er liebt", `${item.n}.`, `Él quiere a su ${item.es}.`],
    akkN: (item) => ["Er verkauft", `${item.n}.`, `Él vende su ${item.es}.`],
    akkP: (item) => ["Er fotografiert", `${item.n}.`, `Él fotografía a sus ${item.es}.`],
    datM: (item) => ["Er hilft", `${item.datN || item.n}.`, `Él ayuda a su ${item.es}.`],
    datM2: (item) => ["Er reist mit", `${item.datN || item.n}.`, `Él viaja con su ${item.es}.`],
    datF: (item) => ["Er schenkt", `${item.n} Blumen.`, `Él regala flores a su ${item.es}.`],
    datF2: (item) => ["Er wohnt bei", `${item.n}.`, `Él vive con su ${item.es}.`],
    datN: (item) => ["Er spielt in", `${item.n}.`, `Él juega en su ${item.es}.`],
    datP: (item) => ["Er dankt", `${item.dat}.`, `Él da las gracias a sus ${item.es}.`],
    datP2: (item) => ["Er geht mit", `${item.dat} aus.`, `Él sale con sus ${item.es}.`]
  },
  ihr: {
    esPoss: 'su/sus (de ella)',
    nomMPrefix: (item) => ["Gleich kommt", `${item.n}.`],
    nomFPrefix: (item) => ["Sehr freundlich ist", `${item.n}.`],
    nomNPrefix: (item) => ["Sehr modern ist", `${item.n}.`],
    nomPPrefix: (item) => ["In Wien wohnen", `${item.n}.`],
    akkM: (item) => ["Sie vermisst", `${item.n}.`, `Ella echa de menos a su ${item.es}.`],
    akkM2: (item) => ["Sie ruft", `${item.n} an.`, `Ella llama a su ${item.es}.`],
    akkF: (item) => ["Sie schätzt", `${item.n}.`, `Ella aprecia a su ${item.es}.`],
    akkN: (item) => ["Sie repariert", `${item.n}.`, `Ella arregla su ${item.es}.`],
    akkP: (item) => ["Sie unterstützt", `${item.n}.`, `Ella apoya a sus ${item.es}.`],
    datM: (item) => ["Sie gratuliert", `${item.datN || item.n}.`, `Ella felicita a su ${item.es}.`],
    datM2: (item) => ["Sie spricht mit", `${item.datN || item.n}.`, `Ella habla con su ${item.es}.`],
    datF: (item) => ["Sie vertraut", `${item.n}.`, `Ella confía en su ${item.es}.`],
    datF2: (item) => ["Sie lernt mit", `${item.n}.`, `Ella estudia con su ${item.es}.`],
    datN: (item) => ["Sie fährt mit", `${item.n}.`, `Ella va con su ${item.es}.`],
    datP: (item) => ["Sie hilft", `${item.dat}.`, `Ella ayuda a sus ${item.es}.`],
    datP2: (item) => ["Sie spaziert mit", `${item.dat}.`, `Ella pasea con sus ${item.es}.`]
  },
  unser: {
    esPoss: 'nuestro/nuestros',
    nomMPrefix: (item) => ["Draußen steht", `${item.n}.`],
    nomFPrefix: (item) => ["In Berlin wohnt", `${item.n}.`],
    nomNPrefix: (item) => ["Sehr gemütlich ist", `${item.n}.`],
    nomPPrefix: (item) => ["Sehr fleißig sind", `${item.n}.`],
    akkM: (item) => ["Wir erwarten", `${item.n}.`, `Esperamos a nuestro ${item.es}.`],
    akkM2: (item) => ["Wir laden", `${item.n} ein.`, `Invitamos a nuestro ${item.es}.`],
    akkF: (item) => ["Wir schätzen", `${item.n}.`, `Apreciamos nuestra ${item.es}.`],
    akkN: (item) => ["Wir lieben", `${item.n}.`, `Queremos nuestro ${item.es}.`],
    akkP: (item) => ["Wir begrüßen", `${item.n}.`, `Saludamos a nuestros ${item.es}.`],
    datM: (item) => ["Wir danken", `${item.datN || item.n}.`, `Damos las gracias a nuestro ${item.es}.`],
    datM2: (item) => ["Wir arbeiten mit", `${item.datN || item.n}.`, `Trabajamos con nuestro ${item.es}.`],
    datF: (item) => ["Wir helfen", `${item.n}.`, `Ayudamos a nuestra ${item.es}.`],
    datF2: (item) => ["Wir telefonieren mit", `${item.n}.`, `Hablamos por teléfono con nuestra ${item.es}.`],
    datN: (item) => ["Wir sind in", `${item.n}.`, `Estamos en nuestro ${item.es}.`],
    datP: (item) => ["Wir gratulieren", `${item.dat}.`, `Felicitamos a nuestros ${item.es}.`],
    datP2: (item) => ["Wir spielen mit", `${item.dat}.`, `Jugamos con nuestros ${item.es}.`]
  },
  euer: {
    esPoss: 'vuestro/vuestros',
    nomMPrefix: (item) => ["Gefällt euch", `${item.n}?`],
    nomFPrefix: (item) => ["Wo bleibt", `${item.n}?`],
    nomNPrefix: (item) => ["Ist das", `${item.n}?`],
    nomPPrefix: (item) => ["Wo sind", `${item.n}?`],
    akkM: (item) => ["Sucht ihr", `${item.n}?`, `¿Buscáis a vuestro ${item.es}?`],
    akkM2: (item) => ["Habt ihr", `${item.n} gesehen?`, `¿Habéis visto a vuestro ${item.es}?`],
    akkF: (item) => ["Findet ihr", `${item.n}?`, `¿Encontráis vuestra ${item.es}?`],
    akkN: (item) => ["Zeigt ihr uns", `${item.n}?`, `¿Nos enseñáis vuestro ${item.es}?`],
    akkP: (item) => ["Kennt ihr", `${item.n}?`, `¿Conocéis a vuestros ${item.es}?`],
    datM: (item) => ["Helft ihr", `${item.datN || item.n}?`, `¿Ayudáis a vuestro ${item.es}?`],
    datM2: (item) => ["Fahrt ihr mit", `${item.datN || item.n}?`, `¿Vais con vuestro ${item.es}?`],
    datF: (item) => ["Schreibt ihr", `${item.n}?`, `¿Escribís a vuestra ${item.es}?`],
    datF2: (item) => ["Sprecht ihr mit", `${item.n}?`, `¿Habláis con vuestra ${item.es}?`],
    datN: (item) => ["Wohnt ihr in", `${item.n}?`, `¿Vivís en vuestro ${item.es}?`],
    datP: (item) => ["Dankt ihr", `${item.dat}?`, `¿Dais las gracias a vuestros ${item.es}?`],
    datP2: (item) => ["Reist ihr mit", `${item.dat}?`, `¿Viajáis con vuestros ${item.es}?`]
  }
};

// Generate for each pronoun
for (const [artType, cfg] of Object.entries(PRON_CONFIG)) {
  const pEs = cfg.esPoss;
  const isEuer = artType === 'euer';
  
  // Nom M
  for (const item of M_NOUNS.slice(0, 10)) {
    const [v, n] = cfg.nomMPrefix(item);
    addSentence(v, n, "m", "Nominativ", `${v} ${pEs} ${item.es}.`, `Sujeto: Nominativ maskulin -> ${artType}.`, artType);
  }
  // Nom F
  for (const item of F_NOUNS.slice(0, 10)) {
    const [v, n] = cfg.nomFPrefix(item);
    addSentence(v, n, "f", "Nominativ", `${v} ${pEs} ${item.es}.`, `Sujeto: Nominativ feminin -> ${isEuer ? 'eure' : artType + 'e'}.`, artType);
  }
  // Nom N
  for (const item of N_NOUNS.slice(0, 8)) {
    const [v, n] = cfg.nomNPrefix(item);
    addSentence(v, n, "n", "Nominativ", `${v} ${pEs} ${item.es}.`, `Sujeto: Nominativ neutral -> ${artType}.`, artType);
  }
  // Nom P
  for (const item of P_NOUNS.slice(0, 8)) {
    const [v, n] = cfg.nomPPrefix(item);
    addSentence(v, n, "p", "Nominativ", `${v} ${pEs} ${item.es}.`, `Sujeto: Nominativ Plural -> ${isEuer ? 'eure' : artType + 'e'}.`, artType);
  }

  // Akk M
  const akkMForm = isEuer ? 'euren' : artType + 'en';
  for (const item of M_NOUNS.slice(0, 12)) {
    const [v1, n1, es1] = cfg.akkM(item);
    addSentence(v1, n1, "m", "Akkusativ", es1, `Objeto directo: Akkusativ maskulin -> ${akkMForm}.`, artType);
    const [v2, n2, es2] = cfg.akkM2(item);
    addSentence(v2, n2, "m", "Akkusativ", es2, `Objeto directo: Akkusativ maskulin -> ${akkMForm}.`, artType);
  }
  // Akk F
  const akkFForm = isEuer ? 'eure' : artType + 'e';
  for (const item of F_NOUNS.slice(0, 10)) {
    const [v, n, es] = cfg.akkF(item);
    addSentence(v, n, "f", "Akkusativ", es, `Objeto directo: Akkusativ feminin -> ${akkFForm}.`, artType);
  }
  // Akk N
  for (const item of N_NOUNS.slice(0, 8)) {
    const [v, n, es] = cfg.akkN(item);
    addSentence(v, n, "n", "Akkusativ", es, `Objeto directo: Akkusativ neutral -> ${artType}.`, artType);
  }
  // Akk P
  for (const item of P_NOUNS.slice(0, 8)) {
    const [v, n, es] = cfg.akkP(item);
    addSentence(v, n, "p", "Akkusativ", es, `Objeto directo Plural -> ${akkFForm}.`, artType);
  }

  // Dat M
  const datMForm = isEuer ? 'eurem' : artType + 'em';
  for (const item of M_NOUNS.slice(0, 12)) {
    const [v1, n1, es1] = cfg.datM(item);
    addSentence(v1, n1, "m", "Dativ", es1, `Rige Dativ: maskulin -> ${datMForm}.`, artType);
    const [v2, n2, es2] = cfg.datM2(item);
    addSentence(v2, n2, "m", "Dativ", es2, `"mit" pide Dativ: maskulin -> ${datMForm}.`, artType);
  }
  // Dat F
  const datFForm = isEuer ? 'eurer' : artType + 'er';
  for (const item of F_NOUNS.slice(0, 10)) {
    const [v1, n1, es1] = cfg.datF(item);
    addSentence(v1, n1, "f", "Dativ", es1, `Rige Dativ: feminin -> ${datFForm}.`, artType);
    const [v2, n2, es2] = cfg.datF2(item);
    addSentence(v2, n2, "f", "Dativ", es2, `Preposición con Dativ: feminin -> ${datFForm}.`, artType);
  }
  // Dat N
  for (const item of N_NOUNS.slice(0, 8)) {
    const [v, n, es] = cfg.datN(item);
    addSentence(v, n, "n", "Dativ", es, `Rige Dativ: neutral -> ${datMForm}.`, artType);
  }
  // Dat P
  for (const item of P_NOUNS.slice(0, 8)) {
    const [v1, n1, es1] = cfg.datP(item);
    addSentence(v1, n1, "p", "Dativ", es1, `Rige Dativ Plural -> ${akkMForm}.`, artType);
    const [v2, n2, es2] = cfg.datP2(item);
    addSentence(v2, n2, "p", "Dativ", es2, `"mit" rige Dativ Plural -> ${akkMForm}.`, artType);
  }
}

// Expand KEIN
for (const item of M_NOUNS.slice(0, 12)) {
  addSentence("Er kauft", `${item.n}.`, "m", "Akkusativ", `Él no compra ningún ${item.es}.`, "Akkusativ maskulin -> keinen.", "kein");
  addSentence("Wir danken", `${item.datN || item.n}.`, "m", "Dativ", `No damos las gracias a ningún ${item.es}.`, "Dativ maskulin -> keinem.", "kein");
}
for (const item of F_NOUNS.slice(0, 10)) {
  addSentence("Ich trage", `${item.n}.`, "f", "Akkusativ", `No llevo ninguna ${item.es}.`, "Akkusativ feminin -> keine.", "kein");
  addSentence("Er traut", `${item.n}.`, "f", "Dativ", `No se fía de ninguna ${item.es}.`, "Dativ feminin -> keiner.", "kein");
}
for (const item of N_NOUNS.slice(0, 8)) {
  addSentence("Ich finde", `${item.n}.`, "n", "Akkusativ", `No encuentro ningún ${item.es}.`, "Akkusativ neutral -> kein.", "kein");
  addSentence("Er fährt mit", `${item.n}.`, "n", "Dativ", `No viaja en ningún ${item.es}.`, "Dativ neutral -> keinem.", "kein");
}

// Expand EIN
for (const item of M_NOUNS.slice(0, 12)) {
  addSentence("Wir besuchen", `${item.n}.`, "m", "Akkusativ", `Visitamos a un ${item.es}.`, "Akkusativ maskulin -> einen.", "ein");
  addSentence("Sie gratuliert", `${item.datN || item.n}.`, "m", "Dativ", `Ella felicita a un ${item.es}.`, "Dativ maskulin -> einem.", "ein");
}
for (const item of F_NOUNS.slice(0, 10)) {
  addSentence("Wir sehen", `${item.n}.`, "f", "Akkusativ", `Vemos una ${item.es}.`, "Akkusativ feminin -> eine.", "ein");
  addSentence("Er hilft", `${item.n}.`, "f", "Dativ", `Él ayuda a una ${item.es}.`, "Dativ feminin -> einer.", "ein");
}
for (const item of N_NOUNS.slice(0, 8)) {
  addSentence("Wir haben", `${item.n}.`, "n", "Akkusativ", `Tenemos un ${item.es}.`, "Akkusativ neutral -> ein.", "ein");
  addSentence("Sie schläft in", `${item.n}.`, "n", "Dativ", `Ella duerme en una ${item.es}.`, "Dativ neutral -> einem.", "ein");
}

console.log("Newly generated sentences count:", newSentences.length);

const combined = [...original982, ...newSentences];
console.log("Total sentences in updated database:", combined.length);

const counts = {};
combined.forEach(r => counts[r[6]] = (counts[r[6]] || 0) + 1);
console.log("Breakdown by artType:", counts);

const outputContent = `// Autogenerated Kasus Dataset with ~${combined.length} authentic exercises
// Preserves original sentences and massively expands possessives, ein, kein
export const KASUS_DATABASE = ${JSON.stringify(combined, null, 2)};
`;

fs.writeFileSync(kasusDataPath, outputContent, 'utf8');
console.log("Successfully wrote updated KASUS_DATABASE to", kasusDataPath);
