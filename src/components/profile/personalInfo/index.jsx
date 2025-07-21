import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function PersonalInfo() {
    return(
    <>
    <Grid container spacing={3}>
        <Grid item size={12}>
            <Typography variant="h4">Personal Info</Typography>
        </Grid>
        <Grid item size={12}>
            <TextField variant="outlined"label="Username" fullWidth>Username:</TextField>
        </Grid>
        <Grid item size={12}>
            <TextField variant="outlined" label="Password" fullWidth>Address:</TextField>
        </Grid>
        <Grid item size={12}>
            <TextField variant="outlined" label="PhoneNumber" fullWidth>PhoneNumber:</TextField>
        </Grid>
        <Grid item size={6}>
            <Button variant="contained" size="large">Save</Button>
        </Grid>
        </Grid>
   
    </>)
}