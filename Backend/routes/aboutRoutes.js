const express = require("express");
const router = express.Router();
const { getAbout, updateAbout } = require("../controllers/aboutController");

router.get("/", getAbout);
router.post("/", updateAbout);

module.exports = router;
