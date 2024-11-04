import { useEffect, useState } from "react"; // Import useState from 'react'
import { Grid2 } from "@mui/material";

import BookCard from "./BookCard.jsx";
import { getBooks } from "../lib/api";

//import Brightness7Icon from "@mui/icons-material/Brightness7"

const BookGrid = () => {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response);
    };

    fetchBooks();
  }, []);

  return (
    <Grid2 container spacing={5}>
      {books.length? (books.map(book =>
        <BookCard key={book._id} {...book} /> // Replace 'book' with the actual book object prop from the API response
      )):(<p>Sem Livros para mostrar</p>)} 
      
    </Grid2>
  );
}
export default BookGrid;
