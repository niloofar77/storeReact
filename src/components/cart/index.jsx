
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Box, Button, Card, CardContent, Typography, Grid } from '@mui/material';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <Card variant="outlined" sx={{ padding: 2, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            Cart is empty
          </Typography>
        ) : (
          <Box  sx={{display:"flex",flexDirection:"column",gap:2}} spacing={2}>
            {cartItems.map((item) => (
              <Box   key={item.id}>
                <Box 
                  sx={{
                    border: '1px solid #ccc',
                    borderRadius: 1,
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <img src={item.imageUrl} width="64px"></img>
                  <Typography variant="body1">
                    {item.name}
                  </Typography>
                  <Typography variant="body1">
                    {item.price} $

                  </Typography>
                  <Typography variant="body1">
                    {item.id} $
                    
                  </Typography>
                  <img src={item.imgUrl}></img>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    sx={{m:2}}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {cartItems.length > 0 && (
          <Box marginTop={2}>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
