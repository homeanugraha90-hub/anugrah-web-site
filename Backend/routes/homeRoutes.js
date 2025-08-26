const express = require("express");
const multer = require("multer");

const { getSections,getSection, updateHome ,deleteSection } = require("../controllers/homeController");




const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({  storage,
  limits: {
    fileSize: 100 * 1024 * 1024 
  } });


router.put("/:name", upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 1 }
  ]),
  updateHome);
router.get("/", getSections);
router.get("/:name", getSection);

router.delete("/:id", deleteSection);



module.exports = router;
