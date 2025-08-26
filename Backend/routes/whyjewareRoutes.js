const express = require("express");
const multer = require("multer");
const router = express.Router();
const whyJewareController = require("../controllers/whyjewarController");

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

//  Create or Update by sectionName
router.put(
  "/:name",
  upload.fields([{ name: "Images", maxCount: 5 }]),
  whyJewareController.createOrUpdateSection
);

//  Fetch all sections
router.get("/", whyJewareController.getAllSections);

//  Fetch by sectionName
router.get("/:name", whyJewareController.getSectionByName);

//  Delete by sectionName
router.delete("/:name", whyJewareController.deleteSection);

module.exports = router;
