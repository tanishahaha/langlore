import React, { useState, useEffect } from "react";
import { verifyUser } from "../../firebase.ts"; // Import your backend function
import { getUserEmailFromLocalStorage } from "../../firebase";


const CourseRender = () => {
  const [userAccess, setUserAccess] = useState(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const email = getUserEmailFromLocalStorage();
      if (email) {
        setUserEmail(email);
        try {
          const userData = await verifyUser(email); 
          console.log("fjf")
          console.log(userData);
        } catch (error) {
          console.error("Error verifying user:", error);
        }
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
      ) : ( // If user doesn't have access, render content for no access
        <div>
          <h2>Join the course to get access!</h2>
          {/* Render join course button or additional content here */}
        </div>
      )}
    </div>
  );
};

export default CourseRender;
