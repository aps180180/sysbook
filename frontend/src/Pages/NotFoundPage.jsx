import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="sm" sx={{mt:8,textAlign:"center"}}>
      <Typography variant="h4" gutterBottom>
        Página não encontrada
      </Typography>
      <Typography variant="subtitle"  gutterBottom>
        A página que você está procurando não existe.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Voltar para a página inicial
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
