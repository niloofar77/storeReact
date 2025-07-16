import { Typography,Box } from "@mui/material";
import { Rating } from '@mui/material';
export default function UserComments() {

    return(<>
        <Box sx={{display:"flex",flexDirection:"column",gap:2,border:"2px solid black"}}>
            <img />
            <Typography variant="h5">Niloofar mousavi</Typography>
            <Typography variant="body1">Niloofar mousavifffffffffffffffffffffffffffffffffffffff</Typography>
            <Rating  readOnly  defaultValue={rating}></Rating>


        </Box>
    </>)
}
