import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const reviews = new Array(5).fill({
  details: ['Review Details Line 1', 'Line 2', 'Line 3'],
  rating: 4,
  count: 1389,
  reviewer: 'Name of reviewer',
  courseLink: 'View xxx Course',
});

const ReviewSection = () => {
  return (
    <Box
      sx={{
        m: '3em',
        mt: '8em',
        mx: '10em',
        p: '3em',
        bgcolor: '#f5f5f5',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1.5em',
          p: '1em',
          px: '0',
        }}
      >
        {reviews.map((review, index) => (
          <Card key={index} sx={{ minWidth: '17em', flex: '0 0 auto' }}>
            <CardContent>
              <Typography fontWeight="bold">“Review Details</Typography>
              {review.details.map((line, idx) => (
                <Typography key={idx} variant="body2">
                  {line}
                </Typography>
              ))}
              <Typography variant="body2" color="text.secondary" mt={1}>
                … …
              </Typography>
              <Typography variant="body2" color="primary" mt={1}>
                ★★★★☆ ({review.count.toLocaleString()})
              </Typography>
              <Typography variant="body2" mt={1}>
                {review.reviewer}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: 'purple', fontWeight: 'bold' }}
              >
                {review.courseLink}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewSection;
