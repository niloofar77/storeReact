import {
    Box,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
    Card,
    CardContent,
    Stack
  } from "@mui/material";
  
  export default function CheckOut() {
      const cardData=[{
        Day:"Mon",
        date:10

    },{
        Day:"Sat",
        date:11
    },{
        Day:"Tue",
        date:12
    },{
        Day:"Fri",
        date:10
    }

]
    return (
      <Box sx={{ my: 10, px: 4 }}>
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item size={8}>
            <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Enter the Address
              </Typography>
              <TextField
                
                variant="outlined"
                fullWidth
                sx={{ mb: 3,mt:3 }}
                placeholder="nnnnnnnnnnnnnn"
                inputProps={{ readOnly: true }}
              />
              <Button variant="outlined">Add address</Button>
  
              <Divider sx={{ my: 2 }} />
  

              <Typography variant="h5" gutterBottom>
                Select Date and time
              </Typography>
              <Stack direction="row" spacing={2}>
            
                {cardData.map((item, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{
                      flex: 1,
                      textAlign: "center",
                      cursor: "pointer",
                      '&:hover': {
                        backgroundColor: "#f0f0f0"
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="body2">{item.Day}</Typography>
                      <Typography variant="h6">{item.date}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
  
              <Button variant="contained" fullWidth sx={{ mt: 4 }}>
                Save
              </Button>
            </Box>
          </Grid>
  
          {/* Right Section */}
          <Grid item size={4}>
            <Box sx={{ border: "1px solid #ccc", borderRadius: 2, p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
  
              <Typography variant="body1" sx={{ mb: 1 }}>
                Total Items: <strong>5</strong>
              </Typography>
              <Typography variant="body1">
                Total Price: <strong>$780</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
  