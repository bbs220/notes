import express from "express";
import {
  createNote,
  deleteNoteWithId,
  getAllNotes,
  getNoteWithId,
  updateNoteWithId,
} from "../controllers/notesController.js";

const router = express.Router();

router.post("/notes", createNote);

router.get("/notes", getAllNotes);

router.get("/notes/:id", getNoteWithId);

router.put("/notes/:id", updateNoteWithId);

router.delete("/notes/:id", deleteNoteWithId);

export default router;
