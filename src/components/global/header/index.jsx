
import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button, Divider } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import logo from '@images/react.svg';
import { CustomAppBar } from './StyledComponent';
import SearchBar from '../searchBar';
import { useCart } from '../../../contexts/CartContext';
import { useNavigate } from 'react-router';

import { FaHeart } from "react-icons/fa";

export default function Header() {
  const [query, setQuery] = useState('');
  const{cartItems,lovedItems,addToLovedItems}=useCart();
  const navigate=useNavigate()

  const handleSearch = (e) => {
    setQuery(e.target.value);
   
  };
  const handleNavigate=()=>{
    navigate("/cart")

  }
  const handleLogin=()=>{
    navigate("/login")
  }
  const handleHome=()=>{
    navigate("/")
  }


  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <CustomAppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 32 }}  onClick={handleHome}/>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <SearchBar value={query} onChange={handleSearch} />
          </Box>

          <Box>
            <IconButton color="inherit" aria-label="cart" onClick={handleNavigate}>
              <LocalGroceryStoreIcon />
            {cartItems.length}
            </IconButton>
            <Button onClick={handleLogin} variant='outlined' >
              Login
            </Button>
            <IconButton color="inherit" aria-label="cart" onClick={handleNavigate}>
              <FaHeart />
            {lovedItems.length}
            </IconButton>

          </Box>
        </Toolbar>
      </CustomAppBar>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ display: "flex", flexDirection: "row", gap: 6, justifyContent: "center", py: 1 }}>
        {['Woman', 'Man', 'Shoes',"Sale","New","Kids"].map((item) => (
          <Typography
            key={item}
            variant="h6"
            sx={{
              cursor: 'pointer',
              color: '#262626',
      
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'primary.main', 
                transform: 'scale(1.05)'
              }
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}