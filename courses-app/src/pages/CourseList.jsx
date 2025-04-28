import { React, useState } from 'react'
import { Grid, Typography } from '@mui/material'


import SearchBar from "../components/SearchBar"
import CourseFilterBtn from "../components/courseList/CourseFilterBtn"
import FilterChip from "../components/courseList/FilterChip"

import courses from '../data/CoursesDatabase'
import CoursesDisplay from '../components/courseList/CoursesDisplay'
import FilterSelection from '../components/courseList/FilterSelection'


function CourseList() {
    const [filters, setFilters] = useState({
        // Providing filters categories
        duration:[],
        paymentType: [],
        category: [],
        level: [],
    });

    //filtered courses
    const filteredCourses = courses.filter(course => {
        return Object.keys(filters).every(key => {
          if (filters[key].length === 0) return true;
          return filters[key].includes(course[key]);
        });
      });

    //Filter button functionality
    const [filtersVisible, setFiltersVisible] = useState(true);

    const toggleFilter = () => {
        setFiltersVisible(!filtersVisible);
        console.log(filtersVisible);
    }
    
  return (
    <Grid container justifyContent={"center"} >
        <Grid size={{xs: 12, sm: 8}}>
            <Grid container spacing={2} justifyContent={"center"} alignItems="center">
                <Grid size={12}>
                    <SearchBar />
                </Grid>

                {/* ----Top Content---- */}
                <Grid container size= {12}>
    
                    {/* Filter buttons */}
                    <Grid size={{
                        xs: 12, 
                        sm: 4, 
                        md: 3,
                        lg: 2}}>
                        <CourseFilterBtn onToggleFilter = {toggleFilter}/>
                    </Grid>

                    {/* Chips & Results */}
                    <Grid container size={{xs: 12, sm: 8, md: 9, lg: 10}} >
                        <Grid size={9}>
                            <FilterChip filters={filters} setFilters={setFilters} />
                        </Grid>
                        <Grid size={3} display={'flex'} alignItems="center" justifyContent={'flex-end'}>
                            <Typography fontWeight={"bold"} variant="h6">
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
                              width: '100%'}}>
                          <FilterSelection filters={filters} setFilters={setFilters} visible={filtersVisible}/>
                      </Grid>
                    )}
                    {/* Courses */}
                    <Grid size={{xs: 12, 
                        sm: filtersVisible ? 8 : 12, 
                        md: filtersVisible ? 9 : 12,
                        lg: filtersVisible ? 10 : 12}}>
                        <CoursesDisplay filteredCourses={filteredCourses}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default CourseList