import React, { useRef, useState } from 'react';
import { t, pick } from '../lib/i18n.js';
import { parseVocabFile } from '../lib/xlsxImport.js';
import { saveUserDeck } from '../lib/vocab.js';

// Importar un Excel o un CSV como mazo de vocabulario.
//
// Vivía en Wortschatz, entre los mazos y el generador con IA, y estorbaba: es
// algo que se hace una vez —o ninguna—, mientras que esa pantalla se abre
// todos los días. Ahora está en Ajustes, con el resto de cosas de configurar
// una vez y olvidarse.
export default function ImportarVocab({ onChanged }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [preview, setPreview] = useState(null);
  const [impName, setImpName] = useState('');
  const [hecho, setHecho] = useState('');
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  async function onFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setErr('');
    setHecho('');
    setBusy(true);
    try {
      const res = await parseVocabFile(file);
      if (!res.cards.length) {
        setErr(t('voc.importNone'));
        setPreview(null);
      } else {
        setPreview(res);
        setImpName(file.name.replace(/\.[^.]+$/, ''));
      }
    } catch (e2) {
      setErr(t('voc.importFail') + e2.message);
    } finally {
      setBusy(false);
    }
  }

  function confirmar() {
    const n = preview.cards.length;
    saveUserDeck({
      name: impName || pick('Importado', 'Imported'),
      emoji: '📄',
      source: 'excel',
      cards: preview.cards
    });
    setPreview(null);
    setFileName('');
    setHecho(t('voc.importDone', { n }));
    if (fileRef.current) fileRef.current.value = '';
    onChanged?.();
  }

  return (
    <div className="panel stack">
      <h2>{t('voc.importTitle')}</h2>
      <p className="muted" style={{ fontSize: '0.88rem' }}>{t('voc.importHint')}</p>

      <div className="btn-row" style={{ alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <label className="btn-ghost btn-sm" style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
          {pick('Seleccionar archivo', 'Select file')}
          <input ref={fileRef} type="file" accept=".xlsx,.xls,.csv,.tsv" onChange={onFile} style={{ display: 'none' }} />
        </label>
        <span className="muted" style={{ fontSize: '0.85rem' }}>
          {fileName || pick('Ningún archivo seleccionado', 'No file selected')}
        </span>
      </div>
      {busy && <p className="muted">{t('voc.reading')}</p>}
      {err && <p style={{ color: 'var(--bad)', fontSize: '0.88rem' }}>{err}</p>}
      {hecho && <p style={{ color: 'var(--good)', fontSize: '0.88rem' }}>{hecho}</p>}

      {preview && (
        <>
          <p className="field-hint">{preview.note}</p>
          <div className="panel imp-preview">
            {preview.cards.slice(0, 8).map((c, i) => (
              <div key={i} className="imp-fila">
                <strong>{c.de}</strong> — {c.es}
              </div>
            ))}
            {preview.cards.length > 8 && (
              <div className="muted" style={{ fontSize: '0.8rem' }}>
                {t('voc.andMore', { n: preview.cards.length - 8 })}
              </div>
            )}
          </div>
          <label className="field">
            {t('voc.deckName')}
            <input type="text" value={impName} onChange={(e) => setImpName(e.target.value)} />
          </label>
          <button className="btn-primary btn-sm" onClick={confirmar} style={{ alignSelf: 'flex-start' }}>
            {t('voc.saveDeck', { n: preview.cards.length })}
          </button>
        </>
      )}
    </div>
  );
}
