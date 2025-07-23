import * as React from 'react';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { IoTrendingUp, IoPricetag, IoCash } from "react-icons/io5";

export default function PositionedMenu() {
 return (
 <Paper 
   elevation={3} 
   sx={{ 
     width: 320, 
     maxWidth: "100%", 
     borderRadius: 2, 
     boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
     border:"1px solid #E0E0E0"
   }}
 >
   <MenuList>
     <MenuItem 
       sx={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         '&:hover': {
           backgroundColor: 'rgba(0,0,0,0.04)'
         }
       }}
     >
       <ListItemIcon>
         <IoTrendingUp size={24} color="#1976d2" />
       </ListItemIcon>
       <Typography 
         variant="body1" 
         sx={{ 
           color: "text.primary",
           fontWeight: 600,
           flexGrow: 1,
           textAlign: 'left',
        

         }}
       >
         Most Popular
       </Typography>
     </MenuItem>

     <MenuItem 
       sx={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         '&:hover': {
           backgroundColor: 'rgba(0,0,0,0.04)'
         }
       }}
     >
       <ListItemIcon>
         <IoPricetag size={24} color="#4caf50" />
       </ListItemIcon>
       <Typography 
         variant="body1" 
         sx={{ 
           color: "text.primary",
           fontWeight: 600,
           flexGrow: 1,
           textAlign: 'left',
          

         }}
       >
         Cheapest
       </Typography>
     </MenuItem>

     <MenuItem 
       sx={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         '&:hover': {
           backgroundColor: 'rgba(0,0,0,0.04)'
         }
       }}
     >
       <ListItemIcon>
        <IoCash size={24} color="#ff9800" />
       </ListItemIcon>
       <Typography  variant="body1" sx={{ color: "text.primary",fontWeight: 600,flexGrow: 1,textAlign: 'left'}}>
          Priciest
       </Typography>
     </MenuItem>

     <Divider light />
   </MenuList>
 </Paper>
 );
}