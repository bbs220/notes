/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NotesContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [hasError, setHasError] = useState(false);

  const fetchNotes = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/notes");

      setNotes(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setHasError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const refetchNotes = () => {
    fetchNotes();
  };

  return (
    <NotesContext.Provider value={{ notes, isLoading, hasError, refetchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
