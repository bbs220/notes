import { MdNoteAdd } from "react-icons/md";

const AddNote = () => {
  return (
    <div className="btn">
      <MdNoteAdd className="text-xl lg:text-2xl" />
      <p className="hidden lg:block">Add Note</p>
    </div>
  );
};

export default AddNote;
