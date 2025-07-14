import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "16px",
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
<Box sx={{ display: "flex", flexDirection: "row", gap: 6 }}>
  {/* Column 1 */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Typography variant="body1">About us</Typography>
    <Typography variant="body1">Blog</Typography>
    <Typography variant="body1">Contact us</Typography>
  </Box>

  {/* Column 2 */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Typography variant="body1">Woman</Typography>
    <Typography variant="body1">Kids</Typography>
    <Typography variant="body1"> Men</Typography>
  </Box>

  {/* Column 3 */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    <Typography variant="body1">Bags</Typography>
    <Typography variant="body1">Shoes</Typography>
    <Typography variant="body1"> Clothes</Typography>
  </Box>
</Box>

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
