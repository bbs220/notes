import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center gap-x-2 lg:gap-x-4 px-2 lg:px-4">
      <input
        type="text"
        placeholder="Search notes..."
        className="input input-bordered input-primary w-full lg:w-1/2 "
      />
      <button className="btn">
        <IoSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
