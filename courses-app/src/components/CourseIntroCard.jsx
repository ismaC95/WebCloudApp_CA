import {
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import InstructorCard from './InstructorCard';
import { useAppData } from '../contexts/AppData';

const CourseIntroCard = ({ courseId }) => {
  const { courses } = useAppData();
  const course = courses.find((c) => c.id === courseId);

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  if (!course) return null; 

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ py: isSmDown ? 2 : 6, height: 'auto', boxSizing: 'border-box' }}
    >
      <Grid
        container
        spacing={4}
        px={isSmDown ? 2 : 6}
        alignItems="center"
        justifyContent="space-evenly"
        direction={{ xs: 'column', md: 'row' }}            
        sx={{ height: '100%' }}
      >
        {/* 1. Intro video */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', 
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <iframe
              src={course.intro_video}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Course Intro"
            />
          </Box>
        </Grid>

        {/* 2. Long description */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'justify',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.1rem',
                  lg: '1.2rem',
                  xl: '1.3rem',
                },
                lineHeight: 1.6,
              }}
            >
              {course.long_description}
            </Typography>
          </Box>
        </Grid>

        {/* 3. Instructor card */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <InstructorCard instructorId={course.instructor_id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseIntroCard;
