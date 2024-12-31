import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const isLogIn= location.pathname.includes('login')
    return (
        <div>
           {isLogIn || <NavBar />}
            <Outlet />
            {isLogIn || <Footer />}
        </div>
    );
};

export default Main;