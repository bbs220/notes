/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdEditDocument } from "react-icons/md";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNotes } from "../../context/NotesContext";

const EditNoteModal = ({ onClose, noteId }) => {
  const { refetchNotes } = useNotes();

  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/notes/${noteId}`);
        setNote(response.data);
      } catch (error) {
        console.error("Failed to fetch note:", error);
      }
    };

    fetchData();
  }, [noteId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedResponse = await axios.put(`/api/notes/${noteId}`, note);

      if (!noteId) {
        toast.error("Note not found");
        return;
      }

      if (updatedResponse) {
        toast.success("Note updated successfully");

        // console.log("Note updated successfully:", updatedResponse.data);
        onClose();
        refetchNotes();
      }
    } catch (error) {
      console.error("Failed to update note:", error);

      toast.error("Could not edit the note");
    }
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-base-100 rounded-xl p-4 flex flex-col relative mx-4 shadow-lg md:shadow-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col gap-y-4"
        >
          <input
            value={note?.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            placeholder="Title"
            className="input input-bordered input-info w-full"
          />
          <textarea
            value={note?.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            className="textarea textarea-bordered textarea-info resize-none w-full h-60"
            placeholder="content"
          ></textarea>
          <div className="w-full flex justify-center items-center">
            <button type="submit" className="btn btn-success">
              <MdEditDocument className="text-2xl" />
              <p className="hidden md:inline">Save Changes</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNoteModal;
