// src/pages/forgotpassword.jsx
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

export default function ForgotPassword() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ForgotPasswordContent />
    </ThemeProvider>
  );
}

function ForgotPasswordContent() {
  const muiTheme = useTheme();
  const showImage = useMediaQuery(muiTheme.breakpoints.up('md'));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
          item
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          p: 2,
        }}
      >
        <Paper
          elevation={8}
          square
          sx={{
            width: '100%',
            maxWidth: 480,
            borderRadius: 4,
            bgcolor: '#FFFFFF',
            p: 4,
          }}
          id="forgot-paper"
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}
              id="forgot-avatar"
            >
              <LockOpenIcon fontSize="large" />
            </Avatar>

            <Typography component="h1" variant="h2" color="primary" id="forgot-title" sx={{ mb: 1 }}>
              Forgot Password
            </Typography>

            {!submitted ? (
              <>
                <Typography
                  variant="h5"
                  sx={{ mb: 3, fontWeight: 700 }}
                  id="forgot-subtitle"
                >
                  Enter your email to reset
                </Typography>

                <Box
                  component="form"
                  id="forgot-form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ width: '100%' }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="forgot-email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="type1"
                    size="large"
                    sx={{ mt: 2, mb: 2 }}
                    id="forgot-submit-button"
                  >
                    Send Reset Link
                  </Button>

                  <Typography variant="body2" align="center" id="forgot-login-prompt">
                    Remembered?{' '}
                    <Link component={RouterLink} to="/login" id="forgot-return-login">
                      Log In
                    </Link>
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  sx={{ mb: 3, textAlign: 'center' }}
                  id="forgot-confirmation"
                >
                  An email has been sent with instructions to reset your password.
                </Typography>
                <Link component={RouterLink} to="/login" variant="body2" id="forgot-back-to-login">
                  Return to Log In
                </Link>
              </>
            )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
