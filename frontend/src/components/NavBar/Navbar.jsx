import { useState } from "react";
import { MdNoteAdd } from "react-icons/md";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle clicks outside the modal
  const closeModalOnOutsideClick = (e) => {
    if (e.target.closest(".modal-content") === null) {
      setIsModalOpen(false);
      e.stopPropagation();
      e.preventDefault();
    }
  };

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
        <button className="btn mr-2 lg:mr-6" onClick={toggleModal}>
          <MdNoteAdd className="text-2xl" />
          <p className="hidden md:inline">Add Note</p>
        </button>
        <div className="flex-none">
          <ThemeToggle />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={closeModalOnOutsideClick}
          ></div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
