const WhyJewareModels = require("../models/whyJeware");

// Create or Update section
exports.createOrUpdateSection = async (req, res) => {
  try {
    const sectionName = req.params.name;
    const { headline, content } = req.body;

    let Images = [];
    if (req.files && req.files["Images"]) {
      Images = req.files["Images"].map((file) => file.filename);
    }

    const section = await WhyJewareModels.findOneAndUpdate(
      { sectionName },
      {
        sectionName,
        headline,
        content: content ? JSON.parse(content) : {}, // agar frontend JSON bhejta hai
        $push: { Images: { $each: Images } }, // new images add hongi
      },
      { new: true, upsert: true }
    );

    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await WhyJewareModels.find();
    res.status(200).json(sections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get section by name
exports.getSectionByName = async (req, res) => {
  try {
    const section = await WhyJewareModels.findOne({ sectionName: req.params.name });
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete section by name
exports.deleteSection = async (req, res) => {
  try {
    const deleted = await WhyJewareModels.findOneAndDelete({ sectionName: req.params.name });
    if (!deleted) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
