import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../public/imgs/langlore.png'
import { MdClose } from 'react-icons/md';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen py-8 px-28 max-md:px-8 ">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-[2rem] w-auto mr-2 max-md:h-[1rem]" />
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleNavbar} />
            ) : (
              <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleNavbar} />
            )}
          </div>
          <div className="hidden lg:flex items-center gap-[32px] text-[1.5rem]">
            <a href="#" className="text-white hover:text-gray-300">Courses</a>
            <a href="/about" className="text-white hover:text-gray-300">About Us</a>
            <a href="#" className="text-white hover:text-gray-300">Blog</a>
            <a href="#" className="buttongradient px-6 py-2 rounded-[16px] hover:shadow-inner text-[1.5rem] tracking-wider text-white hover:text-pri">Sign in</a>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {/* Responsive Menu */}
{/* Responsive Menu */}
{isOpen && (
  <div className="responsivemenu text-[2rem] fixed inset-0 flex items-center justify-center bg-pri z-50 flex-col gap-8 backgroun">
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(false)}
      >
        <MdClose size={30} />
      </button>
      <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Courses</a>
      <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">About Us</a>
      <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">Blog</a>
      <button className="buttongradient px-8 py-4 rounded-[16px] hover:shadow-xl text-[2rem] tracking-wide text-white">
        Signup
      </button>
  </div>
)}


    </nav>
  );
};

export default Navbar;