import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import CoursesDatabase from '../../data/CoursesDatabase';
import RatingStars from '../../components/RatingStars';

const CourseCarousel = ({ selectedCategory }) => {
    const featuredCourses = CoursesDatabase.filter(
        (course) => course.category === selectedCategory
    );

    return (
        <Box 
        sx={{
            m: '3em',
            mx: '10em',
            p: '3em',
            bgcolor: '#f5f5f5',
            borderRadius: 2,        
            }}
        >
            <Typography variant="h6" gutterBottom>
                {selectedCategory} Courses
            </Typography>

            <Box 
            sx={{
                display: 'flex', 
                overflowX: 'auto', 
                gap: '1.5em', 
                p: '1em',
                pb: '2em',
                }}
            >

                {featuredCourses.map((course) => (
                    <Card 
                    key={course.id} 
                    sx={{
                        width: '25em', 
                        flex: '0 0 auto',
                        flexDirection: 'colum',
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
                            <Typography fontWeight="bold" gutterBottom noWrap>
                                {course.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 3, // limit to 3 lines
                                WebkitBoxOrient: 'vertical',

                            }}
                            >
                                {course.description}
                            </Typography>

                            <Typography variant="body1" fontWeight="bold" mt={1} color='#2674B2'>
                                {course.price == 'Free' ? 'Free' : `€${course.price}`} &nbsp;
                                {course.originalPrice && (
                                    <span style={{ textDecoration: 'line-through', color: 'gray'}}>
                                        {course.originalPrice}
                                    </span>
                                )}
                            </Typography>

                            <RatingStars rating={course.rating} />
                            <Typography variant="caption">
                            ({course.reviews} reviews)
                            </Typography>                            
                            
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default CourseCarousel;