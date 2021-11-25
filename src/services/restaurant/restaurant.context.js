import React, { createContext, useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocationContext } from "../location/location.context";
import { restaurantRequest, restaurantTransform } from "./restaurant.services";
export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [iserror, setIserror] = useState();
  const [isLoading, setIsLoading] = useState();
  const {location} = useContext(LocationContext)
  
  const retriveRestaurant = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    
    setTimeout(() => {
      restaurantRequest(location)
        .then((res)=>restaurantTransform(res,location))
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setIserror(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if(location){
    const locationString=`${location.lat},${location.lng}`
    retriveRestaurant(locationString);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider value={{setRestaurants, restaurants, isLoading, iserror }}>
      {children}
    </RestaurantContext.Provider>
  );
};
const styles = StyleSheet.create({});
