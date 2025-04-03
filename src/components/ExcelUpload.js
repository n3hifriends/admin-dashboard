import React from "react";
import {  Box, Typography } from "@mui/material";


function ExcelUpload() {
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        alert(`File uploaded: ${file.name}`);
      }
    };
  
    return (
      <Box>
        <Typography variant="h6">Upload Excel File</Typography>
        <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
      </Box>
    );
  }

  export default ExcelUpload;