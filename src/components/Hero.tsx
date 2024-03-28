import { Link } from "react-router-dom";
import sym from "/imgs/langlogo.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen mt-8  max-[530px]:h-[45vh] max-[630px]:h-[55vh] max-lg:h-[70vh]">
      <div className="herobg-wrapper w-full h-[100vh] flex items-center justify-center p-8 relative max-xl:p-0 max-md:h-[90vh] ">
        <div className="background-wrapper absolute top-0 left-0 w-full h-full ">
          {/* Background Image */}
        </div>
        <div className="w-full h-full rounded-full text-center text-white flex items-center justify-center flex-wrap relative z-10 max-lg:items-start max-[630px]:pt-[22%]  max-lg:pt-[30%] max-xl:pt-[10%]">
          <div className=" flex flex-col rounded-full rounded-b-none items-center justify-center bg-pri  text-center max-md:py-12 py-8 px-4  left-0  max-md:p-4 max-lg:w-full max-lg:h-full txtcont">
            <div className="text-6xl font-bold mb-8 ">
              <img
                src={sym}
                alt="Logo"
                className="h-[90px] w-[60.5px] max-md:w-[40px] max-md:h-auto"
              />
            </div>
            <h1 className="text-lgheading font-bold mb-5 tracking-wider max-xl:text-[2rem] max-md:text-mdheading max-[375px]:text-[1.2rem]">
              Preserving endangered languages
            </h1>
            <div className="flex w-full gap-8 flex-wrap items-center justify-center">
              <button className="custom-button">
                Learn More
              </button>
              <Link to="/signup" className="border border-bluee px-[20px] py-[8px] rounded-[10px] hover:shadow-inner text-[1.2rem] max-md:text-mdbutton text-[#27A1FC] hover:text-white hover:border-white max-md:px-4 max-[375px]:text-[0.8rem]">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
