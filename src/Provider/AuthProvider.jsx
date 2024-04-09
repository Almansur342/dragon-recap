import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import auth from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update user

  const updateUserProfile = (name,photo) => {
   return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  const logOut = () => {
    setLoader(true);
    return signOut(auth)
  }

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, GoogleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log('user in auth',currentUser);
      setUser(currentUser);
      setLoader(false);
    })
    return () => unsubscribe();
  }, [])

  const AuthInfo = {
    user,
    loader,
    createUser,
    logOut,
    signIn,
    googleLogin,
    updateUserProfile,

  }

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;