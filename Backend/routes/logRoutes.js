// routes/logRoutes.js
const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

// Get all logs
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }); // latest first
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

module.exports = router;
