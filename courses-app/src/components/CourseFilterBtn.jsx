import { useState } from 'react';
import { Grid, Button, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

import CheckboxFilter from './CheckboxFilter';

// const sortByOptions = ['Most Popular', 'Highest Rated', 'Newest']

const CourseFilterBtn = ({filters, setFilters}) => {
    const [sortBy, setSortBy] = useState('');

    const handleChange = (e) => {
        setSortBy(e.target.value);
    }
    
  return (
    <Grid 
        container 
        spacing={0.5}
        sx={{
            justifyContent: "center",
            alignItems: "center",
            
        }}>
        <Grid size= 'auto'>
            <Button
            size="small"
            variant="outlined"
            endIcon={<FilterListRoundedIcon/>}
            >
                Filter
            </Button>
        </Grid>
        <Grid size= {6}>
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    size="small"
                    autoWidth
                    variant="outlined"
                    label="Sort by"
                    value={sortBy}
                    onChange={handleChange}
                    sx={{alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <MenuItem value={'Most Popular'}>Most Popular</MenuItem>
                    <MenuItem value={'Highest Rated'}>Highest Rated</MenuItem>
                    <MenuItem value={'Newest'}>Newest</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid className="filters-container" size={12}>
            <CheckboxFilter 
                title="Video Duration" 
                options={['0-1 Hour', '1-3 Hours', '3-6 Hours', '+6 Hours']} 
                selected={filters.duration}
                onChange={(selected) => {setFilters({...filters, duration: selected})}}
            />
            <CheckboxFilter 
                title="Price" 
                options={['Paid', 'Free']} 
                selected={filters.price}
                onChange={(selected) => setFilters({...filters, price: selected})}/>
            <CheckboxFilter 
                title="Category" 
                options={['Marketing', 'HR', 'Finance', 'Software Development', 'Data Analytics', 'Sales & Customer Success']} 
                selected={filters.category}
                onChange={(selected) => setFilters({...filters, category: selected})}
            />
            <CheckboxFilter 
                title="Level" 
                options={['Beginner', 'Intermediate', 'Advanced']} 
                selected={filters.level}
                onChange={(selected) => setFilters({...filters, level: selected})}
                />
        </Grid>
    </Grid>
  )
}

export default CourseFilterBtn;
