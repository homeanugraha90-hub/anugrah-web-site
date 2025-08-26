const mongoose = require("mongoose");   // <-- sabse pehle mongoose require karo
const AutoIncrement = require("mongoose-sequence")(mongoose);

const faqSchema = new mongoose.Schema({
  faqnumber: { type: Number, unique: true }, // Unique FAQ number
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String }
}, { timestamps: true });

// Auto-increment id field
faqSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Faq", faqSchema);
