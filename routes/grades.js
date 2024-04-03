const express = require("express");
const router = express.Router();
const Grade = require("../models/grade");

router.get("/", async (req, res) => {
  try {
    const grades = await Grade.find();
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const grade = new Grade(req.body);
    await grade.save();
    res.status(201).json(grade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) throw new Error("Grade not found");
    res.json(grade);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await Grade.findByIdAndUpdate(id, req.body, { new: true });
    res.json(grade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await Grade.findByIdAndDelete(id);
    res.json(grade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
