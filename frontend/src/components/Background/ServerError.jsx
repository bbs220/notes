import { BiSolidErrorAlt } from "react-icons/bi";

const ServerError = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-4 w-1/2 h-96 rounded-2xl bg-error flex flex-col gap-y-2 justify-center items-center">
        <div className="flex items-center justify-center gap-x-4">
          <BiSolidErrorAlt className="text-3xl" />
          <p className="font-bold text-3xl">An error occurred</p>
        </div>
        <p className="text-2xl">Please try again later.</p>
      </div>
    </div>
  );
};

export default ServerError;
