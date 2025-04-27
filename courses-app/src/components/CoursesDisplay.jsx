import { Stack } from '@mui/material'

import courses from '../data/CoursesDatabase'
import CourseCard from '../components/CourseCard'
import PaginationComp from '../components/PaginationComp'


const CoursesDisplay = ({filters}) => {
  const filteredCourses = courses.filter(course => {
    return Object.keys(filters).every(key => {
      if (filters[key].length === 0) return true;
      return filters[key].includes(course[key]);
    });
  });
  console.log(filteredCourses);
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