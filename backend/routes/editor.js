const express = require("express");
const Editor = require("../models/Editor");
const auth = require("../middleware/auth");

const router = express.Router();

/* LOAD editor */
router.get("/", auth, async (req, res) => {
  try {
    let editor = await Editor.findOne({ userId: req.user.userId });

    if (!editor) {
      editor = await Editor.create({ userId: req.user.userId });
    }

    res.json({ content: editor.content });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* SAVE editor */
router.post("/", auth, async (req, res) => {
  try {
    const { content } = req.body;

    await Editor.findOneAndUpdate(
      { userId: req.user.userId },
      { content, updatedAt: Date.now() },
      { upsert: true }
    );

    res.json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ message: "Save failed" });
  }
});

module.exports = router;
