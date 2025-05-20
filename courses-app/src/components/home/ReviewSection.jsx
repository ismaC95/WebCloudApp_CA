import React, {useState} from 'react';
import { Box, Typography, Card, CardContent, Avatar, Stack, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import RatingStars from '../RatingStars';
import { useAppData } from '../../contexts/AppData';


// functional component
const ReviewSection =() => {
  const { courses, reviews } = useAppData();
  // Toggle between the first and the second page.
  // showNext is a boolean, and setShowNext is the function to toggle
  const [showNext, setShowNext] = useState(false);
  const currentReviews = showNext ? reviews.slice(5) : reviews.slice(0,5); // (0,5) is the first 5 
  
  // // filter the courses that have reviews <not needed>
  // const reviewedCourses = CoursesDatabase.filter(course => 

  //   // get course ids from reviewsData
  //   reviewsData.map(r => r.courseId).includes(course.id)
  // );


  // find matching reviews with course id
  const reviewsToRender = currentReviews.map(review => {
    const course = courses.find(c => c.id === review.courseId);
    return course ? { ...review, course } : null; //filter out null entries
  }).filter(Boolean);

  return (
    <Box // main container
      sx={{ 
        m: '3em', 
        mx: '10em',
        p: '3em',
        bgcolor: '#f5f5f5',
        borderRadius: 2,
        position: 'relative', // allowing arrows inside placed absolute position
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
            zIndex: 1, // stays above other elements when overlapped
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
        {reviewsToRender.map(({ course, name, comment }, idx) => (
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
                href={`/courses/${course.id}`} // for each course details course
                sx={{ textDecoration: 'none', color: 'inherit', '&:hover': {textDecoration: 'underline'} }}
              >
                {/* from coursesDatabase */}
                {course.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#8A58F5' }}>
                <RatingStars rating={course.rating} />
                <Typography variant="body2" sx={{ color: '#8A58F5' }}> 

                   {/* from coursesDatabase */}
                  ({course.no_reviews}) 
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" mt={1}>

                {/* from coursesDatabase */}
                "{comment}"
              </Typography>
              
              <Stack direction="row" spacing={1} alignItems="center" mt={2}>
                <Avatar sx={{ bgcolor: '#2674B2' }}>{name.charAt(0)}</Avatar>
                <Typography variant="body2">{name}</Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};


export default ReviewSection;
