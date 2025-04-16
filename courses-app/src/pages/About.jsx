import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography>
        This page contains information about us.
      </Typography>
    </Container>
  );
};

export default About;
