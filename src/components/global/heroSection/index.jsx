

import { Box } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";


import hero1 from '@images/hero1.jpg';
import hero2 from '@images/hero2.jpg';


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