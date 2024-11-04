import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const EditBookDialog = ({ book, open, onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: book });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
    <form noValidate onSubmit={handleSubmit(onSave)}>
        <DialogTitle> Editar Livro {book.title}</DialogTitle>
        <DialogContent>
          <TextField
            label="Titulo"
            fullWidth
            margin="normal"
            {...register("title", {
              required: "Campo obrigatório",
              minLength: { value: 10, message: "Mínimo de 10 caracteres" },
            })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            label="SubTitulo"
            fullWidth
            margin="normal"
            {...register("subtitle", {
              minLength: { value: 10, message: "Mínimo de 10 caracteres" },
            })}
            error={!!errors.subtitle?.message}
            helperText={errors.subtitle?.message}
          />

          <TextField
            label="Autor"
            fullWidth
            margin="normal"
            {...register("author", {
              required: "Campo Obrigatório",
              minLength: { value: 10, message: "Mínimo de 10 caracteres" },
            })}
            error={!!errors.author?.message}
            helperText={errors.author?.message}
          />
          <TextField
            label="Gênero"
            fullWidth
            margin="normal"
            {...register("genre", {
              required: "Campo Obrigatório",
              minLength: { value: 4, message: "Mínimo de 4 caracteres" },
            })}
            error={!!errors.genre?.message}
            helperText={errors.genre?.message}
          />
          <TextField
            label="Imagem da Capa"
            fullWidth
            margin="normal"
            {...register("cover", {
              required: "Campo Obrigatório",
              pattern: {
                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff))(?:\?.*)?$/i,
                message: "Url de imagem inválido",
              },
            })}
            error={!!errors.cover?.message}
            helperText={errors.cover?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
           
          >
            Salvar
          </Button>
        </DialogActions>
    </form>
    </Dialog>
  );
};
EditBookDialog.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditBookDialog;
