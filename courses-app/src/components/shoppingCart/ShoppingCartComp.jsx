import { Box, Drawer, IconButton, Typography, Stack, Divider, Button } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { red } from '@mui/material/colors';

import { useCart } from '../../contexts/CartContext';
import CartCourseCard from './CartCourseCard';
import { Link } from 'react-router-dom';

const ShoppingCartComp = ({openCart, toggleCart}) => {
    const { addedToCart, removeFromCart } = useCart();

    const totalPriceCart = addedToCart.reduce((sum, course) => sum + course.price, 0);

  return (
    <Drawer 
        anchor={"right"}
        open={openCart} 
        onClose={toggleCart(false)}
    >
        <Stack height="100%" 
            sx={{width: {
                xs: '100vw',
                sm: '550px'},
                minWidth:{sm:'550px'}}}
            paddingX={2}
            paddingY={3}>
            {/* Header     */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Typography variant='h4'>
                    Courses basket
                </Typography>
                <IconButton 
                    color="inherit" size="large" onClick={toggleCart(false)}>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            
            {addedToCart.length > 0 ? (
            // IF there are courses in the cart:
            <Box display="flex" flexDirection="column" justifyContent="flex-start">
                <Box overflow="auto">
                {addedToCart.map((course) => (
                <Box key={course.id} mb={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
                    <CartCourseCard course={course} />
                    <IconButton onClick={() => removeFromCart(course.id)}>
                        <DeleteRoundedIcon sx={{ color: red[500] }} />
                    </IconButton>
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                    </Box> 
                ))}
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight="bold">Total: {totalPriceCart.toFixed(2)}€</Typography>
                </Box>
                <Box display='flex' justifyContent="center">
                    <Button 
                    variant='outlined' 
                    color="primary" 
                    size="large" 
                    sx={{width:'auto', mt:5}} 
                    component={Link} to="/shoppingcart" 
                    onClick={toggleCart(false)}
                    >
                        Shopping Cart
                    </Button>
                </Box>
                
             </Box>
            ) : (
                //If there are no courses in the cart:
            <Box flex={1} overflow="auto" paddingX={2} alignContent={'center'}>
                <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
                    <Typography variant="hg" color="text.secondary">
                        No courses in the cart.
                    </Typography>
                    <Button variant='outlined' color="primary" size="large" sx={{minWidth:'300px'}} component={Link} to="/courses" onClick={toggleCart(false)}>
                        Keep shopping
                    </Button>
                </Box>
            </Box>
              
            )}
        </Stack>
    </Drawer>
  )
}

export default ShoppingCartComp