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
        className={`card ${animationData} custom-inputColor bg-gradient-to-t h-fit from-gray-800 to-transparent shadow-lg tracking-wider`} 
      >
        <img className="image" src={imageUrl} alt={altText} />
        <div className="content">
          <div className="category bg-gray-600">{category}</div>
          <div className="title">{title}</div>
          <div className="subtitle text-gray-400">{subtitle}</div>
          <div className="author-info">
          <FaUserCircle className="text-white" size={24} />
            <div className="author">
              <p className="author-name text-bluee">{author}</p>
              <p className="date-readTime">{date} · {readTime}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
