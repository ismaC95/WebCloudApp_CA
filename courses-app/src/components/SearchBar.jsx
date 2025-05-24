import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, Box, IconButton, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { useAppData } from '../contexts/AppData';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
from {opacity: 0; }
to {opacity: 1; }
`;


const SearchBar = () => {
  const { courses } = useAppData();
  const [keyword, setKeyword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchTerm = keyword.trim().toLowerCase();
    if (!searchTerm) return;

    const matchedCourse = courses.find(course =>
      course.title.toLowerCase().includes(searchTerm)
    );

    if (matchedCourse) {
      setErrorMessage('');
      navigate(`/courses/${matchedCourse.id}`);
    } else {
      setErrorMessage('No Matching course found');
    }
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleSearch();
    };

    return (
      <Box sx={{ mt: 2, mb: 2 }}>
        <Box
          sx={{
            display:'flex',
            alignItems: 'center',
            
          }}
        >
          <TextField
            fullWidth
            value={keyword}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for Courses..."
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {errorMessage && (
          <Typography
          sx={{
            color: 'red',
            mt: 1,
            animation: `${fadeIn} 0.5s ease-in`,
            // textAlign: 'center'
          }}
          >
            {errorMessage}
          </Typography>
        )}
      </Box>
    );

  };



export default SearchBar;

