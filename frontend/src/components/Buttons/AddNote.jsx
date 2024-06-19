import { MdNoteAdd } from "react-icons/md";

const AddNote = () => {
  return (
    <button
      className="btn"
      onClick={() => document.getElementById("my_modal_2").showModal()}
    >
      <MdNoteAdd className="text-xl lg:text-2xl" />
      <p className="hidden lg:block">Add Note</p>
    </button>
  );
};

export default AddNote;
