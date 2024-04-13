import React, { useState, useEffect } from "react";
import { verifyUser } from "../../firebase.ts"; // Import your backend function
import { getUserEmailFromLocalStorage } from "../../firebase";

const CourseRender = () => {
  const [userAccess, setUserAccess] = useState(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = getUserEmailFromLocalStorage();
    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // Call your backend function to verify user access
      try {
        const userData = await verifyUser(userEmail || ""); 
        
         console.log(userData);
      } catch (error) {
        console.error("Error verifying user:", error);
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  

  return (
    <div>
      {userAccess === null ? ( // Render loading indicator while fetching data
        <p>Loading...</p>
      ) : userAccess ? ( // If user has access, render content for granted access
        <div>
          <h2>You have access to all the contents!</h2>
          {/* Render additional content here */}
        </div>
      ) : (
        // If user doesn't have access, render content for no access
        <div>
          <h2>Join the course to get access!</h2>
          {/* Render join course button or additional content here */}
        </div>
      )}
    </div>
  );
};

export default CourseRender;
