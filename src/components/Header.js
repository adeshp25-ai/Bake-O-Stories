import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useCart } from '../CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const Header = () => {
  const theme = useTheme();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#8B4513' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: '#FFFACD',
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: 1,
              '&:hover': {
                color: '#FFD700',
              },
            }}
          >
            Bake-O-Stories
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: theme.palette.secondary.main,
                mx: 1,
                background: 'none',
                border: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/products"
              sx={{
                color: theme.palette.secondary.main,
                mx: 1,
                background: 'none',
                border: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Products
            </Button>
            <IconButton
              component={Link}
              to="/cart"
              color="inherit"
              sx={{ ml: 1 }}
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
