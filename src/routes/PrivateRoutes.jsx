import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
//import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    // if(!user){
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Sorry...',
    //         text: 'You have to log in first to view details!',
    //       })
    // }
    console.log(location);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;