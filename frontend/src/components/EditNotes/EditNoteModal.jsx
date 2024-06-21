/* eslint-disable react/prop-types */
import { MdEditDocument } from "react-icons/md";

const EditNoteModal = ({ onClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-base-100 rounded-xl p-4 flex flex-col relative mx-4 shadow-lg md:shadow-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-y-4"
        >
          <input
            placeholder="Title"
            className="input input-bordered input-info w-full"
          />
          <textarea
            className="textarea textarea-bordered textarea-info resize-none w-full h-60"
            placeholder="content"
          ></textarea>
          <div className="w-full flex justify-center items-center">
            <button type="submit" className="btn btn-success">
              <MdEditDocument className="text-2xl" />
              <p className="hidden md:inline">Save Changes</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNoteModal;
