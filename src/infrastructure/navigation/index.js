import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import AppNavigation from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigation from "./accountNavigator";
import {
  getAuth,
  createUserWithEmailAndPassword,
  initializeAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log(isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
