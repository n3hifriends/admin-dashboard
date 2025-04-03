import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

function YouTubeManager() {
    const [videos, setVideos] = useState([]);
    const [url, setUrl] = useState("");
  
    const handleAddVideo = () => {
      setVideos([...videos, url]);
      setUrl("");
    };
  
    return (
      <Box>
        <Typography variant="h6">Add YouTube Video</Typography>
        <TextField label="YouTube URL" value={url} onChange={(e) => setUrl(e.target.value)} fullWidth margin="normal" />
        <Button variant="contained" onClick={handleAddVideo}>Add Video</Button>
  
        <Typography variant="h6" sx={{ mt: 3 }}>Video List</Typography>
        {videos.map((video, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <iframe width="100%" height="315" src={video.replace("watch?v=", "embed/")} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
          </Box>
        ))}
      </Box>
    );
  }

export default YouTubeManager;