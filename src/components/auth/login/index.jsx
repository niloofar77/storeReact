import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';


export default function Login() {
    const navigate=useNavigate()
    const handleSignup=()=>{
            navigate("/signUp")
    }
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
            Login

        </Typography>
        <Typography variant="body1" sx={{ mb: 3,color:"gray" }}>
          Please enter the information required to sign up.
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 3 }} type="password" />

        
        <Button variant="contained" fullWidth size="large">
            Login
        </Button>
        <Typography variant="body1" sx={{ mb: 2,mt:2 }}>
            Don't have an account?
                <Button onClick={handleSignup}>Sign up</Button>
        </Typography>
      </Paper>
    </Box>
  );
}
