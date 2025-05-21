import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/home/CategoryTabs';
import CourseCarousel from '../components/home/CourseCarousel';
import ReviewSection from '../components/home/ReviewSection';
import SpecialOffers from '../components/home/SpecialOffers';
import { Box } from '@mui/material';


const Home = () => {
    //setting the marketing as default
    const [selectedCategory, setSelectedCategory] = React.useState('Marketing'); 

    return (
        <Box>
          <SearchBar />
          <CategoryTabs onCategoryChange={setSelectedCategory} />
          <CourseCarousel selectedCategory={selectedCategory} />          
          <ReviewSection />
          <SpecialOffers />
        </Box>
      );
};

export default Home;
