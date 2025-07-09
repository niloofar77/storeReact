import { Box, Card, Typography } from "@mui/material";
import logo from '@images/react.svg';
import { IoIosDocument } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { TbDiscountFilled } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";

export default function Features() {
    return (
        <>
        <Box  sx={{display:"flex",flexDirection:"row"}}>
        <Card variant="outlined" sx={{ width: "300px", m: 2, p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Free Shipping on $59+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Spend $59 and we'll cover economy shipping
                    </Typography>
                </Box>
               <MdLocalShipping size={48}></MdLocalShipping>
            </Box>
        </Card>
        <Card variant="outlined" sx={{ width: "300px", m: 2, p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Bulk discounts on $80+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Save more when you stock up on your favorites.
                    </Typography>
                </Box>
                <TbDiscountFilled size={48}></TbDiscountFilled>
            </Box>
        </Card>
        <Card variant="outlined" sx={{ width: "300px", m: 2, p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Buy now, pay later
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Blanks now, pay later – flexible payments available.
                    </Typography>
                </Box>
              
                <FaCreditCard  size={48}></FaCreditCard>
              
                
            </Box>
        </Card>
        <Card variant="outlined" sx={{ width: "300px", m: 2, p: 2, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center",gap:2 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    7% Off Coupon
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Sign up for our newsletter to get exclusive deals and important news.
                    </Typography>
                </Box>
                <IoIosDocument size={64}></IoIosDocument>
            </Box>
        </Card>
        </Box>
        </>


    );
}