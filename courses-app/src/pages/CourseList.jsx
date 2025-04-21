import React from 'react'
import { Grid } from '@mui/material'
import { SearchBar } from "../components/SearchBar"
import { CourseFilter } from "../components/CourseFilter"


function CourseList() {

  return (
    <Grid 
        container
        // style ={{border:"1px solid red"}}
        >
        <Grid size={{xs: 12, sm: 8}} offset={{xs: 0, sm: 2}}>
            <Grid container 
                // spacing={2} 
                sx={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
                // style ={{border:"1px solid yellow"}}
                >
                <Grid size={12}>
                    <SearchBar />
                </Grid>
                <Grid container 
                size= {12}
                // spacing={2} 
                // style ={{border:"1px solid red"}}
                >
                    <Grid size={{xs: 4, sm: 4}}>
                        <CourseFilter />
                    </Grid>
                    <Grid size={6} sx={{}}>
                    <div>
                        <p>Filtering Section</p>
                    </div>
                    </Grid>
                    <Grid size={2}>
                        <p>Results</p>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    </Grid>
  )
}

export default CourseList