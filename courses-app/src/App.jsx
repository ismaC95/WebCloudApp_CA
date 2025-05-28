import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { CssBaseline, Box, Grid } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';

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
import StudentDashboard   from './pages/StudentDashboard';
import Login              from './pages/login';
import Signup             from './pages/signup';
import ForgotPassword     from './pages/forgotPassword';
import ShoppingCart       from './pages/ShoppingCart';
import Footer             from './components/Footer';

import { useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { AppDataProvider } from './contexts/AppData';
import { PrincingProvider } from './contexts/PrincingContext';
import { EnrollmentProvider } from './contexts/EnrollmentContext';
import { SearchProvider } from './contexts/SearchContext';


const App = () => {
  const { currentUser } = useAuth();            

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CssBaseline />
      <AppDataProvider>
      <CartProvider>
      <PrincingProvider>
      <EnrollmentProvider>
      <SearchProvider>

      {/* Keep the footer in the bottom of the screen */}
      <Box display="flex" flexDirection="column" minHeight="100vh">

        {/* Navbar */}
        {currentUser ? <UserNavbar /> : <Navbar />}

        {/* Main content */}
        <Box  component="main" sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid size={{xs:12, md: 8}} offset={{md:2}} px={{xs: 2, md: 0}}>
              <Box mt={10}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/coursedisplay/:id" element={<CourseDisplay />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/payment-successful" element={<PaymentSuccessful />} />
                  <Route path="/courses" element={<CourseList />} />
                  <Route path="/courses/:courseId" element={<CourseDetails />} />
                  <Route path="/student-dashboard" element={<StudentDashboard />} />

                  {/* public routes – bounce away if already signed in */}
                  <Route path="/login"
                    element={
                      <RedirectIfAuth>
                        <Login />
                      </RedirectIfAuth>
                    }
                  />
                  <Route path="/signup"
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
        </Box>
        <Footer />
      </Box>
      </SearchProvider>
      </EnrollmentProvider>
      </PrincingProvider>
      </CartProvider>
      </AppDataProvider>
    </>

  );
};

export default App;
