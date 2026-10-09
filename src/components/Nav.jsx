import { Link, NavLink } from 'react-router-dom';
import { img } from '../lib/asset';

const links = [
  { text: '故事', path: '/story' },
  { text: '教學', path: '/guide' },
  { text: '角色', path: '/character' },
  { text: '場景', path: '/scene' },
  { text: '公仔', path: '/designtoy' },
];

const Nav = () => (
  <header className="sticky top-0 z-50 border-b border-wax/[0.08] bg-ground/[0.88] backdrop-blur-md">
    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 md:px-8 lg:px-14">
      <Link to="/" className="flex min-h-11 items-center gap-3 text-wax no-underline">
        <img src={img('A_logo_white.png')} alt="" className="h-8 w-auto" />
        <span className="font-latin text-xl font-bold tracking-[0.08em]">Cat&apos;s Paw</span>
      </Link>

      <nav aria-label="主選單" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 sm:mx-0 sm:px-0">
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-base no-underline transition-colors sm:px-5 ${
                isActive
                  ? 'liquid-glow bg-ember/[0.12] font-bold text-ember-light'
                  : 'font-medium text-[#CFC5B6] hover:text-ember-light'
              }`
            }
          >
            {item.text}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Nav;
