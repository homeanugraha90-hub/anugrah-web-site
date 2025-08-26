const express = require("express");
const multer = require("multer");

const {
  createMedia,
  getAllMedia,
  getMediaByName,
  updateMedia,
  deleteMedia,
 
  getMediaById,
} = require("../controllers/mediaController");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100 MB max
  },
});

// Routes

// Create new section (with images upload)
router.post(
  "/:name",
  upload.fields([{ name: "images", maxCount: 10 }]),
  createMedia
);


//  Get all sections
router.get("/", getAllMedia);

// Get section by sectionName (string instead of id)
router.get("/section/:name", getMediaByName);
//  Update section by sectionName (with files upload)
router.put(
  "/:name",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 1 },
  ]),
  updateMedia
);

//  Delete section by id
router.delete("/:id", deleteMedia);

router.get("/id/:id", getMediaById);
module.exports = router;
