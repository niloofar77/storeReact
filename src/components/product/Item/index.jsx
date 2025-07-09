// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { FaPlusCircle } from "react-icons/fa";
// import { IconButton } from '@mui/material';

// export default function ProductItem({name,price,imageUrl}) {
//   return (
//     <Card sx={{width:"400px",m:3}}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={imageUrl}
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//              {price}
//         </Typography>
//         <IconButton >
//             <FaPlusCircle></FaPlusCircle>
//         </IconButton>
//       </CardContent>

//     </Card>
//   );
// }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaPlusCircle } from "react-icons/fa";

export default function ProductItem({ name, price, imageUrl }) {
  return (
    <Card sx={{ width: "400px", m: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={name} // Use the name for the title
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
        </div>
        <IconButton sx={{color:"black"}}>
          <FaPlusCircle />
        </IconButton>
      </CardContent>
    </Card>
  );
}