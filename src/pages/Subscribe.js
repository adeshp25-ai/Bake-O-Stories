import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "newsletter"), {
        email: email,
        name: name,
        timestamp: new Date()
      });
      console.log("Subscribed successfully!");
      setEmail("");
      setName("");
      setSubscribed(true);
    } catch (error) {
      console.error("Error subscribing: ", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ my: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Subscribe to Our Newsletter
      </Typography>
      {subscribed ? (
        <Typography variant="h6" align="center" color="primary">
          Thank you for subscribing!
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Subscribe
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Subscribe;
