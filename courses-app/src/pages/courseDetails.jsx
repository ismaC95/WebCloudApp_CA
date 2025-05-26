import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';        
import RatingStars from '../components/RatingStars';
import CourseIntroCard from '../components/CourseIntroCard';
import CourseContentDetails from '../components/CourseContentDetails';
import ReviewSection from '../components/home/ReviewSection';        
import { useCart } from '../contexts/CartContext';
import { useAppData, AppDataContext } from '../contexts/AppData';
import { useEnrollment } from '../contexts/EnrollmentContext';
import { useAuth } from '../contexts/AuthContext';


const FilteredReviewSection = ({ courseId }) => {
  const data = useAppData();

  const filteredReviews = data.reviews.filter(
    (r) => Number(r.courseId) === Number(courseId)
  );

  return (
    <AppDataContext.Provider value={{ ...data, reviews: filteredReviews }}>
      <ReviewSection />
    </AppDataContext.Provider>
  );
};

const CourseDetails = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { courses } = useAppData();
  const { addEnrollment, enrollmentExists } = useEnrollment();
  const { currentUser } = useAuth();
  const { courseId } = useParams();
  // Add course to cart functionality
  const {addToCart} = useCart();
  const [open, setOpen] = useState(false); 
  const selectedCourseId = parseInt(courseId, 10);

  /* ─── 2.  Look up the course  ─── */
  const course = courses.find(c => c.id === selectedCourseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  //Enroll courses that are free directly
    
    
    const handleEnroll = (coursePrice) => {
        coursePrice === 0 ? setOpen(true) : addToCart(course)
    }

  return (
    
    <Box sx={{ boxSizing: 'border-box', mt:10}}>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Free Enrollment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This course is free. Do you want to enroll now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={async () => {
              const exists = await enrollmentExists(currentUser.uid, course.id);
                if (!exists) {
                  await addEnrollment(currentUser.uid, course.id);
              }
                setOpen(false);
            }}
            color="primary"
            variant="contained"
          >
            Confirm Enrollment
          </Button>
        </DialogActions>
      </Dialog>
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

          <Box sx={{ display: 'flex', gap: 5 }}>
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
              onClick={() => handleEnroll(course.price)}
            >
              Enroll Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ─ Intro Section ─ */}
      <CourseIntroCard courseId={selectedCourseId} />

      {/* ─ Learning Outcomes + Modules ─ */}
      <CourseContentDetails
        courseId={selectedCourseId}
        isSmDown={isSmDown}
        theme={theme}
      />

      {/* ─ Reviews ─ */}
      <Box sx={{ width: '100%', overflow: 'visible', pb: isSmDown ? 2 : 6 }}>
        <FilteredReviewSection courseId={selectedCourseId} />

        {/* Enroll button*/}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 6,            
          }}>
          <Button variant="type1" size="large" onClick={() => addToCart(course)}>
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
