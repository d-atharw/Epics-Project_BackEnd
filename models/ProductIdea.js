const mongoose = require("mongoose");

const productIdeaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  materialType: { type: String, required: true }, // e.g. plastic, paper
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ProductIdea", productIdeaSchema);
