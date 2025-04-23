import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  return (
    <TextField
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
        placeholder="Type to Search..."
      />

  )
}

export default SearchBar;