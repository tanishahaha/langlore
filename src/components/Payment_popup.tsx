import React, { useState, useEffect } from "react";
import "./component.css";

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="popup-container px-10">
            <div className="popup-content bg-gray-800  rounded-lg shadow-lg p-8 items-center border border-white ">
                <h1 className="text-lg font-semibold mb-4 text-white">
                    Thank you for contacting us!
                </h1>
                <form action="" className="text-white text-[18px] ">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">Enter email id:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="someone@gmail.com"
                            className="outline-none border md:text-lg text:sm border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="upi" className="block mb-1">Enter upi id:</label>
                        <input
                            type="text"
                            id="upi"
                            placeholder="upi"
                            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white placeholder-text-[18px] custom-inputColor p-3 rounded-xl text-gray-300 w-full"
                        />
                    </div>
                </form>
                <p className="text-sm mb-4 text-white">We'll get in touch with you soon.</p>
                <button
                    onClick={onClose}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

const Payment_popup: React.FC = () => {
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
        <div className="px-10">
        <div className="border-t border-white mx-auto p-4 sm:p-8 max-w-screen-md custom-bgColor rounded-xl " data-aos="fade-up">
            <button onClick={handleSubmit} className="custom-button w-full">
                Payment
            </button>
            {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
        </div>
    );
};

export default Payment_popup;
