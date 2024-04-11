import React from "react";
import Popup from "./Popup";
import PaymentButton from "./PaymentButton";

const Payment_popup = () => {
    const [showPopup, setShowPopup] = React.useState(false);

    const handleSubmit = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    React.useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Enable scrolling
        }
    }, [showPopup]);

    return (
        <div className="px-10">
            <div className="border-t border-white mx-auto p-4 sm:p-8 max-w-screen-md custom-bgColor rounded-xl " data-aos="fade-up">
                <PaymentButton onClick={handleSubmit} />
                {showPopup && <Popup onClose={handleClosePopup} />}
            </div>
        </div>
    );
};

export default Payment_popup;
