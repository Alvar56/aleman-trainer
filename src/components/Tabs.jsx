import React, { useRef, useLayoutEffect, useEffect } from 'react';

/**
 * Contenedor de pestañas con indicador animado deslizante.
 * Mide automáticamente la pestaña activa (.tab.active) y desliza
 * la línea inferior de manera suave y fluida directamente en el DOM
 * sin provocar re-renders de React.
 */
export default function Tabs({ children, className = '' }) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const updateSlider = () => {
    if (!containerRef.current || !sliderRef.current) return;
    const activeBtn = containerRef.current.querySelector('.tab.active');
    const slider = sliderRef.current;
    if (activeBtn) {
      slider.style.left = `${activeBtn.offsetLeft}px`;
      slider.style.width = `${activeBtn.offsetWidth}px`;
      slider.style.opacity = '1';
    } else {
      slider.style.opacity = '0';
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
      <span ref={sliderRef} className="tab-slider" aria-hidden="true" />
    </div>
  );
}
