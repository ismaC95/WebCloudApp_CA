import React from 'react';
import { Box, Typography, TextField, Button, Divider, Paper, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            mt: '6em',
            mb: '4em',
            display: 'flex',
            justifyContent: 'center',
            px: '2em'
        }}>
            <Box sx={{ flex: 1, maxWidth: '50em'}}>
                <Typography variant="h6" gutterBottom>Payment Method</Typography>
                <Box sx={{display: 'flex', gap: 2, mb: 3 }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width="50" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" width="50" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" width="50" />
                </Box>

                <Typography variant="h6" gutterBottom>Payment Details</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3}}>
                    <TextField label="Enter Name on Card" variant="standard" fullWidth />
                    <TextField
                    label="Card Number"
                    variant="standard"
                    fullWidth
                    />

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
                        <Button variant="contained" color="primary">Confirm Payment</Button>
                    </Box>

                    <Box sx={{ mt: 5 }}>
                    <Typography variant="body2" fontWeight="bold" gutterBottom>Terms & Conditions</Typography>
                    <Typography variant="caption" color="text.secondary">
                        Please read the following terms and conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and us [Logo].
                    </Typography>
                </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;