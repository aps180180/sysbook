import {
  Card,
  CardContent,
  CardHeader,
  Box,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { createBook } from "../lib/api";
const CreateBookPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit  = async(data) => {
    console.log(data);
    try {
        await createBook(data);
        reset();
    } catch (error) {
        console.log("Error creating book: ",error);
    }
  };

  return (
    <Card sx={{ p: 2, my: 5 }}>
      <CardHeader title="Cadastrar novo Livro" />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Box sx={{ display: "flex", gap: 2 }}>
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
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
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
                pattern:{
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff))(?:\?.*)?$/i,
                    message: "Url de imagem inválido" 
                }
              })}
              error={!!errors.cover?.message}
              helperText={errors.cover?.message}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default CreateBookPage;
