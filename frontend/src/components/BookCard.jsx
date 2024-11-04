
import { useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Grid2 } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import EditBookDialog from "./EditBookDialog.jsx";
import { updateBook, deleteBook } from "../lib/api.js";
import ConfirmDeleteDialog from "./DeleteConfirmDialog.jsx";

const BookCard = ({ _id: id, title, subtitle, author, genre, cover }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSaveBook = async (data) => {
    try {
      console.log(data);
      await updateBook(id, data);
      handleEditDialogClose();
    } catch (error) {
      console.error("Error updating book", error);
    }
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  
  const handleDeleteBook = async (data) => {
    try {
      console.log(data);
      await deleteBook(id);
      handleDeleteDialogClose();
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <Grid2 xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={5}>
        <Box
          sx={{
            width: "100%",
            height: 500,
            overflow: "hidden",
            "@media (max-width:600px)": {
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            },
            img: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              "@media (max-width:600px)": {
                objectFit: "contain",
              },
            },
          }}
        >
          <img src={cover} alt={`Capa do Livro ${title} : (${id})`} />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="h3" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" component="h4" noWrap>
            {subtitle}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {author}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {genre}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleEditDialogOpen}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDeleteDialogOpen}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
      <EditBookDialog
        book={{ id, title, subtitle, author, genre, cover }}
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        onSave={handleEditSaveBook}
      />
      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        onDelete={handleDeleteBook}
      />
    </Grid2>
  );
};

BookCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
export default BookCard;
