import React from 'react';
import Logo from '../common/Logo';
import NavLink from '../common/NavLink';
import Footer from '../common/Footer';
import HamburgerMenu from '../common/HamburgerMenu';
import NotificationBar from '../common/NotificationBar';
import { SHOW_NOTIFICATION } from '../../config/notifications';

const Layout = ({ children, currentPage, setPage }) => {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Notification Bar */}
      {SHOW_NOTIFICATION && (
        <div className="fixed w-full z-30">
          <NotificationBar />
        </div>
      )}

      {/* Header/Navbar - Adjusted positioning based on notification bar */}
      <header className={`bg-black py-3 sm:py-4 px-4 md:px-8 shadow-lg fixed w-full z-40 ${SHOW_NOTIFICATION ? 'top-[72px] sm:top-[48px]' : 'top-0'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation - Hidden on tablet (768px) and below */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-8">
              <li><NavLink page="home" currentPage={currentPage} setPage={setPage}>Home</NavLink></li>
              <li><NavLink page="about" currentPage={currentPage} setPage={setPage}>About Us</NavLink></li>
              <li><NavLink page="teams" currentPage={currentPage} setPage={setPage}>Teams</NavLink></li>
              <li><NavLink page="tournaments" currentPage={currentPage} setPage={setPage}>Tournaments</NavLink></li>
              <li><NavLink page="contact" currentPage={currentPage} setPage={setPage}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile/Tablet Hamburger Menu - Shown on tablet (768px) and below */}
          <HamburgerMenu currentPage={currentPage} setPage={setPage} />
        </div>
      </header>

      {/* Main Content Area - adds padding top to clear both notification bar and header */}
      <main className={`flex-grow ${SHOW_NOTIFICATION ? 'pt-36 sm:pt-32' : 'pt-20'}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;