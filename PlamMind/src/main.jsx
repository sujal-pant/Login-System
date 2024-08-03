import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import NavbarLogin from './Components/NavbarLogin.jsx'
import { Navinside } from './Components/Navinside.jsx'
import SignUp from './Components/SignUp.jsx'
import ShowDetails from './Components/Showdetails.jsx'
import AfterLoginPage from './Components/AfterLoginPage.jsx'
import ResetPassword from './Components/Resetpassword.jsx'
const router = createBrowserRouter (
  [
    {
      path:"/",
      element:<><Navbar/><App/></>,
      
    },
    {
      path:"/login",
      element:<><Navinside/><NavbarLogin/></>,

    },
    {
      path:"/signup",
      element:<> <Navinside/><SignUp/></>,

    }
    ,
    {
      path:"/register",
      element:<><Navinside/><ShowDetails/></>
    },
    {
      path:"/dashboard",
      element:<><AfterLoginPage/></>

    },
    {
      path:"/reset",
      element:<><Navinside/><ResetPassword/></>

    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>

  )
