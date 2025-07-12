// import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Header from "../../components/global/header";
// import Footer from "../../components/global/footer";


// export default function PublicLayout() {
//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",    
//         flexDirection:"column",
       
//       }}
//     >
//        <Header></Header>
//       <Box
//         sx={{
//           width: "1420px",
//           backgroundColor:"#E8E8E8",
//           flexGrow:1,
//           display: "flex",
//           justifyContent:"center",
//           height: "100%", 
//         }}
//       >
         
//           <main>
//           <Outlet />
//           </main>
     
//       </Box>
//       <Footer></Footer>
//     </Box>
//   );
// }
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../components/global/header";
import Footer from "../../components/global/footer";

export default function PublicLayout() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          width: "1430px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#E8E8E8",
          margin: "0 auto", // Center the inner box
        }}
      >
        <main style={{ flexGrow: 1 }}> 
          <Outlet />
        </main>
      </Box>
      <Footer />
    </Box>
  );
}