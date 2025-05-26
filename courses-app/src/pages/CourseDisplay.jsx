import React, { useState, useEffect } from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemText, Avatar, Divider, Chip, IconButton } from '@mui/material';
import { VideoLibrary, AccessTime } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';

import { useAppData } from '../contexts/AppData';
import RatingStars from '../components/RatingStars';


const CourseDisplay = () => {
    const { courses, instructors } = useAppData();

    // get course ID from URL
    const { id } = useParams(); 

    const [drawerOpen, setDrawerOpen] = useState(false);

    // selected course storage
    const [course, setCourse] = useState(null); 

    useEffect(() => {
        const courseFound = courses.find(c => c.id === parseInt(id));
        setCourse(courseFound);
    }, [id, courses]); // change dectects for id or courses

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // error handling
    if (!course) return <Typography sx={{ mt: 8, p: 4}}>Course not found.</Typography>

    // find instructor and display the err msg if not found
    const instructor = instructors.find((ins) => ins.id === course.instructor_id);
    if (!instructor) return <Typography sx={{ mt: 8, p: 4}}>Instructor not found.</Typography>
    
    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            position: 'relative',
        }}>
            {/* Menu Button */}
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 1
            }}>
                <IconButton onClick={toggleDrawer(true)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Video Section */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                mx: 'auto',
                mt: 6
            }}>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 aspect ratio
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
                            borderRadius: '8px'
                        }}
                    />
                </Box>
            </Box>

            {/* Instructor Info */}
            <Box sx={{ 
                bgcolor: '#F0F2F5',
                p: 3,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%'
            }}>
                <Avatar sx={{width: 60, height: 60, mr: 2, bgcolor: '#5C3D90'}}>
                    {instructor?.name?.charAt(0)}
                </Avatar>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>

                    <Typography fontWeight="bold" fontSize='large' sx={{ color: '#5C3D90' }}>
                        {instructor?.name}
                    </Typography>

                    <Typography variant="body2">{instructor?.role}</Typography>

                    {/* Bring other courses from the same instructor */}
                    <Box>
                        {(() => {
                            const instructorCourses = courses.filter(c => c.instructor_id === instructor.id);
                            const otherCourses = instructorCourses.filter(c => c.id !== course.id);
                            if (otherCourses.length === 0) {
                                return (
                                    <Typography variant="body2" fontStyle="italic">
                                        No other courses from {instructor.name}
                                    </Typography>
                                );
                            } else { 
                                return (
                                    <Box>
                                        <Typography variant="body2" fontStyle="italic">
                                            Check out more courses from {instructor.name}:{' '}
                                            {otherCourses.map((relatedCourse, index) => (
                                            <span key={relatedCourse.id}>
                                                <a href={`/courses/${relatedCourse.id}`}>{relatedCourse.title}</a>
                                                {index < otherCourses.length - 1 ? ', ' : ''}
                                            </span>
                                            ))}
                                        </Typography>
                                    </Box>
                                );
                            }
                        })()}                        
                        </Box>
                    </Box>
                </Box>

            {/* Course Description */}
            <Box sx={{
                bgcolor: '#F0F2F5',
                p: 3,
                borderRadius: 2,
                width: '100%'
            }}>
                <Typography fontWeight="bold" gutterBottom variant="h6">
                    {course.title}
                </Typography>
                
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.2, 
                    py: 2,
                    flexWrap: 'wrap'
                }}>
                    <AccessTime fontSize="small" />
                    <Typography variant="body2">{course.duration}</Typography>

                    <VideoLibrary fontSize="small" />
                    <Typography variant="body2">{course.modules} Modules</Typography>

                    <Box sx={{ color: '#ffb700' }}>
                        <RatingStars rating={course.rating} />  
                    </Box>
                    
                    <Typography variant="body2" fontStyle='italic'>
                        ({course.no_reviews} Reviews)
                    </Typography>
                </Box>

                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                    {course.long_description}
                </Typography>

                <Typography fontWeight="bold" variant="h6" sx={{ mt: 4, mb: 2 }}>
                    What you'll learn from this course
                </Typography>

                <List sx={{ width: '100%' }}>
                    {course.learning && course.learning.map((item, index) => (
                        <ListItem key={index} sx={{ pl: 0, display: 'flex', alignItems: 'flex-start' }}>
                            <Chip 
                                icon={<DoneIcon sx={{ color: '#4caf50 !important', mr: 1, mt: '4px' }} />}
                                label={item}
                                sx={{ 
                                    bgcolor: '#D9D9D9', 
                                    color: '#333', 
                                    fontWeight: 'bold',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    '& .MuiChip-label': {
                                        whiteSpace: 'normal',
                                        padding: '8px 12px'
                                    }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Drawer */}
            <Drawer 
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: { xs: '280px', sm: '320px' },
                        mt: '64px',
                        bgcolor: '#f0f0f0'
                    },
                }}
            >
                <Typography variant="subtitle1" sx={{ p: 2, fontWeight: 'bold' }}>
                    Modules
                </Typography>
                <Divider />
                <List>
                    {course.modules_list.map((mod, index) => (
                        <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <PlayCircleOutlineIcon sx={{ mr: 1, color: '#5C3D90', fontSize: '1rem' }} />
                            <ListItemText 
                                primary={mod}
                                primaryTypographyProps={{
                                    sx: { fontSize: '0.9rem' }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default CourseDisplay;