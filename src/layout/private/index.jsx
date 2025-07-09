
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
    return(<>
        <Box sx={{backgroundColor:"gray",width:"1420px",display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
            <Outlet/>
        </Box>
    </>)
}