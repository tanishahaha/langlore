import  { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const PopupEmailUpi = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [email, setEmail] = useState('');
  const [upi, setUpi] = useState('');
  const [emailError, setEmailError] = useState('');
  const [upiError, setUpiError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!validateUpi(upi)) {
      setUpiError("Please enter a valid UPI address");
      return;
    }
    // Your submission logic here...
    // Assuming submission is successful
    setSubmissionSuccess(true);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUpi = (upi: string): boolean => {
    const upiRegex = /^.+@.*$/;
    return upiRegex.test(upi);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup bg-gray-800 w-[40%] text-white rounded-lg shadow-lg p-8 items-center border border-white">
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            {submissionSuccess ? (
                <div className='w-full items-center justify-center text-center'>

              <p className="text-sm mb-4 text-white">
                We'll get in touch with you soon.
              </p>
              <button
              onClick={()=>{setSubmissionSuccess(false);setShowPopup(false);}}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
            >
              Ok
            </button>
                </div>
            ) : (
              <>
                <h1 className="md:text-lg font-semibold mb-4 text-white">
                  Sign up for the Tulu Basics Course!
                </h1>
                <div className="text-white md:text-[18px] text-sm mt-4">
                  <div className="mb-4 flex flex-col text-left ">
                    <label htmlFor="email" className="block mb-2">
                      Enter email id:
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="someone@gmail.com"
                      className={`outline-none border md:text-lg text:sm border-gray-600 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300 w-full ${
                        emailError ? "border-red-500" : ""
                      }`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>
                  <div className="mb-4 flex flex-col text-left">
                    <label htmlFor="upi" className="block mb-2">
                      Enter upi id:
                    </label>
                    <input
                      type="text"
                      id="upi"
                      placeholder="username@okhdfcbank"
                      className={`outline-none border border-gray-600 focus:border-white focus:placeholder-white placeholder-text-[18px] custom-inputColor p-3 rounded-xl text-gray-300 w-full ${
                        upiError ? "border-red-500" : ""
                      }`}
                      value={upi}
                      onChange={(e) => {
                        setUpi(e.target.value);
                        setUpiError("");
                      }}
                    />
                    {upiError && (
                      <p className="text-red-500 text-xs mt-1">{upiError}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupEmailUpi;
