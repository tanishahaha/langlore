import React from "react";

interface PopupProps {
  message: string;
  onClose: () => void; // Removed the redirectUrl parameter from onClose
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-[#294158] flex flex-col items-center p-8 rounded-lg m-4 text-white md:text-[15px] text-[13px]">
        <p className="">{message}</p>
        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold md:text-[13px] text-[11px] py-2 px-4 rounded" 
          onClick={() => {
            onClose(); // Close the popup
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;






