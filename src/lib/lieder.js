// Lieder: canciones en alemán para aprender.
// IMPORTANTE: no se reproduce la letra (derechos de autor). Se trabaja con el
// vídeo, el vocabulario suelto, de qué trata la canción y el contexto del
// artista, y se enlaza a la letra oficial para seguirla mientras suena.

import { storage } from './storage.js';
import { aiAvailable, getSettings } from './settings.js';
import { extractJson, limiteIA, apuntarLimiteIA } from './ai.js';
import { getLang, langName } from './i18n.js';

const KEY = 'lieder:saved';
const SEEN = 'lieder:seen';

export const GENRES = [
  { id: 'any', es: 'Cualquiera', en: 'Any' },
  { id: 'pop', es: 'Pop', en: 'Pop' },
  { id: 'rock', es: 'Rock', en: 'Rock' },
  { id: 'hiphop', es: 'Hip-hop / Rap', en: 'Hip-hop / Rap' },
  { id: 'indie', es: 'Indie / Alternativo', en: 'Indie / Alternative' },
  { id: 'liedermacher', es: 'Cantautor', en: 'Singer-songwriter' },
  { id: 'schlager', es: 'Schlager / Clásicos', en: 'Schlager / Classics' },
  { id: 'austro', es: 'Austríaca', en: 'Austrian' }
];

// Las notas van por su lado, en un diccionario id -> texto. Aparte de la
// canción a propósito: si la quitas de guardadas y la vuelves a guardar, lo
// que escribiste sigue ahí.
const NOTAS = 'lieder:notas';

export function getNota(id) {
  if (!id) return '';
  return storage.get(NOTAS, {})[id] || '';
}

// Las notas llevan negrita y cursiva, o sea HTML mínimo. Para saber si una
// nota está vacía no vale mirar la cadena: un cuadro vacío guarda "<br>".
function conTexto(v) {
  return String(v || '').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

export function setNota(id, texto) {
  if (!id) return '';
  const todas = storage.get(NOTAS, {});
  if (conTexto(texto)) todas[id] = texto;
  else delete todas[id];
  storage.set(NOTAS, todas);
  return texto;
}

export function tieneNota(id) {
  return !!conTexto(getNota(id));
}

export function savedSongs() {
  return storage.get(KEY, []);
}

export function isSaved(id) {
  return savedSongs().some((s) => s.id === id);
}

export function toggleSave(song) {
  const list = savedSongs();
  const i = list.findIndex((s) => s.id === song.id);
  if (i >= 0) storage.set(KEY, list.filter((s) => s.id !== song.id));
  else storage.set(KEY, [{ ...song, savedAt: Date.now() }, ...list]);
  return isSaved(song.id);
}

function seen() {
  return storage.get(SEEN, []);
}

function remember(song) {
  const list = [`${song.artist} – ${song.titel}`, ...seen()].slice(0, 30);
  storage.set(SEEN, list);
}

export function songId(artist, titel) {
  return (artist + '-' + titel).toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60);
}

