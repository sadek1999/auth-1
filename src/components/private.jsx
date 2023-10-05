import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from './firebase/AuthProvider';

const Private = ({children}) => {
    const {user,loding}=useContext(authContext)
    if(loding){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Private;