import React from 'react';
import { Container, Typography, Paper, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Our Shopping Cart
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our Shopping Cart! We offer a seamless shopping experience with a wide variety of products available at your fingertips.
        </Typography>
        <Divider style={{ margin: '20px 0' }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to provide the best online shopping experience for our customers. We strive to offer a wide selection of products, competitive prices, and exceptional customer service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              Key Features
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Wide selection of products" />
              </ListItem>
              <ListItem>
                <ListItemText primary="User-friendly interface" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Secure payment options" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Fast and reliable shipping" />
              </ListItem>
              <ListItem>
                <ListItemText primary="24/7 customer support" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider style={{ margin: '20px 0' }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or need assistance, please don't hesitate to contact our customer support team at support@shoppingcart.com or call us at 1-800-123-4567.
        </Typography>
      </Paper>
    </Container>
  );
};


export default About;