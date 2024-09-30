import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are passionate about baking and delivering the finest quality baked goods to our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Bakery Street, Pune, MH 411004
            </Typography>
            <Typography variant="body2">
              Email: info@bake-o-stories.com
            </Typography>
            <Typography variant="body2">
              Phone: 999-999-9999
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" color="inherit">Facebook</Link>
            <br />
            <Link href="#" color="inherit">Instagram</Link>
            <br />
            <Link href="#" color="inherit">Twitter</Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © 2024 Bake-O-Stories. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
