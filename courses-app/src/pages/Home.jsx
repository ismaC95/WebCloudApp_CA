import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/home/CategoryTabs';
import CourseCarousel from '../components/home/CourseCarousel';
import ReviewSection from '../components/home/ReviewSection';
import SpecialOffers from '../components/home/SpecialOffers';

import { Box } from '@mui/material';
import { useAppData } from '../contexts/AppData';



const Home = () => {
    //setting the marketing as default
    const { courses } = useAppData();

    // current, change. Initially empty
    const [selectedCategory, setSelectedCategory] = React.useState('');


    // Render & courses array gets updated
    React.useEffect(() => {
      if (courses.length > 0) {
        setSelectedCategory(courses[0].category);
      }
    }, [courses]);

    return (
          <Box display="flex" flexDirection="column" gap={2} sx={{ mt: 4 }}>
            <SearchBar />
            <CategoryTabs onCategoryChange={setSelectedCategory} />
            <CourseCarousel selectedCategory={selectedCategory} />          
            <ReviewSection />
            <SpecialOffers />
          </Box>
    );
};

export default Home; 
