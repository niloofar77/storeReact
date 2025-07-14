import { Box, Button, Paper, TextField, Typography } from '@mui/material';

export default function SignUp() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
      }}
    >
      <Paper elevation={3} sx={{ width: 384, p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <Typography variant="body1" sx={{ mb: 3,color:"gray" }}>
          Please enter the information required to sign up.
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 3 }} type="password" />
        <TextField label="FirstName" variant="outlined" fullWidth sx={{ mb: 3 }}  />
        <TextField label="LastName" variant="outlined" fullWidth sx={{ mb: 3 }}  />
        
        <Button variant="contained" fullWidth size="large">
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
}
