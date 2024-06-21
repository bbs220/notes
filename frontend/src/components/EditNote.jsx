/* eslint-disable react/prop-types */
import { MdEdit } from "react-icons/md";

const EditNote = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-sm btn-accent">
      <MdEdit className="text-2xl" />
      <p className="hidden md:inline">Edit</p>
    </button>
  );
};

export default EditNote;
