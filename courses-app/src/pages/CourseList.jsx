import { useState } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import SearchBar from "../components/SearchBar"
import CourseFilterBtn from "../components/courseList/CourseFilterBtn"
import FilterChip from "../components/courseList/FilterChip"
import CoursesDisplay from '../components/courseList/CoursesDisplay'
import FilterSelection from '../components/courseList/FilterSelection'
import PaginationComp from '../components/PaginationComp'

import { useAppData } from '../contexts/AppData'
import { useSearch } from '../contexts/SearchContext'



function CourseList() {
    const { courses } = useAppData();
    const { searchKeyword, setSearchKeyword, setErrorMessage } = useSearch();
    const [filters, setFilters] = useState({
        // Providing filters categories
        duration:[],
        paymentType: [],
        category: [],
        level: [],
    });

    const keyword = searchKeyword.trim().toLowerCase();

    //filtered courses
    const filteredCourses = courses.filter(course => {

        // Filter by keyword
        const matchesKeyword =
            !keyword ||
            course.title.toLowerCase().includes(keyword) ||
            course.description.toLowerCase().includes(keyword) ||
            course.category.toLowerCase().includes(keyword);

        
        const matchesFilters =  Object.keys(filters).every(key => {
          if (filters[key].length === 0) return true;
          return filters[key].includes(course[key]);
        });

        return matchesKeyword && matchesFilters;
      });

    //Filter button functionality
    const [filtersVisible, setFiltersVisible] = useState(true);

    const toggleFilter = () => {
        setFiltersVisible(!filtersVisible);
    }

    //Sort by button functionality
    const [sortBy, setSortBy] = useState('');

    const handleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    const sortCourses = (courses, sortBy) => {
        const sorted = [...courses];
        const sortFunctions = {
            'Most Popular': (a, b) => b.reviews - a.reviews,
            'Top Rated': (a, b) => b.rating - a.rating,
            'Cheapest': (a, b) => a.price - b.price,
        };

        return sortFunctions[sortBy] ? sorted.sort(sortFunctions[sortBy]) : sorted;
    }

    const sortedCourses = sortCourses(filteredCourses, sortBy);

    //pagination functionality
    const coursesPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const paginatedCourses = sortedCourses.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );
    
  return (
            <Grid container spacing={2} justifyContent={"center"} alignItems="center">
                <Box width="100%" mb={2} >
                <SearchBar />
                </Box>

                {/* ----Top Content---- */}
                <Grid container size= {12}>
    
                    {/* Filter buttons */}
                    <Grid size={{
                        xs: 12, 
                        sm: 4, 
                        md: 3,
                        lg: 2}}
                    >
                        <CourseFilterBtn 
                            onToggleFilter={toggleFilter}
                            sortBy={sortBy}
                            handleSortBy={handleSortBy}
                            visible={filtersVisible}/>
                    </Grid>

                    {/* Chips & Results */}
                    <Grid container size={{xs: 12, sm: 8, md: 9, lg: 10}} >
                        <Grid size={{xs: 8, md: 9}} >
                            <FilterChip filters={filters}  setFilters={setFilters} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} setErrorMessage={setErrorMessage}/>
                        </Grid>
                        <Grid size={{xs:4, md: 3}} display={'flex'} alignItems="center" justifyContent={'flex-end'}>
                            <Typography fontWeight={"bold"} variant="h6" fontSize={{xs: "medium", md:"large"}}>
                                {filteredCourses.length} {filteredCourses.length === 1 ? "Result" : "Results"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Courses and Filters */}
                <Grid container size={12} >
                    {/* Filters */}
                    {filtersVisible && (
                      <Grid 
                          size={{ 
                            xs:12, 
                            sm:4, 
                            md: 3,
                            lg: 2}} 
                          sx={{
                              transition: 'all 0.5s ease',
                              display: 'block',
                              width: '100%'
                            }}>
                          <FilterSelection filters={filters} setFilters={setFilters} visible={filtersVisible}/>
                      </Grid>
                    )}

                    {/* Courses with conditional rendering for course results*/}
                    <Grid 
                    size={{ 
                        xs: 12, 
                        sm: filtersVisible ? 8 : 12, 
                        md: filtersVisible ? 9 : 12, 
                        lg: filtersVisible ? 10 : 12 
                    }} 
                    sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                    {sortedCourses.length === 0 ? (
                        <Box
                        sx={{
                            textAlign: 'center',
                            p: 4,
                            borderRadius: 2,
                            backgroundColor: '#f9f9f9',
                            border: '1px dashed #ccc',
                            width: '100%',
                            mt: 4,
                        }}
                        >
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            No Results Found
                        </Typography>
                        <Typography variant="body1">
                            Try adjusting your filters or search term.
                        </Typography>
                        </Box>
                    ) : (
                        <>
                        <CoursesDisplay filteredCourses={paginatedCourses} />
                        <PaginationComp 
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalCourses={sortedCourses.length}
                            coursesPerPage={coursesPerPage}
                        />
                        </>
                    )}
                    </Grid>
                </Grid>
            </Grid>
  )
}

export default CourseList