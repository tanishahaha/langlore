import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import Popup from "./Popup_Alert";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null); // New state for redirect URL

  const navigate = useNavigate();
  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
    setPasswordError("");
    navigate('/signin')

    if (redirectUrl) {
     window.open(redirectUrl, "_blank");
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCred.user) {
        await sendEmailVerification(userCred.user);

        const emailProvider = getEmailProvider(email);
        if (emailProvider) {
          setPopupMessage(
            "Email verification link sent. Please check your inbox."
          );
          setShowPopup(true);
          setRedirectUrl(emailProvider.url); // Set the redirect URL here
        }
        // Alert user
      }
    } catch (error) {
      if ((error as any).code === "auth/email-already-in-use") {
        setPopupMessage(
          "User already exists. Please sign in or reset your password."
        );
      } else {
        console.error("Error signing up:", error);
        setPopupMessage("An error occurred. Please try again later.");
      }
      setShowPopup(true);
    }
  };

  const getEmailProvider = (email: string) => {
    const providers = [
      { domain: "gmail.com", url: "https://mail.google.com/" },
      { domain: "yahoo.com", url: "https://mail.yahoo.com/" },
      { domain: "hotmail.com", url: "https://outlook.live.com/" },
      { domain: "outlook.com", url: "https://outlook.live.com/" },
      { domain: "live.com", url: "https://outlook.live.com/" },
    ];

    const domain = email.split("@")[1];
    return providers.find((provider) => domain.includes(provider.domain));
  };

  return (
    <>
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
      <div className="h-[90vh] flex items-center justify-center border-white p-4">
        <div className="custom-bgColor p-8 rounded-2xl shadow-2xl border-t max-w-sm w-full">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Enter email
            </label>
            <input
              className="outline-none border border-gray-600 w-full py-2 mb-3 px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
              id="email"
              type="email"
              placeholder="Johndoe@somewhere.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Enter password
            </label>
            <input
              className="outline-none border border-gray-600 w-full py-2 mb-3 px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
              id="password"
              type="password"
              placeholder="********"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              value={password}
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="custom-button w-full text-[1rem]"
              onClick={(e) => handleSubmit(e)}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;








