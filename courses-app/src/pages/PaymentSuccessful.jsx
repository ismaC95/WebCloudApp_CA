import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessful = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ 
            mt: '8em', 
            textAlign: 'center', 
            p: 3,
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4 
        }}>
            <Typography variant="h4" gutterBottom sx={{color:'#38B48C', fontWeight:'bold'}}>Payment Successful!</Typography>
            <Typography variant="body1" sx={{m: '1em', color:'#2674B2', fontWeight:'bold'}}>
                Thank you for your purchase. <br />
                Your course will be available soon.
            </Typography>
            <Box sx={{display: 'flex', gap: 2}}>
                <Button 
                    variant="contained" 
                    sx={{bgcolor: '#5C3D90', '&:hover': { bgcolor: '#4a3075' }, fontWeight: 'bold' }}
                    onClick={() => navigate('/student-dashboard')}
                >
                    View Courses Dashboard
                </Button>
                <Button 
                variant="contained" 
                sx={{ bgcolor: '#5C3D90', '&:hover': { bgcolor: '#4a3075' }, fontWeight: 'bold' }}
                onClick={() => navigate('/')}
                >
                    Go to Home
                </Button>
            </Box>
            
        </Box>
    );
};

export default PaymentSuccessful;