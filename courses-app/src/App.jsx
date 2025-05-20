// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline, Box, Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Navbar       from './components/Navbar';
import UserNavbar   from './components/UserNavbar';
import RedirectIfAuth from './components/RedirectIfAuth';   

import Home               from './pages/Home';
import About              from './pages/About';
import CourseDisplay      from './pages/CourseDisplay';
import Checkout           from './pages/Checkout';
import PaymentSuccessful  from './pages/PaymentSuccessful';
import CourseList         from './pages/CourseList';
import CourseDetails      from './pages/courseDetails';
import Login              from './pages/login';
import Signup             from './pages/signup';
import ForgotPassword     from './pages/ForgotPassword';
import ShoppingCart       from './pages/ShoppingCart';
import Footer             from './components/Footer';

import { useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { AppDataProvider } from './contexts/AppData';


const App = () => {
  const { currentUser } = useAuth();          

  return (
    <>
      <CssBaseline />
      <AppDataProvider>
      <CartProvider>

      {currentUser ? <UserNavbar /> : <Navbar />}

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Box mt={10} component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/coursedisplay/:id" element={<CourseDisplay />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-successful" element={<PaymentSuccessful />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:courseId" element={<CourseDetails />} />

              {/* public routes – bounce away if already signed in */}
              <Route
                path="/login"
                element={
                  <RedirectIfAuth>
                    <Login />
                  </RedirectIfAuth>
                }
              />
              <Route
                path="/signup"
                element={
                  <RedirectIfAuth>
                    <Signup />
                  </RedirectIfAuth>
                }
              />

              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>

      <Footer />
      </CartProvider>
      </AppDataProvider>
    </>
  );
};

export default App;
