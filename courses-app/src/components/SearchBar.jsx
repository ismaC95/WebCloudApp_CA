import React from 'react'
import { TextField, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => ({ keyword, onKeywordChange }) => {
  const handleChange = (event) => {
    onKeywordChange(event.target.value);
  };

  return (
    <Box 
    sx = {{
      position: 'relative',
      zIndex: 1,
      px: '2em', 
      maxWidth: '100em',
      mx: 'auto', // center horizontally
      width: '100%',
      border: '1px solid red',
      height: '5em'
    }}
    >
      <TextField
        fullWidth
        value={keyword}
        onChange={handleChange}
        variant="outlined"
        placeholder="Type to Search..."
        inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
        }}  
      />
    </Box>
  )
}


export default SearchBar;