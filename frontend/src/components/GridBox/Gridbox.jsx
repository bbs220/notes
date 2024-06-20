import { useState, useEffect } from "react";
import LoadingIndicator from "../LoadingIndicator";
import axios from "axios";
import Notes from "./Notes";
import { BiSolidErrorAlt } from "react-icons/bi";

const Gridbox = () => {
  const [notes, setNotes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/notes");

        setNotes(response.data.data);
      } catch (error) {
        // console.error("Failed to fetch notes:", error);

        if (error.response && error.response.status === 500) {
          setHasError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (hasError) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="p-4 w-1/2 h-60 rounded-2xl bg-error flex flex-col gap-y-2 justify-center items-center">
          <div className="flex items-center justify-center gap-x-4">
            <BiSolidErrorAlt className="text-3xl" />
            <p className="font-bold text-3xl">An error occurred</p>
          </div>
          <p className="text-2xl">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {notes.map((note) => (
        <Notes key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Gridbox;
