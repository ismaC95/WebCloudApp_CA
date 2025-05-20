// src/pages/CourseDetails.jsx   (capital “C” keeps the filename consistent)
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';        
import RatingStars from '../components/RatingStars';
import CourseIntroCard from '../components/CourseIntroCard';
import CourseContentDetails from '../components/CourseContentDetails';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useCart } from '../contexts/CartContext';
import { useAppData } from '../contexts/AppData';


const CourseDetails = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { courses, reviews } = useAppData();

  /* ─── 1.  Get the ID from the URL  ─── */
  const { courseId } = useParams();                 
  const selectedCourseId = parseInt(courseId, 10);  

  /* ─── 2.  Look up the course  ─── */
  const course = courses.find(c => c.id === selectedCourseId);

  // Add course to cart functionality
  const {addToCart} = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredReviews = reviews
  .filter(r => parseInt(r.courseId) === selectedCourseId)
  .sort(() => 0.5 - Math.random())
  .slice(0, 8);                         

  if (!course) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" color="error">
          Course not found (ID: {selectedCourseId})
        </Typography>
      </Box>
    );
  }

  const { title, description, rating, no_reviews, originalPriceDisplay, priceDisplay } = course;

  

  return (
    <Box sx={{ boxSizing: 'border-box', mt:10}}>
      {/* — Hero Section — */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#FFFFFF',
          py: isSmDown ? 2 : 4,
          boxSizing: 'border-box',
        }}
      >
        <Container className="d-flex flex-column align-items-center text-center">
          <Typography variant="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {description}
          </Typography>

          <Box className="d-flex align-items-center mb-4">
            <Box sx={{ color: '#FFD700' }}>
              <RatingStars rating={rating} />
            </Box>
            <Typography variant="body1" sx={{ ml: 1, fontWeight: 900 }}>
              {rating}
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              ({no_reviews} Reviews)
            </Typography>
          </Box>
          <Box sx={{display: "flex", gap: 5}}>
            <Stack alignItems="flex-end" justifyContent="center">
              <Typography variant="h6" fontWeight="bold" noWrap>
                {priceDisplay}
              </Typography>
              <Typography
                variant="body1"
                color="red"
                fontWeight="bold"
                sx={{ textDecoration: 'line-through' }}
              >
                {originalPriceDisplay}
              </Typography>
            </Stack>
            <Button
              variant="type1"
              color="secondary"
              size="large"
              sx={{ color: '#FFFFFF' }}
              onClick={() => addToCart(course)}
            >
              Enroll Now
            </Button>
          </Box>
          
        </Container>
      </Box>

      {/* — Intro Section — */}
      <CourseIntroCard courseId={course.id} />

      {/* — Learning Outcomes + Modules — */}
      <CourseContentDetails
        courseId={course.id}
        isSmDown={isSmDown}
        theme={theme}
      />

      {/* — Testimonials — */}
      <Box sx={{ width: '100%', overflow: 'visible', pb: isSmDown ? 2 : 6 }}>
        <TestimonialCarousel reviews={filteredReviews} />

        {/* — Enroll Button — */}
        <Box className="d-flex justify-content-center mt-6">
          <Button variant="type1" size="large" onClick={() => addToCart(course)}>
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
