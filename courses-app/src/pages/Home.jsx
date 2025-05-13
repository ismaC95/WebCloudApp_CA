import React from 'react';
import { Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/CategoryTabs';
import CourseCarousel from '../components/CourseCarousel';
import ReviewSection from '../components/ReviewSection';
import SpecialOffers from '../components/SpecialOffers';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Marketing');

  return (
    <Box sx={{ mt: '8em' }}>
      <SearchBar />
      <CategoryTabs onCategoryChange={setSelectedCategory} />
      <CourseCarousel selectedCategory={selectedCategory} />
      <ReviewSection />
      <SpecialOffers />
    </Box>
  );
};

export default Home;