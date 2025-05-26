import {useState} from 'react';
import { Box, Typography, TextField, Button, Divider, Paper, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import visaLogo from '../assets/images/visa.png';
import masterLogo from '../assets/images/master.png';
import applepayLogo from '../assets/images/applepay.png';
import amexLogo from '../assets/images/amex.png';

const Checkout = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expireDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        // spread existing form data and update the changed field.
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const validate = () => {
        // temporary storage object for errors
        const newErrors = {};
        
        // Full name validation at least 2 words  
        if (!/^[A-Za-z]+ [A-Za-z]+( [A-Za-z]+)*$/.test(formData.name.trim())) {
            newErrors.name = "Please enter full name (first and last).";
        }

        // Card number validation: 16 digits
        if (!/^\d{16}$/.test(formData.cardNumber.trim())) {
            newErrors.cardNumber = "Card number must be exactly 16 digits.";
        }

        // Exp date validation: MM/YY format
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

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
        
    };

    const handleSubmit = () => {
        if (validate()) {
            navigate("/payment-successful");
        }
    };

    return (
        <Box sx={{
            mt: '6em',
            mb: '4em',
            display: 'flex',
            justifyContent: 'center',
            px: '2em'
            }}>

            {/* Inner box to control width */}
            <Box sx={{ flex: 1, maxWidth: '50em'}}>
                <Typography variant="h6" gutterBottom>Payment Method</Typography>
                
                {/* Payments methods */}
                <Box sx={{display: 'flex', gap: 2, mb: 3 }}>
                    <img src={visaLogo} alt="Visa Card logo" width="50" />
                    <img src={masterLogo} alt="Master Card logo" width="50" />
                    <img src={applepayLogo} alt="Apple Pay logo" width="50" />
                    <img src={amexLogo} alt="American Express logo" width="50" />
                </Box>

                <Typography variant="h6" gutterBottom>Payment Details</Typography>

                {/* Payments form */}
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
                    
                    {/* horizontal row for both */}
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

                {/* buttons */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Confirm Payment</Button>
                </Box>

                {/* T&S */}
                <Box sx={{ mt: 5 }}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>Terms & Conditions</Typography>
                    <Typography variant="caption" color="text.secondary">
                        Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and us [Academix Course].
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;