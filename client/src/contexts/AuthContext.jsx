import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../configs/firebase/firebase";
import store from "../data/store/store";
// AuthContext
export const AuthContext = createContext();

// export function useAuth1() {
//   return useContext(AuthContext);
// }

// wrapper around <AuthContext.Provider/>
export function AuthContextProvider({ children }) {
  const { dispatch } = store;

  // user state
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    dispatch.user.setUser(currentUser);
  }, [currentUser]);

  // Sign Up
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setCurrentUser(user);
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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch.user.setUser(user);
        setCurrentUser(user);
        console.log(user);

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

const mapDispatch = (dispatch) => ({
  setUser: (user) => dispatch.user.setUser(user),
});
