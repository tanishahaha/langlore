import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
export const auth = getAuth();

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
    localStorage.setItem("user", JSON.stringify(user));

    // console.log("User logged in:", user.email);
    alert(`Logged in successfully as ${user.email}`);
  } catch (error) {
    // console.error("Error logging in:", (error as Error).message);
    alert(`Error logging in: ${(error as Error).message}`);
  }
};

export default app;
// const analytics = getAnalytics(app);
