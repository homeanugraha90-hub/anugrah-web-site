const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  heading: String,
  description: String,
    bannerImage: String,
  teamMembers: [String],
});

module.exports = mongoose.model("About", aboutSchema);
