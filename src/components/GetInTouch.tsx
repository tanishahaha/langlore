// GetInTouch component
import React from 'react';
import "./component.css";

const GetInTouch: React.FC = () => {
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
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-2xl w-full">Submit</button>
    </div>
    </div>
    
  );
}

export default GetInTouch;
