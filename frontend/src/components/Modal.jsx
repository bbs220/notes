import { IoClose } from "react-icons/io5";

const Modal = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
            <IoClose className="text-xl" />
          </button>
        </form>
        <h3 className="font-bold text-lg">Title</h3>
        <p className="py-4">Content</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
