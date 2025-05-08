// src/pages/login.jsx
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
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import loginIllustration from '../assets/images/bwink_edu_01_single_04.jpg';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginContent />
    </ThemeProvider>
  );
}

function LoginContent() {
  const muiTheme  = useTheme();
  const showImage = useMediaQuery(muiTheme.breakpoints.up('md'));
  const navigate  = useNavigate();          // optional – redirect after login

  // form state
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');

  // feedback state
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState('');

  /* ─── submit ───────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });

      if (!res.ok) {
        const { msg } = await res.json();
        throw new Error(msg || 'Login failed');
      }

      // if you need user data, grab it here
      const { user } = await res.json();
      setSuccess(`Welcome back, ${user.firstName}!`);

      // redirect after a short pause 
      setTimeout(() => navigate('/dashboard'), 800);

    } catch (err) {
      setError(err.message);
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
      sx={{ height: '70vh', backgroundColor: '#F0F2F5' }}
    >
      {/* illustration */}
      {showImage && (
        <Grid
          item md={6}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Box sx={{ px: 4 }}>
            <Box
              component="img"
              src={loginIllustration}
              alt="Login illustration"
              sx={{ maxWidth: '500px', height: 'auto' }}
            />
          </Box>
        </Grid>
      )}

      {/* form */}
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
              <SchoolIcon fontSize="large" />
            </Avatar>

            <Typography component="h1" variant="h2" color="primary" sx={{ mb: 1 }}>
              Log In
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
              Welcome Back
            </Typography>

            <Box component="form" noValidate sx={{ width: '100%' }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 3 }}
              >
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
                <Link component={RouterLink} to="/ForgotPassword" variant="body2">
                  Forgot Password?
                </Link>
              </Box>

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mb: 2 }}>
                Log In
              </Button>

              <Typography variant="body2" align="center">
                Don’t have an account?{' '}
                <Link component={RouterLink} to="/signup" variant="body2">
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
