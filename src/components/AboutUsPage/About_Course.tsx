import { useNavigate } from "react-router-dom";

const About_Course: React.FC = () => {
  const navigate=useNavigate();
  return (
    
    <div className=" h-[80vh] max-md:h-[70vh] flex flex-col text-center  justify-center items-center w-full  px-4  " data-aos="fade-up">
      <h1 className="md:text-lgheading w-full  text-mdheading text-white font-semibold md:w-2/4 tracking-widest ">
        Reviving Endangered Languages Through Education and Technology
      </h1>
      <div className="w-full md:w-3/5 ">
        <h1 className="md:text-lg  text-[10px] text-center  text-gray-400  ">
          At LangLore, we are on a mission to preserve endangered languages by
          providing e-learning courses on our platform. Our goal is to revive
          these languages and ensure their cultural heritage lives on for future
          generations.
        </h1>
      </div>
      <button // Use button instead of Link
        className="custom-button mt-6 " onClick={()=>{navigate("/courses")}}
      >
        Explore All Courses
      </button>
    </div>
  );
};

export default About_Course;
