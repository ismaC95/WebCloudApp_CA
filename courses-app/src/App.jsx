// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';     // placeholder
import CourseDetails from './pages/courseDetails';  // ← updated
import Footer from './components/Footer';     // placeholder
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <CourseDetails />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
