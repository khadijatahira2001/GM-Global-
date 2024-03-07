import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,

  useMediaQuery,useTheme,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DrawerComp from "./DrawerComp";
const PAGES = ["Home","About Us","Services","Projects","Contact Us"];
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }} position="fixed" style={{ top: 0 }}>
        <Toolbar>
           
       {  /* <EngineeringIcon /> */}
         
          {/* Add your image source below */}
          <img src="/images/LOGO.png" alt="Logo" style={{ width: 80, height: 60 }} />
       
          <Typography sx={{fontSize:'2rem',paddingLeft:"5%", color:"#14b8a6"}}>GM Global</Typography>
          {
                isMatch ?
                
                 (
                    <>
                   
                    <DrawerComp/>

                    </>
                ) :
                ( 
                    <>
                    <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
                {
                    PAGES.map((page,index)=>(
                        <Tab key={index} label={page} />
                    ))
                }

            
          </Tabs>
</>
                )
            }
        </Toolbar>
        
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
