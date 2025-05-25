import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

import { useEnrollment } from "../contexts/EnrollmentContext"
import { useAuth } from "../contexts/AuthContext";
import { useAppData } from "../contexts/AppData";



const StudentDashboard = () => {
    //Bring courses from db
    const { courses } = useAppData();
    const { currentUser } = useAuth();
    const { enrollments } = useEnrollment();

      // Extract courseIds the current user is enrolled in
  const enrolledCourseIds = enrollments.map((enrollment) => enrollment.courseId);

  // Find the full course objects that match those IDs
  const enrolledCourses = courses.filter((course) =>
    enrolledCourseIds.includes(course.id)
  );

  return (
    <Box sx={{ p:{lg:4} , width: "100%"}}>
      <Typography variant="h2" sx={{mb:{xs: 2, lg: 4}}}>
        {currentUser?.displayName || "Student"}'s Dashboard
      </Typography>

      <Typography variant="h5" sx={{mb:{xs: 2, lg: 4}}}>
        Your Enrolled Courses:
      </Typography>

      <Grid container spacing={3} display="flex" flexDirection="row" width="100%">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <Grid size={{xs:12, md:4}} key={course.id}>
              <Card
                component={Link} 
                to={`/coursedisplay/${course.id}`}
                sx={{textDecoration:"none"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            sx={{ height: 160, width: "100%", borderRadius: 1 }}
                            image={course.image}
                            title={course.title}
                        />    
                        <CardContent >
                        <Typography variant="h6">{course.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {course.description}
                        </Typography>
                        </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            You are not enrolled in any courses yet.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default StudentDashboard;