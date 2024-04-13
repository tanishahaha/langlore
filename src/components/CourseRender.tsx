import { useState, useEffect } from "react";
import { verifyUser } from "../../firebase.ts"; // Import your backend function
import { getUserEmailFromLocalStorage } from "../../firebase";
import CourseOverview from "./CourseOverview.tsx";
import Courses from "./Courses.tsx";

const CourseRender = () => {
  const [userAccess, setUserAccess] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = getUserEmailFromLocalStorage();
    console.log("email", userEmail);

    try {
      const userDataPromise = verifyUser(email);
      userDataPromise.then((data) => {
        console.log("data", data);
        const userDataString = JSON.stringify(data); // Convert data to string if it's not already a string
        const userData = JSON.parse(userDataString);
        setUserAccess(userData.hasAccessToCourse);
        console.log("userData", userData.hasAccessToCourse);
        // Now you can access properties of userData
      }).catch(error => {
        console.error("Error getting user data:", error);
      });
    } catch (error) {
      console.error("Error getting user email from local storage:", error);
    }
    
    if (email) {
      setUserEmail(email);
    }
  }, []);


  return (
    <div>
      {userAccess === null ? (
        <p>Loading...</p>
      ) : userAccess ? (
        <div>
          <Courses/>
        </div>
      ) : (
        <div>
          <CourseOverview/>

        </div>
      )}
    </div>
  );
};

export default CourseRender;
