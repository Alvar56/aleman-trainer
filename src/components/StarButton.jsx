import React, { useState, useEffect } from 'react';
import { isStarred, toggleStar, onStarsChanged } from '../lib/stars.js';

export default function StarButton({ item, className = '', onToggle }) {
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    if (!item?.id) return;
    setStarred(isStarred(item.id));
    return onStarsChanged(() => {
      setStarred(isStarred(item.id));
    });
  }, [item?.id]);

  if (!item || !item.id) return null;

  return (
    <button
      type="button"
      className={'pill star-pill' + (starred ? ' starred' : '') + (className ? ' ' + className : '')}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        const next = toggleStar(item.id, item);
        setStarred(next);
        onToggle?.(next);
      }}
      title={starred ? 'Quitar de favoritos' : 'Guardar en favoritos'}
      aria-label={starred ? 'Quitar de favoritos' : 'Guardar en favoritos'}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={starred ? '#f59e0b' : 'none'}
        stroke={starred ? '#f59e0b' : 'currentColor'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'inline-block', verticalAlign: 'middle', transition: 'transform 0.15s ease, fill 0.15s ease' }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
}
