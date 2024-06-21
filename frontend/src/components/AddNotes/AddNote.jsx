/* eslint-disable react/prop-types */
import { MdNoteAdd } from "react-icons/md";

const AddNote = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      <MdNoteAdd className="text-2xl" />
      <p className="hidden md:inline">Add Note</p>
    </button>
  );
};

export default AddNote;
