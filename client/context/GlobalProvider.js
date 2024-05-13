import { createContext, useContext, useState, useEffect } from "react";

import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        if (response) {
          setisLoading(true);
          setUser(response);
        } else {
          setisLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      })
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setisLoggedIn,
        user,
        setUser,
        isLoading,
        setisLoading
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;