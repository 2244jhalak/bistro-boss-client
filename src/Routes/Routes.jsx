import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "../Routes/PrivateRoute.jsx";
import AdminRoute from "../Routes/AdminRoute.jsx"
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers.jsx";
import AddItems from "../pages/Dashboard/AddItems/AddItems.jsx";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems.jsx";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems.jsx";
import Payment from "../pages/Dashboard/Payment/Payment.jsx";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import UserHome from "../pages/Dashboard/UserHome/UserHome.jsx";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome.jsx";


  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/order/:category",
          element:<Order></Order>
        }
      ]
      
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // normal users route
        {
          path:"userHome",
          element:<UserHome></UserHome>
        },
        {
          path:"cart",
          element:<Cart></Cart>,
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        // admin routes
        {
          path:"adminHome",
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:"users",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:"manageItems",
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:"addItems",
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:"updateItem/:id",
          element:<AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
]);