import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LiquidButton from './LiquidButton';
import './Nav.css';

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className={`
       sticky top-0 left-0 w-full z-50 flex justify-center
    bg-black
    `}
    >
      <Link to="/" className="flex items-center">
        <img
          src={`${import.meta.env.BASE_URL}images/A_logo_white.png`}
          className="pt-20 -translate-x-20 -translate-y-10"
          alt="Cat's Paw Logo"
        />
      </Link>

      <div className="nav-container max-w-[1200px] flex items-center gap-[50px] flex-col md:flex-row py-3 relative">
        {[
          { text: '故事', path: '/story' },
          { text: '教學', path: '/guide' },
          { text: '角色', path: '/character' },
          { text: '場景', path: '/scene' },
          { text: '公仔', path: '/designtoy' }
        ].map((item) => (
          <Link key={item.text} to={item.path}>
            <LiquidButton label={item.text} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
