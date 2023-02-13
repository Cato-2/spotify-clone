import React from 'react'
import { useUserContext } from "../StateProvider";
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children}) => {
    const [ { user, token } ] = useUserContext();
    if (!user && !token) {
        return <div>Not logged in</div>
    } else {
        return children;
    }
}

export default ProtectedRoute