const express = require("express");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json({ limit: "1mb" }));

app.post("/receiveFile", (req, res) => {
  const jsonFile = req.body;

  const startTime = Date.now();
  jsonFile.sort((a, b) => a.timestamp - b.timestamp);

  const resultTime = Date.now() - startTime;
  res.json({
    jsonFile,
    resultTime,
  });
});

app.listen(port);
