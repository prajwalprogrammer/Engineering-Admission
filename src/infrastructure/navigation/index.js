import React,{useContext} from "react";
import AppNavigation from "./app.navigator";
import DrawerNavigator from "./drower.navigator";
import {
  NavigationContainer,
  
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from "@react-navigation/native";

import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';


import {
  FavouriteContext,
  FavouriteContextProvider,
} from "../../services/favourite/favourite.context";
import {
  LocationContext,
  LocationContextProvider,
} from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurant/restaurant.context";
const Navigation = () => {
  
const {isDarkTheme} = useContext(FavouriteContext)
const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333'
  }
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff'
  }
}
const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer theme={theme}>
            <DrawerNavigator />
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
      </PaperProvider>
    
  );
};

export default Navigation;
