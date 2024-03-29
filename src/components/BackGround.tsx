import React from 'react';
import SF1 from '../../public/imgs/subframe1.png';
import SF2 from '../../public/imgs/subframe2.png';
import SF3 from '../../public/imgs/subframe3.png';

const images = [SF1, SF2, SF3, SF1, SF2, SF3, SF1, SF2, SF3, SF1, SF2, SF3, SF1, SF2, SF3, SF1, SF2, SF3, SF1, SF2];

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Shuffle the images array
const shuffledImages = shuffleArray([...images]);

// Function to generate random boolean values
const getRandomBoolean = () => Math.random() < 0.07; // Set a 4% probability of returning true

const VerticalStrip: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-2">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={image}
            alt={`Image ${index}`}
            className={`h-3 w-auto my-4 opacity-50 mb-2 ${getRandomBoolean() ? 'blink' : ''}`} // Conditionally apply blinking animation
          />
        </div>
      ))}
    </div>
  );
};

const Background: React.FC = () => {
  return (
    <div className="bg-[#001528]  h-screen flex justify-center items-center">
      <div className="py-4 px-2 gap-12 flex">
        {[...Array(18)].map((_, index) => (
          <VerticalStrip key={index} images={shuffledImages} />
        ))}
      </div>
    </div>
  );
};

export default Background;