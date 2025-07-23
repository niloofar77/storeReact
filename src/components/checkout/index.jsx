import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";

export default function CheckOut() {

    return(<>
    <Grid container spacing={3} sx={{my:20}}>
        <Grid size={8} sx={{border:"1px solid gray",p:3}}>
            <Grid size={12}> 
                <Typography variant="h4">Enter the address</Typography> 
            </Grid>
            <Grid size={12}> 
                <TextField variant="outlined" fullWidth>address</TextField>
            </Grid>
            <Grid size={12} sx={{mt:2}}> 
                <Divider></Divider>
            
            </Grid>
            <Grid size={12}> 
                <Typography variant="h4">Select time </Typography> 
            </Grid>
            <Grid size={12}> 
                <TextField variant="outlined" fullWidth>time</TextField>
            </Grid>
            <Grid size={12}> 
                <Button variant="contained" sx={{my:2}}> Save</Button>
            </Grid>
        </Grid>
        <Grid size={4} sx={{border:"1px solid gray"}}>
            <Grid size={12}> 
                <Typography variant="h4" fullWidth>Total price:780$</Typography>
            </Grid>
            

        </Grid>

           
     </Grid>
            



    </>)
}