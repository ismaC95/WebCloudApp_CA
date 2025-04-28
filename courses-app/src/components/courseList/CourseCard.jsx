import React from 'react'
import { Card, CardActionArea, Box, CardMedia, Stack, Typography } from '@mui/material'

import RatingStars from '../RatingStars';


const CourseCard = ({course}) => {
  return (
    <Card sx={{marginBottom: 2}}>
      <CardActionArea>
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={2}
          alignItems="center"
        >
          {/* Image */}
          <CardMedia
            component="img"
            sx={{ height: 'auto', width: 200 }}
            image={course.image}
            title={course.title}
          />

          {/* Content */}
          <Stack
            direction="column"
            spacing={1}
            justifyContent="space-between"
            sx={{ 
              flex: 1,
              paddingRight: 1,
              paddingBottom: 1,
              paddingTop: 1 }}
          >
            {/* Title + Price row */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              width="100%"
              spacing={1}
            >
              {/* Title & Subheader */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {course.description}
                </Typography>
              </Box>

              {/* Pricing */}
              <Stack alignItems="flex-end">
                <Typography fontWeight="bold">{course.price}</Typography>
                <Typography
                  fontSize="0.9rem"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through' }}
                >
                  {course.originalPrice}
                </Typography>
              </Stack>
            </Stack>

            {/* Rating */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mt: 1 }}
              flexWrap="wrap"
            >
              <Typography fontWeight="bold">{course.rating}</Typography>
              <RatingStars rating={course.rating}/>
              <Typography color="text.secondary">({course.reviews})</Typography>
            </Stack>

            {/* Course info (duration, modules, level) */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{ mt: 1 }}
            >
              <Typography variant="body2">{course.duration}</Typography>
              <Typography variant="body2">{course.modules}</Typography>
              <Typography variant="body2">{course.level}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard