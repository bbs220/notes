import notesModel from "../models/notesModel.js";

// for creating a note
export const createNote = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      res.status(400).json({
        message: "Need both title and content for creating a note",
      });
    }

    const newNote = {
      title: req.body.title,
      content: req.body.content,
    };

    const note = await notesModel.create(newNote);

    res.status(200).json(note);

    console.log("New note created");
  } catch (error) {
    res.status(500).json({ message: error.message });

    console.log("Error occured : ", error);
  }
};

// for getting all notes
export const getAllNotes = async (req, res) => {
  try {
    const allNotes = await notesModel.find({});

    res.status(200).json({
      count: allNotes.length,
      data: allNotes,
    });

    console.log("Heres all the notes");
  } catch (error) {
    res.status(500).json({ message: error.message });

    console.log("Error occured : ", error);
  }
};

// for getting a single note with id
export const getNoteWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const noteId = await notesModel.findById(id);

    res.status(200).json(noteId);

    console.log("Found the Note");
  } catch (error) {
    res.status(500).json({ message: error.message });

    console.log("Error occured : ", error);
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

    res.status(200).json({ message: "Note updated successfully" });

    console.log("Note updated successfully");
  } catch (error) {
    console.log("Error occured : ", error);

    res.status(500).json({ message: error.message });
  }
};

// for deleting a already created note with id
export const deleteNoteWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await notesModel.findByIdAndDelete(id);

    if (!result) {
      res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });

    console.log("Note deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });

    console.log("Error occured : ", error);
  }
};
