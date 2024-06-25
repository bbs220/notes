import { BiSolidErrorAlt } from "react-icons/bi";

const ServerError = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-4 w-full md:w-1/2 mx-4 md:mx-0 min-h-[30rem] rounded-2xl bg-error flex flex-col gap-y-2 justify-center items-center">
        <div className="flex items-center justify-center gap-x-4 flex-col md:flex-row">
          <BiSolidErrorAlt className="text-3xl" />
          <p className="font-bold text-3xl mt-4 md:mt-0">An error occurred</p>
        </div>
        <p className="text-2xl">Please try again later.</p>
      </div>
    </div>
  );
};

export default ServerError;
