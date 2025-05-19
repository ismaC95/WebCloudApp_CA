// src/pages/forgotPassword.jsx
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';

import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import illustration from '../assets/images/bwink_edu_01_single_04.jpg';
import { Link as RouterLink } from 'react-router-dom';


import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';          


export default function ForgotPassword() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ForgotPasswordContent />
    </ThemeProvider>
  );
}

function ForgotPasswordContent() {
  const muiTheme   = useTheme();
  const showImage  = useMediaQuery(muiTheme.breakpoints.up('md'));

  
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setSubmitted(true);                    
    } catch (err) {
      
      let msg;
      switch (err.code) {
        case 'auth/user-not-found':
          msg = 'No account found with that e-mail';
          break;
        case 'auth/invalid-email':
          msg = 'Please enter a valid e-mail address';
          break;
        default:
          msg = 'Something went wrong – please try again later';
      }
      setError(msg);
    }
  };
  

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      sx={{ height: '70vh', backgroundColor: '#F0F2F5' }}
    >
      
      {showImage && (
        <Grid
          item md={6}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box sx={{ px: 4 }}>
            <Box
              component="img"
              src={illustration}
              alt="Illustration"
              sx={{ maxWidth: '500px', height: 'auto' }}
            />
          </Box>
        </Grid>
      )}

      
      <Grid
        item xs={12} md={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', p: 2 }}
      >
        <Paper
          elevation={8}
          square
          sx={{ width: '100%', maxWidth: 480, borderRadius: 4, bgcolor: '#FFFFFF', p: 4 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
              <LockOpenIcon fontSize="large" />
            </Avatar>

            <Typography component="h1" variant="h2" color="primary" sx={{ mb: 1 }}>
              Forgot&nbsp;Password
            </Typography>

            
            {submitted ? (
              <>
                <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
                  If an account is found, you will receive a link to reset your password.
                </Typography>
                <Link component={RouterLink} to="/login" variant="body2">
                  Return to Log&nbsp;In
                </Link>
              </>
            ) : (
              
              <>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                  Enter your e-mail to reset
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="forgot-email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {error && (
                    <Typography color="error" sx={{ mt: 1 }}>
                      {error}
                    </Typography>
                  )}

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Send Reset Link
                  </Button>

                  <Typography variant="body2" align="center">
                    Remembered?{' '}
                    <Link component={RouterLink} to="/login">
                      Log&nbsp;In
                    </Link>
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
