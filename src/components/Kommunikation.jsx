import React, { useState } from 'react';
import { t, pick } from '../lib/i18n.js';
import BookNav from './BookNav.jsx';
import Dialog from './Dialog.jsx';
import KommAsk from './KommAsk.jsx';
import KommPractice from './KommPractice.jsx';
import { estadisticas as ueStats } from '../lib/uebersetzen.js';
import { getLektion, KURSBUCH, lektionLabel, lektionKommunikation } from '../lib/kursbuch/index.js';
import { generateDialog } from '../lib/ai.js';
import { aiAvailable } from '../lib/settings.js';
import { kommMastery, recordKommPracticed } from '../lib/progress.js';
import { GENDER_NIVELES } from '../lib/vocab.js';

export default function Kommunikation({ lektionId, onOpen, onBack, onTraducir }) {
  if (!lektionId) {
    return (
      <BookNav
        title="Kommunikation"
        subtitle={t('komm.sub', { libro: KURSBUCH.title })}
        count={(l) => l.kommunikation.length}
        unit={[t('function'), t('functions')]}
        onOpen={(l) => onOpen(l.id)}
        progressKey="kommunikation"
        extra={
          <>
            {onTraducir && <TarjetaTraducir onTraducir={onTraducir} />}
            <KommAsk niveau="A2" />
          </>
        }
      />
    );
  }
  return <KommDetail lektionId={lektionId} onBack={onBack} />;
}

function TarjetaTraducir({ onTraducir }) {
  const [dir, setDir] = useState('mix');
  const [nivel, setNivel] = useState('all');
  const st = ueStats({ nivel });
  
  // Los mismos 26 px de aire que hay en Vocabulario entre las lecciones y el
  // juego de der/die/das.
  return (
    <div style={{ marginTop: 26, marginBottom: 22 }}>
      <button
        className="gender-cta"
        onClick={() => onTraducir(null, dir, nivel)}
      >
        <span className="gc-emoji">🔁</span>
        <span style={{ flex: 1 }}>
          <div className="gc-title">{t('ueb.title')}</div>
          <div className="gc-sub">
            {t('ueb.sub', { known: st.sabidas, total: st.total, pct: st.pct })}
          </div>
        </span>
        <span className="chev">›</span>
      </button>

      <div className="gender-niveles">
        <span className="muted" style={{ fontSize: '0.78rem' }}>{t('voc.difficulty')}</span>
        {GENDER_NIVELES.map((n) => (
          <button
            key={n.id}
            className={'ask-chip' + (n.id === nivel ? ' on' : '')}
            onClick={() => setNivel(n.id)}
          >
            {pick(n.es, n.en)}
          </button>
        ))}
      </div>

      <div className="gender-niveles" style={{ marginTop: 14 }}>
        <span className="muted" style={{ fontSize: '0.78rem' }}>{pick('Dirección', 'Direction')}</span>
        <button className={'ask-chip' + (dir === 'mix' ? ' on' : '')} onClick={() => setDir('mix')}>
          {pick('Mixto', 'Mixed')}
        </button>
        <button className={'ask-chip' + (dir === 'es-de' ? ' on' : '')} onClick={() => setDir('es-de')}>
          {pick('Nativo → Alemán', 'Native → German')}
        </button>
        <button className={'ask-chip' + (dir === 'de-es' ? ' on' : '')} onClick={() => setDir('de-es')}>
          {pick('Alemán → Nativo', 'German → Native')}
        </button>
      </div>
    </div>
  );
}

