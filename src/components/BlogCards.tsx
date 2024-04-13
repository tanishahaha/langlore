// BlogCards.tsx

import React from "react";
import Card from "./Cards";
import post1 from "../../public/imgs/post1.jpg";
import post2 from "../../public/imgs/post2.jpg";
import post3 from "../../public/imgs/post3.jpg";
import post4 from "../../public/imgs/post4.jpg";
import { useNavigate } from "react-router-dom";

const BlogCards: React.FC = () => {
  const navigate=useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center flex-wrap px-6"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-center items-center text-center w-full flex-wrap">
        <h1 className="text-lgheading max-md:text-mdheading font-bold text-white">
          Discover our Latest Blogs
        </h1>
        <p className="text-gray-400 text-mdsubheading mb-20 mt-6">
          Stay updated about the cultures of endangered languages
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full flex-wrap">
        <div className="md:grid md:grid-cols-2 ">
          <div className="mt-[-3rem]">
            <Card
              title="Why do Mangaloreans love Pabba's?"
              subtitle="What began as a humble venture in 1975 evolved into a beloved institution"
              category="Language"
              author="Mohammed Rayaan"
              date="31 March 2024"
              readTime="7 min read"
              imageUrl={post1}
              index={1}
              altText="Why do Mangaloreans love Pabba's?"
              linkUrl="https://langlore.substack.com/p/why-do-mangaloreans-love-pabbas?utm_source=profile&utm_medium=reader2"
            />
          </div>
          <div className="">
            <Card
              title="What we saw in our first 'Bhoota Kola'"
              subtitle="Bhoota Kola is proof of the tenacity of Mangalore's cultural legacy"
              category="Language"
              author="Zahanat Khan"
              date="24 March 2024"
              readTime="7 min read"
              imageUrl={post2}
              index={2}
              altText="What we saw in our first 'Bhoota Kola'"
              linkUrl="https://langlore.substack.com/p/what-we-saw-in-our-first-bhoota-kola?utm_source=profile&utm_medium=reader2" 
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 ">
          <div className="md:mt-[-3rem]">
            <Card
              title="How non-English language cinema is altering the Oscars landscape"
              subtitle="Film history scholar says its recent rise in recognition is attributed to industry demographic shifts"
              category="Language"
              author="Unknown"
              date="17 March 2024"
              readTime="7 min read"
              imageUrl={post3}
              index={3}
              altText="How non-English language cinema is altering the Oscars landscape"
              linkUrl="https://langlore.substack.com/p/post-6" 
            />
          </div>
          <Card
            title="Digital Preservation: Can Tech Save Indigenous Languages?"
            subtitle="Taking Indigenous languages online: can they be seen, heard and saved?"
            category="Language"
            author="Unknown"
            date="25 Feb 2024"
            readTime="7 min read"
            imageUrl={post4}
            index={4}
            altText="Digital Preservation: Can Tech Save Indigenous Languages?"
            linkUrl="https://langlore.substack.com/p/post-3?utm_source=profile&utm_medium=reader2" 
          />
        </div>
      </div>
        <button className="custom-button mt-3 md:text-[18px] text-[13px]" data-aos="fade-up" onClick={()=>{navigate("/blog");scrollToTop();}}>
          View All
        </button>
    </div>
  );
};

export default BlogCards;
