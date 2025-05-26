import React, {useState} from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useAppData } from '../../contexts/AppData';

const offerCourseIds = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];

const SpecialOffers = () => {
  const { courses } = useAppData();
  const [showNext, setShowNext] = useState(false);

  // filter the courses only include discounted ones
  const offers = courses.filter(course => offerCourseIds.includes(course.id));
  const currentOffers = showNext ? offers.slice(5) : offers.slice(0, 5);

  return (
    <Box // outer container
    sx={{
      mt: 6,
      px: { xs: 2, sm: 3, md: 3 },
      py: 5,
      bgcolor: '#f5f5f5',
      borderRadius: 2,
      position: 'relative',
    }}
    >
      <Typography variant="h6" gutterBottom>
        Special Offers
      </Typography>

      {/* Left Arrow  */}
      {showNext && (
        <IconButton
        onClick={() => setShowNext(false)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0, // position to the left
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}

      {/* Right Arrow  */}
      {!showNext && (
        <IconButton
        onClick={() => setShowNext(true)}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        >
          <ChevronRightIcon />
        </IconButton>
      )}


      {/* offer cards */}
      <Box 
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1.5em',
        p: '1em',
      }}
      >
        {currentOffers.map((offer) => (
          <Card 
          key={offer.id} 
          sx={{ 
            width: { xs: '80vw', sm: '17em' },
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
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                '&:hover': {textDecoration: 'underline'},
                fontSize: {
                    xs: '0.95rem',
                    sm: '1.05rem',
                    md: '1.15rem',
                },              
              }}
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
                mt={1}
                sx={{
                  fontSize: {
                    xs: '0.8rem',
                    sm: '0.9rem',
                    md: '1rem',
                  },
                }}
                >
                  {offer.priceDisplay}
                </Typography>

                {offer.originalPriceDisplay && (
                <Typography
                variant="body2"
                color="text.secondary"
                display="inline"
                sx={{ textDecoration: 'line-through', ml: 1 }}
                >
                  {offer.originalPriceDisplay}
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
