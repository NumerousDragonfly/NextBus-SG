const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// CORS config
const corsOptions = {
  origin: [process.env.MYSITE],
  methods: "GET",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  const allowedOrigin = process.env.MYSITE; 
  const origin = req.get("origin");
  const referer = req.get("referer");

  if (origin === allowedOrigin || (referer && referer.startsWith(allowedOrigin))) {
    next();
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// Rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 15, // 15 requests per windowMs
  message: "Too many requests, please try again later.",
  headers: false // Hide rate limit headers
});

app.use(limiter);

app.get("/api/bus-arrival", async (req, res) => {
  const busStopCode = req.query.BusStopCode;
  const queryString = new URLSearchParams({
    BusStopCode: busStopCode,
  }).toString();
  const url = `https://datamall2.mytransport.sg/ltaodataservice/v3/BusArrival?${queryString}`;

  if (!busStopCode || !/^\d{5}$/.test(busStopCode)) {
    return res.status(400).json({ error: "Invalid or missing bus stop code" });
  };

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
