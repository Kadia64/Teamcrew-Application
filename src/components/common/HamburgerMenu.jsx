import React, { useState } from 'react';
import NavLink from './NavLink';

const HamburgerMenu = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (page) => {
    setPage(page);
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden z-[60] relative p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-gray-200 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-200 mt-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-200 mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-gray-900 transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="pt-20 px-8">
          <ul className="flex flex-col space-y-4">
            <li className="text-left">
              <NavLink 
                page="home" 
                currentPage={currentPage} 
                setPage={(page) => handleNavClick(page)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-left">
              <NavLink 
                page="about" 
                currentPage={currentPage} 
                setPage={(page) => handleNavClick(page)}
              >
                About Us
              </NavLink>
            </li>
            <li className="text-left">
              <NavLink 
                page="teams" 
                currentPage={currentPage} 
                setPage={(page) => handleNavClick(page)}
              >
                Teams
              </NavLink>
            </li>
            <li className="text-left">
              <NavLink 
                page="tournaments" 
                currentPage={currentPage} 
                setPage={(page) => handleNavClick(page)}
              >
                Tournaments
              </NavLink>
            </li>
            <li className="text-left">
              <NavLink 
                page="contact" 
                currentPage={currentPage} 
                setPage={(page) => handleNavClick(page)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;