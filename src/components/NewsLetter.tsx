import React from "react";
import {
  FaLightbulb,
  FaInfoCircle,
  FaCalendarAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "./component.css";

const NewsLetter: React.FC = () => {
  return (
    <div className="w-screen flex justify-center items-center px-10 flex-wrap">
      <div className="custom-bgColor flex md:max-w-screen-lg w-full items-center text-white justify-center rounded-2xl flex-col md:flex-row  md:justify-between md:px-8 border-t border-white shadow-lg flex-wrap">
        <div className="md:flex flex-col space-y-2 hidden ">
          <div className="custom-inputColor hover:bg-gray-800 rounded-r-full">
            <div className=" text-white font-semibold py-2 pl-8 pr-12  flex items-center space-x-2">
              <span>Tips & Tricks</span>
              <FaLightbulb />
            </div>
          </div>
          <div className="custom-inputColor hover:bg-gray-800 rounded-r-full">
            <div className=" text-white font-semibold py-2 pl-8 pr-8  flex items-center space-x-2">
              <span>News</span>
              <FaInfoCircle />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:w-1/2 w-full text-center">
          <h2 className="font-bold text-lgsubheading max-md:text-mdsubheading text-graytxt">
            Curious about cultures?
          </h2>
          <p className="max-md:text-mdsubsubheading text-mdsubheading text-white">Subscribe to our newsletter!</p>
          <div className="flex mt-4 mb-2 w-full max-md:flex-col justify-center max-md:gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="custom-inputColor rounded-l-full max-md:rounded-r-full border-l border-white max-md:border-r border-r-white placeholder:text-white py-2 px-4 outline-none max-md:w-full md:text-lgsubsubheading"
            />
            <button className="bg-bluee max-md:w-full max-md:rounded-l-full hover:shadow-lg text-white font-bold py-2 px-4 rounded-r-full tracking-wider md:text-lgsubsubheading">
              Subscribe
            </button>
          </div>
          <p className="text-mdsubsubheading mt-1 text-graytxt">
            Pssssst. don't worry, we don't spam much!
          </p>
        </div>

        <div className=" flex-col space-y-2 hidden md:flex">
          <div className="custom-inputColor hover:bg-gray-800 rounded-l-full">
            <div className=" text-white font-semibold py-2 pl-12 pr-12  flex items-center space-x-2">
              <FaCalendarAlt />
              <span>Upcoming events</span>
            </div>
          </div>

          <div className="custom-inputColor hover:bg-gray-800 rounded-l-full">
            <div className=" text-white font-semibold py-2 pl-12 pr-8 flex items-center space-x-2">
              <FaQuestionCircle />
              <span>What's new</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
