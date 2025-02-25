/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../assets/hooks/useAdmin";
// import useAuth from "../assets/hooks/useAuth";


const AdminRouter = ({children}) => {
    // const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isAdminLoading) {
       return <progress className="progress w-56"></progress> 
    }
    if ( isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default AdminRouter;