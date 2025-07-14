import { Box, Typography, Link, Divider } from "@mui/material";
import logo from '@images/react.svg'
export default function Footer() {
  return (
    <>
    <Divider></Divider>
    <Box sx={{px: 4,py: 6,mt: 8}}>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 4,
      mb: 4,
    }}
  >

    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h6">Company</Typography>
      <Link href="#" color="inherit" underline="hover">About Us</Link>
      <Link href="#" color="inherit" underline="hover">Blog</Link>
      <Link href="#" color="inherit" underline="hover">Contact Us</Link>
    </Box>

  
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h6">Categories</Typography>
      <Link href="#" color="inherit" underline="hover">Women</Link>
      <Link href="#" color="inherit" underline="hover">Kids</Link>
      <Link href="#" color="inherit" underline="hover">Men</Link>
    </Box>

 
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h6">Products</Typography>
      <Link href="#" color="inherit" underline="hover">Bags</Link>
      <Link href="#" color="inherit" underline="hover">Shoes</Link>
      <Link href="#" color="inherit" underline="hover">Clothes</Link>
    </Box>

    <Box sx={{ maxWidth: 300 }}>
      <img src={logo} alt="Logo" width="64px" height="64px" />
      <Typography variant="body2" mt={1}>
        Welcome to our eCommerce store — your one-stop destination for
        discovering top-quality products at unbeatable prices. Whether you're
        shopping for fashion, electronics, or home essentials, we've got you
        covered.
      </Typography>
    </Box>
  </Box>


  <Box sx={{ borderTop: "1px solid gray", pt: 2, textAlign: "center" }}>
    <Typography variant="body2">
    This is site is made by Niloofar Mousavi. All rights reserved.  
    </Typography>
    <Box mt={1}>
    © {new Date().getFullYear()}

    </Box>
  </Box>
</Box>

    
    
    </>
  );
};


