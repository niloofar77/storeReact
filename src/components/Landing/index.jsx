import { Box, Button, Typography } from "@mui/material";
import HeroSection from "../global/heroSection";
import ProductSection from "../productsSection";
import CustomTabs from "../global/customTabs";

export default function Landing() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column",gap:2 }}>
        <HeroSection></HeroSection>
        <Typography variant="h6" sx={{m:2}}>Great Deals on What You Love</Typography>
        <Typography variant="h6" sx={{color:"gray",m:1}}>
          Items similar to what you've browsed are on sale
        </Typography>
        <CustomTabs></CustomTabs>
        <ProductSection></ProductSection>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Typography variant="h6" sx={{color:"gray",m:1,flexGrow:1}}>
            TRENDING CATEGORIES
        </Typography>
        <Button href="#text-buttons">shopAll</Button>
        </Box>
   
        <ProductSection></ProductSection>


      </Box>
    </>
  );
}
