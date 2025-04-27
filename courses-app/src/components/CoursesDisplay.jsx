import { Stack } from '@mui/material'

import courses from '../data/CoursesDatabase'
import CourseCard from '../components/CourseCard'
import PaginationComp from '../components/PaginationComp'


const CoursesDisplay = () => {
  return (
    <Stack direction='column'>
        {courses.map(course=>(
            <CourseCard key={course.id} course={course}/>
        ))}
    <PaginationComp />
    </Stack>
  )
}

export default CoursesDisplay