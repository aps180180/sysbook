import mongoose  from "mongoose";

const bookScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  }
},{timestamps: true}); // createdAt, updatedAt

export const Book = mongoose.model("Book",bookScheme);
