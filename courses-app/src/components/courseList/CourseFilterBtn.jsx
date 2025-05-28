import { Grid, Button, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

const CourseFilterBtn = ({onToggleFilter, sortBy, handleSortBy, visible}) => {
    
  return (
    <Grid container spacing={2}>
        <Grid size={{xs:12}}>
            {visible? (
                <Button
                    fullWidth
                    variant="contained"
                    endIcon={<FilterListRoundedIcon/>}
                    onClick={onToggleFilter}>
                    Hide Filter
                </Button>
                ):(
                <Button
                    fullWidth
                    variant="outlined"
                    endIcon={<FilterListRoundedIcon/>}
                    onClick={onToggleFilter}>
                    Show Filter
                </Button>
            )}
            
        </Grid>
        <Grid size={{xs:12}}>
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    size="small"
                    variant="outlined"
                    label="Sort by"
                    value={sortBy}
                    onChange={handleSortBy}
                    >
                    <MenuItem value={'Most Popular'}>Most Popular</MenuItem>
                    <MenuItem value={'Top Rated'}>Top Rated</MenuItem>
                    <MenuItem value={'Cheapest'}>Cheapest</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    </Grid>
  )
}

export default CourseFilterBtn;
