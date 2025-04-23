import { React, useState } from 'react'
import { Grid } from '@mui/material'


import SearchBar from "../components/SearchBar"
import CourseFilter from "../components/CourseFilter"
import FilterChip from "../components/FilterChip"


function CourseList() {
    const [filters, setFilters] = useState({
        duration:[],
        price: [],
        category: [],
        level: [],
    });

    
  return (
    <Grid container>
        <Grid size={{xs: 12, sm: 8}} offset={{xs: 0, sm: 2}}>
            <Grid container 
                // spacing={2} 
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                // style ={{border:"1px solid yellow"}}
                >
                <Grid size={12}>
                    <SearchBar />
                </Grid>
                <Grid container size= {12}>
                    <Grid size={{xs: 12, sm: 4, md: 3, lg: 3}}>
                        <CourseFilter filters={filters} setFilters={setFilters}/>
                    </Grid>
                    <Grid size={{sm: 8, md: 7}} style ={{border:"1px solid yellow"}}>
                        <FilterChip filters={filters} setFilters={setFilters}/>
                    </Grid>
                    <Grid size={2} style ={{border:"1px solid yellow"}}>
                        <p>Results</p>
                    </Grid>
                    <Grid size={{xs: 12, sm: 8, md: 7}} style ={{border:"1px solid red"}}>
                        Courses
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default CourseList