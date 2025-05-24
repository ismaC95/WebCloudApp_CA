import { Grid, Typography, TextField, Button, Paper, Box, Container } from '@mui/material';


const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
      }}>

        {/* About Us */}
        <Box sx={{ 
          flex: 1, 
          border: '1px solid purple', 
          p: 2,
          pb: 5,
          textAlign: 'justify',
          lineHeight: 2.5, 
        }}>
          <Typography variant="h4" gutterBottom>About Us</Typography>

          <Typography 
          paragraph
          sx={{ 
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' } 
          }}
          >
            Welcome to <strong>Academix Course</strong> — your destination for flexible, high-quality online learning. 
            Our platform connects curious minds with expert-led courses designed to inspire, educate, and empower learners 
            at every stage of their journey.
          </Typography>

          <Typography 
          paragraph
          sx={{ 
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' } 
          }}
          >
            Whether you're advancing your career, diving into a new passion, or simply expanding your horizons, 
            <strong> Academix Course</strong> makes learning accessible anytime, anywhere. With thousands of diverse courses 
            from trusted instructors around the globe, knowledge is always within reach.
          </Typography>

          <Typography
          paragraph
          sx={{ 
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' } 
          }}
          >
            Join a thriving community of learners and start your journey toward growth and achievement today.
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3 }
          }}
        >
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField fullWidth label="Your Question" variant="outlined" margin="normal" />
            <TextField fullWidth label="Email" variant="outlined" margin="normal" />
            <TextField fullWidth label="Comments" multiline rows={4} variant="outlined" margin="normal" />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
          </Box>
        </Paper>
      </Box>
    </Container>
        
  );
};

export default About;
