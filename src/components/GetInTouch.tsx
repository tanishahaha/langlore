import React, { useState } from 'react';
import "./component.css";

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div style={{ fontFamily: 'Helvetica, sans-serif' }} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 flex flex-col items-center">
      <h1 className="text-lg font-semibold mb-4">Thank you for contacting us!</h1>
      <p className="text-sm mb-4">We will get in touch with you soon.</p>
      <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white  py-2 px-4 rounded-xl">
        Back to home
        </button>
      </div>
    </div>
  );
};

const GetInTouch: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    // Logic for form submission can go here
    // For now, we'll just show the pop-up
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ fontFamily: 'Helvetica, sans-serif' }} className="mx-auto p-4 sm:p-8 max-w-screen-lg custom-bgColor rounded-xl">
      <h1 className="md:text-4xl text-2xl font-bold mb-4 text-white">Get in touch</h1>
      <p className="mb-4 md:text-lg text-sm  sm:mb-8 text-white">Have any questions? We're here to help.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
        <input type="text" placeholder="First Name" className="custom-inputColor p-3 rounded-xl text-gray-300" />
        <input type="text" placeholder="Last Name" className="custom-inputColor p-3 rounded-xl text-gray-300" />
        <input type="email" placeholder="someone@gmail.com" className="custom-inputColor p-3 rounded-xl text-gray-300" />
        <input type="tel" placeholder="+91 999-999-9999" className="custom-inputColor p-3 rounded-xl text-gray-300" />
      </div>
      <div className="mb-4">
        <select className="custom-inputColor p-3 rounded-xl text-gray-300 w-full">
          <option>Select one...</option>
          <option>Select one...</option>
          <option>Select one...</option>
          <option>Select one...</option>
        </select>
      </div>
      <div className="mb-4">
        <textarea placeholder="Enter your message here." className="custom-textarea p-3 rounded-xl text-gray-300 w-full h-32"></textarea>
      </div>
      <div className='md:grid grid-cols-2 '>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="agree" className="custom-checkbox" />
          <label htmlFor="agree" className="ml-2 text-gray-300">I agree to the terms</label>
        </div>
        <button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-2xl w-full">Submit</button>
      </div>

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default GetInTouch;
