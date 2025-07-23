
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaPlusCircle } from "react-icons/fa";
import { Rating } from '@mui/material';
import { useCart } from '../../../contexts/CartContext';
import { useId } from 'react';
import { Link } from 'react-router';
import { FaHeart } from "react-icons/fa";



export default function ProductItem({ name, price, imageUrl, rating, id,quantity}) {
  
  const {addToCart}=useCart();
 
  const Product={ name, price, imageUrl, rating,id,quantity}
  console.log(id)
  return (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Card sx={{ width: "400px", m: 3 }} variant='outlined'>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={name} 
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
          <Rating  readOnly  defaultValue={rating}>
          
          </Rating>
        </div>
        <IconButton sx={{color:"black"}} onClick={()=>addToCart(Product)}>
          <FaPlusCircle />
        </IconButton>
        <IconButton sx={{color:"black"}} onClick={()=>addToLovedItems(Product)}>
          <FaHeart />
        </IconButton>

      

      </CardContent>
    </Card>
    </Link>
  );
}