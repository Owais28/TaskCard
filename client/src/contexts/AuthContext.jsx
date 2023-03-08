import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase/firebase";
import store from "../data/store/store";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// AuthContext
export const AuthContext = createContext();

// wrapper around <AuthContext.Provider/>
export function AuthContextProvider({ children }) {
  const { dispatch } = store;

  // user state
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // dispatch.user.setUser(currentUser);
    auth.onAuthStateChanged((user) => {
      // if unsigned in
      if (!user) console.error("Error");

      // otherwise
      dispatch.user.setUser(user);
      console.log(user);
    });
  }, []);

  // Sign Up
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        console.log(user);
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
    // TODO: uncomment it later
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // dispatch.user.setUser(user);
    //     setCurrentUser(user);
    //     // console.log(userCredential);

    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log({ errorCode, errorMessage });
    //   });

    localStorage.setItem("user", JSON.stringify({ email, password }));
    setCurrentUser({ email, password });
    dispatch.user.setUser({ email, password });
  }

  // provider value
  const value = {
    currentUser,
    signIn,
    signUp,
    // TODO: delete it later when you are done with local storage sign up method
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const mapDispatch = (dispatch) => ({
  setUser: (user) => dispatch.user.setUser(user),
});
