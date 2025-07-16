import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import { mockData } from "../../data";
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
export default function ProductDetails() {
  const { id } = useParams();
  const product = mockData.find((p) => p.id === Number(id));
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null);

  if (!product) return <Typography variant="h5">Product not found</Typography>;

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setZoomPosition({ x, y });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 16, p: 4 }}>
      {/* Product Image with Hover Zoom */}
 
  

      <Card variant="outlined" sx={{width:"200px", height:"200px",justifyContent:"center",alignContent:"center"}}>
        <CardContent sx={{justifyContent:"center",display:"flex",flexDirection:"column",gap:4}}>
      
            <Typography variant="h4">{product.price}</Typography>
            <Typography variant="body1">{product.detail}</Typography>
            <Button variant="contained" startIcon={<AddIcon />}>Add to cart</Button>
        </CardContent>
      </Card>
      <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
        <Typography variant="h3">{product.name}</Typography>
        <Rating  readOnly  defaultValue={product.rating}></Rating>
        <Button variant="outlined" startIcon={<FavoriteIcon />}>Add to WishList</Button>
      </Box>
    
      <Box
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{ position: "relative" }}
      >
        <Card
          sx={{
            width: 350,
            height: 350,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={product.imageUrl}
            alt={product.name}
            ref={imageRef}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              pointerEvents: "none",

            }}
          />
        </Card>

        {/* Zoom window */}
        {isHovering && (
          <Box
            sx={{
              position: "absolute",
              left: "110%",
              top: 0,
              width: 200,
              height: 200,
              border: "1px solid #ccc",
              overflow: "hidden",
              zIndex: 10,
              backgroundColor: "#fff",
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src={product.imageUrl}
              alt="zoom"
              sx={{
                position: "absolute",
                left: `-${zoomPosition.x * 2 - 100}px`,
                top: `-${zoomPosition.y * 2 - 100}px`,
                width: 700,
                height: 700,
                objectFit: "contain",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
