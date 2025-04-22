import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Icon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr:2}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>Logo</Typography> 
                
                <Box sx={{display: 'flex', gap:2}}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>

                    <Button color="inherit" >Courses</Button>
                    <Button color="inherit" >Sign Up</Button>

                    <Button variant="outlined">Sign In</Button>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;