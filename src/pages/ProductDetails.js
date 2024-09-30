import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Container, Paper, Grid } from '@mui/material';
import { useCart } from '../CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find(item => item.id === product.id);

  if (!product) {
    return <Typography variant="h6" align="center">Product not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ my: 8 }}>
      <Paper sx={{ p: 4, borderRadius: '12px', boxShadow: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{product.name}</Typography>
            <Typography variant="h5" color="primary" gutterBottom>Price: ₹{product.price.toFixed(2)}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>{product.description}</Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Nutritional Information</Typography>
              <Box component="table" sx={{ width: '100%', mt: 2, borderCollapse: 'collapse' }}>
                {product.nutrition.split(', ').map((nutrient) => {
                  const [name, amount] = nutrient.split(': ');
                  return (
                    <Box component="tr" key={name} sx={{ borderBottom: '1px solid #ddd' }}>
                      <Box component="td" sx={{ py: 1 }}>{name}</Box>
                      <Box component="td" sx={{ py: 1, textAlign: 'right' }}>{amount}</Box>
                    </Box>
                  );
                })}
              </Box>

              <Typography variant="body2" sx={{ mt: 2 }}><strong>Main Ingredients:</strong> {product.ingredients.join(', ')}</Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                {cartItem ? (
                  <>
                    <Button variant="outlined" onClick={() => removeFromCart(product.id)} sx={{ minWidth: 40 }}>
                      <RemoveIcon />
                    </Button>
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      {cartItem.quantity}
                    </Typography>
                    <Button variant="outlined" onClick={() => addToCart(product)} sx={{ minWidth: 40 }}>
                      <AddIcon />
                    </Button>
                  </>
                ) : (
                  <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetails;
