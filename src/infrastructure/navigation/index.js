import React from "react";
import AppNavigation from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigation /> 
    </NavigationContainer>
  );
};

export default Navigation;
