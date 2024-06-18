import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../component.css";
import { loginUser,createUser } from "../../../firebase";
import { useEffect } from "react";
import Popup from "./Popup_Alert";

// import { Link } from 'react-router-dom';

const Sign_Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history=useNavigate();
  const location = useLocation();
  const navigate=useNavigate();
  

  useEffect(() => {
    const sessionData = localStorage.getItem("user");
    if (sessionData) {
      // Redirect to home page after
      // history(0)
      history('/')
      
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    
    navigate('/signin');
  };


  const handlSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const currentloc = location.pathname;
    console.log(currentloc);
    const res = await loginUser(email, password);
    if (res === "error loggin in") {
      setShowPopup(true);
    } else {
      await createUser(email);
      // Successful sign-in
      // Store the current location in sessionStorage before redirecting to sign-in page
      sessionStorage.setItem('previousLocation', currentloc);
  
      // Redirect the user back to the previous location
      const previousLocation = sessionStorage.getItem('previousLocation');
      if (previousLocation) {
        window.location.href = previousLocation;
      } else {
        // If there's no previous location, go back to the home page
        window.location.href = '/';
      }
    }
  };
  

  return (
    <>
    {showPopup && <Popup message="Error Signing in. Please enter valid credentials." onClose={closePopup} />}
    <div className="h-[90vh] flex items-center justify-center  border-white p-4">
      <div className="custom-bgColor p-8 rounded-2xl shadow-2xl border-t max-w-sm w-full">
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Enter email
          </label>
          <input
            className="outline-none border border-gray-600 w-full py-2 mb-3  px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
            id="email"
            type="email"
            placeholder="Johndoe@somewhere.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white  text-sm font-bold mb-2"
            htmlFor="password"
          >
            Enter password
          </label>

          <input
            className="outline-none border border-gray-600 w-full py-2 mb-3  px-3 focus:border-white focus:placeholder-white custom-inputColor p-3 rounded-xl text-gray-300"
            id="password"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {/* <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-400">
                        Forgot password?
                    </Link> */}
          <Link
            to="/forget"
            className="inline-block align-baseline  text-sm text-bluee hover:text-blue-400"
          >
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="custom-button w-full text-[1rem]"
            onClick={(e) => handlSubmit(e)}
          >
            Sign in
          </button>
        </div>
        <div className="mt-4 flex w-full">
          <Link
            className="bg-transparent hover:bg-blue-500 text-blue-200  hover:text-white py-2 px-4 border border-bluee hover:border-transparent rounded-xl w-full text-center"
            type="button"
            to="/signup"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sign_Hero;
