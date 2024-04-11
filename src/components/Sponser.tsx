import React from "react";
import logo1 from "../../public/imgs/logo1.png";
import logo2 from "../../public/imgs/logo2.png";
import logo3 from "../../public/imgs/logo3.png";
import logo5 from "../../public/imgs/logo5.png";
import "./component.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sponser: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: window.innerWidth <= 768 ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div
      className="w-full flex flex-wrap justify-center my-10"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-gray-400 font-medium mb-8 text-xl max-md:text-mdsubheading">
          Recognised for our work by
        </div>

        <div className="w-screen px-10 max-md:px-0 flex flex-wrap justify-center items-center">

        <div className="custom-bgColor px-0 py-6  rounded-xl max-md:rounded-none md:max-w-full md:mx-6 w-full overflow-hidden max-lg:w-screen">
          <Slider {...settings} className="w-screen">
            <div className="flex items-center justify-center text-center h-12 p-1">
              <img
                src={logo1}
                alt="Ashoka University logo"
                className="h-full ml-20 "
              />
            </div>
            <div className="flex items-center justify-center text-center">
              <img src={logo2} alt="iKStep logo" className="h-12  ml-16 " />
            </div>
            <div className="flex items-center justify-center text-center">
              <img src={logo3} alt="ELA logo" className=" h-12 p-1 ml-8 " />
            </div>
            
            <div className="flex items-center justify-center text-center h-12 p-1">
              <img src={logo5} alt="Ka-naada logo" className="h-full " />
            </div>
          </Slider>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sponser;
