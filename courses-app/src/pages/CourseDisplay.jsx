import React, { useState, useEffect } from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemText, Avatar, Divider, Chip, IconButton } from '@mui/material';
import { VideoLibrary, AccessTime, Star } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';

import coursesDatabase from '../data/CoursesDatabase';
import RatingStars from '../components/RatingStars';
import InstructorDetails from '../data/InstructorDetails';


const CourseDisplay = () => {
    const { id } = useParams();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const courseFound = coursesDatabase.find(c => c.id === parseInt(id));
        setCourse(courseFound);
    }, [id]);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    if (!course) return <Typography sx={{ mt: 8, p: 4}}>Course not found.</Typography>

    // find instructor and display the err msg if not found
    const instructor = InstructorDetails.find((ins) => ins.id === course.instructor_id);
    if (!instructor) return <Typography sx={{ mt: 8, p: 4}}>Instructor not found.</Typography>
    
    return (
        <Box /* Main content */sx={{ display: 'flex', mt: '5em'}}> 
            <Box /*Main content*/ sx={{
                flexGrow: 1, 
                // transition: 'padding-right 0.3s ease',
                pr: drawerOpen ? '18em' : '2em',
                pl: '2em',
                
            }}
            > 
                {/* Menu button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>


                <Box // Outer box for gap
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5em', // Add vertical spacing between child sections
                    mt: 2,
                    }}
                >
                    <Box /* Course Video */
                    sx={{
                        position: 'relative',
                        width: '50%',
                        paddingTop: '28.125%', // 60% & 33.75%
                        mx: 'auto', // horizontally center
                        mt: 2,
                    }}>
                        <iframe
                        src={course.intro_video}
                        title={course.title}
                        frameBorder="0"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        ></iframe>
                    </Box>

                    <Box /* Instructor Info */ 
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: '#f5f5f5', 
                        p: 2,
                        borderRadius:2,
                        mx: '5em',
                    }}
                    >
                        <Avatar sx={{width: 64, height: 64, mr: 2}}>{instructor?.name?.charAt(0)}</Avatar>
                        <Box>
                            <Typography fontWeight="bold">{instructor?.name}</Typography>
                            <Typography variant="body2">{instructor?.role}</Typography>
                            <Typography variant="body2">
                                Courses: <a href="#">C++ basic</a>, <a href="#">Object oriented programming</a>
                            </Typography>
                        </Box>
                    </Box>

                    <Box /*Course Description*/
                    sx={{
                        bgcolor: '#f5f5f5', 
                        p: 3,
                        borderRadius: 2,
                        mx: '5em',
                    }}>
                        <Typography fontWeight="bold" gutterBottom>{course.title}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb:1 }}>
                            <AccessTime fontSize="small" />
                            <Typography variant="body2">{course.duration}</Typography>
                            <VideoLibrary fontSize="small" />
                            <Typography variant="body2">{course.modules} Modules</Typography>
                            <RatingStars rating={course.rating} />  
                            <Typography variant="body2">({course.no_reviews} Reviews)</Typography>
                        </Box>
                            <Typography variant="body2">{course.long_description}</Typography>
                    </Box>
                </Box>
            </Box>
                

            {/* Right Drawer - Module List */}
            <Drawer 
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    width: '16em',
                    mt: '4em',
                    bgcolor: '#f0f0f0'},
            }}
            >
                <Typography variant="subtitle1" sx={{ p: 2}}>Modules</Typography>
                <Divider />
                <List>
                    {course.modules_list.map((mod, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={mod} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default CourseDisplay;