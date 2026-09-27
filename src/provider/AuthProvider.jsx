import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
export const AuthContext = createContext();

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
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
    };

    return (
        <AuthContext.Provider value={authData}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;