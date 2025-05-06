import React, {useState} from 'react';
import { Box, Typography, Drawer, List, ListItem, ListItemText, Avatar, Divider, Chip, IconButton } from '@mui/material';
import { VideoLibrary, AccessTime, Star } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';

import CoursesDatabase from '../data/CoursesDatabase';
import RatingStars from '../components/RatingStars';

const modules = [
    "Programming introduction",
    "Intro to Computer Languagues",
    "Intro to C Languages",
    "Naming Conventions",
    "Downloading the tools"
];


const CourseDisplay = () => {
    const {id} = useParams();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };
    
    return (
        <Box /* Main content */sx={{ display: 'flex', mt: '5em', p: '2em'}}> 
            <Box /*Main content*/ sx={{
                flexGrow: 1, 
                transition: 'padding-right 0.3s ease',
                pr: drawerOpen ? '18em' : '2em',
                pl: '2em',
                
            }}
            > 
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>

                <Box /* Course Video */
                sx={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    mt: 2
                }}>
                    <iframe
                    src="https://youtu.be/7fPXI_MnBOY?feature=shared"
                    title="Course Video"
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
                    mb: 3,
                    bgcolor: '#fafafa', 
                    p: 2,
                    borderRadius:2
                }}
                >
                    <Avatar sx={{width: 64, height: 64, mr: 2}}>Photo</Avatar>
                    <Box>
                        <Typography fontWeight="bold">Instructor Name</Typography>
                        <Typography variant="body2">Profession: Computer Science</Typography>
                        <Typography variant="body2">
                            Courses: <a href="#">C++ basic</a>, <a href="#">Object oriented programming</a>
                        </Typography>
                    </Box>
                </Box>

                <Box /*Course Description*/
                sx={{
                    bgcolor: '#f5f5f5', 
                    p: 3,
                    borderRadius: 2
                }}>
                    <Typography fontWeight="bold" gutterBottom>Course Description</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb:1 }}>
                        <AccessTime fontSize="small" />
                        <Typography variant="body2">32.5 hours</Typography>
                        <VideoLibrary fontSize="small" />
                        <Typography variant="body2">16 Videos</Typography>
                        <Star sx={{ color: '#fbc02d' }} fontSize="small" />
                        <Typography variant="body2">(16,320 Reviews)</Typography>
                    </Box>
                        <Typography variant="body2">
                            Description details......
                        </Typography>
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
                    {modules.map((mod, index) => (
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