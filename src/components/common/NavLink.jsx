import React from 'react';

const NavLink = ({ children, page, currentPage, setPage }) => (
  <a
    href="#"
    onClick={() => setPage(page)}
    className={`relative group px-4 py-2 text-lg font-medium transition-colors duration-300
      ${currentPage === page ? 'text-red-500' : 'text-gray-200 hover:text-red-400'}
      before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-red-500 before:transition-all before:duration-300 before:-translate-x-1/2
      ${currentPage === page ? 'before:w-full' : 'group-hover:before:w-full'}`}
  >
    {children}
  </a>
);

export default NavLink;