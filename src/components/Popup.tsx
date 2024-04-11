import React from "react";

interface PopupProps {
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    return (
        <div className="popup-container px-10">
            <div className="popup-content bg-gray-800  rounded-lg shadow-lg p-8 items-center border border-white ">
                <h1 className="md:text-lg  font-semibold mb-4 text-white">
                    Sign up for the Tulu Basics Course!
                </h1>
                <div className="text-white md:text-[18px] text-sm mt-4 ">
                    <div className="mb-4 flex flex-col text-left ">
                        <label htmlFor="email" className="block mb-2">Enter email id:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="someone@gmail.com"
                            className="outline-none border md:text-lg text:sm border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4 flex flex-col text-left">
                        <label htmlFor="upi" className="block mb-2">Enter upi id:</label>
                        <input
                            type="text"
                            id="upi"
                            placeholder="username@okhdfcbank"
                            className="outline-none border border-gray-600 focus:border-white focus:placeholder-white placeholder-text-[18px] custom-inputColor p-3 rounded-xl text-gray-300 w-full"
                        />
                    </div>
                </div>
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

export default Popup;
