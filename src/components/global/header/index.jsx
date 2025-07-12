// import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button, Divider } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import logo from '@images/react.svg';
import { CustomAppBar } from './StyledComponent';
import SearchBar from '../searchBar';

export default function Header() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // handle search/filter here
  };

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <CustomAppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 32 }} />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <SearchBar value={query} onChange={handleSearch} />
          </Box>

          <Box>
            <IconButton color="inherit" aria-label="cart">
              <LocalGroceryStoreIcon />
            </IconButton>
            <Button variant='outlined' sx={{ color: "black" }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </CustomAppBar>

      <Divider sx={{ my: 1 }} /> {/* Add Divider with margin on y-axis */}

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
                color: 'primary.main', // Use a primary color on hover
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