// Generación y corrección del simulacro de examen A2.
// Vive aparte de ai.js para no seguir engordándolo.

import { aiAvailable } from './settings.js';
import { runLLM, extractJson } from './ai.js';
import { getLang, langName } from './i18n.js';

// Lo que el examen escribe PARA el alumno (la instruccion traducida, el
// contexto, las correcciones) sale en el idioma de la interfaz. El aleman de
// la prueba se queda en aleman.
const idiomaAlumno = () => langName(getLang());

const NIVEL = `Nivel A2 (Goethe-Zertifikat A2 / ÖSD Zertifikat A2). Alemán de Austria cuando encaje
(Jänner, Ordination, Erdäpfel, Sackerl, sich ausmachen), pero comprensible para cualquiera.`;

// Las trampas que el examen usa de verdad. Se le piden explícitamente a la IA
// para que el simulacro se parezca al examen y no a un ejercicio de clase.
const FALLEN = `Construye las preguntas como en el examen real:
1. NEGACIONES: al menos una pregunta debe depender de un "nicht", "kein", "nur", "aber" o "leider"
   que cambie el sentido si se lee rápido.
2. SINÓNIMOS: la opción correcta NUNCA debe repetir literalmente las palabras del texto; tiene que
   parafrasear (si el texto dice "um sechs aufstehen", la opción dice "früh beginnen").
3. DISTRACTORES: las opciones falsas deben aparecer mencionadas en el texto pero no responder a la
   pregunta (un dato real pero del momento equivocado, de otra persona, o que cumple solo una condición).`;

// Funcion y no constante: como constante se fijaria el idioma al cargar el
// modulo y cambiar de idioma no haria nada hasta recargar.
const FORMATO = () => `Devuelve SOLO un objeto JSON:
{
  "titel": "título corto de la tarea, en alemán",
  "anweisung": "la instrucción, en alemán, como en el examen",
  "anweisungEs": "la misma instrucción en ${idiomaAlumno()}",
  "situation": "1 frase de contexto en ${idiomaAlumno()}",
  "text": "el texto que se lee (o null si esta tarea no tiene texto para leer)",
  "skript": "lo que se escucha, tal cual se diría en voz alta (o null si no es de escucha)",
  "material": [ { "id": "a", "titel": "título del anuncio/cartel", "text": "su contenido" } ],
  "aufgaben": [
    {
      "frage": "la pregunta o afirmación, en alemán",
      "optionen": ["opción 1", "opción 2", "opción 3"],
      "loesung": 0,
      "warum": "por qué esa es la correcta y qué falla en las otras, EN ${idiomaAlumno()}",
      "stelle": "la frase exacta del texto o del audio que lo demuestra",
      "falle": "qué trampa tiene esta pregunta (negación / sinónimo / distractor), en ${idiomaAlumno()}"
    }
  ]
}
"loesung" es el ÍNDICE (0, 1, 2…) de la opción correcta dentro de "optionen".
"material" solo cuando la tarea lleve anuncios o carteles; si no, [].
Sin texto fuera del JSON.`;

