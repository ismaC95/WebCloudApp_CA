import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { Router, Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: '6em',
        py: '3em',
        px: '2em',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            textAlign: 'left',
            gap: '2em'
        }}
        >
            <Box>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>Logo</Typography>
                <Stack spacing={1}>
                    <Link component={RouterLink} to="/about" underline="hover" color="inherit" fontSize="small">
                    About Us
                    </Link>
                    <Link component={RouterLink} to="/contact" underline="hover" color="inherit" fontSize="small">
                    Contact Us
                    </Link>
                </Stack>
            </Box>
            <Box>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>Explore</Typography>
                <Stack spacing={1}>
                    <Link component={RouterLink} to="/courses" underline="hover" color="inherit" fontSize="small">
                    Course List
                    </Link>
                </Stack>
            </Box>
            <Box>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>Login</Typography>
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
        <Typography 
        variant="body2" 
        color="text.secondary"
        align="center"
        sx={{ mt: '5em' }}
        >
            © {new Date().getFullYear()} MyCourseApp. All rights reserved.
        </Typography>
    </Box>
  );
};

export default Footer;
