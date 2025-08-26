const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  heading: { type: String },
  sectionName: { type: String, required: true, unique: true },
  description: { type: String },
  Images: { type: [String] },

}, { timestamps: true });

module.exports = mongoose.model("About", aboutSchema);
