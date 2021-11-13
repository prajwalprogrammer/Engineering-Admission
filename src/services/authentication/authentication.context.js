import React, { createContext, useState } from "react";
import { LoginRequest } from "./authentication.service";
import {
  getAuth,
  initializeAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(null);
  const [iserror, setIserror] = useState(null);
  onAuthStateChanged(getAuth(),(usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsloading(false);
  });
  const onLogin =  (email, password) => {
    setIsloading(true);
     signInWithEmailAndPassword(getAuth(), email, password)
      .then((user) => {
        setUser(user);
        setIsloading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsloading(false);
        setIserror(e.message);
      });
  };
  const onRagister =  (email, password, repeatPassword) => {
    setIsloading(true);
    console.log(password," ",repeatPassword)
    if (password !== repeatPassword) {
      setIserror("Password Doen Not Match");
      return;
    }
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((user) => {
        setUser(user);
        setIsloading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsloading(false);
        setIserror(e.message);
      });
  };
  const onLogout = () => {
    setUser(null);
    signOut(getAuth());
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isloading,
        iserror,
        onLogin,
        onRagister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
