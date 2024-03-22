const About_GetInTouch: React.FC = () => {
   return (
     <div className=" h-[50vh]  flex flex-col text-center  justify-center items-center space-y-5  ">
       <h1 className="md:text-[33px] md:w-1/2  text-[22px] text-white font-semibold  ">
         Get in touch
       </h1>
       <div className="md:w-1/2 ">
         <h1 className="md:text-xl  text-lg  text-gray-400  ">
         Help us in our mission to empower communities and celebrate linguistic diversity
         </h1>
       </div>
       <button // Use button instead of Link
         className="bg-blue-500 text-semibold mt-8 px-4 py-2 rounded-xl  text-sm text-white hover:text-pri"
       >
         Contact Us
       </button>
     </div>
   );
 };
 
 export default About_GetInTouch;
 