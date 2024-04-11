const express = require("express");
// import express from "express";
// Initialize Firebase Admin SDK
const serviceAccount = require("./langlore-9ef13-firebase-adminsdk-8imza-8930426d6a.json");
// import admin from "firebase-admin";
const admin = require("firebase-admin");
const cors = require("cors");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //   databaseURL: "https://your-project-id.firebaseio.com",
});

const app = express();

// Middleware to parse JSON bodies
app.use(cors());

app.use(express.json());

// Routes
const router = require("./routes");
app.use("/", router);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
