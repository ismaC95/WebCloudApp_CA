import React from 'react'
import { Card, CardActionArea, Box, CardMedia, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';



const CourseCard = () => {
  return (
    <Card sx={{marginBottom: 2}}>
      <CardActionArea>
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={2}
          alignItems="flex-start"
        >
          {/* Image */}
          <CardMedia
            component="img"
            sx={{ height: 'auto', width: 200 }}
            image="/Course_images/placeholder.png"
            title="course placeholder image"
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
                  React for Dummies
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  In this course you will learn how to not use React
                </Typography>
              </Box>

              {/* Pricing */}
              <Stack alignItems="flex-end">
                <Typography fontWeight="bold">$10.99</Typography>
                <Typography
                  fontSize="0.9rem"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through' }}
                >
                  $24.99
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
              <Typography fontWeight="bold">4.8</Typography>
              <Stack direction="row">
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarHalfIcon fontSize="small" />
              </Stack>
              <Typography color="text.secondary">(1,256)</Typography>
            </Stack>

            {/* Course info (duration, modules, level) */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{ mt: 1 }}
            >
              <Typography variant="body2">2.5 Hours</Typography>
              <Typography variant="body2">15 Modules</Typography>
              <Typography variant="body2">Beginner</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard