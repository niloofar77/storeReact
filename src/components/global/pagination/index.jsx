
import React from "react";
import {
  Pagination,
  Box,
} from "@mui/material";

export default function GenericPagination({
  currentPage,changePageHandler,
  color,totalPages,

}) {
  


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={3}
      flexWrap="wrap"
      width="100%"
      gap={2}
    >


      <Pagination
        count={totalPages}
        color={color}
        page={currentPage + 1}
        onChange={changePageHandler} 
        size="large"
      />
    </Box>
  );
}

