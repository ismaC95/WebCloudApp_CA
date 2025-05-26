import { useState } from 'react';
import { Typography, TextField, Button, Paper, Box, Container, Fade } from '@mui/material';

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
      <Box maxWidth="lg" sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        py: 6,
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

          {/* Contact Us */}
        <Paper elevation={3} sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
          <Typography variant="h4" gutterBottom>Contact Us</Typography>

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
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
          </Box>
        </Paper>
      </Box>
  );
};

export default About;
