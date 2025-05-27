import React, {useState} from 'react';
import { Box, Typography, Card, CardContent, Avatar, Stack, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import RatingStars from '../RatingStars';
import { useAppData } from '../../contexts/AppData';


const ReviewSection =() => {
  const { courses, reviews } = useAppData();

  // Toggle between the first and the second page. (pagination control)
  const [page, setPage] = useState(0);

  const REVIEWS_PER_PAGE = 5;

  const currentReviews = reviews.slice(
    page * REVIEWS_PER_PAGE,
    (page + 1) * REVIEWS_PER_PAGE
  );

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);


  // find matching reviews with course id
  const reviewsToRender = currentReviews.map(review => {
    const course = courses.find(c => c.id === review.courseId);
    return course ? { ...review, course } : null; //filter out null if course not found
  }).filter(Boolean); // remove null

  return (
    
    // Main container
    <Box 
      sx={{ 
        mt: 6,
        px: { xs: 2, sm: 3, md: 3 },
        py: 5,
        bgcolor: '#F0F2F5',
        borderRadius: 2,
        position: 'relative', // allowing arrows inside placed absolute position
        }}
    >
        <Typography variant="h6" gutterBottom>
          What our Learners Say
        </Typography>

        {/* Left Arrow */}
        {page > 0 && (
          <IconButton
          onClick={() => setPage((prev) => prev - 1)}
          sx={{
            position: 'absolute',
            top:'50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 1, // stays above other elements when overlapped
          }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}

        {/* Right Arrow */}
        {page < totalPages - 1 && (
          <IconButton
          onClick={() => setPage((prev) => prev + 1)}
          sx={{
            position: 'absolute',
            top:'50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}


      {/* Review Cards scrollable */}
      <Box
      sx={{
        display: 'flex',
        overflowX: 'auto', // horizontal scroll if needed
        gap: '1.5em',
        p: '1em',
        pb: '2em',
        justifyContent:"space-between" // between cards
        }}
      >

        {/* Render each review */}
        {reviewsToRender.map(({ course, name, comment }, idx) => (
          <Card 
            key={idx} // static rendering
            sx={{ 
                width: { xs: '90vw', 
                  sm: '45vw', 
                  md: '17em',
                },
                minHeight: {
                  xs: '14em',
                  sm: '16em',
                  md: '18em',
                },
                flex: '0 0 auto', // fix size
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-bewteen',
              }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '0.8em'}}>

              {/* Course title */}
              <Typography 
                variant="h6" 
                fontWeight='bold' 
                component= {Link}
                to={`/courses/${course.id}`} // for each course details course
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
                {/* From courses */}
                {course.title}
              </Typography>

                 {/* Ratings */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#8A58F5' }}>
                <RatingStars rating={course.rating} />
                <Typography 
                variant="body2" 
                sx={{ 
                  color: '#8A58F5', 
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.85rem',
                    md: '0.9rem',
                  },
                  }}> 

                   {/* from courses */}
                  ({course.no_reviews}) 
                </Typography>
              </Box>

              {/* Review comment */}
              <Typography 
              variant="body2" 
              color="text.secondary" 
              mt={1}
              sx={{
                fontSize: {
                  xs: '0.8rem',
                  sm: '0.9rem',
                  md: '1rem',
                },
              }}
              >
                {/* from reviews */}
                "{comment}"
              </Typography>
              
              {/* Avatar & name for reviewer */}
              <Stack direction="row" spacing={1} alignItems="center" mt={2}>
                <Avatar sx={{ bgcolor: '#2674B2' }}>{name.charAt(0)}</Avatar>
                <Typography 
                variant="body2"
                sx={{
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.85rem',
                    md: '0.9rem',
                  },
                }}
                >
                  {name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};


export default ReviewSection;
