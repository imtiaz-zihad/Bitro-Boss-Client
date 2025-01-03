import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRouter from "./PrivateRouter";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'menu',
            element: <Menu />
        },
        {
            path: 'order/:category',
            element: <Order />
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: 'signup',
            element: <SignUp/>
        },
        {
            path: 'secret',
            element: <PrivateRouter>
                <Secret/>
            </PrivateRouter>
        },
    ]
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    children: [
        {
            path: 'cart',
            element: <Cart />
        }
    ]
  }
]);
