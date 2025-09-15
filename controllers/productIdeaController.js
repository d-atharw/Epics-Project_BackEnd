const ProductIdea = require("../models/ProductIdea");

const getIdeas = async (req, res) => {
  try {
    const ideas = await ProductIdea.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new idea
const createIdea = async (req, res) => {
  try {
    const { title, description, materialType } = req.body;
    const newIdea = new ProductIdea({ title, description, materialType });
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getIdeas, createIdea };
