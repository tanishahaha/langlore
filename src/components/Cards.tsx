// Card.tsx

import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./component.css"; // Import CSS file for Card component

interface CardProps {
  title: string;
  subtitle: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  altText: string;
  index: number;
  linkUrl: string; // Add linkUrl prop to specify the link for each card
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  category,
  author,
  date,
  readTime,
  imageUrl,
  altText,
  index,
  linkUrl,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animationData = isMobile
    ? "fade-up"
    : index % 2 === 0
    ? "fade-left"
    : "fade-right";

  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <div
        className={`custom-inputColor rounded-3xl border-t border-t-white h-[73vh] bg-gradient-to-t from-gray-800 to-transparent overflow-hidden shadow-lg m-3 max-md:my-3 max-md:mx-0 px-8 py-10 max-w-md max-md:py-8 max-md:px-6 tracking-wider max-md:w-full flex flex-col items-center`}
        data-aos={animationData}
      >
        <img
          className="w-full h-[13rem]  rounded-xl"
          src={imageUrl}
          alt={altText}
        />
        <div className="pt-6 w-full flex flex-col text-left justify-start items-start">
          <div className="bg-gray-600 rounded-xl px-5 py-2 inline-block text-gray-300 text-mdsubsubheading">
            {category}
          </div>
          <div className="font-semibold py-2 text-lgsubsubheading max-md:text-mdsubheading">
            {title}
          </div>
          <div className="text-gray-400 text-mdsubheading max-md:text-mdsubsubheading">
            {subtitle}
          </div>
          <div className="flex gap-3 items-center mt-5 ">
            <FaUserCircle className="text-white" size={24} />
            <div className="text-mdsubheading space-y-1">
              <p className="leading-none text-bluee">{author}</p>
              <p className="text-white text-mdsubsubheading">
                {date} · {readTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
