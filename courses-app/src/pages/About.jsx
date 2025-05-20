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

          <Typography variant="body1" paragraph >
              Welcome to "LOGO" — your gateway to online learning. <br/>Our platform empowers students,
              professionals, and lifelong learners by offering thousands of courses created by expert instructors
              around the world.
          </Typography>

          <Typography variant="body1" paragraph>
              Whether you're leveling up your career, exploring new hobbies, or seeking knowledge just for fun,
              "LOGO" is designed to make quality education accessible anytime, anywhere.
          </Typography>

          <Typography variant="body1">
            Join our growing community of learners and unlock your full potential today!
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
