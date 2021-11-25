import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Navigation from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { FavouriteContextProvider } from "./src/services/favourite/favourite.context";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyCZ1CBSzaR1eiICnxwMh19Ow97jn8JrDpQ",
  authDomain: "mealstogo-10013.firebaseapp.com",
  projectId: "mealstogo-10013",
  storageBucket: "mealstogo-10013.appspot.com",
  messagingSenderId: "1075339376586",
  appId: "1:1075339376586:web:123a994e982c60661b8133",
};

// Initialize Firebase
if (!firebase.getApps().length) {
}
export const initialize = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(initialize);
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <Navigation />
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <StatusBar style="auto" />
    </>
  );
}
