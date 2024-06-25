/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegSave } from "react-icons/fa";
import { useNotes } from "../../context/NotesContext";

const AddNoteModal = ({ onClose }) => {
  const { refetchNotes } = useNotes();
  
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill out both the title and content for a note");
      return;
    }

    try {
      const response = await axios.post("/api/notes", { title, content });

      if (response.status === 200) {
        toast.success("Note created successfully!");

        // console.log(response.data);
        onClose();
        refetchNotes();
      } else {
        toast.error("Failed to create note.");
      }
    } catch (error) {
      // console.error("Error creating note:", error);

      toast.error("An error occurred. Please try again.");
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
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="input input-bordered input-info w-full"
          />
          <textarea
            placeholder="Content"
            className="textarea textarea-bordered textarea-info resize-none w-full h-60"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <div className="w-full flex justify-center items-center">
            <button className="btn btn-success" type="submit">
              <FaRegSave className="text-2xl" />
              <p className="hidden md:inline">Save Note</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoteModal;
