// src/components/home/CourseCarousel.jsx
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';                // → NEW
import RatingStars from '../../components/RatingStars';

import { useAppData } from '../../contexts/AppData';


const CourseCarousel = ({ selectedCategory }) => {
  const { courses } = useAppData();
  const featuredCourses = courses.filter(
    course => course.category === selectedCategory
  );

  return (
    <Box
      sx={{
        mt: {xs:2, lg: 3},
        px: { xs: 2, sm: 3, md: 3 },
        py: 5,
        bgcolor: '#F0F2F5',
        borderRadius: 2,
      }}
    >
      {/* Dynamic heading for selected cat */}
      <Typography variant="h6" gutterBottom>
        {selectedCategory} Courses
      </Typography>

      {/* Horizontal scroll for cards */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1.5em',
          p: '1em',
          pb: '2em',
          justifyContent:"space-between"
        }}
      >
        {featuredCourses.map(course => (
          <Card
            key={course.id}
            component={Link}      // Entire care is clickable                   
            to={`/courses/${course.id}`}             
            sx={{
              width: { xs: '80vw', sm: '20em', md: '25em' },
              flex: '0 0 auto',
              textDecoration: 'none',               
              color: 'inherit',
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={course.image}
              alt={course.title}
            />

            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8em',
              }}
            >
              <Typography 
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: '0.95rem',  
                  sm: '1.05rem',  
                  md: '1.25rem',   
                }
              }}
              >
                {course.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: '0.8rem',
                    sm: '0.9rem',
                    md: '1rem',
                  },
                  overflow: 'hidden',
                }}
              >
                {course.description}
              </Typography>

              <Typography
                gutterBottom
                fontWeight="bold"
                mt={1}
                sx={{
                  fontSize: {
                    xs: '0.95rem',
                    sm: '1.05rem', 
                    md: '1.25rem', 
                    color: "#2674B2"
                  }
                }}
              >
                {course.priceDisplay}&nbsp;
                {course.originalPrice && (
                  <span
                    style={{
                      textDecoration: 'line-through',
                      color: 'gray',
                      fontSize: '0.7em',
                    }}
                  >
                    {course.originalPriceDisplay}
                  </span>
                )}
              </Typography>

              <RatingStars rating={course.rating} />

              <Typography 
              variant="caption">
                (
                {/* Use whichever field is present - Nullish*/}
                {course.reviews ?? course.no_reviews} reviews)
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CourseCarousel;
