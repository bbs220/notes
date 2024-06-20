/* eslint-disable react/prop-types */
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Notes = ({ note }) => {
  return (
    <div className="min-w-full h-60 rounded-2xl shadow-sm lg:shadow-md border border-info">
      <div className="flex justify-center items-center flex-col p-4 gap-y-4">
        <div className="w-full h-full">
          <h1 className="card-title">{note.title}</h1>
        </div>
        <div className="w-full h-[7.2rem]">
          <p className="label-text text-pretty">{note.content}</p>
        </div>
      </div>
      <div className="flex justify-end mr-4 items-center gap-x-4">
        <button className="btn btn-sm btn-accent">
          <MdEdit className="text-2xl" />
          <p className="hidden md:inline">Edit</p>
        </button>
        <button className="btn btn-sm btn-error">
          <MdDeleteOutline className="text-2xl" />
          <p className="hidden md:inline">Delete</p>
        </button>
      </div>
    </div>
  );
};

export default Notes;
