import React ,{useState} from "react";
import {  Box, Typography } from "@mui/material";


const ExcelUpload = ({ language, onResetLanguage }) => {
 
  const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      // if (file) {
      //   alert(`File uploaded: ${file.name}`);
      // }
    };
    const handleSubmit = (event) => {
      // Perform your submit logic here
      // alert(`Submitted with language: ${language || "None"}`);

      event.preventDefault();

      // Validate language selection
    if (!language) {
      alert("Please select a language before submitting!");
      return;
    }
    
      if (selectedFile) {
        alert(`File submitted: ${selectedFile.name}`);
      } else {
        alert("No file selected!");
      }
      onResetLanguage(); // Reset the language selection
      
    };
    return (
      <Box>
        <Typography variant="h6">Upload Excel File</Typography>
        <p>Selected Language: {language || "None"}</p>
        <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Submit</button>
      </Box>
    );
  }

  export default ExcelUpload;