import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const courses = new Array(4).fill({title: 'Course Description'});

const CourseCarousel = () => {
    return (
        <Box 
        sx={{
            maxWidth: '80em',
            mx: 'auto',
            my: '3em',
            p: '2em',
            bgcolor: '#f5f5f5',
            borderRadius: 2,        
        }}>
            <Typography variant="h6" gutterBottom>
                Featured Courses
            </Typography>

            <Box sx={{
                display: 'flex', 
                overflowX: 'auto', 
                gap: '1.5em', 
                p: '1em',
                pb: '2em',
                // scrollbarWidth: 'none',
                // '&::-webkit-scrollbar': { display: 'none' },
                }}>
                {courses.map((courses, index) => (
                    <Card key={index} sx={{minWidth: '17em', flex: '0 0 auto'}}>
                        <Box height="9em" bgcolor="#e0e0e0" />
                        <CardContent>
                            <Typography fontWeight="bold">{courses.title}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Box mt={2} display="flex" justifyContent="center" gap="0.5em">
                {[0, 1, 2, 3].map((dot) => (
                    <Box
                    key={dot}
                    sx={{
                        width: '0.6em',
                        height: '0.6em',
                        bgcolor: dot === 0 ? 'black' : 'gray',
                        borderRadius: '50%',
                    }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default CourseCarousel;