import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import CourseCarousel from '../components/CourseCarousel';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

const Home = () => {
    const [filter, setFilter] = React.useState('top');
    
    return (
        <Box>
          <SearchBar />
          <CategoryTabs />
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(e, newVal) => setFilter(newVal)}
            sx={{ mt: 2, display: 'flex', justifyContent: 'left' }}>
            <ToggleButton value="top">Top rated</ToggleButton>
            <ToggleButton value="new">Newest</ToggleButton>
          </ToggleButtonGroup>
          <CourseCarousel />
        </Box>
      );
};
    
export default Home;