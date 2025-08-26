const About = require("../models/About");

// Create or Update About Section (by sectionName)
exports.updateAbout = async (req, res) => {
  try {
    const sectionName = req.params.name; // from URL /api/about/:name
    const { heading, description } = req.body;

    // Handle multiple images
    const images = req.files?.Images
      ? req.files.Images.map((file) => file.filename)
      : [];

    // Find last document's id
    const lastDoc = await About.findOne().sort({ id: -1 }).lean();
    const newId = lastDoc && lastDoc.id ? lastDoc.id + 1 : 1;

    const updateData = {
      id: newId, // auto increment style id
      sectionName,
      heading,
      description,
    };

    if (images.length > 0) updateData.Images = images;

    const section = await About.findOneAndUpdate(
      { sectionName },
      { $set: updateData },
      { new: true, upsert: true } // create if not exist
    );

    res.json(section);
  } catch (err) {
    res.status(500).json({
      message: "Error updating about section",
      error: err.message,
    });
  }
};

// Get all sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await About.find();
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get specific section by sectionName
exports.getSectionByName = async (req, res) => {
  try {
    const section = await About.findOne({ sectionName: req.params.name });
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
