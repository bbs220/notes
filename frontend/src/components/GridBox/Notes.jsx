import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Notes = () => {
  return (
    <div>
      <div className="card max-w-full min-h-fit shadow-md md:shadow-xl image-full bg-black">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1639932601837-3c8ed43283c7?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p>
            Content: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nihil, quibusdam iusto minima volup
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-accent">
              <MdEdit className="size-5" />
              <p className="label hidden md:inline text-md">Edit</p>
            </button>
            <button className="btn btn-sm btn-error">
              <MdDeleteOutline className="size-5" />
              <p className="label hidden md:inline text-md">Delete</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
