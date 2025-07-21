import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { IoDocument } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { FaList } from "react-icons/fa";

export default function MenuCustom() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }}>
      <MenuList >
        <MenuItem  sx={{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",gap:2}}>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary",fontWeight:"bold",fontSize:"20px"}} >
              Orders
          </Typography>
          <ListItemIcon >
            <FaList  sx={{width:"32px"}}></FaList>
          </ListItemIcon>
  
        </MenuItem>
        <MenuItem sx={{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",gap:2}}>
         

           <Typography  sx={{ color: "text.secondary",fontWeight:"bold",fontSize:"20px" }}>
            Personal Info
            </Typography>
            <ListItemIcon>
            <IoDocument></IoDocument>
             </ListItemIcon>

        </MenuItem>

        <MenuItem sx={{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end",gap:2}} >
          <Typography sx={{ color: "text.secondary", fontWeight:"bold",fontSize:"20px"}}>
             Logout 
          </Typography>
            <ListItemIcon>
            <IoLogOut></IoLogOut>
            </ListItemIcon>
 

        </MenuItem>
        <Divider />
      </MenuList>
    </Paper>
  );
}
