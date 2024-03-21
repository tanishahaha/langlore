
import React from 'react';
import { FaLightbulb, FaInfoCircle, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import './component.css';

const NewsLetter: React.FC = () => {
    return (



        <div className=" custom-bgColor   m-auto flex md:w-2/3 w-screen items-center text-white justify-center rounded-2xl flex-col md:flex-row  md:justify-between md:px-8 border-t border-white shadow-lg ">
            <div className="md:flex flex-col space-y-2 hidden ">
                <div className="custom-inputColor hover:bg-gray-800 rounded-r-full">
                    <div className=" text-white font-semibold py-2 pl-8 pr-12  flex items-center space-x-2">
                        <span>Tips & Tricks</span>
                        <FaLightbulb />
                    </div>
                </div>
                <div className="custom-inputColor hover:bg-gray-800 rounded-r-full">
                    <div className=" text-white font-semibold py-2 pl-8 pr-8  flex items-center space-x-2">
                        <span>News</span>
                        <FaInfoCircle />
                    </div>
                </div>
            </div>

         
                <div className="flex  flex-col items-center justify-center m-auto md:w-1/2 ">
                    <h2 className="font-bold md:text-3xl text-2xl text-gray-400">Curious about cultures?</h2>
                    <p className="text-lg text-white">Subscribe to our newsletter!</p>
                    <div className="flex mt-4 mb-2">
                        <input type="email" placeholder="Enter your email..." className="custom-inputColor rounded-l-full border-l border-white placeholder:text-white py-2 px-4 outline-none" />
                        <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-r-full">
                            Subscribe
                        </div>
                    </div>
                    <p className="text-xs mt-1 text-gray-200">Pssssst. don't worry, we don't spam much!</p>
                </div>
       

            <div className=" flex-col space-y-2 hidden md:flex">

                <div className="custom-inputColor hover:bg-gray-800 rounded-l-full">
                    <div className=" text-white font-semibold py-2 pl-12 pr-12  flex items-center space-x-2">
                        <FaCalendarAlt />
                        <span>Upcoming events</span>
                    </div>
                </div>


                <div className="custom-inputColor hover:bg-gray-800 rounded-l-full">
                    <div className=" text-white font-semibold py-2 pl-12 pr-8 flex items-center space-x-2">
                        <FaQuestionCircle />
                        <span>What's new</span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default NewsLetter;
