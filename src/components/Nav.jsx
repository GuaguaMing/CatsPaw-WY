import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LiquidButton from './LiquidButton';
import './Nav.css';

const Nav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // 切換頁面時自動收起選單
  }, [location]);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-black">
      {/* 上方區塊：Logo + 漢堡選單 */}
      <div className="flex items-center justify-between px-4 py-3 lg:px-10 lg:py-4">
        <Link to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/A_logo_white.png`}
            className="h-12"
            alt="Cat's Paw Logo"
          />
        </Link>

        {/* 漢堡按鈕 */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* 導覽列區塊 */}
      <div
        className={`nav-container flex-col items-center gap-4 transition-all duration-300 ease-in-out
          ${isOpen ? 'flex' : 'hidden'} 
          lg:flex lg:flex-row lg:justify-center lg:gap-6 lg:py-2`}
      >
        {[
          { text: '故事', path: '/story' },
          { text: '教學', path: '/guide' },
          { text: '角色', path: '/character' },
          { text: '場景', path: '/scene' },
          { text: '公仔', path: '/designtoy' }
        ].map((item) => (
          <Link
            key={item.text}
            to={item.path}
            className="nav-btn w-full max-w-[300px] lg:w-auto"
          >
            <LiquidButton label={item.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
