import AddNote from "../Buttons/AddNote";
import Modal from "../Modal";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
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
        <div className="flex-none mr-4 lg:mr-6">
          <AddNote />
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
      <Modal/>
    </div>
  );
};

export default Navbar;
