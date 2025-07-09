import { Box } from "@mui/material";
import hero1 from '@images/hero1.jpg';
export default function HeroSection() {

    return(<>
      <Box sx={{width:"100%",height:"500px",mt:4,display:"flex",justifyContent:"center"}}>
        <img src={hero1} height="100%" width="1420px"></img>

      </Box>
    </>)
}
