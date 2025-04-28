// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';  // <--- No Router import here
import { Box, Container, Typography, Link } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';

import CourseList from './pages/CourseList';
import CourseDetails from './pages/courseDetails';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';

import theme from './theme';

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px - 64px)',
        bgcolor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Course App
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Link component={RouterLink} to="/courses" variant="h6" underline="hover">
          → View Course List
        </Link>
        <Link component={RouterLink} to="/course-details" variant="h6" underline="hover">
          → Course Details
        </Link>
        <Link component={RouterLink} to="/login" variant="h6" underline="hover">
          → Log In
        </Link>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Removed <Router> */}
      <Header />

      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}
