import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from "../Controllers/book.controller.js";
import { validateBook } from "../middlewares/book.validate.js";
const router = Router();
router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", validateBook, createBook);
router.put("/:id", validateBook, updateBook);
router.delete("/:id", deleteBook);

export default router;
