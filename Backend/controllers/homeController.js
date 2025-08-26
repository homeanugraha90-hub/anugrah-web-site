const Home = require("../models/Home");
const mongoose = require("mongoose");


// Get home page content
exports.getHome = async (req, res) => {
  try {
    const content = await Home.findOne();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: "Error fetching home content", error: error.message });
  }
};






// Update home page content (Admin only)
exports.updateHome = async (req, res) => {
  try {
    const sectionName = req.params.name;
    const { designType, content } = req.body;
    const images = req.files?.images ? req.files.images.map(file => file.filename) : [];
     const videos = req.files?.videos ? req.files.videos.map(file => file.filename) : [];

    let parsedContent = content;
    if (typeof content === "string") {
      try {
        parsedContent = JSON.parse(content);
      } catch {
        return res.status(400).json({ message: "Invalid content format. Must be JSON." });
      }
    }

    // Find last document's id
    const lastDoc = await Home.findOne().sort({ id: -1 }).lean();
    const newId = lastDoc && lastDoc.id ? lastDoc.id + 1 : 1;

    const updateData = {
      id: newId, // set starting from 1
      sectionName,
      designType,
      content: parsedContent
    };

    if (images.length > 0) updateData.images = images;
     if (videos.length > 0) updateData.videos = videos;

    const section = await Home.findOneAndUpdate(
      { sectionName },
      { $set: updateData },
      { new: true, upsert: true }
    );

    res.json(section);
  } catch (err) {
    res.status(500).json({ message: "Error updating section", error: err.message });
  }
};



exports.getSections = async (req, res) => {
  try {
    const sections = await Home.find();
    res.json(sections);
  } catch (err) {
    res.status(500).json({ message: "Error fetching sections", error: err.message });
  }
};

exports.getSection = async (req, res) => {
  try {
    const section = await Home.findOne({ sectionName: req.params.name });
    if (!section) return res.status(404).json({ message: "Not found" });
    res.json(section);
  } catch (err) {
    res.status(500).json({ message: "Error fetching section", error: err.message });
  }
};

// Delete section
exports.deleteSection = async (req, res) => {
  try {
     const identifier = req.params.id;

    let deletedSectionId;

    // Check if it's a valid MongoDB ObjectId
    if (mongoose.Types.ObjectId.isValid(identifier)) {
      deletedSectionId = await Home.findByIdAndDelete(identifier);
    } else {
      deletedSectionId = await Home.findOneAndDelete({ id: identifier });
    }

    if (!deletedSectionId) {
      return res.status(404).json({ message: "Section not found" });
    }
await Home.findOneAndDelete({ sectionName: "Anugrah" });
    res.json({ message: "Section deleted successfully", deletedSectionId });

  } catch (error) {
    res.status(500).json({ message: "Error deleting section", error: error.message });
  }
};