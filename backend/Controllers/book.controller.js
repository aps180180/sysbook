import { Book } from "../models/book.model.js";
import mongoose from "mongoose";
export const createBook = async (req, res) => {
  const { title, subtitle, author, genre, cover } = req.body;
  try {
    const book = new Book({ title, subtitle, author, genre, cover });
    await book.save();
    res.status(201).json({ sucess: true, data: book });
  } catch (error) {
    console.error("Error saving book: ", error);
    res.status(500).json({ sucess: false, error: "Error saving book" });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error("Error fetching books: ", error);
    res.status(500).json({ success: false, error: "Error fetching books" });
  }
};

export const getBook = async(req,res)=> {
    const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: "Inválid Id" });
  }
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.error("Error fetching book: ", error);
    res.status(500).json({ success: false, error: "Error fetching book" });
  }
}

export const updateBook = async (req,res)=> {
    const { id } = req.params;
  const { title, subtitle, author, genre, cover } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: "Invalid Id" });
  }
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ sucess: false, error: "Book not found" });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, subtitle, author, genre, cover },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    console.error("Error updating book: ", error);
    res.status(500).json({ success: false, error: "Error Updating book:" });
  }
}

export const deleteBook = async (req,res)=> {
    const { id } = req.params;
  const { title, subtitle, author, genre, cover } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, error: "Invalid Id" });
  }

  try {
    const book = Book.findById(id);
    if (!book) {
      return res.status(404).json({ success: false, error: "Book not found" });
    }
    await Book.findByIdAndDelete(id);
    res.status(200).json({ sucess: true, data: {} });
  } catch (error) {
    console.error("Error Deleting book: ", error);
    res.status(500).json({ success: false, error: "Error Deleting book:" });
  }
}