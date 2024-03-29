import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import CourseCard from "./CourseCard";
import NewsLetter from "./NewsLetter";
import Sponser from "./Sponser";
import BlogCards from "./BlogCards";
import BackGround from "./BackGround";
import Courses from "./Courses";
const Home = () => {
  
  return (
    <div>
      <Hero />
      {/* <Test/> */}
      <div className="mt-20">
        <CourseCard />
        {/* <Courses/> */}
      </div>
      <div className="h-[20vh] bg-pri blur-md max-sm:h-[10vh]"></div>
      <div className="mt-20 ">
        <BlogCards />
      </div>
      <div className="h-[20vh] bg-pri blur-md max-sm:h-[10vh]"></div>

      <div className="mt-20">
        <NewsLetter />
      </div>

      <div className="mt-20 ">
        <Sponser />
      </div>

      <div className="mt-20">
        <GetInTouch />
      </div>
      <div className="h-[20vh] bg-pri blur-md max-sm:h-[10vh]"></div>
{/* <BackGround/> */}
    </div>
  );
};

export default Home;
