import express from "express";
import notesModel from "../models/notesModel.js";

const router = express.Router();

router.post("/notes", async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({
        message: "Need both title and content for a note",
      });
    }

    const newNote = {
      title: req.body.title,
      content: req.body.content,
    };

    const note = await notesModel.create(newNote);

    console.log("New note created ✅");

    res.status(200).json(note);
  } catch (error) {
    console.log("Error occured : ", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/notes", async (req, res) => {
  try {
    const allNotes = await notesModel.find({});

    res.status(200).json({
      count: allNotes.length,
      data: allNotes,
    });
  } catch (error) {
    console.log("Error occured : ", error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const noteId = await notesModel.findById(id);

    res.status(200).json(noteId);
  } catch (error) {
    console.log("Error occured : ", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
