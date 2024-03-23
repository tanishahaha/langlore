import React from "react";
import logo1 from "../../public/imgs/logo1.png";
import logo2 from "../../public/imgs/logo2.png";
import logo3 from "../../public/imgs/logo3.png";
import logo4 from "../../public/imgs/logo4.png";
import logo5 from "../../public/imgs/logo5.png";
import "./component.css";

const Sponser: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-white font-medium mb-8 text-lgsubheading max-md:text-mdsubheading">
          Recognised for our work by
        </div>
        <div className="custom-bgColor tech-slideshow py-6 px-3 rounded-xl max-md:rounded-none flex items-center space-x-8 justify-center logos-container  max-w-screen-lg w-full">
          <img
            src={logo1}
            alt="Ashoka University logo"
            className=" h-12 p-1 logo"
          />
          <img src={logo2} alt="iKStep logo" className="h-12 p-1 logo" />
          <img src={logo3} alt="ELA logo" className=" h-12 p-1 logo" />
          <img
            src={logo4}
            alt="Mangalore University logo"
            className="h-12 p-1 logo"
          />
          <img src={logo5} alt="Ka-naada logo" className="h-12 p-1 logo" />
        </div>
      </div>
    </div>
  );
};

export default Sponser;
