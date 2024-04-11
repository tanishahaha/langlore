import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React from "react";
import { auth } from "../../../firebase";
// import { Auth } from "firebase/auth";

const Signup: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //   const signup = () => {
  //     Auth
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((userCredential) => {
  //         // send verification mail.
  //         userCredential.user.sendEmailVerification();
  //         auth.signOut();
  //         alert("Email sent");
  //       })
  //       .catch(alert);
  //   };

  //const handleSubmit = async (
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  //) => {
  //console.log("clicked");
  //e.preventDefault();
  //try {
  // const userCred = await createUserWithEmailAndPassword(
  //  auth,
  //  email,
  //  password
  // );

  // if (userCred.user) {
  // Send email verification
  // await sendEmailVerification(userCred.user);

  // Open new tab/window with Gmail URL

  // if (email.includes("@gmail.com")) {
  //  window.open("https://mail.google.com/", "_blank");
  // }
  // Check if the email provider is Outlook
  // else if (
  //  email.includes("@outlook.com") ||
  //  email.includes("@hotmail.com") ||
  //   email.includes("@live.com")
  //) {
  //window.open("https://outlook.live.com/", "_blank");
  //}

  // Sign out the user
  // auth.signOut();

  // Alert user
  // alert("Email verification link sent. Please check your inbox.");
  //}
  //} catch (error) {
  //if ((error as any).code === "auth/email-already-in-use") {
  //alert("User already exists. Please sign in or reset your password.");
  //} else {
  //console.error("Error signing up:", error);
  //}
  //}
  //};

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("clicked");
    e.preventDefault();
    try {
      // TODO: for frontend, while making createUser also make sure to add the user to the database while hitting the endpoint
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCred.user) {
        // Send email verification
        await sendEmailVerification(userCred.user);

        // Open new tab/window with email provider URL
        const emailProvider = getEmailProvider(email);
        if (emailProvider) {
          window.open(emailProvider.url, "_blank");
        }
        // Alert user
        alert("Email verification link sent. Please check your inbox.");
      }
    } catch (error) {
      if ((error as any).code === "auth/email-already-in-use") {
        alert("User already exists. Please sign in or reset your password.");
      } else {
        console.error("Error signing up:", error);
      }
    }
  };

  // Function to get email provider URL
  const getEmailProvider = (email: string) => {
    const providers = [
      { domain: "gmail.com", url: "https://mail.google.com/" },
      { domain: "yahoo.com", url: "https://mail.yahoo.com/" },
      { domain: "hotmail.com", url: "https://outlook.live.com/" },
      { domain: "outlook.com", url: "https://outlook.live.com/" },
      { domain: "live.com", url: "https://outlook.live.com/" },
      // Add more email providers as needed
    ];

    const domain = email.split("@")[1];
    return providers.find((provider) => domain.includes(provider.domain));
  };
  return (
    <>
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
