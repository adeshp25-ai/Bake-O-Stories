import React from 'react';
import { Typography, Box, Button, Grid, Paper, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import bakeryHero from '../assets/bakery-hero.jpg'; // You'll need to add this image

const HeroSection = styled(Box)(({ theme }) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bakeryHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.secondary.light,
    textAlign: 'center',
    padding: theme.spacing(4),
  }));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Home = () => {

  const theme = useTheme();
  return (
    <Box>
      <HeroSection>
        <Typography variant="h2" component="h1" gutterBottom sx={{color:theme.palette.secondary.light}}>
          Welcome to Bake-O-Stories
        </Typography>
        <Typography variant="h5" gutterBottom>
          Discover our delicious range of freshly baked goods!
        </Typography>
        <Button component={Link} to="/products" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Shop Now
        </Button>
      </HeroSection>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" gutterBottom align="center" color="primary">
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom color="primary">
                Fresh Ingredients
              </Typography>
              <Typography variant="body1">
                We use only the finest, locally-sourced ingredients in all our baked goods.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom color="primary">
                Artisanal Recipes
              </Typography>
              <Typography variant="body1">
                Our bakers use time-honored techniques to create unique, flavorful treats.
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h5" gutterBottom color="primary">
                Made with Love
              </Typography>
              <Typography variant="body1">
                Every item is crafted with care and passion, ensuring the best quality for you.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Join Our Newsletter
          </Typography>
          <Typography align="center" paragraph>
            Stay updated with our latest offers and new products!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button component={Link} to="/subscribe" variant="contained" color="secondary" size="large">
              Subscribe Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
