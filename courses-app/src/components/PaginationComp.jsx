import { Grid, Select, FormControl, MenuItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const PaginationComp = ({currentPage, setCurrentPage, totalCourses, coursesPerPage}) => {
  return (
    <Grid container size={12}
      sx={{
      display:'flex',
      flexDirection: 'row',
      alignItems: "center"
    }}
      >
      <Grid size={12}
        display='flex' spacing={2} justifyContent='center'>
        <Pagination 
        count={Math.ceil(totalCourses / coursesPerPage)}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
        shape="rounded" 
        showFirstButton 
        showLastButton 
        />
      </Grid>
    </Grid>
    
  )
}

export default PaginationComp