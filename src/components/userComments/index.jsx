import { Typography,Box } from "@mui/material";
import { Rating } from '@mui/material';
export default function UserComment({name,date,detail,rating}) {

    return(<>
    
        <Box sx={{display:"flex",flexDirection:"column",gap:2,border:"2px solid black",mx:1,p:3,my:5}}>
            <Box  sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
             <Typography variant="h5">{name}</Typography>
                <Typography variant="h6">{date}</Typography>
           </Box>
    
            <Typography variant="body1">{detail}</Typography>
            <Rating  readOnly   defaultValue={rating}></Rating>


        </Box>
    </>)
}
