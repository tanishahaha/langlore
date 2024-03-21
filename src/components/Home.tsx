import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import CourseCard from "./CourseCard";

const Home = () => {
  return (
    <div style={{ fontFamily: 'Helvetica, sans-serif' }}  >
      <Hero/>
      <div className="mb-8">
      <CourseCard  />

      </div>
      <GetInTouch/>
    </div>
  );
};

export default Home;
