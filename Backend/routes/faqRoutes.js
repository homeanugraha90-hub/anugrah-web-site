const express = require("express");
const { 
  createFaq, 
  getAllFaqs, 
  getFaq, 
  updateFaq, 
  deleteFaq 
} = require("../controllers/faqController");

const router = express.Router();

// Create FAQ
router.post("/", createFaq);

// Get all FAQs
router.get("/", getAllFaqs);

// Get single FAQ by faqnumber
router.get("/:id", getFaq);

// Update FAQ by faqnumber
router.put("/:faqnumber", updateFaq);

// Delete FAQ by faqnumber
router.delete("/:id", deleteFaq);

module.exports = router;
