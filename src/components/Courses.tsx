import { FaClipboardList, FaChevronDown } from "react-icons/fa";
import tulu from "../../public/imgs/tulu.png";
import { BiCheck, BiFileBlank } from "react-icons/bi";
import { GoDash } from "react-icons/go";

const Courses = () => {
  return (
    <div className="w-screen flex flex-col gap-4 justify-center items-center mt-10 max-sm:mt-5">
      <div className="w-full flex flex-col gap-8 justify-center items-center max-w-screen-md bg-bgcard bg-opacity-35 p-8 pb-12 shadow-lg   text-white border-t border-white max-md:bg-transparent max-lg:border-none rounded-[2rem]">
        <div className="rounded-[1rem] w-[95%] h-[55vh] max-lg:max-w-screen-sm max-lg:h-[25vh] max-md:flex max-md:flex-col max-md:text-center">
          <h1 className="text-mdheading font-semibold mb-2">
            Learn Tulu: A Beginner's Course
          </h1>
          <img
            src={tulu}
            alt="Colorful abstract symbols representing language"
            className="w-full h-full rounded-[1rem] object-cover object-center max-sm:h-[90%]"
          />
        </div>
        {/* <div className="mb-10">
          <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: "78%" }}
            ></div>
          </div>
          <p className="text-blue-400 mt-2">Course Completion Status: 78%</p>
        </div> */}

        <div className="w-[95%] h-full mt-8 max-lg:max-w-screen-sm max-sm:mt-9">
          <div className="mb-5 bg-bgcard bg-opacity-25 rounded-[1rem] px-4 py-2 flex flex-col justify-center items-center shadow-md">
            <div className="w-full">
              <p className="text-white max-md:text-mdsubsubheading">
                Course Completion Status:{" "}
                <span className="text-bluee max-md:text-mdsubsubheading">78%</span>
              </p>

              <div className="bg-gray-800 w-full h-2.5 rounded-[1rem] mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-[1rem] mt-2"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-[1.5rem] shadow-lg  border border-white">
            <div className="flex flex-col mb-2 p-6 max-md:p-4 max-md:mb-0">
              <h2 className="text-xl font-medium max-md:text-mdsubheading">Module 1: Numbers</h2>
              <span className="text-sm text-gray-400 max-md:text-mdsubsubheading">8 Lessons • 30 mins</span>
            </div>
            <div className="space-y-4 bg-bgcard bg-opacity-25 p-6 max-md:space-y-5 max-md:p-4">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className=" flex items-center justify-between text-mdsubheading max-md:flex-col max-md:items-start "
                >
                  <div className="flex items-center ">
                    {i === 4 ? (
                      <FaClipboardList className="mr-3" />
                    ) : (
                      <BiFileBlank className="mr-3" />
                    )}
                    <span className="max-md:text-mdsubsubheading">
                      {i === 4 ? "Take The Tests" : `${i + 1}. Numbers`}
                    </span>
                  </div>
                  <div className="flex items-center max-md:justify-between max-md:w-full">
                    <span className="text-sm text-gray-400 mr-3 max-md:text-mdsubsubheading">5 Pages</span>
                    <div className="flex">

                    <button className="bg-bluee px-4 py-1 rounded-[10px] text-sm tracking-wider text-white hover:shadow-md  max-md:text-mdsubsubheading max-md:px-2 max-md:rounded-md">
                      {i === 4 ? "Give Test" : "View"}
                    </button>
                    <BiCheck
                      size={20}
                      className={`ml-3 ${i === 4 ? "hidden" : ""}`}
                    />
                    <GoDash
                      size={20}
                      className={`ml-3 ${i === 4 ? "" : "hidden"}`}
                    />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 max-md:p-4 ">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="w-full mt-4 max-md:mt-0 max-md:mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-mdsubheading font-medium">
                      Lesson {i + 2}:{" "}
                      {["Curriculum", "Components", "Coding"][i]}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-mdsubsubheading text-graytxt flex h-full justify-center items-center gap-2">
                      1/2 Videos •
                      <span className="text-lightblue">1h 28m </span>
                    </span>
                    <FaChevronDown className="ml-3 cursor-pointer" size={15} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
