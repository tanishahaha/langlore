
import AboutCourse from "./About_Course";
import AboutTeamCards from "./AboutTeamCards";
import Sponser from "../Sponser";
import About_GetInTouch from "./About_GetInTouch";
import Roadmap from "./Roadmap";

const About_Home = () => {
  return (
    <div>
  

      <div className=" mb-20">
        <AboutCourse />
      </div>

      <AboutTeamCards />
      {/* <div className="h-[20vh] bg-pri blur-md max-sm:h-[10vh] mb-2"></div> */}
      <div className="m-5">
        <Sponser />
      </div>
      <Roadmap />
      <About_GetInTouch />
      {/* <div className="h-[20vh] bg-pri blur-md max-sm:h-[10vh] mb-10"></div> */}

    </div>
  );
};

export default About_Home;
