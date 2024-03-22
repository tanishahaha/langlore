import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import CourseCard from "./CourseCard";
import NewsLetter from "./NewsLetter";
import Sponser from "./Sponser";
import BlogCards from "./BlogCards";
const Home = () => {
  return (
    <div >
      <Hero/>
      <div className="mb-20">
      <CourseCard  />

      </div>
      <div className="m-10">
      <BlogCards/>
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
