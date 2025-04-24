// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';

import CourseDetails from './pages/courseDetails';
import Login         from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Full-height flex layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
        }}
      >
        <BrowserRouter>
          {/* Header always at top */}
          <Header />

          {/* Nav bar */}
          <Box
            component="nav"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              py: 2,
              bgcolor: 'background.paper',
            }}
          >
            <Link component={RouterLink} to="/"      underline="hover">Home</Link>
            <Link component={RouterLink} to="/login" underline="hover">Log In</Link>
          </Box>

          {/* Main content grows to fill */}
          <Box
            component="main"
            sx={{
              flex: 1,
              overflow: 'auto',    // scroll if content is taller
            }}
          >
            <Routes>
              <Route path="/"      element={<CourseDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          </Box>

          {/* Footer always at bottom */}
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
