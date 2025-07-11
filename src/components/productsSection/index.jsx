
import React, { useState } from 'react';
import { Box, IconButton } from "@mui/material";
import { mockData } from "../../data";
import ProductItem from "../product/Item";

import { LuSquareArrowRight, LuSquareArrowLeft } from "react-icons/lu";

export default function ProductSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3 


    const totalPages = Math.ceil(mockData.length / itemsPerPage);


  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return mockData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <>



     <Box 
        sx={{
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: 2, 
          width: "1420px"
        }}
      >


        <IconButton onClick={handlePrevPage} disabled={totalPages <= 1}  sx={{m:2}}> 
          <LuSquareArrowLeft />
        </IconButton>

        <Box 
          sx={{
            display: "flex", 
            gap: 2, 
            overflowX: "auto", 
           
          }}
        >
          {getCurrentPageItems().map((item) => (
            <ProductItem 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              imageUrl={item.imageUrl} 
              rating={item.rating}
            />
          ))}
        </Box>

        <IconButton onClick={handleNextPage} disabled={totalPages <= 1} sx={{m:2}} >
          <LuSquareArrowRight />
        </IconButton>
      </Box>
    </>
  );
}
