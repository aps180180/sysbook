import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the Database");
  } catch (error) {
    console.error("Error connecting the databaase: ", error);
    process.exit(1);
  }
}
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectToDatabase();
});

// m4rJhtXzochPwtXE
