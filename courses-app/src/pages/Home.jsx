import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/Home/CategoryTabs';
import CourseCarousel from '../components/Home/CourseCarousel';
import ReviewsSection from '../components/Home/ReviewSection';
import SpecialOffers from '../components/Home/SpecialOffers';
import Footer from '../components/Footer';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('Marketing');
    
    return (
        <Box sx={{mt: '8em'}}>
          <SearchBar />
          <CategoryTabs onCategoryChange={setSelectedCategory} />
          <CourseCarousel selectedCategory={selectedCategory} />          
          <ReviewsSection />
          <SpecialOffers />
          {/* <Footer /> */}
        </Box>
      );
};
    
export default Home;