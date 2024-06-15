import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
