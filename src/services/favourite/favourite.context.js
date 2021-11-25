import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
export const FavouriteContext = createContext();
export const FavouriteContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const storeFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites`, jsonValue);
    } catch (e) {
      console.log("storing error", e);
    }
  };

  const loadFavourite = async () => {
    try {
      const value = await AsyncStorage.getItem(`@favourites`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("loading error", e);
    }
  };
  const Add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const Remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => x.name !== restaurant.name);
    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourite();
  }, []);
  useEffect(() => {
    storeFavourites(favourites);
  }, [favourites]);
  return (
    <FavouriteContext.Provider
      value={{
        isDarkTheme,
        favourites,
        addToFavourites: Add,
        removeFromFavourites: Remove,
        toggleTheme: () => {
          setIsDarkTheme(!isDarkTheme);
        },
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