const TAREAS = {
  'lesen:rf': `Escribe un texto cotidiano en alemán (un correo, un mensaje de móvil o una entrada de blog)
de 60-90 palabras y 5 preguntas sobre él.
Las 3 primeras son afirmaciones con "optionen": ["richtig", "falsch"].
Las 2 últimas son de opción múltiple con 3 opciones (horas, lugares, motivos).`,

  'lesen:matching': `Tarea de emparejamiento. En "material" pon 6 anuncios breves (Kleinanzeigen: cursos,
pisos, objetos de segunda mano, servicios) con ids "a" … "f".
En "aufgaben" pon 5 personas: la "frage" describe en alemán lo que busca cada persona
(con DOS O TRES condiciones a la vez, p. ej. barato + por la tarde + de alemán),
y "optionen" son SIEMPRE los 6 ids más "X (kein Angebot passt)" como última opción.
Una de las 5 personas NO debe tener ningún anuncio válido: su solución es la "X".
"text" y "skript" van a null.`,

  'lesen:schilder': `Tarea de carteles y avisos. En "material" pon 5 carteles o notas muy breves del espacio
público (estación, tienda, portal, oficina) con ids "a" … "e".
En "aufgaben" pon 5 afirmaciones sobre ellos con "optionen": ["richtig", "falsch"].
Cada afirmación debe indicar de qué cartel habla. Al menos dos deben depender de una negación
o de una fecha ("ab dem 3. März wieder geöffnet" ≠ "está abierto ahora").
"text" y "skript" van a null.`,

  'lesen:forum': `Tarea de foro. En "text" escribe 4 comentarios cortos (40-60 palabras cada uno) de
4 personas con nombre sobre un mismo tema cotidiano, con opiniones DISTINTAS entre sí.
En "aufgaben" pon 5 preguntas del tipo "Wer …?" y las "optionen" son los nombres de las 4 personas.
"skript" y "material" van a null / [].`,

  'hoeren:ansagen': `Tarea de escucha con avisos cortos. En "skript" escribe 3 avisos independientes
(megafonía de estación, mensaje de voz, anuncio de supermercado), separados por una línea con "---".
Cada aviso, 2-3 frases. En "aufgaben" pon 4 preguntas de opción múltiple con 3 opciones
(horas, andenes, precios, motivos). "text" y "material" van a null / [].`,

  'hoeren:monolog': `Tarea de escucha con un monólogo. En "skript" escribe un mensaje de contestador o un
fragmento de radio de 80-110 palabras con VARIOS datos concretos (hora, día, lugar, precio, teléfono).
En "aufgaben" pon 5 preguntas: 2 con ["richtig", "falsch"] y 3 de opción múltiple con 3 opciones.
"text" y "material" van a null / [].`,

  'hoeren:gespraech': `Tarea de escucha con una conversación. En "skript" escribe un diálogo natural entre dos
personas con nombre (quedar, comprar, resolver algo), 12-16 intervenciones, con el formato
"NOMBRE: lo que dice" en líneas separadas. Que cambien de idea a mitad (primero proponen una cosa
y acaban en otra: ahí está el distractor).
En "aufgaben" pon 5 preguntas de opción múltiple con 3 opciones sobre lo que ACABAN decidiendo.
"text" y "material" van a null / [].`,

  'hoeren:interview': `Tarea de escucha con una entrevista. En "skript" escribe una entrevista de 110-140 palabras
a alguien sobre su trabajo, su ciudad o su hobby, con el formato "NOMBRE: …" por líneas.
En "aufgaben" pon 6 afirmaciones con "optionen": ["richtig", "falsch"], todas parafraseando lo dicho.
"text" y "material" van a null / [].`
};

export async function generateExamAufgabe({ teil, typ }) {
  if (!aiAvailable()) throw new Error('Activa la IA en el menú lateral para generar el examen.');
  const clave = `${teil}:${typ}`;
  const tarea = TAREAS[clave];
  if (!tarea) throw new Error('Ese tipo de tarea todavía no está disponible.');

  const prompt = `Eres examinador de alemán y preparas una tarea de examen. ${NIVEL}

TAREA A CREAR (${clave}):
${tarea}

${FALLEN}

Elige un tema cotidiano cualquiera y NO repitas siempre el mismo (varía entre: vivienda, trabajo,
salud, transporte, compras, tiempo libre, escuela, viajes, vecinos, fiestas).

${FORMATO()}`;

  const raw = extractJson(await runLLM(prompt, { timeoutMs: 300000 }));
  if (!raw || !Array.isArray(raw.aufgaben) || !raw.aufgaben.length) {
    throw new Error('No se pudo generar la tarea. Inténtalo otra vez.');
  }
  const aufgaben = raw.aufgaben
    .map((a) => ({
      frage: String(a.frage || '').trim(),
      optionen: (Array.isArray(a.optionen) ? a.optionen : []).map(String),
      loesung: Number.isInteger(a.loesung) ? a.loesung : 0,
      warum: String(a.warum || '').trim(),
      stelle: String(a.stelle || '').trim(),
      falle: String(a.falle || '').trim()
    }))
    .filter((a) => a.frage && a.optionen.length >= 2 && a.loesung < a.optionen.length);
  if (!aufgaben.length) throw new Error('La tarea llegó incompleta. Inténtalo otra vez.');

  return {
    teil,
    typ,
    titel: String(raw.titel || '').trim(),
    anweisung: String(raw.anweisung || '').trim(),
    anweisungEs: String(raw.anweisungEs || '').trim(),
    situation: String(raw.situation || '').trim(),
    text: raw.text ? String(raw.text).trim() : null,
    skript: raw.skript ? String(raw.skript).trim() : null,
    material: (Array.isArray(raw.material) ? raw.material : [])
      .map((m) => ({
        id: String(m.id || '').trim(),
        titel: String(m.titel || '').trim(),
        text: String(m.text || '').trim()
      }))
      .filter((m) => m.text),
    aufgaben
  };
}

// ---------- Schreiben ----------

