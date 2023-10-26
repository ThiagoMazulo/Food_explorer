import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingIn from './assets/login/SingIn.jsx'
import ErrorPage from './ErrorPage.jsx'
import Usuario from './assets/login/Usuario.jsx'
import Admin from './components/admin/admin.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path:"/usuario",
          element:<Usuario/>,
        },
        {
          path:"/singIn",
          element:<SingIn/>,
        },
        {
          path:"/admin",
          element:<Admin/>,
        },

      ]
    },
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
