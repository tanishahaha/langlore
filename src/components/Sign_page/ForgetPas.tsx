// ForgetPas.tsx
import React from "react";
import "../component.css";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";

const ForgetPas: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handlePasswordReset = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      // TODO: redirect the user to mail
      // Send password reset email
      await sendPasswordResetEmail(auth, email);

      // Redirect user to their inbox
      window.open("https://mail.google.com/", "_blank");

      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error(
        "Error sending password reset email Try creating new account:",
        error
      );
    }
  };
  return (
    <div className="h-[70vh] flex items-center justify-center p-4">
      <form className="custom-bgColor p-8 rounded-2xl shadow-2xl border-t max-w-sm w-full">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Enter Email
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

        <div className="flex items-center justify-between">
          <button
            className="custom-button w-full text-[1rem]"
            onClick={(e) => handlePasswordReset(e)}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPas;
