import { Box, Card, Grid, Paper } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function task() {
  const data = 
    {
    vin: "94N848F8",
    client: "Siddharth Ayer",
    model: "Honda City, 1.5L VX",
    booking:"12/04/2023",
  }

  return (
    <div className="px-2 ">
      

      <Box sx={{ height: "150px", marginTop: 1, width: "100%" }}>
        
        <Card
          elevation={4}
          sx={{ borderRadius: "16px", height: "130px", textAlign: "left" }}>
            <div className=" bg-[#F2F3F8] relative h-60 w-[33%] rounded-r-[80px]">
          <div className="m-3 w-[280%] absolute " >
            <Grid display="flex" container rowSpacing={1}>
              <Grid item xs={9} md={9}>
                
                <div className="font-poppins mb-1 text-[17px] font-medium text-[#28333c]">
                   {data.client}
                </div>

                <div className="font-poppins text-[13px] text-[#28333c] font-semibold">
                  <b>Model:</b>
                  {' '}{data.model}
                </div>

                <div className="font-poppins text-[13px] text-[#28333c] font-semibold my-1">
                  <b>Vin:</b>
                  {' '}{data.vin}
                </div>

              </Grid>
              <Grid item xs={3} md={3}>
                <div className="font-poppins font-semibold text-[10px] text-[#28333c] text-end">
                  Booking Date {data.booking}
                </div>
              </Grid>
            </Grid>

            <div className="w-90 h-3 mt-2 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div
                className="bg-[#7BB564] text-[8px] font-bold h-3 text-white text-right align-centre  leading-none rounded-full"
                Style="width: 45% " 
              >
                {" "}
                <span className="inline-block align-middle">75%</span>
              </div>
            </div>

            <div className=" flex justify-center text-[#28333c] h-1">
              <KeyboardArrowDownIcon   />
            </div>
          </div>
          </div> 
        </Card>
      </Box>
    </div>
  );
}

export default task;
