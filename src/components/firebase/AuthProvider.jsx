import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.config';


 export const authContext =createContext (null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loding,setloding]=useState(true)

    const creatUser=(email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
      setloding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setloding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser)
            setuser(currentuser)
            setloding(false)
        })
        
        return ()=>{unSubscribe}
    },[])

const authInfo={
    user,
    loding,
    creatUser,
    login,
    logout
}


    return (
        <authContext.Provider value={authInfo}>
            {children}
            
        </authContext.Provider>
    );
};

export default AuthProvider;