// import { Box } from "@mui/material";
// import hero1 from '@images/hero1.jpg';
// import SimpleImageSlider from "react-simple-image-slider";


// const images = [
//   { url: "store/src/assets/images/hero1.jpg" },
//   { url: "images/2.jpg" },
//   { url: "images/3.jpg" },
//   { url: "images/4.jpg" },
//   { url: "images/5.jpg" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
// ];

// export default function HeroSection() {

//     return(<>
//       <Box sx={{width:"100%",height:"500px",mt:4,display:"flex",justifyContent:"center"}}>
//         {/* <img src={hero1} height="100%" width="1420px"></img> */}
//         <div>
//       <SimpleImageSlider
//         width={1420}
//         height={500}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//       />
//     </div>

//       </Box>
//     </>)
// }
import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";

// Import your images
import hero1 from '@images/hero1.jpg'; // Adjust path based on your folder structure
import hero2 from '@images/hero2.jpg';

// Create an array of images using the imported images
const images = [
  { url: hero1 },
  {url:hero2}

];

export default function HeroSection() {
    return (
        <>
            <Box sx={{ width: "100%", height: "500px", mt: 4, display: "flex", justifyContent: "center" }}>
                <div>
                    <SimpleImageSlider
                        width={1420}
                        height={500}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </Box>
        </>
    );
}