import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black", // MUI primary color
        color: 'white',
        padding: '16px',
        textAlign: 'center',
        position: 'relative', // Position relative for proper stacking
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
      <Box>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        |
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;