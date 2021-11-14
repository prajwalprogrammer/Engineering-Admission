import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
export const FavouriteContext = createContext();
export const FavouriteContextProvider = ({ children }) => {
  const {user} = useContext(AuthenticationContext)
  const [favourites, setFavourites] = useState([]);
  const storeFavourites = async (value,uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("storing error", e);
    }
  };

  const loadFavourite = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user) {
      loadFavourite(user.uid);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      
      storeFavourites(favourites,user.uid);
    }
  }, [favourites,user]);
  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites: Add, removeFromFavourites: Remove }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
