import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import CourseCard from "./CourseCard";
import NewsLetter from "./NewsLetter";
import Sponser from "./Sponser";
import BlogCards from "./BlogCards";
<<<<<<< HEAD
import Courses from "./Courses";
=======
import BackGround from "./BackGround";
>>>>>>> 015f75f55f99c874f9f838ea253a8678c0054b25
const Home = () => {
  
  return (
    <div>
      <Hero />
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
