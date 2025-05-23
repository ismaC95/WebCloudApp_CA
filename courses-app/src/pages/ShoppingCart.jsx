import { useState } from "react";
import { Divider, Grid, Typography, Box, Stack, IconButton, TextField, Button } from "@mui/material"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';

import { useCart } from "../contexts/CartContext"
import CourseCard from "../components/courseList/CourseCard";
import { useAppData } from "../contexts/AppData";
import { Link } from "react-router-dom";
import OrderSummary from "../components/shoppingCart/OrderSummary";

const ShoppingCart = () => {
  const {addedToCart, removeFromCart} = useCart();

  const {promoCodes} = useAppData();
  //PromoCode functionality
  const [promoCode, setPromoCode] = useState([]);

  //promo code input
  const [promoCodeInput, setPromoCodeInput] = useState('');

  //Input promoCode doesn't exist
  const [promoError, setPromoError] = useState(false);

  
  const handlePromoCodeInput = () => {
    const matchedPromoCode = promoCodes.find(promo => promo.code.trim().toLowerCase() === promoCodeInput.toLowerCase());

    if (matchedPromoCode){
      setPromoCode([matchedPromoCode]);
      setPromoError(false);
    } else{
      setPromoCode([]);
      setPromoError(true);
    }
  }

  const promoCodeFlag = (promoCode.length > 0) ? true : false;

  const totalPriceCart = addedToCart.reduce((sum, course) => sum + course.price, 0);

  const calculateTotalPrice = (totalPrice) => {
      let finalPrice = totalPrice;

      return promoCodeFlag ? (finalPrice = discountPromoCode(totalPrice)): finalPrice;
  }
  
  const discountPromoCode = (totalPrice)=> {
    let discountedPrice = totalPrice;
    const code = promoCode[0];

    if (code.discountType === "fixed"){
      discountedPrice = totalPrice - code.discountValue;
    }else{
      discountedPrice = totalPrice * (1 - code.discountValue / 100);
    }

    return discountedPrice;
  }
      
  const subtotalPrice = addedToCart.reduce((sum, course) => sum + course.originalPrice, 0);
  const subtotalDiscount = addedToCart.reduce((sum, course) => sum + (course.originalPrice - course.price), 0);

  return (
    <Box>
      {/* Behavior of the page whenever there are courses in the shopping cart or not */}
      {addedToCart.length > 0 ? (
      <Grid container justifyContent={"space-between"}>
      
       {/* Shopping Cart */}
      <Grid item xs={12} lg={8}  sx={{padding:{xs: 2, lg: 3}, display:"flex", flexDirection:"column"}}>
          <Typography variant="h2" sx={{mb:{xs: 2, lg: 4}}}> Shopping Cart </Typography>
          <Typography variant="body1" fontWeight="bold">{addedToCart.length > 1 ? `${addedToCart.length} Courses in Cart` : `${addedToCart.length} Course in Cart`}</Typography>
          <Divider sx={{border: "1px solid black", my: 0.5}}/>
          {addedToCart.map((course) => (
            //Displaying ourses in Shopping Cart
              <Box key={course.id} mb={2}>
                  <Stack direction="row" flex={1} alignItems="center" gap={1}>
                    <Box sx={{flexGrow: 1}}>
                      <CourseCard  course={course} />
                    </Box>
                    <Box padding={3}>
                      <IconButton onClick={() => removeFromCart(course.id)}>
                        <DeleteRoundedIcon sx={{ color: red[500]}} />
                      </IconButton>
                    </Box>
                  </Stack>
                      <Divider  sx={{border: "1px solid black", my: 0.5}} />
                  </Box>
              ))}
      </Grid>

      {/* ORDER SUMMARY */}
      <Grid size={{xs:12, lg:4}}>
        <OrderSummary
          subtotalPrice={subtotalPrice}
          subtotalDiscount={subtotalDiscount}
          promoCode={promoCode}
          promoCodeInput={promoCodeInput}
          promoError={promoError}
          onPromoCodeChange={(e) => {
            setPromoCodeInput(e.target.value);
            if (promoError) setPromoError(false);
          }}
          onApplyPromoCode={handlePromoCodeInput}
          totalPrice={totalPriceCart}
          calculateTotalPrice={calculateTotalPrice}
        />
        {/* CHECKOUT BUTTON */}
        <Box sx={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Button component={Link} to="/checkout" variant="outlined" size="large">
                Proceed to Checkout
          </Button>
        </Box>
      </Grid>
    </Grid>
    ):(
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        textAlign="center"
        sx={{ padding: 3 }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>Shopping Cart</Typography>
        <Typography variant="body1" fontWeight="bold" sx={{ mb: 4 }}>
          No Courses in Cart
        </Typography>

        <Button
          component={Link}
          to="/courses"
          variant="contained"
          size="large"
        >
          Keep Shopping
        </Button>
      </Box>
    )}
    
    </Box>
  )
}

export default ShoppingCart