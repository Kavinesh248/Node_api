const express = require("express");
const app = express();
app.use(express.json()); // This allows the API to handle JSON requests

// Sample data
const videos = [
  {
    id: 1,
    title: "Learn JavaScript",
    link: "https://www.youtube.com/watch?v=abcdefghijk",
    image: "https://img.youtube.com/vi/abcdefghijk/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Introduction to Node.js",
    link: "https://www.youtube.com/watch?v=lmnopqrstuvwxyz",
    image:
      "https://codeastro.com/wp-content/uploads/2024/02/CodeAstro-Membership-Management-System-PHP_Thumbnail-880x660.jpg",
  },
];

// Endpoint to get all videos
app.get("/videos", (req, res) => {
  res.json(videos);
});

// Endpoint to get a video by ID
app.get("/videos/:id", (req, res) => {
  const video = videos.find((v) => v.id === parseInt(req.params.id));
  if (video) {
    res.json(video);
  } else {
    res.status(404).json({ message: "Video not found" });
  }
});

// Endpoint to add a new video
app.post("/videos", (req, res) => {
  const newVideo = req.body;
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
