const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

// @desc    Add new idea
// @route   POST /api/ideas
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newIdea = new Idea({ title, description });
    const savedIdea = await newIdea.save();
    res.status(201).json(savedIdea);
  } catch (err) {
    res.status(500).json({ message: 'Error creating idea', error: err.message });
  }
});

// @desc    Get all ideas
// @route   GET /api/ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching ideas', error: err.message });
  }
});

// @desc    Get single idea by ID
// @route   GET /api/ideas/:id
router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) return res.status(404).json({ message: 'Idea not found' });
    res.json(idea);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching idea', error: err.message });
  }
});

// @desc    Update an idea
// @route   PUT /api/ideas/:id
router.put('/:id', async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true } // return updated doc
    );
    if (!updatedIdea) return res.status(404).json({ message: 'Idea not found' });
    res.json(updatedIdea);
  } catch (err) {
    res.status(500).json({ message: 'Error updating idea', error: err.message });
  }
});

// @desc    Delete an idea
// @route   DELETE /api/ideas/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedIdea = await Idea.findByIdAndDelete(req.params.id);
    if (!deletedIdea) return res.status(404).json({ message: 'Idea not found' });
    res.json({ message: 'Idea deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting idea', error: err.message });
  }
});

module.exports = router;
