import { Grid, Typography, TextField, Button, Paper, Box } from '@mui/material';


const About = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>

        {/* Left side: About us */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>

          <Typography variant="body1" paragraph>
              Welcome to "LOGO" — your gateway to online learning. Our platform empowers students,
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
        </Grid>

        {/* Right side: Contact form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Your Question"
                variant="outlined"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />

              <Button variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
