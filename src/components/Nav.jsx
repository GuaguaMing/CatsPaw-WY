import React from 'react';
import { Link } from 'react-router-dom';
import LiquidButton from './LiquidButton';
import './Nav.css';

const Nav = () => {
  return (
    <div
    className={`
      fixed top-0 left-0 w-full z-50 flex justify-center
      bg-black relative
    `}
  >
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
