import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';

/**
 * Contenedor de pestañas con indicador animado deslizante.
 * Mide automáticamente la pestaña activa (.tab.active) y desliza
 * la línea inferior de manera suave y fluida.
 */
export default function Tabs({ children, className = '' }) {
  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const updateSlider = () => {
    if (!containerRef.current) return;
    const activeBtn = containerRef.current.querySelector('.tab.active');
    if (activeBtn) {
      setSliderStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1
      });
    } else {
      setSliderStyle((s) => ({ ...s, opacity: 0 }));
    }
  };

  useLayoutEffect(() => {
    updateSlider();
  });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateSlider) : null;
    ro?.observe(el);
    window.addEventListener('resize', updateSlider);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', updateSlider);
    };
  }, []);

  return (
    <div ref={containerRef} className={'tabs' + (className ? ' ' + className : '')}>
      {children}
      <span
        className="tab-slider"
        style={{
          left: sliderStyle.left,
          width: sliderStyle.width,
          opacity: sliderStyle.opacity
        }}
        aria-hidden="true"
      />
    </div>
  );
}
