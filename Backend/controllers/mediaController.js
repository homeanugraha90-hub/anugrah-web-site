const Media = require("../models/Media");

// Get all sections
exports.getAllMedia = async (req, res) => {
  try {
    const medias = await Media.find();
    res.status(200).json(medias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get section by sectionName
exports.getMediaByName = async (req, res) => {
  try {
    const media = await Media.findOne({ sectionName: req.params.name });
    if (!media) return res.status(404).json({ message: "Section not found" });
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new section
exports.createMedia = async (req, res) => {
  try {
    const sectionName = req.params.name;
    const { id, content } = req.body;

    const exists = await Media.findOne({ sectionName });
    if (exists) {
      return res.status(400).json({ message: "Section already exists" });
    }

    let images = [];
    if (req.files?.images) {
      images = req.files.images.map((file) => file.filename);
    }

    const media = new Media({ id, sectionName, content, images });
    await media.save();

    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update section by sectionName
exports.updateMedia = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.files?.images) {
      updateData.images = req.files.images.map((file) => file.filename);
    }

    const media = await Media.findOneAndUpdate(
      { sectionName: req.params.name },
      updateData,
      { new: true }
    );

    if (!media) return res.status(404).json({ message: "Section not found" });

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete section by id
exports.deleteMedia = async (req, res) => {
  try {
    const media = await Media.findOneAndDelete({ id: req.params.id });
    if (!media) return res.status(404).json({ message: "Section not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// Get single media by ID
exports.getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);

    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }

    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

