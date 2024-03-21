import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import CourseCard from "./CourseCard";
import NewsLetter from "./NewsLetter";
import Sponser from "./Sponser";

const Home = () => {
  return (
    <div style={{ fontFamily: 'Helvetica, sans-serif' }}  >
      <Hero/>
      <div className="mb-8">
      <CourseCard  />

      </div>
      <div className="mt-28">
      <NewsLetter/>
      </div>
      <div className="m-10">
      <Sponser/>
      </div>
    
    
      <GetInTouch/>
    </div>
  );
};

export default Home;
