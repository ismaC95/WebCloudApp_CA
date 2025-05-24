import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { useAppData } from '../contexts/AppData';


const SearchBar = () => {
  const { courses } = useAppData();
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchTerm = keyword.trim().toLowerCase();
    if (!searchTerm) return;

    const matchedCourse = courses.find(course =>
      course.title.toLowerCase().includes(searchTerm)
    );

    if (matchedCourse) {
      navigate(`/courses/${matchedCourse.id}`);
    } else {
      alert('No course found matching your search.');
    }
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
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
            placeholder="Search for..."
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
      </Box>
    );

  };



export default SearchBar;

