import { useContext } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
const NavBar = () => {
  const {mode,setMode} = useContext(ThemeContext);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <MenuBookIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none",color: "inherit" }}
            component={Link}
            to="/"
          >
            SysBook
          </Typography>
          <IconButton component ={Link} to="/create-book">
            <AddBoxIcon />
          </IconButton>
          <IconButton onClick={()=>setMode(prevMode=> prevMode=="dark"?"light":"dark")}>
             {mode=="dark"? <Brightness7Icon />:<Brightness4Icon />}
          </IconButton>

          {/* Add your navigation links here */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
