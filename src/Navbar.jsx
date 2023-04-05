import { Grid } from "@mui/material";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import styled from "@emotion/styled";
import New from "./New";

function Navbar() {
  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      right: -1,
      top: 11,
      fontSize: "8px",
      border: "2px solid black",
      padding: "0 0px",
    },
  }));

  return (
    <div className=" bg-white">
      <div className="flex mb-5 pt-5 px-2 ">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img className="" src='menu.png' />
          </Grid>

          <Grid item xs={8}>
            <div className="font-bold text-[16px] flex  h-full justify-center items-center  ">
             <h1>Home</h1> 
            </div>
          </Grid>

          <Grid item xs={2}>
            <div className="flex h-full justify-end items-center ">
              <StyledBadge badgeContent={2} color="primary">
                <NotificationsNoneOutlinedIcon />
              </StyledBadge>
              <div className="ml-3">
                <SearchIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <New />
    </div>
  );
}

export default Navbar;
