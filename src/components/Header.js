import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            component={Link}
            to="/home"
            sx={{
              color: theme.palette.secondary.main,
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: 1,
              '&:hover': {
                color: theme.palette.secondary.light,
              },
            }}
          >
            Bake-O-Stories
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              component={Link}
              to="/home"
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
            <Button
              component={Link}
              to="/cart"
              sx={{
                color: theme.palette.secondary.main,
                ml: 1,
                background: 'none',
                border: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ShoppingCartIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
