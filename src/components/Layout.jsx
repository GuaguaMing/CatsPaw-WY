import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import CatRow from './CatRow';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  // 換頁時回到頂端
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-ground text-wax">
      <Nav />
      <main>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>
      <CatRow />
      <Footer />
    </div>
  );
};

export default Layout;
