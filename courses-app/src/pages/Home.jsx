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
    const [searchKeyword, setSearchKeyword] = React.useState('');

    React.useEffect(() => {
      if (searchKeyword.trim() !== '') {
        console.log('Searching for:', searchKeyword);
        // filter course result here or redirect to another page.
      }
    }, [searchKeyword]);
    
    return (
        <Box sx={{mt: '5em'}}>
          <SearchBar keyword={searchKeyword} onKeywordChange={setSearchKeyword} />
          <CategoryTabs onCategoryChange={setSelectedCategory} />
          <CourseCarousel selectedCategory={selectedCategory} />          
          <ReviewSection />
          <SpecialOffers />
          {/* <Footer /> */}
        </Box>
      );
};

export default Home;
