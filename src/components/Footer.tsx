import React from 'react';
import { FaFacebookF, FaInstagram, FaVimeoV, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className=" text-white py-10 my-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-no-wrap justify-between items-center">
          <div className=" md:w-auto mb-6 md:mb-0 md:mr-6">
            <h1 className="text-4xl font-bold mb-4">LANGLORE</h1>
            <div className="flex flex-co md:flex-row md:items-center">
              <p className="mr-2">Contact:</p>
              <a href="mailto:info@langlore.in" className="text-blue-300">info@langlore.in</a>
            </div>
            <div className="flex mt-2 mb-6 space-x-6">
              <a href="#" className="text-blue-300 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-blue-300 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-blue-300 hover:text-white"><FaVimeoV /></a>
              <a href="#" className="text-blue-300 hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="text-blue-300 hover:text-white"><FaYoutube /></a>
            </div>
          </div>
          <div className=" w-full  md:w-auto ">
            <ul className="mb-6 space-y-2 justify-center">
              <li><a href="#" className="hover:text-blue-300">Courses</a></li>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Blog</a></li>
            </ul>
            <div className="border-t  pt-4 md:pt-0 md:border-none">
              
              {/* <ul className="flex mt-6 flex-wrap justify-center space-x-5">
                <li><a href="#" className="text-blue-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white">Cookies Settings</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      
        <p className="text-center mt-2 md:mb-2 md:text-left">&copy; 2024 LangLore. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
