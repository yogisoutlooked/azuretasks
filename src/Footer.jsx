import {
  BottomNavigation,
  BottomNavigationAction,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SpeedDialIcon from "@mui/material/SpeedDialIcon/SpeedDialIcon";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";

function Footer() {
  return (
    <div className="">
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", height: "60px", bottom: 0 }}>

        <BottomNavigationAction icon={<HomeIcon />} widthX='2px' />
        <BottomNavigationAction icon={<FavoriteIcon />} />
      
          <SpeedDial
            ariaLabel="Navigation"
            sx={{
              position: "absolute",
              bottom: 10,
              borderRadius: "80px",
              border: "15px solid white",
              height: "65px",
            }}
            icon={<SpeedDialIcon />}>
            <SpeedDialAction icon={<CopyIcon />} />
          </SpeedDial>
       

        <BottomNavigationAction icon={<PersonIcon />} />
        <BottomNavigationAction icon={<FavoriteIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Footer;
