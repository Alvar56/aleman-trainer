import React from 'react';

/**
 * Tabla de referencia de casos y artículos (Kasus & Genus)
 * Reproduce fielmente la tabla de estudio (Bestimmte, Unbestimmte, Negativ- und Possessivartikel)
 * con terminaciones resaltadas (-r, -n, -m, -s, -e).
 */
export default function KasusTabelle({ onClose }) {
  return (
    <div className="kt-backdrop" onClick={onClose}>
      <div
        className="kasus-tabelle-panel"
        role="dialog"
        aria-label="Tabla de casos y artículos"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kt-header">
        <div className="kt-title-group">
          <div className="kt-title">📋 Die Artikelwörter & Fälle</div>
          <div className="kt-subtitle">Genus (Geschlecht) · Kasus (Fall)</div>
        </div>
        {onClose && (
          <button className="kt-close-btn" onClick={onClose} title="Cerrar tabla (Esc)">
            ✕
          </button>
        )}
      </div>

      <div className="kt-scroll">
        <table className="kt-table">
          <thead>
            <tr>
              <th className="kt-th-kasus">Kasus</th>
              <th className="kt-th-gen kt-mask">
                <span className="kt-gen-label">maskulin</span>
                <span className="kt-marker kt-mark-m">-r, -n, -m</span>
              </th>
              <th className="kt-th-gen kt-neut">
                <span className="kt-gen-label">neutral</span>
                <span className="kt-marker kt-mark-n">-s, wie Nom, -m</span>
              </th>
              <th className="kt-th-gen kt-fem">
                <span className="kt-gen-label">feminin</span>
                <span className="kt-marker kt-mark-f">-e, wie Nom, -r</span>
              </th>
              <th className="kt-th-gen kt-pl">
                <span className="kt-gen-label">Plural</span>
                <span className="kt-marker kt-mark-p">-e, wie Nom, -n</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 1. NOMINATIV */}
            <tr className="kt-row-nom">
              <td className="kt-td-kasus">
                <div className="kt-kasus-name">Nominativ</div>
                <div className="kt-kasus-sub">Wer?</div>
              </td>
              <td className="kt-cell kt-mask">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">de<span className="kt-hi">r</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein</span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein</span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein</span>
                  <span className="kt-subposs">, dein, sein, ihr, unser, euer</span>
                </div>
              </td>
              <td className="kt-cell kt-neut">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">da<span className="kt-hi">s</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein</span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein</span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein</span>
                  <span className="kt-subposs">, dein, sein, ihr, unser, euer</span>
                </div>
              </td>
              <td className="kt-cell kt-fem">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">di<span className="kt-hi">e</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein<span className="kt-hi">e</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi">e</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi">e</span></span>
                  <span className="kt-subposs">, deine, seine, ihre...</span>
                </div>
              </td>
              <td className="kt-cell kt-pl">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">di<span className="kt-hi">e</span></strong>
                </div>
                <div className="kt-item kt-none">
                  <span className="kt-type">unbest.:</span>
                  <em>(kein Plural!)</em>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi">e</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi">e</span></span>
                  <span className="kt-subposs">, deine, seine, ihre...</span>
                </div>
              </td>
            </tr>

            {/* 2. AKKUSATIV */}
            <tr className="kt-row-akk">
              <td className="kt-td-kasus">
                <div className="kt-kasus-name">Akkusativ</div>
                <div className="kt-kasus-sub">Wen? / Was?</div>
              </td>
              <td className="kt-cell kt-mask kt-changed">
                <div className="kt-pill-alert">Nur Maskulinum ändert sich!</div>
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">de<span className="kt-hi kt-hi-akk">n</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein<span className="kt-hi kt-hi-akk">en</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi kt-hi-akk">en</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi kt-hi-akk">en</span></span>
                  <span className="kt-subposs">, deinen, seinen, ihren...</span>
                </div>
              </td>
              <td className="kt-cell kt-neut kt-same">
                <div className="kt-same-badge">wie Nominativ</div>
                <div className="kt-item"><strong className="kt-art">das</strong></div>
                <div className="kt-item"><span className="kt-art">ein</span> / <span className="kt-art">kein</span></div>
                <div className="kt-item"><span className="kt-art">mein</span>, dein...</div>
              </td>
              <td className="kt-cell kt-fem kt-same">
                <div className="kt-same-badge">wie Nominativ</div>
                <div className="kt-item"><strong className="kt-art">die</strong></div>
                <div className="kt-item"><span className="kt-art">eine</span> / <span className="kt-art">keine</span></div>
                <div className="kt-item"><span className="kt-art">meine</span>, deine...</div>
              </td>
              <td className="kt-cell kt-pl kt-same">
                <div className="kt-same-badge">wie Nominativ</div>
                <div className="kt-item"><strong className="kt-art">die</strong></div>
                <div className="kt-item kt-none"><em>(kein Plural)</em></div>
                <div className="kt-item"><span className="kt-art">keine</span> / <span className="kt-art">meine</span>...</div>
              </td>
            </tr>

            {/* 3. DATIV */}
            <tr className="kt-row-dat">
              <td className="kt-td-kasus">
                <div className="kt-kasus-name">Dativ</div>
                <div className="kt-kasus-sub">Wem? / Wo?</div>
              </td>
              <td className="kt-cell kt-mask">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">de<span className="kt-hi kt-hi-dat">m</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein<span className="kt-hi kt-hi-dat">em</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi kt-hi-dat">em</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi kt-hi-dat">em</span></span>
                  <span className="kt-subposs">, deinem, seinem...</span>
                </div>
              </td>
              <td className="kt-cell kt-neut">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">de<span className="kt-hi kt-hi-dat">m</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein<span className="kt-hi kt-hi-dat">em</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi kt-hi-dat">em</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi kt-hi-dat">em</span></span>
                  <span className="kt-subposs">, deinem, seinem...</span>
                </div>
              </td>
              <td className="kt-cell kt-fem">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">de<span className="kt-hi kt-hi-dat">r</span></strong>
                </div>
                <div className="kt-item">
                  <span className="kt-type">unbest.:</span>
                  <span className="kt-art">ein<span className="kt-hi kt-hi-dat">er</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi kt-hi-dat">er</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi kt-hi-dat">er</span></span>
                  <span className="kt-subposs">, deiner, seiner...</span>
                </div>
              </td>
              <td className="kt-cell kt-pl">
                <div className="kt-item">
                  <span className="kt-type">bestimmt:</span>
                  <strong className="kt-art">de<span className="kt-hi kt-hi-dat">n</span></strong>
                </div>
                <div className="kt-item kt-none">
                  <span className="kt-type">unbest.:</span>
                  <em>(kein Plural)</em>
                </div>
                <div className="kt-item">
                  <span className="kt-type">negativ:</span>
                  <span className="kt-art">kein<span className="kt-hi kt-hi-dat">en</span></span>
                </div>
                <div className="kt-item">
                  <span className="kt-type">possessiv:</span>
                  <span className="kt-art">mein<span className="kt-hi kt-hi-dat">en</span></span>
                  <span className="kt-subposs">, deinen...</span>
                </div>
                <div className="kt-nomen-note">
                  + <strong>-n</strong> am Nomen
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="kt-footer-notes">
          <div className="kt-note-card">
            <span className="kt-note-icon">💡</span>
            <div>
              <strong>Dativ Plural:</strong> Das Nomen bekommt ein <code>-n</code> (z.B. <em>mit meinen Kinder<strong>n</strong></em>, <em>den Gäste<strong>n</strong></em>), außer wenn der Plural schon auf <code>-n</code> oder <code>-s</code> endet (<em>den Autos</em>).
            </div>
          </div>
          <div className="kt-rule-summary">
            <span className="kt-rule-pill">m: -r / -n / -m</span>
            <span className="kt-rule-pill">n: -s / -s / -m</span>
            <span className="kt-rule-pill">f: -e / -e / -r</span>
            <span className="kt-rule-pill">pl: -e / -e / -n (+n)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
