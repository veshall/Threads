import React, { createContext } from "react";
import {
  generateThread,
  generateUserSuggestions,
} from "../Utils/Generate-Data";

export const ThreadsContext = createContext([]);

export const ThreadsProvider = ({ children }) => {
  const [threads, setThreads] = React.useState([]);
  const [userSugg, setUserSugg] = React.useState([]);

  React.useEffect(() => {
    setThreads(generateThread());
    setUserSugg(generateUserSuggestions());
  }, []);
  return (
    <ThreadsContext.Provider value={{ threads, userSugg }}>
      {children}
    </ThreadsContext.Provider>
  );
};
