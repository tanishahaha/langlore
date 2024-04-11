import React from "react";
import { useNavigate } from 'react-router-dom';
import {
 
  FaInstagram,
  
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../public/imgs/langlore.png";

const Footer: React.FC = () => {
  const navigate=useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
  return (
    <div className="w-full text-white flex flex-wrap items-center justify-center mt-20 ">
      <div className="w-full flex flex-wrap items-center justify-center text-center flex-col gap-4">
          <div className="flex items-center">
          
            <img src={logo} alt="Logo" className="h-[1.8rem] w-auto mr-2 max-md:h-[1rem] max-[375px]:h-[0.8rem] cursor-pointer" onClick={()=>{navigate('/'); scrollToTop();} }/>
            
          </div>

         

          {/* <div className="flex flex-col md:items-center mt-4 md:text-mdheading">
            <p className="mr-2">Contact:</p>
            <a href="mailto:info@langlore.in" className="text-bluee">
              info@langlore.in
            </a>
          </div> */}
          <div className="flex mt-2 mb-6 space-x-6 text-white">
           
            <a href="https://www.instagram.com/langlore.in?igsh=MTFrM2htaXd4ajk5NA==" target="blank" className=" hover:text-white">
              <FaInstagram size={24}/>
            </a>
           
            <a href="mailto: admin@langlore.in"  target='blank' className=" hover:text-white">
              <FaEnvelope size={24}/>
            </a>
        </div>
        {/* <div className=" w-full  md:w-auto ">
          <ul className="mb-6 space-y-2 justify-center">
            <li>
              <a href="#" className="hover:text-blue-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Blog
              </a>
            </li>
          </ul>
          <div className="border-t  pt-4 md:pt-0 md:border-none">
            
          </div>
        </div> */}

        <p className="text-center mt-2 pb-4 md:text-mdsubheading text-mdsubsubheading text-graytxt">
          &copy; 2024 LangLore. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
