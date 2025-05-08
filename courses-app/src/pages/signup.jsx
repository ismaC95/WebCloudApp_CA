// src/pages/Signup.jsx
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import signupIllustration from '../assets/images/bwink_edu_01_single_04.jpg';

export default function Signup() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignupContent />
    </ThemeProvider>
  );
}

function SignupContent() {
  const muiTheme   = useTheme();
  const showImage  = useMediaQuery(muiTheme.breakpoints.up('md'));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState('');

  /* ─────────────────────────────────────
     input change handler
  ───────────────────────────────────── */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ─────────────────────────────────────
     submit handler  →  sends to Node API
  ───────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match!');
    }
    if (formData.password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    try {
      const res = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName:  formData.lastName.trim(),
          email:     formData.email.trim(),
          password:  formData.password
        })
      });

      if (!res.ok) {
        const { msg } = await res.json();
        throw new Error(msg || 'Registration failed');
      }

      setSuccess('Account created! You can now log in.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };

  /* ─────────────────────────────────────
     UI  (unchanged except success/error)
  ───────────────────────────────────── */
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100vh',
        backgroundColor: '#F0F2F5'
      }}
    >
      {showImage && (
        <Box
          sx={{
            flexBasis: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 4
          }}
        >
          <Box
            component="img"
            src={signupIllustration}
            alt="Signup illustration"
            sx={{ maxWidth: '500px', height: 'auto', width: '100%' }}
          />
        </Box>
      )}

      <Box
        sx={{
          flexGrow: 1,
          flexBasis: { xs: '100%', md: '50%' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: '100%',
            maxWidth: 480,
            borderRadius: 4,
            bgcolor: '#FFFFFF',
            p: 4
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
              <SchoolIcon fontSize="large" />
            </Avatar>

            <Typography component="h1" variant="h2" color="primary" sx={{ mb: 1 }}>
              Sign Up
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
              Create Your Account
            </Typography>

            <Box component="form" noValidate sx={{ width: '100%' }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="first-name"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last-name"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirm-password"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}
              {success && (
                <Typography color="primary" sx={{ mt: 2 }}>
                  {success}
                </Typography>
              )}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 2,
                  mb: 3
                }}
              >
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="I agree to the Terms and Conditions"
                />
              </Box>

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mb: 2 }}>
                Sign Up
              </Button>

              <Typography variant="body2" align="center">
                Already have an account?{' '}
                <Link href="/login" variant="body2">
                  Log In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