export async function generateSchreibenAufgabe({ typ }) {
  if (!aiAvailable()) throw new Error('Activa la IA en el menú lateral para generar la tarea.');
  const detalle =
    typ === 'sms'
      ? `Tarea de mensaje corto (SMS/WhatsApp), 20-30 palabras. Da una situación cotidiana
(cancelar o cambiar una cita, disculparse, avisar de algo) y EXACTAMENTE 3 puntos obligatorios.
"stimulus" va a null.`
      : `Tarea de correo, 30-40 palabras. En "stimulus" escribe el email informal que el alumno RECIBE
de un amigo (con saludo y despedida), que contenga EXACTAMENTE 4 preguntas.
Los 4 puntos obligatorios son responder a esas 4 preguntas.`;

  const prompt = `Eres examinador de alemán. ${NIVEL}
Prepara una tarea de expresión escrita.

${detalle}

Devuelve SOLO un objeto JSON:
{
  "typ": "${typ}",
  "anweisung": "la instrucción en alemán, como en el examen",
  "situationEs": "la situación explicada en ${idiomaAlumno()}, 1-2 frases",
  "stimulus": "el email que recibe (o null)",
  "punkte": ["punto obligatorio 1 en ${idiomaAlumno()}", "…"],
  "woerter": 30,
  "empfaenger": "a quién le escribe (nombre y si es du o Sie)"
}
Sin texto fuera del JSON.`;

  const raw = extractJson(await runLLM(prompt, { timeoutMs: 300000 }));
  if (!raw || !Array.isArray(raw.punkte) || !raw.punkte.length) {
    throw new Error('No se pudo generar la tarea. Inténtalo otra vez.');
  }
  return {
    typ,
    anweisung: String(raw.anweisung || '').trim(),
    situationEs: String(raw.situationEs || '').trim(),
    stimulus: raw.stimulus ? String(raw.stimulus).trim() : null,
    punkte: raw.punkte.map(String),
    woerter: Number(raw.woerter) || (typ === 'sms' ? 30 : 40),
    empfaenger: String(raw.empfaenger || '').trim()
  };
}

export async function correctSchreiben({ aufgabe, text }) {
  if (!aiAvailable()) throw new Error('Activa la IA en el menú lateral para corregir.');
  if (!text?.trim()) throw new Error('Escribe tu respuesta primero.');

  const prompt = `Eres examinador de alemán corrigiendo una tarea de Schreiben. ${NIVEL}

LA TAREA ERA:
${aufgabe.anweisung}
${aufgabe.stimulus ? '\nEmail recibido:\n"""\n' + aufgabe.stimulus + '\n"""' : ''}
Puntos obligatorios:
${aufgabe.punkte.map((p, i) => `${i + 1}. ${p}`).join('\n')}

LO QUE ESCRIBIÓ EL ALUMNO:
"""
${text.trim()}
"""

Corrige con los criterios oficiales, EN ESTE ORDEN DE PESO:
1. Cumplimiento de la tarea: ¿ha tratado TODOS los puntos? Olvidar uno baja mucho.
2. Coherencia: ¿usa conectores (und, aber, weil, deshalb) o son frases sueltas?
3. Vocabulario. 4. Corrección gramatical (un error de caso baja poco).
Comprueba también saludo y despedida, y que el registro (du / Sie) sea el correcto.

Devuelve SOLO un objeto JSON:
{
  "punkte": [ { "punkt": "el punto obligatorio", "erfuellt": true, "kommentar": "cómo lo ha cubierto o qué falta, en ${idiomaAlumno()}" } ],
  "bewertung": {
    "aufgabe": "valoración del cumplimiento, en ${idiomaAlumno()}",
    "kohaerenz": "…", "wortschatz": "…", "grammatik": "…"
  },
  "punktzahl": 75,
  "korrigiert": "su texto corregido, respetando lo que quiso decir",
  "korrekturen": [ { "original": "…", "korrektur": "…", "typ": "Gramática|Vocabulario|Ortografía|Orden de la frase|Estilo", "erklaerung": "en ${idiomaAlumno()}" } ],
  "musterloesung": "una respuesta modelo en alemán que cubra todos los puntos, del nivel del examen",
  "tipp": "el consejo más útil para la próxima vez, en ${idiomaAlumno()}"
}
"punktzahl" es de 0 a 100 y debe reflejar sobre todo el cumplimiento de la tarea.
Sin texto fuera del JSON.`;

  const raw = extractJson(await runLLM(prompt, { timeoutMs: 300000 }));
  if (!raw) throw new Error('No se pudo leer la corrección. Inténtalo otra vez.');
  return {
    punkte: (Array.isArray(raw.punkte) ? raw.punkte : []).map((p) => ({
      punkt: String(p.punkt || '').trim(),
      erfuellt: !!p.erfuellt,
      kommentar: String(p.kommentar || '').trim()
    })),
    bewertung: {
      aufgabe: String(raw.bewertung?.aufgabe || '').trim(),
      kohaerenz: String(raw.bewertung?.kohaerenz || '').trim(),
      wortschatz: String(raw.bewertung?.wortschatz || '').trim(),
      grammatik: String(raw.bewertung?.grammatik || '').trim()
    },
    punktzahl: Math.max(0, Math.min(100, Number(raw.punktzahl) || 0)),
    korrigiert: String(raw.korrigiert || '').trim(),
    korrekturen: (Array.isArray(raw.korrekturen) ? raw.korrekturen : [])
      .map((k) => ({
        original: String(k.original || '').trim(),
        korrektur: String(k.korrektur || '').trim(),
        typ: String(k.typ || 'Gramática').trim(),
        erklaerung: String(k.erklaerung || '').trim()
      }))
      .filter((k) => k.original && k.korrektur),
    musterloesung: String(raw.musterloesung || '').trim(),
    tipp: String(raw.tipp || '').trim()
  };
}

