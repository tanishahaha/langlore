import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import CourseCard from "./CourseCard";
import NewsLetter from "./NewsLetter";
import Sponser from "./Sponser";
import BlogCards from "./BlogCards";
// import BackGround from "./BackGround";
const Home = () => {
  
  return (
    <div className="box-border w-full">
      <Hero />
      <div className="mt-20">
        <CourseCard />
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
    </div>
  );
};

export default Home;
