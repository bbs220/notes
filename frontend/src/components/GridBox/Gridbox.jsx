import LoadingIndicator from "../LoadingSpinner/LoadingIndicator";
import Notes from "./Notes";
import Background from "../Background/Background";
import ServerError from "../Background/ServerError";
import { useNotes } from "../../context/NotesContext";

const Gridbox = () => {
  const { notes, isLoading, hasError } = useNotes();

  if (hasError) {
    return <ServerError />;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="w-full min-h-[30rem]">
      {notes?.length > 0 ? (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center h-fit">
          {notes.map((note) => (
            <Notes key={note._id} note={note} />
          ))}
        </div>
      ) : (
        <Background />
      )}
    </div>
  );
};

export default Gridbox;
