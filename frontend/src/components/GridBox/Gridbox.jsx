import { useState, useEffect } from "react";
import LoadingIndicator from "../LoadingSpinner/LoadingIndicator";
import axios from "axios";
import Notes from "./Notes";
import Background from "../Background/Background";
import ServerError from "../Background/ServerError";

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

  if (hasError) {
    return <ServerError />;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="w-full lg:h-96 max-h-fit">
      {notes?.length > 0 ? (
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
