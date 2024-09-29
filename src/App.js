import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { CartProvider } from './CartContext';
import chocolateCake from './assets/chocolate-cake.jpg';
import vanillaCupcake from '../assets/vanilla-cupcake.jpg';
import redVelvetCake from '../assets/red-velvet-cake.jpg';
import lemonTart from '../assets/lemon-tart.jpg';
import blueberryMuffin from '../assets/blueberry-muffin.jpg';
import Subscribe from './pages/Subscribe';
import Checkout from './pages/Checkout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown
      light: '#A0522D', // Sienna (slightly lighter brown)
      dark: '#5B3A29', // Dark Brown
      contrastText: '#FFFFFF', // White text on primary color
    },
    secondary: {
      main: '#F0E68C', // Khaki (Light Yellow)
      light: '#FFF8DC', // Cornsilk (lighter yellow)
      dark: '#D2B48C', // Tan (darker yellow/light brown)
      contrastText: '#333333', // Dark gray text on secondary color
    },
    background: {
      default: '#FFF8DC', // Cornsilk light background
      paper: '#D2B48C', // Tan for paper elements
    },
    text: {
      primary: '#333333', // Dark gray for primary text
      secondary: '#5B3A29', // Dark brown for secondary text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      color: '#5B3A29', // Dark brown for main headings
    },
    h2: {
      color: '#8B4513', // Saddle brown for subheadings
    },
    body1: {
      color: '#333333', // Dark gray for body text
    },
    body2: {
      color: '#333333', // Dark brown for secondary body text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0E68C', // Light yellow background
          color: '#8B4513', // Brown text
          '&:hover': {
            backgroundColor: '#D2B48C', // Darker yellow on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          border: '1px solid #D2B48C', // Light brown border
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#8B4513', // Saddle Brown
          color: '#F0E68C', // Light Yellow text
        },
      },
    },
  },
});

const products = [
  {
    id: 1,
    name: 'Chocolate Cake',
    price: 25.99,
    image: chocolateCake,
    description: 'A rich and moist chocolate cake with a velvety texture.',
    nutrition: 'Calories: 450, Fat: 20g, Carbs: 60g, Protein: 5g',
    ingredients: ['Flour', 'Sugar', 'Cocoa', 'Butter', 'Eggs'],
  },
  {
    id: 2,
    name: 'Vanilla Cupcake',
    price: 3.99,
    image: vanillaCupcake,
    description: 'Light and fluffy vanilla cupcakes topped with creamy frosting.',
    nutrition: 'Calories: 200, Fat: 10g, Carbs: 30g, Protein: 2g',
    ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Vanilla'],
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    price: 30.99,
    image: redVelvetCake,
    description: 'A classic red velvet cake with a hint of cocoa and cream cheese frosting.',
    nutrition: 'Calories: 500, Fat: 25g, Carbs: 65g, Protein: 6g',
    ingredients: ['Flour', 'Sugar', 'Cocoa', 'Butter', 'Eggs', 'Cream Cheese'],
  },
  {
    id: 4,
    name: 'Lemon Tart',
    price: 15.99,
    image: lemonTart,
    description: 'A tangy lemon tart with a buttery crust and smooth lemon filling.',
    nutrition: 'Calories: 350, Fat: 15g, Carbs: 45g, Protein: 3g',
    ingredients: ['Flour', 'Sugar', 'Butter', 'Lemon Juice', 'Eggs'],
  },
  {
    id: 5,
    name: 'Blueberry Muffin',
    price: 2.99,
    image: blueberryMuffin,
    description: 'Moist muffins bursting with fresh blueberries.',
    nutrition: 'Calories: 220, Fat: 8g, Carbs: 35g, Protein: 3g',
    ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Blueberries'],
  },
];


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/" element={<Products products={products} />} />
              <Route path="/products/:id" element={<ProductDetails products={products} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;