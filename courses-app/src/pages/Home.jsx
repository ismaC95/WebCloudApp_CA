import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import CourseCarousel from '../components/CourseCarousel';
import ReviewsSection from '../components/ReviewSection';
import SpecialOffers from '../components/SpecialOffers';
import Footer from '../components/Footer';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

const Home = () => {
    const [filter, setFilter] = React.useState('top');
    
    return (
        <Box sx={{mt: '8em'}}>
          <SearchBar />
          <CategoryTabs />
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(e, newVal) => setFilter(newVal)}
            sx={{ m: '2em', pl: '2em', display: 'flex', justifyContent: 'left' }}
          >
            <ToggleButton value="top">Top rated</ToggleButton>
            <ToggleButton value="new">Newest</ToggleButton>
          </ToggleButtonGroup>
          <CourseCarousel />
          <ReviewsSection />
          <SpecialOffers />
          <Footer />
        </Box>
      );
};
    
export default Home;