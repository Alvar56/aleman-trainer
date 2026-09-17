import React, { useEffect, useRef, useState } from 'react';
import { saldo, suscribir } from '../lib/monedas.js';

// El contador de monedas, fijo arriba a la derecha en todas las pantallas.
//
// Cuando cobras un ejercicio salen monedas del sitio que acabas de tocar (el
// botón de la respuesta) y vuelan hasta el contador; el número sube según van
// llegando, no de golpe. Antes solo subía un "+N" desde la píldora, y como la
// píldora ya está pegada al borde de arriba, el +N se salía de la pantalla.

const VUELO = 620; // lo que tarda una moneda en llegar
const ENTRE = 70; // separación entre una moneda y la siguiente
const MAX = 8; // más de ocho a la vez es confeti, no información

export default function Monedero() {
  const [mostrado, setMostrado] = useState(saldo);
  const [volando, setVolando] = useState([]);
  const [golpe, setGolpe] = useState(0);
  const [subidas, setSubidas] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const pildora = useRef(null);
  const puntero = useRef(null);
  const id = useRef(0);
  const timers = useRef([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // De dónde salen: lo último que has tocado. Si no has tocado nada todavía
  // (teclado, o una recompensa automática), del centro de la pantalla.
  useEffect(() => {
    const ver = (e) => {
      puntero.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener('pointerdown', ver, true);
    return () => document.removeEventListener('pointerdown', ver, true);
  }, []);

  useEffect(
    () =>
      suscribir(({ cuanto, saldo: nuevo }) => {
        if (cuanto <= 0) {
          setMostrado(nuevo); // comprar algo no merece fuegos artificiales
          return;
        }

        const caja = pildora.current?.getBoundingClientRect();
        const destino = caja
          ? { x: caja.left + caja.width / 2, y: caja.top + caja.height / 2 }
          : { x: window.innerWidth - 60, y: 28 };
        const origen = puntero.current || {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };

        // El premio se reparte entre las monedas que vuelan, para que el
        // contador vaya sumando a medida que caen.
        const n = Math.max(1, Math.min(cuanto, MAX));
        const trozos = Array.from(
          { length: n },
          (_, i) => Math.floor(cuanto / n) + (i < cuanto % n ? 1 : 0)
        );

        const nid = ++id.current;
        setSubidas((s) => [...s, { k: nid, cuanto }]);
        timers.current.push(
          setTimeout(() => setSubidas((s) => s.filter((x) => x.k !== nid)), VUELO + 900)
        );

        trozos.forEach((valor, i) => {
          const k = ++id.current;
          const jx = (Math.random() - 0.5) * 46;
          const jy = (Math.random() - 0.5) * 28;
          const desde = { x: origen.x + jx, y: origen.y + jy };
          const retraso = i * ENTRE;
          const ultima = i === n - 1;

          setVolando((v) => [
            ...v,
            { k, x: desde.x, y: desde.y, dx: destino.x - desde.x, dy: destino.y - desde.y, retraso }
          ]);

          timers.current.push(
            setTimeout(() => {
              setVolando((v) => v.filter((m) => m.k !== k));
              // la última cuadra el contador con el saldo de verdad, por si
              // alguna animación se ha quedado por el camino
              setMostrado((s) => (ultima ? nuevo : s + valor));
              setGolpe((g) => g + 1);
            }, retraso + VUELO)
          );
        });
      }),
    []
  );

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  return (
    <>
      <div className={`monedero${scrolled ? ' scrolled' : ''}`} ref={pildora} aria-live="polite">
        {/* la key hace que la animación del saltito se reinicie con cada moneda */}
        <span key={golpe} className={'mnd-icono' + (golpe ? ' salta' : '')}>
          🪙
        </span>
        <strong className="mnd-total">{mostrado}</strong>
        <span className="mnd-subidas" aria-hidden="true">
          {subidas.map((s) => (
            <span key={s.k} className="mnd-sube">
              +{s.cuanto}
            </span>
          ))}
        </span>
      </div>
      <div className="mnd-vuelos" aria-hidden="true">
        {volando.map((m) => (
          <span
            key={m.k}
            className="mnd-vuelo"
            style={{
              left: m.x,
              top: m.y,
              '--dx': `${m.dx}px`,
              '--dy': `${m.dy}px`,
              '--dur': `${VUELO}ms`,
              '--retraso': `${m.retraso}ms`
            }}
          >
            🪙
          </span>
        ))}
      </div>
    </>
  );
}
