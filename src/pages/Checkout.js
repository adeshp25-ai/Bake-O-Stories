import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const calculateTaxes = () => (totalPrice * 0.1).toFixed(2);
  const calculateShipping = () => (5.00).toFixed(2);
  const finalPrice = (parseFloat(totalPrice) + parseFloat(calculateTaxes()) + parseFloat(calculateShipping())).toFixed(2);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: { base: { fontSize: '16px', color: '#424770' } } }} />
      <Button variant="contained" color="primary" type="submit" disabled={!stripe} sx={{ mt: 3 }}>
        Pay ${finalPrice}
      </Button>
    </form>
  );
};

const Checkout = () => {
  const { cart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const calculateTaxes = () => (totalPrice * 0.1).toFixed(2);
  const calculateShipping = () => (5.00).toFixed(2);
  const finalPrice = (parseFloat(totalPrice) + parseFloat(calculateTaxes()) + parseFloat(calculateShipping())).toFixed(2);

  return (
    <Container maxWidth="lg" sx={{ my: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Checkout
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>Shipping Information</Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="Email" variant="outlined" fullWidth type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="Phone" variant="outlined" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="Address" variant="outlined" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="City" variant="outlined" fullWidth value={city} onChange={(e) => setCity(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="State" variant="outlined" fullWidth value={state} onChange={(e) => setState(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="Zip Code" variant="outlined" fullWidth value={zipCode} onChange={(e) => setZipCode(e.target.value)} sx={{ mb: 2 }} />
              <TextField label="Delivery Date" variant="outlined" fullWidth type="date" InputLabelProps={{ shrink: true }} value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} sx={{ mb: 2 }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="right">${totalPrice}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Taxes</TableCell>
                    <TableCell align="right">${calculateTaxes()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Shipping</TableCell>
                    <TableCell align="right">${calculateShipping()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}><strong>Total</strong></TableCell>
                    <TableCell align="right"><strong>${finalPrice}</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Stripe Payment Form */}
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>

          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
