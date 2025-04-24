// src/pages/login.jsx
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
import SchoolIcon from '@mui/icons-material/School';
import loginIllustration from '../assets/images/bwink_edu_01_single_04.jpg';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginContent />
    </ThemeProvider>
  );
}

function LoginContent() {
  const muiTheme = useTheme();
  const showImage = useMediaQuery(muiTheme.breakpoints.up('md')); // show illustration on md+

  return (
    <Grid 
      container
      component="main"
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      sx={{ height: '70vh', backgroundColor: '#F0F2F5' }}>
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
              src={loginIllustration}
              alt="Login illustration"
              sx={{ maxWidth: '500px', height: 'auto' }} // change dimensions of this image
            />
          </Box>
        </Grid>
      )}

      {/* Right login form panel */}
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
          id="login-paper">

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }} id="avatar-icon">
              <SchoolIcon fontSize="large" />
            </Avatar>
            <Typography component="h1" variant="h2" color="primary" id="login-title" sx={{ mb: 1 }}>
              Log In
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: 700 }}
              id="login-subtitle"
            >
              Welcome Back
            </Typography>

            <Box
              component="form"
              id="login-form"
              noValidate
              sx={{ width: '100%' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 3 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" id="remember-checkbox" />}
                  label="Remember me"
                  id="remember-label"
                />
                <Link component={RouterLink} to="/ForgotPassword" variant="body2" id="forgot-password-link">
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="type1"
                size="large"
                sx={{ mb: 2 }}
                id="login-button"
              >
                Log In
              </Button>

              <Typography variant="body2" align="center" id="signup-prompt">
                Don’t have an account?{' '}
                <Link component={RouterLink} to="/signup" variant="body2" id="signup-link">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
