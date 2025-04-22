import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: '6em',
        py: '2em',
        px: '2em',
        bgcolor: '#f5f5f5',
        textAlign: 'center',
        borderTop: '1px solid #ddd',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} MyCourseApp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
