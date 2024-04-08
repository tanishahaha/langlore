const About_Course: React.FC = () => {
  return (
    <div className=" h-[50vh] flex flex-col text-center  justify-center items-center w-full  px-4  " data-aos="fade-up">
      <h1 className="md:text-lgheading w-full  text-mdheading text-white font-semibold  ">
        Reviving Endangered Languages Through Education and Technology
      </h1>
      <div className="w-full md:w-1/2">
        <h1 className="md:text-xl  mdsubheading  text-gray-400  ">
          At LangLore, we are on a mission to preserve endangered languages by
          providing e-learning courses on our platform. Our goal is to revive
          these languages and ensure their cultural heritage lives on for future
          generations.
        </h1>
      </div>
      <button // Use button instead of Link
        className="custom-button mt-6 "
      >
        Explore All Courses
      </button>
    </div>
  );
};

export default About_Course;
