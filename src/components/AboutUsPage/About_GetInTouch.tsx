const About_GetInTouch: React.FC = () => {
   return (
     <div className="px-4 h-[50vh]  flex flex-col text-center  justify-center items-center   " data-aos="fade-up">
       <h1 className="md:text-lgheading text-mdheading md:w-1/2   text-white font-semibold  ">
         Get in touch
       </h1>
       <div className="md:w-1/2 ">
         <h1 className="md:text-lgsubsubheading  text-mdsubheading  text-gray-400  ">
         Help us in our mission to empower communities and celebrate linguistic diversity
         </h1>
       </div>
       <button // Use button instead of Link
         className="border-bluee border-2 text-semibold mt-8 px-6 py-2 rounded-2xl max-md:text-mdbutton text-xl text-blue-500 "
       >
         Contact Us
       </button>
     </div>
   );
 };
 
 export default About_GetInTouch;
 