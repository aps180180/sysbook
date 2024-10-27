import "dotenv/config";
import express from "express";
import connectDatabase from "./db/connect";
import { Book } from "./models/book.model";

const app = express();

app.post("/api/v1/books", async (req, res) => {
  const { title, subtitle, author, genre, cover } = req.body;
  try {
    const book = new Book({ title, subtitle, author, genre, cover });
    await book.save();
    res.status(201).json({ sucess: true, data: book });
  } catch (error) {
    console.error("Error saving book: ", error);
    res.status(500).json({ sucess: false, error: "Error saving book" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDatabase();
});
