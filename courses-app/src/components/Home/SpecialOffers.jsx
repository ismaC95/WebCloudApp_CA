import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import CoursesDatabase from '../../data/CoursesDatabase';

const offerCourseIds = [1, 2, 3, 4, 5];
const offers = CoursesDatabase.filter(course => offerCourseIds.includes(course.id));

const SpecialOffers = () => {
  return (
    <Box
    sx={{
      m: '3em',
      mx: '10em',
      mb: '10em',
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
        {offers.map((offer) => (
          <Card 
          key={offer.id} 
          sx={{ 
            width: '17em',
            minHeight: '14em',
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '1.5em'}}>
              <Typography
              variant="h6"
              fontWeight="bold"
              component="a"
              href={`/courses/${offer.id}`}
              sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {textDecoration: 'underline'} }}
              >
                {offer.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" mt={1}>
                {offer.description}
              </Typography>

              <Box>
                <Typography
                variant="h6"
                color="error"
                display="inline"
                >
                  €{offer.price}
                </Typography>

                {offer.originalPrice && (
                <Typography
                variant="body2"
                color="text.secondary"
                display="inline"
                sx={{ textDecoration: 'line-through', ml: 1 }}
                >
                  €{offer.originalPrice}
                </Typography>
              )}
              </Box>   
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SpecialOffers;
