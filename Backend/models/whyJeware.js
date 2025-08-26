const mongoose = require("mongoose");

const whyJewareSchema = new mongoose.Schema({
  
   sectionName: { type: String, required: true, unique: true }, // e.g. hero, about
  headline: { type: String, required: true }, // tells frontend how to display
  content: { type: mongoose.Schema.Types.Mixed }, // can hold any JSON/text
  Images: [{ type: String }] ,
  
}, { timestamps: true });

module.exports = mongoose.model("whyJeware", whyJewareSchema);
