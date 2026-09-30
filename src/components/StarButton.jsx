import React, { useState, useEffect, useRef } from 'react';
import { isStarred, toggleStar, onStarsChanged } from '../lib/stars.js';
import { t } from '../lib/i18n.js';

const SPARKLE_CONFIGS = [
  { dx: 0, dy: -24, scale: 1.15, rot: 45, delay: 0, color: '#fbbf24', size: 10 },
  { dx: 17, dy: -17, scale: 0.9, rot: 90, delay: 40, color: '#f59e0b', size: 8 },
  { dx: 24, dy: 0, scale: 1.25, rot: 15, delay: 20, color: '#fde047', size: 9 },
  { dx: 17, dy: 17, scale: 0.85, rot: 60, delay: 60, color: '#fbbf24', size: 7 },
  { dx: 0, dy: 24, scale: 1.1, rot: 120, delay: 10, color: '#f59e0b', size: 9 },
  { dx: -17, dy: 17, scale: 0.9, rot: 30, delay: 50, color: '#fde047', size: 8 },
  { dx: -24, dy: 0, scale: 1.2, rot: 75, delay: 30, color: '#fbbf24', size: 10 },
  { dx: -17, dy: -17, scale: 0.8, rot: 105, delay: 70, color: '#f59e0b', size: 7 },
];

export default function StarButton({ item, className = '', onToggle }) {
  const [starred, setStarred] = useState(false);
  const [burst, setBurst] = useState(null); // timestamp when triggered
  const timerRef = useRef(null);

  useEffect(() => {
    if (!item?.id) return;
    setStarred(isStarred(item.id));
    return onStarsChanged(() => {
      setStarred(isStarred(item.id));
    });
  }, [item?.id]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  if (!item || !item.id) return null;

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const next = toggleStar(item.id, item);
    setStarred(next);
    if (next) {
      setBurst(Date.now());
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setBurst(null), 800);
    } else {
      setBurst(null);
    }
    onToggle?.(next);
  };

  return (
    <button
      type="button"
      className={'pill star-pill' + (starred ? ' starred' : '') + (burst ? ' bursting' : '') + (className ? ' ' + className : '')}
      onClick={handleClick}
      title={starred ? t('star.remove') : t('star.add')}
      aria-label={starred ? t('star.remove') : t('star.add')}
    >
      {burst && <span className="star-burst-ring" aria-hidden="true" />}
      {burst && (
        <span className="star-sparkles" aria-hidden="true">
          {SPARKLE_CONFIGS.map((sp, i) => (
            <svg
              key={i}
              className="star-sparkle"
              width={sp.size}
              height={sp.size}
              viewBox="0 0 24 24"
              style={{
                '--tx': `${sp.dx}px`,
                '--ty': `${sp.dy}px`,
                '--scale': sp.scale,
                '--rot': `${sp.rot}deg`,
                '--delay': `${sp.delay}ms`,
                color: sp.color
              }}
            >
              <path
                fill="currentColor"
                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              />
            </svg>
          ))}
        </span>
      )}
      <svg
        className={'star-icon' + (burst ? ' star-pop' : '')}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={starred ? '#f59e0b' : 'none'}
        stroke={starred ? '#f59e0b' : 'currentColor'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
}
