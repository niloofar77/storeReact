import { IoFilterSharp } from "react-icons/io5";
import { Box, Card, Grid, IconButton, Typography,Select,MenuItem } from "@mui/material";
import { mockData } from "../../data";
import ProductItem from "../product/Item";
import { useState } from "react";


export default function Category() {
    const[showMenu,setShowMenu]=useState(false)
    
 

    const handleMenu=()=>{ 
        setShowMenu(!showMenu)
    }

    return(
    
    <>
   
    <Grid container spacing={2 } sx={{mt:4,mb:4}}>
         <Grid size={12}>
            <IconButton onClick={handleMenu} >
            <IoFilterSharp></IoFilterSharp>
            </IconButton>
        </Grid>
        {mockData.map((item)=>{
           return(
            <Grid size={4} key={item.id}>
              <ProductItem  key={item.id} name={item.name}  price={item.price} imageUrl={item.imageUrl} rating={item.rating}  id={item.id} />
            </Grid> ) 
                
            

            })

        }
    </Grid>
    </>)
}