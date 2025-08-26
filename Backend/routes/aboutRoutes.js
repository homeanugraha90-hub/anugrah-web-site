const express = require("express");
const multer = require("multer");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Create or update by sectionName
router.put(
  "/:name",
  upload.fields([{ name: "Images", maxCount: 5 }]),
  aboutController.updateAbout
);
// Fetch all sections
router.get("/", aboutController.getAllSections);

// Fetch by sectionName
router.get("/:name", aboutController.getSectionByName);

module.exports = router;
