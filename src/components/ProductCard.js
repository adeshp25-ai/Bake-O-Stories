import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#D2B48C', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia component="img" height="200" image={product.image} alt={product.name} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </Link>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, mx: 2, transition: 'all 0.3s ease-in-out' }}>
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
          <Button size="small" variant="contained" color="secondary" fullWidth onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        )}
      </Box>
    </Card>
  );
};

export default ProductCard;
