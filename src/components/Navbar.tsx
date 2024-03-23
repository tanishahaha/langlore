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
            <img src={logo} alt="Logo" className="h-[2rem] w-auto mr-2 max-md:h-[1rem] max-[375px]:h-[0.8rem]" />
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
            <Link to="/signin" className="bg-bluee px-6 py-2 rounded-[16px] hover:shadow-inner text-[1.5rem] tracking-wider text-white hover:text-pri">Sign in</Link>
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
      <Link to="/jh" className="block py-2 px-4 text-white hover:bg-gray-700">Courses</Link>
      <Link to="/about" className="block py-2 px-4 text-white hover:bg-gray-700">About Us</Link>
      <Link to="/blog" className="block py-2 px-4 text-white hover:bg-gray-700" >Blog</Link>
      <Link to='/signin' className="bg-bluee px-8 py-4 rounded-[16px] hover:shadow-xl text-[2rem] tracking-wide text-white  max-md:text-mdsubsubheading max-md:py-2" >
        Signup
      </Link>
  </div>
)}


    </nav>
  );
};

export default Navbar;