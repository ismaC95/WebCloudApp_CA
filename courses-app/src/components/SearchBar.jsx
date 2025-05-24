import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppData } from '../contexts/AppData';

const SearchBar = () => {
  // Data extraction
  const { courses } = useAppData();

  // Track the user search input
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  // Triggered by click search (enter)
  const handleSearch = () => {
    const searchTerm = keyword.trim().toLowerCase();

    // Do nothing when nothing is imput
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

  // get the current search value and update the keyword state
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleSearch();
    };

    return (
      <Box sx={{ px:2, mt: 2, mb: 2 }}>
        <Box
          sx={{
            display:'flex',
            alignItems: 'center',
            px: 20,
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
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
            <IconButton onClick={handleSearch}>
            {/* <SearchIcon /> */}
          </IconButton>
        </Box>
      </Box>
    );

  };



export default SearchBar;
