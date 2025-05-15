import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/home/CategoryTabs';
import CourseCarousel from '../components/home/CourseCarousel';
import ReviewSection from '../components/home/ReviewSection';
import SpecialOffers from '../components/home/SpecialOffers';
import Footer from '../components/Footer';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

const Home = () => {
    //setting the marketing as default
    const [selectedCategory, setSelectedCategory] = React.useState('Marketing'); 
    
    return (
        <Box sx={{mt: '8em'}}>
          <SearchBar />
          <CategoryTabs onCategoryChange={setSelectedCategory} />
          <CourseCarousel selectedCategory={selectedCategory} />          
          <ReviewSection />
          <SpecialOffers />
          {/* <Footer /> */}
        </Box>
      );
};

export default Home;
