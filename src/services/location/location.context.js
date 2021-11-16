import React, { useEffect, useState, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [iserror, setIserror] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("San Francisco");
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };
  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setIserror(err);
      });
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{ isLoading, iserror, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
