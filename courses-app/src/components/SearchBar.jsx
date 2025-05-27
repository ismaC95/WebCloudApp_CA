import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextField, InputAdornment, Box, IconButton, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

import SearchIcon from '@mui/icons-material/Search';
import { useAppData } from '../contexts/AppData';
import { useSearch } from '../contexts/SearchContext';

const fadeIn = keyframes`
from {opacity: 0; }
to {opacity: 1; }
`;


const SearchBar = () => {
  const { courses } = useAppData();
  const { searchKeyword, setSearchKeyword, errorMessage, setErrorMessage } = useSearch();
  
  const [ inputValue, setInputValue ] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  //Keep the error message updated all the time when clearing the chips in courseList, etc.
  useEffect(() => {
    if (
      !searchKeyword ||
      courses.some(course =>
        course.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        course.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        course.category.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    ) {
      setErrorMessage('');
    }
  }, [searchKeyword, courses, setErrorMessage]);
  
  const handleSearch = () => {
    const searchTerm = inputValue.trim().toLowerCase();
    if (!searchTerm) return;

    setSearchKeyword(inputValue);

    const matchedCourse = courses.find(course =>
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.category.toLowerCase().includes(searchTerm)
    );

    location.pathname === '/courses' ? (
      !matchedCourse ? setErrorMessage('No matching course found') : setErrorMessage('')
    ):(
      !matchedCourse ? setErrorMessage('No matching course found') : (
        setErrorMessage(''),
        navigate('/courses')
      )
    );
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      setInputValue('');
    }
    };

    return (
      <Box sx={{ mt: 2}}>
        <Box
          sx={{
            display:'flex',
            alignItems: 'center',
            
          }}
        >
          <TextField
            fullWidth
            value={inputValue}
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

