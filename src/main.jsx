import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layOuts/root/Root';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/sign up/SignUp';
import AuthProvider from './fireBase/provider/AuthProvider';
import NewsDetails from './pages/newsDetails/NewsDetails';
import PrivateRoute from './privateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/news/:id',
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
