/* eslint-disable react/prop-types */
import { useState } from "react";
import { getTime } from "../utils/getTime.js";
import DeleteNote from "../DeleteNotes/DeleteNote.jsx";
import EditNote from "../EditNotes/EditNote.jsx";
import EditNoteModal from "../EditNotes/EditNoteModal.jsx";

const Notes = ({ note }) => {
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);

  const createdTime = getTime(note.createdAt);

  return (
    <div className="border border-info rounded-xl p-2 md:p4">
      <div className="">
        <div className="w-full">
          <h1 className="card-title text-2xl">{note.title}</h1>
        </div>
        <div className=" w-full">
          <p className="label-text text-pretty">{note.content}</p>
        </div>
      </div>
      <div className="flex justify-end items-center overflow-hidden">
        <div className="text-xs text-balance italic">{`Created at : ${createdTime}`}</div>
        <EditNote onClick={() => setShowEditNoteModal(true)} />
        <DeleteNote noteId={note._id} />
      </div>
      {showEditNoteModal && (
        <EditNoteModal
          noteId={note._id}
          onClose={() => setShowEditNoteModal(false)}
        />
      )}
    </div>
  );
};

export default Notes;
