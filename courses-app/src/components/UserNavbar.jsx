import { useState, Fragment } from 'react';
import {
  AppBar, Toolbar, Button, IconButton, Box,
  Badge, List, ListItem, useTheme, useMediaQuery, Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import ShoppingCartComp from './shoppingCart/ShoppingCartComp';
import logo from '../assets/images/Logo-full2.png';

const UserNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { addedToCart } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleCart = (val) => () => setOpenCart(val);

  const handleSignOut = async () => {
    await logout();
    navigate('/', { replace: true }); 
  };

  // Full nav list (including Home for drawer)
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'My Courses', path: '/student-dashboard' },
    { label: 'Courses', path: '/courses' },
  ];

  // navItems without Home for desktop navbar
  const desktopNavItems = navItems.filter(item => item.label !== 'Home');


  // Drawer Navbar
  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Drawer - greeting with name */}
        {currentUser && (
          <ListItem disableGutters sx={{ justifyContent: 'center', width: '100%', mt: 1 }}>
            <Box sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
              Hi,{' '}
              <Box component="span" sx={{ color: '#5C3D90', fontSize: '1.3rem', fontStyle: 'italic' }}>
                {currentUser.displayName}
              </Box>
            </Box>
          </ListItem>
        )}

        {/* Navigation Links (including Home) */}
        {navItems.map((item, index) => (
          <ListItem key={index} disableGutters sx={{ justifyContent: 'center', width: '100%' }}>
            <Box
              component={Link}
              to={item.path}
              sx={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '1rem',
                fontWeight: 500,
                py: 1,
                px: 2,
                textAlign: 'center'
              }}
            >
              {item.label}
            </Box>
          </ListItem>
        ))}

        {/* Shopping Cart with text and icon */}
        <ListItem disableGutters sx={{ justifyContent: 'center', width: '100%' }}>
          <Button
            onClick={toggleCart(true)}
            startIcon={
              <Badge badgeContent={addedToCart.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            }
            sx={{ color: 'black', textTransform: 'none', justifyContent: 'flex-start' }}
          >
            Shopping Cart
          </Button>
        </ListItem>

        {/* Sign Out with button styling like Sign Up */}
        <ListItem disableGutters sx={{ justifyContent: 'center', width: '100%' }}>
          <Button
            onClick={handleSignOut}
            sx={{
              backgroundColor: 'white',
              border: '1px solid black',
              color: 'black',
              borderRadius: 1,
              py: 0.5,
              px: 3,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              mt: 1
            }}
          >
            Sign Out
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link to="/">
            <Box component="img" src={logo} alt="Logo" sx={{ height: 50, cursor: 'pointer' }} />
          </Link>

           {/* Mobile = menu icon drawer */}
          {isMobile ? (
            <>
              <IconButton onClick={() => setDrawerOpen(true)} edge="end">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (

            // Desktop design
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

              {/* User name before About */}
              {currentUser && (
                <Box 
                sx={{ 
                  display: {xs: 'none', sm: 'none', md: 'flex' },
                  fontWeight: 500, 
                  mr: 3,
                  fontSize: {xs: '1rem', md: '1.3rem'},                  
                  }}
                >
                  Welcome Back   , {'    '}
                  <Box component="span" sx={{ color: '#5C3D90', fontWeight: 600, fontSize: '1.3rem', fontStyle: 'italic' }}>
                    {currentUser.displayName}
                  </Box>
                </Box>
              )}
              
              {desktopNavItems.map((item, index) => (
                <Button key={index} component={Link} to={item.path} color="inherit">
                  {item.label}
                </Button>
              ))}

              <Button
                onClick={handleSignOut}
                variant="outlined"
              >
                Sign Out
              </Button>

              <IconButton color="inherit" onClick={toggleCart(true)}>
                <Badge badgeContent={addedToCart.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <ShoppingCartComp openCart={openCart} toggleCart={toggleCart} />
    </>
  );
};

export default UserNavbar;
