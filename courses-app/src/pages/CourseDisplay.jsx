import React, { useState, useEffect } from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemText, Avatar, Divider, Chip, IconButton } from '@mui/material';
import { VideoLibrary, AccessTime } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';

import coursesDatabase from '../data/CoursesDatabase';
import RatingStars from '../components/RatingStars';
import InstructorDetails from '../data/InstructorDetails';


const CourseDisplay = () => {
    const { id } = useParams(); // get course ID from URL

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [course, setCourse] = useState(null); // selected course storage

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
                        <MenuIcon fontSize="large" />
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
                        {/* Avatar for first initial */}
                        <Avatar sx={{width: 60, height: 60, mr: 2, bgcolor: '#5C3D90'}}>
                            {instructor?.name?.charAt(0)}
                        </Avatar>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            <Typography fontWeight="bold" fontSize='large' sx={{ color: '#5C3D90' }}>
                                {instructor?.name}
                            </Typography>

                            <Typography variant="body2">{instructor?.role}</Typography>

                            {/* Bring other courses from the same instructor */}
                            <Typography variant="body2" fontStyle='italic'>
                                {(() => {
                                    const otherCourses = instructor.courses.filter(cid => cid !== course.id);
                                    if (otherCourses.length === 0) {
                                        return `No other courses from ${instructor.name}`;
                                    } else { 
                                        return (
                                            <>
                                                Check out more courses from {instructor.name}:&nbsp;
                                                {otherCourses.map((cid, index) => {
                                                    const relatedCourse = coursesDatabase.find(c => c.id === cid);
                                                    if (!relatedCourse) return null;
                                                    return (
                                                        <span key={cid}>
                                                            <a href={`/coursedisplay/${cid}`}>{relatedCourse.title}</a>
                                                            {index < instructor.courses.filter(id => id !== course.id).length - 1 ? ", " : ""}
                                                        </span>
                                                    );
                                                })}
                                            </>
                                        );
                                    }
                                })()}                        
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, py:'1.5em' }}>
                            <AccessTime fontSize="small" />
                            <Typography variant="body2">{course.duration}</Typography>
                            <VideoLibrary fontSize="small" />
                            <Typography variant="body2">{course.modules} Modules</Typography>
                            
                            <Box sx={{ color: '#ffb700' }}>
                                <RatingStars rating={course.rating} />  
                            </Box>
                            
                            <Typography variant="body2" fontStyle='italic' >({course.no_reviews} Reviews)</Typography>
                        </Box>
                            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>{course.long_description}</Typography>
                            <Typography fontWeight="bold" gutterBottom sx={{ mt: 4 }}>What you'll learn from this course</Typography>
                            <List>
                                {course.learning && course.learning.map((item, index) => (
                                    <ListItem key={index} sx={{ pl: 0, display: 'flex', alignItems: 'flex-start' }}>
                                        <Chip 
                                            icon={<DoneIcon sx={{ color: '#4caf50 !important', mr: 1, mt: '4px' }} />}
                                            label={item}
                                            sx={{ bgcolor: '#D9D9D9', color: '#333', fontWeight: 'bold' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
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
                        <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <PlayCircleOutlineIcon sx={{ mr: 1, color: '#5C3D90', fontSize: '1rem' }} />
                            <ListItemText primary={mod} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default CourseDisplay;