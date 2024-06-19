import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Notes = () => {
  return (
    <div className="min-w-full h-60 rounded-lg shadow-md lg:shadow-xl">
      <div className="flex justify-center items-center flex-col p-4 gap-y-4">
        <div className="w-full h-10">
          <h1>title</h1>
        </div>
        <div className="w-full h-fit">
          <p>content</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;
