import React, { useState, useEffect } from 'react';

const CatRow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
    <div
      className={`
        fixed z-50 transition-all duration-500 ease-in-out
        ${isVisible ? 'bottom-10 opacity-100 translate-y-0' : 'bottom-4 opacity-0 translate-y-10'}
        ${isAnimatingOut ? '-translate-y-40 opacity-0' : ''}
        right-20 w-40
      `}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/p4_catrow.gif`}
        alt="Cat Row"
        className="w-40 h-auto transition-transform duration-500 ease-in-out hover:scale-125 cursor-pointer"
        onClick={handleClick}
      />
      <p className="text-center mt-2 text-lg font-medium transition-all duration-30">TOP</p>
    </div>
  );
};

export default CatRow;
