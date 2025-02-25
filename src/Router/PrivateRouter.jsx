/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../assets/hooks/useAuth";


const PrivateRouter = ({children}) => {

    const {user,loading} = useAuth();
    const location = useLocation();

    if (loading) {
       return <progress className="progress w-56"></progress> 
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
   
};

export default PrivateRouter;