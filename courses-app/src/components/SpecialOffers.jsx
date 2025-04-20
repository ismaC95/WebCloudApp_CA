import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const offers = new Array(5).fill({
  name: 'Course Name',
  desc: ['Short description line 1', 'Line 2'],
  price: 25.99,
  oldPrice: 39.99,
});

const SpecialOffers = () => {
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
        Special Offers
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
        {offers.map((offer, index) => (
          <Card key={index} sx={{ minWidth: '17em', flex: '0 0 auto' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {offer.name}
              </Typography>
              {offer.desc.map((line, idx) => (
                <Typography key={idx} variant="body2">
                  {line}
                </Typography>
              ))}
              <Typography variant="body2" color="text.secondary" mt={1}>
                … …
              </Typography>
              <Typography variant="h6" color="error" mt={1} display="inline">
                €{offer.price.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                display="inline"
                sx={{ textDecoration: 'line-through', ml: 1 }}
              >
                €{offer.oldPrice.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SpecialOffers;
