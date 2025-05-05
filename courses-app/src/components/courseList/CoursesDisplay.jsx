import { Stack } from '@mui/material'

import CourseCard from '../courseList/CourseCard'


const CoursesDisplay = ({filteredCourses}) => {
  
  return (
    <Stack direction='column'>
        {filteredCourses.map(course=>(
            <CourseCard key={course.id} course={course}/>
        ))}
    </Stack>
  )
}

export default CoursesDisplay