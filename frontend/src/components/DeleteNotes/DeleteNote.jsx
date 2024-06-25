/* eslint-disable react/prop-types */
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNotes } from "../../context/NotesContext";

const DeleteNote = ({ noteId }) => {
  const { refetchNotes } = useNotes();

  const handleDeleteClick = async () => {
    try {
      if (!noteId) {
        toast.error("Note not found");
        return;
      }

      if (noteId) {
        await axios.delete(`/api/notes/${noteId}`);

        toast.success("Note deleted successfully");
        refetchNotes();
      }
    } catch (error) {
      // console.error("Failed to delete note:", error);

      toast.error("Failed to delete the note");
    }
  };

  return (
    <button onClick={handleDeleteClick} className="btn btn-sm btn-error">
      <MdDeleteOutline className="text-2xl" />
      <p className="hidden md:inline">Delete</p>
    </button>
  );
};

export default DeleteNote;
