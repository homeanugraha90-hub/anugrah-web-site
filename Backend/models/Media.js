const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
   sectionName: { type: String, required: true }, // e.g. hero, about
  content: { type: mongoose.Schema.Types.Mixed }, // can hold any JSON/text
  images: [{ type: String }] ,
  
}, { timestamps: true });

module.exports = mongoose.model("Media", mediaSchema);
