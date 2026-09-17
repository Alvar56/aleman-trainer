import React, { useState } from 'react';
import FoxFace from './FoxFace.jsx';
import {
  getFuchs,
  setFuchs,
  coloresDisponibles,
  complementosDe,
  animalesDisponibles,
  comprar,
  logros,
  textoReq,
  puedeCambiarNombre,
  comprarNombre,
  PRECIO_NOMBRE
} from '../lib/fuchs.js';
import { saldo } from '../lib/monedas.js';

// La tienda del zorro va ENTERA en alemán, títulos y nombres de las cosas
// incluidos: es una pantalla que se mira mucho y son palabras fáciles, así que
// sale vocabulario gratis. Y sin emojis delante de cada nombre: con cincuenta
// cosas en la lista, el emoji era ruido, no información.
const RANURAS = [
  { id: 'cabeza', de: 'Auf dem Kopf' },
  { id: 'ojos', de: 'Auf den Augen' },
  { id: 'cuello', de: 'Um den Hals' },
  { id: 'ropa', de: 'Kleidung' },
  { id: 'pies', de: 'An den Füßen' },
  { id: 'objeto', de: 'Gegenstände' },
  { id: 'particulas', de: 'Effekte' }
];

// Una cosa de la tienda. Tres estados: ya es tuya (se pone), se puede comprar,
// o es un trofeo — y esos no se venden, se ganan.
function Ficha({ cosa, puesta, monedas, onPoner, onComprar, dot = null }) {
  const trofeo = !!cosa.req;
  const puedes = monedas >= cosa.precio;

  if (cosa.abierto) {
    return (
      <button className={'fox-item' + (puesta ? ' on' : '')} onClick={onPoner}>
        <span className="fci-fila">
          {dot}
          <span>{cosa.de}</span>
        </span>
      </button>
    );
  }

  return (
    <button
      className={'fox-item bloqueado' + (!trofeo && puedes ? ' comprable' : '')}
      disabled={trofeo || !puedes}
      onClick={trofeo ? undefined : onComprar}
      title={trofeo ? 'Das musst du dir verdienen' : ''}
    >
      <span className="fci-fila">
        {dot}
        <span>{cosa.de}</span>
      </span>
      <small>
        {trofeo ? textoReq(cosa.req) : `${cosa.precio} Münzen${puedes ? ' · kaufen' : ''}`}
      </small>
    </button>
  );
}

export default function FoxAjustes({ onClose, onChange }) {
  const [f, setF] = useState(getFuchs);
  const [monedas, setMonedas] = useState(saldo);
  const [aviso, setAviso] = useState('');
  const [nombreLibre, setNombreLibre] = useState(puedeCambiarNombre);
  const l = logros();

  function cambiar(patch) {
    const next = setFuchs(patch);
    setF(next);
    onChange?.(next);
  }

  function sinMonedas() {
    setAviso('Du hast nicht genug Münzen.');
    setTimeout(() => setAviso(''), 2500);
  }

  // Ponerle otro nombre se paga una vez y ya se queda desbloqueado.
  function pagarNombre() {
    const r = comprarNombre();
    setMonedas(r.saldo);
    if (!r.ok) return sinMonedas();
    setNombreLibre(true);
  }

  function pagar(id, ranura) {
    const r = comprar(id);
    setMonedas(r.saldo);
    if (!r.ok) return sinMonedas();
    // recién comprado, se pone puesto
    cambiar(ranura ? { [ranura]: id } : { especie: id });
  }

  return (
    <div className="fox-modal" role="dialog" aria-modal="true">
      <div className="fox-modal-caja">
        <div className="row spread" style={{ alignItems: 'flex-start' }}>
          <h2 style={{ margin: 0 }}>Dein Fuchs</h2>
          <button className="lied-cerrar" onClick={onClose} title="Zurück">✕</button>
        </div>

        {/* Tres columnas: el saldo a la izquierda, que es el número que miras
            para saber si te llega; Felix en medio; y lo demás a la derecha. */}
        <div className="fox-ficha">
          <div className="fox-saldo-grande">
            <span className="fsg-num">{monedas}</span>
            <span className="fsg-lab">Münzen</span>
          </div>
          <div className="fox-preview">
            <FoxFace fuchs={f} gesto="feliz" size={140} conCuerpo />
          </div>
          <ul className="fox-stats">
            <li><strong>{l.coronas}</strong><small>Kronen</small></li>
            <li><strong>{l.nivel}</strong><small>Level</small></li>
            <li><strong>{l.racha}</strong><small>in Folge</small></li>
            <li><strong>{l.dias}</strong><small>Tage</small></li>
          </ul>
        </div>
        {aviso && <p className="fox-aviso">{aviso}</p>}

        <label className="field">
          Sein Name
          <div className="fox-nombre">
            <input
              type="text"
              value={f.nombre}
              maxLength={16}
              disabled={!nombreLibre}
              onChange={(e) => cambiar({ nombre: e.target.value })}
            />
            {!nombreLibre && (
              <button
                type="button"
                className={'fox-item' + (monedas >= PRECIO_NOMBRE ? ' comprable' : ' bloqueado')}
                disabled={monedas < PRECIO_NOMBRE}
                onClick={pagarNombre}
              >
                <small>{PRECIO_NOMBRE} Münzen{monedas >= PRECIO_NOMBRE ? ' · kaufen' : ''}</small>
              </button>
            )}
          </div>
        </label>

        <div className="fox-bloque">
          <div className="lk-block-title">Farbe</div>
          <div className="fox-items">
            {coloresDisponibles().map((c) => (
              <Ficha
                key={c.id}
                cosa={c}
                puesta={f.color === c.id}
                monedas={monedas}
                dot={<span className="fci-dot" style={{ background: c.fur, borderColor: c.sombra }} />}
                onPoner={() => cambiar({ color: c.id })}
                onComprar={() => pagar(c.id, 'color')}
              />
            ))}
          </div>
        </div>

        {RANURAS.map((r) => (
          <div className="fox-bloque" key={r.id}>
            <div className="lk-block-title">{r.de}</div>
            <div className="fox-items">
              {complementosDe(r.id).map((c) => (
                <Ficha
                  key={c.id}
                  cosa={c}
                  puesta={f[r.id] === c.id}
                  monedas={monedas}
                  onPoner={() => cambiar({ [r.id]: c.id })}
                  onComprar={() => pagar(c.id, r.id)}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="fox-bloque">
          <div className="lk-block-title">Tier</div>
          <div className="fox-items">
            {animalesDisponibles().map((a) => (
              <Ficha
                key={a.id}
                cosa={a}
                puesta={f.especie === a.id}
                monedas={monedas}
                onPoner={() => cambiar({ especie: a.id })}
                onComprar={() => pagar(a.id, null)}
              />
            ))}
          </div>
        </div>

        <button className="btn-primary" style={{ width: '100%', marginTop: 8 }} onClick={onClose}>
          Fertig
        </button>
      </div>
    </div>
  );
}
