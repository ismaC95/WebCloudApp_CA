import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import { AuthProvider }  from './contexts/AuthContext';
import { CartProvider }  from './contexts/CartContext';
import { ThemeProvider } from '@mui/material/styles';
import theme             from './theme.js';        


import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>         
      <CartProvider>        
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
