import React, { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../FIrebase/firebase.init";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //sign in with email-password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    //observe current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        signInUser,
        logOut,
        updateUserProfile,
    };

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
