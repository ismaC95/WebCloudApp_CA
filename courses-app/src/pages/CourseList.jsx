import { React, useState } from 'react'
import { Grid } from '@mui/material'


import SearchBar from "../components/SearchBar"
import CourseFilterBtn from "../components/CourseFilterBtn"
import FilterChip from "../components/FilterChip"
import CourseCard from '../components/CourseCard'


function CourseList() {
    const [filters, setFilters] = useState({
        duration:[],
        price: [],
        category: [],
        level: [],
    });

    
  return (
    <Grid container justifyContent={"center"}>
        <Grid size={{xs: 12, sm: 8}}>
            <Grid container spacing={2} justifyContent={"center"} alignItems="center">
                <Grid size={12}>
                    <SearchBar />
                </Grid>

                {/* ----Main Content---- */}
                <Grid container size= {12}>
                    {/* Left column */}
                    <Grid size={{xs: 12, sm: 4, md: 3, lg: 3}}>
                        <CourseFilterBtn filters={filters} setFilters={setFilters}/>
                    </Grid>

                    {/* Right Row top */}
                    <Grid size={{xs: 12, sm: 8, md: 9}}>
                        <Grid container spacing={2}>
                            <Grid size={8}>
                                <FilterChip filters={filters} setFilters={setFilters}/>
                            </Grid>
                            <Grid size={4}>
                                <p>Results</p>
                            </Grid>
                        </Grid>
                        
                        {/* Bottom right column (Courses) */}
                        <Grid size={12}>
                            <CourseCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default CourseList