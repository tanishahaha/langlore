import AboutCourse from "./About_Course";
import AboutTeamCards from "./AboutTeamCards";
import Sponser from "../Sponser";
import About_GetInTouch from "./About_GetInTouch";
import Roadmap from "./Roadmap";

const About_Home = () => {
  return (
    <div className="tracking-wider">
      <AboutCourse />

      <AboutTeamCards />
      <Sponser />
      <Roadmap />
      <About_GetInTouch />
    </div>
  );
};

export default About_Home;
