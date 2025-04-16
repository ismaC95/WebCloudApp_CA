import React from 'react';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => (
    <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
        <TextField
        variant="outlined"
        placeholder="Search for courses..."
        inputProps={{
            startAdorment: <SearchIcon sx={{mr: 1}} />,
        }}
        sx={{width: "60%"}}
        />
    </Box>
);
export default SearchBar;