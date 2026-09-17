// Importa un .xlsx / .csv a tarjetas { de, es, ex, exEs }.
// Detecta las columnas por el encabezado; si no hay encabezado claro,
// usa las dos primeras columnas (alemán, español).

import * as XLSX from 'xlsx';

const DE_HINTS = ['deutsch', 'german', 'wort', 'word', 'begriff', 'vokabel', 'aleman', 'alemán', 'de'];
const ES_HINTS = ['spanisch', 'spanish', 'übersetzung', 'translation', 'bedeutung', 'meaning', 'espanol', 'español', 'traduccion', 'traducción', 'es'];
const EX_HINTS = ['satz', 'sentence', 'beispiel', 'example', 'kontext', 'context', 'ejemplo', 'frase'];
const EXES_HINTS = ['sentence translation', 'übersetzung satz', 'traduccion frase', 'traducción del ejemplo', 'ejemplo traduccion'];

function findCol(headers, hints) {
  const lower = headers.map((h) => String(h || '').trim().toLowerCase());
  for (const hint of hints) {
    const i = lower.findIndex((h) => h === hint);
    if (i >= 0) return i;
  }
  for (const hint of hints) {
    const i = lower.findIndex((h) => h.includes(hint));
    if (i >= 0) return i;
  }
  return -1;
}

export async function parseVocabFile(file) {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: 'array' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, defval: '' });
  if (!rows.length) return { cards: [], note: 'El archivo está vacío.' };

  const first = rows[0].map((c) => String(c).trim().toLowerCase());
  const HINT_ALL = [...DE_HINTS, ...ES_HINTS, ...EX_HINTS, ...EXES_HINTS];
  const hasHeader = first.some((c) => c && HINT_ALL.some((h) => c === h || c.includes(h)));

  let deI = 0;
  let esI = 1;
  let exI = -1;
  let exEsI = -1;
  let dataRows = rows;

  if (hasHeader) {
    const headers = rows[0];
    deI = findCol(headers, DE_HINTS);
    esI = findCol(headers, ES_HINTS);
    exEsI = findCol(headers, EXES_HINTS);
    exI = findCol(headers, EX_HINTS);
    if (exI === exEsI) exEsI = -1;
    if (deI < 0) deI = 0;
    if (esI < 0) esI = deI === 1 ? 0 : 1;
    dataRows = rows.slice(1);
  }

  const cards = [];
  for (const r of dataRows) {
    const de = String(r[deI] ?? '').trim();
    const es = String(r[esI] ?? '').trim();
    if (!de || !es) continue;
    cards.push({
      de,
      es,
      ex: exI >= 0 ? String(r[exI] ?? '').trim() : '',
      exEs: exEsI >= 0 ? String(r[exEsI] ?? '').trim() : ''
    });
  }

  return {
    cards,
    note: `${cards.length} tarjetas · columnas: alemán = ${col(deI)}, español = ${col(esI)}${exI >= 0 ? ', ejemplo = ' + col(exI) : ''}`,
    headerDetected: hasHeader
  };
}

function col(i) {
  return String.fromCharCode(65 + i);
}
