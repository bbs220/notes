import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Notes = () => {
  return (
    <div className="min-w-full h-60 rounded-2xl shadow-md lg:shadow-xl border border-info">
      <div className="flex justify-center items-center flex-col p-4 gap-y-4">
        <div className="w-full h-full">
          <h1 className="card-title">Title</h1>
        </div>
        <div className="w-full h-[7.2rem]">
          <p className="label-text text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ad
            numquam veniam explicabo nostrum deserunt voluptatum placeat,
            impedit reiciendis voluptate quisquam odio. Ex magni earum dolores
            obcaecati eligendi eum ratione.
          </p>
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
