import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryTabs from '../components/home/CategoryTabs';
import CourseCarousel from '../components/home/CourseCarousel';
import ReviewSection from '../components/home/ReviewSection';
import SpecialOffers from '../components/home/SpecialOffers';
import { Box } from '@mui/material';
import CoursesDatabase from '../data/CoursesDatabase';

const Home = () => {
    //setting the marketing as default
    const [selectedCategory, setSelectedCategory] = React.useState('Marketing'); 
    const [searchKeyword, setSearchKeyword] = React.useState('');
    const navigate = useNavigate(); // hook for navigation

    const handleSearch = () => {
      const keyword = searchKeyword.toLowerCase();
      
      if (!keyword)  return;

      // Find the first course that includes the keyword
      const matchedCourse = CoursesDatabase.find(course =>
        course.title.toLowerCase().includes(keyword)
      );

      if (matchedCourse) {
        navigate(`/courses/${matchedCourse.id}`);
      } else {
        alert('No course found matching your search');
      }
    };


    return (
        <Box sx={{mt: '5em'}}>
          <SearchBar 
            keyword={searchKeyword} 
            onKeywordChange={setSearchKeyword} 
            onSearch = {handleSearch} 
          />

          <CategoryTabs onCategoryChange={setSelectedCategory} />
          <CourseCarousel selectedCategory={selectedCategory} />          
          <ReviewSection />
          <SpecialOffers />
        </Box>
      );
};

export default Home;
