import Notes from "./Notes";

const Gridbox = () => {
  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      <Notes />
    </div>
  );
};

export default Gridbox;
