const Log = require("../models/Log");
const Home = require("../models/Home");

// Update Home Section
exports.updateHome = async (req, res) => {
  try {
    const updated = await Home.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Log the update
    await Log.create({
      action: "updated",
      collectionName: "home",
      documentId: updated._id,
      data: updated
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};
