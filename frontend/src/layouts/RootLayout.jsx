import { Outlet } from 'react-router-dom';
import {Container } from '@mui/material';

import NavBar from '../components/NavBar';
import ThemeContextProvider from '../contexts/ThemeContext.jsx';
const RootLayout = () => {
  return (
    <ThemeContextProvider>
    
      <NavBar /> 
      <Container maxWidth="xxl" sx={{ mt: 1 }}>
      <Outlet />
      </Container>
      
    </ThemeContextProvider>
  );
};
export default RootLayout;