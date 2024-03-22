import AboutHero from "./About_Hero";
import AboutCourse from "./About_Course";
import AboutTeamCards from "./AboutTeamCards";
import Sponser from "../Sponser";
import About_GetInTouch from "./About_GetInTouch"

const About_Home = () => {
  return (
    <div style={{ fontFamily: "Helvetica, sans-serif" }} className="w-screen">

      <AboutHero />
      <div className=" mb-20">
        <AboutCourse />
      </div>
      <AboutTeamCards />
    <Sponser/>
    <About_GetInTouch/>
    </div>
  );
};

export default About_Home;
