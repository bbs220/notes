import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="label font-bold text-xl">📝 Notes</a>
        </div>
        <div className="flex-none">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
