import { Link } from "react-router-dom";
import sym from "/imgs/langlogo.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col flex-wrap items-center justify-center h-[78vh] w-full mt-8  max-lg:h-[50vh] max-sm:h-[55vh]"
      data-aos="fade-up"
    >
      <div className="max-sm:hidden herobg-wrapper w-full h-[100vh] flex items-center justify-center p-8 relative max-xl:p-0">
        <div className="background-wrapper absolute top-0 left-0  w-full h-full max-md:top-[-15%] max-sm:top-[-38%]">
          {/* Background Image */}
        </div>
        <div className="w-full h-full rounded-full text-center text-white flex items-center justify-center flex-wrap absolute bottom-0 left-0 z-10 ">
          <div className=" flex flex-col  rounded-full rounded-b-none items-center justify-center bg-pri  text-center max-md:py-12 py-8 px-4 absolute bottom-[10%] max-lg:bottom-[5%] max-md:bottom-0 left-auto  max-md:p-4  txtcont">
            <div className="text-6xl font-bold mb-8 ">
              <img
                src={sym}
                alt="Logo"
                className="h-[90px] w-[60.5px] max-md:w-[40px] max-md:h-auto"
              />
            </div>
            <div data-aos=""
    data-aos-offset="120"
    data-aos-duration="1000">

            <h1 className="text-lgheading font-bold mb-5 tracking-wider max-xl:text-[2rem] max-lg:text-mdheading max-[375px]:text-[1.2rem]" >
              Preserving endangered languages
            </h1>
            <div className="flex w-full gap-8 flex-wrap items-center justify-center">
              <button className="custom-button" onClick={()=>navigate("/courses")}>
                Learn More
              </button>
              <Link to="/signup" className="custom-border-button">
                Sign Up
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden herobg-wrapper w-full h-full flex items-center justify-center p-8 relative max-xl:p-0">
        <div className="background-wrapper absolute top-0 left-0  w-full h-full">
          {/* Background Image */}
        </div>
        <div className="w-full h-full pb-6 rounded-full text-center text-white flex items-center justify-center flex-wrap  z-10 ">
          <div className="flex p-4 flex-col w-full h-full justify-end items-center font-bold mb-8 flex-wrap ">
            <img src={sym} alt="Logo" className="h-[40px] w-auto mb-4" />

            <h1 className="text-mdheading font-bold mb-4 tracking-wider">
              Preserving endangered languages
            </h1>
            <div className="flex w-full gap-2 flex-wrap items-center justify-center">
              <button className="custom-button" onClick={()=>navigate("/courses")}>Learn More</button>
              <Link to="/signup" className="custom-border-button">
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
