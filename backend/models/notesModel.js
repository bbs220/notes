import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const notesModel = mongoose.model("Notes", notesSchema);

export default notesModel;
