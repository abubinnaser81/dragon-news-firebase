import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
export const AuthContext = createContext();

import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        user,  
        setUser,
        createUser,
        logOut,
        signIn,
    };

    return (
        <AuthContext.Provider value={authData}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;