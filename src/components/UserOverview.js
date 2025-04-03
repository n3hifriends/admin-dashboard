import React from "react";
import {Box, Typography} from "@mui/material";

function UserOverview(){
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", margin: "auto", mt: 3 }}>
          
          {/* User Overview Always Visible */}
          <Box sx={{ mb: 2, p: 2, backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <Typography variant="h5">User Overview</Typography>
            <Typography>Total Registered Users: 1200</Typography>
          </Box>
        </Box>
      );
}

export default UserOverview;