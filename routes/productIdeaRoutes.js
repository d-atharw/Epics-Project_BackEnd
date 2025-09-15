const express = require("express");
const router = express.Router();
const { getIdeas, createIdea } = require("../controllers/productIdeaController");

router.get("/", getIdeas);
router.post("/", createIdea);

module.exports = router;
