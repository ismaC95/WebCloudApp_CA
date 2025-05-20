import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, CssBaseline, Box, Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';  // <--- No Router import here

//Julie
import Navbar from './components/Navbar';
import UserNavbar from './components/UserNavbar';
import Home from './pages/Home';
import About from './pages/About';
import CourseDisplay from './pages/CourseDisplay';
import PaymentSuccessful from './pages/PaymentSuccessful';
import Footer from './components/Footer';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/courseDetails';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

import theme from './theme';
import { CartProvider } from './contexts/CartContext';
import { AppDataProvider } from './contexts/AppData';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppDataProvider>
        <CartProvider>
          <CssBaseline />
          <Navbar />
          {/* <UserNavbar /> */}
            <Grid container justifyContent={"center"} >
              <Grid size={{xs: 12, sm: 8}}>
                <Box mt={10} component="main" sx={{ flex: 1 }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/coursedisplay/:id" element={<CourseDisplay />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/payment-successful" element={<PaymentSuccessful />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="courses/:courseId" element={<CourseDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                  </Routes>
                </Box>
              </Grid>
            </Grid>
            <Footer />
        </CartProvider>
      </AppDataProvider>
    </ThemeProvider>
  );

};

export default App;
