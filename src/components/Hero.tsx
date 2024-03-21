import sym from "../../public/imgs/langlogo.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen mt-8 max-lg:h-[60vh]">
      <div className="herobg-wrapper w-full h-[100vh] flex items-center justify-center p-8 relative max-xl:p-0 max-xl:h-[90vh] ">
        <div className="background-wrapper absolute top-0 left-0 w-full h-full ">
          {/* Background Image */}
        </div>
        <div className="w-full h-full rounded-full text-center text-white flex items-center justify-center flex-wrap relative z-10 max-lg:items-start max-lg:pt-[20%]">
          <div className=" flex flex-col rounded-full rounded-b-none items-center justify-center bg-pri  text-center max-md:py-12 py-8 px-4  left-0  max-md:p-4 max-lg:w-full max-lg:h-full">
            <div className="text-6xl font-bold mb-8 ">
              <img
                src={sym}
                alt="Logo"
                className="h-[90px] w-[60.5px] max-md:w-[50px] max-md:h-auto"
              />
            </div>
            <h1 className="text-[2.5rem] font-bold mb-5 tracking-wider max-xl:text-[2rem] max-md:text-[1.5rem]">
              Preserving endangered languages
            </h1>
            <div className="flex w-full gap-8 flex-wrap items-center justify-center max-lg:flex-col">
              <button className="buttongradient px-6 py-2 rounded-[16px] hover:shadow-inner text-[1.5rem] tracking-wider text-white hover:text-pri max-md:w-[50%] max-lg:w-[20%]">
                Learn More
              </button>
              <button className="border border-[#27A1FC] px-6 py-2 rounded-[16px] hover:shadow-inner text-[1.5rem] text-[#27A1FC] hover:text-white hover:border-white max-md:w-[50%] max-lg:w-[20%]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
