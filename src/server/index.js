const express = require("express");
const cors = require("cors");

var app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Nibbles!" });
});

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
