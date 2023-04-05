import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "@fontsource/poppins/300.css";

function New() {
  return (
    <div className="border-b-1 mb-3 px-2 shadow-lg w-full ">
      <Box
        sx={{
          height: "50px",
          fontWeight: "bold",
          marginX: "4px",
        }}
      >
        <Stack spacing={1} direction="row">
          <button className="bg-[#065BC9] font-bold text-[11px] text-white w-[177px] h-[42px] rounded-md">
            {" "}
            Deliveries in Progress
          </button>
          <button className="bg-[#F2F3F8] font-bold text-[11px] text-black w-[177px] h-[42px] rounded-md">
            Completed Deliveries
          </button>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "background.paper",
          marginY: "10px",
          marginX: "5px",
        }}
      >
        <Stack spacing={1} direction="row">
          <div className="flex mb-2 w-full">
            <img className="items-center h-4 w-5" src="equalzricon.png" />
          </div>
        </Stack>
        <div className="flex items-center">
          <Typography
            varient="subtitle"
            color="#777978"
            fontSize="11px"
            fontWeight="regular">
            {" "}
            SORT{" "}
          </Typography>

          <div className="flex items-center">
            <img className="mx-2 " src="sort.png" />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default New;
