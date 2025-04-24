// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="grey" sx={{ bgcolor: '#666666' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        NAVBAR
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
