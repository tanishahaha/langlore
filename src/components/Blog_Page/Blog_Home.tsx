import Blog_Hero from "./Blog_Hero";

const Blog_Home = () => {
  return (
    <div
      style={{ fontFamily: "Helvetica, sans-serif" }}
      className="w-full tracking-wider flex flex-wrap flex-col"
    >
      <Blog_Hero />
      <div className="h-[20vh] bg-pri blur-md max-sm:h-[10vh] mb-10"></div>
    </div>
  );
};

export default Blog_Home;
