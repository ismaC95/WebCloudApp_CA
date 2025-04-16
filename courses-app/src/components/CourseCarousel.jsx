import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const CourseCard = () => (
    <Card sx={{width: 200}}>
        <CardMedia
        component="div"
        sx={{height: 120, backgroundColor: '#eee'}} />
        <CardContent>
            <Typography align="center">Course Description</Typography>
        </CardContent>
    </Card>
);

const CourseCarousel = () => (
    <Box sx={{mt: 4, p:2, backgroundColor: '#f5f5f5', borderRadius:2}}>
        <Typography variant="h6" gutterBottom>Featured Courses</Typography>
    </Box>
);

export default CourseCarousel;