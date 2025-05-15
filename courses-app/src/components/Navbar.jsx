import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {Link} from 'react-router-dom';

const Navbar = () => {
    

    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}>Logo</Typography> 
                
                <Box sx={{display: 'flex', gap:2}}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    {/* Default course id set */}
                    {/* <Button color="inherit" component={Link} to="/coursedisplay/3">My Course</Button> */}

                    <Button color="inherit" component={Link} to="/courses" >Courses</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>

                    <Button variant="outlined" component={Link} to="/login">Sign In</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
