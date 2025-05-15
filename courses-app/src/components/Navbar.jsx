import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Badge } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import ShoppingCartComp from './shoppingCart/ShoppingCartComp';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
    const {addedToCart} = useCart();

    const [openCart, setOpenCart] = useState(false);
    const toggleCart = (e) => () => {
        setOpenCart(e);
    }

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
                    <Button color="inherit" component={Link} to="/coursedisplay">My Course</Button>

                    <Button color="inherit" component={Link} to="/courses" >Courses</Button>
                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>

                    <Button variant="outlined" component={Link} to="/login">Sign In</Button>

                    {/* Removing Link from shoppoing cart icon */}
                    <IconButton color="inherit" onClick={toggleCart(true)}>
                    {/* To add Badge functionality on the badgeContent prop */}
                        <Badge badgeContent={addedToCart.length} color="primary">
                           <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <ShoppingCartComp openCart={openCart} toggleCart={toggleCart}/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;