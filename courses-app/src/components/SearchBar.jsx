import React from 'react'
import { TextField, InputAdornment, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  return (
    <Box 
    sx = {{
      px: '2em', 
      maxWidth: '100em',
      mx: 'auto', // center horizontally
      width: '100%'
    }}
    >
      <TextField
        fullWidth
        inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
        }}
        variant="outlined"
        placeholder="Type to Search..."
      />
    </Box>
  )
}

export default SearchBar;