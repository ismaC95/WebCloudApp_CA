// src/pages/CourseDetails.jsx   (capital “C” keeps the filename consistent)
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useParams } from 'react-router-dom';        
import RatingStars from '../components/RatingStars';
import courses from '../data/CoursesDatabase';
import reviewsData from '../data/ReviewsDataBase';
import CourseIntroCard from '../components/CourseIntroCard';
import CourseContentDetails from '../components/CourseContentDetails';
import TestimonialCarousel from '../components/TestimonialCarousel';

const CourseDetails = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  /* ─── 1.  Get the ID from the URL  ─── */
  const { courseId } = useParams();                 
  const selectedCourseId = parseInt(courseId, 10);  

  /* ─── 2.  Look up the course  ─── */
  const course = courses.find(c => c.id === selectedCourseId);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      const filtered = reviewsData.filter(
        r => r.courseId === selectedCourseId
      );
      // randomise & take 8
      setReviews(filtered.sort(() => 0.5 - Math.random()).slice(0, 8));
    }, 500);

    return () => clearTimeout(timeout);
  }, [selectedCourseId]);                          

  if (!course) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" color="error">
          Course not found (ID: {selectedCourseId})
        </Typography>
      </Box>
    );
  }

  const { title, description, rating, no_reviews } = course;

  return (
    <Container sx={{ boxSizing: 'border-box', minWidth: '100vw', mt:10 }}>
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
              {no_reviews}
            </Typography>
          </Box>

          <Button
            variant="type1"
            color="secondary"
            size="large"
            sx={{ color: '#FFFFFF' }}
            href="#"
          >
            Enroll Now
          </Button>
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
        <TestimonialCarousel reviews={reviews} />

        {/* — Enroll Button — */}
        <Box className="d-flex justify-content-center mt-6">
          <Button variant="type1" size="large" href="#">
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CourseDetails;
