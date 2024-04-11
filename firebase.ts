import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe9fQyxZ_DAELTcgv-s_XpDqfi3LOiQhU",
  authDomain: "langlore-9ef13.firebaseapp.com",
  projectId: "langlore-9ef13",
  storageBucket: "langlore-9ef13.appspot.com",
  messagingSenderId: "964977122028",
  appId: "1:964977122028:web:b3b8f445072eaf08f6e3c9",
  measurementId: "G-D9VD7VZN9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export const addNewsletterEmail = async (email: string): Promise<void> => {
  try {
    // Add the email to the "newsletterEmails" collection
    await addDoc(collection(db, "newsletterEmails"), { email });

    console.log("Newsletter email added:", email);
  } catch (error) {
    console.error("Error adding newsletter email:", error);
  }
};

const isEmailVerified = () => {
  const user = auth.currentUser;
  if (user) {
    return user.emailVerified;
  }
  return false;
};
// Function to handle user login
export const loginUser = async (email: string, password: string) => {
  try {
    // Sign in user with email and password
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Get user data
    const user = userCredential.user;

    // Store user data in local storage
    // if user is not valid
    if (isEmailVerified()) {
      localStorage.setItem("user", JSON.stringify(user));
      alert(`Logged in successfully as ${user.email}`);
    }

    // console.log("User logged in:", user.email);
  } catch (error) {
    // console.error("Error logging in:", (error as Error).message);
    alert(`Error logging in: ${(error as Error).message}`);
  }
};

export const getUserEmailFromLocalStorage = () => {
  const userDataString = localStorage.getItem("user");
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData.email; // Return the email property from user data
  }
  return null; // Return null if user data is not found in localStorage
};

// export const actionCodeSettings = {
//   // URL to redirect the user after completing the action
//   url: "https://langlore.vercel.app/",

//   // Handle code within the app
//   handleCodeInApp: true,

//   // iOS settings (assuming App Links)
//   iOS: {
//     bundleId: "com.example.ios",
//   },

//   // Android settings (assuming App Links)
//   android: {
//     packageName: "com.yourcompany.yourapp",
//     installApp: true,
//     minimumVersion: "12",
//   },
// };

// onAuthStateChanged(auth, (user) => {
//   console.log("Auth state changed:", user);
//   if (user && user.emailVerified) {
//     window.location.href = "https://langlore.vercel.app/";
//   }
// });

export default app;

// Function to redirect after email verification

// const analytics = getAnalytics(app);
