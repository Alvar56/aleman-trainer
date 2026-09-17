import React, { useMemo, useState } from 'react';
import FoxFace from './FoxFace.jsx';
import FoxAjustes from './FoxAjustes.jsx';
import { getFuchs, nuevosDesbloqueos, marcarVisto, preguntaFuchs } from '../lib/fuchs.js';
import { t, pick } from '../lib/i18n.js';


export default function FoxCard({ onAbrir }) {
  // En estado, no leído a pelo: al personalizarlo desde aquí, la tarjeta tiene
  // que repintarse con el zorro nuevo sin recargar la página.
  const [fuchs, setFuchsLocal] = useState(getFuchs);
  // Una pregunta por carga de la app: si cambiara a cada repintado, mareas.
  const pregunta = useMemo(() => preguntaFuchs(), []);
  const [nuevos] = useState(() => nuevosDesbloqueos());
  const [respuesta, setRespuesta] = useState('');
  const [ajustes, setAjustes] = useState(false);

  function abrir(conTexto) {
    if (nuevos.length) marcarVisto(nuevos.map((n) => n.id));
    onAbrir({ pregunta, respuesta: conTexto || '' });
  }

  return (
    <div className="fox-card">
      <button className="fox-card-cara" onClick={() => setAjustes(true)} title={t('fox.customiseName', { nombre: fuchs.nombre })}>
        {/* En la portada, los dos ojos abiertos: el entornado ahi solo despistaba. */}
        <FoxFace fuchs={fuchs} gesto="normal" size={158} conCuerpo className="flota" />
      </button>

      <div className="fox-card-texto">
        <div className="fox-burbuja">
          <span className="fb-de">{pregunta.de}</span>
          <span className="fb-es">{pregunta.es}</span>
        </div>

        <form
          className="fox-card-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (respuesta.trim()) abrir(respuesta.trim());
          }}
        >
          <input
            className="ask-input"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder={t('fox.answerPh', { nombre: fuchs.nombre })}
          />
          <button className="btn-primary btn-sm" type="submit" disabled={!respuesta.trim()}>
            {t('fox.send')}
          </button>
        </form>

        <div className="fox-card-pie">
          <button className="link-btn" onClick={() => abrir('')}>
            {t('fox.chatWith', { nombre: fuchs.nombre })} →
          </button>
          {/* Antes solo se podía personalizar entrando en el chat, que no es
              donde uno lo busca. */}
          <button className="link-btn" onClick={() => setAjustes(true)}>
            {t('fox.customiseName', { nombre: fuchs.nombre })}
          </button>
          {nuevos.length > 0 && (
            <span className="fox-nuevo">
              🎁 {t('fox.unlocked', { n: nuevos.length, que: pick(nuevos[0].es, nuevos[0].en) })}
            </span>
          )}
        </div>
      </div>

      {ajustes && (
        <FoxAjustes onClose={() => setAjustes(false)} onChange={setFuchsLocal} />
      )}
    </div>
  );
}
