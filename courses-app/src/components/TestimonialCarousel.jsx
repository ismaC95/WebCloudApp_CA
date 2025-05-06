// src/components/TestimonialCarousel.jsx
import React from 'react';
import { Typography, Box, IconButton, Container, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const TestimonialCarousel = ({ reviews }) => {
  const hasMany = reviews.length >= 3;

  return (
    <Box sx={{ my: 6 }}>
      <Typography
        variant="h4"
        fontWeight={900}
        gutterBottom
        sx={{ textAlign: 'center', mb: 4 }}
      >
        What Students Are Saying
      </Typography>

      {hasMany ? (
        <Box sx={{ position: 'relative', overflow: 'visible' }}>
          {/* Arrows */}
          <IconButton
            className="custom-swiper-prev"
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translate(-100%, -50%)',
              zIndex: 10,
              display: { xs: 'none', md: 'flex' },
              backgroundColor: '#ffffff',
              boxShadow: 2
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>

          <IconButton
            className="custom-swiper-next"
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translate(100%, -50%)',
              zIndex: 10,
              display: { xs: 'none', md: 'flex' },
              backgroundColor: '#ffffff',
              boxShadow: 2
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>

          <Container maxWidth="lg">
            <Swiper
              spaceBetween={12}
              slidesPerView={1.1}
              breakpoints={{
                600: { slidesPerView: 2 },
                960: { slidesPerView: 3 }
              }}
              navigation={{
                nextEl: '.custom-swiper-next',
                prevEl: '.custom-swiper-prev'
              }}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              style={{ paddingBottom: '2.5em' }}
            >
              {reviews.map((review, idx) => (
                <SwiperSlide key={idx}>
                  <TestimonialCard
                    name={review.name}
                    rating={review.rating}
                    comment={review.comment}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: 'lg', mx: 'auto' }}
        >
          {reviews.map((review, idx) => (
            <Grid item key={idx}>
              <TestimonialCard
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TestimonialCarousel;
