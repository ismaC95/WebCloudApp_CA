import { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button,
  IconButton, Box, Badge
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import ShoppingCartComp from './shoppingCart/ShoppingCartComp';

const UserNavbar = () => {
  const { addedToCart } = useCart();
  const { logout }      = useAuth();
  const navigate        = useNavigate();

  const [openCart, setOpenCart] = useState(false);
  const toggleCart = (val) => () => setOpenCart(val);

  const handleSignOut = async () => {
    await logout();                 // Firebase sign-out
    navigate('/', { replace: true });
  };

  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/coursedisplay/3">My Course</Button>
          <Button color="inherit" component={Link} to="/courses">Courses</Button>

          <Button variant="outlined" onClick={handleSignOut}>
            Sign Out
          </Button>

          <IconButton color="inherit" onClick={toggleCart(true)}>
            <Badge badgeContent={addedToCart.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <ShoppingCartComp openCart={openCart} toggleCart={toggleCart} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
