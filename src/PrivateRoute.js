import React from 'react'
import { useAuth } from './auth'
import {Navigate } from 'react-router-dom';

function PrivateRoute({children}){
    const {user}=useAuth();
    if(!user){
        return <Navigate to="/Login" />
    }

    return  children;
}


export default PrivateRoute;