import { Box, Stack, Typography } from "@mui/material"

import RatingStars from "../RatingStars"

const CartCourseCard = ({course}) => {
  return (
    // Whole Course
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}
      width="100%" gap={2}>
      <Box component="img"
        src={course.image}
        alt={course.title}
        sx={{ width: 150, height: 'auto', flexShrink: 0, objectFit: "cover", borderRadius: 1 }}
      />
      {/* Information + Price */}
      <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" gap={3}>
        {/* Title & Rating */}
        <Stack spacing={1}  justifyContent="center">
          <Typography fontWeight="bold" variant="body1">
            {course.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
            <Typography fontWeight="bold">{course.rating}</Typography>
            <RatingStars rating={course.rating} />
            <Typography color="text.secondary">({course.reviews})</Typography>
          </Stack>
        </Stack>

        {/* Price */}
        <Stack alignItems="flex-end" justifyContent="center">
          <Typography variant="body1" fontWeight="bold" noWrap>
            {course.priceDisplay}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: 'line-through' }}
          >
            {course.originalPriceDisplay}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartCourseCard