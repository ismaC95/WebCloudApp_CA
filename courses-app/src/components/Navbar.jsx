import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import logo from '../assets/images/logo-purple-transparent.png';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Courses', to: '/courses' },
    { label: 'Log In', to: '/login' },
    { label: 'Sign Up', to: '/signup', isSignup: true } // special styling
  ];

  // Drawer Navbar
  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
      <List>
        {drawerItems.map(({ label, to, isSignup}, index) => (
          <ListItem 
          key={index}
          disableGutters
          sx={{ justifyContent: 'center' }}
        >
          <Box
            component={Link}
            to={to}
            sx={{
              display: 'inline-block',
              textDecoration: 'none',
              backgroundColor: isSignup ? 'white' : 'transparent',
              border: isSignup ? '1px solid black' : 'none',
              color: 'black',
              borderRadius: 1,
              px: 2,
              py: 1,
              fontWeight: isSignup ? 600 : 400,
              fontSize: '0.9rem',
              width: isSignup ? '50%' : '100%', 
              textAlign: 'center',
            }}
          >
            {label}
          </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  // Main Navbar Rendering
  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              src={logo}
              alt="AcademixCourse Logo"
              sx={{ height: 50, cursor: 'pointer'}} 
            />
          </Link>

          {/* Spacing the buttons to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <>
              {/* Menu icon in mobile */}
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (

            // Desktop navbar
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/courses">Courses</Button>
              <Button variant="outlined" component={Link} to="/login">Log In</Button>
              <Button variant="contained" component={Link} to="/signup">Sign Up</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
