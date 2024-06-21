import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AddNote from "../AddNotes/AddNote";
import AddNoteModal from "../AddNotes/AddNoteModal";

const Navbar = () => {
  const [showAddNoteModal, setAddNoteShowModal] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <a className="label font-bold text-xl lg:text-3xl gap-2 lg:gap-4">
            <img
              className="size-6 lg:size-8"
              src="./resources/notes.png"
              alt="app icon"
              draggable={false}
            />
            Notes
          </a>
        </div>
        <div className="mr-4">
          <AddNote onClick={() => setAddNoteShowModal(true)} />
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
      {showAddNoteModal && (
        <AddNoteModal onClose={() => setAddNoteShowModal(false)} />
      )}
    </div>
  );
};

export default Navbar;
