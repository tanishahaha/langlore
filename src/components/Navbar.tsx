import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/imgs/langlore.png";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { getUserEmailFromLocalStorage } from "../../firebase";
import { BiUser } from "react-icons/bi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const email = getUserEmailFromLocalStorage();
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");
    // Reset userEmail state
    setIsDropdownOpen(false);
    setUserEmail(null);
    window.location.href="/";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate=useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <nav className="w-screen py-8 px-28 max-md:px-8 ">
      <div className="">
        <div className="flex justify-between items-center max-md:bg-bgcard max-md:bg-opacity-15 max-md:px-8 max-md:py-2 max-md:rounded-lg max-md:border max-md:border-graytxt max-md:shadow-lg">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src={logo}
                alt="Logo"
                className="h-[1.8rem] w-auto mr-2 max-md:h-[1rem] max-[375px]:h-[0.8rem]"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <FaTimes
                className="text-white text-2xl cursor-pointer max-[375px]:text-xl"
                onClick={toggleNavbar}
              />
            ) : (
              <FaBars
                className="text-white text-2xl cursor-pointer max-[375px]:text-xl"
                onClick={toggleNavbar}
              />
            )}
          </div>
          <div className="hidden lg:flex items-center gap-[32px] text-[1.2rem]">
            <p
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={()=>{navigate('/courses');scrollToTop();}}
            >
              Courses
            </p>
            <p
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => {navigate('/about');scrollToTop();}}
            >
              About Us
            </p>
            <p
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={() => {navigate('/blog');scrollToTop();}}
            >
              Blog
            </p>
            {userEmail ? (
              // <p className="text-white">{userEmail}</p>
              <div className="relative cursor-pointer">
                <BiUser
                  size={30}
                  onClick={toggleDropdown}
                  className="cursor-pointer"
                />

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-fit h-fit bg-white border rounded-lg shadow-lg flex flex-col p-1 z-10">
                    <p className="px-4 py-2 text-gray-800">{userEmail}</p>
                    <button
                      className="w-full text-center px-4 text-white bg-[#0779EB] rounded-lg py-2 cursor-pointer mb-2"
                      onClick={() => {navigate('/forget');scrollToTop();}}
                    >
                      Change Password
                    </button>

                    <button
                      className="w-full text-center px-4 text-white bg-[#0779EB] rounded-lg py-1 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <p
                className="custom-button cursor-pointer"
                onClick={() => {navigate('/signin');scrollToTop();}}
              >
                Sign in
              </p>
            )}
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
          <Link
            to="/courses"
            className="block py-2 px-4 text-white hover:bg-gray-700"
            onClick={toggleNavbar}
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-white hover:bg-gray-700"
            onClick={toggleNavbar}
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className="block py-2 px-4 text-white hover:bg-gray-700"
            onClick={toggleNavbar}
          >
            Blog
          </Link>
          {userEmail ? (
              // <p className="text-white">{userEmail}</p>
              <div className="flex flex-col gap-4 cursor-pointer">
                

                
                  
                    <button
                      className="text-center px-4 text-white  rounded-lg py-2 cursor-pointer mb-2"
                      onClick={() => {navigate('/forget');scrollToTop();}}
                    >
                      Change Password
                    </button>

                    <button
                      className="text-center px-4 text-white  rounded-lg py-1 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                
              </div>
            ) : (
              <p
                className="custom-button cursor-pointer"
                onClick={() => {navigate('/signin');scrollToTop();toggleNavbar()}}
              >
                Sign in
              </p>
            )}
          {/* <Link to="/signin" className="custom-button " onClick={toggleNavbar}>
            Signup
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
