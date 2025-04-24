// src/pages/signup.jsx
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../theme';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';  // use the same icon as the login page
import signupIllustration from '../assets/images/bwink_edu_01_single_04.jpg'; // update to your image path

export default function Signup() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignupContent />
    </ThemeProvider>
  );
}

function SignupContent() {
  const muiTheme = useTheme();
  const showImage = useMediaQuery(muiTheme.breakpoints.up('md'));  // show illustration on md+

  return (
    <Grid 
      container
      component="main"
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      sx={{ height: '100vh', backgroundColor: '#F0F2F5' }}
    >
      {/* Left illustration panel */}
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
              src={signupIllustration}
              alt="Signup illustration"
              sx={{ maxWidth: '500px', height: 'auto' }} // change dimensions of this image
            />
          </Box>
        </Grid>
      )}

      {/* Right signup form panel */}
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
          id="signup-paper"
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }} id="avatar-icon">
              <SchoolIcon fontSize="large" />
            </Avatar>

            <Typography component="h1" variant="h2" color="primary" id="signup-title" sx={{ mb: 1 }}>
              Sign Up
            </Typography>

            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: 700 }}
              id="signup-subtitle"
            >
              Create Your Account
            </Typography>

            <Box
              component="form"
              id="signup-form"
              noValidate
              sx={{ width: '100%' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="given-name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last-name"
                label="Last Name"
                name="last-name"
                autoComplete="family-name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirm-password"
                name="confirm-password"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 3 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" id="terms-checkbox" />}
                  label="I agree to the Terms and Conditions"
                  id="terms-label"
                />
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="type1"
                size="large"
                sx={{ mb: 2 }}
                id="signup-button"
              >
                Sign Up
              </Button>

              <Typography variant="body2" align="center" id="login-prompt">
                Already have an account?{' '}
                <Link href="/login" variant="body2" id="login-link">
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
