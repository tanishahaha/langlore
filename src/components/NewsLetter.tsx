import React from "react";
import {
  FaLightbulb,
  FaInfoCircle,
  FaCalendarAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "./component.css";
import { addNewsletterEmail } from "../../firebase";

const NewsLetter: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Example usage
  // const email = "example@example.com";

  //TODO: Add the email to the "newsletterEmails" collection
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    // console.log("clicked");
    e.preventDefault();
    if (validateEmail(email)) {
      await addNewsletterEmail(email);
    } else {
      console.log("Invalid email address");
    }
    // Add the email to the "newsletterEmails" collection
    console.log("Email added to newsletter:", email);
  };
  return (
    <div
      className="w-screen  flex justify-center items-center px-10  flex-wrap"
      data-aos="fade-up"
    >
      <div className="custom-bgColor flex md:max-w-screen-xl w-full items-centermax-md:h-auto text-white justify-center rounded-2xl flex-col md:flex-row  md:justify-between  border-t border-white shadow-lg flex-wrap">
        <div className="md:flex flex-col space-y-3 -ml-5  icon ">
          <button className="custom-inputColor rounded-r-full border-gray-400 border-t w-full">
            <div className=" text-white font-semibold py-4 pl-8 pr-12  flex items-center space-x-2">
              <span>Tips & Tricks</span>
              <FaLightbulb />
            </div>
          </button>
          <button className="custom-inputColor  border-gray-400 border-t rounded-r-full w-2/3">
            <div className=" text-white font-semibold py-4 pl-8 pr-8  flex items-center  space-x-2">
              <span>News</span>
              <FaInfoCircle />
            </div>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center md:w-[62%] w-full text-center">
          <div className="">
            <h2 className="font-semibold md:text-[27px] text-xl  text-graytxt">
              Curious about cultures?
            </h2>
            <p className="md:text-[24px] text-[14px] text-white tracking-widest">
              Subscribe to our newsletter!
            </p>
          </div>
          <div className="flex mt-4 mb-2  max-md:flex-col justify-center max-md:gap-3">
            <div className="hide-on-desktop">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email..."
                className="custom-inputColor rounded-l-xl rounded-r-xl border-l  border-gray-300  border-r-white placeholder:text-white py-2  px-6 outline-none w-full md:text-[14px]"
              />
              <button
                className="custom-button md:text-[13px] md:rounded-x-xl w-full  mt-3 "
                onClick={(e) => handleSubmit(e)}
              >
                Subscribe
              </button>
            </div>

            <div className="hide-on-mobile">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email..."
                className="custom-inputColor rounded-l-xl rounded-r-xl border-l  border-gray-300  border-r-white placeholder:text-white py-2  px-6 outline-none max-md:w-full md:text-[14px]"
              />
              <button
                className="custom-button md:text-[13px] md:rounded-x-xl "
                onSubmit={(e) => handleSubmit(e)}
              >
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-mdsubsubheading mt-1 text-graytxt">
            Pssssst. don't worry, we don't spam much!
          </p>
        </div>

        <div className=" flex-col space-y-3 md:flex -mr-5 icon ">
          <button className="custom-inputColor rounded-l-full border-gray-400 border-t  -ml-12 ">
            <div className=" text-white font-semibold py-4 pl-6 pr-12  flex items-center space-x-2 ">
              <FaCalendarAlt />
              <span>Upcoming events</span>
            </div>
          </button>

          <div className=" custom-inputColor  rounded-l-full border-gray-400 border-t  ">
            <button className="text-white font-semibold py-4 pl-6 pr-8 flex items-center space-x-2">
              <FaQuestionCircle />
              <span>What's new</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
