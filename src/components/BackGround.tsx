import React from 'react';
import SF1 from '../../public/imgs/subframe1.png';
import SF2 from '../../public/imgs/subframe2.png';
import SF3 from '../../public/imgs/subframe3.png';

interface SubFrameProps {
  src: string;
  alt: string;
}

const SubFrame: React.FC<SubFrameProps> = ({ src, alt }) => {
  return (
    <div className="bg-[#00152A] p-1 shadow-lg">
      <img src={src} alt={alt} className="max-w-full max-h-full" />
    </div>
  );
};

interface MainFrameProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const MainFrame: React.FC<MainFrameProps> = ({ children, backgroundColor }) => {
  return (
    <div className={`bg-${backgroundColor} p-4 h-screen overflow-y-auto`}>
      {children}
    </div>
  );
};

const BackGround: React.FC = () => {
  return (
    <MainFrame backgroundColor="">
      <div className='w-[2px]'>
        <SubFrame src={SF1} alt="Image 1" />
      </div>
      <SubFrame src={SF2} alt="Image 2" />
      <SubFrame src={SF3} alt="Image 3" />
      <SubFrame src={SF1} alt="Image 1" />
      <SubFrame src={SF2} alt="Image 2" />
      <SubFrame src={SF3} alt="Image 3" />
      <SubFrame src={SF1} alt="Image 1" />
      <SubFrame src={SF2} alt="Image 2" />
      <SubFrame src={SF3} alt="Image 3" />
      <SubFrame src={SF1} alt="Image 1" />
      <SubFrame src={SF2} alt="Image 2" />
      <SubFrame src={SF3} alt="Image 3" />
      <SubFrame src={SF1} alt="Image 1" />
      <SubFrame src={SF2} alt="Image 2" />
      <SubFrame src={SF3} alt="Image 3" />
    </MainFrame>
  );
};

export default BackGround;
