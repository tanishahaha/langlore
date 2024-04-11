import { FaClock } from "react-icons/fa";
import { LuList } from "react-icons/lu";
import tulu from "../../public/imgs/tulu.png";

import "./component.css";
import { getUserEmailFromLocalStorage } from "../../firebase";
import { useEffect, useState } from "react";

const CourseOverview = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [seatsAvailable, setSeatsAvailable] = useState<number | null>(null);
  const [isSoldOut] = useState(false);

  const handleJoinCourse = () => {

    if(userEmail){
      alert("payment");
    }else{
      window.location.href="/signin";
    }

    // if (!isSoldOut) {
    //   setShowInput(true);
    // } else {
    //   setShowInput(false); // Hide input if sold out
    // }
  };

  useEffect(() => {
    const email = getUserEmailFromLocalStorage();
    if (email) {
      setUserEmail(email);
    }
    fetchSeatsAvailable();
  }, []);

  const fetchSeatsAvailable = async () => {
    try {
      const response = await fetch(`/courses/:courseId/seatsAvailable`);
      const data = await response.json();
      setSeatsAvailable(data.seatsAvailable);
    } catch (error) {
      console.error("Error fetching seats available:", error);
    }
  };

  return (
    <div>
      <div
        className="w-screen flex flex-col gap-4 justify-center items-center mt-10 max-sm:mt-5"
        data-aos="fade-up"
      >
        <div className="w-full flex flex-col gap-8 justify-center items-center max-w-screen-md bg-bgcard bg-opacity-35 p-8 pb-12 shadow-lg text-white border-t border-white max-md:bg-transparent max-lg:border-none rounded-[2rem]">
          <div
            className={` w-full h-full bg-opacity-35 rounded-[2rem] flex flex-col  items-center md:items-start gap-4 ${
              isSoldOut ? "modules-sold-out" : ""
            }`}
          >
            <div className="rounded-[1rem] w-full h-[55vh] max-lg:max-w-screen-sm max-lg:h-[25vh] max-md:flex max-md:flex-col max-md:text-center">
              <img
                src={tulu}
                alt="Colorful abstract symbols representing language"
                className="videoplayingdiv w-full h-full rounded-[1rem] object-cover object-center max-sm:h-[90%]"
              />
            </div>
            <div className="flex flex-1 flex-col flex-wrap justify-between text-start">
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
                  <div className="modules">
                    <div className="flex gap-2 items-center mb-4">
                      <LuList className="text-iconcol " size={24} />
                      <span className="text-iconcol text-[1rem]  max-md:text-mdsubsubheading">
                        4 Modules
                      </span>
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
                      
                      <button
                        className="custom-button"
                        onClick={handleJoinCourse}
                      >
                        Join the course
                      </button>
                      <span className="text-yell text-[1.1rem] max-md:text-mdsubsubheading">
                        {seatsAvailable}/300 Seats Taken
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
                        <button className="custom-button md:text-[13px] md:rounded-x-xl">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
