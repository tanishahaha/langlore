const About_Course: React.FC = () => {
  return (
    <div className=" h-[50vh] m-2 flex flex-col text-center  justify-center items-center space-y-5  ">
      <h1 className="md:text-[33px] md:w-1/2  text-[22px] text-white font-semibold  ">
        Reviving Endangered Languages Through Education and Technology
      </h1>
      <div className="md:w-1/2 ">
        <h1 className="md:text-xl  text-lg  text-gray-400  ">
          At LangLore, we are on a mission to preserve endangered languages by
          providing e-learning courses on our platform. Our goal is to revive
          these languages and ensure their cultural heritage lives on for future
          generations.
        </h1>
      </div>
      <button // Use button instead of Link
        className="bg-blue-500 text-semibold mt-8 px-4 py-2 rounded-xl  text-sm text-white hover:text-pri"
      >
        Explore All Courses
      </button>
    </div>
  );
};

export default About_Course;
