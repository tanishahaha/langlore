import React from "react";
import {
  FaCheck,
  FaUsers,
  FaExpand,
  FaRocket,
  FaHandPaper,
  FaSpaceShuttle,
} from "react-icons/fa";
import Cardsanimation from "./Cardsanimation";

const Roadmap: React.FC = () => {
  return (
    <div className=" text-white w-full px-10 flex flex-wrap  justify-between max-md:flex-col max-lg:w-full max-lg:px-4 mb-[5rem]" data-aos="fade-up">
      {/* <div className="container mx-auto px-4 py-8 md:py-20 relative" data-aos="fade-up">
                <div className="h-[40vh] bg-pri blur-md max-sm:h-[20vh] absolute top-0 left-0 right-0 z-0"></div>
                <div className="flex flex-col md:flex-row justify-between relative z-10">
                    <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                        <h1 className="text-lg md:text-xl mb-4">Reviving</h1>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Roadmap</h2>
                        <button className="custom-button  md:w-1/3 w-2/3">Explore the course</button>
                    </div>
                    
                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="flex flex-col space-y-6 ">
                            <div className="flex items-start space-x-4 border-white border-t custom-bgColor rounded-xl px-5 py-2 text-gray-300 text-mdsubsubheading">
                                <div className="icon-bg py-3 rounded-full">
                                    <FaCheck className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold my-1">Mission Kickoff</h3>
                                    <p className="text-gray-400">LangLore was founded with the mission to preserve endangered languages, their scripts, and associated cultures.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 border-white border-t custom-bgColor rounded-xl px-5 py-2  text-gray-300 text-mdsubsubheading">
                                <div className="icon-bg py-3 rounded-full">
                                    <FaUsers className="text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold my-1">Empowering Communities</h3>
                                    <p className="text-gray-400">We dug deep to research our target communities and identified our starting point - the Tulu community.</p>
                                </div>
                            </div>
                            <div className="flex items-start border-white border-t  space-x-4 custom-bgColor rounded-xl px-5 py-2  text-gray-300 text-mdsubsubheading">
                                <div className="icon-bg py-3 rounded-full">
                                    <FaExpand className="text-teal text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold my-1">Expanding Reach</h3>
                                    <p className="text-gray-400">We gained recognition and interest from fellow enthusiasts of our cause like Ashoka University, Ka-Naada, the ELA, EKStep Foundation, universities like Mangalore University, and Government lobbyists fighting for the representation of endangered languages like Tulu in the Constitution.</p>
                                </div>
                            </div>
                            <div className="flex items-start border-white border-t  space-x-4 custom-bgColor rounded-xl px-5 py-2  text-gray-300 text-mdsubsubheading">
                                <div className="icon-bg py-3 rounded-full">
                                    <FaRocket className="text-teal text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold my-1">The Alphas</h3>
                                    <p className="text-gray-400">We are currently developing the Alpha release of our platform (what you see now) & launching our first course to a limited number of users.</p>
                                </div>
                            </div>
                            <div className="flex items-start border-white border-t  space-x-4 custom-bgColor rounded-xl px-5 py-2  text-gray-300 text-mdsubsubheading">
                                <div className="icon-bg py-3 rounded-full">
                                    <FaHandPaper className=" text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold my-1">The Soft Launch</h3>
                                    <p className="text-gray-400">Up next, we will launch a fully-loaded Tulu course to the general public before scaling.</p>
                                </div>
                            </div>
                            <div className="flex items-start border-white border-t space-x-4 custom-bgColor rounded-xl px-5 py-2  text-gray-300 text-mdsubsubheading">
                                <div className="icon-bg py-3 rounded-full">
                                    <FaSpaceShuttle className="text-teal text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] md:text-lg font-semibold my-1">The Liftoff</h3>
                                    <p className="text-gray-400">The best is yet to come! Sign up to stay tuned to our progress, and support our cause!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className=" w-[30%] mb-32 mt-40 max-md:my-0 max-md:w-full max-md:flex max-md:text-center  max-md:justify-center">
      <div className="flex flex-col w-full max-md:text-center max-md:flex max-md:justify-center mb-8 md:mb-0 md:pr-4 sticky top-[30%] ">
                        <h1 className="text-lg md:text-xl mb-4">Reviving</h1>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Roadmap</h2>
                        <div className=" flex w-full text-center items-center justify-center md:justify-start">

                        <button className="custom-button">Explore the course</button>
                        </div>
                    </div>
      </div>

      <Cardsanimation/>
    </div>
  );
};

export default Roadmap;
