import React from 'react';
import { Box, Typography } from '@mui/material';
import { PersonOutline as PersonIcon } from '@mui/icons-material';
import { useAppData } from '../contexts/AppData';

const InstructorCard = ({ instructorId }) => {
  const { instructors } = useAppData();
  const instructor = instructors.find(inst => inst.id === instructorId);


  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '1 / 1', 
        maxWidth: '300px',   
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        p: 3,
        boxShadow: 1,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        textAlign: 'center',
        bgcolor: '#fff',
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
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
      <Typography variant="h6" fontWeight={900}>
        {instructor.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {instructor.role}
      </Typography>
    </Box>
  );
};

export default InstructorCard;
