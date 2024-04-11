// Payment_popup.tsx

import React, { useState, useEffect } from "react";
import Popup from "./Popup"; // assuming Popup component is in a file named Popup.tsx
import PaymentButton from "./PaymentButton(phaltu)"; // import the PaymentButton component
import "./component.css";

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
                {/* Replace the button with the PaymentButton component */}
                <PaymentButton onClick={handleSubmit} />
                {showPopup && <Popup onClose={handleClosePopup} />}
            </div>
        </div>
    );
};

export default Payment_popup;
