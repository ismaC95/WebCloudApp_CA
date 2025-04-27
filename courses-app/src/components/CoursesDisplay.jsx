import { Stack } from '@mui/material'

import CourseCard from '../components/CourseCard'
import PaginationComp from '../components/PaginationComp'


const CoursesDisplay = ({filteredCourses}) => {
  
  return (
    <Stack direction='column'>
        {filteredCourses.map(course=>(
            <CourseCard key={course.id} course={course}/>
        ))}
    <PaginationComp />
    </Stack>
  )
}

export default CoursesDisplay