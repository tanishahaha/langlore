import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-lg w-screen">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
            <span className="text-white font-semibold text-lg">Your Logo</span>
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleNavbar} />
            ) : (
              <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleNavbar} />
            )}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Learn Tulu</a>
            <a href="#" className="text-white hover:text-gray-300">Courses</a>
            <a href="#" className="text-white hover:text-gray-300">About Us</a>
            <a href="#" className="text-white hover:text-gray-300">Resources</a>
            <a href="#" className="text-white border border-white rounded px-4 py-2 hover:bg-white hover:text-gray-800">Signup</a>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Learn Tulu</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Courses</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">About Us</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Resources</a>
          <a href="#" className="block py-2 px-4 border-t border-gray-700 text-white hover:bg-gray-700">Signup</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
