import notesModel from "../models/notesModel.js";

// for creating a note
export const createNote = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({
        message: "Need both title and content for creating a note",
      });
    }

    const newNote = {
      title: req.body.title,
      content: req.body.content,
    };

    const note = await notesModel.create(newNote);

    console.log("New note created");

    return res.status(200).json(note);
  } catch (error) {
    console.log("Error occured : ", error);

    res.status(500).json({ message: error.message });
  }
};

// for getting all notes
export const getAllNotes = async (req, res) => {
  try {
    const allNotes = await notesModel.find({});

    console.log("Heres all the notes");

    return res.status(200).json({
      count: allNotes.length,
      data: allNotes,
    });
  } catch (error) {
    console.log("Error occured : ", error);

    res.status(500).json({ message: error.message });
  }
};

// for getting a single note with id
export const getNoteWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const noteId = await notesModel.findById(id);

    console.log("Found the Note");

    return res.status(200).json(noteId);
  } catch (error) {
    console.log("Error occured : ", error);

    res.status(500).json({ message: error.message });
  }
};

// for updating a already created note with id
export const updateNoteWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await notesModel.findByIdAndUpdate(id, req.body);

    if (!result) {
      res.status(404).json({ message: "Note not found" });
    }

    console.log("Note updated successfully");

    return res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });

    console.log("Error occured : ", error);
  }
};

// for deleting a already created note with id
export const deleteNoteWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await notesModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Note not found" });
    }

    console.log("Note deleted successfully");

    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error occured : ", error);

    res.status(500).json({ message: error.message });
  }
};
