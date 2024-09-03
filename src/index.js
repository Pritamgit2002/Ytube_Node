// require("dotenv").config({ path: "./env" });
// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
// dotenv.config({
//   path: "./env",
// });
// connectDB();

import dotenv from "dotenv";
import express from "express"; // Import Express
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const app = express(); // Initialize the Express app

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
