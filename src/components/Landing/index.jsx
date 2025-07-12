import { Box, Button, Typography } from "@mui/material";
import HeroSection from "../global/heroSection";
import ProductSection from "../productsSection";
import CustomTabs from "../global/customTabs";
import Features from "../features";
import BestBrands from "../bestBrands";
import logo from '@images/react.svg';

export default function Landing() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column",gap:2 }}>
        <HeroSection></HeroSection>
        <Features></Features>
        <BestBrands></BestBrands>
        <Typography variant="h6" sx={{m:2}}>Great Deals on What You Love</Typography>
        <Typography variant="h6" sx={{color:"gray",m:2}}>
          Items similar to what you've browsed are on sale
        </Typography>
        {/* <CustomTabs></CustomTabs> */}
        <Typography variant="h4" sx={{m:2}}>Newest Products</Typography>
        <ProductSection></ProductSection>
          <Typography variant="h4" sx={{m:2}}>Categories</Typography>
          <Box sx={{display:"flex",direction:"column"}}>
            <img></img>
            <Typography variant="h6" sx={{color:"gray",m:2}}>
              Bags
            </Typography>
             


          </Box>
    

       


      </Box>
    </>
  );
}
