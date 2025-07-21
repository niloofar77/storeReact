
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Chip,
  Divider
} from "@mui/material";
import { useParams } from "react-router-dom";
import { mockData } from "../../data";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import { useCart } from "../../contexts/CartContext";
import NotFound from "../notFound";

export default function ProductDetails() {
  const { id } = useParams();
  const product = mockData.find((p) => p.id === Number(id));
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product?.color || '');
  const{cartItems,lovedItems,addToLovedItems,addToCart}=useCart();

  const [quantity, setQuantity] = useState(1);
  const imageRef = useRef(null);

  if (!product) return (
    <>
    <NotFound></NotFound>
    </>
  )

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setZoomPosition({ x, y });
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type==="decrease") {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: "center", 
        gap: 4, 
        p: 4, 
        maxWidth: 1200, 
        margin: "0 auto",
        mt:25,
        mb:25
      }}
    >
      {/* Image Section with Zoom */}
      <Box
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        sx={{ position: "relative" }}
      >
        <Card
          sx={{
            width: { xs: 300, md: 450 },
            height: { xs: 300, md: 450 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: 3
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

        {/* Zoom Preview */}
        {isHovering && (
          <Box
            sx={{
              position: "absolute",
              left: "110%",
              top: 0,
              width: 250,
              height: 250,
              border: "2px solid",
              borderColor: "primary.light",
              borderRadius: 2,
              overflow: "hidden",
              zIndex: 10,
              boxShadow: 4,
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

      {/* Product Details */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
        {/* Product Name and Rating */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 600, 
            color: 'primary.main',
            marginBottom: 1 
          }}
        >
          {product.name}
        </Typography>

        <Rating 
          value={product.rating} 
          precision={0.5}
          readOnly
          sx={{ 
          
            marginBottom: 2 
          }}
        />

        {/* Price */}
        <Typography 
          variant="h4" 
          color="primary" 
          sx={{ fontWeight: 700, marginBottom: 2 }}
        >
          ${product.price}
        </Typography>

        {/* Product Description */}
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ marginBottom: 2 }}
        >
          {product.detail}
        </Typography>

        {/* Color Selection */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
          <Typography variant="subtitle1">Color:</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
         
              <Box
                key={product.color}
                onClick={() => setSelectedColor(color)}
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: product.color,
                  border: selectedColor === product.color ? '2px solid black' : '1px solid grey',
                  cursor: 'pointer',
                  transform: selectedColor === product.color ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              />
        
          </Box>
        </Box>

        {/* Quantity Selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
          <Typography variant="subtitle1">Quantity:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button 
              variant="outlined" 
              size="small" 
              onClick={() => handleQuantityChange('decrease')}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <Typography>{quantity}</Typography>
            <Button 
              variant="outlined" 
              size="small" 
              onClick={() => handleQuantityChange('increase')}
            >
              +
            </Button>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Button 
            variant="contained" 
            color="primary"
            startIcon={<AddIcon />}
            sx={{
              padding: '10px 20px',
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
            onClick={()=>addToCart(product)}
          >
            Add to Cart
          </Button>
          <Button 
            variant="outlined" 
            color="secondary"
            startIcon={<FavoriteIcon />}
            sx={{
              padding: '10px 20px',
              borderRadius: 2,
              textTransform: 'none'
            }}
            onClick={()=>addToLovedItems(product)}
          >
            Add to Wishlist
          </Button>
        </Box>

        {/* Additional Information */}
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Chip 
            icon={<LocalShippingIcon />} 
            label="Free Shipping" 
            color="success" 
            variant="outlined" 
          />
          <Chip 
            icon={<SecurityIcon />} 
            label="Secure Payment" 
            color="primary" 
            variant="outlined" 
          />
        </Box>
      </Box>
    </Box>
  );
}