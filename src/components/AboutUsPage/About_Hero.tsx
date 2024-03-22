const About_Hero: React.FC = () => {
  return (
    <div className=" h-[80vh] m-1 flex flex-col text-center  justify-center items-center space-y-5  ">
      <h1 className="md:text-[50px] md:w-screen  text-[32px] text-white font-bold tracking-widest ">
        Unlocking languages | Exploring Cultures
      </h1>
      <div className="w-1/2">
        <h1 className="md:text-2xl  text-xl  text-gray-400  ">
          Giving endangered languages and their culture a voice, one lesson at a
          time
        </h1>
      </div>
    </div>
  );
};

export default About_Hero;
