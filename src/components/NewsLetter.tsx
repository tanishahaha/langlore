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
    <div className="w-screen  flex justify-center items-center px-10 flex-wrap">
      <div className="custom-bgColor flex md:max-w-screen-xl w-full items-center text-white justify-center rounded-2xl flex-col md:flex-row  md:justify-between  border-t border-white shadow-lg flex-wrap">
        <div className="md:flex flex-col space-y-2 -ml-5 hidden ">
          <div className="custom-inputColor hover:bg-gray-800 rounded-r-full border-gray-400 border-t w-full">
            <div className=" text-white font-semibold py-3 pl-8 pr-12  flex items-center space-x-2">
              <span>Tips & Tricks</span>
              <FaLightbulb />
            </div>
          </div>
          <div className="custom-inputColor hover:bg-gray-800 border-gray-400 border-t rounded-r-full w-2/3">
            <div className=" text-white font-semibold py-3 pl-8 pr-8  flex items-center space-x-2">
              <span>News</span>
              <FaInfoCircle />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:w-[62%] w-full text-center">
          <h2 className="font-semibold md:text-2xl text-xl  text-graytxt">
            Curious about cultures?
          </h2>
          <p className="md:text-[18px] text-[14px] text-white">Subscribe to our newsletter!</p>
          <div className="flex mt-4 mb-2  max-md:flex-col justify-center max-md:gap-3">
          <div className="hide-on-desktop">
            <input
              type="email"
              placeholder="Enter your email..."
              className="custom-inputColor rounded-l-xl rounded-r-xl border-l  border-gray-300  border-r-white placeholder:text-white py-2  px-6 outline-none max-md:w-full md:text-[14px]"
            />
            <button className="custom-button md:text-[13px] md:rounded-x-xl w-full  mt-3 ">
              Subscribe
            </button>
            </div>

            <div className="hide-on-mobile">
              <input
                type="email"
                placeholder="Enter your email..."
                className="custom-inputColor rounded-l-xl rounded-r-xl border-l  border-gray-300  border-r-white placeholder:text-white py-2  px-6 outline-none max-md:w-full md:text-[14px]"
              />
              <button className="custom-button md:text-[13px] md:rounded-x-xl ">
                Subscribe
              </button>
            </div>

          </div>
          <p className="text-mdsubsubheading mt-1 text-graytxt">
            Pssssst. don't worry, we don't spam much!
          </p>
        </div>

        <div className=" flex-col space-y-2 hidden md:flex -mr-5 ">
          <div className="custom-inputColor hover:bg-gray-800 rounded-l-full border-gray-400 border-t  -ml-12 ">
            <div className=" text-white font-semibold py-3 pl-12 pr-12  flex items-center space-x-2 ">
              <FaCalendarAlt />
              <span>Upcoming events</span>
            </div>
          </div>

          <div className=" custom-inputColor hover:bg-gray-800 rounded-l-full border-gray-400 border-t  ">
            <div className="text-white font-semibold py-3 pl-12 pr-8 flex items-center space-x-2">
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
