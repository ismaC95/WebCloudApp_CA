import { Box, Typography, Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/logo-purple-transparent.png';

const Footer = () => {
  return (
    <Box //Main footer box
      component="footer"
      sx={{
        mt: '4em',
        py: '2em',
        px: '2em',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
        <Box //inner content
        sx={{
            display: 'flex',
            justifyContent:{xs: "center", md:'space-evenly'} ,
            flexWrap: 'wrap',
            textAlign: 'left',
            gap: '1.5em',
            flexDirection:{xs: "column", md: "row"}
        }}
        >
            <Box sx={{display: "flex", flexDirection:"column", alignItems:{xs:"center"}}}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>AcademixCourse</Typography>
                <Stack spacing={1} >
                    <Link component={RouterLink} to="/about" underline="hover" color="inherit" fontSize="small">
                    About Us
                    </Link>
                </Stack>
            </Box>
            <Box sx={{display: "flex", flexDirection:"column", alignItems:{xs:"center"}}}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>Explore</Typography>
                <Stack spacing={1}>
                    <Link component={RouterLink} to="/courses" underline="hover" color="inherit" fontSize="small">
                    Course List
                    </Link>
                </Stack>
            </Box>
            <Box sx={{display: "flex", flexDirection:"column", alignItems:{xs:"center"}}}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>Accounts</Typography>
                <Stack spacing={1}>
                    <Link component={RouterLink} to="/signup" underline="hover" color="inherit" fontSize="small">
                    Sign Up
                    </Link>
                    <Link component={RouterLink} to="/login" underline="hover" color="inherit" fontSize="small">
                    Log In
                    </Link>
                </Stack>
            </Box>
        </Box>

        {/* Logo at the bottom */}
        <Box 
            sx={{ 
                mt: 1.5,
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1em',
                flexWrap: 'wrap',
                }} 
        >
            <img
             src={logo} 
             alt="AcademixCourse Logo"
             style={{ 
                height: '80px',
                objectFit: 'contain',
             }}
            />

            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} AcademixCourse. All rights reserved.
            </Typography>
            </Box>
    </Box>
  );
};

export default Footer;
