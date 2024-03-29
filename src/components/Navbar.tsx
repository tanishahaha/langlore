import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../public/imgs/langlore.png';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen py-8 px-28 max-md:px-8 ">
      <div className="">
        <div className="flex justify-between items-center max-md:bg-bgcard max-md:bg-opacity-15 max-md:px-8 max-md:py-2 max-md:rounded-lg max-md:border max-md:border-graytxt max-md:shadow-lg">
          <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
              <img src={logo} alt="Logo" className="h-[1.8rem] w-auto mr-2 max-md:h-[1rem] max-[375px]:h-[0.8rem]" />
            </Link>
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <FaTimes className="text-white text-2xl cursor-pointer max-[375px]:text-xl" onClick={toggleNavbar} />
            ) : (
              <FaBars className="text-white text-2xl cursor-pointer max-[375px]:text-xl" onClick={toggleNavbar} />
            )}
          </div>
          <div className="hidden lg:flex items-center gap-[32px] text-[1.2rem]">
            <Link to="/dj" className="text-white hover:text-gray-300">Courses</Link>
            <Link to="/about" className="text-white hover:text-gray-300" >About Us</Link>
            <Link to="/blog" className="text-white hover:text-gray-300" >Blog</Link>
            <Link to="/signin" className="custom-button ">Sign in</Link>
          </div>
        </div>
      </div>
      {/* Responsive Menu */}
      {/* Responsive Menu */}
{/* Responsive Menu */}
{isOpen && (
  <div className="responsivemenu text-[2rem] fixed inset-0 flex items-center justify-center bg-pri z-50 flex-col gap-8 backgroun  max-md:text-mdsubheading">
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(false)}
      >
        <MdClose size={30} />
      </button>
      <Link to="/jh" className="block py-2 px-4 text-white hover:bg-gray-700" onClick={toggleNavbar}>Courses</Link>
      <Link to="/about" className="block py-2 px-4 text-white hover:bg-gray-700" onClick={toggleNavbar}>About Us</Link>
      <Link to="/blog" className="block py-2 px-4 text-white hover:bg-gray-700" onClick={toggleNavbar}>Blog</Link>
      <Link to='/signin' className="custom-button " onClick={toggleNavbar}>
        Signup
      </Link>
  </div>
)}


    </nav>
  );
};

export default Navbar;