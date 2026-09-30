import React, { useEffect, useRef, useState } from 'react';
import NotebookSession from './NotebookSession.jsx';
import { generateNotebookItems } from '../lib/ai.js';
import { useTeclas } from '../lib/teclas.js';

// Reto con IA sobre las palabras de un mazo. No hay motor propio: se le pasan
// las palabras al mismo generador que usa el Notizbuch y se juegan con su
// sesión, que ya sabe pintar mc y order y llevar la cuenta.
export default function VocabReto({ deck, onExit, onFinish }) {
  useTeclas({ Escape: onExit });
  const [items, setItems] = useState(null);
  const [err, setErr] = useState('');
  const pedido = useRef(false);

  useEffect(() => {
    if (pedido.current || !deck) return;
    pedido.current = true;
    const lista = deck.cards.map((c) => `${c.de} = ${c.es}`).join('\n');
    generateNotebookItems({ raw: lista, clean: '', lektion: { bandName: deck.bandName || 'A2' }, count: 8 })
      .then(setItems, (e) => setErr(e.message));
  }, [deck]);

  if (err) {
    return (
      <div className="card center stack">
        <p style={{ color: 'var(--bad)' }}>{err}</p>
        <button className="btn-ghost" onClick={onExit}><span className="fl-atras">←</span> {deck?.name}</button>
      </div>
    );
  }

  if (!items) {
    return (
      <div className="card center stack">
        <p className="muted">Preparando el reto con las palabras de {deck?.name}… (tarda un minuto)</p>
        <button className="btn-ghost" onClick={onExit}><span className="fl-atras">←</span> {deck?.name}</button>
      </div>
    );
  }

  return (
    <NotebookSession
      note={{ id: `reto-${deck.id}`, title: deck.name, items }}
      lektion={null}
      onExit={onExit}
      onFinish={onFinish}
    />
  );
}
