import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';

import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  Grid
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
  const muiTheme  = useTheme();
  const showImage = useMediaQuery(muiTheme.breakpoints.up('xl'));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError]   = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
      const cred = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      );

      await updateProfile(cred.user, {
        displayName: `${formData.firstName.trim()} ${formData.lastName.trim()}`
      });

      setSuccess('Account created! You can now log in.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      setError(
        (err.code || err.message)
          .replace('auth/', '')
          .replace(/-/g, ' ')
          .replace(/\(.*?\)/, '')
          .trim()
      );
    }
  };

  return (
   <Grid
         container
         component="main"
         display="flex"
         justifyContent="center"
         alignItems="center"
         spacing={8}
         sx={{ py:5, mt:{xs:10, lg:5}, backgroundColor: '#F0F2F5'}}
       >
     
         {showImage && (
           <Grid
             size={{md:6}}
             sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
           >
             <Box sx={{ p: 4 }}>
               <Box
                 component="img"
                 src={signupIllustration}
                 alt="Sign up illustration"
                 sx={{ maxWidth: '500px', height: 'auto' }}
               />
             </Box>
           </Grid>
         )}

      <Grid
              size={{xs:12, md:6}}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', p: 4}}
            >
        <Paper
          elevation={8}
          sx={{
            width: '100%',
            maxWidth: 540,
            borderRadius: 4,
            bgcolor: '#FFFFFF',
            p: 4
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
              <SchoolIcon fontSize="large" />
            </Avatar>

            <Typography component="h1" variant="h2" color="primary" sx={{ mb: 1 }}>
              Sign Up
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
              Create Your Account
            </Typography>

            <Box component="form" noValidate sx={{ width: '100%', display: "flex", flexDirection:"column"}} onSubmit={handleSubmit}>
              <Grid container spacing={2} justifyContent="space-between">
                <Grid size={{xs: 12, sm: 6}} >
                  <TextField
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
                </Grid>
                <Grid size={{xs: 12, sm: 6}} >
                  <TextField
                    required
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={12} >
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{xs: 12, sm: 6}} >
                  <TextField
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
                </Grid>
                <Grid size={{xs: 12, sm: 6}} >
                  <TextField
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
                </Grid>
              </Grid>

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

              {/* removed Terms & Conditions checkbox */}

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3 }}>
                Sign Up
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{' '}
                <Link href="/login" variant="body2">
                  Log In
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
