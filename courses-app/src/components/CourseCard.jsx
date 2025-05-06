import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import RatingStars from './RatingStars';

const CourseCard = ({ title, description, rating }) => {
  return (
    <Card sx={{ minWidth: 275, bgcolor: '#f5f5f5', borderRadius: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>

        <Box mt={1} mb={2}>
          <RatingStars rating={rating} />
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#5C3D90',
            '&:hover': { bgcolor: '#4a3075' },
            fontWeight: 'bold',
          }}
        >
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
