// PaymentButton.tsx

import React from "react";

const PaymentButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="custom-button w-full">
            Payment
        </button>
    );
};

export default PaymentButton;