function KommDetail({ lektionId, onBack, dialog: propDialog, busy: propBusy, setDialog: propSetDialog, setBusy: propSetBusy }) {
  const lektion = getLektion(lektionId);
  const [localBusy, setLocalBusy] = useState(null); // null | 'alles' | índice de la función
  const [err, setErr] = useState('');
  const [open, setOpen] = useState(null);
  const [localDialog, setLocalDialog] = useState(null);
  const [lastFocus, setLastFocus] = useState(null);
  const [practica, setPractica] = useState(null);   // la función que estás practicando
  // Sube al terminar una práctica, para repintar las marcas sin recargar.
  const [vuelta, setVuelta] = useState(0);
  
  const dialog = propDialog !== undefined ? propDialog : localDialog;
  const setDialog = propSetDialog || setLocalDialog;
  const busy = propBusy !== undefined ? propBusy : localBusy;
  const setBusy = propSetBusy || setLocalBusy;
  
  const aiOn = aiAvailable();
  // Las frases del libro, con la glosa ya en el idioma de la interfaz.
  const funktionen = lektionKommunikation(lektion);
  const km = lektion ? kommMastery(lektion.id, lektion.kommunikation) : null;
  const hecho = km?.hechas || {};

  if (!lektion) {
    return (
      <div className="card center stack">
        <p>{t('notFound')}</p>
        <button className="btn-ghost" onClick={onBack}>{t('back')}</button>
      </div>
    );
  }

  async function makeDialog(funktion, key) {
    setErr('');
    setBusy(key);
    setLastFocus(funktion);
    try {
      const d = await generateDialog({ lektion, funktion });
      setDialog(d);
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(null);
    }
  }

  if (practica) {
    return (
      <KommPractice
        lektionId={lektion.id}
        funktion={practica}
        todasLasFrases={funktionen.flatMap((x) => (x.wendungen || []).map((w) => w.de))}
        onHecho={() => setVuelta((v) => v + 1)}
        onSalir={() => setPractica(null)}
      />
    );
  }

  if (dialog) {
    return (
      <Dialog
        dialog={dialog}
        lektion={lektion}
        busy={busy !== null}
        onContestadas={() => {
          if (lastFocus?.funktion) {
            recordKommPracticed(lektion.id, lastFocus.funktion);
            setVuelta((v) => v + 1);
          }
        }}
        onBack={() => setDialog(null)}
        onRegenerate={() => makeDialog(lastFocus, 'regen')}
      />
    );
  }

  return (
    <div className="reading stack">
      <button className="link-btn" style={{ padding: 0, alignSelf: 'flex-start' }} onClick={onBack}>
        ← Kommunikation
      </button>

      <div className="page-head" style={{ marginBottom: 0 }}>
        <h1>{lektionLabel(lektion)}</h1>
        <p>{lektion.bandName} · {lektion.kommunikation.length} {t('functions')}</p>
      </div>

      {funktionen.map((k, i) => (
        <div className="card" key={i} style={{ padding: 0, overflow: 'hidden' }}>
          <button className="komm-head" onClick={() => setOpen(open === i ? null : i)} style={{ padding: 12 }}>
            <span className="lk-block-title" style={{ margin: 0 }}>
              {k.funktion}
              {k.es && <div className="muted" style={{ fontSize: '0.8rem', fontWeight: 'normal', marginTop: 2 }}>{k.es}</div>}
            </span>
            <span className="muted" style={{ fontSize: '0.78rem' }}>
              {(k.wendungen || []).length} {t('komm.phrases')} {open === i ? '▴' : '▾'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 12px 12px' }}>
              <ul className="lk-examples" style={{ marginTop: 4 }}>
                {(k.wendungen || []).map((w, wi) => (
                  <li key={wi}>
                    <span className="de">{w.de}</span>
                    <span className="es">{w.es}</span>
                  </li>
                ))}
              </ul>
              <div className="row" style={{ gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                {/* Practicar no necesita IA: las frases ya están en el libro.
                    Es lo único que sube el porcentaje de esta sección. */}
                <button className="btn-primary btn-sm" onClick={() => setPractica(k)}>
                  {t('komm.practise')}
                </button>
                <button
                  className="btn-ghost btn-sm"
                  onClick={() => makeDialog(k, i)}
                  disabled={!aiOn || busy !== null}
                >
                  {busy === i ? t('generating') : t('komm.convThis')}
                </button>
                {hecho[k.funktion] && <span className="pill completo">✓</span>}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="card lk-all">
        <div>
          <strong>{t('komm.convLesson')}</strong>
          <p className="muted" style={{ fontSize: '0.84rem', marginTop: 3 }}>
            {t('komm.convLessonSub')}
          </p>
        </div>
        <button className="btn-primary" onClick={() => makeDialog(null, 'alles')} disabled={!aiOn || busy !== null}>
          {busy === 'alles' ? t('komm.writing') : t('komm.genConv')}
        </button>
      </div>

      {!aiOn && (
        <p className="muted" style={{ fontSize: '0.83rem' }}>
          {t('komm.offConv')}
        </p>
      )}
      {err && <p style={{ color: 'var(--bad)', fontSize: '0.85rem' }}>{err}</p>}
    </div>
  );
}
