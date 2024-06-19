/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      <div className="w-full lg:w-1/2 max-w-full h-[400px] bg-white rounded-xl p-4 m-4 flex flex-col relative">
        <button className="btn absolute right-4 top-4" onClick={onClose}>
          <IoClose className="text-2xl" />
          <p className="hidden md:inline">Close</p>
        </button>
        {/* Your modal content goes here */}
      </div>
    </div>
  );
};

export default Modal;
