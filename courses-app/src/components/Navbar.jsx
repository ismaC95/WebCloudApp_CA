import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Logo-full2.png';
// import simpleLogo from '../assets/images/Logo-simple.png';

const Navbar = () => (
  <AppBar position="fixed" color="default">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>

        {/* Logo */}
        <Link to="/">
          <Box
            component="img"
            src={logo}
            alt="AcademixCourse Logo"
            sx={{ height: 50, cursor: 'pointer' }}
          />
        </Link>

      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/courses">Courses</Button>

        {/* auth links */}
        <Button variant="outlined" component={Link} to="/login">Log In</Button>
        <Button variant="contained" component={Link} to="/signup">Sign Up</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
