import React, { useState } from 'react';
import { FaClock } from "react-icons/fa";
import { LuList } from "react-icons/lu";
import tulu from "../../public/imgs/tulu.png";
import "./component.css";

const CourseCard: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [isSoldOut] = useState(false);

  const handleJoinCourse = () => {
    if (!isSoldOut) {
      setShowInput(true);
    } else {
      setShowInput(false); // Hide input if sold out
    }
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="bg-bgcard bg-opacity-35 p-8 rounded-[2rem] shadow-lg max-w-screen-lg text-white border border-white max-lg:bg-transparent max-lg:border-none">
        <div className="w-full flex flex-col justify-center items-center text-center mb-10">
          <h2 className="text-white text-lgsubheading font-semibold mb-1 max-md:text-mdheading">
            Discover our Language Courses
          </h2>
          <p className="text-[#8892B0] text-mdsubheading">
            Dive in, and learn an endangered language.
          </p>
        </div>

        <div className={`bg-bgcard border border-white w-full h-full p-8 bg-opacity-35 rounded-[2rem] flex flex-col md:flex-row items-center md:items-start gap-4 ${isSoldOut ? 'modules-sold-out' : ''}`}>
          <div className="rounded-lg">
            <img
              src={tulu}
              alt="Colorful abstract symbols representing language"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-1 flex-col flex-wrap justify-between">
            <div className=" w-full h-full">
              <span className="text-greenn text-sm px-5 py-2 bg-greentrans rounded-md">
                Beginner
              </span>
              <div className="flex justify-between items-center mt-4 mb-2">
                <span className="text-white text-[1.5rem] font-bold max-md:text-mdsubheading">
                  Basics of Tulu: Getting Started with the Essentials
                </span>
              </div>
              <p className="text-graytxt mb-4 max-md:text-mdsubsubheading">
                Discover why preserving endangered languages is crucial for
                cultural diversity.
              </p>
              {isSoldOut ? (
                <div className="modules">
                  <p className="text-orange text-[1.2rem] max-md:text-mdsubheading">
                    Unfortunately, we are all sold out!
                  </p>
                </div>
              ) : (
                <div className='modules'>
                  <div className="flex gap-2 items-center mb-4">
                    <LuList className="text-iconcol " size={24} />
                    <span className="text-iconcol text-[1rem]  max-md:text-mdsubsubheading">4 Modules</span>
                  </div>
                  <div className="flex gap-2 items-center mb-12">
                    <FaClock className="text-iconcol" size={24} />
                    <span className="text-iconcol text-[1rem] max-md:text-mdsubsubheading ">
                      Estimated Duration: 6 Hours
                    </span>
                  </div>
                </div>
              )}
              {!isSoldOut && !showInput ? (
                <div className="join_thing">
                  <span className="text-graytxt text-[1.2rem]  max-md:text-mdsubheading">
                    Course price:{" "}
                    <span className="font-bold text-white tracking-widest">
                      ₹250.00
                    </span>
                  </span>
                  <div className="flex gap-2 items-center my-4 max-lg:flex-col max-lg:justify-center">
                    <button className="custom-button" onClick={handleJoinCourse}>
                      Join the course
                    </button>
                    <span className="text-yell text-[1.1rem] max-md:text-mdsubsubheading">
                      120/300 Seats Taken
                    </span>
                  </div>
                </div>
              ) : (
                showInput && (
                  <div className="flex flex-col">
                    <h2 className="font-semibold md:text-lg text-sm my-2 text-center md:text-start text-graytxt">
                      Get notified about our upcoming courses
                    </h2>
                    <div className="hide-on-desktop">
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        className="custom-inputColor rounded-l-xl rounded-r-xl border-l border-gray-300 border-r-white placeholder:text-white py-2 px-6 outline-none max-md:w-full md:text-[14px]"
                      />
                      <button className="custom-button md:text-[13px] md:rounded-x-xl w-full mt-3">
                        Subscribe
                      </button>
                    </div>
                    <div className="hide-on-mobile flex justify-between">
                      <input
                        type="email"
                        placeholder="Enter your email..."
                        className="custom-inputColor rounded-l-xl rounded-r-xl border-l border-gray-300 border-r-white placeholder:text-white py-2 px-6 outline-none max-md:w-full md:text-[14px]"
                      />
                      <button className="custom-button md:text-[13px] md:rounded-x-xl">Subscribe</button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