// ---------- Sprechen ----------

export async function generateSprechenAufgabe({ typ }) {
  if (!aiAvailable()) throw new Error('Activa la IA en el menú lateral para generar la tarea.');

  const detalle = {
    vorstellen: `Teil 1: presentarse. Da 6 preguntas personales que le hará el examinador
(nombre, origen, dónde vive, trabajo/estudios, idiomas, familia, tiempo libre).
"karten" va a []. En "musterdialog" pon una presentación modelo de 6-8 frases del alumno.`,
    karten: `Teil 2: tarjetas. Elige un tema cotidiano (Einkaufen, Wohnen, Freizeit, Reisen, Essen…)
y pon 6 palabras clave en "karten". Para cada tarjeta, en "musterdialog" pon un par
pregunta-respuesta modelo (el alumno pregunta, la pareja responde).`,
    planen: `Teil 3: planear algo juntos (una fiesta de despedida, una excursión, un regalo).
En "karten" pon los 4-5 puntos que hay que acordar (cuándo, dónde, qué llevar, cómo ir…).
En "musterdialog" pon un intercambio modelo de 10-12 turnos donde se proponga, se rechace
con alternativa y se llegue a un acuerdo.`
  }[typ];
  if (!detalle) throw new Error('Ese tipo de tarea no existe.');

  const prompt = `Eres examinador de alemán. ${NIVEL}
Prepara una tarea de expresión oral que se hace EN PAREJA.

${detalle}

Devuelve SOLO un objeto JSON:
{
  "titel": "título de la tarea en alemán",
  "anweisung": "la instrucción en alemán, como la diría el examinador",
  "anweisungEs": "la instrucción en ${idiomaAlumno()}",
  "thema": "el tema",
  "karten": ["palabra clave o punto a acordar", "…"],
  "musterdialog": [ { "wer": "A" o "B" o "Prüfer", "de": "lo que dice", "es": "traducción a ${idiomaAlumno()}" } ],
  "redemittel": [ { "de": "expresión útil para esta tarea", "es": "traducción a ${idiomaAlumno()}", "wofuer": "para qué sirve" } ],
  "bewertung": ["qué mira el examinador aquí, en ${idiomaAlumno()}", "…"]
}
Incluye 6-8 "redemittel" y 3-4 puntos en "bewertung". Sin texto fuera del JSON.`;

  const raw = extractJson(await runLLM(prompt, { timeoutMs: 300000 }));
  if (!raw) throw new Error('No se pudo generar la tarea. Inténtalo otra vez.');
  return {
    typ,
    titel: String(raw.titel || '').trim(),
    anweisung: String(raw.anweisung || '').trim(),
    anweisungEs: String(raw.anweisungEs || '').trim(),
    thema: String(raw.thema || '').trim(),
    karten: (Array.isArray(raw.karten) ? raw.karten : []).map(String),
    musterdialog: (Array.isArray(raw.musterdialog) ? raw.musterdialog : [])
      .map((t) => ({
        wer: String(t.wer || '').trim(),
        de: String(t.de || '').trim(),
        es: String(t.es || '').trim()
      }))
      .filter((t) => t.de),
    redemittel: (Array.isArray(raw.redemittel) ? raw.redemittel : [])
      .map((r) => ({
        de: String(r.de || '').trim(),
        es: String(r.es || '').trim(),
        wofuer: String(r.wofuer || '').trim()
      }))
      .filter((r) => r.de),
    bewertung: (Array.isArray(raw.bewertung) ? raw.bewertung : []).map(String)
  };
}
