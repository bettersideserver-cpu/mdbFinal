const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve your whole folder as static
app.use(express.static(path.join(__dirname)));

// Main route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
