const Faq = require("../models/Faq"); // assuming you have a Faq model


// Create FAQ
exports.createFaq = async (req, res) => {
  try {
    const faq = new Faq(req.body);
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all FAQs
exports.getAllFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single FAQ
exports.getFaq = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update FAQ
exports.updateFaq = async (req, res) => {
  try {
    const faq = await Faq.findOneAndUpdate(
      { faqnumber: req.params.faqnumber },
      req.body,
      { new: true }
    );
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete FAQ
// exports.deleteFaq = async (req, res) => {
//   try {
//     const faq = await Faq.findOneAndDelete({ faqnumber: req.params.faqnumber });
//     if (!faq) return res.status(404).json({ message: "FAQ not found" });
//     res.json({ message: "FAQ deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
1
exports.deleteFaq = async (req, res) => {
  try {
    const { id } = req.params; // yaha pe MongoDB _id aata hai

    const deletedFaq = await Faq.findByIdAndDelete(id);

    if (!deletedFaq) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.status(200).json({ message: "FAQ deleted successfully", deletedFaq });
  } catch (error) {
    res.status(500).json({ message: "Error deleting FAQ", error: error.message });
  }
};












