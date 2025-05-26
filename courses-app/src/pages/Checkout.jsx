import {useState} from 'react';
import { Box, Typography, TextField, Button, Grid, Stack, Card, CardActionArea, Link, CardMedia } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import visaLogo from '../assets/images/visa.png';
import masterLogo from '../assets/images/master.png';
import applepayLogo from '../assets/images/applepay.png';
import amexLogo from '../assets/images/amex.png';

import { useCart } from '../contexts/CartContext';
import RatingStars from '../components/RatingStars';
import { usePricing } from '../contexts/PrincingContext';
import OrderSummary from '../components/shoppingCart/OrderSummary';
import { useAuth } from '../contexts/AuthContext';
import { useEnrollment } from '../contexts/EnrollmentContext';

const Checkout = () => {
    const { addedToCart, clearCart } = useCart();
    const { currentUser } = useAuth();
    const { addEnrollment, enrollmentExists } = useEnrollment();

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expireDate: '',
        cvv: ''
    });

    const {
        promoCode,
        promoCodeInput,
        promoError,
        setPromoCodeInput,
        applyPromoCode,
        subtotalPrice,
        subtotalDiscount,
        totalPrice,
        calculateTotalPrice,
        setPromoError
      } = usePricing();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const validate = () => {
        const newErrors = {};
        
        // Full name validation at least 2 words  
        if (!/^[A-Za-z]+ [A-Za-z]+( [A-Za-z]+)*$/.test(formData.name.trim())) {
            newErrors.name = "Please enter full name (first and last).";
        }

        // Card number validation: 16 digits
        if (!/^\d{16}$/.test(formData.cardNumber.trim())) {
            newErrors.cardNumber = "Card number must be exactly 16 digits.";
        }

        // Exp date validation: MM/YY format, needs to be future
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expireDate.trim())) {
            newErrors.expireDate = "Expire date must be in MM/YY format.";

        } else {
            
            // Check if expiry date is in the future
            
            const [month, year] = formData.expireDate.split('/');
            const now = new Date();
            const expDate = new Date(`20${year}`, month - 1);
            if (expDate < now) {
                newErrors.expireDate = "Card has expired.";
            }
        }

        // CVV validation: 3 digits
        if (!/^\d{3}$/.test(formData.cvv.trim())) {
            newErrors.cvv = "CVV must be 3 digits.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
        
    };

   const handleSubmit = async () => {
    if (validate()) {
        //Go through all courses in addedToCart
        for (const course of addedToCart) {
        const exists = await enrollmentExists(currentUser.uid, course.id);
        if (!exists) {
            await addEnrollment(currentUser.uid, course.id);
        }
        }
        clearCart();
        navigate("/payment-successful");
    }
    };

    


    return (
        <Grid container justifyContent={"space-between"}>
      
        {/* Checkout */}
            <Grid size={{xs:12, lg:7}}  sx={{padding:{xs: 2, lg: 3}, px:{lg:15}, display:"flex", }}>
                <Box width="100%">
                    <Typography variant="h2" sx={{mb:{xs: 2, lg: 4}}}> Checkout </Typography> 
                    <Typography variant="h6" gutterBottom>Payment Method</Typography>
                    <Box sx={{display: 'flex', gap: 2, mb: 3 }}>
                        <img src={visaLogo} alt="Visa Card logo" width="50" />
                        <img src={masterLogo} alt="Master Card logo" width="50" />
                        <img src={applepayLogo} alt="Apple Pay logo" width="50" />
                        <img src={amexLogo} alt="American Express logo" width="50" />
                    </Box>

                    <Typography variant="h6" gutterBottom>Payment Details</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3}}>
                        <TextField 
                            label="Enter Name on Card" 
                            name="name"
                            variant="standard" 
                            fullWidth 
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                        <TextField 
                            label="Card Number" 
                            name="cardNumber"
                            variant="standard" 
                            fullWidth 
                            value={formData.cardNumber}
                            onChange={handleChange}
                            error={!!errors.cardNumber}
                            helperText={errors.cardNumber}
                        />
                        
                        <Box sx={{display: 'flex', gap: 2}}>
                            <TextField 
                                label="Expire Date (MM/YY)" 
                                name="expireDate"
                                variant="standard" 
                                fullWidth
                                value={formData.expireDate}
                                onChange={handleChange}
                                error={!!errors.expireDate}
                                helperText={errors.expireDate} 
                            />
                            <TextField 
                                label="CVV" 
                                name="cvv"
                                variant="standard" 
                                fullWidth 
                                value={formData.cvv}
                                onChange={handleChange}
                                error={!!errors.cvv}
                                helperText={errors.cvv}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>Confirm Payment</Button>
                    </Box>

                    <Box sx={{ mt: 5 }}>
                        <Typography variant="body2" fontWeight="bold" gutterBottom>Terms & Conditions</Typography>
                        <Typography variant="caption" color="text.secondary">
                            Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and us [Academix Course].
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            {/* Review your cart */}
            <Grid size={{xs:12, lg:5}} sx={{ display: "flex", flexDirection:"column", justifyContent:"center",padding:{xs: 2, lg: 3}, px:{lg:5}}}>
                <Typography variant="h6" fontWeight="bold" mb={{xs:1, md:3}}>
                    Review your cart
                </Typography>
                {addedToCart.map((course) =>(
                    <Box key={course.id} mb={2}>
                        <Stack direction="row" flex={1} alignItems="center" gap={1} >
                            <Card 
                                component={RouterLink} 
                                to={`/courses/${course.id}`}
                                sx={{ textDecoration:"none", width:"100%"}}
                                >
                                <Box 
                                    padding={{xs:2, md: 1}}
                                    flex={1}
                                    fontSize={{xs: "small", lg:"medium"}}>
                                    <CardActionArea>
                                        <Stack gap={2} alignItems="center" flexDirection="row">
                                            {/* Image */}
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 'auto', width: 120, borderRadius: 1 }}
                                                image={course.image}
                                                title={course.title}
                                            />
                                            <Stack flexDirection="column" gap={{xs:1, lg:1.5}} flex={1}>
                                                {/* Title */}
                                                <Typography variant='body1' fontWeight="bold" >
                                                    {course.title}
                                                </Typography>
                                                <Stack gap={1} flexDirection="row" alignItems="center" justifyContent="space-between" pr={1}>
                                                    <Stack flexDirection="row" gap={1}>
                                                        <RatingStars rating={course.rating}/>
                                                        <Typography variant='body1' fontWeight="bold">
                                                            {course.rating}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography variant='body1' fontWeight="bold">
                                                    {course.priceDisplay}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </CardActionArea>
                                </Box>
                            </Card>
                        </Stack>
                    </Box>
                ))}
                
                {/* Order Summary with information from shopping cart */}
                <Box mt={{xs: 1, lg: 4}}>
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
                        onApplyPromoCode={applyPromoCode}
                        totalPrice={totalPrice}
                        calculateTotalPrice={calculateTotalPrice}
                        />
                </Box>
            </Grid>
    </Grid>
    );
};

export default Checkout;