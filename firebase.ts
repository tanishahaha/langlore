import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
// import firebase from "firebase/compat/app";
import {
  DocumentData,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

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
    await createUser(email)
    if (isEmailVerified()) {
      localStorage.setItem("user", JSON.stringify(user));
      // alert(`Logged in successfully as ${user.email}`);
    }

    // console.log("User logged in:", user.email);
  } catch (error) {
    // console.error("Error logging in:", (error as Error).message);
    return "error loggin in"
    alert(`Error logging in: ${(error as Error).message}`);
  }
};

export const getUserEmailFromLocalStorage = () => {
  const userDataString = localStorage.getItem("user");
  // console.log("userDataString", userDataString);
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData.email; // Return the email property from user data
  }
  return null; // Return null if user data is not found in localStorage
};
// getUserEmailFromLocalStorage();
// TODO: Get user data from the firestore database and traverse the collection and see "users"
// collection and get the user data and check whether the given email
// has a "access" field true or false

import { getDocs, query, where } from "firebase/firestore";

// TODO: call the function getUserDataByEmail with the email of the user to check whether the user has the has accessed option enabled or not
export const verifyUser = async function getUserDataByEmail(email: string) {
  const usersRef = collection(db, "users");

  // Create a query to filter documents by email
  const q = query(usersRef, where("email", "==", email));

  // Execute the query and await the result
  const querySnapshot = await getDocs(q);
  let userData;

  // Iterate through the documents that match the query
  querySnapshot.forEach((doc) => {
    userData = doc.data();
    // console.log("userData", userData);
    // return userData;
    // console.log(doc.data());
  });
  return userData; // Return userData from the main function
};

// verifyUser("amintanisha17@gmail.com");

// instead of sending the route for the checking seatAvailable or not,
// call this function only
export const getSeats = async function getSeatsAvailable(courseName: string) {
  // console.log("courseName", courseName);
  const courseRef = collection(db, "courses");
  const q = query(courseRef, where("name", "==", courseName));
  const querySnapshot = await getDocs(q);

  let seatsAvailable;
  querySnapshot.forEach((doc) => {
    seatsAvailable = doc.data().seatsAvailable;
  });

  return seatsAvailable;
};

// TODO: call the function getAllCourse to get all the courses available in the database,
// schema is,
// {
//   title : "Course Title",
//   seatsAvailable : 10,
//   tags : ["tag1", "tag2"],
//   modules : 4,
//   duration : 6,
//   desc : "Course Description",
//   price: 1000
// }
export const getAllCourse = async function getAllCourses() {
  // console.log("getAllCourses");
  const courseRef = collection(db, "courses");
  const querySnapshot = await getDocs(courseRef);
  const allCourses: DocumentData[] = [];

  querySnapshot.forEach((doc) => {
    allCourses.push(doc.data());
  });
  // console.log(allCourses);
  return allCourses;
};

// TODO: call the function createUser to add the user to the database as the user sign up
export const createUser = async function createUser(email: string) {
  const userRef = collection(db, "users");

  // Check if the email already exists in the collection
  const emailQuery = query(userRef, where("email", "==", email));
  const querySnapshot = await getDocs(emailQuery);

  if (!querySnapshot.empty) {
    console.log("User with this email already exists.");
    return; // Exit function if email already exists
  }
  try {
    await addDoc(userRef, {
     
      email: email,
      hasAccess: false, // Setting default value to false
    });
    console.log("User added successfully.");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};
// getAllCourse();
// getSeats("Tulu");
// console.log(getSeats("Tulu"));
// this is working fine
// getUserDataByEmail("chaurasiya@gmail.com");
// export const actionCodeSettings = {

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
