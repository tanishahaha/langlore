const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");

const router = express.Router();
const db = admin.firestore();

// Route for creating a user
router.post("/users", async (req, res) => {
  try {
    const userData = req.body; // Adjust the type based on your schema

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Replace the plain password with the hashed one in the user data
    userData.password = hashedPassword;

    // Set default value for hasAccessToCourse if not provided in request body
    if (!userData.hasAccessToCourse) {
      userData.hasAccessToCourse = false;
    }

    // Add the user to the database
    await db.collection("users").add(userData);

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

// update password
router.put("/users/password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Check if the email exists
    const userRef = db.collection("users").where("email", "==", email);
    const snapshot = await userRef.get();

    if (snapshot.empty) {
      // If the email does not exist, return an error
      return res.status(404).send("User not found");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password in the database
    await snapshot.docs[0].ref.update({ password: hashedPassword });

    res.status(200).send("Password updated successfully");
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).send("Error updating password");
  }
});
// Route for getting all users
router.get("/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, data: doc.data() });
    });
    res.json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Error getting users");
  }
});

// Route for creating a course
router.post("/courses", async (req, res) => {
  try {
    const courseData = req.body; // Adjust the type based on your schema
    await db.collection("courses").add(courseData);
    res.status(201).send("Course created successfully");
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).send("Error creating course");
  }
});

// Route for getting all courses
router.get("/courses", async (req, res) => {
  try {
    const snapshot = await db.collection("courses").get();
    const courses = [];
    snapshot.forEach((doc) => {
      courses.push({ id: doc.id, data: doc.data() });
    });
    res.json(courses);
  } catch (error) {
    console.error("Error getting courses:", error);
    res.status(500).send("Error getting courses");
  }
});

// Route for getting the number of available seats for a course
router.get("/courses/:courseId/seatsAvailable", async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const courseRef = db.collection("courses").doc(courseId);
    const courseDoc = await courseRef.get();

    if (!courseDoc.exists) {
      res.status(404).send("Course not found");
      return;
    }

    const courseData = courseDoc.data();
    const seatsAvailable = courseData.seatsAvailable;

    res.json({ seatsAvailable });
  } catch (error) {
    console.error("Error getting seats available for course:", error);
    res.status(500).send("Error getting seats available for course");
  }
});

// Route for creating a subscription
router.post("/subscriptions", async (req, res) => {
  try {
    const subscriptionData = req.body; // Adjust the type based on your schema
    await db.collection("subscriptions").add(subscriptionData);
    res.status(201).send("Subscription created successfully");
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).send("Error creating subscription");
  }
});

// Route for getting all subscriptions
router.get("/subscriptions", async (req, res) => {
  try {
    const snapshot = await db.collection("subscriptions").get();
    const subscriptions = [];
    snapshot.forEach((doc) => {
      subscriptions.push({ id: doc.id, data: doc.data() });
    });
    res.json(subscriptions);
  } catch (error) {
    console.error("Error getting subscriptions:", error);
    res.status(500).send("Error getting subscriptions");
  }
});

// Route for creating a contact
router.post("/contacts", async (req, res) => {
  try {
    const contactData = req.body; // Adjust the type based on your schema
    await db.collection("contacts").add(contactData);
    res.status(201).send("Contact created successfully");
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).send("Error creating contact");
  }
});

// Route for getting all contacts
router.get("/contacts", async (req, res) => {
  try {
    const snapshot = await db.collection("contacts").get();
    const contacts = [];
    snapshot.forEach((doc) => {
      contacts.push({ id: doc.id, data: doc.data() });
    });
    res.json(contacts);
  } catch (error) {
    console.error("Error getting contacts:", error);
    res.status(500).send("Error getting contacts");
  }
});

// Route for creating a course registration
router.post("/courseRegistrations", async (req, res) => {
  try {
    const courseRegistrationData = req.body; // Adjust the type based on your schema
    await db.collection("courseRegistrations").add(courseRegistrationData);
    res.status(201).send("Course registration created successfully");
  } catch (error) {
    console.error("Error creating course registration:", error);
    res.status(500).send("Error creating course registration");
  }
});

// Route for getting all course registrations
router.get("/courseRegistrations", async (req, res) => {
  try {
    const snapshot = await db.collection("courseRegistrations").get();
    const courseRegistrations = [];
    snapshot.forEach((doc) => {
      courseRegistrations.push({ id: doc.id, data: doc.data() });
    });
    res.json(courseRegistrations);
  } catch (error) {
    console.error("Error getting course registrations:", error);
    res.status(500).send("Error getting course registrations");
  }
});

// GETINTOUCH
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

// Define your route to handle form submissions
app.post("/submit-form", async (req, res) => {
  try {
    // Extract form data from the request body
    const { firstName, lastName, email, phoneNumber, reason, message } =
      req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // Add your Gmail email and password of langlore
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    // Compose email message
    const mailOptions = {
      from: email,
      // langlore's email
      to: "recipient-email@example.com",
      subject: "GET IN TOUCH FORM SUBMISSION",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Reason: ${reason}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send response to the client
    res.status(200).send("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Internal server error");
  }
});

// NEWS letters
// Route to add a new email to the newsletterEmails collection
router.post("/newsletterEmails", async (req, res) => {
  try {
    // Extract email address from request body
    const { email } = req.body;

    // Add the email to the 'newsletterEmails' collection
    await addDoc(collection(db, "newsletterEmails"), { email });

    res.status(201).send("Email added to newsletter list successfully");
  } catch (error) {
    console.error("Error adding email to newsletter list:", error);
    res.status(500).send("Error adding email to newsletter list");
  }
});

module.exports = router;
