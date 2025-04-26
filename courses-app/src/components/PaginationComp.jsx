import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComp = () => {
  return (
    <Stack spacing={2} alignItems='flex-end'>
      <Pagination count={10} shape="rounded" showFirstButton showLastButton/>
    </Stack>
  )
}

export default PaginationComp