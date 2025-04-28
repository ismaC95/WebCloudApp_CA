// src/pages/courseDetails.jsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Star as StarIcon,
  PlayCircleOutline as PlayIcon,
  PersonOutline as PersonIcon
} from '@mui/icons-material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DoneIcon from '@mui/icons-material/Done';

const CourseDetails = () => {
const theme = useTheme();
const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
const ratingValue = 3.5; //Course rating
const totalStars = 5; // Total stars
const fullStars = Math.floor(ratingValue); // Full stars
const hasHalfStar = ratingValue % 1 !== 0; // Half star
const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); // Empty stars

  return (
    <Box>
      {/* — Hero Section — */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#FFFFFF',
          py: isSmDown ? 2 : 4,
        }}
      >
        <Container className="d-flex flex-column align-items-center text-center">
          <Typography variant="h1" gutterBottom>
            Full Stack Web Development
          </Typography>
          <Typography variant="h2" gutterBottom>
            Master HTML, CSS, JavaScript and Node.js in 12 weeks
          </Typography>
          <Box className="d-flex align-items-center mb-4">
            {/* Render full stars */}
            {[...Array(fullStars)].map((_, i) => (
              <StarIcon
                key={`full-${i}`}
                sx={{
                  color: '#FFD700',
                  fontSize: isSmDown ? '1.25rem' : '1.5rem',
                  mx: 0.5
                }}
              />
            ))}
            {/* Render half star */}
            {hasHalfStar && (
              <StarHalfIcon
                key="half-star"
                sx={{
                  color: '#FFD700',
                  fontSize: isSmDown ? '1.25rem' : '1.5rem',
                  mx: 0.5
                }}
              />
            )}
            {/* Render empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
              <StarBorderIcon
                key={`empty-${i}`}
                sx={{
                  color: '#FFD700', // You can change the color if you like
                  fontSize: isSmDown ? '1.25rem' : '1.5rem',
                  mx: 0.5
                }}
              />
            ))}
            <Typography variant="body1" sx={{ ml: 1, fontWeight: 900 }}>
              3.5
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              (25,876 reviews)
            </Typography>
          </Box>
          <Button 
            variant="type1" 
            color="secondary"
            size="large"
            sx={{color : '#FFFFFF'}}
            href='#'
            >
            Enroll Now
          </Button>
        </Container>
      </Box>

      {/* — Main Content: 3‑column row — */}
      <Container
            maxWidth={false}           // spans the full viewport width
            disableGutters              // removes Container’s default padding
            sx={{
              py: isSmDown ? 2 : 6,
              height: 'auto',          // full viewport height
              boxSizing: 'border-box',
            }}
          >
            <Grid
              container
              spacing={4}
              px={isSmDown ? 2 : 6}
              alignItems="center"
              justifyContent="space-evenly"       
              sx={{ height: '100%' }}    // fills the 100vh of the Container
            >
              {/* 1. YouTube Video Placeholder */}
              <Grid size={4} sx={{ height: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',  // 16:9 aspect ratio
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/SqcY0GlETPk?si=yfd23PJXSe_4o2Mk"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '100%',
                      border: 0,
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Course Intro"
                  />
                </Box>

              </Grid>

              {/* 2. Description Text */}
              <Grid size={4} sx={{ height: '100%'}}>
                <Typography variant="body1" sx={{ height: '100%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue
                  sagittis elit. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue
                  sagittis elit. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue
                  sagittis elit. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue
                  sagittis elit.
                </Typography>
              </Grid>

              {/* 3. Profile Card */}
              <Grid size={4} sx={{ height: '100%' }}>
                <Box
                  sx={{
                    border: '1px solid #E0E0E0',
                    borderRadius: 2,
                    p: 3,
                    boxShadow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 150,
                      backgroundColor: '#F5F5F5',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: '2rem', color: '#757575' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    Jane Doe
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Senior Developer at Google
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>


      {/* — Course Details: 2‑column row — */}
      <Container 
        maxWidth={false}           // spans the full viewport width
        disableGutters              // removes Container’s default padding
        sx={{
          py: isSmDown ? 2 : 6,
          height: 'auto',          // full viewport height
          boxSizing: 'border-box'}}
        >
        {/* — What You’ll Learn & Course Modules — */}
        <Grid 
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-evenly"
          px={isSmDown ? 5 : 10} 
          sx={{ height: '100%' }}    // fills the 100vh of the Container
          >
          <Grid item xs={6} sx={{ height: '100%' }}>
            <Typography variant="h4" fontWeight={900} gutterBottom>
              What You’ll Learn
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',   // remove native bullets
                p: 0,
                m: 0,
              }}
            >
              {[
                'Gain proficiency front end and full‑back development',
                'Work on hands‑on projects in the full‑stack full‑stack concepts',
                'Develop a deep understanding of full‑stack concepts',
                'Gain proficiency front end and full‑back development',
                'Work on hands‑on projects in the full‑stack full‑stack concepts',
                'Develop a deep understanding of full‑stack concepts',
              ].map((text, idx) => (
                <Box
                  component="li"
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 2,               // ↑ spacing between items
                  }}
                >
                  <DoneIcon
                    sx={{
                      color: (theme) => theme.palette.secondary.main,
                      mr: 1,
                      mt: '4px',         // adjust vertical align with text if needed
                    }}
                  />
                  <Typography variant="body1">
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>


          <Grid item xs={6} sx={{ height: '100%' }}>
            <Typography variant="h4" fontWeight={900} gutterBottom>
              Course Modules
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',   // remove native bullets
                p: 0,
                m: 0,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <PlayCircleOutlineIcon
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      mr: 1,
                      fontSize: '1rem',
                    }}
                  />
                  <Typography variant="body1" fontWeight={900}> 
                    Module {i + 1}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

        </Grid>
        </Container>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100vw',
          boxSizing: 'border-box',
          pb: isSmDown ? 2 : 6,
        }}
        id="testimonials-container"
        >
        {/* — Testimonials — */}
        <Box>
          <Typography variant="h4" fontWeight={900} gutterBottom sx={{ textAlign: 'center', mb: 4}}>
            What Students Are Saying
          </Typography>
          <Container 
            id="testimonials"
            maxWidth={false}           // spans the full viewport width
            disableGutters              // removes Container’s default padding
            sx={{
              py: isSmDown ? 2 : 6,
              height: 'auto',          // full viewport height
              boxSizing: 'border-box',
              width: '100vw',
            }}
          >
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="space-evenly"       
            sx={{ height: '100%' }}    // fills the 100vh of the Container
            >
            {[...Array(4)].map((_, idx) => (
              <Grid size={2} sm={6} md={3} key={idx}>
                <Box
                  sx={{
                    border: '1px solid #E0E0E0',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    boxShadow: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: '#F5F5F5',
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PersonIcon sx={{ fontSize: '1.5rem', color: '#757575' }} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Sarah
                  </Typography>
                  <Box className="d-flex justify-content-center my-1">
                    {[...Array(5)].map((__, star) => (
                      <StarIcon
                        key={star}
                        sx={{ color: '#FFD700', fontSize: '1rem', mx: 0.25 }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    “An porttitor condimentum libero quis faucibus. Phasellus varius nisi
                    quam, non tempus diam pharetra malesuada. Sed tempor odio vitae”
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          </Container>
        </Box>

        {/* — Second Enroll Button — */}
        <Box className="d-flex justify-content-center mt-6">
          <Button variant="type1" size="large" href='#'>
            Enroll Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CourseDetails;
