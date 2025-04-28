import { Grid, Select, FormControl, MenuItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const PaginationComp = () => {
  return (
    <Grid container size={12}
      sx={{
      display:'flex',
      flexDirection: 'row'
    }}
      >
      <Grid size={{
        xs: 9,
        md: 9,
        lg: 11
        }}
        display='flex' spacing={2} justifyContent='center'>
        <Pagination count={10} shape="rounded" showFirstButton showLastButton boundaryCount={1} siblingCount={1}/>
      </Grid>
      <Grid size={{
        xs: 3,
        md: 3,
        lg: 1
      }}>
        <FormControl fullWidth>
          <Select
              size="small"
              variant="outlined"
              >
              {/* value={sortBy}> */}
              {/* // onChange={handleChange} */}
              <MenuItem value={'10 pages'}>10 Pages</MenuItem>
              <MenuItem value={'30 Pages'}>30 Pages</MenuItem>
              <MenuItem value={'50 Pages'}>50 Pages</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    
  )
}

export default PaginationComp