// Pide una canción a la IA. Necesita búsqueda web para que el vídeo exista de verdad.
// `query` = lo que escriba el usuario: un artista, una canción, o "artista - canción".
export async function suggestSong({ niveau = 'A2', genre = 'any', query = '' } = {}) {
  if (!aiAvailable()) throw new Error('Activa la IA en el menú lateral para pedir una canción.');
  const s = getSettings();
  if (s.aiProvider !== 'claude-local') {
    throw new Error(
      'Las canciones necesitan búsqueda web para comprobar el vídeo, y eso solo funciona con "IA · Claude (local, sin key)".'
    );
  }

  const idioma = langName(getLang());
  const yaVistas = seen();
  const gen = GENRES.find((g) => g.id === genre);
  const q = String(query || '').trim();

  // Con búsqueda manual manda lo que ha pedido el usuario; sin ella, propón tú.
  const encargo = q
    ? `El alumno ha pedido esto concretamente: "${q}".
Puede ser un artista, una canción, o "artista - canción". Interprétalo:
- Si es un ARTISTA: elige su canción que mejor le venga a un nivel ${niveau} (que se cante claro,
  con vocabulario abordable) y dilo en "warum".
- Si es una CANCIÓN concreta: trabaja ESA, aunque sea difícil para su nivel. En ese caso avisa en
  "warum" de si le va a resultar dura y por qué.
- Si no encuentras nada que encaje, o el artista no canta en alemán, deja "titel" vacío y explica
  el motivo en "problema".
No lo sustituyas por otra cosa sin decirlo.${genre !== 'any' ? `\nEl género que tenía seleccionado era ${gen?.es || genre}, pero lo que ha pedido manda.` : ''}`
    : `Propón UNA canción en alemán que le venga bien.${genre === 'any' ? '' : `\nGénero pedido: ${gen?.es || genre}.`}
${yaVistas.length ? `NO propongas ninguna de estas, ya las ha visto:\n${yaVistas.join('\n')}` : ''}`;

  const prompt = `Eres profesor de alemán y melómano. Trabajas con un alumno de nivel ${niveau}
que quiere aprender con música.

${encargo}

BUSCA EN LA WEB para confirmar que la canción existe y para encontrar su vídeo oficial en YouTube.
No inventes URLs ni IDs de vídeo: usa solo los que hayas visto en los resultados.

MUY IMPORTANTE — DERECHOS DE AUTOR:
NO reproduzcas la letra. Ni entera, ni por versos, ni traducida, ni parafraseada verso a verso.
En "wortschatz" pon SOLO palabras sueltas o expresiones cortas de 1-3 palabras, como en un glosario.
Nunca frases de la canción. En "worumGehtEs" resume el tema con TUS palabras, sin citar.

Escribe todos los textos explicativos en ${idioma}. El alemán se queda en alemán.

Devuelve SOLO un objeto JSON:
{
  "problema": "solo si no has podido con lo que pidió: explica por qué, en ${idioma}. Si todo bien, null",
  "titel": "título de la canción",
  "artist": "artista o grupo",
  "jahr": 1999,
  "genre": "género",
  "land": "Deutschland / Österreich / Schweiz",
  "niveau": "A1/A2/B1 — lo difícil que es de entender cantada",
  "youtube": "URL del vídeo oficial en YouTube",
  "lyricsUrl": "URL donde está la letra oficial (genius.com, songtexte.com o la web del artista)",
  "worumGehtEs": "de qué trata la canción, 3-4 frases con tus palabras, en ${idioma}",
  "artistInfo": "quién es el artista, de dónde, qué estilo, por qué es conocido: 3-4 frases en ${idioma}",
  "warum": "por qué esta canción va bien para el nivel ${niveau}: ritmo, claridad al cantar, vocabulario… en ${idioma}",
  "wortschatz": [ { "de": "palabra o expresión corta (con artículo si es sustantivo)", "es": "traducción a ${idioma}", "nota": "matiz o uso, opcional" } ],
  "grammatik": [ { "punkt": "estructura que aparece en la canción", "erklaerung": "explicación breve en ${idioma}" } ],
  "hoertipps": [ "consejo concreto para escucharla y entenderla mejor, en ${idioma}" ]
}
Incluye 10-14 entradas en "wortschatz", 2-3 en "grammatik" y 2-3 en "hoertipps".
Sin texto fuera del JSON.`;

  // Si ya sabemos que no hay cuota, ni se manda: esperar siete minutos para que
  // te digan lo mismo que ya sabíamos no le sirve a nadie.
  const lim = limiteIA();
  if (lim) {
    throw new Error(
      `Sin cuota de Claude hasta ${new Date(lim.hasta).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })}. No se ha enviado nada para no hacerte esperar en balde.`
    );
  }

  // Siete minutos de margen eran demasiados: una búsqueda que se va por las
  // ramas encadena consultas hasta quedarse sin cuota y no devuelve nada.
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, tools: ['WebSearch', 'WebFetch'], timeoutMs: 240000 })
  }).catch(() => null);
  if (!res) throw new Error('No se pudo contactar con el puente local. ¿Está corriendo "npm run dev"?');
  if (!res.ok) {
    let msg = `Puente local: error ${res.status}`;
    let cuerpo = null;
    try {
      cuerpo = await res.json();
      if (cuerpo?.error) msg = cuerpo.error;
    } catch { /* deja el mensaje */ }
    // Solo la cuota agotada apaga la IA. El puente devuelve 429 también cuando
    // hay cola ("ocupado"), y eso se reintenta sin más: apagarlo todo por eso
    // dejaría la app coja por algo que se arregla esperando medio minuto.
    if (cuerpo?.limite) apuntarLimiteIA(cuerpo?.reset);
    throw new Error(msg);
  }
  const { text } = await res.json();
  const raw = extractJson(text);
  // Si no pudo con lo que se le pidió, dilo tal cual en vez de colar otra canción.
  if (raw?.problema && !raw?.titel) throw new Error(String(raw.problema));
  if (!raw || !raw.titel || !raw.artist) {
    const pista = String(text || '').replace(/\s+/g, ' ').trim().slice(0, 160);
    throw new Error('No se pudo leer la propuesta.' + (pista ? ' Llegó: "' + pista + '…"' : ''));
  }

  const url = (u) => (/^https?:\/\//i.test(String(u || '').trim()) ? String(u).trim() : null);
  const song = {
    id: songId(raw.artist, raw.titel),
    // Las explicaciones se escriben en el idioma que tenías puesto y ahí se
    // quedan: si luego cambias de idioma, la pantalla puede avisar en vez de
    // enseñarte castellano en la versión inglesa sin explicar por qué.
    lang: getLang(),
    titel: String(raw.titel).trim(),
    artist: String(raw.artist).trim(),
    jahr: Number(raw.jahr) || null,
    genre: String(raw.genre || '').trim(),
    land: String(raw.land || '').trim(),
    niveau: String(raw.niveau || niveau).trim(),
    youtube: url(raw.youtube),
    lyricsUrl: url(raw.lyricsUrl),
    worumGehtEs: String(raw.worumGehtEs || '').trim(),
    artistInfo: String(raw.artistInfo || '').trim(),
    warum: String(raw.warum || '').trim(),
    wortschatz: (Array.isArray(raw.wortschatz) ? raw.wortschatz : [])
      .map((w) => ({
        de: String(w.de || '').trim(),
        es: String(w.es || '').trim(),
        nota: String(w.nota || '').trim()
      }))
      // red de seguridad: nada de "vocabulario" que en realidad sea un verso
      .filter((w) => w.de && w.de.split(/\s+/).length <= 4),
    grammatik: (Array.isArray(raw.grammatik) ? raw.grammatik : [])
      .map((g) => ({
        punkt: String(g.punkt || '').trim(),
        erklaerung: String(g.erklaerung || '').trim()
      }))
      .filter((g) => g.punkt),
    hoertipps: (Array.isArray(raw.hoertipps) ? raw.hoertipps : []).map(String).filter(Boolean)
  };
  remember(song);
  return song;
}

export function ytId(url) {
  const m = String(url || '').match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
