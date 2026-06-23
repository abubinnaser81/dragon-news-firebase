import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser]= useState({
        name: "Bappo",
        email: "bappo@example.com",
    });
    const authData = {
        user,  
        setUser,
    };
    return <AuthContext  value={authData}>
        {children}


    </AuthContext>
};
export default AuthProvider;