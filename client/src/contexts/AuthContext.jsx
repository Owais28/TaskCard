import React, { createContext, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../configs/firebase/firebase";

// AuthContext
export const AuthContext = React.createContext();

// export function useAuth1() {
//   return useContext(AuthContext);
// }

// wrapper around <AuthContext.Provider/>
export function AuthContextProvider({ children }) {
  // user state
  const [currentUser, setCurrentUser] = useState(null);

  // Sign Up
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
        // ..
      });
  }

  // Sign In
  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  }

  // provider value
  const value = {
    currentUser,
    signIn,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
