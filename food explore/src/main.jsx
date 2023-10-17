import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Usuario from './assets/login/Usuario.jsx'
import Login from './assets/login/Login.jsx'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      errorElement: <ErrorPage/>,
      children: [
        // {
        //   path:"/usuario",
        //   element:<Usuario/>,
        // },
        // {
        //   path:"/login",
        //   element:<Login/>,
        // },

      ]
    },
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
