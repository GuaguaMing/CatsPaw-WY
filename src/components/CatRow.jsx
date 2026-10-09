import React, { useState, useEffect } from 'react';
import { img } from '../lib/asset';

const CatRow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 450);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200); // 等動畫結束後再滾動
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="回到頂端"
      tabIndex={isVisible ? 0 : -1}
      className={`
        fixed right-4 z-40 w-20 border-0 bg-transparent p-0 text-wax transition-all duration-500 ease-in-out md:right-12 md:w-32
        ${isVisible ? 'bottom-6 translate-y-0 opacity-100' : 'pointer-events-none bottom-2 translate-y-10 opacity-0'}
        ${isAnimatingOut ? '-translate-y-40 opacity-0' : ''}
      `}
    >
      <img
        src={img('p4_catrow.webp')}
        alt=""
        loading="lazy"
        className="h-auto w-full transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <span className="mt-1 block text-center font-latin text-sm font-bold tracking-[0.2em]">TOP</span>
    </button>
  );
};

export default CatRow;
