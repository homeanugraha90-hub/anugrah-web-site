// models/Log.js
const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  action: { type: String, required: true }, // created, updated, deleted
  collectionName: { type: String, required: true }, // e.g. home, about, faq, article
  documentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  data: { type: Object }, // snapshot of content or image updated
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Log", logSchema);
