import { FaClipboardList, FaChevronDown } from "react-icons/fa";
import { useState, useRef} from "react";
import tulu from "../../public/imgs/tulu.png";
import { BiCheck, BiFileBlank } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import ReactPlayer from "react-player";
import './component.css';
// import { getUserEmailFromLocalStorage } from "../../firebase";
// import { Link } from "react-router-dom";

const Courses = () => {
  const [showDropdown, setShowDropdown] = useState<boolean[]>([false, false, false, false]); // State for dropdown visibility of each module
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null); // State to track the selected video index
  const [videoWatched, setVideoWatched] = useState<boolean[]>([false, false, false, false]); // State to track if video is watched completely
  const [completionPercentage, setCompletionPercentage] = useState<number>(0); // State to track course completion percentage
  const playerRef = useRef<ReactPlayer | null>(null);
  // const [userEmail, setUserEmail] = useState<string | null>(null);


  const toggleDropdown = (index: number): void => {
    const newShowDropdown: boolean[] = [...showDropdown];
    newShowDropdown[index] = !newShowDropdown[index];
    setShowDropdown(newShowDropdown);
  };

  const moduleNames: string[] = [
    "Tulu Basics - Part 1 of 4 - Numbers",
    "Tulu Basics - Part 2 of 4 - Time & Calendar",
    "Tulu Basics - Part 3 of 4 - Family Relations",
    "Tulu Basics - Part 4 of 4 - Survival Phrases"
  ]; // Dynamic module names

  const videoLinks: string[] = [
    "https://www.youtube.com/watch?v=B23FGsbbyjY",
    "https://www.youtube.com/watch?v=UHRplBEJSos",
    "https://www.youtube.com/watch?v=Bmim5pBhh54",
    "https://www.youtube.com/watch?v=s30tpFXc77Y"
  ]; // Dynamic video links

  const playVideo = (index: number): void => {
    setSelectedVideoIndex(index);
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  const handleVideoEnd = (index: number): void => {
    const newVideoWatched: boolean[] = [...videoWatched];
    newVideoWatched[index] = true;
    setVideoWatched(newVideoWatched);

    // Calculate completion percentage based on the number of videos watched
    const completedVideos: number = newVideoWatched.filter(watched => watched).length;
    const newCompletionPercentage: number = (completedVideos / videoWatched.length) * 100;
    setCompletionPercentage(newCompletionPercentage);
  };

  // useEffect(() => {
  //   const email = getUserEmailFromLocalStorage();
  //   if (email) {
  //     setUserEmail(email);
  //   }
  // }, []);

  return (
    <div>
      
    <div className="w-screen flex flex-col gap-4 justify-center items-center mt-10 max-sm:mt-5" data-aos="fade-up">
      <div className="w-full flex flex-col gap-8 justify-center items-center max-w-screen-md bg-bgcard bg-opacity-35 p-8 pb-12 shadow-lg text-white border-t border-white max-md:bg-transparent max-lg:border-none rounded-[2rem]">
        <div className="rounded-[1rem] w-[95%] h-[55vh] max-lg:max-w-screen-sm max-lg:h-[25vh] max-md:flex max-md:flex-col max-md:text-center">
          <h1 className="text-mdheading font-semibold mb-2">
            Learn Tulu: A Beginner's Course
          </h1>
          {selectedVideoIndex !== null ? (
            <div className="w-full h-full rounded-[1rem] object-cover object-center max-sm:h-[90%]">
              <ReactPlayer
                ref={playerRef}
                url={videoLinks[selectedVideoIndex]}
                playing
                controls
                width="100%"
                height="100%"
                onEnded={() => handleVideoEnd(selectedVideoIndex)}
              />
            </div>
          ) : (
            <img
              src={tulu}
              alt="Colorful abstract symbols representing language"
              className="videoplayingdiv w-full h-full rounded-[1rem] object-cover object-center max-sm:h-[90%]"
            />
          )}
        </div>

        {/* Course Completion Status */}
        <div className="w-[95%] h-full mt-8 max-lg:max-w-screen-sm max-sm:mt-9">
          <div className="mb-5 bg-bgcard bg-opacity-25 rounded-[1rem] px-4 py-2 flex flex-col justify-center items-center shadow-md">
            <p className="text-white max-md:text-mdsubsubheading">
              Course Completion Status:{" "}
              <span className="text-bluee max-md:text-mdsubsubheading">{completionPercentage}%</span>
            </p>

            <div className="bg-gray-800 w-full h-2.5 rounded-[1rem] mt-2">
              <div
                className="bg-blue-600 h-2.5 rounded-[1rem]"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Modules */}
          {moduleNames.map((moduleName, index) => (
            <div key={index} className="bg-gray-800 rounded-[1.5rem] my-3 shadow-lg border border-white">
              <div className="flex flex-col mb-2 p-6 max-md:p-4 max-md:mb-0">
                <div className="flex space-x-4  justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
                  <h2 className="text-[14px] text-justify font-medium md:text-[19px]">Module {index + 1}: {moduleName}</h2>
                  <FaChevronDown className={`cursor-pointer ${showDropdown[index] ? "transform rotate-180" : ""}`} size={20} />
                </div>
                {showDropdown[index] && (
                  <div className="text-sm text-gray-400 max-md:text-mdsubsubheading">1 Lessons • 30 mins</div>
                )}
              </div>

              {/* Dropdown Content */}
              {showDropdown[index] && (
               <div className="space-y-4 bg-bgcard bg-opacity-25 p-6 max-md:space-y-5 max-md:p-4">
               <div className="flex items-center justify-between text-mdsubheading max-md:flex-col max-md:items-start">
                 <div className="flex items-center">
                   <BiFileBlank className="mr-4 " />
                   <span className="text-[12px] font-medium md:text-[16px] text-justify">{`1. ${moduleName}`}</span>
                 </div>
                 <div className="flex items-center max-md:justify-between max-md:w-full">
                   <div className="flex items-center justify-between">
                     <button className="bg-bluee mt-2 px-4 py-1 rounded-[10px] text-[10px]  text-white hover:shadow-md md:text-mdsubsubheading max-md:px-2 max-md:rounded-md" onClick={() => playVideo(index)}>View</button>
                     {videoWatched[index] && <BiCheck size={20} className="ml-3" />}
                     <GoDash size={20} className="ml-3 hidden" />
                   </div>
                 </div>
               </div>
               <div className="flex items-center justify-between text-mdsubheading max-md:flex-col max-md:items-start">
                 <div className="flex items-center">
                   <FaClipboardList className="mr-3" />
                   <span className="text-[12px] font-medium md:text-[16px] text-justify">Take The Tests</span>
                 </div>
                 <div className="flex items-center max-md:justify-between max-md:w-full">
                   <button className="bg-bluee mt-2 px-4 py-1 rounded-[10px] text-[10px]  text-white hover:shadow-md md:text-mdsubsubheading max-md:px-2 max-md:rounded-md">Give Test</button>
                   <BiCheck size={20} className="ml-3 hidden" />
                   <GoDash size={20} className="ml-3 hidden" />
                 </div>
               </div>
             </div>
           )}
            </div>
          ))}
        </div>
      </div>
    </div>
          
    </div>
  );
};

export default Courses;
