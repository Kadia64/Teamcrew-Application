import React from 'react';

const Footer = () => (
  <footer className="bg-black text-gray-400 py-8 px-4 md:px-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-red-500 mb-2">TeamCrew Basketball</h3>
        <p>&copy; {new Date().getFullYear()} TeamCrew. All rights reserved.</p>
      </div>
      <div className="text-center md:text-right">
        <p className="text-lg font-semibold text-gray-200 mb-2">Contact Tim Allen</p>
        <p>Phone: (217) 220-0395</p>
        <p>Email: teamcrewbasketball@gmail.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;