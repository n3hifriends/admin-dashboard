import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const CurrentAffairs = ({ language, onResetLanguage }) =>  {
    const [affairs, setAffairs] = useState([]);
    const [form, setForm] = useState({ title: "", description: "", date: "" });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      setAffairs([...affairs, form]);
      setForm({ title: "", description: "", date: "" });
      alert(`Submitted with language: ${language || "None"}`);
    onResetLanguage();
    };
  
    return (
      <Box>
        <Typography variant="h6">Add Current Affair</Typography>
        <p>Selected Language: {language || "None"}</p>
        <TextField label="Title" name="title" value={form.title} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Description" name="description" value={form.description} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} fullWidth margin="normal" />
        <Button variant="contained" onClick={handleSubmit}>Add</Button>
  
        <Typography variant="h6" sx={{ mt: 3 }}>Current Affairs List</Typography>
        <ul>
          {affairs.map((item, index) => (
            <li key={index}>
              <b>{item.title}</b> - {item.description} ({item.date})
            </li>
          ))}
        </ul>
      </Box>
    );
  }

  export default CurrentAffairs;