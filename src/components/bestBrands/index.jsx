import { Box, Typography } from "@mui/material";

import addidas from '@images/1.png';
import aldo from '@images/2.png';
import nike from '@images/nike.png';
import zara from '@images/Zara.png';
import Air_Jordan from '@images/Air_Jordan.png';
import Clavin from '@images/Calvin.png';
import Louis from '@images/Louis.png';
import Ysl from '@images/Ysl.png';
export default function BestBrands() {
   

    return(<>
        <Box sx={{mr:2}}>
            <Typography sx={{fontWeight:"bold",m:2}} variant="h5">Brands</Typography>
            <Box sx={{display:"flex",flexDirection:"row",gap:27}}>
            <img src={addidas} alt="Logo" style={{ height: 64}} />
            <img src={nike} alt="Logo" style={{ height: 64}} />
            <img src={Air_Jordan} alt="Logo" style={{ height: 64}} />
            <img src={Louis} alt="Logo" style={{ height: 64}} />
            <img src={Ysl} alt="Logo" style={{ height: 64}} />

            </Box>

        </Box>
    
    </>)
}