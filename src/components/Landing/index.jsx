import { Box, Button, Chip, Typography } from "@mui/material";
import HeroSection from "../global/heroSection";
import ProductSection from "../productsSection";
import Features from "../features";
import BestBrands from "../bestBrands";

import { FiShoppingBag } from "react-icons/fi";
import { PiSneakerMoveBold } from "react-icons/pi";
import { LiaTshirtSolid } from "react-icons/lia";
import { TbSunglasses } from "react-icons/tb";
import { GiDiamondRing } from "react-icons/gi";

export default function Landing() {
  const categories = [
    { icon: <FiShoppingBag />, label: "Bags" },
    { icon: <PiSneakerMoveBold />, label: "Shoes" },
    { icon: <LiaTshirtSolid />, label: "Clothes" },
    { icon: <TbSunglasses />, label: "Accessories" },
    { icon: <GiDiamondRing />, label: "Jewelry" },
   
  ];
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <HeroSection></HeroSection>
        <Features></Features>
        <BestBrands></BestBrands>
        <Typography variant="h6" sx={{ m: 2 }}>
          Great Deals on What You Love
        </Typography>
        <Typography variant="h6" sx={{ color: "gray", m: 2 }}>
          Items similar to what you've browsed are on sale
        </Typography>
        {/* <CustomTabs></CustomTabs> */}
        <Typography variant="h4" sx={{ m: 2 }}>
          Newest Products
        </Typography>
        <ProductSection></ProductSection>
        <Typography variant="h4" sx={{ m: 2 }}>
          Categories
        </Typography>
        <Box
         sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        m: 2,}}
    >
      {categories.map((item, index) => (
        <Chip
          key={index}
          icon={item.icon}
          label={item.label}
          variant="outlined"
          sx={{
            borderRadius: "12px",
            px: 2,
            py: 1,
            fontSize: "14px",
            color: "black",
            borderColor: "black",
            "&:hover": {
              backgroundColor: "primary.light",
              color: "white",
              borderColor: "primary.light",
            },
          }}
        />
      ))}
        <ProductSection></ProductSection>
    </Box>

      </Box>
    </>
  );
}
