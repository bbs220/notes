import mongoose from "mongoose";

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    createdOn: {
      type: Date,
      default: new Date().getTime(),
    },
  },
  { timestamps: true }
);

const notesModel = mongoose.model("Notes", notesSchema);

export default notesModel;
