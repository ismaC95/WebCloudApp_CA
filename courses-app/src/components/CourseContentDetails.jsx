// src/components/CourseContentDetails.jsx
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useAppData } from '../contexts/AppData';

const CourseContentDetails = ({ courseId, isSmDown, theme }) => {
  const { courses } = useAppData();
  const course = courses.find(c => c.id === courseId);
  if (!course) return null;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ py: isSmDown ? 2 : 6, height: 'auto', boxSizing: 'border-box' }}
    >
      <Grid
        container
        spacing={{ xs: 1, lg: 6 }}
        direction={{ xs: 'column', lg: 'row' }}
        alignItems={{ xs: 'center', lg: 'center' }}
        justifyContent={{ xs: 'center', lg: 'center' }}
        textAlign={{ xs: 'center', lg: 'left' }}
        px={isSmDown ? 5 : 10}
        sx={{ height: '100%' }}
      >
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" fontWeight={900} gutterBottom>
            What You’ll Learn
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {(course.learning || []).map((item, idx) => (
              <Box
                component="li"
                key={idx}
                sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
              >
                <DoneIcon sx={{ color: theme.palette.secondary.main, mr: 1, mt: '4px' }} />
                <Typography
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                      lg: '1.2rem',
                      xl: '1.3rem',
                    },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Typography variant="h4" fontWeight={900} gutterBottom sx={{ mb: 4 }}>
            Course Modules
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {(course.modules_list || []).map((mod, idx) => (
              <Box
                component="li"
                key={idx}
                sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
              >
                <PlayCircleOutlineIcon
                  sx={{ color: theme.palette.primary.main, mr: 1, fontSize: '1rem' }}
                />
                <Typography
                  fontWeight={900}
                  sx={{
                    fontSize: {
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                      lg: '1.2rem',
                      xl: '1.3rem',
                    },
                  }}
                >
                  {mod}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseContentDetails;
