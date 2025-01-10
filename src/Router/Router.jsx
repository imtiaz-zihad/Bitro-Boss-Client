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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRouter from "./AdminRouter";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


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
    element: <PrivateRouter><DashBoard /></PrivateRouter>,
    children: [

        // normal user routes
        {
            path: 'userHome',
            element: <UserHome />
        },
        {
            path: 'cart',
            element: <Cart />
        },
        {
            path: 'payment',
            element: <Payment />
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory />
        },


        // Admin only  routes
        {
            path: 'adminHome',
            element: <AdminRouter>
                <AdminHome />
            </AdminRouter>
        },
        {
            path: 'addItems',
            element: <AdminRouter>
                <AddItems />
            </AdminRouter>
        },
        {
            path: 'users',
            element: <AdminRouter>
                <AllUsers />
            </AdminRouter>
        },
        {
            path: 'manageItems',
            element: <AdminRouter>
                <ManageItems />
            </AdminRouter>
        },
        {
            path: 'UpdateItems/:id',
            element: <AdminRouter>
                <UpdateItem />
            </AdminRouter>,
            loader: ({params}) =>fetch(`http://localhost:5000/menu/${params.id}`)
        },
    ]
  }
]);
