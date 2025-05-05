import React, {useState} from 'react';
import { Box, Typography, Card, CardContent, Avatar, Stack, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import CoursesDatabase from '../../data/CoursesDatabase';
import RatingStars from '../RatingStars';

const reviewsData = [
  { courseId: 8, reviewer: 'Anna Muller', text: "This course exceeded my expectations. Clear explanations and practical examples!" },
  { courseId: 6, reviewer: 'James OConnor', text: "Engaging from start to finish. The instructor really knows their stuff." },
  { courseId: 10, reviewer: 'Fatima Beaty', text: "Perfect for beginners. Loved the pace and the visuals!" },
  { courseId: 22, reviewer: 'Lukas McCann', text: "Very detailed and helpful for my job in analytics." },
  { courseId: 30, reviewer: 'Isabelle Higgins', text: "Exactly what I needed to improve my skills quickly." },
  { courseId: 1, reviewer: 'Eleanor Hughes', text: "An insightful and concise course. Really helped me grasp the basics." },
  { courseId: 2, reviewer: 'Carl Lucas', text: "Loved the structure and hands-on examples. Highly recommend!" },
  { courseId: 9, reviewer: 'Sophia Lee', text: "Well-organized and informative. The quizzes were a nice touch." },
  { courseId: 14, reviewer: 'Terry Slattery', text: "Excellent pace and very beginner-friendly. Great visuals too." },
  { courseId: 18, reviewer: 'Linda OBrien', text: "I learned more in this short course than in weeks of self-study!" },
];

const ReviewSection =() => {
  const [showNext, setShowNext] = useState(false);
  const currentReviews = showNext ? reviewsData.slice(5) : reviewsData.slice(0,5);  
  
  const reviewedCourses = CoursesDatabase.filter(course => 
    reviewsData.map(r => r.courseId).includes(course.id)
  );

  const reviewsToRender = currentReviews.map(review => {
    const course = reviewedCourses.find(c => c.id === review.courseId);
    return { ...review, course };
  });

  return (
    <Box 
      sx={{ 
        m: '3em', 
        mx: '10em',
        p: '3em',
        bgcolor: '#f5f5f5',
        borderRadius: 2,
        position: 'relative',
        }}
    >
        <Typography variant="h6" gutterBottom>
          What our Learners Say
        </Typography>

        {/* Left Arrow */}
        {showNext && (
          <IconButton
          onClick={() => setShowNext(false)}
          sx={{
            position: 'absolute',
            top:'50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}

        {/* Right Arrow */}
        {!showNext && (
          <IconButton
          onClick={() => setShowNext(true)}
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


      {/* Review Cards */}
      <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '1.5em',
        p: '1em',
        pb: '2em',
        }}
      >
        {reviewsToRender.map(({ course, reviewer, text }, idx) => (
          <Card 
            key={idx} 
            sx={{ 
                width: '17em',
                minHeight: '18em',
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-bewteen',
              }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '0.8em'}}>
              <Typography 
                variant="h6" 
                fontWeight='bold' 
                component="a"
                href={`/courses/${course.id}`}
                sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {textDecoration: 'underline'} }}
              >
                {course.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#8A58F5' }}>
                <RatingStars rating={course.rating} />
                <Typography variant="body2" sx={{ color: '#8A58F5' }}>
                  ({course.reviews})
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" mt={1}>
                "{text}"
              </Typography>
              
              <Stack direction="row" spacing={1} alignItems="center" mt={2}>
                <Avatar sx={{ bgcolor: '#2674B2' }}>{reviewer.charAt(0)}</Avatar>
                <Typography variant="body2">{reviewer}</Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};


export default ReviewSection;
