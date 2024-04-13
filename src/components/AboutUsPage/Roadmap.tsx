import React from "react";
// import { FaCheck, FaExpand, FaHandPaper, FaRocket, FaSpaceShuttle, FaUsers } from "react-icons/fa";
// import Card from "../Cards";

import Cardsanimation from "./Cardsanimation";

const Roadmap: React.FC = () => {
  return (
    <div
      className=" text-white w-full flex flex-wrap  justify-center max-md:flex-col max-lg:w-full max-lg:px-4 mb-[5rem]"
      data-aos="fade-up"
    >
      {/* <div className="container mx-auto px-4 py-8 md:py-20 relative" data-aos="fade-up">
                <div className="h-[40vh] bg-pri blur-md max-sm:h-[20vh] absolute top-0 left-0 right-0 z-0"></div>
                <div className="flex flex-col md:flex-row justify-between relative z-10">
                    <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                        <h1 className="text-lg md:text-xl mb-4">Reviving</h1>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Roadmap</h2>
                        <button className="custom-button  md:w-1/3 w-2/3">Explore the course</button>
                    </div>

                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="flex flex-col space-y-6">
                            <Card
                                icon={<FaCheck className="text-2xl" />}
                                title="Mission Kickoff"
                                description="LangLore was founded with the mission to preserve endangered languages, their scripts, and associated cultures."
                             
                            />
                            <Card
                                icon={<FaUsers className="text-2xl" />}
                                title="Empowering Communities"
                                description="We dug deep to research our target communities and identified our starting point - the Tulu community."
                             
                            />
                            <Card
                                icon={<FaExpand className="text-teal text-2xl" />}
                                title="Expanding Reach"
                                description="We gained recognition and interest from fellow enthusiasts of our cause like Ashoka University, Ka-Naada, the ELA, EKStep Foundation, universities like Mangalore University, and Government lobbyists fighting for the representation of endangered languages like Tulu in the Constitution."
                                
                            />
                            <Card
                                icon={<FaRocket className="text-teal text-2xl" />}
                                title="The Alphas"
                                description="We are currently developing the Alpha release of our platform (what you see now) & launching our first course to a limited number of users."
                                
                            />
                            <Card
                                icon={<FaHandPaper className=" text-2xl" />}
                                title="The Soft Launch"
                                description="Up next, we will launch a fully-loaded Tulu course to the general public before scaling."
                              
                            />
                            <Card
                                icon={<FaSpaceShuttle className="text-teal text-xl" />}
                                title="The Liftoff"
                                description="The best is yet to come! Sign up to stay tuned to our progress, and support our cause!"
                                
                            />
                        </div>
                    </div>
                </div>
            </div> */}

    <div className="lg:w-[90%] w-full flex justify-between max-md:flex-col">

      <div className=" w-[30%] mb-32 mt-40 max-md:my-0 max-md:w-full max-md:flex max-md:text-center  max-md:justify-center">
        <div className="flex flex-col w-full max-md:text-center max-md:flex max-md:justify-center mb-8 md:mb-0 md:pr-4 sticky top-[30%] ">
          <h1 className="text-lg md:text-xl mb-4">Reviving</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Roadmap</h2>
          <div className=" flex w-full text-center items-center justify-center md:justify-start">
            <button className="custom-button">Explore the course</button>
          </div>
        </div>
      </div>

      <Cardsanimation />
    </div>
    </div>
  );
};

export default Roadmap;
