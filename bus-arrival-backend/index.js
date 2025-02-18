const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Enable CORS for all routes
app.use(cors());

app.get("/api/datamall", async (req, res) => {
  const apiPath = req.query.path;
  const queryParams = req.query;
  delete queryParams.path;

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `https://datamall2.mytransport.sg/ltaodataservice/${apiPath}?${queryString}`;

  // Use dynamic import for node-fetch
  const fetch = (await import("node-fetch")).default;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      AccountKey: process.env.ACCOUNT_KEY,
    },
  });

  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
