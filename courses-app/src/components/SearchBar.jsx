import React from 'react';
import { TextField, InputAdornment, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ keyword, onKeywordChange, onSearch }) => {
  const handleInputChange = (event) => {
    onKeywordChange(event.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) onSearch();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch();
    }
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
        <IconButton onClick={handleSearchClick}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
