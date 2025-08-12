const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
   sectionName: { type: String, required: true, unique: true }, // e.g. hero, about
  designType: { type: String, required: true }, // tells frontend how to display
  content: { type: mongoose.Schema.Types.Mixed }, // can hold any JSON/text
  images: [{ type: String }] 
});

module.exports = mongoose.model("Home", homeSchema);
