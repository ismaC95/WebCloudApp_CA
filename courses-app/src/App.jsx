import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';  // <--- No Router import here
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import CourseDisplay from './pages/CourseDisplay';
import Checkout from './pages/Checkout';
import PaymentSuccessful from './pages/PaymentSuccessful';

import Footer from './components/Footer';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/courseDetails';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />

        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/coursedisplay" element={<CourseDisplay />} /> {/*PH for course id */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment-successful" element={<PaymentSuccessful />} />
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

};

export default App;
