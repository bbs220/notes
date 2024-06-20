import { useState } from "react";
import AddNote from "../AddNote";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

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
          <AddNote onClick={() => setShowModal(true)} />
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Navbar;
