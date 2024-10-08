import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import chocolateCake from '../assets/chocolate-cake.jpg';
import vanillaCupcake from '../assets/vanilla-cupcake.jpg';
import redVelvetCake from '../assets/red-velvet-cake.jpg';
import lemonTart from '../assets/lemon-tart.jpg';
import blueberryMuffin from '../assets/blueberry-muffin.jpg';

const products = [
    {
      id: 1,
      name: 'Chocolate Cake',
      price: 600,
      image: chocolateCake,
      description: 'A rich and moist chocolate cake with a velvety texture.',
      nutrition: 'Calories: 450, Fat: 20g, Carbs: 60g, Protein: 5g',
      ingredients: ['Flour', 'Sugar', 'Cocoa', 'Butter', 'Eggs'],
    },
    {
      id: 2,
      name: 'Vanilla Cupcake',
      price: 150,
      image: vanillaCupcake,
      description: 'Light and fluffy vanilla cupcakes topped with creamy frosting.',
      nutrition: 'Calories: 200, Fat: 10g, Carbs: 30g, Protein: 2g',
      ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla'],
    },
    {
      id: 3,
      name: 'Red Velvet Cake',
      price: 700,
      image: redVelvetCake,
      description: 'A classic red velvet cake with a hint of cocoa and cream cheese frosting.',
      nutrition: 'Calories: 500, Fat: 25g, Carbs: 65g, Protein: 6g',
      ingredients: ['Flour', 'Sugar', 'Cocoa', 'Butter', 'Eggs', 'Cream Cheese'],
    },
    {
      id: 4,
      name: 'Lemon Tart',
      price: 500,
      image: lemonTart,
      description: 'A tangy lemon tart with a buttery crust and smooth lemon filling.',
      nutrition: 'Calories: 350, Fat: 15g, Carbs: 45g, Protein: 3g',
      ingredients: ['Flour', 'Sugar', 'Butter', 'Lemon Juice', 'Eggs'],
    },
    {
      id: 5,
      name: 'Blueberry Muffin',
      price: 250,
      image: blueberryMuffin,
      description: 'Moist muffins bursting with fresh blueberries.',
      nutrition: 'Calories: 220, Fat: 8g, Carbs: 35g, Protein: 3g',
      ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Blueberries'],
    },
  ];
  
  
  

const Products = () => {
  const addToCart = (product) => {
    // Implement add to cart functionality
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
