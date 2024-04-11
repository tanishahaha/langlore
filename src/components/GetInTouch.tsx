import React, { useState, useEffect } from "react";
import "./component.css";

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content bg-gray-800 text-white rounded-lg shadow-lg p-8 items-center border border-white">
        <h1 className="text-lg font-semibold mb-4">
          Thank you for contacting us!
        </h1>
        <p className="text-sm mb-4">We will get in touch with you soon.</p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-4 rounded-xl"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

const GetInTouch: React.FC = () => {
  // TODO: add all the useState functionality and hit the api endpoint
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  }, [showPopup]);

  return (
    <div className="w-full px-10 flex-wrap flex" data-aos="fade-up">
      <div className="border-t border-white mx-auto p-4 sm:p-8 max-w-screen-md custom-bgColor rounded-xl w-full">
        <h1 className="md:text-4xl text-mdsubheading font-bold mb-4 text-white">
          Get in touch
        </h1>
        <p className="mb-4 md:text-lg text-mdsubsubheading  sm:mb-8 text-white">
          Have any questions? We're here to help.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
          />
          <input
            type="email"
            placeholder="someone@gmail.com"
            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
          />
          <input
            type="tel"
            placeholder="+91 999-999-9999"
            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
          />
        </div>
        <div className="mb-4">
          <select className="custom-inputColor border-gray-600 p-3 rounded-xl text-gray-300 w-full outline-none border focus:border-white">
            <option>Choose any</option>
            <option>Are you a business? Partner with us!</option>
            <option>Collaborate with us as an individual</option>
            <option>Report an issue</option>
            <option>Request for help</option>
            <option>Suggest feedback</option>
            <option>Suggest a new course</option>
          </select>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Enter your message here."
            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white custom-textarea p-3 rounded-xl text-gray-300 w-full h-32"
          ></textarea>
        </div>
        <div className="md:grid grid-cols-2 ">
          <div className="flex items-center mb-4">
            <input type="checkbox" id="agree" className="custom-checkbox" />
            <label htmlFor="agree" className="ml-2 text-gray-300">
              I agree to the terms
            </label>
          </div>
          <button onClick={handleSubmit} className="custom-button w-full">
            Submit
          </button>
        </div>

        {showPopup && <Popup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default GetInTouch;
