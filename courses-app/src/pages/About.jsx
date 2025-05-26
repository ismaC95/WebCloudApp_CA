import { useState } from 'react';
import { Typography, TextField, Button, Paper, Box, Grid, Fade, Avatar } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { db } from '../firebase'; // firebase config, firestore instance
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // firestore function method to write (create doc, get timestamps)

const About = () => {

  // state to store form inputs
  const [formData, setFormData] = useState({
    question: '',
    email: '',
    comments: ''
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Track the submission success or fail
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: '' });

  // input changes - update states
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev, // keep previous fields as is
      [e.target.name]: e.target.value // update the specific area that trigerred change
    }));

    //Clear errors on input change
    setErrors(prev => ({...prev, [e.target.name]: '' })); 
    setSubmitStatus({success: false, error: ''}); //Reset message
  };

  // Form validation
  const validate = () => {
    const newErrors = {};

    if (!formData.question.trim()) newErrors.question = "Question is required";

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address. Please check it again.'
    }

    if (!formData.comments.trim()) newErrors.comments = 'Please provide details for your question';
    
    // Save errors
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //no refresh on submission

    if (!validate()) return;
    
    try {
      
      // neww doc to the colelction in firestore
      await addDoc(collection(db, 'contactFormResponses'), {
        ...formData, // includes all
        createdAt: Timestamp.now()
      });

      setSubmitStatus({ success: true, error: '' });

      // Reset after submission
      setFormData({ question: '', email: '', comments: '' });

    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitStatus({ success: false, error: 'Failed to send message. Please see the error messages and try agin'});
    }
  };

  return (
      <Grid
         container
         component="main"
         display="flex"
         justifyContent="center"
         alignItems="center"
         spacing={5}
         sx={{ p:5, mt:{xs:10, lg:5}, backgroundColor: '#F0F2F5'}}
       >
          {/* Contact Us */}
          <Grid
            size={{xs: 12, md:6}}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', p: 2}}
          >
          <Paper elevation={3} sx={{ flex: 1, p:4, borderRadius:4}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
                <QuestionMarkIcon fontSize="large" />
              </Avatar>

              <Typography component="h1" variant="h2" color="primary" sx={{ mb: 1 }}>
                Contact
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
                Provide the following information
              </Typography>

              {/* Form */}
              <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  error={!!errors.question}
                  helperText={errors.question}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  error={!!errors.comments}
                  helperText={errors.comments}
                  variant="outlined"
                  margin="normal"
                />

                {/* Embedded message fade in */}
                <Fade in = {submitStatus.success || !!submitStatus.error}>
                  <Typography
                  sx={{
                    mt: 2,
                    color: submitStatus.success ? 'green' : 'red',
                    fontWeight: 'bold'
                  }}
                >
                  {submitStatus.success ? "Message sent successfully! We'll get back to you soon" : submitStatus.error}
                  </Typography>
                </Fade>

                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width:"100%" }}>Submit</Button>
              </Box>
          </Box>

          </Paper>
          </Grid>

        {/* About Us */}
        <Grid
            size={{xs: 12, md:6}}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', p: 2}}>
          <Box sx={{
            flex: 1,
            border: '2px solid #5C3D90',
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
        </Grid> 
      </Grid>
  );
};

export default About;
