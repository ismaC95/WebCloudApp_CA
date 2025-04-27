import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Stack } from '@mui/material';


const RatingStars = (course) => {
    //import courses.rating
    //rating %1 != 0 then half-star
    //loop of rating - i = 1, -2, -3. when it's negative stop. Give as many stars as i - 1
  return (
    <Stack direction="row">
        {Array.from({length: 5}).map((_, index) => {
            if (index < Math.floor(course.rating)){
                return <StarIcon key={`full-${index}`} fontSize='small' />;
            }
            else if (index === Math.floor(course.rating) && course.rating %1 !== 0){
                return <StarHalfIcon key={`half-${index}`} fontSize='small' />;
            }
            else {
                return <StarOutlineIcon key={`empty-${index}`} fontSize='small'/>;
            }
        })}
    </Stack>

  )
}

export default RatingStars