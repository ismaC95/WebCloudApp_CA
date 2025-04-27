import { useState } from 'react';
import { Grid, Button, Select, InputLabel, FormControl, MenuItem, Stack, Box } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

const CourseFilterBtn = ({onToggleFilter}) => {
    const [sortBy, setSortBy] = useState('');

    const handleChange = (e) => {
        setSortBy(e.target.value);
    }
    
  return (
    <Grid container spacing={2}>
        <Grid size={{xs:12}}>
            <Button
            fullWidth
            variant="outlined"
            endIcon={<FilterListRoundedIcon/>}
            onClick={onToggleFilter}>
                Filter
            </Button>
        </Grid>
        <Grid size={{xs:12}}>
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    size="small"
                    variant="outlined"
                    label="Sort by"
                    value={sortBy}
                    onChange={handleChange}>
                    <MenuItem value={'Most Popular'}>Most Popular</MenuItem>
                    <MenuItem value={'Highest Rated'}>Highest Rated</MenuItem>
                    <MenuItem value={'Newest'}>Newest</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    </Grid>
  )
}

export default CourseFilterBtn;
