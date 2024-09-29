import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store or send the data to a backend
    console.log('Subscribed:', { name, email });
    alert('Thank you for subscribing!');
  };

  return (
    <Container maxWidth="sm" sx={{ my: 8 }}>
      <Typography variant="h2" gutterBottom align="center">
        Subscribe to Our Newsletter
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};

export default Subscribe;
