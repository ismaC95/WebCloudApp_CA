// src/components/TestimonialCard.jsx
import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/PersonOutline';
import RatingStars from './RatingStars';

const TestimonialCard = ({ name, rating, comment }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minWidth: isXs ? '15em' : '18em',
        maxWidth: isXs ? '15em' : '18em',
        height: '100%',
        minHeight: '240px',
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        p: 2,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        scrollSnapAlign: 'start',
        bgcolor: '#ffffff',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: '#F5F5F5',
          borderRadius: '50%',
          mb: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PersonIcon sx={{ fontSize: '1.25rem', color: '#757575' }} />
      </Box>

      <Typography variant="subtitle1" fontWeight={700}>
        {name}
      </Typography>

      <Box sx={{ color: '#FFD700', my: 1 }}>
        <RatingStars rating={rating} />
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {comment}
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
