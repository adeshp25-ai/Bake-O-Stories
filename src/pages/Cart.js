import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useCart } from '../CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" align="center" color="text.secondary">
          Your cart is empty. Start adding some delicious treats!
        </Typography>
      ) : (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'space-between'
        }}>
          <Grid container spacing={4} sx={{ flexGrow: 1, mb: { xs: 4, md: 0 } }}>
            {cart.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, borderRadius: '12px', overflow: 'hidden' }}>
                  <Typography variant="h6" color="primary">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                  ₹{item.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <IconButton onClick={() => removeFromCart(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      Quantity: {item.quantity}
                    </Typography>
                    <IconButton onClick={() => addToCart(item)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              width: { xs: '100%', md: '300px' },
              ml: { xs: 0, md: 4 },
              position: { xs: 'static', md: 'sticky' },
              top: '100px',
              p: 3,
              bgcolor: 'secondary.light',
              borderRadius: '12px',
              boxShadow: 3,
            }}
          >
            <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
              <Table>
                <TableHead sx={{ bgcolor: 'primary.main' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'primary.contrastText' }}>Item</TableCell>
                    <TableCell align="right" sx={{ color: 'primary.contrastText' }}>Qty</TableCell>
                    <TableCell align="right" sx={{ color: 'primary.contrastText' }}>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">₹{(item.price * item.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom color="primary">
                Total Items: {calculateTotalItems()}
              </Typography>
              <Typography variant="h6" gutterBottom color="primary">
                Total Price: ₹{calculateTotalPrice()}
              </Typography>
              <Button component={Link} to="/checkout" variant="contained" color="primary">
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
